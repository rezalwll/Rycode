import { ProgressLink as Link } from "@/components/ProgressLink";
import type { PublicContent } from "@/server/content";
import { contentPath } from "@/server/content";
import { localizedHref, type Locale } from "@/lib/i18n";
import styles from "./Content.module.css";
export function ContentCards({
  items,
  locale,
  portfolio = false,
  heading: Heading = "h2",
}: {
  items: PublicContent[];
  locale: Locale;
  portfolio?: boolean;
  heading?: "h2" | "h3";
}) {
  return (
    <div
      className={
        portfolio ? `${styles.grid} ${styles.projectGrid}` : styles.grid
      }
      data-project-cards={portfolio || undefined}
    >
      {items.map((item) => (
        <Link
          key={item.id}
          className={styles.card}
          href={localizedHref(contentPath(item), locale)}
        >
          <div className={styles.cardImage}>
            {item.image && (
              <img
                src={item.image}
                alt={item.imageAlt}
                loading="lazy"
                sizes="(max-width:600px) 90vw, (max-width:1000px) 45vw, 350px"
              />
            )}
            <span className={styles.arrow} aria-hidden="true">
              {locale === "fa" ? "↖" : "↗"}
            </span>
          </div>
          {portfolio && item.category && (
            <span className={styles.projectCategory}>{item.category}</span>
          )}
          <Heading>{item.title}</Heading>
          <p>{item.summary}</p>
          <time dateTime={item.publishedAt}>
            {new Date(item.publishedAt).toLocaleDateString(
              locale === "fa" ? "fa-IR" : "en-GB",
            )}
          </time>
        </Link>
      ))}
    </div>
  );
}
