"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Product } from "@/data/products";

export function HeroProductShowcase({ products }: { products: Product[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = products[activeIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % products.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, [products.length]);

  return (
    <div className="hero-product-showcase absolute bottom-0 right-0 w-[min(30vw,300px)]">
      <div className="relative h-[min(48vw,500px)]">
        {products.map((product, index) => (
          <Image
            alt={product.name}
            className={`absolute inset-0 h-full w-full object-contain mix-blend-multiply drop-shadow-[0_38px_34px_rgba(0,0,0,0.46)] transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              index === activeIndex
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-8 scale-95 opacity-0"
            }`}
            height={768}
            key={product.slug}
            priority={index === 0}
            sizes="310px"
            src={product.image}
            width={768}
          />
        ))}
      </div>

      <div className="mt-2 border-t border-[#dbbd84]/40 pt-4 text-center">
        <p className="eyebrow text-[#dbbd84]">{activeProduct.shortName}</p>
        <p className="mt-2 text-sm text-white/45">{activeProduct.volume}</p>
        <div className="mt-5 flex justify-center gap-2">
          {products.map((product, index) => (
            <button
              aria-label={`Mostra ${product.shortName}`}
              className={`h-1.5 rounded-full transition-all ${
                index === activeIndex ? "w-8 bg-[#dbbd84]" : "w-3 bg-white/25"
              }`}
              key={product.slug}
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
