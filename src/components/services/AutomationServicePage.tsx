import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpLeft,
  Bot,
  ClipboardList,
  PackageOpen,
  Plus,
  ShieldCheck,
} from "lucide-react";
import { lookupContent } from "@/server/content";
import { AutomationDemo, AutomationMotion } from "./AutomationMotion";
import { automationCardImages } from "./automation-card-images";
import {
  automationFaq,
  automationProcess,
  automationServices,
} from "./automation-copy";
import styles from "./AutomationServicePage.module.css";

const inquiryHref = "/contact?service=connect#project-inquiry";
const shortcuts = [
  { id: "telegram", title: "ربات تلگرام", label: "ثبت درخواست" },
  { id: "orders", title: "خودکارسازی سفارش‌ها", label: "فروشگاه و انبار" },
  { id: "integrations", title: "اتصال سیستم‌ها", label: "حسابداری و API" },
  { id: "spreadsheets", title: "اکسل و گزارش‌ها", label: "فایل و داده" },
];
const connections = [
  ["پیام‌رسان", "تلگرام"],
  ["فروش", "فروشگاه"],
  ["مالی", "حسابداری"],
  ["موجودی", "انبار"],
  ["مشتریان", "CRM"],
  ["اطلاع‌رسانی", "پیامک"],
  ["اطلاع‌رسانی", "ایمیل"],
  ["ثبت اطلاعات", "فرم سایت"],
  ["داده", "Excel و CSV"],
  ["تبادل داده", "API و Webhook"],
  ["پرداخت", "درگاه پرداخت"],
  ["مدیریت", "پنل وب"],
];
const related = [
  ["software", "طراحی نرم‌افزار اختصاصی"],
  ["build", "طراحی سایت و فروشگاه"],
  ["data", "داده و ابزارهای کاری"],
  ["rescue", "رفع باگ و توسعهٔ پروژه"],
  ["continue", "پشتیبانی و توسعهٔ مستمر"],
];

function number(index: number) {
  return (index + 1).toLocaleString("fa-IR", { minimumIntegerDigits: 2 });
}

function Rail({ index, label }: { index: number; label: string }) {
  return (
    <div className={styles.rail} aria-hidden="true">
      <span>{number(index - 1)}</span>
      <small>{label}</small>
    </div>
  );
}

function Section({
  id,
  index,
  label,
  title,
  accent,
  description,
  blue = false,
  children,
}: {
  id: string;
  index: number;
  label: string;
  title: string;
  accent: string;
  description?: string;
  blue?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`${styles.sheet} ${blue ? styles.blue : ""}`}
      aria-labelledby={`${id}-title`}
    >
      <div className={styles.inner}>
        <Rail index={index} label={label} />
        <header className={styles.sectionHead} data-reveal>
          <h2 id={`${id}-title`}>
            {title}
            <br />
            <em>{accent}</em>
          </h2>
          {description && <p>{description}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}

export async function AutomationServicePage() {
  const { content: telegram } = await lookupContent(
    "SERVICE",
    "telegram-bot-development",
    "fa",
  );

  return (
    <main className={styles.page} data-automation-page dir="rtl">
      <AutomationMotion />
      <header className={`${styles.hero} ${styles.blue}`}>
        <div className={styles.inner}>
          <Rail index={0} label="SERVICES" />
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <h1>
                <span>ربات‌ها و</span> <span>خودکارسازی کارها</span>
              </h1>
              <p>
                ثبت سفارش، ارسال پیامک و جابه‌جایی اطلاعات بین فروشگاه، حسابداری
                و فایل‌ها رو بسپار به سیستمی که خودش انجامشون می‌ده.
              </p>
              <div className={styles.actions}>
                <Link href={inquiryHref} className={styles.primary}>
                  می‌خوام کارهام خودکار بشن{" "}
                  <ArrowUpLeft size={17} aria-hidden="true" />
                </Link>
                <a href="#automation-services" className={styles.secondary}>
                  ببین چه چیزهایی می‌شه ساخت{" "}
                  <ArrowDown size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
            <nav
              className={`${styles.shortcuts} ${styles.crosshair}`}
              aria-label="پرش به خدمات خودکارسازی"
            >
              {shortcuts.map(({ id, title, label }) => (
                <a key={id} href={`#automation-${id}`}>
                  <span className={styles.code}>
                    {number(
                      automationServices.findIndex(
                        (service) => service.id === id,
                      ),
                    )}
                  </span>
                  <strong>{title}</strong>
                  <small>{label}</small>
                  <ArrowDown size={18} aria-hidden="true" />
                </a>
              ))}
            </nav>
          </div>
          <nav className={styles.indexStrip} aria-label="بخش‌های صفحه">
            <a href="#automation-services">
              <small>زیرخدمت‌ها</small>
              <strong>۸ مسیر خودکارسازی</strong>
            </a>
            <a href="#automation-examples">
              <small>کاربردها</small>
              <strong>دموی تعاملی</strong>
            </a>
            <a href="#automation-process">
              <small>همکاری</small>
              <strong>مراحل اجرا</strong>
            </a>
            <a href="#automation-questions">
              <small>هزینه و جزئیات</small>
              <strong>پرسش‌های متداول</strong>
            </a>
          </nav>
        </div>
      </header>

      <Section
        id="automation-services"
        index={1}
        label="زیرخدمت‌ها"
        title="چه ابزارهایی"
        accent="می‌تونیم بسازیم؟"
        description="از یک ربات تلگرام تا فرآیندی که سفارش، انبار و حسابداری رو به هم وصل می‌کنه. برای هر خدمت ببین چه چیزی وارد می‌شه و چه نتیجه‌ای می‌گیری."
      >
        <div className={styles.services}>
          {automationServices.map(
            (
              { id, title, intro, items, input, output, tools, condition },
              index,
            ) => {
              return (
                <article
                  id={`automation-${id}`}
                  className={styles.service}
                  key={id}
                  data-reveal
                >
                  <div className={styles.serviceCopy}>
                    <span className={styles.code}>{number(index)}</span>
                    <h3>{title}</h3>
                    <p>{intro}</p>
                    {id === "telegram" && telegram && (
                      <Link
                        className={styles.textLink}
                        href={`/services/${telegram.slug}`}
                      >
                        جزئیات ساخت ربات تلگرام{" "}
                        <ArrowUpLeft size={15} aria-hidden="true" />
                      </Link>
                    )}
                    {id === "spreadsheets" && (
                      <Link className={styles.textLink} href="/services/data">
                        داده و ابزارهای کاری{" "}
                        <ArrowUpLeft size={15} aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                  <ul className={styles.serviceList}>
                    {items.map((item, itemIndex) => (
                      <li key={item}>
                        <span className={styles.code} aria-hidden="true">
                          {number(itemIndex)}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className={`${styles.spec} ${styles.crosshair}`}>
                    <div className={styles.diagram} aria-hidden="true">
                      <Image
                        src={automationCardImages[index]}
                        alt=""
                        fill
                        sizes="(max-width: 540px) 100vw, 360px"
                      />
                      <span className={styles.code}>{number(index)}</span>
                      <span className={styles.imageTag}>RYCODE / {number(index + 1)}</span>
                    </div>
                    <dl>
                      <div>
                        <dt>ورودی</dt>
                        <dd>{input}</dd>
                      </div>
                      <div>
                        <dt>خروجی</dt>
                        <dd>{output}</dd>
                      </div>
                      <div>
                        <dt>ابزارها</dt>
                        <dd>{tools}</dd>
                      </div>
                    </dl>
                    <p className={styles.specNote}>{condition}</p>
                  </div>
                </article>
              );
            },
          )}
        </div>
      </Section>

      <Section
        id="automation-examples"
        index={2}
        label="کاربردها"
        title="یک اتفاق،"
        accent="چند کار مرتبط"
        blue
        description="یک موقعیت رو انتخاب کن و ببین سیستم از کجا شروع می‌کنه، چی رو بررسی می‌کنه و چه خروجی‌هایی می‌سازه."
      >
        <div className={styles.manual} data-reveal>
          <p>
            <strong>الان</strong> سفارش رو توی حسابداری وارد می‌کنی، موجودی رو
            چک می‌کنی و جداگانه پیام می‌فرستی.
          </p>
          <p>
            <strong>بعد از اتصال</strong> ثبت سفارش می‌تونه همین کارها رو
            به‌ترتیب شروع کنه. مرحله‌هایی که تصمیم‌گیری می‌خوان، برای تأیید به
            مسئولشون می‌رسن.
          </p>
        </div>
        <div data-reveal>
          <AutomationDemo />
        </div>
        <div className={styles.connectors} data-reveal>
          <h3>چه ابزارهایی می‌تونن به هم وصل بشن؟</h3>
          <ul className={`${styles.connectorMap} ${styles.crosshair}`}>
            {connections.map(([category, name]) => (
              <li key={name}>
                <small>{category}</small>
                <strong>{name}</strong>
              </li>
            ))}
          </ul>
          <p>
            امکان هر اتصال به دسترسی‌ها و روش تبادل اطلاعات سرویس بستگی داره.
          </p>
        </div>
      </Section>

      <Section
        id="automation-process"
        index={3}
        label="همکاری"
        title="از همون کاری شروع کنیم"
        accent="که بیشتر وقتت رو می‌گیره"
        description="مثلاً اول انتقال سفارش‌ها به اکسل رو خودکار کنیم. بعد، اگر نیاز بود، اعلان یا اتصال به حسابداری رو اضافه می‌کنیم."
      >
        <ol className={`${styles.process} ${styles.crosshair}`} data-reveal>
          {automationProcess.map(([title, description], index) => (
            <li key={title}>
              <span className={styles.code}>{number(index)}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
        <div className={styles.decision} data-reveal>
          <article>
            <Bot size={24} aria-hidden="true" />
            <h3>ربات تلگرام یا پنل وب؟</h3>
            <p>
              ربات برای ثبت و پیگیری سریع مناسبه. پنل برای کار روزانه با
              جدول‌ها، گزارش‌ها و دسترسی کارکنان جا داره. می‌شه مشتری در ربات
              درخواست بده و مدیر توی پنل بررسیش کنه.
            </p>
          </article>
          <article>
            <PackageOpen size={24} aria-hidden="true" />
            <h3>ابزار آماده یا اختصاصی؟</h3>
            <p>
              اگر ابزار آماده نیازت رو پوشش می‌ده، همون رو بررسی می‌کنیم. فرآیند
              خاص، اتصال به نرم‌افزار داخلی یا کنترل داده‌ها می‌تونه طراحی
              اختصاصی رو منطقی کنه.
            </p>
          </article>
          <article>
            <ShieldCheck size={24} aria-hidden="true" />
            <h3>اطلاعات و دسترسی‌ها</h3>
            <p>
              فقط اطلاعات و دسترسی‌های لازم رو مشخص می‌کنیم. برای مراحل حساس
              می‌شه تأیید انسانی، توقف و ثبت خطا گذاشت. رمز عبور یا توکن ربات رو
              در فرم عمومی وارد نکن.
            </p>
          </article>
        </div>
      </Section>

      <Section
        id="automation-questions"
        index={4}
        label="هزینه و جزئیات"
        title="هزینه، دسترسی‌ها"
        accent="و سؤال‌های رایج"
        description="هزینه به تعداد مراحل، اتصال‌ها، امکانات پنل، حجم داده و شرایط نگهداری بستگی داره. هزینهٔ سرویس‌هایی مثل پیامک یا میزبانی جدا مشخص می‌شه."
      >
        <div className={styles.faq} data-reveal>
          {automationFaq.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <Plus size={18} aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
        <div className={styles.related} data-reveal>
          <h3>خدمات مرتبط</h3>
          <ul>
            {related.map(([slug, title]) => (
              <li key={slug}>
                <Link href={`/services/${slug}`}>
                  {title}
                  <ArrowUpLeft size={15} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <Link className={styles.textLink} href="/work">
            مشاهدهٔ نمونه‌کارهای رایکد{" "}
            <ArrowUpLeft size={15} aria-hidden="true" />
          </Link>
        </div>
      </Section>

      <section
        className={`${styles.sheet} ${styles.blue} ${styles.closing}`}
        aria-labelledby="automation-contact-title"
      >
        <div className={styles.inner}>
          <Rail index={5} label="تماس" />
          <div className={styles.closingBody} data-reveal>
            <h2 id="automation-contact-title">
              بگو کدوم کارت <em>تکراریه</em>
            </h2>
            <p>
              بگو الان کارت چطور انجام می‌شه و دوست داری چه بخشی از اون راحت‌تر
              بشه. باهم بررسی می‌کنیم از کجا شروع کنیم.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primary} href={inquiryHref}>
                بیا کارهام رو ساده‌تر کنیم{" "}
                <ArrowUpLeft size={17} aria-hidden="true" />
              </Link>
              <Link className={styles.secondary} href="/services">
                همهٔ خدمات رایکد <ClipboardList size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
