'use client';
import Link from 'next/link';
import { navLinks } from '@/data/Navbar';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const { openCart, totalItems } = useCart();
  return (
    <nav className="sticky top-0 z-50 w-full bg-craft-pearl">
      <div className="bg-craft-espresso text-white text-center text-xs py-2 tracking-widest">
        FREE SHIPPING ON ORDERS $100 AND OVER!
      </div>
      <div className="border-b border-craft-espresso px-6 sm:px-10 lg:px-20 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="https://maps.google.com/?q=Universal+Craft+Los+Angeles"
            target="_blank"
            className="flex items-center gap-2 text-xs hover:underline cursor-pointer"
          >
            <FaHeart className="text-lg" />
            Visit Our Store
          </Link>
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="absolute left-1/2 -translate-x-1/2"
          >
            <h1 className="font-pinyon text-3xl tracking-wide cursor-pointer">
              Universal Craft
            </h1>
          </Link>
          <button
            onClick={openCart}
            className="flex items-center gap-2 text-xs hover:underline cursor-pointer"
          >
            <FaShoppingCart className="text-lg" />
            View My Cart {totalItems > 0 && `(${totalItems})`}
          </button>
        </div>
        <div className="flex justify-center gap-8 mt-5">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="text-xs tracking-widest hover:underline font-medium"
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
