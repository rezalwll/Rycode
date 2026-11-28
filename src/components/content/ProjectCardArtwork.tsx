import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import styles from "./ProjectCardArtwork.module.css";

export function ProjectCardArtwork({
  image,
  imageAlt = "",
  title,
  summary,
  locale,
  preview = false,
  number,
}: {
  image: string | null;
  imageAlt?: string;
  title: string;
  summary: string;
  locale: Locale;
  preview?: boolean;
  number?: string;
}) {
  const Heading = preview ? "p" : "h3";

  return (
    <div
      className={styles.artwork}
      data-work-card={number !== undefined || undefined}
      dir={locale === "fa" ? "rtl" : "ltr"}
      data-card-preview={preview || undefined}
    >
      {image && (
        <img
          className={styles.image}
          src={image}
          alt={imageAlt}
          loading={preview ? "eager" : "lazy"}
          decoding="async"
        />
      )}
      {!preview && (
        <span className={styles.arrow} aria-hidden="true">
          <ArrowUpRight size={20} />
        </span>
      )}
      {number && (
        <span className={styles.number} aria-hidden="true">
          {number}
        </span>
      )}
      <div className={styles.caption}>
        <Heading className={styles.title}>{title}</Heading>
        {summary && <p className={styles.summary}>{summary}</p>}
      </div>
    </div>
  );
}
