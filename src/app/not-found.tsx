import Link from "next/link";

export default function NotFound() {
  return (
    <section className="site-container grid min-h-[70svh] place-items-center py-20 text-center">
      <div>
        <p className="eyebrow text-[#8a672f]">404</p>
        <h1 className="mt-4 font-serif text-6xl">Questa pagina non c&apos;è.</h1>
        <Link className="button-primary mt-8" href="/">Torna alla home</Link>
      </div>
    </section>
  );
}
