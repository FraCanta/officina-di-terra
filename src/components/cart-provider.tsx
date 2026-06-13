"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/data/products";

type CartItem = Product & { quantity: number };
type CartContextValue = {
  items: CartItem[];
  count: number;
  total: number;
  addItem: (product: Product) => void;
  removeItem: (slug: string) => void;
  clearCart: () => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const stored = window.localStorage.getItem("officina-cart");
      if (stored) setItems(JSON.parse(stored) as CartItem[]);
      setReady(true);
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (ready) {
      window.localStorage.setItem("officina-cart", JSON.stringify(items));
    }
  }, [items, ready]);

  const value = useMemo(
    () => ({
      items,
      count: items.reduce((sum, item) => sum + item.quantity, 0),
      total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      addItem: (product: Product) => {
        setItems((current) => {
          const existing = current.find((item) => item.slug === product.slug);
          if (existing) {
            return current.map((item) =>
              item.slug === product.slug
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            );
          }
          return [...current, { ...product, quantity: 1 }];
        });
        setIsOpen(true);
      },
      removeItem: (slug: string) =>
        setItems((current) => current.filter((item) => item.slug !== slug)),
      clearCart: () => setItems([]),
      isOpen,
      setIsOpen,
    }),
    [isOpen, items],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
