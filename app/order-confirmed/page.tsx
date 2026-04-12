import Link from 'next/link';

export default function OrderConfirmed() {
  return (
    <main className="min-h-screen bg-craft-pearl flex items-center justify-center">
      <div className="text-center flex flex-col gap-4 items-center">
        <h1 className="font-georgia text-4xl">Thank you for your order!</h1>
        <p className="text-sm">
          You will receive a confirmation email shortly.
        </p>
        <Link
          href="/"
          className="bg-craft-rose text-white text-sm px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          Continue Shopping
        </Link>
      </div>
    </main>
  );
}
