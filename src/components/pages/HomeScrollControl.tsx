"use client";

import { ArrowDown } from "lucide-react";
import { useSyncExternalStore } from "react";
import type { Locale } from "@/lib/i18n";
import styles from "./HomeScrollControl.module.css";

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("resize", onChange);
  const resize = new ResizeObserver(onChange);
  resize.observe(document.body);
  return () => {
    window.removeEventListener("scroll", onChange);
    window.removeEventListener("resize", onChange);
    resize.disconnect();
  };
}

function isInLowerHalf() {
  const { scrollHeight, clientHeight } = document.documentElement;
  return window.scrollY > (scrollHeight - clientHeight) / 2;
}

const isInLowerHalfOnServer = () => false;

const labels = {
  fa: { up: "رفتن به بالای صفحه", down: "رفتن به پایین صفحه" },
  en: { up: "Go to the top of the page", down: "Go to the bottom of the page" },
};

export function HomeScrollControl({ locale }: { locale: Locale }) {
  const up = useSyncExternalStore(
    subscribeToScroll,
    isInLowerHalf,
    isInLowerHalfOnServer,
  );
  const direction = up ? "up" : "down";

  return (
    <a
      className={styles.control}
      data-direction={direction}
      href={up ? "#main" : "#site-end"}
      aria-label={labels[locale][direction]}
    >
      <ArrowDown size={21} aria-hidden="true" />
    </a>
  );
}
