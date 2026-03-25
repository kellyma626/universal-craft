'use client';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';

const CartDrawer = () => {
  const { items, removeItem, updateQuantity, totalPrice, isOpen, closeCart } =
    useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-40" onClick={closeCart} />

      <div className="fixed right-0 top-0 h-full w-100 bg-white z-50 flex flex-col shadow-xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-craft-petal">
          <h2 className="font-georgia text-xl">My Cart</h2>
          <button onClick={closeCart} className="hover:text-craft-rose">
            <FaTimes size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
          {items.length === 0 ? (
            <p className="text-sm text-center mt-8">Your cart is empty!</p>
          ) : (
            items.map((item) => (
              <div
                key={`${item.id}-${item.color}-${item.size}`}
                className="flex gap-4"
              >
                <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-craft-petal">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col gap-1 flex-1">
                  <p className="text-sm font-georgia">{item.name}</p>
                  <p className="text-xs">
                    {item.color} — {item.size}
                  </p>
                  <p className="text-sm">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <select
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(
                          item.id,
                          item.color,
                          item.size,
                          Number(e.target.value)
                        )
                      }
                      className="border border-gray-200 rounded-lg px-2 py-1 text-xs"
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() => removeItem(item.id, item.color, item.size)}
                      className="text-xs hover:text-craft-rose"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="px-6 py-4 border-t border-craft-petal flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="font-georgia">Total</p>
            <p className="font-georgia">${totalPrice.toFixed(2)}</p>
          </div>
          <Link
            href="/checkout"
            onClick={closeCart}
            className="w-full bg-craft-rose text-white text-sm py-3 rounded-full text-center hover:opacity-90 transition-opacity"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
