import Image from 'next/image';
import Link from 'next/link';

const VisitOurStore = () => {
  return (
    <section className="border-b border-craft-espresso flex min-h-125">
      <div className="w-1/2 bg-craft-cream flex flex-col justify-center px-16 gap-6">
        <h2 className="font-pinyon text-5xl">Visit Our Store</h2>
        <p className="font-georgia text-lg leading-relaxed">
          Shop in store.
          <br />
          Visit us for cake and cupcake stands, metal vases,
          <br />
          centerpieces, and more.
        </p>
        <Link
          href="https://maps.google.com/?q=Universal+Craft+Los+Angeles"
          target="_blank"
          className=" bg-craft-rose text-white text-sm px-6 py-2 rounded-full w-fit hover:opacity-90 transition-opacity"
        >
          405 San Pedro St, Los Angeles, CA 90013
        </Link>
        <p className="text-xs">
          Monday - Saturday, 9am - 4:30pm
          <br />
          Business hours may vary.
        </p>
      </div>

      <div className="relative w-1/2 min-h-125">
        <Image
          src="/bday2.png"
          alt="Birthday party setup"
          fill
          className="object-cover object-center"
        />
      </div>
    </section>
  );
};

export default VisitOurStore;
