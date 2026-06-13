import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#10291f] text-[#f7f4ed]">
      <div className="site-container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="eyebrow text-[#d5b982]">Officina di Terra</p>
          <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight md:text-5xl">
            La Sicilia, coltivata con rispetto.
          </h2>
        </div>
        <div className="space-y-4 text-sm text-white/70">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white">Contatti</p>
          <a className="flex gap-3" href="tel:+393928786281"><Phone size={16} />+39 392 878 6281</a>
          <a className="flex gap-3" href="mailto:info@officinaditerra.com"><Mail size={16} />info@officinaditerra.com</a>
          <p className="flex gap-3"><MapPin className="shrink-0" size={16} />Via Vesuvio, 15<br />92010 Realmonte (AG)</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em]">Esplora</p>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            <Link href="/azienda">Azienda</Link>
            <Link href="/prodotti">I nostri prodotti</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/contatti">Contatti</Link>
          </div>
        </div>
      </div>
      <div className="site-container flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Azienda Agricola Officina di Terra · P. IVA 02832400846</p>
        <div className="flex gap-5 font-semibold tracking-widest">
          <a href="https://www.facebook.com/aziendaagricolaofficinaditerra/">FB</a>
          <a href="https://www.instagram.com/">IG</a>
        </div>
      </div>
    </footer>
  );
}
