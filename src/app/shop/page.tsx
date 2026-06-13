import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";

export const metadata: Metadata = { title: "Shop" };

export default function ShopPage() {
  return (
    <>
      <section className="bg-[#173b2b] py-20 text-white md:py-28">
        <div className="site-container">
          <p className="eyebrow text-[#d5b982]">Direttamente dall&apos;azienda</p>
          <h1 className="mt-4 font-serif text-6xl md:text-8xl">Lo shop</h1>
          <p className="mt-6 max-w-xl leading-7 text-white/65">
            Olio extravergine biologico e Nero d&apos;Avola DOC. Spediamo in tutta Italia.
          </p>
        </div>
      </section>
      <section className="site-container py-20 md:py-28">
        <div className="mb-10 flex items-center justify-between border-b border-black/10 pb-5">
          <p className="text-sm text-black/50">{products.length} prodotti</p>
          <p className="eyebrow">Olio · Vino</p>
        </div>
        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
