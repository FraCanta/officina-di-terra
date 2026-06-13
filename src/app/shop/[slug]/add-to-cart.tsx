"use client";

import type { Product } from "@/data/products";
import { useCart } from "@/components/cart-provider";

export function AddToCart({ product }: { product: Product }) {
  const { addItem } = useCart();
  return (
    <button className="button-primary w-full sm:w-auto" onClick={() => addItem(product)}>
      Aggiungi al carrello
    </button>
  );
}
