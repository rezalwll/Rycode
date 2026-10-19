import { listPublishedContent } from "@/server/content";
import { getTranslations } from "@/lib/i18n-server";
import { ContentCards } from "./ContentCards";
import { BlogBlogSection } from "@/components/pages/BlogBlogSection";
import styles from "./Content.module.css";
import type { ContentKind } from "@/generated/prisma/client";
import Link from "next/link";
export async function PublishedListing({
  kind,
  searchParams = {},
}: {
  kind: ContentKind;
  searchParams?: { page?: string; q?: string; category?: string };
}) {
  const { locale, href } = await getTranslations();
  const page = Math.max(1, Number(searchParams.page) || 1);
  const result = await listPublishedContent(kind, locale, {
    page,
    search: searchParams.q,
    category: searchParams.category,
  });
  if (
    kind === "ARTICLE" &&
    result.total === 6 &&
    result.items.every((item) => item.legacy) &&
    !searchParams.q &&
    !searchParams.category &&
    page === 1
  )
    return (
      <>
        <section className={styles.page} style={{ paddingBottom: 0 }}>
          <form className={styles.search} action={href("/blog")}>
            <input
              name="q"
              dir={locale === "fa" ? "rtl" : "ltr"}
              aria-label={
                locale === "fa" ? "جست‌وجو در مقاله‌ها" : "Search articles"
              }
              placeholder={
                locale === "fa" ? "جست‌وجو در مقاله‌ها…" : "Search articles…"
              }
              maxLength={100}
            />
            <button className={styles.button}>
              {locale === "fa" ? "جست‌وجو" : "Search"}
            </button>
          </form>
        </section>
        <BlogBlogSection />
      </>
    );
  const items =
    kind === "PROJECT"
      ? result.items.filter((item) => !item.legacy)
      : result.items;
  if (kind === "PROJECT" && items.length === 0) return null;
  return (
    <section
      className={styles.page}
      style={{ paddingTop: 60 }}
      aria-label={locale === "fa" ? "فهرست محتوا" : "Published content"}
    >
      {kind === "ARTICLE" && (
        <form className={styles.search} action={href("/blog")}>
          <input
            name="q"
            dir={locale === "fa" ? "rtl" : "ltr"}
            placeholder={
              locale === "fa" ? "جست‌وجو در مقاله‌ها…" : "Search articles…"
            }
            aria-label={
              locale === "fa" ? "جست‌وجو در مقاله‌ها" : "Search articles"
            }
            defaultValue={searchParams.q || ""}
            maxLength={100}
          />
          <input
            name="category"
            dir={locale === "fa" ? "rtl" : "ltr"}
            placeholder={locale === "fa" ? "دسته‌بندی" : "Category"}
            defaultValue={searchParams.category || ""}
            maxLength={100}
          />
          <button className={styles.button}>
            {locale === "fa" ? "جست‌وجو" : "Search"}
          </button>
        </form>
      )}
      <ContentCards items={items} locale={locale} />
      {items.length === 0 && (
        <p className={styles.empty}>
          {locale === "fa"
            ? "مطلبی با این مشخصات پیدا نشد"
            : "No matching content found"}
        </p>
      )}
      {result.total > 12 && (
        <nav className={styles.actions} aria-label="Pagination">
          {page > 1 && (
            <Link
              className={styles.button}
              href={href(
                `/blog?page=${page - 1}&q=${encodeURIComponent(searchParams.q || "")}&category=${encodeURIComponent(searchParams.category || "")}`,
              )}
            >
              {locale === "fa" ? "قبلی" : "Previous"}
            </Link>
          )}
          <span>{page}</span>
          {page * 12 < result.total && (
            <Link
              className={styles.button}
              href={href(
                `/blog?page=${page + 1}&q=${encodeURIComponent(searchParams.q || "")}&category=${encodeURIComponent(searchParams.category || "")}`,
              )}
            >
              {locale === "fa" ? "بعدی" : "Next"}
            </Link>
          )}
        </nav>
      )}
    </section>
  );
}
