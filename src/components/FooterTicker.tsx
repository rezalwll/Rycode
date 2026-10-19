"use client";

import { createContext, useContext, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { BrandLogo } from "./BrandLogo";
import styles from "./FooterTicker.module.css";

const TickerTone = createContext<"light" | "dark">("light");

export function FooterTicker({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const tone = /^\/(?:(?:fa|en)\/)?(?:contact\/?|work(?:\/[^/]+)?\/?)$/.test(
    pathname,
  )
    ? "dark"
    : "light";

  return (
    <TickerTone.Provider value={tone}>
      <div
        className={`framer-1jk9zd7-container ${styles.ticker}`}
        data-tone={tone}
      >
        {children}
      </div>
    </TickerTone.Provider>
  );
}

export function TickerBrandLogo() {
  return <BrandLogo tone={useContext(TickerTone)} variant="ticker" />;
}
