import Link from "next/link";
import { redirect } from "next/navigation";
import {
  Search,
  ArrowLeft,
  ArrowRight,
  Terminal,
  Code2,
  X,
} from "lucide-react";
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
  const { items, total, featured, categories, filters } = await blogListing(
    locale,
    searchParams,
  );
  const filtered = Boolean(filters.q || filters.category);
  const pages = Math.max(1, Math.ceil(total / 12));
  if (filters.page > pages)
    redirect(href(listingHref("ARTICLE", pages, filters)) + "#articles");
  const categoryUrl = (category: string) => {
    const q = new URLSearchParams();
    if (category) q.set("category", category);
    if (filters.q) q.set("q", filters.q);
    return href("/blog" + (q.size ? "?" + q : "") + "#articles");
  };
  return (
    <main className={styles.journal} dir={fa ? "rtl" : "ltr"}>
      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>
            <span aria-hidden>✦</span> RYCODE JOURNAL
          </span>
          <h1>{fa ? "مجله برنامه‌نویسی" : "The developer journal"}</h1>
          <p>
            {fa
              ? "از اولین خط کد تا ساختن محصول بهتر؛ یادداشت‌ها، آموزش‌ها و تجربه‌هایی برای توسعه‌دهنده‌های کنجکاو"
              : "From your first line of code to a better product. Practical guides, engineering notes and ideas for curious developers."}
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
              aria-label={fa ? "جست‌وجو در مقالات" : "Search articles"}
              placeholder={
                fa ? "عنوان، موضوع یا تکنولوژی…" : "Title, topic or technology…"
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
        <div className={styles.terminal} aria-hidden="true" dir="ltr" lang="en">
          <div className={styles.terminalTop}>
            <span>
              <i />
              <i />
              <i />
            </span>
            <span>
              <Terminal size={13} /> rycode / journal
            </span>
          </div>
          <div className={styles.terminalBody}>
            <span className={styles.terminalComment}>
              {"// Learn. Build. Share."}
            </span>
            <p>
              <span className={styles.codeKeyword}>const</span> developer ={" "}
              {"{"}
            </p>
            <p>
              &nbsp; curiosity:{" "}
              <span className={styles.codeString}>{'"always on"'}</span>,
            </p>
            <p>
              &nbsp; ideas: [
              <span className={styles.codeString}>{'"code"'}</span>,{" "}
              <span className={styles.codeString}>{'"create"'}</span>],
            </p>
            <p>
              &nbsp; nextStep:{" "}
              <span className={styles.codeString}>{'"keep learning"'}</span>
            </p>
            <p>{"}"};</p>
            <div className={styles.terminalStatus}>
              <span /> Ready for your next idea <Code2 size={16} />
            </div>
          </div>
        </div>
      </header>
      <nav
        className={styles.categories}
        aria-label={fa ? "دسته‌بندی مقالات" : "Article categories"}
      >
        {["", ...categories].map((category) => (
          <Link
            key={category}
            href={categoryUrl(category)}
            className={
              filters.category === category ? styles.selectedCategory : ""
            }
            aria-current={filters.category === category ? "page" : undefined}
          >
            <bdi>{category || (fa ? "همه مقالات" : "All articles")}</bdi>
          </Link>
        ))}
      </nav>
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
              {fa ? "چند ایده برای عمیق‌تر شدن" : "A few ideas worth exploring"}
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
              {fa ? "بخوان و بساز" : "READ & BUILD"}
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
                ? "عبارت کوتاه‌تری جست‌وجو کن یا دسته‌بندی دیگری را ببین"
                : "Try a shorter search or explore another category."}
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
