import Image from 'next/image';
import Link from 'next/link';

const BestsellerSection = () => {
  return (
    <section className="border-b border-craft-espresso flex min-h-125">
      <div className="relative w-1/2 min-h-125">
        <Image
          src="/bestseller3.png"
          alt="Foam roses in a heart box"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="w-1/2 bg-craft-petal flex flex-col justify-center px-16 gap-6">
        <h2 className="font-pinyon text-6xl text-craft-espresso">
          Our Bestseller
        </h2>
        <p className="font-georgia text-lg text-craft-espresso leading-relaxed">
          Shop our bestselling product.
          <br />
          Artificial foam roses.
          <br />
          Available in 13 colors and 2 sizes.
        </p>
        <Link
          href="/catalog"
          className="bg-craft-rose text-white text-sm px-6 py-2 rounded-full w-fit hover:opacity-90 transition-opacity"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default BestsellerSection;
