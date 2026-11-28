"use client";

import { useLocale } from "@/components/LocaleProvider";
import { BrandLoading } from "@/components/BrandLoading";
import styles from "@/components/blog/Journal.module.css";

export default function Loading() {
  const { locale } = useLocale();
  return (
    <main className={styles.journal}>
      <BrandLoading
        variant="page"
        label={locale === "fa" ? "در حال بارگذاری مجله…" : "Loading journal…"}
      />
      <div className={styles.loading} aria-hidden>
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} />
        ))}
      </div>
    </main>
  );
}
