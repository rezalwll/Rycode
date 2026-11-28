import Link from "next/link";
import { ArrowUpLeft, Clock3, Plus, ShieldCheck } from "lucide-react";
import { ServicePhoto } from "./ServicePhoto";
import photoStyles from "./ServicePhoto.module.css";
import { WordPressRepairFlow } from "./WordPressIssuePicker";
import {
  wordpressFaq,
  wordpressServices,
  wordpressSteps,
} from "./wordpress-repair-copy";
import styles from "./WordPressRepairPage.module.css";

const indexLabel = new Intl.NumberFormat("fa-IR", { minimumIntegerDigits: 2 });

export function WordPressRepairPage() {
  return (
    <main className={styles.page} dir="rtl">
      <div className={styles.shell}>
        <nav className={styles.breadcrumb} aria-label="مسیر صفحه">
          <Link href="/services/rescue">رفع باگ و توسعه پروژه‌ها</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">رفع مشکل وردپرس</span>
        </nav>

        <WordPressRepairFlow>
          <section
            id="wp-services"
            className={styles.section}
            aria-labelledby="wp-services-title"
          >
            <div className={styles.sectionIntro}>
              <h2 id="wp-services-title">چه مشکلاتی رو بررسی می‌کنیم؟</h2>
              <p>
                از خطای یک صفحه تا توقف فروش. محدوده بررسی به نشانه‌ها، تغییرات
                اخیر و بخش‌هایی که درگیر شدن بستگی داره.
              </p>
            </div>
            <ol className={styles.serviceList}>
              {wordpressServices.map(([title, text], index) => (
                <li key={title}>
                  <span aria-hidden="true">{indexLabel.format(index + 1)}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section
            id="wp-process"
            className={styles.section}
            aria-labelledby="wp-process-title"
          >
            <div className={photoStyles.layout}>
              <div className={`${styles.sectionIntro} ${photoStyles.copy}`}>
                <h2 id="wp-process-title">اول بررسی، بعد اصلاح</h2>
                <p>
                  روی سایت فعال، تغییرات رو با توجه به اطلاعات مشتری‌ها و کارهای
                  در جریان، مثل سفارش و پرداخت، برنامه‌ریزی می‌کنیم.
                </p>
              </div>
              <ServicePhoto
                src="/brand/service-editorial/wordpress-diagnostics.webp"
                alt="نمای فروشگاه و ابزارهای عیب‌یابی مرورگر روی صفحه لپ‌تاپ"
              />
            </div>
            <ol className={styles.steps}>
              {wordpressSteps.map(([title, text], index) => (
                <li key={title}>
                  <span aria-hidden="true">{indexLabel.format(index + 1)}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
            <div className={styles.callouts}>
              <article>
                <ShieldCheck size={22} aria-hidden="true" />
                <div>
                  <h3>پیش از تغییر روی سایت فعال</h3>
                  <p>
                    وضعیت پشتیبان، امکان بازگشت و اثر تغییر روی فرم‌ها و
                    سفارش‌های جدید رو بررسی می‌کنیم.
                  </p>
                </div>
              </article>
              <article>
                <Clock3 size={22} aria-hidden="true" />
                <div>
                  <h3>اختلالی که کار رو متوقف کرده</h3>
                  <p>
                    اگه کل سایت از دسترس خارجه یا مشتری نمی‌تونه خرید کنه، اثر
                    مشکل رو در توضیحات درخواست بنویس.
                  </p>
                  <a href="#wp-inquiry">
                    توضیح اختلال <ArrowUpLeft size={14} aria-hidden="true" />
                  </a>
                </div>
              </article>
            </div>
          </section>

          <section
            className={`${styles.section} ${styles.faq}`}
            aria-labelledby="wp-faq-title"
          >
            <div className={styles.faqIntro}>
              <h2 id="wp-faq-title">هزینه و سؤال‌های متداول</h2>
              <p>
                شدت خطا، امکان بازتولید، دسترسی‌ها و حجم تغییر روی هزینه اثر
                دارن. بعد از بررسی اولیه، محدوده و برآورد مشخص می‌شه.
              </p>
              <a data-secondary-action href="#wp-inquiry">
                درخواست برآورد
              </a>
            </div>
            <div className={styles.questions}>
              {wordpressFaq.map(([question, answer]) => (
                <details key={question} name="wordpress-repair-faq">
                  <summary>
                    <span>{question}</span>
                    <Plus size={19} aria-hidden="true" />
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </section>
        </WordPressRepairFlow>
        <nav className={styles.related} aria-label="خدمات مرتبط">
          <Link href="/services/rescue">رفع باگ و توسعه پروژه‌ها</Link>
          <Link href="/services/build">طراحی و بازطراحی سایت</Link>
          <Link href="/services/grow">سئو و رشد سایت</Link>
          <Link href="/services/support">پشتیبانی و نگهداری</Link>
          <Link href="/services">همه خدمات رایکد</Link>
        </nav>
      </div>
    </main>
  );
}
