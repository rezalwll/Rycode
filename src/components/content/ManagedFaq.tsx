import { database, databaseConfigured } from "@/server/db";
import { getTranslations } from "@/lib/i18n-server";
import styles from "./Content.module.css";
export async function ManagedFaq({
  scope,
  children,
}: {
  scope: string;
  children: React.ReactNode;
}) {
  if (!databaseConfigured()) return children;
  const { locale } = await getTranslations();
  const rows = await database().faq.findMany({
    where: { scope, locale, published: true },
    orderBy: { position: "asc" },
    take: 30,
  });
  if (!rows.length) return children;
  return (
    <section className={styles.page} style={{ paddingBlock: 70 }}>
      <p className={styles.eyebrow}>FAQ</p>
      <h2>
        {locale === "fa" ? "پرسش‌های متداول" : "Frequently asked questions"}
      </h2>
      {rows.map((row) => (
        <details className={styles.faq} key={row.id}>
          <summary>{row.question}</summary>
          <p>{row.answer}</p>
        </details>
      ))}
    </section>
  );
}
