import Link from "next/link";
import { RichContent } from "./RichContent";
import { ContentCards } from "./ContentCards";
import { ContentToc } from "./ContentToc";
import {
  contentSegments,
  relatedContent,
  contentPath,
  serviceHierarchy,
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
  const hierarchy = await serviceHierarchy(content, locale);
  const headings =
    content.kind === "SERVICE"
      ? (content.body.content || []).flatMap((node, index) =>
          node.type === "heading" && Number(node.attrs?.level) === 2
            ? [
                {
                  id: "heading-" + index,
                  title:
                    node.content?.map((child) => child.text || "").join("") ||
                    "",
                },
              ]
            : [],
        )
      : [];
  const faqs = databaseConfigured()
    ? await database().faq.findMany({
        where: { scope: `${segment}/${content.slug}`, locale, published: true },
        orderBy: { position: "asc" },
        take: 20,
      })
    : [];
  const path = localizedHref(contentPath(content), locale);
  const inquiryHref = localizedHref(
    "/contact?service=" +
      encodeURIComponent(
        content.kind === "SERVICE"
          ? content.slug
          : content.serviceId || content.slug,
      ),
    locale,
  );
  const breadcrumbs = [
    { name: fa ? "خانه" : "Home", path: "/" },
    ...(content.kind === "PAGE" ? [] : [{ name: section, path: sectionPath }]),
    ...(hierarchy.parent
      ? [{ name: hierarchy.parent.title, path: contentPath(hierarchy.parent) }]
      : []),
    { name: content.title, path: contentPath(content) },
  ];
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
        ...(content.kind === "SERVICE"
          ? {
              serviceType: content.title,
              provider: {
                "@type": "Organization",
                name: "RYCODE",
                url: absoluteUrl(localizedHref("/", locale)),
              },
              ...(hierarchy.parent ? { category: hierarchy.parent.title } : {}),
            }
          : {
              headline: content.title,
              inLanguage: locale,
              datePublished: content.publishedAt,
              dateModified: content.updatedAt,
              author: { "@type": "Organization", name: content.author },
            }),
        name: content.title,
        description: content.summary,
        url: absoluteUrl(path),
        ...(content.image ? { image: absoluteUrl(content.image) } : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: absoluteUrl(localizedHref(item.path, locale)),
        })),
      },
      ...(faqs.length
        ? [
            {
              "@type": "FAQPage",
              "@id": absoluteUrl(path) + "#faq",
              inLanguage: locale,
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ]
        : []),
    ],
  };
  return (
    <main
      className={
        styles.page +
        (content.kind === "ARTICLE" ? " " + styles.white : "") +
        (content.kind === "SERVICE" ? " " + styles.servicePage : "")
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
        {breadcrumbs.map((item, index) => (
          <span key={item.path}>
            {index > 0 && <span aria-hidden="true"> / </span>}
            {index === breadcrumbs.length - 1 ? (
              <span aria-current="page">{item.name}</span>
            ) : (
              <Link href={localizedHref(item.path, locale)}>{item.name}</Link>
            )}
          </span>
        ))}
      </nav>
      <p className={styles.eyebrow}>{section}</p>
      <h1>{content.title}</h1>
      <p className={styles.summary}>{content.summary}</p>
      {content.kind === "SERVICE" && (
        <div className={styles.actions}>
          <Link
            className={styles.button + " " + styles.primary}
            href={inquiryHref}
          >
            {fa ? "بررسی پروژه و برآورد هزینه" : "Discuss your project"}
            <span aria-hidden="true">{fa ? "↖" : "↗"}</span>
          </Link>
        </div>
      )}
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
      {hierarchy.children.length > 0 && (
        <section
          className={styles.specialties}
          aria-labelledby="specialty-services-title"
        >
          <p className={styles.eyebrow}>
            {fa ? "مسیر تخصصی پروژهٔ تو" : "Find your specialist service"}
          </p>
          <h2 id="specialty-services-title">
            {fa ? "خدمات تخصصی این بخش" : "Specialist services"}
          </h2>
          <p>
            {fa
              ? "برای شناخت دقیق‌تر امکانات، مراحل و شرایط تحویل، صفحهٔ مرتبط با پروژه‌ات را ببین"
              : "Explore the scope, delivery process and handover for your project."}
          </p>
          <div className={styles.services}>
            {hierarchy.children.map((child) => (
              <Link
                key={child.id}
                className={styles.service}
                href={localizedHref(contentPath(child), locale)}
              >
                <h3>{child.title}</h3>
                <p>{child.summary}</p>
                <span>
                  {fa
                    ? "بررسی جزئیات و شروع همکاری ↖"
                    : "Explore this service ↗"}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
      <div className={styles.article}>
        <article>
          {headings.length > 0 && (
            <ContentToc
              headings={headings}
              fa={fa}
              hasFaq={faqs.length > 0}
              mobile
            />
          )}
          <RichContent document={content.body} />
        </article>
        <aside className={styles.aside} data-lenis-prevent>
          <h2>
            {fa ? "دربارهٔ پروژه‌ات حرف بزنیم" : "Tell us about your project"}
          </h2>
          <p>
            {fa
              ? "مسئله و هدفت را بگو تا قدم بعدی را با هم مشخص کنیم"
              : "Share your goals and we will work out the next step."}
          </p>
          <Link className={styles.button} href={inquiryHref}>
            {fa ? "شروع همکاری" : "Get started"}{" "}
            <span aria-hidden="true">{fa ? "↖" : "↗"}</span>
          </Link>
          {content.tags.map((tag) => (
            <span key={tag}>#{tag} </span>
          ))}
          {headings.length > 0 && (
            <ContentToc headings={headings} fa={fa} hasFaq={faqs.length > 0} />
          )}
        </aside>
      </div>
      {faqs.length > 0 && (
        <section aria-labelledby="faq">
          <h2 id="faq">
            {fa ? "پرسش‌های متداول" : "Frequently asked questions"}
          </h2>
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
