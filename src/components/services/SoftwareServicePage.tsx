import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpLeft,
  Blocks,
  CalendarDays,
  ClipboardList,
  CodeXml,
  Globe2,
  LayoutDashboard,
  LayoutGrid,
  Monitor,
  Plus,
  Settings2,
  Smartphone,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import {
  softwareFaq,
  softwareProcess,
  softwareServices,
} from "./software-copy";
import { SoftwareServiceClosing } from "./SoftwareServiceClosing";
import styles from "./SoftwareServicePage.module.css";

const inquiryHref = "/contact?service=software";
const number = new Intl.NumberFormat("fa");
const serviceShortcuts = [
  {
    id: "web",
    title: "نرم‌افزار تحت وب",
    summary: "پنل‌ها و سامانه‌های آنلاین",
    Icon: Monitor,
  },
  {
    id: "android",
    title: "اپلیکیشن اندروید",
    summary: "برای مشتری‌ها و کارکنان",
    Icon: Smartphone,
  },
  {
    id: "windows",
    title: "نرم‌افزار ویندوز",
    summary: "ابزار دسکتاپ و آفلاین",
    Icon: LayoutGrid,
  },
  {
    id: "automation",
    title: "ابزارهای سفارشی",
    summary: "اتوماسیون و گردش‌کار",
    Icon: Settings2,
  },
] as const;
const serviceIcons: Record<string, LucideIcon> = {
  web: Globe2,
  windows: Monitor,
  android: Smartphone,
  crm: Users,
  dashboard: LayoutDashboard,
  booking: CalendarDays,
  platform: Blocks,
  automation: Workflow,
};

function InquiryLink({ label }: { label: string }) {
  return (
    <Link className={styles.primary} href={inquiryHref}>
      {label} <ArrowUpLeft size={17} aria-hidden="true" />
    </Link>
  );
}

export function SoftwareServicePage() {
  return (
    <main className={styles.page} dir="rtl" data-software-service-page>
      <header className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <Link className={styles.back} href="/services">
              همه خدمات <ArrowLeft size={16} aria-hidden="true" />
            </Link>
            <h1>
              طراحی و توسعه
              <br />
              نرم‌افزار <span>اختصاصی</span>
            </h1>
            <div className={styles.heroDescription}>
              <p className={styles.lead}>
                بعضی کارها، نرم‌افزار خودشون رو می‌خوان.
              </p>
              <p>
                از یک ابزار برای کارهای روزمره تا پنل تحت وب، نرم‌افزار ویندوز و
                اپ اندروید. نرم‌افزار رو با توجه به روش کار تیم و نیاز مشتری‌هات
                می‌سازیم.
              </p>
            </div>
            <div className={styles.actions}>
              <InquiryLink label="می‌خوام نرم‌افزارم رو بسازم" />
              <a data-secondary-action href="#software-map">
                چه نرم‌افزارهایی می‌سازیم؟
              </a>
            </div>
          </div>
          <figure className={styles.heroVisual}>
            <div className={styles.heroFrame}>
              <Image
                className={styles.heroPhoto}
                src="/brand/software-service/desktop-workspace.webp"
                alt="مانیتور و میز کار در نور پنجره"
                fill
                sizes="(max-width: 760px) calc(100vw - 36px), (max-width: 1384px) 52vw, 710px"
                preload
              />
            </div>
            <span className={styles.heroBadge} aria-hidden="true">
              <CodeXml strokeWidth={1.7} />
            </span>
          </figure>
        </div>
        <nav className={styles.heroLinks} aria-label="انواع نرم‌افزار">
          <ul>
            {serviceShortcuts.map(({ id, title, summary, Icon }) => (
              <li key={id}>
                <a href={`#software-${id}`}>
                  <span className={styles.shortcutIcon} aria-hidden="true">
                    <Icon size={22} />
                  </span>
                  <span>
                    <strong>{title}</strong>
                    <small>{summary}</small>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className={styles.container}>
        <section
          className={styles.needs}
          aria-labelledby="software-needs-title"
        >
          <h2 id="software-needs-title">کدوم بخش از کارت باید راحت‌تر بشه؟</h2>
          <div className={styles.needGrid}>
            <article>
              <ClipboardList size={22} aria-hidden="true" />
              <h3>سفارش‌ها و درخواست‌ها</h3>
              <p>ثبت و پیگیری کارها رو از پیام‌رسان به یک مسیر مشخص بیار.</p>
            </article>
            <article>
              <Users size={22} aria-hidden="true" />
              <h3>اطلاعات مشتری و تیم</h3>
              <p>فایل‌های پراکنده رو یک‌جا کن و دسترسی هر کاربر رو مشخص کن.</p>
            </article>
            <article>
              <Workflow size={22} aria-hidden="true" />
              <h3>کارهای تکراری و گزارش‌ها</h3>
              <p>ورود دوباره اطلاعات و آماده‌کردن دستی گزارش‌ها رو کمتر کن.</p>
            </article>
          </div>
        </section>

        <section
          className={styles.section}
          id="software-map"
          aria-labelledby="software-map-title"
        >
          <div className={styles.sectionHeading}>
            <h2 id="software-map-title">چه نرم‌افزارهایی می‌سازیم؟</h2>
            <p>
              انتخاب بین وب، ویندوز و اندروید به کاربر، محیط کار و امکانات
              موردنیاز بستگی داره.
            </p>
          </div>
          <div className={styles.serviceGrid}>
            {softwareServices.map((service) => {
              const Icon = serviceIcons[service.id];
              return (
                <article
                  className={styles.serviceCard}
                  id={`software-${service.id}`}
                  key={service.id}
                >
                  <span className={styles.serviceIcon}>
                    <Icon size={23} aria-hidden="true" />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <ul
                    className={styles.serviceFeatures}
                    aria-label="امکانات قابل اجرا"
                  >
                    {service.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  {service.id === "windows" && (
                    <Link
                      className={styles.inlineLink}
                      href="/services/software/windows-software"
                    >
                      جزئیات ساخت نرم‌افزار ویندوز{" "}
                      <ArrowUpLeft size={15} aria-hidden="true" />
                    </Link>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section
          className={styles.quality}
          aria-labelledby="software-quality-title"
        >
          <div className={styles.qualityCopy}>
            <h2 id="software-quality-title">
              کار کردن با نرم‌افزار باید راحت باشه
            </h2>
            <ul>
              <li>رابطی که با کار روزانه کاربران جور باشه</li>
              <li>دسترسی متناسب با نقش هر کاربر</li>
              <li>اتصال سیستم‌ها برای کم‌شدن ورود تکراری اطلاعات</li>
              <li>گزارش‌هایی که به تصمیم‌گیری کمک کنن</li>
              <li>ساختار آماده نگهداری و تغییرات بعدی</li>
              <li>امنیت و پشتیبان‌گیری متناسب با اطلاعات پروژه</li>
            </ul>
          </div>
          <Image
            className={styles.photo}
            src="/brand/software-service/laptop-and-coffee.webp"
            alt="لپ‌تاپ و فنجان قهوه روی میز چوبی"
            width={1440}
            height={810}
            sizes="(max-width: 760px) 90vw, (max-width: 1200px) 46vw, 560px"
          />
        </section>

        <section
          className={styles.decisions}
          aria-label="انتخاب راه‌حل و نسخه اول"
        >
          <article>
            <h2>آماده بگیری یا اختصاصی بسازی؟</h2>
            <p>
              اگر یک ابزار آماده نیازت رو پوشش می‌ده، می‌تونه انتخاب مناسبی
              باشه. فرایندهای خاص، نقش‌های متفاوت یا اتصال چند سیستم از دلایل
              بررسی ساخت اختصاصی‌اند.
            </p>
          </article>
          <article>
            <h2>از نسخه‌ای شروع کن که بشه باهاش کار کرد</h2>
            <p>
              برای مدیریت سفارش، نسخه اول می‌تونه ثبت، پیگیری و گزارش داشته
              باشه. پنل مشتری، حسابداری یا اعلان‌ها بعد از بررسی نیاز اضافه
              می‌شن.
            </p>
          </article>
        </section>

        <section
          className={styles.section}
          id="software-process"
          aria-labelledby="software-process-title"
        >
          <div className={styles.sectionHeading}>
            <h2 id="software-process-title">از ایده تا راه‌اندازی</h2>
            <p>برای شروع، توضیح کار فعلی و چیزی که می‌خوای بهتر بشه کافیه.</p>
          </div>
          <ol className={styles.timeline}>
            {softwareProcess.map((step, index) => (
              <li key={step.title}>
                <span aria-hidden="true">{number.format(index + 1)}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section
          className={styles.examples}
          aria-labelledby="software-examples-title"
        >
          <Image
            className={styles.photo}
            src="/brand/software-service/phone-and-notebook.webp"
            alt="گوشی و دفترچه روی میز کار"
            width={1440}
            height={810}
            sizes="(max-width: 760px) 90vw, (max-width: 1200px) 46vw, 560px"
          />
          <div className={styles.examplesCopy}>
            <h2 id="software-examples-title">نمونه‌کارهای رایکد رو ببین</h2>
            <p>
              برای آشنایی با طرح‌های رابط و شیوه ارائه پروژه‌ها، به صفحه
              نمونه‌کارها برو.
            </p>
            <Link data-secondary-action href="/work">
              دیدن نمونه‌کارها
            </Link>
          </div>
        </section>

        <section
          className={styles.estimate}
          aria-labelledby="software-cost-title"
        >
          <div>
            <h2 id="software-cost-title">هزینه ساخت نرم‌افزار چقدره؟</h2>
            <p>
              نوع نرم‌افزار، تعداد امکانات و نقش‌ها، اتصال به ابزارهای دیگر،
              انتقال داده و نیازهای امنیتی روی هزینه و زمان اثر دارن. بعد از
              مشخص‌شدن محدوده، می‌شه درباره اجرای مرحله‌ای و پرداخت توافق کرد.
            </p>
          </div>
          <InquiryLink label="درباره هزینه نرم‌افزارم بپرسم" />
        </section>

        <section className={styles.faq} aria-labelledby="software-faq-title">
          <h2 id="software-faq-title">پرسش‌های متداول</h2>
          <div className={styles.questions}>
            {softwareFaq.map((item) => (
              <details key={item.question} name="software-questions">
                <summary>
                  {item.question}
                  <Plus size={18} aria-hidden="true" />
                </summary>
                <p>
                  {item.answer}
                  {item.href && (
                    <>
                      {" "}
                      <Link className={styles.inlineLink} href={item.href}>
                        {item.link}
                      </Link>
                    </>
                  )}
                </p>
              </details>
            ))}
          </div>
        </section>
      </div>
      <SoftwareServiceClosing inquiryHref={inquiryHref} />
    </main>
  );
}
