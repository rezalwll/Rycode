"use client";

import { useLocale } from "@/components/LocaleProvider";
import styles from "@/components/blog/Journal.module.css";

export default function Loading() {
  const { locale } = useLocale();
  return (
    <main className={styles.journal} aria-busy="true">
      <p role="status">
        {locale === "fa" ? "در حال بارگذاری مجله…" : "Loading journal…"}
      </p>
      <div className={styles.loading} aria-hidden>
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} />
        ))}
      </div>
    </main>
  );
}
