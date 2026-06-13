import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Droplets, HandPlatter, Leaf, MapPin, Quote, Sparkles, Sun } from "lucide-react";
import { LuxuryMotion } from "@/components/luxury-motion";
import { MagazineCard } from "@/components/magazine-card";
import { ProductCard } from "@/components/product-card";
import { articles } from "@/data/articles";
import { featuredProducts } from "@/data/products";
import { getLocale } from "@/i18n/config";

export default async function Home() {
  const locale = await getLocale();
  const en = locale === "en";
  const magazineCopy = {
    it: {
      eyebrow: "Magazine",
      title: "Storie dalla terra.",
      copy: "Territorio, cultura dell'olio e vita agricola. Il racconto di Officina di Terra continua oltre i prodotti, stagione dopo stagione.",
      link: "Tutti gli articoli",
    },
    en: {
      eyebrow: "Magazine",
      title: "Stories from the land.",
      copy: "Territory, olive oil culture and farm life. The Officina di Terra story continues beyond its products, season after season.",
      link: "All articles",
    },
  }[locale];

  return (
    <>
      <LuxuryMotion />
      <section className="luxury-hero hero-monochrome relative min-h-[calc(100svh-5rem)] overflow-hidden bg-[#10261c] text-white">
        <Image
          alt=""
          aria-hidden
          className="hero-engraving absolute -bottom-[8%] right-[-34%] h-auto w-[125vw] max-w-none opacity-65 sm:-bottom-[18%] sm:right-[-14%] sm:w-[92vw] lg:-bottom-[28%] lg:right-[-5%] lg:w-[min(72vw,900px)] lg:opacity-55"
          height={1536}
          priority
          src="/images/olive-engraving-gold.png"
          width={1024}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(194,151,79,0.13),transparent_35%)]" />

        <div className="site-container relative flex min-h-[calc(100svh-5rem)] items-center py-16 lg:py-20">
          <div className="hero-copy relative z-10 max-w-[880px]">
            <div className="mb-8 flex items-center gap-5">
              <span className="h-px w-12 bg-[#c79b52]" />
              <h1 className="eyebrow text-[#dbbd84]">
                {en ? "Officina di Terra agricultural estate" : "Azienda agricola Officina di Terra"}
              </h1>
            </div>
            <h2 className="hero-heading font-serif text-[clamp(3.8rem,8vw,8.1rem)] leading-[0.84] tracking-[-0.055em]">
              {en ? "The purest" : "La forma"}
              <br />
              {en ? "expression" : "più pura"}
              <br />
              <em className="font-normal text-[#dbbd84]">{en ? "of the land." : "della terra."}</em>
            </h2>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/70 md:text-lg">
              {en
                ? "Twenty-five organic hectares overlooking the Mediterranean. A Sicilian landscape transformed into olive oil and wine through time, restraint and care."
                : "Venticinque ettari biologici affacciati sul Mediterraneo. Un paesaggio siciliano trasformato in olio e vino attraverso tempo, misura e cura."}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link className="button-light" href="/shop">
                {en ? "Discover the collection" : "Scopri la collezione"} <ArrowUpRight className="ml-2" size={16} />
              </Link>
              <Link className="nav-link text-white/70" href="/azienda">
                {en ? "Read our story" : "Leggi la nostra storia"}
              </Link>
            </div>

            <div className="mt-9 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/15 pt-5 sm:gap-5">
              {(en
                ? [["Estate", "25 hectares"], ["Distance from the sea", "1 km"], ["Method", "Organic"]]
                : [["Territorio", "25 ettari"], ["Distanza dal mare", "1 km"], ["Metodo", "Biologico"]]
              ).map(([label, value]) => (
                <div className="border-l border-[#dbbd84]/60 pl-3 sm:pl-4" key={label}>
                  <p className="text-[8px] uppercase leading-4 tracking-[0.16em] text-white/45 sm:text-[9px]">{label}</p>
                  <p className="mt-1 font-serif text-base sm:text-lg">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="site-container grid gap-12 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:py-36" data-reveal>
        <div>
          <p className="eyebrow text-[#8a672f]">{en ? "Our land" : "La nostra terra"}</p>
          <h2 className="mt-5 max-w-lg font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
            {en ? "One kilometre from the Scala dei Turchi." : "A un chilometro dalla Scala dei Turchi."}
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-lg leading-8 text-black/65">
            {en
              ? "Twenty-five hectares between Realmonte and Agrigento, farmed organically from the beginning. Here wind, sun and limestone soil shape the character of every harvest."
              : "Venticinque ettari tra Realmonte e Agrigento, coltivati da sempre con metodo biologico. Qui il vento, il sole e il terreno calcareo disegnano il carattere di ogni raccolto."}
          </p>
          <div className="grid gap-5">
            {[
              [Leaf, en ? "Organic farming" : "Agricoltura biologica"],
              [Sun, en ? "Early harvest" : "Raccolta precoce"],
              [MapPin, en ? "Entirely Sicilian supply chain" : "Filiera interamente siciliana"],
            ].map(([Icon, text]) => {
              const ItemIcon = Icon;
              return (
                <div className="flex items-center gap-4 border-b border-black/10 pb-4" key={text as string}>
                  <ItemIcon className="text-[#9d7c45]" size={19} />
                  <span className="text-sm font-semibold">{text as string}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-[#10261c]/6 bg-[#eef1e9] py-8">
        <div className="luxury-marquee flex w-max items-center gap-12 whitespace-nowrap px-8">
          {[...(en ? ["Land", "Waiting", "Gesture", "Matter", "Sicily"] : ["Terra", "Attesa", "Gesto", "Materia", "Sicilia"]), ...(en ? ["Land", "Waiting", "Gesture", "Matter", "Sicily"] : ["Terra", "Attesa", "Gesto", "Materia", "Sicilia"])].map((word, index) => (
            <div aria-hidden={index > 4} className="flex items-center gap-12" key={`${word}-${index}`}>
              <span className="brand-word">{word}</span>
              <span className="size-2 rounded-full bg-[#10261c]/15" />
            </div>
          ))}
        </div>
      </section>

      <section className="grid min-h-[720px] lg:grid-cols-2" data-reveal>
        <div className="relative min-h-[520px] overflow-hidden">
          <Image
            alt="Uliveto di Officina di Terra"
            className="object-cover"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            src="/images/brand/uliveto-mare.webp"
          />
        </div>
        <div className="flex items-center bg-[#10291f] px-8 py-20 text-white md:px-16 lg:px-20">
          <div className="max-w-xl">
            <p className="eyebrow text-[#d5b982]">Nocelilla</p>
            <h2 className="mt-6 font-serif text-5xl leading-[0.95] md:text-7xl">
              {en ? "The pleasure of flavour, without shortcuts." : "Il piacere del gusto, senza scorciatoie."}
            </h2>
            <p className="mt-8 max-w-lg leading-7 text-white/65">
              {en
                ? "The olives are harvested early, between late September and early October, then cold extracted to preserve aroma and quality."
                : "Le olive vengono raccolte a maturazione precoce, tra la fine di settembre e l'inizio di ottobre, e lavorate a freddo per custodire aromi e qualità."}
            </p>
            <Link className="button-light mt-10" href="/prodotti">
              {en ? "Our method" : "Il nostro metodo"}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#e9e2d4] py-24 lg:py-36" data-reveal>
        <div className="site-container grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="relative min-h-[440px] overflow-hidden">
            <Image
              alt="Incisione botanica di un ulivo secolare"
              className="manifesto-tree object-contain object-top mix-blend-multiply"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              src="/images/olive-engraving.png"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="eyebrow text-[#8a672f]">Manifesto</p>
            <Quote className="mt-8 text-[#b88945]" size={42} strokeWidth={1} />
            <h2 className="font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">
              {en
                ? "We do not simply grow products. We cultivate a way of feeling the land."
                : "Non coltiviamo semplicemente prodotti. Coltiviamo un modo di sentire la terra."}
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <p className="text-lg leading-8 text-black/60">
                {en
                  ? "Officina is the place of making: hands, tools and experience. Terra is what cannot be accelerated: seasons, climate and waiting. The brand lives where these two forces meet."
                  : "Officina è il luogo del fare: mani, strumenti, esperienza. Terra è ciò che non si può accelerare: stagioni, clima, attesa. Il brand vive nell'incontro tra queste due forze."}
              </p>
              <p className="text-lg leading-8 text-black/60">
                {en
                  ? "Every bottle brings a precise landscape to the table. Not a generic Sicily, but this southern coast of limestone, salt wind, sunlight and silence."
                  : "Ogni bottiglia porta a tavola un paesaggio preciso. Non una Sicilia generica, ma quella costa meridionale fatta di calcare, vento salino, sole e silenzi."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container py-24 lg:py-36" data-reveal>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow text-[#8a672f]">{en ? "Agricultural time" : "Il tempo agricolo"}</p>
            <h2 className="mt-5 font-serif text-5xl leading-[0.95] md:text-7xl">
              {en ? "Every season leaves its mark." : "Ogni stagione lascia un segno."}
            </h2>
            <p className="mt-7 max-w-md leading-7 text-black/60">
              {en
                ? "Quality is not born in a single moment. It is a sequence of choices, care and waiting that lasts throughout the year."
                : "La qualità non nasce in un solo momento. È una sequenza di decisioni, cure e attese che dura tutto l'anno."}
            </p>
          </div>
          <div>
            {(en
              ? [
                  ["01", "Winter", "The land rests, prepares itself and gathers energy."],
                  ["02", "Spring", "Olive groves and vineyards return to life under Mediterranean light."],
                  ["03", "Summer", "The sun concentrates aroma, structure and character."],
                  ["04", "Harvest", "Between September and October, fruit becomes a material to preserve."],
                ]
              : [
                  ["01", "Inverno", "La terra riposa, si prepara e raccoglie energia."],
                  ["02", "Primavera", "Uliveti e vigneti riprendono vita sotto la luce mediterranea."],
                  ["03", "Estate", "Il sole concentra profumi, struttura e carattere."],
                  ["04", "Raccolta", "Tra settembre e ottobre il frutto diventa materia da custodire."],
                ]
            ).map(([number, title, copy]) => (
              <article
                className="grid gap-4 border-t border-black/15 py-8 sm:grid-cols-[70px_1fr_1.4fr]"
                key={number}
              >
                <span className="text-xs font-bold text-[#9d7c45]">{number}</span>
                <h3 className="font-serif text-3xl">{title}</h3>
                <p className="leading-7 text-black/55">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container py-24 lg:py-36" data-reveal>
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-[#8a672f]">{en ? "From the pantry" : "Dalla dispensa"}</p>
            <h2 className="mt-4 font-serif text-5xl md:text-7xl">{en ? "Selected products" : "Prodotti scelti"}</h2>
          </div>
          <Link className="nav-link w-fit" href="/shop">
            {en ? "View the entire shop" : "Guarda tutto lo shop"}
          </Link>
        </div>
        <div className="grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-[#ddd4bf] py-24 lg:py-36" data-reveal>
        <div className="site-container">
          <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="eyebrow text-[#745629]">{magazineCopy.eyebrow}</p>
              <h2 className="mt-5 font-serif text-5xl leading-[0.95] text-[#10261c] md:text-7xl">
                {magazineCopy.title}
              </h2>
            </div>
            <div>
              <p className="max-w-xl leading-7 text-[#10261c]/65">{magazineCopy.copy}</p>
              <Link className="button-primary mt-7" href="/magazine">
                {magazineCopy.link}
              </Link>
            </div>
          </div>
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-3">
            {articles.slice(0, 3).map((article) => (
              <MagazineCard article={article} key={article.slug} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f0e7] py-20 lg:py-28" data-reveal>
        <div className="site-container grid gap-px bg-[#10261c]/10 lg:grid-cols-3">
        {(en ? [
          {
            icon: Droplets,
            label: "Pour",
            title: "The gesture",
            copy: "Olive oil is not an accessory: it is the final gesture in cooking, the one that brings every other element together.",
          },
          {
            icon: Sparkles,
            label: "Taste",
            title: "The senses",
            copy: "Colour, aroma, bitterness and pepperiness. Tasting means learning to recognise the raw material.",
          },
          {
            icon: HandPlatter,
            label: "Share",
            title: "The table",
            copy: "Olive oil and wine find their truest meaning when they become encounter and conversation.",
          },
        ] : [
          {
            icon: Droplets,
            label: "Versare",
            title: "Il gesto",
            copy: "L'olio non e un accessorio: e l'ultimo gesto della cucina, quello che unisce tutti gli altri.",
          },
          {
            icon: Sparkles,
            label: "Assaggiare",
            title: "I sensi",
            copy: "Colore, profumo, amaro, piccante. Assaggiare significa imparare a riconoscere la materia.",
          },
          {
            icon: HandPlatter,
            label: "Condividere",
            title: "La tavola",
            copy: "Olio e vino trovano il loro significato piu vero quando diventano incontro e conversazione.",
          },
        ]).map((ritual) => {
          const RitualIcon = ritual.icon;

          return (
            <article className="min-h-[420px] bg-[#f4f0e7] p-8 text-[#10261c] md:p-10" key={ritual.title}>
              <div className="flex size-16 items-center justify-center rounded-full border border-[#10261c]/15 text-[#8f642c]">
                <RitualIcon size={26} strokeWidth={1.3} />
              </div>
              <p className="eyebrow mt-12 text-[#8f642c]">{ritual.label}</p>
              <h3 className="mt-4 font-serif text-5xl">{ritual.title}</h3>
              <p className="mt-7 max-w-sm leading-7 text-[#10261c]/62">{ritual.copy}</p>
            </article>
          );
        })}
        </div>
      </section>
      <section className="relative overflow-hidden py-28 text-white md:py-40" data-reveal>
        <Image
          alt="Vigneto siciliano"
          className="object-cover"
          fill
          sizes="100vw"
          src="/images/brand/vigneto-paesaggio.webp"
        />
        <div className="absolute inset-0 bg-[#2b1210]/75" />
        <div className="site-container relative text-center">
          <p className="eyebrow text-[#e5cda3]">Nero d&apos;Avola DOC</p>
          <h2 className="mx-auto mt-5 max-w-4xl font-serif text-5xl leading-[0.95] md:text-8xl">
            {en ? "A wine that speaks the language of its land." : "Un vino che parla la lingua della sua terra."}
          </h2>
          <Link className="button-light mt-10" href="/shop/nero-davola-doc-nero">
            {en ? "Discover NERO" : "Scopri NERO"}
          </Link>
        </div>
      </section>
    </>
  );
}
