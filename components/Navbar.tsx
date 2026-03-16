'use client';
import Link from 'next/link';
import { navLinks } from '@/data/Navbar';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full">
      {/* Top banner */}
      <div className="bg-craft-espresso text-white text-center text-xs py-2 tracking-widest">
        FREE SHIPPING ON ORDERS $100 AND OVER
      </div>

      {/* Main navbar */}
      <div className="bg-craft-pearl border-b border-craft-petal px-6 sm:px-10 lg:px-20 py-4">
        <div className="flex items-center justify-between">
          {/* Left */}
          <span className="text-xs text-craft-espresso hover:text-craft-rose cursor-pointer">
            Visit Our Store for More
          </span>

          {/* Logo */}
          <Link href="/">
            <h1 className="font-pinyon text-3xl text-craft-espresso tracking-wide">
              Universal Craft
            </h1>
          </Link>

          {/* Right */}
          <span className="text-xs text-craft-espresso hover:text-craft-rose cursor-pointer">
            View My Cart 🛒
          </span>
        </div>

        {/* Nav links */}
        <div className="flex justify-center gap-8 mt-3">
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
