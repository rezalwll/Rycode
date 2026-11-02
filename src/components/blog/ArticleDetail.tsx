import Link from "next/link";
import { Clock3, CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import type { PublicContent } from "@/server/content";
import { relatedBlogArticles } from "@/server/blog";
import { localizedHref, type Locale } from "@/lib/i18n";
import { absoluteUrl, jsonLd } from "@/lib/seo";
import { articleHeadings, articleDate } from "@/lib/article";
import { RichContent } from "@/components/content/RichContent";
import { ArticleCard } from "./ArticleCard";
import { ArticleReader } from "./ArticleReader";
import { CopyButton } from "./CopyButton";
import { Comments } from "./Comments";
import { publicComments } from "@/server/comments";
import styles from "./Journal.module.css";
import business from "./BusinessJournal.module.css";
import { services } from "@/content/services";

export async function ArticleDetail({
  content,
  locale,
  preview = false,
}: {
  content: PublicContent;
  locale: Locale;
  preview?: boolean;
}) {
  const fa = locale === "fa";
  const service = services.find((item) => item.id === content.serviceId);
  const href = (path: string) => localizedHref(path, locale);
  const related = await relatedBlogArticles(content, locale);
  const comments = preview
    ? null
    : await publicComments(content.id, locale).catch(() => null);
  const path = href("/blog/" + content.slug);
  const breadcrumbs = [
    { name: fa ? "خانه" : "Home", path: href("/") },
    {
      name: fa ? "بلاگ رایکد" : "RYCODE journal",
      path: href("/blog"),
    },
    { name: content.title, path },
  ];
  const structured = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": absoluteUrl(path) + "#article",
        mainEntityOfPage: absoluteUrl(path),
        headline: content.title,
        description: content.summary,
        inLanguage: locale,
        datePublished: content.publishedAt,
        dateModified: content.updatedAt,
        author: { "@type": "Organization", name: content.author || "RYCODE" },
        publisher: {
          "@type": "Organization",
          name: "RYCODE",
          url: absoluteUrl(href("/")),
        },
        ...(content.image ? { image: absoluteUrl(content.image) } : {}),
        articleSection: content.category,
        keywords: content.tags.join(", "),
        timeRequired: "PT" + content.readingTime + "M",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          item: absoluteUrl(b.path),
        })),
      },
    ],
  };
  return (
    <main className={styles.journal} dir={fa ? "rtl" : "ltr"}>
      {preview && (
        <p className={styles.preview}>
          {fa
            ? "پیش‌نمایش خصوصی — این نسخه هنوز ممکن است منتشر نشده باشد"
            : "Private preview — this version may not be published yet"}
        </p>
      )}
      <header className={styles.articleHeader}>
        <nav
          className={styles.breadcrumb}
          aria-label={fa ? "مسیر صفحه" : "Breadcrumb"}
        >
          {breadcrumbs.map((b, i) => (
            <span key={b.path}>
              {i > 0 &&
                (fa ? (
                  <ChevronLeft size={12} aria-hidden />
                ) : (
                  <ChevronRight size={12} aria-hidden />
                ))}
              {i < 2 ? (
                <Link href={b.path}>{b.name}</Link>
              ) : (
                <span aria-current="page">{b.name}</span>
              )}
            </span>
          ))}
        </nav>
        <Link
          className={styles.articleCategory}
          href={href(service ? "/services/" + service.id : "/blog")}
        >
          <span aria-hidden>✦</span>
          <bdi>
            {service
              ? service.title[locale]
              : fa
                ? "راهنمای کسب‌وکار"
                : "Business guide"}
          </bdi>
        </Link>
        <h1>{content.title}</h1>
        <p className={styles.articleSummary}>{content.summary}</p>
        <div className={styles.articleMeta}>
          <span>{content.author || "RYCODE"}</span>
          <time dateTime={content.publishedAt}>
            <CalendarDays size={14} aria-hidden />
            {articleDate(content.publishedAt, locale)}
          </time>
          <span>
            <Clock3 size={14} aria-hidden />
            {content.readingTime.toLocaleString(fa ? "fa-IR" : "en-US")}{" "}
            {fa ? "دقیقه مطالعه" : "min read"}
          </span>
          <CopyButton fa={fa} share className={styles.share} />
        </div>
        {content.sample && (
          <p className={styles.sampleNotice}>
            {fa
              ? "محتوای نمونه برای نمایش امکانات مجله؛ این مقاله آموزش منتشرشدهٔ نهایی رایکد نیست"
              : "Sample content demonstrating the journal. This is not a final published RYCODE tutorial."}
          </p>
        )}
      </header>
      {content.image && (
        <figure className={styles.articleCover}>
          <img
            src={content.image}
            alt={content.imageAlt || content.title}
            width={1200}
            height={600}
            fetchPriority="high"
          />
        </figure>
      )}
      <div className={styles.articleLayout}>
        <ArticleReader headings={articleHeadings(content.body)} fa={fa} />
        <article className={styles.articleBody} id="article-content">
          <RichContent document={content.body} technical locale={locale} />
          <div className={styles.articleEnd}>
            <span>
              {fa
                ? "این مقاله را با بقیه به اشتراک بگذار"
                : "Share this guide with your team"}
            </span>
            <CopyButton fa={fa} share className={styles.share} />
          </div>
        </article>
      </div>
      {!preview && (
        <section
          className={`${business.consult} ${business.articleConsult}`}
          aria-labelledby="article-consult-title"
        >
          <div>
            <p className={business.eyebrow}>
              {fa ? "برای شرایط کسب‌وکار تو" : "FOR YOUR BUSINESS"}
            </p>
            <h2 id="article-consult-title">
              {fa
                ? "این موضوع به پروژهٔ تو هم مربوط است؟"
                : "How does this apply to your project?"}
            </h2>
            <p>
              {fa
                ? "شرایط و هدفت را بگو تا مسیر مناسب را برای همان مسئله بررسی کنیم"
                : "Tell us about your situation and goals so we can assess the right next step."}
            </p>
            {service && (
              <Link
                className={styles.serviceLink}
                href={href("/services/" + service.id)}
              >
                {fa ? "بیشتر دربارهٔ " : "Explore "}
                {service.title[locale]} ↗
              </Link>
            )}
          </div>
          <Link
            data-fill-button
            className={business.primary}
            href={href("/contact" + (service ? "?service=" + service.id : ""))}
          >
            {fa ? "بررسی پروژهٔ من" : "Discuss my project"}{" "}
            <span aria-hidden>{fa ? "↖" : "↗"}</span>
          </Link>
        </section>
      )}
      {!preview && (
        <Comments
          key={content.id + locale}
          articleId={content.id}
          fa={fa}
          initial={comments}
        />
      )}
      {related.length > 0 && (
        <section className={styles.section} aria-labelledby="related-title">
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>
                {fa ? "برای تصمیم کامل‌تر" : "ANOTHER USEFUL PERSPECTIVE"}
              </p>
              <h2 id="related-title">
                {fa ? "برای ادامهٔ مطالعه" : "Related reading"}
              </h2>
            </div>
            <Link href={href("/blog")}>
              {fa ? "همه مقالات" : "All articles"} ↗
            </Link>
          </div>
          <div className={styles.grid}>
            {related.map((article) => (
              <ArticleCard key={article.id} article={article} locale={locale} />
            ))}
          </div>
        </section>
      )}
      {!preview && !content.sample && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(structured) }}
        />
      )}
    </main>
  );
}
