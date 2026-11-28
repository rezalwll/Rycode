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

export function ProjectHomeCardFields({
  locale,
  title,
  summary,
  image,
  fallbackTitle,
  fallbackSummary,
}: {
  locale: Locale;
  title?: string;
  summary?: string;
  image: string;
  fallbackTitle: string;
  fallbackSummary: string;
}) {
  const [cardTitle, setCardTitle] = useState(title ?? "");
  const [cardSummary, setCardSummary] = useState(summary ?? "");
  const validImage = contentImagePath.safeParse(image.trim());
  const fa = locale === "fa";

  return (
    <fieldset className={styles.homeCardFields}>
      <legend>
        {fa ? "نوشته‌های روی عکس کارت" : "Text over the card image"}
      </legend>
      <p className={styles.muted}>
        {fa
          ? "این نوشته‌ها فقط روی کارت صفحه اصلی دیده می‌شوند. اگر خالی باشند، عنوان و خلاصه نمونه‌کار روی کارت می‌آید."
          : "This text appears on the homepage card. Empty fields use the project title and summary."}
      </p>
      <label>
        {fa ? "تیتر روی عکس" : "Title on image"}
        <input
          name={locale + "HomeCardTitle"}
          value={cardTitle}
          onChange={(event) => setCardTitle(event.target.value)}
          maxLength={homeCardTitleLimit}
        />
      </label>
      <label>
        {fa ? "توضیح روی عکس" : "Description on image"}
        <textarea
          name={locale + "HomeCardSummary"}
          value={cardSummary}
          onChange={(event) => setCardSummary(event.target.value)}
          maxLength={homeCardSummaryLimit}
          rows={2}
        />
      </label>
      <p className={styles.muted}>
        {fa ? "پیش‌نمایش کارت صفحه اصلی" : "Homepage card preview"}
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
