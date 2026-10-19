"use client";
import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import styles from "@/components/content/Content.module.css";
export default function ErrorPage({
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  const { locale } = useLocale();
  return (
    <main className={styles.page} style={{ minHeight: "100svh" }}>
      <p className={styles.eyebrow}>RYCODE STUDIO</p>
      <h1>
        {locale === "fa"
          ? "ارتباط با سایت برقرار نشد"
          : "We could not load this page"}
      </h1>
      <p className={styles.summary}>
        {locale === "fa"
          ? "کمی بعد دوباره تلاش کنید. اگر موضوع فوری است با ۰۹۹۸۱۲۲۲۰۲۲ تماس بگیرید"
          : "Please try again shortly, or call 09981222022 for an urgent inquiry."}
      </p>
      <div className={styles.actions}>
        <button className={styles.button} onClick={retry}>
          {locale === "fa" ? "تلاش دوباره" : "Try again"}
        </button>
        <Link className={styles.button} href="tel:09981222022" dir="ltr">
          0998 122 2022
        </Link>
      </div>
    </main>
  );
}
