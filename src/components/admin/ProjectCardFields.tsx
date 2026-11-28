"use client";

import { useState } from "react";
import { ProjectCardArtwork } from "@/components/content/ProjectCardArtwork";
import {
  contentImagePath,
  homeCardSummaryLimit,
  homeCardTitleLimit,
} from "@/lib/content-rules";
import type { Locale } from "@/lib/i18n";
import styles from "./Admin.module.css";

export function ProjectCardFields({
  locale,
  title,
  summary,
  image,
  fallbackTitle,
  fallbackSummary,
  website = false,
}: {
  locale: Locale;
  title?: string;
  summary?: string;
  image: string;
  fallbackTitle: string;
  fallbackSummary: string;
  website?: boolean;
}) {
  const [cardTitle, setCardTitle] = useState(title ?? "");
  const [cardSummary, setCardSummary] = useState(summary ?? "");
  const validImage = contentImagePath.safeParse(image.trim());
  const fa = locale === "fa";
  const field = website ? "WebsiteCard" : "HomeCard";
  const page = website
    ? fa
      ? "صفحه طراحی سایت"
      : "website design page"
    : fa
      ? "صفحه اصلی"
      : "homepage";

  return (
    <fieldset className={styles.homeCardFields}>
      <legend>
        {fa ? "نوشته‌های روی عکس کارت" : "Text over the card image"}
      </legend>
      <p className={styles.muted}>
        {fa
          ? `این نوشته‌ها روی کارت ${page} نمایش داده می‌شوند. اگر خالی باشند، عنوان و خلاصه پروژه روی کارت می‌آید.`
          : `This text appears on the ${page} card. Empty fields use the project title and summary.`}
      </p>
      <label>
        {fa ? "تیتر روی عکس" : "Title on image"}
        <input
          name={locale + field + "Title"}
          value={cardTitle}
          onChange={(event) => setCardTitle(event.target.value)}
          maxLength={homeCardTitleLimit}
        />
      </label>
      <label>
        {fa ? "توضیح روی عکس" : "Description on image"}
        <textarea
          name={locale + field + "Summary"}
          value={cardSummary}
          onChange={(event) => setCardSummary(event.target.value)}
          maxLength={homeCardSummaryLimit}
          rows={2}
        />
      </label>
      <p className={styles.muted}>
        {fa ? `پیش‌نمایش کارت ${page}` : `Card preview for the ${page}`}
      </p>
      <ProjectCardArtwork
        image={validImage.success ? validImage.data : null}
        title={
          cardTitle.trim() ||
          fallbackTitle ||
          (fa ? "عنوان پروژه" : "Project title")
        }
        summary={cardSummary.trim() || fallbackSummary}
        locale={locale}
        preview
      />
    </fieldset>
  );
}
