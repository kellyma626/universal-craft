import { products } from '@/data/Products';
import { notFound } from 'next/navigation';
import ProductDetail from '@/components/ProductDetail';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) notFound();

  return (
    <main className="border-b border-craft-espresso px-6 sm:px-10 lg:px-20 py-12 bg-craft-cream min-h-screen">
      <ProductDetail product={product} />
    </main>
  );
}
