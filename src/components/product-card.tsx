"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";
import { useCart } from "./cart-provider";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <article className="group">
      <Link
        className="relative block aspect-[4/5] overflow-hidden bg-[#ebe6db]"
        href={`/shop/${product.slug}`}
      >
        <Image
          alt={product.name}
          className="object-contain p-8 transition duration-700 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          src={product.image}
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[10px] uppercase tracking-[0.2em] backdrop-blur">
          {product.category}
        </span>
      </Link>
      <div className="flex items-start justify-between gap-4 pt-5">
        <div>
          <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-black/45">
            {product.volume}
          </p>
          <Link className="font-serif text-2xl leading-tight" href={`/shop/${product.slug}`}>
            {product.shortName}
          </Link>
          <p className="mt-2 text-sm text-black/60">{formatPrice(product.price)}</p>
        </div>
        <button
          aria-label={`Aggiungi ${product.shortName} al carrello`}
          className="grid size-11 shrink-0 place-items-center rounded-full border border-black/15 transition hover:bg-[#173b2b] hover:text-white"
          onClick={() => addItem(product)}
        >
          <Plus size={18} />
        </button>
      </div>
    </article>
  );
}
