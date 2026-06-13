import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/cart-provider";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PageTransition } from "@/components/page-transition";

export const metadata: Metadata = {
  title: {
    default: "Officina di Terra | Olio e vino biologico siciliano",
    template: "%s | Officina di Terra",
  },
  description:
    "Olio extravergine biologico e Nero d'Avola DOC dalla terra di Agrigento, a un passo dalla Scala dei Turchi.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body>
        <CartProvider>
          <PageTransition />
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
