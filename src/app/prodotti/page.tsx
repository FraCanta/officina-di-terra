import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getLocale } from "@/i18n/config";

export const metadata: Metadata = { title: "Prodotti" };

export default async function ProdottiPage() {
  const locale = await getLocale();
  const t = locale === "it"
    ? {
        eyebrow: "Dalla nostra terra",
        title: "Due anime, una sola origine.",
        discover: "Scopri la collezione",
        families: [
          {
            title: "Olio EVO biologico",
            label: "Nocellara del Belice · Biancolilla",
            copy: "Un olio giallo dorato con venature verdi, sentori di pomodoro, banana, mela bianca, basilico e menta.",
            image: "https://officinaditerra.com/wp-content/uploads/2024/02/img_8666-e1707849980706.jpg",
            href: "/shop",
          },
          {
            title: "Nero d'Avola DOC",
            label: "Contrada Grancifone · Agrigento",
            copy: "Rosso rubino intenso, bouquet di ciliegia e mora, buon equilibrio e morbidi tannini.",
            image: "https://officinaditerra.com/wp-content/uploads/2024/02/vino-composizione-2.jpg",
            href: "/shop/nero-davola-doc-nero",
          },
        ],
      }
    : {
        eyebrow: "From our land",
        title: "Two souls, one origin.",
        discover: "Discover the collection",
        families: [
          {
            title: "Organic EVO oil",
            label: "Nocellara del Belice · Biancolilla",
            copy: "A golden yellow oil with green hues and notes of tomato, banana, white apple, basil and mint.",
            image: "https://officinaditerra.com/wp-content/uploads/2024/02/img_8666-e1707849980706.jpg",
            href: "/shop",
          },
          {
            title: "Sicilia DOC Nero d'Avola",
            label: "Contrada Grancifone · Agrigento",
            copy: "Deep ruby red, a bouquet of cherry and blackberry, balanced structure and soft tannins.",
            image: "https://officinaditerra.com/wp-content/uploads/2024/02/vino-composizione-2.jpg",
            href: "/shop/nero-davola-doc-nero",
          },
        ],
      };

  return (
    <>
      <section className="site-container py-20 md:py-28">
        <p className="eyebrow text-[#8a672f]">{t.eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-serif text-6xl leading-[0.9] md:text-9xl">{t.title}</h1>
      </section>
      {t.families.map((family, index) => (
        <section className="grid min-h-[720px] lg:grid-cols-2" key={family.title}>
          <div className={`relative min-h-[520px] ${index % 2 ? "lg:order-2" : ""}`}>
            <Image alt={family.title} className="object-cover" fill sizes="(max-width: 1024px) 100vw, 50vw" src={family.image} />
          </div>
          <div className={`flex items-center px-8 py-20 md:px-16 lg:px-24 ${index ? "bg-[#401e19] text-white" : "bg-[#e9e2d4]"}`}>
            <div className="max-w-xl">
              <p className={`eyebrow ${index ? "text-[#e5cda3]" : "text-[#8a672f]"}`}>{family.label}</p>
              <h2 className="mt-5 font-serif text-5xl leading-[0.95] md:text-7xl">{family.title}</h2>
              <p className={`mt-8 text-lg leading-8 ${index ? "text-white/65" : "text-black/60"}`}>{family.copy}</p>
              <Link className={index ? "button-light mt-10" : "button-primary mt-10"} href={family.href}>{t.discover}</Link>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
