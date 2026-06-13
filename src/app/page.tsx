import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Droplets, HandPlatter, Leaf, MapPin, Quote, Sparkles, Sun } from "lucide-react";
import { HeroProductShowcase } from "@/components/hero-product-showcase";
import { LuxuryMotion } from "@/components/luxury-motion";
import { ProductCard } from "@/components/product-card";
import { featuredProducts, products } from "@/data/products";

export default function Home() {
  return (
    <>
      <LuxuryMotion />
      <section className="luxury-hero hero-monochrome relative min-h-[calc(100svh-5rem)] overflow-hidden bg-[#10261c] text-white">
        <Image
          alt=""
          aria-hidden
          className="hero-engraving absolute -bottom-[28%] right-[-5%] h-auto w-[min(72vw,900px)] opacity-55"
          height={1536}
          priority
          src="/images/olive-engraving-gold.png"
          width={1024}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(194,151,79,0.13),transparent_35%)]" />
        <div className="absolute inset-y-0 left-[52%] hidden w-px bg-white/10 lg:block" />

        <div className="site-container relative grid min-h-[calc(100svh-5rem)] items-end gap-10 pb-8 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-12">
          <div className="hero-copy relative z-10 max-w-3xl">
            <div className="mb-8 flex items-center gap-5">
              <span className="h-px w-12 bg-[#c79b52]" />
              <p className="eyebrow text-[#dbbd84]">37.2948° N · 13.4613° E</p>
            </div>
            <h1 className="hero-heading font-serif text-[clamp(3.8rem,8vw,8.1rem)] leading-[0.84] tracking-[-0.055em]">
              La forma
              <br />
              più pura
              <br />
              <em className="font-normal text-[#dbbd84]">della terra.</em>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/70 md:text-lg">
              Venticinque ettari biologici affacciati sul Mediterraneo. Un paesaggio
              siciliano trasformato in olio e vino attraverso tempo, misura e cura.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link className="button-light" href="/shop">
                Scopri la collezione <ArrowUpRight className="ml-2" size={16} />
              </Link>
              <Link className="nav-link text-white/70" href="/azienda">
                Leggi la nostra storia
              </Link>
            </div>
          </div>

          <div className="relative z-10 hidden h-[640px] lg:block">
            <HeroProductShowcase products={[products[4], products[6], products[8], products[1]]} />
            <div className="absolute left-4 top-16 grid max-w-[220px] gap-9 xl:left-12">
              {[
                ["Territorio", "25 ettari"],
                ["Distanza dal mare", "1 km"],
                ["Metodo", "Biologico"],
              ].map(([label, value]) => (
                <div className="border-l border-[#dbbd84]/60 pl-5" key={label}>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">{label}</p>
                  <p className="mt-2 font-serif text-2xl">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="site-container grid gap-12 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:py-36" data-reveal>
        <div>
          <p className="eyebrow text-[#8a672f]">La nostra terra</p>
          <h2 className="mt-5 max-w-lg font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
            A un chilometro dalla Scala dei Turchi.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-lg leading-8 text-black/65">
            Venticinque ettari tra Realmonte e Agrigento, coltivati da sempre con metodo
            biologico. Qui il vento, il sole e il terreno calcareo disegnano il carattere di
            ogni raccolto.
          </p>
          <div className="grid gap-5">
            {[
              [Leaf, "Agricoltura biologica"],
              [Sun, "Raccolta precoce"],
              [MapPin, "Filiera interamente siciliana"],
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
          {[...["Terra", "Attesa", "Gesto", "Materia", "Sicilia"], ...["Terra", "Attesa", "Gesto", "Materia", "Sicilia"]].map((word, index) => (
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
              Il piacere del gusto, senza scorciatoie.
            </h2>
            <p className="mt-8 max-w-lg leading-7 text-white/65">
              Le olive vengono raccolte a maturazione precoce, tra la fine di settembre e
              l&apos;inizio di ottobre, e lavorate a freddo per custodire aromi e qualità.
            </p>
            <Link className="button-light mt-10" href="/prodotti">
              Il nostro metodo
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
              Non coltiviamo semplicemente prodotti. Coltiviamo un modo di sentire la terra.
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <p className="text-lg leading-8 text-black/60">
                Officina è il luogo del fare: mani, strumenti, esperienza. Terra è ciò che
                non si può accelerare: stagioni, clima, attesa. Il brand vive nell&apos;incontro
                tra queste due forze.
              </p>
              <p className="text-lg leading-8 text-black/60">
                Ogni bottiglia porta a tavola un paesaggio preciso. Non una Sicilia
                generica, ma quella costa meridionale fatta di calcare, vento salino, sole e
                silenzi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#10261c] py-20 text-white lg:py-28" data-reveal>
        <div className="site-container">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="eyebrow text-[#d5b982]">Dentro l&apos;azienda</p>
              <h2 className="mt-5 font-serif text-5xl leading-[0.95] md:text-7xl">
                La terra, le macchine, le mani.
              </h2>
            </div>
            <p className="max-w-2xl leading-7 text-white/62">
              Un paesaggio agricolo vivo: uliveti affacciati sul mare, filari in collina e
              lavoro quotidiano tra mezzi, potature e stagioni.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-4 md:grid-rows-[260px_260px]">
            {[
              ["Uliveti sul mare", "/images/brand/uliveto-mare.webp", "md:col-span-2 md:row-span-2"],
              ["Filari", "/images/brand/vigneto-filari.webp", ""],
              ["Lavorazione", "/images/brand/trattore-uliveto.webp", ""],
              ["Contrada", "/images/brand/foglie-ruderi.webp", "md:col-span-2"],
            ].map(([label, src, className]) => (
              <figure className={`group relative min-h-[280px] overflow-hidden ${className}`} key={label}>
                <Image
                  alt={label}
                  className="object-cover transition duration-700 group-hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src={src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <figcaption className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container py-24 lg:py-36" data-reveal>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow text-[#8a672f]">Il tempo agricolo</p>
            <h2 className="mt-5 font-serif text-5xl leading-[0.95] md:text-7xl">
              Ogni stagione lascia un segno.
            </h2>
            <p className="mt-7 max-w-md leading-7 text-black/60">
              La qualità non nasce in un solo momento. È una sequenza di decisioni, cure e
              attese che dura tutto l&apos;anno.
            </p>
          </div>
          <div>
            {[
              ["01", "Inverno", "La terra riposa, si prepara e raccoglie energia."],
              ["02", "Primavera", "Uliveti e vigneti riprendono vita sotto la luce mediterranea."],
              ["03", "Estate", "Il sole concentra profumi, struttura e carattere."],
              ["04", "Raccolta", "Tra settembre e ottobre il frutto diventa materia da custodire."],
            ].map(([number, title, copy]) => (
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
            <p className="eyebrow text-[#8a672f]">Dalla dispensa</p>
            <h2 className="mt-4 font-serif text-5xl md:text-7xl">Prodotti scelti</h2>
          </div>
          <Link className="nav-link w-fit" href="/shop">
            Guarda tutto lo shop
          </Link>
        </div>
        <div className="grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-[#f4f0e7] py-20 lg:py-28" data-reveal>
        <div className="site-container grid gap-px bg-[#10261c]/10 lg:grid-cols-3">
        {[
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
        ].map((ritual) => {
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
            Un vino che parla la lingua della sua terra.
          </h2>
          <Link className="button-light mt-10" href="/shop/nero-davola-doc-nero">
            Scopri NERO
          </Link>
        </div>
      </section>
    </>
  );
}
