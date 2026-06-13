import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Azienda" };

const chapters = [
  ["01", "Raccolta", "Le olive vengono raccolte a mano nel momento ottimale della maturazione."],
  ["02", "Molitura", "La lavorazione avviene a freddo, con procedimenti esclusivamente meccanici."],
  ["03", "Custodia", "L'olio viene imbottigliato e conservato lontano da luce e fonti di calore."],
];

export default function AziendaPage() {
  return (
    <>
      <section className="site-container grid gap-12 py-20 lg:grid-cols-2 lg:items-end lg:py-32">
        <div>
          <p className="eyebrow text-[#8a672f]">Chi siamo</p>
          <h1 className="mt-5 font-serif text-6xl leading-[0.9] md:text-8xl">
            Un giovane progetto, radici antiche.
          </h1>
        </div>
        <p className="max-w-xl text-lg leading-8 text-black/60">
          Officina di Terra nasce in una Sicilia satura di colori, profumi e sapori. La
          proprietà si estende per circa 25 ettari tra Realmonte e Agrigento, tra uliveti e
          vigneti.
        </p>
      </section>
      <section className="relative min-h-[70svh]">
        <Image
          alt="Paesaggio di Officina di Terra"
          className="object-cover"
          fill
          priority
          sizes="100vw"
          src="https://officinaditerra.com/wp-content/uploads/2024/02/img_8659-e1707846627896.jpg"
        />
      </section>
      <section className="site-container grid gap-14 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:py-36">
        <div>
          <p className="eyebrow text-[#8a672f]">Tradizione e innovazione</p>
          <h2 className="mt-5 font-serif text-5xl leading-tight">Il nostro modo di fare.</h2>
        </div>
        <div className="grid gap-10">
          {chapters.map(([number, title, text]) => (
            <div className="grid gap-4 border-t border-black/15 pt-6 sm:grid-cols-[70px_1fr_1.5fr]" key={number}>
              <span className="text-xs text-[#8a672f]">{number}</span>
              <h3 className="font-serif text-2xl">{title}</h3>
              <p className="leading-7 text-black/60">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[600px]">
          <Image
            alt="Vigneto di Nero d'Avola"
            className="object-cover"
            fill
            sizes="50vw"
            src="https://officinaditerra.com/wp-content/uploads/2024/02/vino-composizione-2.jpg"
          />
        </div>
        <div className="flex items-center bg-[#401e19] px-8 py-20 text-white md:px-16">
          <div>
            <p className="eyebrow text-[#e5cda3]">Il vigneto</p>
            <h2 className="mt-5 font-serif text-5xl md:text-7xl">10.000 viti, 450 metri sul mare.</h2>
            <p className="mt-7 max-w-xl leading-7 text-white/65">
              Le uve provengono dalla contrada Grancifone, su terreno calcareo e argilloso.
              Vendemmia manuale nelle ore più fresche e affinamento in acciaio.
            </p>
            <Link className="button-light mt-9" href="/shop/nero-davola-doc-nero">Scopri il vino</Link>
          </div>
        </div>
      </section>
    </>
  );
}
