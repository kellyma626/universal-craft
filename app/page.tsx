import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import CustomerReviews from '@/components/CustomerReviews';
import BestsellerSection from '@/components/BestsellerSection';
import VisitOurStore from '@/components/VisitOurStore';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <CustomerReviews />
      <BestsellerSection />
      <VisitOurStore />
    </main>
  );
}
