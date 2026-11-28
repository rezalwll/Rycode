import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  CircleAlert,
  FolderOpen,
  Layers2,
  Plus,
  Rocket,
  Wrench,
} from "lucide-react";
import { supportServiceId } from "@/lib/service-routes";
import { SupportGallery, SupportScenarios } from "./SupportShowcases";
import {
  supportFaq,
  supportModels,
  supportProcess,
  supportServices,
} from "./support-copy";
import styles from "./SupportServicePage.module.css";

const qualities = [
  [
    "محدوده روشن",
    "قبل از شروع مشخص می‌کنیم مسئول هر کار کیه و چه درخواست‌هایی پوشش داده می‌شن.",
  ],
  [
    "تغییر کنترل‌شده",
    "تغییر مهم با توجه به ریسک، امکان بازگشت و آزمایش بخش‌های مرتبط اجرا می‌شه.",
  ],
  [
    "اولویت‌بندی درخواست‌ها",
    "اختلالی که فروش رو متوقف کرده با یک تغییر ظاهری در یک اولویت قرار نمی‌گیره.",
  ],
  [
    "گزارش قابل فهم",
    "توی گزارش، کارهای انجام‌شده و مواردی رو که هنوز نیاز به پیگیری دارن می‌بینی.",
  ],
];
const stepNumber = new Intl.NumberFormat("fa-IR", { minimumIntegerDigits: 2 });
const supportNavigation = [
  { href: "#support-intro", label: "نمای کلی" },
  { href: "#support-lifecycle", label: "مسیر پروژه" },
  { href: "#support-services", label: "خدمات" },
  { href: "#support-faq", label: "پرسش‌های متداول" },
] as const;
const supportRequestLabel = "برای پروژه‌ام پشتیبانی می‌خوام";

function requestHref(model?: string) {
  const query = new URLSearchParams({ service: supportServiceId });
  if (model) query.set("model", model);
  return `/contact?${query}#project-inquiry`;
}

function Action({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  const Component = href.startsWith("#") ? "a" : Link;
  return (
    <Component
      data-fill-button={!secondary || undefined}
      data-secondary-action={secondary || undefined}
      href={href}
    >
      {children}
    </Component>
  );
}

function Section({
  id,
  title,
  intro,
  action,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className={styles.section} id={id} aria-labelledby={`${id}-title`}>
      <header className={styles.sectionHead}>
        <div>
          <h2 id={`${id}-title`}>{title}</h2>
          {intro && <p>{intro}</p>}
        </div>
        {action}
      </header>
      {children}
    </section>
  );
}

export function SupportServicePage({ model }: { model?: string | string[] }) {
  const chosenModel = supportModels.find(({ id }) => id === model);
  const inquiryHref = requestHref(chosenModel?.id);
  return (
    <main dir="rtl" data-support-page className={styles.page}>
      <header className={styles.hero} id="support-intro">
        <div className={styles.heroShell}>
          <div className={styles.heroNav}>
            <a className={styles.heroBrand} href="#support-intro">
              <FolderOpen size={32} aria-hidden="true" />
              تحویل پروژه
            </a>
            <nav aria-label="بخش‌های پشتیبانی پروژه">
              {supportNavigation.map(({ href, label }) => (
                <a href={href} key={href}>
                  {label}
                </a>
              ))}
            </nav>
            <Link data-fill-button className={styles.heroNavAction} href={inquiryHref}>
              {supportRequestLabel}
            </Link>
          </div>
          <div className={styles.heroLayout}>
            <div className={styles.heroCopy}>
              <h1 className={styles.heroTitle}>
                تحویل پروژه،<span> آخر ماجرا نیست</span>
              </h1>
              <p className={styles.intro}>
                از نگهداری و رفع خطا تا اضافه کردن امکانات تازه، برای ادامه مسیر
                سایت یا نرم‌افزارت هم می‌تونیم برنامه داشته باشیم.
              </p>
              <div className={styles.actions}>
                <Action href={inquiryHref}>{supportRequestLabel}</Action>
                <a data-secondary-action href="#support-services">
                  ببین چه خدماتی داریم
                </a>
              </div>
            </div>
            <div className={styles.heroVisual} aria-hidden="true">
              <Image
                className={styles.heroArtwork}
                src="/brand/support/hero-handover.webp"
                alt=""
                width={1100}
                height={880}
                sizes="(max-width: 760px) 90vw, (max-width: 1570px) 47vw, 740px"
                fetchPriority="high"
              />
              <svg
                className={styles.artAccent}
                viewBox="0 0 78 73"
                fill="none"
                aria-hidden="true"
              >
                <path d="M10 26 19 5M32 41 55 24M46 63 71 60" />
              </svg>
            </div>
          </div>
          <div className={styles.heroPanels}>
            <section
              className={`${styles.heroPanel} ${styles.lifecyclePanel}`}
              id="support-lifecycle"
              aria-labelledby="support-lifecycle-title"
            >
              <h2 id="support-lifecycle-title">
                <span className={styles.panelIcon}>
                  <Rocket aria-hidden="true" />
                </span>
                مسیر پروژه بعد از راه‌اندازی
              </h2>
              <ol className={styles.lifecycle} role="list">
                <li>راه‌اندازی</li>
                <li>نگهداری</li>
                <li>بهبود</li>
                <li>توسعه</li>
              </ol>
              <p>
                بسته به وضعیت پروژه، می‌تونیم از یک اصلاح کوچک یا یک برنامه
                نگهداری شروع کنیم.
              </p>
            </section>
            <section
              className={styles.heroPanel}
              aria-labelledby="support-projects-title"
            >
              <h2 id="support-projects-title">
                <span className={styles.panelIcon}>
                  <Layers2 aria-hidden="true" />
                </span>
                چه پروژه‌هایی رو بررسی می‌کنیم؟
              </h2>
              <ul className={styles.tags} role="list">
                {[
                  "سایت شرکتی",
                  "فروشگاه اینترنتی",
                  "وردپرس",
                  "نرم‌افزار اختصاصی",
                  "ربات و اتصال‌ها",
                ].map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
              <p>
                اگه پروژه جای دیگه ساخته شده، اول فناوری، دسترسی‌ها و وضعیت
                فنی‌اش رو بررسی می‌کنیم.
              </p>
            </section>
          </div>
        </div>
      </header>

      <div className={styles.shell}>
        <Section
          id="support-scope"
          title="حل یک مشکل یا برنامه‌ای برای ادامه؟"
          intro="از توقف ثبت سفارش تا نیاز به امکانات تازه، نوع درخواست مشخص می‌کنه از کجا شروع کنیم."
        >
          <div className={styles.scopeGrid}>
            <article>
              <CircleAlert size={24} aria-hidden="true" />
              <h3>رفع باگ و اختلال</h3>
              <p>
                وقتی خطای مشخصی مثل خرابی فرم تماس یا پرداخت داری، تمرکز روی
                تشخیص علت و اصلاح همون مسیر است.
              </p>
              <Action href="/services/rescue" secondary>
                خدمات رفع باگ و توسعه پروژه
              </Action>
            </article>
            <article>
              <Wrench size={24} aria-hidden="true" />
              <h3>پشتیبانی و نگهداری</h3>
              <p>
                برای بررسی‌های منظم، به‌روزرسانی کنترل‌شده و اولویت‌بندی
                بهبودها، محدوده و روش همکاری رو مشخص می‌کنیم.
              </p>
              <Action href="#support-models" secondary>
                دیدن مدل‌های همکاری
              </Action>
            </article>
          </div>
        </Section>

        <Section
          id="support-services"
          title="برای بهتر شدن پروژه‌ات چه کار می‌کنیم؟"
          intro="هر خدمت رو باز کن تا ببینی چه چیزهایی رو می‌تونیم بررسی یا اصلاح کنیم."
          action={<Action href={inquiryHref}>درخواست بررسی پروژه</Action>}
        >
          <div className={styles.galleries}>
            <SupportGallery
              items={supportServices.slice(0, 4)}
              label="پشتیبانی سایت و نرم‌افزار"
            />
            <SupportGallery
              items={supportServices.slice(4)}
              label="نگهداری فنی و توسعه"
            />
          </div>
        </Section>

        <Section
          id="support-process"
          title="پشتیبانی چطور شروع می‌شه؟"
          intro="قبل از انجام تغییرات، وضعیت فعلی پروژه و محدوده رسیدگی رو باهم مشخص می‌کنیم."
        >
          <ol className={styles.process}>
            {supportProcess.map(({ title, detail }, index) => (
              <li key={title}>
                <span className={styles.step}>
                  {stepNumber.format(index + 1)}
                </span>
                <h3>{title}</h3>
                <p>{detail}</p>
                <span className={styles.stepLine} aria-hidden="true" />
              </li>
            ))}
          </ol>
        </Section>

        <Section
          id="support-scenarios"
          title="رسیدگی توی عمل چه شکلیه؟"
          intro="نوع پروژه رو انتخاب کن تا مسیر بررسی مشکل و اولویت‌بندی درخواست رو ببینی."
        >
          <SupportScenarios />
        </Section>

        <Section
          id="support-expectations"
          title="از اول بدونیم چه کاری قراره انجام بشه"
        >
          <div className={styles.qualityGrid}>
            {qualities.map(([title, copy]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className={styles.scopeNote}>
            <p>
              <strong>در محدوده توافق</strong> بررسی فنی، به‌روزرسانی‌های مشخص،
              رفع خطاهای توافق‌شده، اصلاح محدود و گزارش کار.
            </p>
            <p>
              <strong>با برآورد جداگانه</strong> بازطراحی گسترده، توسعه قابلیت
              بزرگ، مهاجرت پیچیده، خدمات سئو و هزینه سرویس‌های جانبی.
            </p>
          </div>
        </Section>

        <Section
          id="support-models"
          title="سه مدل همکاری برای سه نوع نیاز"
          intro="هزینه به وضعیت پروژه، تعداد درخواست‌ها، سطح پوشش و شرایط پاسخ‌گویی بستگی داره. بعد از بررسی، محدوده و هزینه رو مشخص می‌کنیم."
        >
          <div className={styles.models}>
            {supportModels.map(
              ({ id, title, description, cadence, points }) => (
                <article key={id} data-selected={id === chosenModel?.id}>
                  <p className={styles.cadence}>{cadence}</p>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <ul>
                    {points.map((point) => (
                      <li key={point}>
                        <Check size={15} aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.modelAction}>
                    <Action
                      href={requestHref(id)}
                      secondary
                    >
                      درخواست {title}
                    </Action>
                  </div>
                </article>
              ),
            )}
          </div>
        </Section>

        <Section id="support-faq" title="پرسش‌های متداول">
          <div className={styles.faq}>
            {supportFaq.map(([question, answer]) => (
              <details name="support-faq" key={question}>
                <summary>
                  {question}
                  <Plus size={19} aria-hidden="true" />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
