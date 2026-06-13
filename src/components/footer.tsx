"use client";

import { Icon } from "@iconify/react";
import { CreditCard, LockKeyhole, Mail, MapPin, PackageCheck, Phone } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "./language-provider";

export function Footer() {
  const { locale } = useLanguage();
  const prefix = locale === "en" ? "/en" : "";
  const href = (path: string) => `${prefix}${path}`;
  const t = {
    it: {
      title: "La Sicilia, coltivata con rispetto.",
      contacts: "Contatti",
      explore: "Esplora",
      estate: "Azienda",
      products: "I nostri prodotti",
      contact: "Contatti",
      customerCare: "Servizio clienti",
      terms: "Termini e condizioni",
      shipping: "Spedizioni e consegne",
      returns: "Resi e rimborsi",
      privacy: "Privacy policy",
      cookies: "Cookie policy",
      secure: "Pagamenti sicuri",
      secureCopy: "Transazioni protette e dati crittografati.",
      delivery: "Spedizioni in Italia",
      deliveryCopy: "Consegna tracciata e imballaggi protettivi.",
      assistance: "Assistenza diretta",
      assistanceCopy: "Siamo disponibili prima e dopo l'acquisto.",
      payments: "Metodi di pagamento",
    },
    en: {
      title: "Sicily, cultivated with respect.",
      contacts: "Contact",
      explore: "Explore",
      estate: "Estate",
      products: "Our products",
      contact: "Contact",
      customerCare: "Customer care",
      terms: "Terms and conditions",
      shipping: "Shipping and delivery",
      returns: "Returns and refunds",
      privacy: "Privacy policy",
      cookies: "Cookie policy",
      secure: "Secure payments",
      secureCopy: "Protected transactions and encrypted data.",
      delivery: "Shipping throughout Italy",
      deliveryCopy: "Tracked delivery and protective packaging.",
      assistance: "Direct support",
      assistanceCopy: "We are available before and after your purchase.",
      payments: "Payment methods",
    },
  }[locale];

  return (
    <footer className="bg-[#10291f] text-[#f7f4ed]">
      <div className="border-b border-white/10">
        <div className="site-container grid gap-px bg-white/10 md:grid-cols-3">
          {[
            [LockKeyhole, t.secure, t.secureCopy],
            [PackageCheck, t.delivery, t.deliveryCopy],
            [Phone, t.assistance, t.assistanceCopy],
          ].map(([Icon, title, copy]) => {
            const ItemIcon = Icon as typeof LockKeyhole;
            return (
              <div className="flex gap-4 bg-[#10291f] px-5 py-6 md:px-7" key={title as string}>
                <ItemIcon className="shrink-0 text-[#d5b982]" size={21} strokeWidth={1.5} />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em]">{title as string}</p>
                  <p className="mt-2 text-sm leading-6 text-white/50">{copy as string}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="site-container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.7fr_0.8fr]">
        <div>
          <p className="eyebrow text-[#d5b982]">Officina di Terra</p>
          <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight md:text-5xl">{t.title}</h2>
        </div>
        <div className="space-y-4 text-sm text-white/70">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white">{t.contacts}</p>
          <a className="flex gap-3" href="tel:+393928786281"><Phone size={16} />+39 392 878 6281</a>
          <a className="flex gap-3" href="mailto:info@officinaditerra.com"><Mail size={16} />info@officinaditerra.com</a>
          <p className="flex gap-3"><MapPin className="shrink-0" size={16} />Via Vesuvio, 15<br />92010 Realmonte (AG)</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em]">{t.explore}</p>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            <Link href={href("/azienda")}>{t.estate}</Link>
            <Link href={href("/prodotti")}>{t.products}</Link>
            <Link href={href("/shop")}>Shop</Link>
            <Link href={href("/magazine")}>Magazine</Link>
            <Link href={href("/contatti")}>{t.contact}</Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em]">{t.customerCare}</p>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            <Link href={href("/termini-e-condizioni")}>{t.terms}</Link>
            <Link href={href("/spedizioni")}>{t.shipping}</Link>
            <Link href={href("/resi-e-rimborsi")}>{t.returns}</Link>
            <Link href={href("/privacy")}>{t.privacy}</Link>
            <Link href={href("/cookie-policy")}>{t.cookies}</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-container flex flex-col gap-5 py-7 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <CreditCard className="text-[#d5b982]" size={18} />
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/65">{t.payments}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <PaymentLogo icon="ri:visa-fill" label="Visa" />
            <PaymentLogo icon="grommet-icons:mastercard" label="Mastercard" />
            <PaymentLogo icon="ic:round-paypal" label="PayPal" />
            <PaymentLogo icon="fa6-brands:apple-pay" label="Apple Pay" />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-container flex flex-col gap-4 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Azienda Agricola Officina di Terra · P. IVA 02832400846</p>
          <div className="flex gap-5 font-semibold tracking-widest">
            <a href="https://www.facebook.com/aziendaagricolaofficinaditerra/">FB</a>
            <a href="https://www.instagram.com/">IG</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PaymentLogo({ icon, label }: { icon: string; label: string }) {
  return (
    <span
      aria-label={label}
      className="flex h-8 min-w-[56px] items-center justify-center rounded-[3px] border border-white/15 bg-[#f7f4ed] px-2.5 text-[#10261c]"
      role="img"
    >
      <Icon aria-hidden="true" className="h-5 w-auto max-w-[42px]" icon={icon} />
    </span>
  );
}
