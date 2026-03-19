import { products } from '@/data/Products';
import ProductCard from './ProductCard';
import SectionHeader from './SectionHeader';
import Link from 'next/link';

const InStoreProducts = () => {
  const inStoreProducts = products.filter((p) => p.type === 'inStore');

  return (
    <section className="border-b border-craft-espresso bg-craft-petal">
      <SectionHeader
        title="In-store Products"
        subtitle={
          <>
            shop for more{' '}
            <Link
              href="https://maps.google.com/?q=Universal+Craft+Los+Angeles"
              target="_blank"
              className="underline hover:text-craft-rose"
            >
              in store
            </Link>
            !
          </>
        }
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 sm:px-10 lg:px-20 py-8">
        {inStoreProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            showAddToCart={false}
          />
        ))}
      </div>
    </section>
  );
};

export default InStoreProducts;
