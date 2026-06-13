"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CartDrawer } from "./cart-drawer";

const links = [
  ["Azienda", "/azienda"],
  ["Prodotti", "/prodotti"],
  ["Shop", "/shop"],
  ["Contatti", "/contatti"],
];

export function Header() {
  const [open, setOpen] = useState(false);

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
          <Link aria-label="Officina di Terra, home" href="/">
            <Image
              alt="Azienda Agricola Officina di Terra"
              className="h-auto w-[220px]"
              height={50}
              priority
              src="https://officinaditerra.com/wp-content/uploads/2023/12/logo-officina-di-terra-nero_sito.png"
              width={250}
            />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {links.map(([label, href]) => (
              <Link className="nav-link" href={href} key={href}>
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden text-xs font-semibold tracking-widest sm:block">IT</span>
            <CartDrawer />
            <button
              aria-label="Apri menu"
              className="rounded-full border border-black/10 p-2.5 lg:hidden"
              onClick={() => setOpen(!open)}
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
        <nav className="flex flex-1 flex-col justify-center">
          {links.map(([label, href], index) => (
            <Link
              className={`${index === 0 ? "" : "border-t border-black/10"} py-6 font-serif text-[clamp(3.2rem,16vw,5.6rem)] leading-[0.92] tracking-[-0.07em] transition duration-300 hover:translate-x-2 hover:text-[#8f642c]`}
              href={href}
              key={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="border-t border-black/10" />
        </nav>

        <p className="pb-3 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#10261c]/55">
          Sicilia biologica &middot; Olio EVO &middot; Nero d&apos;Avola
        </p>
      </div>
    </>
  );
}
