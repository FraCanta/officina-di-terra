import type { Metadata } from "next";
import { Check } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { formatPrice, getProduct, localizeProduct, products } from "@/data/products";
import { getLocale } from "@/i18n/config";
import { AddToCart } from "./add-to-cart";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const locale = await getLocale();
  const product = getProduct((await params).slug);
  return { title: product ? localizeProduct(product, locale).shortName : "Product" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const baseProduct = getProduct((await params).slug);
  if (!baseProduct) notFound();
  const locale = await getLocale();
  const product = localizeProduct(baseProduct, locale);
  const t = locale === "it"
    ? {
        shipping: "Spedizione disponibile su tutto il territorio italiano.",
        sheet: "Scheda tecnica",
        wineTitle: "NERO, dalla vigna alla tavola.",
        oilTitle: `${product.shortName}, dalla terra alla tavola.`,
        wineAlt: "Dettaglio dell'etichetta del Nero d'Avola NERO",
        detailAlt: `Dettaglio di ${product.shortName}`,
        pending: "Immagine tecnica in preparazione",
        fields: ["Cultivar / varietà", "Zona di produzione", "Raccolta", "Lavorazione", "Profilo sensoriale", "Conservazione", "Abbinamenti"],
      }
    : {
        shipping: "Shipping is available throughout Italy.",
        sheet: "Technical details",
        wineTitle: "NERO, from vineyard to table.",
        oilTitle: `${product.shortName}, from the land to the table.`,
        wineAlt: "Detail of the NERO Nero d'Avola label",
        detailAlt: `Detail of ${product.shortName}`,
        pending: "Technical image coming soon",
        fields: ["Cultivar / variety", "Production area", "Harvest", "Processing", "Sensory profile", "Storage", "Pairings"],
      };

  return (
    <>
      <section className="site-container grid gap-12 py-12 md:py-20 lg:grid-cols-2 lg:gap-20">
        <div className="relative aspect-square overflow-hidden bg-[#ebe6db]">
          <Image alt={product.name} className="object-contain p-10 md:p-16" fill priority sizes="(max-width: 1024px) 100vw, 50vw" src={product.image} />
        </div>
        <div className="flex items-center">
          <div className="max-w-xl">
            <p className="eyebrow text-[#8a672f]">{product.category === "olio" ? (locale === "it" ? "olio EVO" : "EVO oil") : (locale === "it" ? "vino" : "wine")} · {product.volume}</p>
            <h1 className="mt-5 font-serif text-5xl leading-[0.95] md:text-7xl">{product.shortName}</h1>
            <p className="mt-7 text-2xl">{formatPrice(product.price, locale)}</p>
            <p className="mt-8 text-lg leading-8 text-black/60">{product.description}</p>
            <div className="my-9 grid gap-4 border-y border-black/10 py-7">
              {product.notes.map((note) => (
                <p className="flex items-center gap-3 text-sm" key={note}>
                  <Check className="text-[#8a672f]" size={17} />
                  {note}
                </p>
              ))}
            </div>
            <AddToCart product={baseProduct} />
            <p className="mt-5 text-xs leading-5 text-black/45">{t.shipping}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#eee9df] py-20 lg:py-28">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
            <div>
              <p className="eyebrow text-[#8a672f]">{t.sheet}</p>
              <h2 className="mt-5 font-serif text-5xl leading-[0.95] md:text-7xl">
                {product.technicalDetails ? t.wineTitle : t.oilTitle}
              </h2>
            </div>
            {product.technicalDetails ? (
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image alt={t.wineAlt} className="object-cover" fill sizes="(max-width: 1024px) 100vw, 65vw" src="/images/brand/nero-etichetta.webp" />
              </div>
            ) : product.detailImage ? (
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image alt={t.detailAlt} className="object-cover" fill sizes="(max-width: 1024px) 100vw, 65vw" src={product.detailImage} />
              </div>
            ) : (
              <div aria-label={t.pending} className="relative aspect-[16/9] overflow-hidden bg-[#dcd5c8]">
                <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-white/35 via-transparent to-[#10261c]/8" />
                <div className="absolute bottom-6 left-6 h-2 w-32 rounded-full bg-[#10261c]/10" />
              </div>
            )}
          </div>

          {product.technicalDetails ? (
            <dl className="mt-14 border-t border-black/15">
              {product.technicalDetails.map(([label, value]) => (
                <div className="grid gap-3 border-b border-black/10 py-5 sm:grid-cols-[220px_1fr]" key={label}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a672f]">{label}</dt>
                  <dd className="leading-7 text-black/62">{value}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <div className="mt-14 border-t border-black/15">
              {t.fields.map((label) => (
                <div className="grid gap-3 border-b border-black/10 py-5 sm:grid-cols-[220px_1fr]" key={label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a672f]">{label}</p>
                  <div className="flex animate-pulse items-center"><span className="h-2.5 w-full max-w-xl rounded-full bg-[#10261c]/10" /></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
