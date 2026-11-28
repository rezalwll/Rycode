import Image from "next/image";
import Link from "next/link";
import { ActionBannerArt } from "@/components/content/ActionBannerArt";
import {
  ArrowLeft,
  ArrowUpLeft,
  ChartNoAxesColumnIncreasing,
  Check,
  FileSpreadsheet,
  Layers3,
  Plus,
  ShieldCheck,
} from "lucide-react";
import { dataServiceId } from "@/lib/service-routes";
import { DataReportDemo, SalesPreview, SampleTable } from "./DataReportDemo";
import { ServicePhoto } from "./ServicePhoto";
import photoStyles from "./ServicePhoto.module.css";
import {
  dataFaq,
  dataProcess,
  dataServices,
  toolsComparison,
} from "./data-tools-copy";
import styles from "./DataToolsPage.module.css";

const inquiryHref = `/contact?service=${dataServiceId}`;
const formatNumber = new Intl.NumberFormat("fa-IR", {
  minimumIntegerDigits: 2,
});
const toolIcons = [FileSpreadsheet, ChartNoAxesColumnIncreasing, Layers3];
const commonProblems = [
  [
    "گزارش تکراری",
    "هر هفته چند فایل رو باز می‌کنی تا همون گزارش قبلی رو دوباره بسازی.",
  ],
  [
    "اطلاعات پراکنده",
    "فروش، مشتری‌ها و هزینه‌ها هرکدوم توی یک فایل یا نرم‌افزار دیگه‌ان.",
  ],
  [
    "فایل سخت‌ویرایش",
    "فرمول‌ها به هم وابسته‌ان و یک تغییر کوچک نتیجه شیت دیگه‌ای رو به هم می‌زنه.",
  ],
];

export function DataToolsPage() {
  return (
    <main className={styles.page} dir="rtl" data-data-tools>
      <header className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <Link href="/services" className={styles.back}>
              <ArrowLeft size={15} aria-hidden="true" /> همه خدمات
            </Link>
            <h1>
              اکسل، داده و<br /> ابزارهای کاری
            </h1>
            <p className={styles.heroLead}>
              داده وقتی ارزش دارد که بتوانی با آن تصمیم بگیری
            </p>
            <p>
              فایل‌هات رو مرتب می‌کنیم، گزارش‌های وقت‌گیر رو ساده‌تر می‌کنیم و
              ابزارهایی می‌سازیم که هر روز به کارت بیان.
            </p>
            <div className={styles.actions}>
              <Link href={inquiryHref} data-fill-button className={styles.primary}>
                می‌خوام کار با اطلاعاتم راحت‌تر بشه{" "}
                <ArrowUpLeft size={17} aria-hidden="true" />
              </Link>
              <a href="#data-services" data-secondary-action>
                ببین چه ابزارهایی می‌سازیم
              </a>
            </div>
          </div>
          <div className={styles.heroArt}>
            <Image
              src="/brand/data-tools/excel-workspace.webp"
              alt="لپ‌تاپ با صفحه اکسل و نمودارهای گزارش"
              fill
              sizes="(max-width: 760px) 95vw, (max-width: 1480px) 54vw, 780px"
              preload
            />
          </div>
        </div>
        <div className={styles.frame}>
          <DataReportDemo />
        </div>
      </header>

      <div className={styles.frame}>
        <section
          className={styles.section}
          aria-labelledby="data-problems-title"
        >
          <div className={styles.heading}>
            <h2 id="data-problems-title">
              هنوز همه‌چیز رو با چند فایل اکسل جلو می‌بری؟
            </h2>
            <p>
              وقتی داده‌ها بین چند فایل و چند نفر پخش می‌شن، حتی جواب یک سؤال
              ساده وقت می‌گیره. اصلاح فایل‌های فعلی می‌تونه نقطه شروع باشه.
            </p>
          </div>
          <div className={styles.problemGrid}>
            {commonProblems.map(([title, summary]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{summary}</p>
              </article>
            ))}
          </div>
          <Link href={inquiryHref} className={styles.textLink}>
            می‌خوام فایل‌هام بررسی بشن{" "}
            <ArrowUpLeft size={16} aria-hidden="true" />
          </Link>
        </section>

        <section
          className={styles.section}
          id="data-services"
          aria-labelledby="data-services-title"
        >
          <div className={styles.heading}>
            <h2 id="data-services-title">چه ابزارهایی می‌سازیم؟</h2>
            <p>
              از یک شیت برای ثبت سفارش تا گزارشی که اطلاعات فروشگاه و حسابداری
              رو کنار هم میاره.
            </p>
          </div>
          <nav
            className={styles.serviceNav}
            aria-label="پرش به خدمات اکسل و داده"
          >
            {dataServices.map(({ id, title }) => (
              <a key={id} href={`#${id}`}>
                {title}
              </a>
            ))}
          </nav>
          <div className={styles.serviceList}>
            {dataServices.map((service, index) => (
              <article
                className={styles.service}
                key={service.id}
                id={service.id}
              >
                <div className={styles.serviceCopy}>
                  <span className={styles.index}>
                    {formatNumber.format(index + 1)}
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>
                        <Check size={15} aria-hidden="true" /> {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <figure className={styles.sample}>
                  <figcaption>
                    <span>{service.output}</span>
                  </figcaption>
                  <div className={styles.sampleBody}>
                    {"rows" in service ? (
                      <SampleTable
                        columns={service.columns}
                        rows={service.rows}
                        flagged={
                          "flagged" in service ? service.flagged : undefined
                        }
                      />
                    ) : (
                      <SalesPreview />
                    )}
                  </div>
                </figure>
              </article>
            ))}
          </div>
        </section>

        <section
          className={styles.section}
          id="data-compare"
          aria-labelledby="data-compare-title"
        >
          <div className={photoStyles.layout}>
            <div className={`${styles.heading} ${photoStyles.copy}`}>
              <h2 id="data-compare-title">اکسل، داشبورد یا ابزار اختصاصی؟</h2>
              <p>
                انتخاب به حجم و حساسیت اطلاعات، تعداد کاربران و نیاز به دسترسی
                هم‌زمان بستگی داره.
              </p>
            </div>
            <ServicePhoto
              src="/brand/capabilities/reporting-dashboard.webp"
              alt="نمودارهای یک داشبورد گزارش‌گیری روی تبلت در کنار گزارش‌های چاپی"
            />
          </div>
          <div className={styles.compareGrid}>
            {toolsComparison.map(([title, text, example], index) => {
              const Icon = toolIcons[index];
              return (
                <article key={title}>
                  <Icon size={23} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <p>{example}</p>
                </article>
              );
            })}
          </div>
          <Link href={inquiryHref} className={styles.textLink}>
            نمی‌دونم اکسل بهتره یا نرم‌افزار{" "}
            <ArrowUpLeft size={16} aria-hidden="true" />
          </Link>
        </section>

        <section
          className={styles.section}
          id="data-process"
          aria-labelledby="data-process-title"
        >
          <div className={styles.heading}>
            <h2 id="data-process-title">از کجا شروع می‌کنیم؟</h2>
            <p>
              کافیه بگی کار الان چطور انجام می‌شه و دوست داری چه خروجی‌ای بگیری.
            </p>
          </div>
          <ol className={styles.process}>
            {dataProcess.map(([title, text], index) => (
              <li key={title}>
                <span className={styles.index}>
                  {formatNumber.format(index + 1)}
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
          <aside
            className={styles.privacy}
            aria-labelledby="data-privacy-title"
          >
            <ShieldCheck size={26} aria-hidden="true" />
            <div>
              <h3 id="data-privacy-title">
                برای بررسی اولیه، فایل بدون اطلاعات حساس کافیه
              </h3>
              <p>
                دسترسی به داده‌ها، کار روی نسخه کپی و شیوه تحویل رو متناسب با
                پروژه هماهنگ می‌کنیم. شماره مشتری‌ها یا فایل مالی اصلی رو در
                فرم عمومی نفرست.
              </p>
            </div>
          </aside>
        </section>

        <section
          className={styles.section}
          id="data-pricing"
          aria-labelledby="data-pricing-title"
        >
          <div className={styles.heading}>
            <h2 id="data-pricing-title">هزینه به چه چیزهایی بستگی داره؟</h2>
            <p>
              می‌شه از اصلاح یک فایل یا ساخت یک گزارش شروع کرد و بقیه کار رو
              مرحله‌ای جلو برد.
            </p>
          </div>
          <div className={styles.problemGrid}>
            <article>
              <h3>وضعیت اطلاعات</h3>
              <p>
                حجم فایل‌ها، کیفیت داده و زمانی که برای مرتب‌سازی لازم داریم.
              </p>
            </article>
            <article>
              <h3>محاسبات و گزارش‌ها</h3>
              <p>
                تعداد شیت‌ها، پیچیدگی فرمول‌ها، فرمت خروجی و میزان آزمایش لازم.
              </p>
            </article>
            <article>
              <h3>نحوه استفاده</h3>
              <p>
                تعداد کاربران، نیاز به دسترسی هم‌زمان، پردازش خودکار و اتصال به
                ابزارهای دیگه.
              </p>
            </article>
          </div>
          <Link href={inquiryHref} className={styles.textLink}>
            درباره هزینه پروژه‌ام بپرس{" "}
            <ArrowUpLeft size={16} aria-hidden="true" />
          </Link>
        </section>

        <section
          className={styles.section}
          id="data-faq"
          aria-labelledby="data-faq-title"
        >
          <div className={styles.heading}>
            <h2 id="data-faq-title">پرسش‌های متداول</h2>
          </div>
          <div className={styles.faq}>
            {dataFaq.map(([question, answer]) => (
              <details name="data-tools-faq" key={question}>
                <summary>
                  {question}
                  <Plus size={17} aria-hidden="true" />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section
          className={styles.closing}
          aria-labelledby="data-closing-title"
          data-action-banner="quiet"
        >
          <div>
            <h2 id="data-closing-title">بیا کار با داده‌هات رو ساده‌تر کنیم</h2>
            <p>
              بگو الان با اطلاعاتت چه کاری انجام می‌دی و دوست داری کدوم بخش
              راحت‌تر بشه.
            </p>
            <div className={styles.actions}>
              <Link href={inquiryHref} data-fill-button className={styles.primary}>
                درباره کارم توضیح می‌دم{" "}
                <ArrowUpLeft size={17} aria-hidden="true" />
              </Link>
              <Link href="/services" data-secondary-action>
                همه خدمات رایکد
              </Link>
            </div>
          </div>
          <nav aria-label="خدمات مرتبط با اکسل و داده">
            <Link href="/services/software">
              نرم‌افزار اختصاصی <ArrowUpLeft size={15} aria-hidden="true" />
            </Link>
            <Link href="/services/integrations-bots">
              ربات‌ها و خودکارسازی کارها{" "}
              <ArrowUpLeft size={15} aria-hidden="true" />
            </Link>
            <Link href="/services/rescue">
              رفع باگ و توسعه پروژه‌ها{" "}
              <ArrowUpLeft size={15} aria-hidden="true" />
            </Link>
            <Link href="/services/continue">
              پشتیبانی و توسعه مستمر{" "}
              <ArrowUpLeft size={15} aria-hidden="true" />
            </Link>
            <Link href="/work">
              مشاهده نمونه‌کارهای رایکد{" "}
              <ArrowUpLeft size={15} aria-hidden="true" />
            </Link>
          </nav>
          <ActionBannerArt />
        </section>
      </div>
    </main>
  );
}
