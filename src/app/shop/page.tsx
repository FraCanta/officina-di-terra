import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";
import { getLocale } from "@/i18n/config";

export const metadata: Metadata = { title: "Shop" };

export default async function ShopPage() {
  const locale = await getLocale();
  const t = locale === "it"
    ? {
        eyebrow: "Direttamente dall'azienda",
        title: "Lo shop",
        intro: "Olio extravergine biologico e Nero d'Avola DOC. Spediamo in tutta Italia.",
        count: "prodotti",
        categories: "Olio · Vino",
      }
    : {
        eyebrow: "Directly from our estate",
        title: "The shop",
        intro: "Organic EVO oil and Sicilia DOC Nero d'Avola. We ship throughout Italy.",
        count: "products",
        categories: "EVO oil · Wine",
      };

  return (
    <>
      <section className="bg-[#173b2b] py-20 text-white md:py-28">
        <div className="site-container">
          <p className="eyebrow text-[#d5b982]">{t.eyebrow}</p>
          <h1 className="mt-4 font-serif text-6xl md:text-8xl">{t.title}</h1>
          <p className="mt-6 max-w-xl leading-7 text-white/65">{t.intro}</p>
        </div>
      </section>
      <section className="site-container py-20 md:py-28">
        <div className="mb-10 flex items-center justify-between border-b border-black/10 pb-5">
          <p className="text-sm text-black/50">{products.length} {t.count}</p>
          <p className="eyebrow">{t.categories}</p>
        </div>
        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      </section>
    </>
  );
}
