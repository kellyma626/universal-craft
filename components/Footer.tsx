import Link from 'next/link';
import { navLinks } from '@/data/Navbar';

const Footer = () => {
  return (
    <footer>
      <div className="bg-craft-pearl px-6 sm:px-10 lg:px-20 py-12">
        <h2 className="font-dmSerif text-7xl font-semibold italic leading-none -mx-3">
          Universal Craft
        </h2>
        <div className="flex gap-8 mt-6">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="text-xs tracking-widest font-medium hover:underline"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-craft-espresso text-white px-6 sm:px-10 lg:px-20 py-4 flex items-center justify-between">
        <div className="flex gap-8">
          <Link href="/terms" className="text-xs hover:underline">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="text-xs hover:underline">
            Privacy Policy
          </Link>
        </div>
        <p className="text-xs">
          © {new Date().getFullYear()} Universal Craft. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
