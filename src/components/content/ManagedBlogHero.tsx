import { listPublishedContent } from "@/server/content";
import { getTranslations } from "@/lib/i18n-server";
import { ContentCards } from "./ContentCards";
import styles from "./Content.module.css";
export async function ManagedBlogHero({
  children,
}: {
  children: React.ReactNode;
}) {
  const { locale } = await getTranslations();
  const { items, total } = await listPublishedContent("ARTICLE", locale);
  if (total === 6 && items.every((item) => item.legacy)) return children;
  return (
    <section className={styles.page} style={{ paddingBottom: 0 }}>
      <p className={styles.eyebrow}>
        {locale === "fa" ? "بلاگ رایکد" : "RYCODE Journal"}
      </p>
      <h1>
        {locale === "fa"
          ? "دانستنی‌هایی برای ساختن و رشد کردن"
          : "Ideas for building and growing"}
      </h1>
      <ContentCards items={items.slice(0, 3)} locale={locale} />
    </section>
  );
}
