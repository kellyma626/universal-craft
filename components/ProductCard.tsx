import Image from 'next/image';
import { Product } from '@/data/Products';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
  showAddToCart?: boolean;
}

const ProductCard = ({ product, showAddToCart = true }: ProductCardProps) => {
  const isSoldOut = product.badge === 'SOLD OUT';

  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-2xl p-4 flex flex-col gap-3 shadow-sm">
        <div className="relative w-full h-48 rounded-xl overflow-hidden">
          {product.badge && (
            <span
              className={`absolute top-2 right-2 z-10 text-white text-xs px-3 py-1 rounded-full ${isSoldOut ? 'bg-[#5F5F5F]' : 'bg-craft-rose'}`}
            >
              {product.badge}
            </span>
          )}
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-sm">{product.name}</p>
          <p className="text-sm">${product.price.toFixed(2)}</p>
        </div>

        {showAddToCart && (
          <button
            disabled={isSoldOut}
            className={`w-full py-2 rounded-full text-white text-sm transition-opacity ${
              isSoldOut
                ? 'bg-[#5F5F5F] cursor-not-allowed'
                : 'bg-craft-rose hover:opacity-90'
            }`}
          >
            Add to Cart
          </button>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
