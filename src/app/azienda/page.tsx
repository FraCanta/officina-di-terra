import type { Metadata } from "next";
import { Factory, Grape, Sprout, Tractor, Wine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getLocale } from "@/i18n/config";

export const metadata: Metadata = { title: "Azienda" };

export default async function AziendaPage() {
  const locale = await getLocale();
  const t = {
    it: {
      eyebrow: "Chi siamo",
      title: "Un giovane progetto, radici antiche.",
      intro:
        "Officina di Terra nasce in una Sicilia satura di colori, profumi e sapori. La proprietà si estende per circa 25 ettari tra Realmonte e Agrigento, tra uliveti e vigneti affacciati sul Mediterraneo.",
      place: "Realmonte · Agrigento · Sicilia",
      family: "Una storia familiare",
      familyTitle: "Custodire oggi quello che resterà domani.",
      familyCopy:
        "Officina è il luogo del fare. Terra è il patrimonio da tramandare. Il progetto cresce dentro questa relazione: una famiglia, un paesaggio e la responsabilità di coltivarlo con rispetto.",
      organic: "Agricoltura biologica e filiera aziendale",
      work: "Il lavoro quotidiano",
      workTitle: "Tradizione agricola, strumenti contemporanei.",
      workCopy:
        "Preparazione dei terreni, cura dei filari e gestione degli uliveti seguono il ritmo delle stagioni e le necessità reali di ogni appezzamento.",
      imageLabels: ["Lavorazione degli uliveti", "Preparazione dei terreni", "Impianto del vigneto"],
      wine: "Nero d'Avola DOC",
      wineTitle: "Il vino nasce a 450 metri sul mare.",
      wineCopy:
        "Contrada Grancifone, Agrigento. Un terreno calcareo-argilloso, ricco di sostanza organica e segnato da uno scheletro ciottoloso.",
      discoverWine: "Scopri il vino",
      process: "Dal vigneto alla bottiglia",
      processTitle: "Il metodo del nostro Nero d'Avola.",
    },
    en: {
      eyebrow: "About us",
      title: "A young project with ancient roots.",
      intro:
        "Officina di Terra was born in a Sicily rich in colour, fragrance and flavour. The estate extends across about 25 hectares between Realmonte and Agrigento, with olive groves and vineyards overlooking the Mediterranean.",
      place: "Realmonte · Agrigento · Sicily",
      family: "A family story",
      familyTitle: "Caring today for what will remain tomorrow.",
      familyCopy:
        "Officina is the place of making. Terra is the heritage to pass on. The project grows from this relationship: a family, a landscape and the responsibility to cultivate it with respect.",
      organic: "Organic farming and an estate-controlled supply chain",
      work: "Daily work",
      workTitle: "Agricultural tradition, contemporary tools.",
      workCopy:
        "Preparing the soil, caring for the rows and managing the olive groves follow the rhythm of the seasons and the real needs of each plot.",
      imageLabels: ["Working the olive groves", "Preparing the soil", "Planting the vineyard"],
      wine: "Nero d'Avola DOC",
      wineTitle: "Our wine is born 450 metres above the sea.",
      wineCopy:
        "Contrada Grancifone, Agrigento. Limestone-clay soil, rich in organic matter and marked by a distinctive stony structure.",
      discoverWine: "Discover the wine",
      process: "From vineyard to bottle",
      processTitle: "The method behind our Nero d'Avola.",
    },
  }[locale];

  const gallery = [
    [t.imageLabels[0], "/images/brand/trattore-uliveto.webp"],
    [t.imageLabels[1], "/images/brand/mezzo-agricolo.webp"],
    [t.imageLabels[2], "/images/brand/vigneto-trattore.webp"],
  ];
  const wineProcess = locale === "it"
    ? [
        {
          icon: Grape,
          title: "Il vigneto",
          text: "Le uve provengono dalla contrada Grancifone, ad Agrigento, a circa 450 metri s.l.m. Il terreno, ricco di sostanza organica, ha struttura calcareo-argillosa e un tipico scheletro ciottoloso.",
          details: "Impianto 2020 · 4.500 viti/ha · Guyot · Resa media 70 q/ha",
        },
        {
          icon: Tractor,
          title: "Vendemmia",
          text: "Nella terza decade di settembre, nelle ore più fresche della giornata. Le uve vengono selezionate, raccolte a mano e poste in cassette.",
        },
        {
          icon: Factory,
          title: "Vinificazione",
          text: "Subito dopo la vendemmia, le uve vengono diraspate e macerate a una temperatura di 22-24 °C per 10-12 giorni.",
        },
        {
          icon: Wine,
          title: "Affinamento",
          text: "Dopo la fermentazione malolattica naturale, la maturazione prosegue in serbatoi di acciaio inox. Il vino affina poi in bottiglia per 3-4 mesi prima della commercializzazione.",
        },
      ]
    : [
        {
          icon: Grape,
          title: "The vineyard",
          text: "The grapes come from Contrada Grancifone in Agrigento, at about 450 metres above sea level. Rich in organic matter, the soil has a limestone-clay structure with a distinctive stony component.",
          details: "Planted 2020 · 4,500 vines/ha · Guyot · Average yield 70 q/ha",
        },
        {
          icon: Tractor,
          title: "Harvest",
          text: "In late September, during the coolest hours of the day. The grapes are selected, hand-picked and placed in crates.",
        },
        {
          icon: Factory,
          title: "Winemaking",
          text: "Immediately after harvest, the grapes are destemmed and macerated at 22-24 °C for 10-12 days.",
        },
        {
          icon: Wine,
          title: "Ageing",
          text: "After natural malolactic fermentation, the wine matures in stainless steel tanks, then ages in bottle for 3-4 months before release.",
        },
      ];

  return (
    <>
      <section className="site-container grid gap-12 py-20 lg:grid-cols-2 lg:items-end lg:py-32">
        <div>
          <p className="eyebrow text-[#8a672f]">{t.eyebrow}</p>
          <h1 className="mt-5 font-serif text-6xl leading-[0.9] md:text-8xl">{t.title}</h1>
        </div>
        <p className="max-w-xl text-lg leading-8 text-black/60">{t.intro}</p>
      </section>

      <section className="relative min-h-[72svh] overflow-hidden">
        <Image
          alt="Uliveto di Officina di Terra affacciato sul mare"
          className="object-cover"
          fill
          priority
          sizes="100vw"
          src="/images/brand/uliveto-mare.webp"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10261c]/55 via-transparent to-transparent" />
        <p className="absolute bottom-8 left-8 max-w-sm text-xs font-semibold uppercase tracking-[0.22em] text-white/75 md:left-16">
          {t.place}
        </p>
      </section>

      <section className="site-container grid gap-14 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:py-36">
        <div className="relative min-h-[540px] overflow-hidden">
          <Image
            alt="La famiglia di Officina di Terra tra gli ulivi"
            className="object-cover"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            src="/images/brand/famiglia-ulivo.webp"
          />
        </div>
        <div className="lg:pl-12">
          <p className="eyebrow text-[#8a672f]">{t.family}</p>
          <h2 className="mt-5 font-serif text-5xl leading-[0.95] md:text-7xl">{t.familyTitle}</h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-black/60">{t.familyCopy}</p>
          <div className="mt-10 flex items-center gap-4 border-t border-black/10 pt-6">
            <Sprout className="text-[#8a672f]" size={23} />
            <p className="text-sm font-semibold">{t.organic}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#10261c] py-20 text-white lg:py-28">
        <div className="site-container">
          <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="eyebrow text-[#d5b982]">{t.work}</p>
              <h2 className="mt-5 font-serif text-5xl leading-[0.95] md:text-7xl">{t.workTitle}</h2>
            </div>
            <p className="max-w-xl leading-7 text-white/60">{t.workCopy}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {gallery.map(([label, src]) => (
              <figure className="group relative min-h-[440px] overflow-hidden" key={label}>
                <Image
                  alt={label}
                  className="object-cover transition duration-700 group-hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  src={src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                <figcaption className="absolute bottom-6 left-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[620px]">
          <Image
            alt="Vigneto della contrada Grancifone"
            className="object-cover"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            src="/images/brand/vigneto-paesaggio.webp"
          />
        </div>
        <div className="flex items-center bg-[#401e19] px-8 py-20 text-white md:px-16">
          <div>
            <p className="eyebrow text-[#e5cda3]">{t.wine}</p>
            <h2 className="mt-5 font-serif text-5xl leading-[0.95] md:text-7xl">{t.wineTitle}</h2>
            <p className="mt-7 max-w-xl leading-7 text-white/65">{t.wineCopy}</p>
            <Link className="button-light mt-9" href="/shop/nero-davola-doc-nero">
              {t.discoverWine}
            </Link>
          </div>
        </div>
      </section>

      <section className="site-container py-24 lg:py-32">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow text-[#8a672f]">{t.process}</p>
          <h2 className="mt-5 font-serif text-5xl leading-[0.95] md:text-7xl">{t.processTitle}</h2>
        </div>
        <div className="grid border-t border-black/10 md:grid-cols-2">
          {wineProcess.map(({ icon: Icon, title, text, details }) => (
            <article className="border-b border-black/10 py-10 md:px-10 md:odd:border-r" key={title}>
              <Icon className="text-[#8a672f]" size={28} strokeWidth={1.4} />
              <h3 className="mt-7 font-serif text-4xl">{title}</h3>
              <p className="mt-5 max-w-xl leading-7 text-black/60">{text}</p>
              {details && (
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#8a672f]">
                  {details}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
