import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpLeft,
  Check,
  Clock3,
  Plus,
} from "lucide-react";
import type { ReactNode } from "react";
import { seoGrowthCopy as copy } from "./seo-growth-copy";
import styles from "./SeoGrowthPage.module.css";

const inquiryHref = "/contact?service=grow";
const formatNumber = new Intl.NumberFormat("fa", { minimumIntegerDigits: 2 });
const pageLinks = [
  ["growth-diagnosis", "بررسی سایت"],
  ["growth-services", "خدمات سئو"],
  ["growth-process", "مراحل همکاری"],
  ["growth-pricing", "هزینه و زمان"],
  ["growth-faq", "پرسش‌های متداول"],
];

function InquiryLink({ children }: { children: ReactNode }) {
  return (
    <Link className={styles.primary} href={inquiryHref}>
      {children}
      <ArrowUpLeft size={17} aria-hidden="true" />
    </Link>
  );
}

export function SeoGrowthPage() {
  return (
    <main className={styles.page} dir="rtl" data-seo-growth-page>
      <div className={styles.container}>
        <header className={styles.hero} id="growth-overview">
          <Link href="/services" className={styles.back}>
            <ArrowLeft size={16} aria-hidden="true" />
            همهٔ خدمات
          </Link>
          <div className={styles.heroGrid}>
            <div>
              <h1>سئو و رشد سایت</h1>
              <p className={styles.heroLead}>
                سایتت رو ساختی. حالا وقتشه دیده بشه.
              </p>
            </div>
            <div className={styles.heroSummary}>
              <p>
                سایتت رو بررسی می‌کنیم، موانع رشد رو پیدا می‌کنیم و کمک می‌کنیم
                مخاطب درست از جست‌وجو به صفحهٔ درست برسه.
              </p>
              <div className={styles.actions}>
                <InquiryLink>درخواست بررسی سئو</InquiryLink>
                <a className={styles.secondary} href="#growth-services">
                  دیدن خدمات سئو <ArrowDown size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className={styles.cover}>
          <Image
            src="/brand/seo-growth/search-analysis.webp"
            alt="لپ‌تاپ با پیش‌نمایش تحلیل جست‌وجو کنار نقشهٔ صفحات سایت"
            fill
            sizes="(max-width: 1300px) 94vw, 1220px"
            preload
          />
        </div>

        <nav className={styles.jumpLinks} aria-label="بخش‌های صفحه">
          <ul>
            {pageLinks.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <section
          className={styles.diagnosis}
          id="growth-diagnosis"
          aria-labelledby="growth-diagnosis-title"
        >
          <div className={styles.diagnosisCopy}>
            <h2 id="growth-diagnosis-title">چرا سایتت دیده نمی‌شه؟</h2>
            <p>
              با بررسی وضعیت فعلی معلوم می‌شه اول باید سراغ مشکل فنی بریم، محتوا
              رو بهتر کنیم یا روی ورودی‌ها کار کنیم.
            </p>
            <ul className={styles.signals}>
              {copy.diagnosis.map((text) => (
                <li key={text}>
                  <Check size={18} aria-hidden="true" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <figure className={styles.dashboard}>
            {/* Chart excerpt from the AIwork Automation Framer template. */}
            <div>
              <Image
                src="/brand/seo-growth/analysis-dashboard.webp"
                alt="نمونهٔ نمودار میله‌ای در رابط گزارش"
                width={603}
                height={294}
                sizes="(max-width: 760px) 88vw, 530px"
              />
            </div>
            <figcaption>نمونهٔ تصویری گزارش</figcaption>
          </figure>
        </section>

        <section
          className={styles.services}
          id="growth-services"
          aria-labelledby="growth-services-title"
        >
          <div className={styles.servicesIntro}>
            <h2 id="growth-services-title">برای رشد سایت چه کار می‌کنیم؟</h2>
            <p>
              بسته به وضعیت سایت، می‌تونیم از یک بررسی کوتاه، اصلاح چند صفحه یا
              یک برنامهٔ مستمر شروع کنیم.
            </p>
            <InquiryLink>می‌خوام سایتم بررسی بشه</InquiryLink>
          </div>
          <div className={styles.serviceList}>
            {copy.services.map((service, index) => (
              <details
                id={`growth-${service.id}`}
                key={service.id}
                name="growth-services"
              >
                <summary>
                  <span className={styles.number} aria-hidden="true">
                    {formatNumber.format(index + 1)}
                  </span>
                  <span>{service.title}</span>
                  <Plus className={styles.plus} size={18} aria-hidden="true" />
                </summary>
                <div className={styles.disclosureBody}>
                  <p>{service.summary}</p>
                  <ul className={styles.taskList}>
                    {service.tasks.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section
          className={styles.process}
          id="growth-process"
          aria-labelledby="growth-process-title"
        >
          <div className={styles.processCover}>
            <div className={styles.processHeading}>
              <h2 id="growth-process-title">روند همکاری</h2>
              <p>از شناخت سایت تا گزارش تغییرات.</p>
            </div>
            {/* Office photograph from the Dayframe Framer template. */}
            <div className={styles.processImage}>
              <Image
                src="/brand/seo-growth/planning-session.webp"
                alt=""
                fill
                sizes="(max-width: 760px) 94vw, 520px"
              />
            </div>
          </div>
          <ol className={styles.timeline}>
            {copy.process.map((step, index) => (
              <li key={step.title}>
                <span className={styles.number} aria-hidden="true">
                  {formatNumber.format(index + 1)}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          className={styles.pricing}
          id="growth-pricing"
          aria-labelledby="growth-pricing-title"
        >
          <div className={styles.estimateImage}>
            {/* Estimating photograph from the Margin Growth Framer template. */}
            <Image
              src="/brand/seo-growth/project-estimate.webp"
              alt=""
              fill
              sizes="(max-width: 760px) 94vw, 400px"
            />
          </div>
          <div className={styles.pricingCopy}>
            <h2 id="growth-pricing-title">هزینه و زمان سئو</h2>
            <div className={styles.pricingNotes}>
              <article>
                <h3>هزینه به حجم کار بستگی داره</h3>
                <p>
                  اندازهٔ سایت، وضعیت فنی، رقابت و حجم محتوا رو بررسی می‌کنیم تا
                  بشه هزینهٔ پروژه رو برآورد کرد.
                </p>
              </article>
              <article id="growth-timing">
                <h3>
                  <Clock3 size={19} aria-hidden="true" /> زمان نتیجه متغیره
                </h3>
                <p>
                  بعد از بررسی سایت، برنامهٔ اجرا و نحوهٔ سنجش تغییرات رو مشخص
                  می‌کنیم. رتبه و زمان نتیجه تضمینی نیست.
                </p>
              </article>
            </div>
            <InquiryLink>برآورد هزینهٔ سئوی سایت</InquiryLink>
          </div>
        </section>

        <section
          className={styles.faq}
          id="growth-faq"
          aria-labelledby="growth-faq-title"
        >
          <h2 id="growth-faq-title">پرسش‌های متداول</h2>
          <div className={styles.questions}>
            {copy.faq.map((item) => (
              <details key={item.title} name="growth-questions">
                <summary>
                  {item.title}
                  <Plus className={styles.plus} size={18} aria-hidden="true" />
                </summary>
                <div className={styles.disclosureBody}>
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section
          className={styles.closing}
          aria-labelledby="growth-contact-title"
        >
          <div>
            <h2 id="growth-contact-title">بیا ببینیم از کجا شروع کنیم</h2>
            <p>آدرس سایتت رو بفرست و بگو دوست داری چه چیزی بهتر بشه.</p>
          </div>
          <div className={styles.actions}>
            <InquiryLink>درخواست بررسی سئو</InquiryLink>
            <Link className={styles.secondary} href="/services">
              همهٔ خدمات <ArrowLeft size={16} aria-hidden="true" />
            </Link>
          </div>
        </section>

        <nav
          className={styles.related}
          id="growth-related"
          aria-label="خدمات مرتبط"
        >
          <span>خدمات مرتبط</span>
          {copy.related.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.title} <ArrowUpLeft size={14} aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
