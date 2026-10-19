import Link from "next/link";
import type { PublicContent } from "@/server/content";
import { contentPath } from "@/server/content";
import { localizedHref, type Locale } from "@/lib/i18n";
import styles from "./Content.module.css";
export function ContentCards({
  items,
  locale,
}: {
  items: PublicContent[];
  locale: Locale;
}) {
  return (
    <div className={styles.grid}>
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
          <h2>{item.title}</h2>
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
