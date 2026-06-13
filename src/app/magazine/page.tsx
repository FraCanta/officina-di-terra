import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MagazineCard } from "@/components/magazine-card";
import { articles } from "@/data/articles";
import { getLocale } from "@/i18n/config";

export const metadata: Metadata = { title: "Magazine" };

export default async function MagazinePage() {
  const locale = await getLocale();
  const lead = articles[0];
  const copy = {
    it: {
      eyebrow: "Magazine",
      title: "Storie dalla terra.",
      intro:
        "Appunti di agricoltura, cultura mediterranea e prodotti nati tra Realmonte e Agrigento.",
      latest: "In evidenza",
      read: "Leggi l'articolo",
      all: "Tutti gli articoli",
    },
    en: {
      eyebrow: "Magazine",
      title: "Stories from the land.",
      intro:
        "Notes on farming, Mediterranean culture and products born between Realmonte and Agrigento.",
      latest: "Featured",
      read: "Read the article",
      all: "All articles",
    },
  }[locale];

  return (
    <>
      <section className="site-container grid gap-10 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:py-28">
        <div>
          <p className="eyebrow text-[#8a672f]">{copy.eyebrow}</p>
          <h1 className="mt-5 font-serif text-6xl leading-[0.9] md:text-9xl">{copy.title}</h1>
        </div>
        <p className="max-w-xl text-lg leading-8 text-black/60">{copy.intro}</p>
      </section>

      <section className="grid bg-[#10261c] text-white lg:grid-cols-2">
        <div className="relative min-h-[560px]">
          <Image
            alt={lead.title[locale]}
            className="object-cover"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            src={lead.cover}
          />
        </div>
        <div className="flex items-center px-8 py-20 md:px-16 lg:px-20">
          <div className="max-w-xl">
            <p className="eyebrow text-[#d5b982]">{copy.latest}</p>
            <h2 className="mt-5 font-serif text-5xl leading-[0.95] md:text-7xl">
              {lead.title[locale]}
            </h2>
            <p className="mt-7 leading-7 text-white/65">{lead.excerpt[locale]}</p>
            <Link className="button-light mt-9" href={`/magazine/${lead.slug}`}>
              {copy.read}
            </Link>
          </div>
        </div>
      </section>

      <section className="site-container py-24 lg:py-32">
        <p className="eyebrow mb-10 text-[#8a672f]">{copy.all}</p>
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {articles.slice(1).map((article) => (
            <MagazineCard article={article} key={article.slug} locale={locale} />
          ))}
        </div>
      </section>
    </>
  );
}
