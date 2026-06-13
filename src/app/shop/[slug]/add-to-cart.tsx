"use client";

import type { Product } from "@/data/products";
import { useCart } from "@/components/cart-provider";
import { useLanguage } from "@/components/language-provider";

export function AddToCart({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { t } = useLanguage();
  return (
    <button className="button-primary w-full sm:w-auto" onClick={() => addItem(product)}>
      {t.addToCart}
    </button>
  );
}
