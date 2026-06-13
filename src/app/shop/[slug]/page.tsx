import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { formatPrice, getProduct, products } from "@/data/products";
import { AddToCart } from "./add-to-cart";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const product = getProduct((await params).slug);
  return { title: product?.shortName ?? "Prodotto" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  return (
    <section className="site-container grid gap-12 py-12 md:py-20 lg:grid-cols-2 lg:gap-20">
      <div className="relative aspect-square overflow-hidden bg-[#ebe6db]">
        <Image
          alt={product.name}
          className="object-contain p-10 md:p-16"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          src={product.image}
        />
      </div>
      <div className="flex items-center">
        <div className="max-w-xl">
          <p className="eyebrow text-[#8a672f]">{product.category} · {product.volume}</p>
          <h1 className="mt-5 font-serif text-5xl leading-[0.95] md:text-7xl">
            {product.shortName}
          </h1>
          <p className="mt-7 text-2xl">{formatPrice(product.price)}</p>
          <p className="mt-8 text-lg leading-8 text-black/60">{product.description}</p>
          <div className="my-9 grid gap-4 border-y border-black/10 py-7">
            {product.notes.map((note) => (
              <p className="flex items-center gap-3 text-sm" key={note}>
                <Check className="text-[#8a672f]" size={17} />
                {note}
              </p>
            ))}
          </div>
          <AddToCart product={product} />
          <p className="mt-5 text-xs leading-5 text-black/45">
            Spedizione disponibile su tutto il territorio italiano.
          </p>
        </div>
      </div>
    </section>
  );
}
