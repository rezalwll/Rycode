import Link from "next/link";
import {
  listPublishedContent,
  contentPath,
  type PublicContent,
} from "@/server/content";
import { getTranslations } from "@/lib/i18n-server";
import { localizedHref } from "@/lib/i18n";
import {
  listingHref,
  listingParams,
  type ListingSearchParams,
} from "@/lib/listing-params";
import styles from "./PortfolioShowcase.module.css";

function VerifiedCard({
  item,
  locale,
  index,
}: {
  item: PublicContent;
  locale: "fa" | "en";
  index: number;
}) {
  return (
    <Link
      className={`${styles.card} ${index === 0 ? styles.featured : ""}`}
      href={localizedHref(contentPath(item), locale)}
    >
      <div className={styles.imageWrap}>
        {item.image ? (
          <img
            src={item.image}
            alt={item.imageAlt}
            loading={index < 2 ? "eager" : "lazy"}
          />
        ) : (
          <div className={styles.imageFallback} aria-hidden="true">
            <span>RYCODE</span>
          </div>
        )}
        <span className={styles.cardArrow} aria-hidden="true">
          {locale === "fa" ? "↖" : "↗"}
        </span>
        <span className={styles.cardIndex}>
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>
          <span>
            {item.category ||
              (locale === "fa" ? "مطالعهٔ موردی" : "Case study")}
          </span>
          <span>{new Date(item.publishedAt).getFullYear()}</span>
        </div>
        <h2>{item.title}</h2>
        <p>{item.summary}</p>
      </div>
    </Link>
  );
}

export async function PortfolioShowcase({
  searchParams = {},
  compact = false,
}: {
  searchParams?: ListingSearchParams;
  compact?: boolean;
}) {
  const { locale, href } = await getTranslations();
  const fa = locale === "fa";
  const filters = listingParams(searchParams);
  const result = await listPublishedContent("PROJECT", locale, {
    page: compact ? 1 : filters.page,
    search: compact ? "" : filters.q,
    category: compact ? "" : filters.category,
  });
  const items = result.items.filter((item) => !item.legacy);
  const page = filters.page;
  const hasNext = !compact && page * 12 < result.total;
  const hasPrevious = !compact && page > 1;
  return (
    <section
      className={`${styles.section} ${compact ? styles.compact : ""}`}
      data-portfolio-showcase={compact ? "compact" : "full"}
    >
      <div className={styles.shell}>
        <div className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>
              <span aria-hidden="true">✦</span>
              {fa ? "نمونه‌کارها" : "SELECTED WORK"}
            </p>
            <h1>
              {compact
                ? fa
                  ? "چیزهایی که با دقت ساخته‌ایم"
                  : "Work built with intent"
                : fa
                  ? "پروژه‌ها و مطالعات موردی"
                  : "Projects and case studies"}
            </h1>
          </div>
          <p className={styles.lead}>
            {fa
              ? "نمونه‌کارهای واقعی پس از تأیید مشتری منتشر می‌شوند؛ هر پروژه از مسئله، تصمیم و مسیر تحویلش حرف می‌زند."
              : "Real work is published after client approval. Every case study explains the challenge, the decisions and the path to delivery."}
          </p>
        </div>
        {!compact && (
          <form className={styles.search} action={href("/work")}>
            <label htmlFor="work-search">
              {fa ? "جست‌وجو در پروژه‌ها" : "Search projects"}
            </label>
            <input
              id="work-search"
              type="search"
              name="q"
              defaultValue={filters.q}
              placeholder={
                fa ? "عنوان یا موضوع پروژه…" : "Project title or topic…"
              }
            />
            <button>{fa ? "جست‌وجو" : "Search"}</button>
            {filters.q && (
              <Link href={href("/work")}>{fa ? "پاک کردن" : "Clear"}</Link>
            )}
          </form>
        )}
        {items.length > 0 ? (
          <div className={styles.grid}>
            {items.map((item, index) => (
              <VerifiedCard
                item={item}
                locale={locale}
                index={index}
                key={item.id}
              />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <span className={styles.emptyMark}>✦</span>
            <h2>
              {fa
                ? "هنوز مطالعهٔ موردی منتشر نشده است"
                : "No approved case studies yet"}
            </h2>
            <p>
              {fa
                ? "پس از تأیید مشتری، پروژه‌ها همراه با جزئیات واقعی اینجا نمایش داده می‌شوند."
                : "Approved projects will appear here with their real context and delivery details."}
            </p>
            {!compact && (
              <Link href={href("/contact")} className={styles.emptyCta}>
                {fa ? "شروع یک گفت‌وگو" : "Start a conversation"}{" "}
                <span aria-hidden="true">{fa ? "↖" : "↗"}</span>
              </Link>
            )}
          </div>
        )}
        {!compact && (hasPrevious || hasNext) && (
          <nav
            className={styles.pagination}
            aria-label={fa ? "صفحه‌بندی پروژه‌ها" : "Project pagination"}
          >
            {hasPrevious && (
              <Link href={href(listingHref("PROJECT", page - 1, filters))}>
                {fa ? "← قبلی" : "← Previous"}
              </Link>
            )}
            <span>{page.toLocaleString(fa ? "fa-IR" : "en-US")}</span>
            {hasNext && (
              <Link href={href(listingHref("PROJECT", page + 1, filters))}>
                {fa ? "بعدی →" : "Next →"}
              </Link>
            )}
          </nav>
        )}
      </div>
    </section>
  );
}
