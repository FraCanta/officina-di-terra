import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/data/articles";
import { getLocale } from "@/i18n/config";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const locale = await getLocale();
  const article = getArticle((await params).slug);
  return { title: article?.title[locale] ?? "Magazine" };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const locale = await getLocale();
  const article = getArticle((await params).slug);
  if (!article) notFound();

  const back = locale === "it" ? "Torna al Magazine" : "Back to Magazine";

  return (
    <article>
      <header className="site-container max-w-5xl py-16 text-center md:py-24">
        <p className="eyebrow text-[#8a672f]">{article.category[locale]}</p>
        <h1 className="mt-6 font-serif text-5xl leading-[0.95] md:text-8xl">
          {article.title[locale]}
        </h1>
        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-black/40">
          {article.date[locale]} · {article.readTime[locale]}
        </p>
      </header>

      <div className="relative min-h-[68svh]">
        <Image
          alt={article.title[locale]}
          className="object-cover"
          fill
          priority
          sizes="100vw"
          src={article.cover}
        />
      </div>

      <div className="site-container max-w-3xl py-20 lg:py-28">
        <p className="font-serif text-3xl leading-[1.25] md:text-4xl">{article.intro[locale]}</p>
        <div className="mt-16 space-y-14">
          {article.sections.map((section) => (
            <section key={section.title.it}>
              <h2 className="font-serif text-4xl">{section.title[locale]}</h2>
              <p className="mt-5 text-lg leading-8 text-black/60">{section.body[locale]}</p>
            </section>
          ))}
        </div>
        <Link className="button-primary mt-16" href="/magazine">
          {back}
        </Link>
      </div>
    </article>
  );
}
