import Link from "next/link";
import {
  ArrowDown,
  ArrowUpLeft,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import { getTranslations } from "@/lib/i18n-server";
import styles from "./FaqSection.module.css";

export type FaqEntry = { question: string; answer: string };

/** Shared by the public defaults and the administrator's published questions. */
export async function FaqSection({ entries }: { entries: FaqEntry[] }) {
  const { locale, href } = await getTranslations();
  const fa = locale === "fa";
  return (
    <section
      className={styles.section}
      aria-labelledby="faq-title"
      dir={fa ? "rtl" : "ltr"}
    >
      <div className={styles.layout}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>
            <span aria-hidden="true">✦</span> {fa ? "پرسش‌های متداول" : "FAQ"}
          </p>
          <h2 id="faq-title">
            {fa ? "سؤال از شما، پاسخ از ما" : "Your questions, answered"}
          </h2>
          <p className={styles.description}>
            {fa
              ? "هر چیزی که پیش از شروع همکاری خوب است بدانید"
              : "Everything worth knowing before we build together."}
          </p>
        </div>
        <div className={styles.questions}>
          {entries.map((entry, index) => (
            <details
              className={styles.item}
              name="public-faq"
              key={entry.question}
              open={index === 0}
            >
              <summary>
                <span className={styles.number}>
                  {new Intl.NumberFormat(fa ? "fa" : "en", {
                    minimumIntegerDigits: 2,
                  }).format(index + 1)}
                </span>
                <span className={styles.question}>{entry.question}</span>
                <span className={styles.toggle} aria-hidden="true">
                  <ArrowDown size={18} strokeWidth={1.6} />
                </span>
              </summary>
              <div className={styles.answer}>
                <p>{entry.answer}</p>
              </div>
            </details>
          ))}
        </div>
        <div className={styles.help}>
          <span className={styles.helpIcon} aria-hidden="true">
            <MessageCircle size={22} strokeWidth={1.5} />
          </span>
          <div className={styles.helpCopy}>
            <h3>{fa ? "هنوز سؤالی دارید؟" : "Still have a question?"}</h3>
            <p>
              {fa
                ? "دربارهٔ پروژه‌تان با هم صحبت کنیم"
                : "Let’s talk about your project."}
            </p>
          </div>
          <Link
            className={styles.contact}
            href={href("/contact")}
            data-fill-button
          >
            {fa ? "گفت‌وگو با رایکد" : "Talk to RYCODE"}
            {fa ? (
              <ArrowUpLeft size={18} aria-hidden="true" />
            ) : (
              <ArrowUpRight size={18} aria-hidden="true" />
            )}
          </Link>
        </div>
      </div>
    </section>
  );
}
