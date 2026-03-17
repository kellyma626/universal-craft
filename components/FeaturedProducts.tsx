import { products } from '@/data/Products';
import ProductCard from './ProductCard';
import SectionHeader from './SectionHeader';

const FeaturedProducts = () => {
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <section className="bg-craft-petal">
      <SectionHeader
        title="Featured Products"
        subtitle="shop our featured products online."
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 sm:px-10 lg:px-20 py-8">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
