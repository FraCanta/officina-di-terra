import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/data/articles";
import type { Locale } from "@/i18n/config";

export function MagazineCard({
  article,
  locale,
}: {
  article: Article;
  locale: Locale;
}) {
  return (
    <article className="group">
      <Link
        className="relative block aspect-[4/3] overflow-hidden bg-[#ddd5c7]"
        href={`/magazine/${article.slug}`}
      >
        <Image
          alt={article.title[locale]}
          className="object-cover transition duration-700 group-hover:scale-[1.035]"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          src={article.cover}
        />
      </Link>
      <p className="eyebrow mt-5 text-[#8a672f]">{article.category[locale]}</p>
      <Link href={`/magazine/${article.slug}`}>
        <h3 className="mt-3 font-serif text-3xl leading-tight">{article.title[locale]}</h3>
      </Link>
      <p className="mt-4 leading-7 text-black/55">{article.excerpt[locale]}</p>
      <p className="mt-5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-black/40">
        {article.date[locale]} · {article.readTime[locale]}
      </p>
    </article>
  );
}
