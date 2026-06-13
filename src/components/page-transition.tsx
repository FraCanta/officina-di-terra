"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function PageTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState(false);
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;
    const timeout = window.setTimeout(() => setActive(false), 160);
    return () => window.clearTimeout(timeout);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === pathname) return;

      event.preventDefault();
      setActive(true);
      window.setTimeout(() => router.push(`${url.pathname}${url.search}${url.hash}`), 520);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [pathname, router]);

  return (
    <div
      aria-hidden
      className={`page-transition ${active ? "is-active" : ""}`}
    >
      <Image
        alt=""
        className="page-transition-logo object-contain"
        height={96}
        priority
        src="/images/transition-logo.png"
        width={96}
      />
    </div>
  );
}
