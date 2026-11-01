import Link from "next/link";
import { ArrowUpLeft, Clock3 } from "lucide-react";
import type { PublicContent } from "@/server/content";
import { localizedHref, type Locale } from "@/lib/i18n";
import { articleDate } from "@/lib/article";
import styles from "./Journal.module.css";

export function ArticleCard({
  article,
  locale,
  featured = false,
  lead = false,
}: {
  article: PublicContent;
  locale: Locale;
  featured?: boolean;
  lead?: boolean;
}) {
  const fa = locale === "fa";
  return (
    <article
      className={`${styles.card} ${featured ? styles.featureCard : ""} ${lead ? styles.leadCard : ""}`}
    >
      <Link
        href={localizedHref("/blog/" + article.slug, locale)}
        className={styles.cardLink}
      >
        <div className={styles.cardImage}>
          {article.image ? (
            <img
              src={article.image}
              alt={article.imageAlt || article.title}
              width={960}
              height={600}
              loading={lead ? "eager" : "lazy"}
              fetchPriority={lead ? "high" : "auto"}
            />
          ) : (
            <div className={styles.coverFallback} aria-hidden>
              <span>{"</>"}</span>
            </div>
          )}
          {article.sample && (
            <span className={styles.sample}>
              {fa ? "محتوای نمونه" : "Sample content"}
            </span>
          )}
          <span className={styles.cardArrow} aria-hidden>
            <ArrowUpLeft size={18} />
          </span>
        </div>
        <div className={styles.cardCopy}>
          <span className={styles.category}>
            <bdi>{article.category || (fa ? "یادداشت‌ها" : "Notes")}</bdi>
          </span>
          <h3>{article.title}</h3>
          <p>{article.summary}</p>
          <div className={styles.cardMeta}>
            <time dateTime={article.publishedAt}>
              {articleDate(article.publishedAt, locale)}
            </time>
            <span>
              <Clock3 size={13} aria-hidden />
              {article.readingTime.toLocaleString(fa ? "fa-IR" : "en-US")}{" "}
              {fa ? "دقیقه" : "min"}
            </span>
          </div>
          {article.tags.length > 0 && (
            <div className={styles.cardTags}>
              {article.tags.slice(0, 3).map((tag) => (
                <span key={tag}>
                  <bdi>{tag}</bdi>
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}
