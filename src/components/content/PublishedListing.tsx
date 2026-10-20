import { listPublishedContent } from "@/server/content";
import { getTranslations } from "@/lib/i18n-server";
import { ContentCards } from "./ContentCards";
import { BlogBlogSection } from "@/components/pages/BlogBlogSection";
import styles from "./Content.module.css";
import blogStyles from "@/components/pages/BlogListing.module.css";
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
  const filters = listingParams(rawParams);
  const { page } = filters;
  const result = await listPublishedContent(kind, locale, {
    page,
    search: filters.q,
    category: filters.category,
  });
  const fa = locale === "fa";
  const pagination =
    result.total > 12 || page > 1 ? (
      <nav
        className={kind === "ARTICLE" ? blogStyles.pagination : styles.actions}
        aria-label={fa ? "صفحه‌بندی" : "Pagination"}
      >
        {page > 1 && (
          <Link
            className={kind === "PROJECT" ? styles.button : undefined}
            href={href(listingHref(kind, page - 1, filters))}
          >
            {fa ? "قبلی" : "Previous"}
          </Link>
        )}
        <span aria-current="page">
          {page.toLocaleString(fa ? "fa-IR" : "en-US")}
        </span>
        {page * 12 < result.total && (
          <Link
            className={kind === "PROJECT" ? styles.button : undefined}
            href={href(listingHref(kind, page + 1, filters))}
          >
            {fa ? "بعدی" : "Next"}
          </Link>
        )}
      </nav>
    ) : null;
  if (kind === "ARTICLE")
    return (
      <BlogBlogSection
        items={result.items}
        pagination={pagination}
        filters={
          <details
            className={blogStyles.filters}
            open={Boolean(filters.q || filters.category)}
          >
            <summary>{fa ? "جست‌وجو در مقاله‌ها" : "Search articles"}</summary>
            <form className={blogStyles.search} action={href("/blog")}>
              <input
                type="search"
                name="q"
                dir={fa ? "rtl" : "ltr"}
                aria-label={fa ? "جست‌وجو در مقاله‌ها" : "Search articles"}
                placeholder={fa ? "جست‌وجو در مقاله‌ها…" : "Search articles…"}
                defaultValue={filters.q}
                maxLength={100}
              />
              <input
                name="category"
                dir={fa ? "rtl" : "ltr"}
                aria-label={fa ? "دسته‌بندی" : "Category"}
                placeholder={fa ? "دسته‌بندی" : "Category"}
                defaultValue={filters.category}
                maxLength={100}
              />
              <button>{fa ? "جست‌وجو" : "Search"}</button>
              {(filters.q || filters.category) && (
                <Link href={href("/blog")}>
                  {fa ? "پاک کردن فیلترها" : "Clear filters"}
                </Link>
              )}
            </form>
          </details>
        }
      />
    );
  const items = result.items.filter((item) => !item.legacy);
  if (result.total === 0 && page === 1) return null;
  return (
    <section
      className={styles.page}
      style={{ paddingTop: 60 }}
      aria-label={fa ? "فهرست محتوا" : "Published content"}
    >
      <ContentCards items={items} locale={locale} />
      {items.length === 0 && (
        <p className={styles.empty}>
          {fa ? "مطلبی با این مشخصات پیدا نشد" : "No matching content found"}
        </p>
      )}
      {pagination}
    </section>
  );
}
