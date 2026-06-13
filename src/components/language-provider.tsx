"use client";

import { createContext, useContext } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";

const common = {
  it: {
    openCart: "Apri carrello",
    closeCart: "Chiudi carrello",
    order: "Il tuo ordine",
    cart: "Carrello",
    emptyCart: "Il carrello è vuoto",
    emptyCartCopy: "Scegli qualcosa di buono dalla Sicilia.",
    quantity: "Qtà",
    remove: "Rimuovi",
    total: "Totale",
    checkout: "Procedi al checkout",
    clearCart: "Svuota il carrello",
    demoCheckout: "Demo front-end: il pagamento verrà collegato al provider e-commerce scelto.",
    goToShop: "Vai allo shop",
    addToCart: "Aggiungi al carrello",
    addedToCart: "Aggiunto al carrello",
    categoryOil: "olio",
    categoryWine: "vino",
  },
  en: {
    openCart: "Open cart",
    closeCart: "Close cart",
    order: "Your order",
    cart: "Cart",
    emptyCart: "Your cart is empty",
    emptyCartCopy: "Choose something good from Sicily.",
    quantity: "Qty",
    remove: "Remove",
    total: "Total",
    checkout: "Proceed to checkout",
    clearCart: "Clear cart",
    demoCheckout: "Front-end demo: payment will be connected to the selected e-commerce provider.",
    goToShop: "Go to shop",
    addToCart: "Add to cart",
    addedToCart: "Added to cart",
    categoryOil: "EVO oil",
    categoryWine: "wine",
  },
} as const;

type LanguageContextValue = {
  locale: Locale;
  t: (typeof common)[Locale];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  const pathname = usePathname();
  const activeLocale: Locale =
    pathname === "/en" || pathname.startsWith("/en/") ? "en" : locale;

  return (
    <LanguageContext.Provider value={{ locale: activeLocale, t: common[activeLocale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
