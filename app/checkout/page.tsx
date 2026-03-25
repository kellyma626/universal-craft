import CheckoutForm from '@/components/CheckoutForm';

export default function CheckoutPage() {
  return (
    <main className="border-b border-craft-espresso px-6 sm:px-10 lg:px-20 py-12 bg-craft-cream min-h-screen">
      <h1 className="font-georgia text-3xl mb-8">Checkout</h1>
      <CheckoutForm />
    </main>
  );
}
