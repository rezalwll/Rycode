import { listPublishedContent } from "@/server/content";
import { getTranslations } from "@/lib/i18n-server";
import { ContentCards } from "./ContentCards";
import { BlogBlogSection } from "@/components/pages/BlogBlogSection";
import styles from "./Content.module.css";
import type { ContentKind } from "@/generated/prisma/client";
import Link from "next/link";
import {
  listingParams,
  listingHref,
  type ListingSearchParams,
} from "@/lib/listing-params";
export async function PublishedListing({
  kind,
  searchParams: rawParams = {},
}: {
  kind: Extract<ContentKind, "ARTICLE" | "PROJECT">;
  searchParams?: ListingSearchParams;
}) {
  const { locale, href } = await getTranslations();
  const searchParams = listingParams(rawParams);
  const { page } = searchParams;
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
  if (kind === "PROJECT" && result.total === 0 && page === 1) return null;
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
      {(result.total > 12 || page > 1) && (
        <nav
          className={styles.actions}
          aria-label={locale === "fa" ? "صفحه‌بندی" : "Pagination"}
        >
          {page > 1 && (
            <Link
              className={styles.button}
              href={href(listingHref(kind, page - 1, searchParams))}
            >
              {locale === "fa" ? "قبلی" : "Previous"}
            </Link>
          )}
          <span>{page}</span>
          {page * 12 < result.total && (
            <Link
              className={styles.button}
              href={href(listingHref(kind, page + 1, searchParams))}
            >
              {locale === "fa" ? "بعدی" : "Next"}
            </Link>
          )}
        </nav>
      )}
    </section>
  );
}
