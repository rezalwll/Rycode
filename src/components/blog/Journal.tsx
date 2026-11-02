import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpLeft, Search, X } from "lucide-react";
import { blogListing } from "@/server/blog";
import { getTranslations } from "@/lib/i18n-server";
import { listingHref, type ListingSearchParams } from "@/lib/listing-params";
import { ArticleCard } from "./ArticleCard";
import journal from "./Journal.module.css";
import styles from "./BusinessJournal.module.css";

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
  const lead = featured[0];
  return (
    <main
      className={`${journal.journal} ${styles.business}`}
      dir={fa ? "rtl" : "ltr"}
    >
      <header className={styles.hero}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span aria-hidden>✦</span>{" "}
            {fa
              ? "بلاگ رایکد / برای کسب‌وکار تو"
              : "RYCODE JOURNAL / FOR YOUR BUSINESS"}
          </p>
          <h1>
            {fa ? (
              <>
                تصمیم روشن‌تر،
                <br />
                <span>کسب‌وکار جلوتر</span>
              </>
            ) : (
              <>
                Clearer decisions.
                <br />
                <span>A better next step.</span>
              </>
            )}
          </h1>
          <p className={styles.intro}>
            {fa
              ? "قبل از سفارش سایت، نرم‌افزار یا سئو، گزینه‌هایت را بشناس. اینجا دربارهٔ هزینه، انتخاب راه‌حل و بهتر کارکردن کسب‌وکارت می‌خوانی؛ ساده و کاربردی."
              : "Understand your options before investing in a website, software or SEO. Practical reading on budgets, choosing a solution and improving the way your business works."}
          </p>
          <div className={styles.heroLinks}>
            <a href="#articles" data-fill-button className={styles.primary}>
              {fa ? "راهنمای تصمیم بعدی تو" : "Find your next step"}
              <ArrowUpLeft size={18} aria-hidden />
            </a>
            <Link href={href("/contact")}>
              {fa
                ? "دربارهٔ پروژه‌ات حرف بزنیم"
                : "Let's talk about your project"}
              <span aria-hidden>{fa ? "←" : "→"}</span>
            </Link>
          </div>
          <div className={styles.note}>
            <span aria-hidden>↳</span>
            {fa
              ? "از سؤال‌های واقعی، تا انتخابی که به کارت می‌آید"
              : "Real questions. Useful answers. A more informed choice."}
          </div>
        </div>
        {lead ? (
          <Link className={styles.spotlight} href={href("/blog/" + lead.slug)}>
            <div className={styles.spotlightImage}>
              {lead.image && (
                <img
                  src={lead.image}
                  alt={lead.imageAlt || lead.title}
                  width={1200}
                  height={750}
                  fetchPriority="high"
                />
              )}
              <span>{fa ? "پیشنهاد برای شروع" : "A GOOD PLACE TO START"}</span>
            </div>
            <div className={styles.spotlightCopy}>
              <h2>{lead.title}</h2>
              <p>{lead.summary}</p>
              <span>
                {fa ? "راهنما را بخوان" : "Read the guide"}
                <ArrowUpLeft size={20} aria-hidden />
              </span>
            </div>
          </Link>
        ) : (
          <div className={styles.manifesto}>
            <span aria-hidden>✦</span>
            <p>
              {fa
                ? "راه‌حل خوب، از فهم درست مسئله شروع می‌شود"
                : "A useful solution starts with understanding the problem."}
            </p>
            <Link href={href("/services")}>
              {fa ? "خدمات رایکد" : "Explore our services"} ↗
            </Link>
          </div>
        )}
      </header>
      {!filtered && featured.length > 1 && (
        <section
          className={styles.shortcuts}
          aria-label={fa ? "پیشنهاد مطالعه" : "Suggested reading"}
        >
          <p>
            {fa ? "شاید سؤال تو هم باشد" : "IS THIS ON YOUR MIND?"}
            <span aria-hidden>↙</span>
          </p>
          {featured.slice(1).map((article, i) => (
            <Link key={article.id} href={href("/blog/" + article.slug)}>
              <span className={styles.number}>
                {(i + 1).toLocaleString(fa ? "fa-IR" : "en-US")}
              </span>
              <strong>{article.title}</strong>
              <ArrowUpLeft size={20} aria-hidden />
            </Link>
          ))}
        </section>
      )}
      <section
        id="articles"
        className={styles.articles}
        aria-labelledby="all-articles-title"
      >
        <div className={styles.articlesHeader}>
          <div>
            <p className={styles.eyebrow}>
              {fa ? "بخوان، بسنج، انتخاب کن" : "READ. COMPARE. DECIDE."}
            </p>
            <h2 id="all-articles-title">
              {filtered
                ? fa
                  ? "نتیجهٔ جست‌وجو"
                  : "Search results"
                : fa
                  ? "برای قدم بعدی کسب‌وکارت"
                  : "For your next business decision"}
            </h2>
          </div>
          <form
            key={filters.q}
            action={href("/blog") + "#articles"}
            className={styles.search}
            role="search"
          >
            <Search size={18} aria-hidden />
            <input
              name="q"
              type="search"
              defaultValue={filters.q}
              maxLength={100}
              aria-label={fa ? "جست‌وجو در راهنماها" : "Search guides"}
              placeholder={fa ? "چه سؤالی داری؟" : "What is on your mind?"}
            />
            <button type="submit">{fa ? "جست‌وجو" : "Search"}</button>
          </form>
        </div>
        {filtered && (
          <div className={journal.activeFilters}>
            <span>{filters.q || filters.category}</span>
            <Link href={href("/blog") + "#articles"}>
              <X size={14} aria-hidden />
              {fa ? "همهٔ راهنماها" : "All guides"}
            </Link>
          </div>
        )}
        {items.length ? (
          <div className={journal.grid}>
            {items.map((article) => (
              <ArticleCard key={article.id} article={article} locale={locale} />
            ))}
          </div>
        ) : (
          <div className={journal.empty}>
            <Search size={32} aria-hidden />
            <h3>{fa ? "راهنمایی پیدا نشد" : "No guides found"}</h3>
            <p>
              {fa
                ? "عبارت کوتاه‌تری امتحان کن یا همهٔ راهنماها را ببین"
                : "Try a shorter search or browse all guides."}
            </p>
            <Link href={href("/blog") + "#articles"}>
              {fa ? "دیدن همهٔ راهنماها" : "View all guides"} ↗
            </Link>
          </div>
        )}
        {pages > 1 && (
          <nav
            className={journal.pagination}
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
      <section
        className={styles.consult}
        aria-labelledby="journal-consult-title"
      >
        <div>
          <p className={styles.eyebrow}>
            {fa ? "حالا دربارهٔ مسئلهٔ خودت" : "NOW, YOUR OWN CHALLENGE"}
          </p>
          <h2 id="journal-consult-title">
            {fa ? "هنوز بین چند راه مرددی؟" : "Still weighing your options?"}
          </h2>
          <p>
            {fa
              ? "بگو الان کجای کاری و چه نتیجه‌ای می‌خواهی. از همین‌جا مسیر مناسب پروژه‌ات را بررسی کنیم."
              : "Tell us where you are now and what needs to work better. Let's look at the right path for your project."}
          </p>
        </div>
        <Link
          data-fill-button
          className={styles.primary}
          href={href("/contact?topic=project-review")}
        >
          {fa ? "دربارهٔ پروژه‌ام صحبت کنیم" : "Discuss my project"}
          <ArrowUpLeft size={20} aria-hidden />
        </Link>
        <span className={styles.consultStar} aria-hidden>
          ✳
        </span>
      </section>
    </main>
  );
}
