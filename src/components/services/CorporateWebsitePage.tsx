import Image from "next/image";
import { ActionBannerArt } from "@/components/content/ActionBannerArt";
import { ServicePhoto } from "./ServicePhoto";
import photoStyles from "./ServicePhoto.module.css";
import Link from "next/link";
import { ArrowLeft, ArrowUpLeft, Plus } from "lucide-react";
import { ContactForm, FormField, FormSubmit } from "@/components/ContactForm";
import {
  CorporateCustomerJourney,
  CorporateSiteTypes,
} from "./CorporateWebsiteDemos";
import {
  corporateFaqs,
  corporateFeatures,
  corporateProcess,
  corporateWebsiteMeta,
  corporateWebsiteSlug,
} from "./corporate-website-copy";
import styles from "./CorporateWebsitePage.module.css";

const sections = [
  ["نوع سایت", "company-types"],
  ["مسیر مشتری", "customer-journey"],
  ["امکانات سایت", "features"],
  ["روند همکاری", "design-process"],
];

export function CorporateWebsitePage() {
  return (
    <main className={styles.page} dir="rtl">
      <div className={styles.heroShell}>
        <div className={styles.heroNav}>
          <Link href="/services/build" className={styles.parentLink}>
            طراحی سایت و فروشگاه اینترنتی{" "}
            <ArrowUpLeft size={15} aria-hidden="true" />
          </Link>
          <nav aria-label="بخش‌های صفحه طراحی سایت شرکتی">
            {sections.map(([title, anchor]) => (
              <a href={`#${anchor}`} key={anchor}>
                {title}
              </a>
            ))}
          </nav>
        </div>

        <section className={styles.hero} aria-labelledby="corporate-title">
          <div className={styles.heroCopy}>
            <h1 id="corporate-title">
              سایتی که شرکتت رو <span>درست معرفی می‌کنه</span>
            </h1>
            <p className={styles.heroDescription}>
              کمک می‌کنیم مشتری‌هات سریع بفهمن چه کاری انجام می‌دی، پروژه‌ها و
              محصولاتت رو ببینن و راحت درخواست مشاوره، همکاری یا استعلام قیمت
              بدن.
            </p>
            <div className={styles.actions}>
              <a href="#corporate-inquiry" className={styles.primary}>
                درخواست طراحی <ArrowUpLeft size={17} aria-hidden="true" />
              </a>
              <a href="#features" data-secondary-action>
                دیدن امکانات
              </a>
            </div>
          </div>
          <figure className={styles.heroFigure}>
            <div className={styles.heroImage}>
              <Image
                src={corporateWebsiteMeta.image}
                alt="نمای دسکتاپ و موبایل یک سایت شرکتی صنعتی"
                fill
                loading="eager"
                sizes="(max-width: 520px) calc(100vw - 32px), (max-width: 850px) calc(100vw - 64px), (max-width: 1300px) 53vw, 670px"
              />
            </div>
          </figure>
        </section>
      </div>

      <div className={styles.shell}>
        <section
          className={styles.section}
          id="company-types"
          aria-labelledby="company-types-title"
        >
          <div className={styles.sectionIntro}>
            <h2 id="company-types-title">چه نوع سایت شرکتی می‌سازیم؟</h2>
            <p>
              ساختار سایت رو با نوع فعالیت و سؤال‌هایی که مشتری‌هات موقع انتخاب
              دارن هماهنگ می‌کنیم.
            </p>
          </div>
          <CorporateSiteTypes />
        </section>
      </div>

      <section
        className={styles.journeySection}
        id="customer-journey"
        aria-labelledby="journey-title"
      >
        <div className={styles.shell}>
          <div className={styles.sectionIntro}>
            <h2 id="journey-title">مشتری چطور به شرکتت می‌رسه؟</h2>
            <p>
              نقش بازدیدکننده رو انتخاب کن و ببین از کدوم صفحه وارد می‌شه و چطور
              درخواستش رو ثبت می‌کنه.
            </p>
          </div>
          <CorporateCustomerJourney />
        </div>
      </section>

      <div className={styles.shell}>
        <section
          className={styles.section}
          id="features"
          aria-labelledby="features-title"
        >
          <div className={styles.sectionIntro}>
            <h2 id="features-title">سایت شرکتت چه بخش‌هایی لازم داره؟</h2>
            <p>
              از صفحه معرفی تا پنل مدیریت، امکانات رو با توجه به کاری که سایت
              باید انجام بده انتخاب می‌کنیم.
            </p>
          </div>
          <ul className={styles.features}>
            {corporateFeatures.map(([title, description]) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
          <div className={styles.featureNote}>
            <strong>در تحویل سایت چه چیزهایی بررسی می‌شن؟</strong>
            <p>
              نمایش موبایل، سرعت صفحه‌ها، مسیر تماس، دسترسی مدیران، فرم‌ها و
              پایه‌های فنی سئو. نیازهای پشتیبان‌گیری و توسعه بعدی هم در محدوده
              پروژه مشخص می‌شن.
            </p>
          </div>
        </section>

        <section
          className={styles.section}
          aria-labelledby="build-method-title"
        >
          <div className={styles.sectionIntro}>
            <h2 id="build-method-title">وردپرس یا توسعه اختصاصی؟</h2>
            <p>
              نوع محتوا، امکانات، بودجه و ارتباط با سیستم‌های داخلی مشخص می‌کنن
              کدوم روش مناسب‌تره.
            </p>
          </div>
          <table className={styles.comparison}>
            <caption className={styles.srOnly}>
              مقایسه وردپرس و توسعه اختصاصی برای سایت شرکتی
            </caption>
            <thead>
              <tr>
                <th scope="col">وردپرس</th>
                <th scope="col">توسعه اختصاصی</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>معرفی شرکت، خدمات، پروژه‌ها و انتشار مقاله</td>
                <td>پنل نمایندگان، نقش‌های سفارشی و فرآیندهای خاص</td>
              </tr>
              <tr>
                <td>مدیریت محتوا با امکانات متداول</td>
                <td>فرم استعلام چندمرحله‌ای و ارتباط با سیستم‌های داخلی</td>
              </tr>
              <tr>
                <td>وقتی زمان یا بودجه شروع محدودتره</td>
                <td>وقتی نیاز بلندمدت فراتر از یک سایت معرفی است</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section
          className={styles.section}
          id="design-process"
          aria-labelledby="process-title"
        >
          <div className={photoStyles.layout}>
            <div className={`${styles.sectionIntro} ${photoStyles.copy}`}>
              <h2 id="process-title">از شناخت شرکت تا تحویل سایت</h2>
              <p>
                برای شروع، بگو شرکتت چه کاری انجام می‌ده، مشتری‌هات چه کسانی هستن
                و از سایت چه انتظاری داری.
              </p>
            </div>
            <ServicePhoto
              src="/brand/capabilities/landing-redesign.webp"
              alt="چیدمان صفحات سایت شرکتی روی تبلت"
            />
          </div>
          <ol className={styles.process}>
            {corporateProcess.map(([title, description], index) => (
              <li key={title}>
                <span aria-hidden="true">
                  {(index + 1).toLocaleString("fa-IR", {
                    minimumIntegerDigits: 2,
                  })}
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className={styles.featureNote}>
            <strong>سایت فعلی داری؟</strong>
            <p>
              قبل از بازطراحی، محتوای قابل انتقال، عملکرد موبایل و آدرس‌هایی که
              از گوگل بازدید می‌گیرن رو بررسی می‌کنیم تا محدوده تغییرات مشخص
              بشه.
            </p>
          </div>
        </section>

        <div
          className={styles.portfolioCallout}
          data-action-banner="quiet"
          data-banner-layout="side"
        >
          <div>
            <h2>نمونه‌های طراحی وب رایکد</h2>
            <p>
              برای دیدن طراحی‌ها و جزئیات پروژه‌ها به بخش نمونه‌کارها سر بزن.
            </p>
          </div>
          <Link href="/work" data-secondary-action>
            مشاهده نمونه‌کارها
          </Link>
          <ActionBannerArt />
        </div>

        <section
          className={`${styles.section} ${styles.faqSection}`}
          aria-labelledby="corporate-faq-title"
        >
          <div className={styles.sectionIntro}>
            <h2 id="corporate-faq-title">سؤال‌های پرتکرار</h2>
            <p>درباره هزینه، مدیریت محتوا و راه‌اندازی سایت.</p>
          </div>
          <div className={styles.faqs}>
            {corporateFaqs.map(([question, answer]) => (
              <details key={question} name="corporate-faq">
                <summary>
                  {question}
                  <Plus size={18} aria-hidden="true" />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section
          className={styles.contact}
          id="corporate-inquiry"
          aria-labelledby="corporate-inquiry-title"
          data-action-banner="quiet"
        >
          <div className={styles.contactIntro}>
            <h2 id="corporate-inquiry-title">شرکتت رو بهتر معرفی کنیم؟</h2>
            <p>
              از کار شرکتت، مشتری‌هات و هدف سایت بگو. با هم مشخص می‌کنیم چه
              صفحه‌ها و امکاناتی نقطه شروع خوبی هستن.
            </p>
            <Link href="/services" className={styles.parentLink}>
              همه خدمات رایکد <ArrowLeft size={16} aria-hidden="true" />
            </Link>
          </div>
          <ContactForm className={styles.form}>
            <input type="hidden" name="Service" value={corporateWebsiteSlug} />
            <div className={styles.formRow}>
              <label>
                نام و نام خانوادگی
                <FormField
                  as="input"
                  name="Name"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={120}
                />
              </label>
              <label>
                شماره تماس
                <FormField
                  as="input"
                  type="tel"
                  name="Phone"
                  autoComplete="tel"
                  required
                  maxLength={25}
                />
              </label>
            </div>
            <label>
              ایمیل (اختیاری)
              <FormField
                as="input"
                type="email"
                name="Email"
                autoComplete="email"
                maxLength={254}
              />
            </label>
            <label>
              درباره پروژه بگو
              <FormField
                as="textarea"
                name="Message"
                required
                rows={4}
                minLength={10}
                maxLength={5000}
                placeholder="مثلاً یک سایت صنعتی می‌خوام که کاتالوگ محصول و فرم استعلام داشته باشه."
              />
            </label>
            <FormSubmit className={styles.primary}>
              ثبت درخواست طراحی <ArrowUpLeft size={17} aria-hidden="true" />
            </FormSubmit>
          </ContactForm>
          <ActionBannerArt />
        </section>

        <nav
          className={styles.related}
          aria-label="خدمات مرتبط با طراحی سایت شرکتی"
        >
          <Link href="/services/build">طراحی سایت و فروشگاه</Link>
          <Link href="/services/grow">سئو و رشد سایت</Link>
          <Link href="/services/software">نرم‌افزار اختصاصی</Link>
          <Link href="/services/integrations-bots">ربات‌ها و خودکارسازی</Link>
          <Link href="/services/support">پشتیبانی و توسعه مستمر</Link>
        </nav>
      </div>
    </main>
  );
}
