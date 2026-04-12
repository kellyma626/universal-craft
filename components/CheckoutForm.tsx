'use client';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { FaGoogle } from 'react-icons/fa';
import StripePaymentForm from '@/components/StripePaymentForm';

const CheckoutForm = () => {
  const { user, signIn, signUp, signInWithGoogle, logOut } = useAuth();
  const [authMode, setAuthMode] = useState<'guest' | 'signin' | 'signup'>(
    'guest'
  );
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const { items, totalPrice } = useCart();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  });

  const [showPayment, setShowPayment] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass =
    'bg-white border-2 border-craft-petal rounded-xl px-4 py-3 text-sm w-full';

  const isFormValid =
    form.fullName &&
    form.email &&
    form.address1 &&
    form.city &&
    form.state &&
    form.zip;

  return (
    <div className="flex gap-8">
      <div className="flex-1 flex flex-col gap-6">
        {/* Auth section */}
        {!user ? (
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <button
                onClick={() => setAuthMode('guest')}
                className={`text-sm px-4 py-2 rounded-full border transition-colors ${
                  authMode === 'guest'
                    ? 'bg-craft-espresso text-white border-craft-espresso'
                    : 'border-craft-petal hover:border-craft-espresso'
                }`}
              >
                Continue As A Guest
              </button>
              <button
                onClick={() => setAuthMode('signin')}
                className={`text-sm px-4 py-2 rounded-full border transition-colors ${
                  authMode === 'signin'
                    ? 'bg-craft-espresso text-white border-craft-espresso'
                    : 'border-craft-petal hover:border-craft-espresso'
                }`}
              >
                Sign in
              </button>
              <button
                onClick={() => setAuthMode('signup')}
                className={`text-sm px-4 py-2 rounded-full border transition-colors ${
                  authMode === 'signup'
                    ? 'bg-craft-espresso text-white border-craft-espresso'
                    : 'border-craft-petal hover:border-craft-espresso'
                }`}
              >
                Create account
              </button>
            </div>

            {authMode !== 'guest' && (
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Email address"
                  value={authEmail}
                  onChange={(e) => setAuthEmail(e.target.value)}
                  className={inputClass}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={authPassword}
                  onChange={(e) => setAuthPassword(e.target.value)}
                  className={inputClass}
                />
                {authError && (
                  <p className="text-xs text-red-500">{authError}</p>
                )}
                <button
                  onClick={async () => {
                    setAuthError('');
                    try {
                      if (authMode === 'signin')
                        await signIn(authEmail, authPassword);
                      else await signUp(authEmail, authPassword);
                    } catch (err: unknown) {
                      if (err instanceof Error) setAuthError(err.message);
                    }
                  }}
                  className="bg-craft-espresso text-white text-sm px-6 py-2 rounded-full w-fit hover:opacity-90"
                >
                  {authMode === 'signin' ? 'Sign in' : 'Create account'}
                </button>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-craft-petal" />
                  <p className="text-xs">or</p>
                  <div className="flex-1 h-px bg-craft-petal" />
                </div>
                <button
                  onClick={async () => {
                    try {
                      await signInWithGoogle();
                    } catch (err: unknown) {
                      if (err instanceof Error) setAuthError(err.message);
                    }
                  }}
                  className="flex items-center justify-center gap-2 bg-white border-2 border-craft-petal text-sm px-6 py-2 rounded-full hover:border-craft-rose transition-colors"
                >
                  <FaGoogle size={14} />
                  Continue with Google
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border-2 border-craft-petal">
            <p className="text-sm">
              Signed in as <span className="font-georgia">{user.email}</span>
            </p>
            <button
              onClick={logOut}
              className="text-xs hover:text-craft-rose hover:underline"
            >
              Sign out
            </button>
          </div>
        )}
        <div className="flex flex-col gap-4">
          <h2 className="font-georgia text-xl">Shipping Information</h2>
          <input
            name="fullName"
            placeholder="Full name*"
            value={form.fullName}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            name="email"
            placeholder="Email address*"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
          <div className="flex gap-4">
            <input
              name="address1"
              placeholder="Address 1*"
              value={form.address1}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              name="address2"
              placeholder="Address 2"
              value={form.address2}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div className="flex gap-4">
            <input
              name="city"
              placeholder="City*"
              value={form.city}
              onChange={handleChange}
              className={inputClass}
            />
            <select
              name="state"
              value={form.state}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, state: e.target.value }))
              }
              className={inputClass}
            >
              <option value="">State*</option>
              {[
                'AL',
                'AK',
                'AZ',
                'AR',
                'CA',
                'CO',
                'CT',
                'DE',
                'FL',
                'GA',
                'HI',
                'ID',
                'IL',
                'IN',
                'IA',
                'KS',
                'KY',
                'LA',
                'ME',
                'MD',
                'MA',
                'MI',
                'MN',
                'MS',
                'MO',
                'MT',
                'NE',
                'NV',
                'NH',
                'NJ',
                'NM',
                'NY',
                'NC',
                'ND',
                'OH',
                'OK',
                'OR',
                'PA',
                'RI',
                'SC',
                'SD',
                'TN',
                'TX',
                'UT',
                'VT',
                'VA',
                'WA',
                'WV',
                'WI',
                'WY',
              ].map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <input
              name="zip"
              placeholder="Postal Code*"
              value={form.zip}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        {!showPayment ? (
          <button
            disabled={!isFormValid}
            onClick={() => setShowPayment(true)}
            className={`text-white text-sm px-8 py-3 rounded-full w-fit transition-opacity ${
              isFormValid
                ? 'bg-craft-rose hover:opacity-90'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Continue to Payment
          </button>
        ) : (
          <StripePaymentForm shippingInfo={form} />
        )}
      </div>

      <div className="w-96 flex flex-col gap-4">
        <h2 className="font-georgia text-xl">Order Summary</h2>
        {items.map((item) => (
          <div
            key={`${item.id}-${item.color}-${item.size}`}
            className="flex gap-3 items-center"
          >
            <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-craft-petal">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <p className="text-sm">{item.name}</p>
              <p className="text-xs">
                {item.color} — {item.size}
              </p>
              <p className="text-xs">Qty: {item.quantity}</p>
            </div>
            <p className="text-sm">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
        <div className="border-t border-craft-petal pt-4 flex justify-between">
          <p className="font-georgia">Total</p>
          <p className="font-georgia">${totalPrice.toFixed(2)}</p>
        </div>
        <p className="text-xs">Shipping and taxes calculated at payment</p>
      </div>
    </div>
  );
};

export default CheckoutForm;
