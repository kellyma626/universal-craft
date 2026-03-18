import Link from 'next/link';

const Hero = () => {
  return (
    <section
      className="border-b border-craft-espresso w-full h-screen bg-cover bg-center flex items-center justify-center 
      -mt-15"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="text-center">
        <h1 className="font-georgia text-6xl mb-4">Universal Craft, Inc.</h1>
        <p className="font-georgia text-xl mb-2">
          Decor and Crafts for Every Occasion
        </p>
        <p className="text-sm mb-8">
          Weddings, quinceañeras, baby showers, and more!
        </p>
        <Link
          href="/catalog"
          className="bg-craft-rose text-white px-8 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
        >
          View Full Catalog
        </Link>
      </div>
    </section>
  );
};

export default Hero;
