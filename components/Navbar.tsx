'use client';
import Link from 'next/link';
import { navLinks } from '@/data/Navbar';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="bg-craft-espresso text-white text-center text-xs py-2 tracking-widest">
        FREE SHIPPING ON ORDERS $100 AND OVER!
      </div>
      <div className="border-b border-craft-espresso px-6 sm:px-10 lg:px-20 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="https://maps.google.com/?q=Universal+Craft+Los+Angeles"
            target="_blank"
            className="flex items-center gap-2 text-xs text-craft-espresso hover:text-craft-rose cursor-pointer"
          >
            <FaHeart className="text-lg" />
            Visit Our Store for More
          </Link>
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <h1 className="font-georgia text-3xl text-craft-espresso tracking-wide hover:text-craft-rose cursor-pointer">
              Universal Craft
            </h1>
          </Link>
          <button className="flex items-center gap-2 text-xs text-craft-espresso hover:text-craft-rose cursor-pointer">
            <FaShoppingCart className="text-lg" />
            View My Cart
          </button>
        </div>
        <div className="flex justify-center gap-8 mt-5">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="text-xs tracking-widest text-craft-espresso hover:text-craft-rose"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
