import Link from "next/link";
import { RichContent } from "./RichContent";
import { ContentCards } from "./ContentCards";
import {
  contentSegments,
  relatedContent,
  contentPath,
  type PublicContent,
} from "@/server/content";
import { database, databaseConfigured } from "@/server/db";
import { localizedHref, type Locale } from "@/lib/i18n";
import { absoluteUrl, jsonLd } from "@/lib/seo";
import styles from "./Content.module.css";
export async function ContentDetail({
  content,
  locale,
  preview = false,
}: {
  content: PublicContent;
  locale: Locale;
  preview?: boolean;
}) {
  const fa = locale === "fa";
  const segment = contentSegments[content.kind];
  const sectionPath = content.kind === "PAGE" ? "/" : "/" + segment;
  const section =
    content.kind === "ARTICLE"
      ? fa
        ? "بلاگ"
        : "Journal"
      : content.kind === "SERVICE"
        ? fa
          ? "خدمات"
          : "Services"
        : content.kind === "PROJECT"
          ? fa
            ? "نمونه‌کارها"
            : "Work"
          : fa
            ? "رایکد"
            : "RYCODE";
  const related = await relatedContent(content, locale);
  const faqs = databaseConfigured()
    ? await database().faq.findMany({
        where: { scope: `${segment}/${content.slug}`, locale, published: true },
        orderBy: { position: "asc" },
        take: 20,
      })
    : [];
  const path = localizedHref(contentPath(content), locale);
  const structured = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type":
          content.kind === "ARTICLE"
            ? "BlogPosting"
            : content.kind === "SERVICE"
              ? "Service"
              : "CreativeWork",
        headline: content.title,
        name: content.title,
        description: content.summary,
        url: absoluteUrl(path),
        inLanguage: locale,
        ...(content.image ? { image: absoluteUrl(content.image) } : {}),
        datePublished: content.publishedAt,
        dateModified: content.updatedAt,
        author: { "@type": "Organization", name: content.author },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: section,
            item: absoluteUrl(localizedHref(sectionPath, locale)),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: content.title,
            item: absoluteUrl(path),
          },
        ],
      },
    ],
  };
  return (
    <main
      className={
        styles.page + (content.kind === "ARTICLE" ? " " + styles.white : "")
      }
    >
      {preview && (
        <p className={styles.preview}>
          پیش‌نمایش خصوصی — این نسخه ممکن است هنوز منتشر نشده باشد
        </p>
      )}
      <nav
        aria-label={fa ? "مسیر صفحه" : "Breadcrumb"}
        className={styles.breadcrumb}
      >
        <Link href={localizedHref("/", locale)}>{fa ? "خانه" : "Home"}</Link>
        <span>/</span>
        <Link href={localizedHref(sectionPath, locale)}>{section}</Link>
        <span>/</span>
        <span>{content.title}</span>
      </nav>
      <p className={styles.eyebrow}>{section}</p>
      <h1>{content.title}</h1>
      <p className={styles.summary}>{content.summary}</p>
      <div className={styles.meta}>
        <span>{content.author}</span>
        <time dateTime={content.publishedAt}>
          {new Date(content.publishedAt).toLocaleDateString(
            fa ? "fa-IR" : "en-GB",
          )}
        </time>
        {content.category && <span>{content.category}</span>}
        <span>
          {fa ? "زمان مطالعه" : "Reading time"}:{" "}
          {Math.max(
            1,
            Math.ceil(JSON.stringify(content.body).split(/\s+/).length / 220),
          )}{" "}
          {fa ? "دقیقه" : "min"}
        </span>
      </div>
      {content.image && (
        <img
          src={content.image}
          alt={content.imageAlt}
          className={styles.cover}
          fetchPriority="high"
        />
      )}
      <div className={styles.article}>
        <article>
          <RichContent document={content.body} />
        </article>
        <aside className={styles.aside}>
          <h2>
            {fa ? "دربارهٔ پروژه‌ات حرف بزنیم" : "Tell us about your project"}
          </h2>
          <p>
            {fa
              ? "مسئله و هدفت را بگو تا قدم بعدی را با هم مشخص کنیم"
              : "Share your goals and we will work out the next step."}
          </p>
          <Link
            className={styles.button}
            href={localizedHref(
              "/contact?service=" +
                encodeURIComponent(content.serviceId || content.slug),
              locale,
            )}
          >
            {fa ? "شروع همکاری" : "Get started"}{" "}
            <span aria-hidden="true">{fa ? "↖" : "↗"}</span>
          </Link>
          {content.tags.map((tag) => (
            <span key={tag}>#{tag} </span>
          ))}
        </aside>
      </div>
      {faqs.length > 0 && (
        <section>
          <h2>{fa ? "پرسش‌های متداول" : "Frequently asked questions"}</h2>
          {faqs.map((faq) => (
            <details key={faq.id} className={styles.faq}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </section>
      )}
      {related.length > 0 && (
        <section>
          <h2>{fa ? "مطالب مرتبط" : "Related reading"}</h2>
          <ContentCards items={related} locale={locale} />
        </section>
      )}
      {!preview && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(structured) }}
        />
      )}
    </main>
  );
}
