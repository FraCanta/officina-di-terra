"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CartDrawer } from "./cart-drawer";
import { useLanguage } from "./language-provider";

export function Header() {
  const { locale } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [switching, setSwitching] = useState(false);
  const baseLinks = [
    [locale === "it" ? "Azienda" : "Estate", "/azienda"],
    [locale === "it" ? "Prodotti" : "Products", "/prodotti"],
    ["Shop", "/shop"],
    ["Magazine", "/magazine"],
    [locale === "it" ? "Contatti" : "Contact", "/contatti"],
  ];
  const localizeHref = (href: string) =>
    locale === "en" ? (href === "/" ? "/en" : `/en${href}`) : href;
  const links = baseLinks.map(([label, href]) => [label, localizeHref(href)]);

  const switchLocale = () => {
    if (switching) return;
    const nextLocale = locale === "it" ? "en" : "it";
    const cleanPath = pathname === "/en" ? "/" : pathname.replace(/^\/en(?=\/)/, "");
    const nextPath = nextLocale === "en"
      ? cleanPath === "/" ? "/en" : `/en${cleanPath}`
      : cleanPath;
    setSwitching(true);
    window.setTimeout(() => {
      document.cookie = `officina-locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
      window.location.assign(nextPath);
    }, 260);
    window.setTimeout(() => setSwitching(false), 760);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f4f0e7]/92 backdrop-blur-xl">
        <div className="site-container flex h-20 items-center justify-between">
          <Link aria-label="Officina di Terra, home" href={localizeHref("/")}>
            <Image
              alt="Azienda Agricola Officina di Terra"
              className="h-auto w-[185px] sm:w-[200px] lg:w-[220px]"
              height={50}
              priority
              src="https://officinaditerra.com/wp-content/uploads/2023/12/logo-officina-di-terra-nero_sito.png"
              width={250}
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map(([label, href]) => (
              <Link className="nav-link" href={href} key={href}>
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              aria-label={locale === "it" ? "Passa all'inglese" : "Switch to Italian"}
              className="language-switch hidden items-center gap-1 text-[0.65rem] font-semibold tracking-[0.14em] sm:flex"
              onClick={switchLocale}
              type="button"
            >
              <span className={locale === "it" ? "is-current" : ""}>IT</span>
              <span className="text-black/25">/</span>
              <span className={locale === "en" ? "is-current" : ""}>EN</span>
            </button>
            <CartDrawer />
            <button
              aria-label={locale === "it" ? "Apri menu" : "Open menu"}
              className="rounded-full border border-black/10 p-2.5 lg:hidden"
              onClick={() => setOpen(!open)}
              type="button"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <div
        aria-hidden={!open}
        className={`fixed inset-x-0 bottom-0 top-20 z-[45] flex flex-col border-t border-black/10 bg-[#fbf8f0] px-6 text-[#10261c] shadow-[0_28px_70px_rgb(16_38_28/0.16)] transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] lg:hidden ${
          open ? "translate-x-0" : "pointer-events-none -translate-x-full"
        }`}
      >
        <nav className="flex flex-1 flex-col justify-start pt-8 sm:pt-12">
          {links.map(([label, href], index) => (
            <Link
              className={`${index === 0 ? "" : "border-t border-black/10"} py-3.5 font-serif text-[clamp(2.35rem,12vw,4.5rem)] leading-[0.92] tracking-[-0.06em] transition duration-300 hover:translate-x-2 hover:text-[#8f642c]`}
              href={href}
              key={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="border-t border-black/10" />
        </nav>
        <div className="flex items-end justify-between pb-10 sm:pb-12">
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[#10261c]/55">
            {locale === "it"
              ? "Sicilia biologica · Olio EVO · Nero d'Avola"
              : "Organic Sicily · EVO oil · Nero d'Avola"}
          </p>
          <button
            className="text-xs font-semibold tracking-[0.18em]"
            onClick={switchLocale}
            type="button"
          >
            {locale === "it" ? "EN" : "IT"}
          </button>
        </div>
      </div>

      <div aria-hidden className={`language-transition ${switching ? "is-active" : ""}`}>
        <Image alt="" height={64} src="/images/transition-logo.png" width={64} />
        <span>{locale === "it" ? "EN" : "IT"}</span>
      </div>
    </>
  );
}
