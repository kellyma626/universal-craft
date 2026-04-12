'use client';
import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const PaymentForm = ({
  shippingInfo,
}: {
  shippingInfo: Record<string, string>;
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const { items, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  console.log('stripe:', stripe, 'elements:', elements);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('handleSubmit called');
    if (!stripe || !elements) {
      console.log('stripe or elements is null, returning');
      return;
    }

    setLoading(true);
    setError('');

    console.log('Confirming payment...');

    const { error: stripeError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/order-confirmed`,
      },
      redirect: 'if_required',
    });

    console.log('Payment confirmed, stripeError:', stripeError);

    if (stripeError) {
      setError(stripeError.message ?? 'Payment failed');
      setLoading(false);
      return;
    }

    console.log('Saving to Firestore...');

    await addDoc(collection(db, 'orders'), {
      userId: user?.uid ?? 'guest',
      email: shippingInfo.email,
      items,
      total: totalPrice,
      shipping: shippingInfo,
      createdAt: new Date(),
    });

    console.log('Saved! Clearing cart...');
    clearCart();
    window.location.replace('/order-confirmed');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <PaymentElement />
      {error && <p className="text-xs text-red-500">{error}</p>}
      <button
        type="submit"
        onClick={() =>
          console.log('button clicked, stripe:', stripe, 'loading:', loading)
        }
        disabled={!stripe || loading}
        className={`text-white text-sm px-8 py-3 rounded-full w-fit transition-opacity ${
          loading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-craft-rose hover:opacity-90'
        }`}
      >
        {loading ? 'Processing...' : `Pay $${totalPrice.toFixed(2)}`}
      </button>
    </form>
  );
};

const StripePaymentForm = ({
  shippingInfo,
}: {
  shippingInfo: Record<string, string>;
}) => {
  const { totalPrice } = useCart();
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: totalPrice }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [totalPrice]);

  if (!clientSecret) return <p className="text-sm">Loading payment form...</p>;

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <PaymentForm shippingInfo={shippingInfo} />
    </Elements>
  );
};

export default StripePaymentForm;
