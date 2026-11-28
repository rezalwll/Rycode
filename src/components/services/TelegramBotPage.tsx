import Link from "next/link";
import { ActionBannerArt } from "@/components/content/ActionBannerArt";
import {
  ArrowUpLeft,
  Bell,
  CalendarDays,
  Check,
  ClipboardList,
  FileText,
  Plug,
  Plus,
  Send,
  ShoppingBag,
  SlidersHorizontal,
  Users,
} from "lucide-react";
import { ServicePhoto } from "./ServicePhoto";
import photoStyles from "./ServicePhoto.module.css";
import {
  TelegramBotDemo,
  TelegramBotInquiry,
  TelegramBotProvider,
} from "./TelegramBotDemo";
import {
  telegramBotFaq,
  telegramBotSteps,
  telegramBotTypes,
} from "./telegram-bot-copy";
import styles from "./TelegramBotPage.module.css";

const icons = [
  ShoppingBag,
  ClipboardList,
  CalendarDays,
  Bell,
  Users,
  FileText,
  SlidersHorizontal,
  Plug,
];
const number = new Intl.NumberFormat("fa-IR", { minimumIntegerDigits: 2 });

export function TelegramBotPage() {
  return (
    <main className={styles.page} dir="rtl">
      <TelegramBotProvider>
        <div className={styles.shell}>
          <nav className={styles.breadcrumb} aria-label="مسیر صفحه">
            <Link href="/services/integrations-bots">ربات‌ها و خودکارسازی</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">ساخت ربات تلگرام</span>
          </nav>

          <header className={styles.hero}>
            <div className={styles.heroCopy}>
              <h1>ساخت ربات تلگرام</h1>
              <p className={styles.heroTitle}>
                رباتی که یه کار واقعی <strong>از دوشت برمی‌داره</strong>
              </p>
              <p className={styles.heroDescription}>
                از ثبت سفارش و رزرو نوبت تا پیگیری درخواست، ارسال فایل و اتصال
                به سایت. ربات رو برای کاری می‌سازیم که مشتری یا تیم تو هر روز
                انجام می‌ده.
              </p>
              <div className={styles.actions}>
                <a href="#telegram-inquiry" data-fill-button className={styles.primary}>
                  درخواست ساخت ربات <ArrowUpLeft size={17} aria-hidden="true" />
                </a>
                <a href="#telegram-types" data-secondary-action>
                  دیدن انواع ربات
                </a>
              </div>
            </div>
            <TelegramBotDemo />
          </header>

          <section
            id="telegram-types"
            className={styles.section}
            aria-labelledby="telegram-types-title"
          >
            <div className={styles.heading}>
              <h2 id="telegram-types-title">چه ربات‌هایی می‌سازیم؟</h2>
              <p>
                برای نسخه اول می‌تونی با یک کار مشخص شروع کنی و بعد امکانات
                دیگه رو اضافه کنی.
              </p>
            </div>
            <ul className={styles.cards}>
              {telegramBotTypes.map(({ title, text }, index) => {
                const Icon = icons[index];
                return (
                  <li key={title}>
                    <span className={styles.cardIcon}>
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </li>
                );
              })}
            </ul>
          </section>

          <section
            id="telegram-panel"
            className={styles.section}
            aria-labelledby="telegram-panel-title"
          >
            <div className={photoStyles.layout}>
              <div className={`${styles.heading} ${photoStyles.copy}`}>
                <h2 id="telegram-panel-title">مشتری توی تلگرام، مدیر توی پنل</h2>
                <p>
                  مثلاً مشتری سفارشش رو توی چت ثبت می‌کنه و تیم فروش از پنل بررسیش
                  می‌کنه. برای ربات‌های ساده، منوی مدیریتی داخل خود تلگرام هم قابل
                  بررسیه.
                </p>
              </div>
              <ServicePhoto
                src="/brand/service-editorial/telegram-order-workflow.webp"
                alt="نمونه ثبت سفارش در گفت‌وگوی موبایل و بررسی همان سفارش در پنل لپ‌تاپ"
              />
            </div>
            <div className={styles.panelPair}>
              <article className={styles.panel}>
                <div className={styles.panelTop}>
                  <Send size={18} aria-hidden="true" />
                  <h3>نمای مشتری</h3>
                </div>
                <p className={styles.reply}>
                  سفارشت ثبت شد. کد پیگیری: <bdi>DEMO-1042</bdi>
                </p>
                <p className={styles.sent}>وضعیت سفارش رو ببینم</p>
                <p className={styles.reply}>سفارش در حال بررسیه.</p>
              </article>
              <article className={styles.panel}>
                <div className={styles.panelTop}>
                  <SlidersHorizontal size={19} aria-hidden="true" />
                  <h3>نمای مدیریت</h3>
                </div>
                <dl className={styles.managerData}>
                  <div>
                    <dt>شناسه سفارش</dt>
                    <dd>
                      <bdi>DEMO-1042</bdi>
                    </dd>
                  </div>
                  <div>
                    <dt>محصول و تعداد</dt>
                    <dd>بسته پایه، ۲ بسته</dd>
                  </div>
                  <div>
                    <dt>وضعیت</dt>
                    <dd className={styles.status}>
                      <Check size={15} aria-hidden="true" /> در حال بررسی
                    </dd>
                  </div>
                </dl>
              </article>
            </div>
            <p className={styles.exampleNote}>سناریوی نمایشی سفارش‌گیری</p>
          </section>

          <section
            className={styles.section}
            aria-labelledby="telegram-scope-title"
          >
            <div className={styles.heading}>
              <h2 id="telegram-scope-title">از چت ساده تا مینی‌اپ</h2>
              <p>
                امکانات نسخه اول رو بر اساس کاری انتخاب می‌کنیم که کاربر باید
                از اول تا آخر انجام بده.
              </p>
            </div>
            <div className={styles.scope}>
              <article>
                <h3>ربات داخل گفت‌وگو</h3>
                <p>
                  برای منو، چند سؤال پشت هم، پیگیری وضعیت و ارسال فایل معمولاً
                  خود محیط چت کافیه.
                </p>
              </article>
              <article>
                <h3>مینی‌اپ تلگرام</h3>
                <p>
                  وقتی کاتالوگ بزرگ، فرم پیچیده یا یک رابط کامل داخل تلگرام لازم
                  داری، مینی‌اپ رو بررسی می‌کنیم.
                </p>
              </article>
              <article>
                <h3>پاسخ به سؤال مشتری</h3>
                <p>
                  پاسخ‌های مشخص رو می‌شه با منو و قواعد ساده داد. اگر پاسخ متنی
                  بر اساس منابع لازم باشه، هوش مصنوعی جداگانه بررسی می‌شه.
                </p>
              </article>
            </div>
          </section>

          <section
            className={styles.section}
            aria-labelledby="telegram-process-title"
          >
            <div className={styles.heading}>
              <h2 id="telegram-process-title">مراحل ساخت و تحویل ربات</h2>
              <p>
                اول گفت‌وگوی واقعی مشتری رو می‌چینیم و بعد مسیر ثبت، بررسی و
                پیگیری رو با هم آزمایش می‌کنیم.
              </p>
            </div>
            <ol className={styles.process}>
              {telegramBotSteps.map(([title, text], index) => (
                <li key={title}>
                  <span aria-hidden="true">{number.format(index + 1)}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className={styles.estimate}>
              <article>
                <h3>هزینه به چی بستگی داره؟</h3>
                <p>
                  تعداد مسیرهای گفت‌وگو، پنل مدیریت، اتصال به سرویس‌های دیگه و
                  حجم استفاده روی برآورد اثر دارن. میزبانی و سرویس‌های جانبی
                  جداگانه مشخص می‌شن.
                </p>
              </article>
              <article>
                <h3>اگر اتصال از کار بیفته چی؟</h3>
                <p>
                  برای مسیرهای مهم، ثبت خطا، اعلان به مدیر و جلوگیری از ثبت
                  تکراری رو در محدوده پروژه بررسی می‌کنیم. دسترسی‌ها فقط به
                  اطلاعات لازم محدود می‌شن.
                </p>
              </article>
            </div>
          </section>

          <section
            className={`${styles.section} ${styles.faq}`}
            aria-labelledby="telegram-faq-title"
          >
            <div>
              <h2 id="telegram-faq-title">سؤال‌های متداول</h2>
              <div className={styles.docs}>
                <a href="https://core.telegram.org/bots/features">
                  امکانات رسمی ربات‌های تلگرام
                </a>
                <a href="https://core.telegram.org/bots/payments-stars">
                  قواعد پرداخت برای کالاهای دیجیتال
                </a>
              </div>
            </div>
            <div className={styles.faqList}>
              {telegramBotFaq.map(([q, a]) => (
                <details key={q} name="telegram-faq">
                  <summary>
                    {q}
                    <Plus size={19} aria-hidden="true" />
                  </summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </section>

          <section
            id="telegram-inquiry"
            className={styles.inquiry}
            aria-labelledby="telegram-inquiry-title"
            data-action-banner="quiet"
          >
            <ActionBannerArt />
            <div className={styles.inquiryIntro}>
              <h2 id="telegram-inquiry-title">
                بگو رباتت قراره چه کاری انجام بده
              </h2>
              <p>
                یک نمونه از کاری که امروز دستی انجام می‌دی و نتیجه‌ای که می‌خوای
                بگیر. اگر لازم است ربات به سایت یا نرم‌افزارت وصل بشه، همون‌جا
                بگو.
              </p>
              <p>برای شروع، توکن ربات و رمز عبور لازم نیست.</p>
            </div>
            <TelegramBotInquiry />
          </section>

          <nav className={styles.related} aria-label="صفحات مرتبط">
            <Link href="/services/integrations-bots">ربات‌ها و خودکارسازی</Link>
            <Link href="/services/software">نرم‌افزار اختصاصی</Link>
            <Link href="/services/rescue">رفع مشکل و توسعه</Link>
            <Link href="/services/support">پشتیبانی و نگهداری</Link>
          </nav>
        </div>
      </TelegramBotProvider>
    </main>
  );
}
