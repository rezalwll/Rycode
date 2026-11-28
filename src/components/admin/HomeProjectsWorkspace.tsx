"use client";

import Link from "next/link";
import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { MediaLibrary } from "./MediaLibrary";
import { ProjectHomeCardFields } from "./ProjectHomeCardFields";
import { savePortfolioSettings } from "./PortfolioDisplayFields";
import { statusLabels } from "./admin-labels";
import styles from "./Admin.module.css";

type ProjectChoice = {
  id: string;
  title: string;
  status: string;
  featured: boolean;
};
type HomeProject = {
  id: string;
  status: string;
  sample: boolean;
  featured: boolean;
  featuredImage: string | null;
  homeCardImage: string | null;
  homeCardPosition: number | null;
  position: number;
  translations: {
    locale: Locale;
    title: string;
    summary: string;
    approved: boolean;
    homeCardTitle: string;
    homeCardSummary: string;
  }[];
};

export function HomeProjectsWorkspace({
  choices,
  project,
  isAdmin,
}: {
  choices: ProjectChoice[];
  project: HomeProject | null;
  isAdmin: boolean;
}) {
  const [image, setImage] = useState(project?.homeCardImage ?? "");
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [choiceStates, setChoiceStates] = useState<Record<string, boolean>>({});
  const editable = isAdmin || project?.status === "DRAFT";

  return (
    <>
      <header className={styles.pageHeading}>
        <h1>پروژه‌های صفحه اصلی</h1>
        <p className={styles.muted}>
          در هر زبان، حداکثر سه پروژهٔ منتخب و منتشرشده با ترجمهٔ تأییدشده نمایش
          داده می‌شود. عدد کمتر، اولویت بالاتری دارد.
        </p>
        <Link className={styles.button} href="/admin/projects">
          مدیریت صفحه پروژه‌ها
        </Link>
      </header>
      {choices.length ? (
        <form
          action="/admin/home-projects"
          className={styles.panel}
          method="get"
        >
          <label>
            پروژه
            <select name="project" defaultValue={project?.id ?? ""} required>
              <option value="" disabled>
                یک پروژه انتخاب کنید
              </option>
              {choices.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title} — {statusLabels[item.status]}
                  {(choiceStates[item.id] ?? item.featured) ? " · منتخب" : ""}
                </option>
              ))}
            </select>
          </label>
          <div className={styles.actions}>
            <button type="submit">باز کردن کارت</button>
          </div>
        </form>
      ) : (
        <p className={styles.empty}>
          ابتدا یک پروژه در بخش صفحه پروژه‌ها ایجاد کنید.
        </p>
      )}

      {project && (
        <form
          className={styles.panel}
          onSubmit={async (event) => {
            event.preventDefault();
            if (!editable) return;
            const form = new FormData(event.currentTarget);
            setBusy(true);
            setStatus("");
            const featured = form.get("featured") === "on";
            try {
              await savePortfolioSettings("home-projects", {
                id: project.id,
                featured,
                image: image.trim(),
                position: Number(form.get("position")),
                copy: Object.fromEntries(
                  project.translations.map(({ locale }) => [
                    locale,
                    {
                      title: form.get(locale + "HomeCardTitle"),
                      summary: form.get(locale + "HomeCardSummary"),
                    },
                  ]),
                ),
              });
              setChoiceStates((previous) => ({
                ...previous,
                [project.id]: featured,
              }));
              setStatus("کارت صفحه اصلی ذخیره شد");
            } catch (error) {
              setStatus((error as Error).message);
            } finally {
              setBusy(false);
            }
          }}
        >
          <h2>تنظیم کارت صفحه اصلی</h2>
          <Link
            className={styles.button}
            href={"/admin/projects?project=" + project.id}
          >
            باز کردن صفحهٔ پروژه در پنل
          </Link>
          {!editable && (
            <p className={styles.muted}>
              برای تغییر این کارت، دسترسی مدیر لازم است.
            </p>
          )}
          {project.sample && (
            <p className={styles.muted}>
              این پروژه آزمایشی است و در فهرست عمومی نمایش داده نمی‌شود.
            </p>
          )}
          {project.status === "DRAFT" && (
            <p className={styles.muted}>
              این کارت پس از انتشار پروژه قابل نمایش است.
            </p>
          )}
          <fieldset
            className={styles.portfolioFields}
            disabled={!editable || busy}
          >
            <div className={styles.grid}>
              <label className={styles.check}>
                <input
                  name="featured"
                  type="checkbox"
                  defaultChecked={project.featured}
                />
                نمایش در صفحه اصلی
              </label>
              <label>
                اولویت نمایش
                <input
                  name="position"
                  type="number"
                  min={0}
                  max={9999}
                  defaultValue={project.homeCardPosition ?? project.position}
                  required
                />
              </label>
              <label className={styles.wide}>
                نشانی عکس کارت
                <input
                  value={image}
                  onChange={(event) => setImage(event.target.value)}
                  placeholder="/media/… یا /assets/…"
                  dir="ltr"
                />
              </label>
            </div>
            <p className={styles.muted}>
              اگر نشانی عکس خالی باشه، تصویر شاخص پروژه روی کارت نمایش داده
              می‌شه.
            </p>
            {editable && (
              <details
                onToggle={(event) => setLibraryOpen(event.currentTarget.open)}
              >
                <summary>آپلود یا انتخاب عکس کارت</summary>
                {libraryOpen && <MediaLibrary onSelect={setImage} />}
              </details>
            )}
            <div className={styles.grid}>
              {project.translations.map((translation) => (
                <div
                  key={translation.locale}
                  dir={translation.locale === "fa" ? "rtl" : "ltr"}
                >
                  {!translation.approved && (
                    <p className={styles.muted}>
                      {translation.locale === "fa"
                        ? "این ترجمه هنوز تأیید نشده است."
                        : "This translation is awaiting approval."}
                    </p>
                  )}
                  <ProjectHomeCardFields
                    locale={translation.locale}
                    title={translation.homeCardTitle}
                    summary={translation.homeCardSummary}
                    image={image.trim() || project.featuredImage || ""}
                    fallbackTitle={translation.title}
                    fallbackSummary={translation.summary}
                  />
                </div>
              ))}
            </div>
          </fieldset>
          {editable && (
            <div className={styles.actions}>
              <button disabled={busy}>
                {busy ? "در حال ذخیره…" : "ذخیره کارت صفحه اصلی"}
              </button>
            </div>
          )}
          {status && (
            <p className={styles.message} role="status">
              {status}
            </p>
          )}
        </form>
      )}
    </>
  );
}
