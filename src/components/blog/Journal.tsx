import Link from "next/link";
import { redirect } from "next/navigation";
import { Search, ArrowLeft, ArrowRight, X } from "lucide-react";
import { blogListing } from "@/server/blog";
import { getTranslations } from "@/lib/i18n-server";
import { listingHref, type ListingSearchParams } from "@/lib/listing-params";
import { ArticleCard } from "./ArticleCard";
import styles from "./Journal.module.css";

export async function Journal({
  searchParams,
}: {
  searchParams: ListingSearchParams;
}) {
  const { locale, href } = await getTranslations();
  const fa = locale === "fa";
  const { items, total, featured, filters } = await blogListing(
    locale,
    searchParams,
  );
  const filtered = Boolean(filters.q || filters.category);
  const pages = Math.max(1, Math.ceil(total / 12));
  if (filters.page > pages)
    redirect(href(listingHref("ARTICLE", pages, filters)) + "#articles");
  return (
    <main className={styles.journal} dir={fa ? "rtl" : "ltr"}>
      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>
            <span aria-hidden>✦</span> RYCODE JOURNAL
          </span>
          <h1>{fa ? "بلاگ رایکد" : "The RYCODE journal"}</h1>
          <p>
            {fa
              ? "راهنماهایی برای انتخاب آگاهانهٔ سایت، نرم‌افزار و مسیر رشد کسب‌وکار؛ از مقایسهٔ راه‌حل‌ها تا هزینه و نگهداری"
              : "Practical guides to choosing websites, business software and your next step for growth. Compare solutions, costs and ongoing care."}
          </p>
          <form
            key={filters.q + filters.category}
            action={href("/blog") + "#articles"}
            className={styles.search}
            role="search"
          >
            <Search size={21} aria-hidden />
            <input
              type="search"
              name="q"
              defaultValue={filters.q}
              maxLength={100}
              aria-label={fa ? "جست‌وجو در راهنماها" : "Search guides"}
              placeholder={
                fa
                  ? "عنوان، سؤال یا نیاز کسب‌وکارت…"
                  : "A question, topic or business need…"
              }
            />
            {filters.category && (
              <input type="hidden" name="category" value={filters.category} />
            )}
            <button type="submit">
              {fa ? "جست‌وجو" : "Search"}
              <span aria-hidden>{fa ? "↖" : "↗"}</span>
            </button>
          </form>
        </div>
        <figure className={styles.heroVisual}>
          <img
            src="/brand/journal/journal-hero.webp"
            alt={
              fa
                ? "کتاب باز با مسیری آبی به سوی یک وب‌سایت؛ از آگاهی تا انتخاب راه‌حل دیجیتال"
                : "An open book with a blue path leading to a website; from insight to a digital solution"
            }
            width={1200}
            height={800}
            fetchPriority="high"
          />
        </figure>
      </header>
      {featured.length > 0 && (
        <section className={styles.section} aria-labelledby="featured-title">
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>
                {fa ? "برای شروع" : "START HERE"}
              </p>
              <h2 id="featured-title">
                {fa ? "انتخاب سردبیر" : "Featured reads"}
              </h2>
            </div>
            <span>
              {fa
                ? "پاسخ‌هایی برای سؤال‌های پیش از سفارش"
                : "Useful answers before your next project"}
            </span>
          </div>
          <div className={styles.featured}>
            {featured.map((article, i) => (
              <ArticleCard
                key={article.id}
                article={article}
                locale={locale}
                featured
                lead={i === 0}
              />
            ))}
          </div>
        </section>
      )}
      <section
        className={styles.section}
        id="articles"
        aria-labelledby="all-articles-title"
      >
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>
              {fa ? "بخوان و آگاهانه انتخاب کن" : "READ & DECIDE"}
            </p>
            <h2 id="all-articles-title">
              {filtered
                ? fa
                  ? "نتیجهٔ جست‌وجو"
                  : "Search results"
                : fa
                  ? "همه مقالات"
                  : "All articles"}
            </h2>
          </div>
          <span aria-live="polite">
            {total.toLocaleString(fa ? "fa-IR" : "en-US")}{" "}
            {fa ? "مقاله" : "articles"}
          </span>
        </div>
        {filtered && (
          <div className={styles.activeFilters}>
            <span>
              {[
                filters.q && `${fa ? "جست‌وجو" : "Search"}: ${filters.q}`,
                filters.category,
              ]
                .filter(Boolean)
                .join(" · ")}
            </span>
            <Link href={href("/blog") + "#articles"}>
              <X size={14} aria-hidden />
              {fa ? "پاک‌کردن فیلترها" : "Clear filters"}
            </Link>
          </div>
        )}
        {items.length ? (
          <div className={styles.grid}>
            {items.map((article) => (
              <ArticleCard key={article.id} article={article} locale={locale} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <Search size={32} aria-hidden />
            <h3>{fa ? "مقاله‌ای پیدا نشد" : "No articles found"}</h3>
            <p>
              {fa
                ? "عبارت کوتاه‌تری جست‌وجو کن یا همهٔ مقاله‌ها را ببین"
                : "Try a shorter search or browse all articles."}
            </p>
            <Link href={href("/blog") + "#articles"}>
              {fa ? "دیدن همه مقالات" : "View all articles"}
              <span aria-hidden>↗</span>
            </Link>
          </div>
        )}
        {(pages > 1 || filters.page > 1) && (
          <nav
            className={styles.pagination}
            aria-label={fa ? "صفحه‌بندی مقالات" : "Article pagination"}
          >
            {filters.page > 1 ? (
              <Link
                rel="prev"
                href={
                  href(listingHref("ARTICLE", filters.page - 1, filters)) +
                  "#articles"
                }
              >
                {fa ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
                {fa ? "صفحهٔ قبل" : "Previous"}
              </Link>
            ) : (
              <span />
            )}
            <span>
              {fa ? "صفحهٔ" : "Page"}{" "}
              {filters.page.toLocaleString(fa ? "fa-IR" : "en-US")}{" "}
              {fa ? "از" : "of"} {pages.toLocaleString(fa ? "fa-IR" : "en-US")}
            </span>
            {filters.page < pages ? (
              <Link
                rel="next"
                href={
                  href(listingHref("ARTICLE", filters.page + 1, filters)) +
                  "#articles"
                }
              >
                {fa ? "صفحهٔ بعد" : "Next"}
                {fa ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              </Link>
            ) : (
              <span />
            )}
          </nav>
        )}
      </section>
    </main>
  );
}
