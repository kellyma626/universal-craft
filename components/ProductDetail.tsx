'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/data/Products';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';

const ProductDetail = ({ product }: { product: Product }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const isSoldOut = product.badge === 'SOLD OUT';

  const prev = () =>
    setCurrentImage((i) => (i === 0 ? product.images.length - 1 : i - 1));
  const next = () =>
    setCurrentImage((i) => (i === product.images.length - 1 ? 0 : i + 1));

  const { addItem, openCart } = useCart();

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert('Please select a color and size!');
      return;
    }
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      color: selectedColor,
      size: selectedSize,
      quantity,
    });
    openCart();
  };

  return (
    <div className="flex gap-12">
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          {product.images.map((img, i) => (
            <div
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 cursor-pointer ${
                currentImage === i ? 'border-craft-rose' : 'border-craft-petal'
              }`}
            >
              <Image
                src={img}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="bg-white relative w-125 h-125 rounded-2xl overflow-hidden border-2 border-craft-petal">
          <Image
            src={product.images[currentImage]}
            alt={product.name}
            fill
            className="object-contain"
          />
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white cursor-pointer"
          >
            <FaChevronLeft size={14} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white cursor-pointer"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <h1 className="font-georgia text-2xl mt-5">{product.name}</h1>
          <p className="text-2xl mt-1 mb-3">${product.price.toFixed(2)}</p>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm">Primary color</label>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="bg-white border-2 border-craft-petal rounded-xl px-4 py-3 text-sm w-96"
          >
            <option value="">Select a color</option>
            {product.colors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm">Size</label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="bg-white border-2 border-craft-petal rounded-xl px-4 py-3 text-sm w-96"
          >
            <option value="">Select a size</option>
            {product.sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm">Quantity</label>
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="bg-white border-2 border-craft-petal rounded-xl px-4 py-3 text-sm w-96"
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <p className="text-sm my-3">Product Details</p>
          <ul className="list-disc list-outside flex flex-col ml-3">
            {product.details.map((detail, i) => (
              <li key={i} className="text-sm">
                {detail}
              </li>
            ))}
          </ul>
        </div>

        {product.type === 'online' && (
          <button
            onClick={handleAddToCart}
            disabled={isSoldOut}
            className={`w-96 px-12 py-3 mt-5 rounded-full text-white text-sm transition-opacity ${
              isSoldOut
                ? 'bg-[#5F5F5F] cursor-not-allowed'
                : 'bg-craft-rose hover:opacity-90'
            }`}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
