import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpLeft,
  Blocks,
  CalendarDays,
  ClipboardList,
  Globe2,
  LayoutDashboard,
  Monitor,
  Plus,
  Smartphone,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import {
  softwareFaq,
  softwareProcess,
  softwareRelated,
  softwareServices,
} from "./software-copy";
import styles from "./SoftwareServicePage.module.css";

const inquiryHref = "/contact?service=software";
const number = new Intl.NumberFormat("fa");
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
      <div className={styles.container}>
        <header className={styles.hero}>
          <Link className={styles.back} href="/services">
            همهٔ خدمات <ArrowLeft size={16} aria-hidden="true" />
          </Link>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <h1>طراحی و توسعهٔ نرم‌افزار اختصاصی</h1>
              <p className={styles.lead}>
                بعضی کارها، نرم‌افزار خودشون رو می‌خوان.
              </p>
              <p>
                از یک ابزار برای کارهای روزمره تا پنل تحت وب، نرم‌افزار ویندوز و
                اپ اندروید. نرم‌افزار رو با توجه به روش کار تیم و نیاز مشتری‌هات
                می‌سازیم.
              </p>
              <div className={styles.actions}>
                <InquiryLink label="می‌خوام نرم‌افزارم رو بسازم" />
                <a className={styles.secondary} href="#software-map">
                  چه نرم‌افزارهایی می‌سازیم؟{" "}
                  <ArrowDown size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
            <Image
              className={styles.heroPhoto}
              src="/brand/software-service/desktop-workspace.webp"
              alt="مانیتور و میز کار در نور پنجره"
              width={1440}
              height={810}
              sizes="(max-width: 760px) calc(100vw - 36px), (max-width: 1284px) 50vw, 642px"
              loading="eager"
            />
          </div>
        </header>

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
              <p>ورود دوبارهٔ اطلاعات و آماده‌کردن دستی گزارش‌ها رو کمتر کن.</p>
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
                  <details>
                    <summary>
                      امکانات قابل اجرا
                      <Plus size={16} aria-hidden="true" />
                    </summary>
                    <ul>
                      {service.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </details>
                  {service.id === "windows" && (
                    <Link
                      className={styles.inlineLink}
                      href="/services/windows-software-development"
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
              <li>رابطی که با کار روزانهٔ کاربران جور باشه</li>
              <li>دسترسی متناسب با نقش هر کاربر</li>
              <li>اتصال سیستم‌ها برای کم‌شدن ورود تکراری اطلاعات</li>
              <li>گزارش‌هایی که به تصمیم‌گیری کمک کنن</li>
              <li>ساختار آمادهٔ نگهداری و تغییرات بعدی</li>
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
          aria-label="انتخاب راه‌حل و نسخهٔ اول"
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
              برای مدیریت سفارش، نسخهٔ اول می‌تونه ثبت، پیگیری و گزارش داشته
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
              برای آشنایی با طرح‌های رابط و شیوهٔ ارائهٔ پروژه‌ها، به صفحهٔ
              نمونه‌کارها برو.
            </p>
            <Link className={styles.secondary} href="/work">
              دیدن نمونه‌کارها <ArrowUpLeft size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section
          className={styles.estimate}
          aria-labelledby="software-cost-title"
        >
          <div>
            <h2 id="software-cost-title">هزینهٔ ساخت نرم‌افزار چقدره؟</h2>
            <p>
              نوع نرم‌افزار، تعداد امکانات و نقش‌ها، اتصال به ابزارهای دیگر،
              انتقال داده و نیازهای امنیتی روی هزینه و زمان اثر دارن. بعد از
              مشخص‌شدن محدوده، می‌شه دربارهٔ اجرای مرحله‌ای و پرداخت توافق کرد.
            </p>
          </div>
          <InquiryLink label="دربارهٔ هزینهٔ نرم‌افزارم بپرسم" />
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

        <section
          className={styles.closing}
          aria-labelledby="software-contact-title"
        >
          <div>
            <h2 id="software-contact-title">
              ایده‌ات رو بگو تا راه ساختنش رو پیدا کنیم
            </h2>
            <p>
              بگو نرم‌افزار قراره چه کاری انجام بده و چه کسانی ازش استفاده
              می‌کنن.
            </p>
          </div>
          <div className={styles.actions}>
            <InquiryLink label="بیا دربارهٔ نرم‌افزارم حرف بزنیم" />
            <Link className={styles.secondary} href="/services">
              همهٔ خدمات <ArrowLeft size={16} aria-hidden="true" />
            </Link>
          </div>
        </section>

        <nav className={styles.related} aria-label="خدمات مرتبط">
          <strong>خدمات مرتبط</strong>
          {softwareRelated.map(({ href, title }) => (
            <Link href={href} key={href}>
              {title} <ArrowUpLeft size={14} aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
