'use client';
import { useState } from 'react';
import { reviews } from '@/data/Reviews';
import SectionHeader from './SectionHeader';
import Link from 'next/link';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CustomerReviews = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? reviews.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === reviews.length - 1 ? 0 : i + 1));

  const review = reviews[current];

  return (
    <section className="border-b border-craft-espresso bg-white">
      <SectionHeader
        title="Customer Reviews"
        subtitle={
          <>
            read hundreds of five-star ratings on our{' '}
            <Link
              href="https://www.etsy.com/shop/UniversalCraftUS"
              target="_blank"
              className="underline hover:text-craft-rose"
            >
              Etsy shop
            </Link>
            !
          </>
        }
      />
      <div className="flex items-center justify-between px-6 sm:px-10 lg:px-20 py-16">
        <button
          onClick={prev}
          className="hover:text-craft-rose hover:cursor-pointer"
        >
          <FaChevronLeft size={20} />
        </button>

        <div className="flex flex-col gap-4 w-full max-w-2xl text-center h-48 justify-center">
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="text-craft-rose" size={16} />
              ))}
            </div>
            <p className="text-xs uppercase tracking-widest">
              {review.product}
            </p>
          </div>
          <p className="font-georgia leading-relaxed line-clamp-4">
            &ldquo;{review.text}&rdquo;
          </p>
          <p className="text-sm">— {review.name}</p>
        </div>

        <button
          onClick={next}
          className="hover:text-craft-rose hover:cursor-pointer"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default CustomerReviews;
