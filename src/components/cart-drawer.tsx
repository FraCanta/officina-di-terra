"use client";

import { ShoppingBag, Trash2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { formatPrice, localizeProduct } from "@/data/products";
import { useCart } from "./cart-provider";
import { useLanguage } from "./language-provider";

export function CartDrawer() {
  const { items, total, isOpen, setIsOpen, removeItem, clearCart } = useCart();
  const { locale, t } = useLanguage();

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen, setIsOpen]);

  return (
    <>
      <button
        aria-label={t.openCart}
        className="relative rounded-full border border-black/10 p-2.5 transition hover:bg-[#173b2b] hover:text-white"
        onClick={() => setIsOpen(true)}
      >
        <ShoppingBag size={18} />
        <CartCount />
      </button>

      {isOpen &&
        createPortal(
          <div className="fixed inset-0 z-[1000] overflow-hidden">
            <button
              aria-label={t.closeCart}
              className="absolute inset-0 h-full w-full cursor-default bg-black/45"
              onClick={() => setIsOpen(false)}
            />
            <aside
              aria-label={t.cart}
              aria-modal="true"
              className="cart-panel absolute right-0 top-0 z-10 flex h-dvh w-[min(100%,28rem)] flex-col overflow-hidden bg-[#f7f4ed] p-6 shadow-2xl"
              role="dialog"
            >
              <div className="flex items-center justify-between border-b border-black/10 pb-5">
                <div>
                  <p className="eyebrow">{t.order}</p>
                  <h2 className="font-serif text-3xl">{t.cart}</h2>
                </div>
                <button aria-label={t.closeCart} onClick={() => setIsOpen(false)}>
                  <X />
                </button>
              </div>

              <div className="flex-1 space-y-5 overflow-y-auto py-6">
                {items.length === 0 ? (
                  <div className="grid h-full place-items-center text-center">
                    <div>
                      <ShoppingBag className="mx-auto mb-4 text-[#9d7c45]" size={36} />
                      <p className="font-serif text-2xl">{t.emptyCart}</p>
                      <p className="mt-2 text-sm text-black/55">{t.emptyCartCopy}</p>
                    </div>
                  </div>
                ) : (
                  items.map((item) => {
                    const displayItem = localizeProduct(item, locale);
                    return (
                      <div className="flex gap-4 border-b border-black/10 pb-5" key={item.slug}>
                        <div className="relative h-24 w-20 shrink-0 overflow-hidden bg-white">
                          <Image
                            alt={displayItem.shortName}
                            className="object-contain p-2"
                            fill
                            sizes="80px"
                            src={item.image}
                          />
                        </div>
                        <div className="flex min-w-0 flex-1 flex-col justify-between">
                          <div>
                            <p className="font-serif text-lg leading-tight">{displayItem.shortName}</p>
                            <p className="mt-1 text-xs uppercase tracking-widest text-black/45">
                              {item.volume} · {t.quantity} {item.quantity}
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">{formatPrice(item.price * item.quantity, locale)}</span>
                            <button
                              aria-label={`${t.remove} ${displayItem.shortName}`}
                              className="text-black/45 hover:text-red-700"
                              onClick={() => removeItem(item.slug)}
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {items.length > 0 && (
                <div className="border-t border-black/10 pt-5">
                  <div className="mb-5 flex items-center justify-between font-serif text-2xl">
                    <span>{t.total}</span>
                    <span>{formatPrice(total, locale)}</span>
                  </div>
                  <button className="button-primary w-full">{t.checkout}</button>
                  <button
                    className="mt-3 w-full text-xs uppercase tracking-widest text-black/50"
                    onClick={clearCart}
                  >
                    {t.clearCart}
                  </button>
                  <p className="mt-4 text-center text-[11px] leading-relaxed text-black/45">
                    {t.demoCheckout}
                  </p>
                </div>
              )}
              <Link className="sr-only" href="/shop">{t.goToShop}</Link>
            </aside>
          </div>,
          document.body,
        )}
    </>
  );
}

function CartCount() {
  const { count } = useCart();
  return (
    <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-[#b88945] text-[10px] text-white">
      {count}
    </span>
  );
}
