"use client";

import { useState, type ReactNode } from "react";
import {
  Activity,
  ArrowDown,
  ArrowUpLeft,
  CircleHelp,
  Globe,
  Mail,
  RefreshCw,
  ShoppingCart,
  TriangleAlert,
} from "lucide-react";
import { ContactForm, FormField, FormSubmit } from "@/components/ContactForm";
import { wordpressIssues, wordpressRepairSlug } from "./wordpress-repair-copy";
import styles from "./WordPressRepairPage.module.css";

const issueIcons = {
  offline: Globe,
  feature: Mail,
  checkout: ShoppingCart,
  slow: Activity,
  update: RefreshCw,
  unknown: CircleHelp,
};

export function WordPressRepairFlow({ children }: { children: ReactNode }) {
  const [choice, setChoice] = useState<number | null>(null);
  const [site, setSite] = useState("");
  const issue = wordpressIssues[choice ?? 0];
  const PreviewIcon = issueIcons[issue.id];
  const reportContext = [
    choice === null ? "هنوز نمی‌دونم" : issue.title,
    site.trim() && `آدرس عمومی سایت: ${site.trim()}`,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <>
      <header className={styles.hero}>
        <div className={styles.intro}>
          <h1>رفع مشکل وردپرس</h1>
          <p className={styles.headline}>
            سایتت به مشکل خورده؟ <strong>بیا ببینیم چی شده</strong>
          </p>
          <p className={styles.lead}>
            از صفحهٔ سفید و تداخل افزونه تا فرم تماس، ووکامرس و پرداخت. اول خطا
            رو بررسی می‌کنیم تا معلوم بشه کدوم بخش به اصلاح نیاز داره.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#wp-inquiry">
              درخواست بررسی <ArrowUpLeft size={17} aria-hidden="true" />
            </a>
            <a className={styles.secondary} href="#wp-services">
              دیدن مشکلات قابل بررسی <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        <section className={styles.triage} aria-labelledby="wp-triage-title">
          <h2 id="wp-triage-title">سایتت دقیقاً چه مشکلی داره؟</h2>
          <fieldset className={styles.choices}>
            <legend className={styles.visuallyHidden}>
              نشانه‌ای که روی سایت می‌بینی
            </legend>
            {wordpressIssues.map(({ id, title }, index) => {
              const Icon = issueIcons[id];
              return (
                <label key={id}>
                  <input
                    type="radio"
                    name="wp-preview-issue"
                    value={id}
                    aria-controls="wp-preview"
                    checked={choice === index}
                    onChange={() => setChoice(index)}
                  />
                  <span>
                    <Icon size={16} aria-hidden="true" />
                    {title}
                  </span>
                </label>
              );
            })}
          </fieldset>
          <div
            className={styles.preview}
            id="wp-preview"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className={styles.browserBar}>
              <span className={styles.dots} aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <bdi dir="ltr">example.com{issue.route}</bdi>
            </div>
            <div
              key={issue.id}
              className={styles.browserBody}
              data-issue={issue.id}
            >
              <span className={styles.previewIcon}>
                <PreviewIcon size={24} aria-hidden="true" />
              </span>
              <div>
                <h3>{issue.screen}</h3>
                <p>{issue.screenDetail}</p>
              </div>
              <span className={styles.code} aria-hidden="true">
                {issue.code}
              </span>
            </div>
            <p className={styles.review}>{issue.review}</p>
          </div>
          <div className={styles.triageFooter}>
            <p>پیش‌نمایش نمونه</p>
            <a href="#wp-inquiry" onClick={() => setChoice(choice ?? 0)}>
              ثبت درخواست برای این مشکل{" "}
              <ArrowUpLeft size={15} aria-hidden="true" />
            </a>
          </div>
        </section>
      </header>
      {children}
      <section
        className={styles.inquiry}
        id="wp-inquiry"
        aria-labelledby="wp-inquiry-title"
      >
        <div className={styles.inquiryCopy}>
          <h2 id="wp-inquiry-title">مشکل سایتت رو توضیح بده</h2>
          <p>
            بگو چه اتفاقی افتاده، از کی متوجهش شدی و قبلش چه تغییری انجام شده.
            آدرس عمومی سایت، اگر در دسترسه، به بررسی کمک می‌کنه.
          </p>
          <p className={styles.note}>
            <TriangleAlert size={18} aria-hidden="true" /> رمز ورود، اطلاعات
            پرداخت و کلید دسترسی رو توی فرم وارد نکن.
          </p>
        </div>
        <ContactForm
          className={styles.form}
          messageContext={{
            field: "WordPress issue context",
            label: "نوع مشکل وردپرس",
          }}
        >
          <input type="hidden" name="Service" value={wordpressRepairSlug} />
          <input type="hidden" name="Email" value="" />
          <input
            type="hidden"
            name="WordPress issue context"
            value={reportContext}
          />
          <div className={styles.formRow}>
            <label>
              نام و نام خانوادگی
              <FormField
                as="input"
                name="Name"
                autoComplete="name"
                minLength={2}
                maxLength={120}
                required
              />
            </label>
            <label>
              شماره تماس
              <FormField
                as="input"
                type="tel"
                name="Phone"
                autoComplete="tel"
                maxLength={25}
                required
              />
            </label>
          </div>
          <label>
            نوع مشکل
            <select
              value={choice ?? ""}
              onChange={(event) =>
                setChoice(
                  event.target.value === "" ? null : Number(event.target.value),
                )
              }
            >
              <option value="">انتخاب کن</option>
              {wordpressIssues.map(({ id, title }, index) => (
                <option value={index} key={id}>
                  {title}
                </option>
              ))}
            </select>
          </label>
          <label>
            آدرس عمومی سایت (اختیاری)
            <input
              dir="ltr"
              type="text"
              inputMode="url"
              autoComplete="url"
              maxLength={240}
              value={site}
              onChange={(event) => setSite(event.target.value)}
              placeholder="example.com"
            />
          </label>
          <label>
            <span aria-live="polite">
              {choice === null ? "چه مشکلی روی سایت می‌بینی؟" : issue.question}
            </span>
            <FormField
              as="textarea"
              name="Message"
              rows={4}
              minLength={10}
              maxLength={4500}
              required
              placeholder={
                choice === null
                  ? "صفحه یا بخش درگیر و آخرین تغییری که انجام دادی رو بنویس."
                  : issue.hint
              }
            />
          </label>
          <FormSubmit className={styles.primary}>
            ثبت درخواست بررسی وردپرس{" "}
            <ArrowUpLeft size={17} aria-hidden="true" />
          </FormSubmit>
        </ContactForm>
      </section>
    </>
  );
}
