'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, color: string, size: string) => void;
  updateQuantity: (
    id: string,
    color: string,
    size: string,
    quantity: number
  ) => void;
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (newItem: CartItem) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) =>
          i.id === newItem.id &&
          i.color === newItem.color &&
          i.size === newItem.size
      );
      if (existing) {
        return prev.map((i) =>
          i.id === newItem.id &&
          i.color === newItem.color &&
          i.size === newItem.size
            ? { ...i, quantity: i.quantity + newItem.quantity }
            : i
        );
      }
      return [...prev, newItem];
    });
  };

  const removeItem = (id: string, color: string, size: string) => {
    setItems((prev) =>
      prev.filter((i) => !(i.id === id && i.color === color && i.size === size))
    );
  };

  const updateQuantity = (
    id: string,
    color: string,
    size: string,
    quantity: number
  ) => {
    setItems((prev) =>
      prev.map((i) =>
        i.id === id && i.color === color && i.size === size
          ? { ...i, quantity }
          : i
      )
    );
  };

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        totalItems,
        totalPrice,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        clearCart: () => setItems([]),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
