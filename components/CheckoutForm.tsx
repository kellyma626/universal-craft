'use client';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

const CheckoutForm = () => {
  const { items, totalPrice } = useCart();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass =
    'bg-white border-2 border-craft-petal rounded-xl px-4 py-3 text-sm w-full';

  const isFormValid =
    form.fullName &&
    form.email &&
    form.address1 &&
    form.city &&
    form.state &&
    form.zip;

  return (
    <div className="flex gap-8">
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h2 className="font-georgia text-xl">Shipping Information</h2>
          <input
            name="fullName"
            placeholder="Full name*"
            value={form.fullName}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            name="email"
            placeholder="Email address*"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
          <div className="flex gap-4">
            <input
              name="address1"
              placeholder="Address 1*"
              value={form.address1}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              name="address2"
              placeholder="Address 2"
              value={form.address2}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div className="flex gap-4">
            <input
              name="city"
              placeholder="City*"
              value={form.city}
              onChange={handleChange}
              className={inputClass}
            />
            <select
              name="state"
              value={form.state}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, state: e.target.value }))
              }
              className={inputClass}
            >
              <option value="">State*</option>
              {[
                'AL',
                'AK',
                'AZ',
                'AR',
                'CA',
                'CO',
                'CT',
                'DE',
                'FL',
                'GA',
                'HI',
                'ID',
                'IL',
                'IN',
                'IA',
                'KS',
                'KY',
                'LA',
                'ME',
                'MD',
                'MA',
                'MI',
                'MN',
                'MS',
                'MO',
                'MT',
                'NE',
                'NV',
                'NH',
                'NJ',
                'NM',
                'NY',
                'NC',
                'ND',
                'OH',
                'OK',
                'OR',
                'PA',
                'RI',
                'SC',
                'SD',
                'TN',
                'TX',
                'UT',
                'VT',
                'VA',
                'WA',
                'WV',
                'WI',
                'WY',
              ].map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <input
              name="zip"
              placeholder="Postal Code*"
              value={form.zip}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        <button
          disabled={!isFormValid}
          className={`text-white text-sm px-8 py-3 rounded-full w-fit transition-opacity ${
            isFormValid
              ? 'bg-craft-rose hover:opacity-90'
              : 'bg-[#5F5F5F] cursor-not-allowed'
          }`}
        >
          Checkout ${totalPrice.toFixed(2)}
        </button>
      </div>

      <div className="w-96 flex flex-col gap-4">
        <h2 className="font-georgia text-xl">Order Summary</h2>
        {items.map((item) => (
          <div
            key={`${item.id}-${item.color}-${item.size}`}
            className="flex gap-3 items-center"
          >
            <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-craft-petal">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <p className="text-sm">{item.name}</p>
              <p className="text-xs">
                {item.color} — {item.size}
              </p>
              <p className="text-xs">Qty: {item.quantity}</p>
            </div>
            <p className="text-sm">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
        <div className="border-t border-craft-petal pt-4 flex justify-between">
          <p className="font-georgia">Total</p>
          <p className="font-georgia">${totalPrice.toFixed(2)}</p>
        </div>
        <p className="text-xs">Shipping and taxes calculated at payment</p>
      </div>
    </div>
  );
};

export default CheckoutForm;
