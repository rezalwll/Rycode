"use client";

import Link, { useLinkStatus } from "next/link";
import { createPortal } from "react-dom";
import type { ComponentProps } from "react";
import type { Locale } from "@/lib/i18n";
import { useLocale } from "./LocaleProvider";
import { BrandLoadingMark } from "./BrandLoading";
import styles from "./BrandLoading.module.css";

function NavigationLoading({ locale }: { locale?: Locale }) {
  const { pending } = useLinkStatus();
  const { locale: currentLocale } = useLocale();
  if (!pending) return null;
  const fa = (locale || currentLocale) === "fa";

  return createPortal(
    <div
      className={styles.navigation}
      data-brand-loading="navigation"
      role="status"
      dir={fa ? "rtl" : "ltr"}
      lang={fa ? "fa" : "en"}
    >
      <span className={styles.progressLine} aria-hidden="true" />
      <div className={styles.chip}>
        <BrandLoadingMark />
        <span>{fa ? "در حال بارگذاری…" : "Loading…"}</span>
      </div>
    </div>,
    document.body,
  );
}

export function ProgressLink({
  children,
  loadingLocale,
  ...props
}: ComponentProps<typeof Link> & { loadingLocale?: Locale }) {
  return (
    <Link {...props}>
      {children}
      <NavigationLoading locale={loadingLocale} />
    </Link>
  );
}
