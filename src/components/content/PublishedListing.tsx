import { contentPath, listPublishedContent } from "@/server/content";
import { getTranslations } from "@/lib/i18n-server";
import { ProjectCardArtwork } from "./ProjectCardArtwork";
import artworkStyles from "./ProjectCardArtwork.module.css";
import { BlogBlogSection } from "@/components/pages/BlogBlogSection";
import styles from "./Content.module.css";
import blogStyles from "@/components/pages/BlogListing.module.css";
import type { ContentKind } from "@/generated/prisma/client";
import { ProgressLink as Link } from "@/components/ProgressLink";
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
            data-fill-button
            rel="prev"
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
            data-fill-button
            rel="next"
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
              <button data-fill-button>{fa ? "جست‌وجو" : "Search"}</button>
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
  const items = result.items;
  if (result.total === 0 && page === 1 && !filters.q && !filters.category)
    return null;
  return (
    <section
      className={styles.projectListing}
      aria-labelledby="published-projects-title"
    >
      <h2 id="published-projects-title">
        {fa ? "نمونه‌کارهای رایکد" : "RYCODE projects"}
      </h2>
      {items.length > 0 && (
        <div className={artworkStyles.grid} data-project-cards>
          {items.map((item, index) => (
            <Link
              key={item.id}
              className={artworkStyles.link}
              href={href(contentPath(item))}
            >
              <ProjectCardArtwork
                image={item.image}
                imageAlt={item.imageAlt}
                title={item.title}
                summary={item.summary}
                locale={locale}
                number={((page - 1) * 12 + index + 1).toLocaleString(
                  fa ? "fa-IR" : "en-US",
                  {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                  },
                )}
              />
            </Link>
          ))}
        </div>
      )}
      {items.length === 0 && (
        <p className={styles.empty}>
          {fa ? "مطلبی با این مشخصات پیدا نشد" : "No matching content found"}
        </p>
      )}
      {pagination}
    </section>
  );
}
