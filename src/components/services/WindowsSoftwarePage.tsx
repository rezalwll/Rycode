import Link from "next/link";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpLeft,
  BarChart3,
  Boxes,
  Check,
  ClipboardList,
  FileSpreadsheet,
  Gauge,
  HardDrive,
  Monitor,
  PackageCheck,
  Plus,
  Printer,
  ShieldCheck,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { specialtyServices } from "@/content/specialty-services";
import styles from "./WindowsSoftwarePage.module.css";

const inquiryHref = "/contact?service=software";

const quickPaths = [
  {
    label: "یک نرم‌افزار جدید می‌خوام",
    detail: "ثبت اطلاعات، سفارش، محاسبه یا مدیریت داخلی",
    href: "#windows-solutions",
    icon: Monitor,
  },
  {
    label: "برنامه باید به دستگاه وصل بشه",
    detail: "بارکدخوان، چاپگر، اسکنر یا تجهیزات دارای رابط",
    href: "#windows-equipment",
    icon: PackageCheck,
  },
  {
    label: "نرم‌افزار قدیمی دارم",
    detail: "رفع باگ، توسعه امکانات یا بازسازی مرحله‌ای",
    href: "#windows-existing",
    icon: Wrench,
  },
] satisfies { label: string; detail: string; href: string; icon: LucideIcon }[];

const solutionCards = [
  {
    number: "01",
    title: "اداری و مدیریتی",
    text: "فرم‌ها، پرونده‌ها، مشتریان و وضعیت کارها را در یک برنامه‌ی مشخص جمع کن.",
    icon: ClipboardList,
    tags: ["فرم و جست‌وجو", "سطح دسترسی", "گزارش و چاپ"],
  },
  {
    number: "02",
    title: "محاسبات و ابزار تخصصی",
    text: "قواعد محاسبه‌ی قیمت، هزینه یا نتیجه را یک‌بار تعریف کن و خروجی قابل پیگیری بگیر.",
    icon: Gauge,
    tags: ["فرمول اختصاصی", "اعتبارسنجی ورودی", "ذخیره‌ی سابقه"],
  },
  {
    number: "03",
    title: "ثبت و مدیریت اطلاعات",
    text: "داده‌های پراکنده را به رکوردهایی تبدیل کن که سریع پیدا، اصلاح و خروجی گرفته می‌شوند.",
    icon: Boxes,
    tags: ["دسته‌بندی", "پیوست فایل", "Excel و CSV"],
  },
  {
    number: "04",
    title: "انبار، سفارش و عملیات",
    text: "ورود و خروج کالا، مراحل سفارش و مسئول هر مرحله را قابل مشاهده کن.",
    icon: PackageCheck,
    tags: ["موجودی", "رهگیری سفارش", "چاپ لیبل"],
  },
  {
    number: "05",
    title: "گزارش و داشبورد",
    text: "از فایل یا پایگاه داده به یک تصویر روشن از فروش، موجودی و عملکرد برس.",
    icon: BarChart3,
    tags: ["نمودار", "فیلتر تاریخ", "خروجی PDF"],
  },
  {
    number: "06",
    title: "فایل‌ها و Excel",
    text: "ترکیب، پاک‌سازی، تبدیل و پردازش انبوه فایل‌ها را از کار دستی جدا کن.",
    icon: FileSpreadsheet,
    tags: ["پردازش انبوه", "تبدیل فرمت", "خروجی استاندارد"],
  },
] satisfies {
  number: string;
  title: string;
  text: string;
  icon: LucideIcon;
  tags: string[];
}[];

const processSteps = [
  ["01", "شناخت کار واقعی", "یک یا چند کار روزمره را قدم‌به‌قدم بررسی می‌کنیم."],
  ["02", "طراحی نسخه‌ی اول", "ورودی، خروجی، نقش‌ها و صفحه‌های ضروری را مشخص می‌کنیم."],
  ["03", "ساخت و اتصال", "برنامه، داده، فایل‌ها و تجهیزات موردنیاز را به هم وصل می‌کنیم."],
  ["04", "آزمون روی محیط واقعی", "نصب، چاپ، ورود فایل، دسترسی و سناریوهای خطا را می‌سنجیم."],
  ["05", "تحویل و آموزش", "روش نصب، پشتیبان‌گیری و استفاده‌ی تیم را روشن می‌کنیم."],
  ["06", "نگهداری و توسعه", "بعد از راه‌اندازی، مسیر اصلاح و قابلیت‌های بعدی مشخص می‌شود."],
] as const;

const fallbackFaq = [
  ["نرم‌افزار بدون اینترنت هم کار می‌کند؟", "اگر کار آفلاین جزو نیاز باشد، ذخیره‌سازی محلی و روش پشتیبان‌گیری از ابتدا طراحی می‌شود. اتصال به سرویس بیرونی همچنان به اینترنت نیاز دارد."],
  ["می‌شود چند نفر هم‌زمان از برنامه استفاده کنند؟", "بله؛ تعداد کاربران، محل ذخیره‌ی داده و شرایط شبکه در معماری و آزمون پذیرش لحاظ می‌شوند."],
  ["اطلاعات Excel یا برنامه‌ی قبلی قابل انتقال است؟", "بعد از بررسی ساختار فایل، کیفیت داده و دسترسی به خروجی، محدوده‌ی انتقال و پاک‌سازی مشخص می‌شود."],
  ["برنامه روی چه نسخه‌ای از ویندوز نصب می‌شود؟", "نسخه‌های هدف و پیش‌نیازهای نصب برای همان پروژه اعلام و روی محیط‌های توافق‌شده آزمایش می‌شوند."],
] as const;

const specialty = specialtyServices.find(
  (item) => item.slug === "windows-software-development",
);
const faq = specialty?.faqs.map((item) => [item.question, item.answer] as const) ?? fallbackFaq;

function PrimaryLink({ children }: { children: React.ReactNode }) {
  return (
    <Link className={styles.primary} href={inquiryHref}>
      {children}
      <ArrowUpLeft size={17} aria-hidden="true" />
    </Link>
  );
}

export function WindowsSoftwarePage() {
  return (
    <main className={styles.page} dir="rtl" data-windows-software-page>
      <div className={styles.container}>
        <header className={styles.hero}>
          <div className={styles.breadcrumb}>
            <Link href="/services/software">نرم‌افزار اختصاصی</Link>
            <span>/</span>
            <span>نرم‌افزار ویندوز</span>
          </div>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>WINDOWS DESKTOP SOFTWARE DEVELOPMENT</p>
              <h1>بعضی کارها، یه نرم‌افزار مخصوص خودشون می‌خوان.</h1>
              <p className={styles.lead}>
                از ثبت اطلاعات و محاسبه تا گزارش‌گیری، پردازش فایل و ارتباط با تجهیزات؛ برنامه‌ای می‌سازیم که با روش واقعی کار مجموعه‌ات جور باشد.
              </p>
              <p className={styles.heroNote}>
                لازم نیست از قبل بدانی چه زبان یا ساختاری مناسب پروژه‌ات است. بگو الان کارت چطور انجام می‌شود و دوست داری چه چیزی راحت‌تر شود.
              </p>
              <div className={styles.actions}>
                <PrimaryLink>می‌خوام نرم‌افزار ویندوز بسازم</PrimaryLink>
                <a className={styles.secondary} href="#windows-solutions">
                  ببین چه نرم‌افزارهایی می‌سازیم <ArrowDown size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className={styles.productStage} aria-label="نمونه‌ی رابط نرم‌افزار ویندوز">
              <div className={styles.stageTopline}>
                <span>RYCODE / WINDOWS TOOLKIT</span>
                <i aria-hidden="true" />
                <b>BUILD 01.24</b>
              </div>
              <div className={styles.window}>
                <div className={styles.windowBar}>
                  <span className={styles.windowDots}><i /><i /><i /></span>
                  <strong>داشبورد عملیات</strong>
                  <span className={styles.windowStatus}><Check size={13} /> همگام‌سازی شد</span>
                </div>
                <div className={styles.windowBody}>
                  <aside className={styles.windowSidebar}>
                    <span className={styles.appMark}>R</span>
                    <b>نمای کلی</b>
                    <span>سفارش‌ها</span>
                    <span>موجودی</span>
                    <span>گزارش‌ها</span>
                    <span>تنظیمات</span>
                  </aside>
                  <div className={styles.windowMain}>
                    <div className={styles.windowHeading}>
                      <div><small>امروز، ۲۴ آبان</small><h2>وضعیت کارها</h2></div>
                      <button type="button">+ ثبت مورد جدید</button>
                    </div>
                    <div className={styles.metrics}>
                      <div><span>سفارش‌های باز</span><strong>۲۴۸</strong><em>+۱۲٪</em></div>
                      <div><span>در انتظار بررسی</span><strong>۳۶</strong><em>+۴٪</em></div>
                      <div><span>موجودی بحرانی</span><strong>۰۸</strong><em className={styles.warning}>نیازمند توجه</em></div>
                    </div>
                    <div className={styles.chartPanel}>
                      <div className={styles.chartLabel}><b>روند سفارش‌ها</b><span>۷ روز اخیر⌄</span></div>
                      <div className={styles.chartBars}><i style={{ height: "38%" }} /><i style={{ height: "56%" }} /><i style={{ height: "44%" }} /><i style={{ height: "72%" }} /><i style={{ height: "61%" }} /><i style={{ height: "88%" }} /><i style={{ height: "78%" }} /><i style={{ height: "96%" }} /></div>
                      <div className={styles.chartAxis}><span>شنبه</span><span>یکشنبه</span><span>دوشنبه</span><span>سه‌شنبه</span><span>چهارشنبه</span><span>پنجشنبه</span><span>جمعه</span></div>
                    </div>
                    <div className={styles.tablePanel}>
                      <span>آخرین فعالیت‌ها</span><div><b>ثبت سفارش جدید</b><small>فروشگاه مرکزی · همین حالا</small><em>تکمیل شد</em></div><div><b>گزارش موجودی</b><small>انبار · ۱۲ دقیقه پیش</small><em>در حال بررسی</em></div>
                    </div>
                  </div>
                </div>
              </div>
              <span className={styles.stageTag}>OFFLINE READY / ROLE-BASED / EXPORTABLE</span>
            </div>
          </div>
          <div className={styles.quickPaths}>
            {quickPaths.map(({ label, detail, href, icon: Icon }, index) => (
              <a href={href} key={label}>
                <span className={styles.quickNumber}>۰{index + 1}</span>
                <Icon size={20} aria-hidden="true" />
                <span><b>{label}</b><small>{detail}</small></span>
                <ArrowUpLeft size={17} aria-hidden="true" />
              </a>
            ))}
          </div>
        </header>

        <section className={styles.problem} aria-labelledby="windows-problem-title">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>THE REAL BOTTLENECK</p>
            <h2 id="windows-problem-title">هنوز برای انجام یه کار ساده، چند تا برنامه باز می‌کنی؟</h2>
            <p>مشکل همیشه از روش کارت نیست؛ گاهی ابزار مناسبی برای همان روش وجود ندارد.</p>
          </div>
          <div className={styles.problemList}>
            {["اطلاعات کاری بین چند فایل Excel پخش شده.", "هر روز محاسبات مشابه را چند بار انجام می‌دهی.", "برای چاپ فاکتور، لیبل یا گزارش چند مرحله طی می‌کنی.", "نرم‌افزار آماده با فرایند واقعی مجموعه هماهنگ نیست.", "باید اطلاعات یک دستگاه را دریافت و ثبت کنی.", "بخشی از کار باید بدون اینترنت انجام شود."].map((item, index) => (
              <div key={item}><span>۰{index + 1}</span><p>{item}</p><Check size={17} aria-hidden="true" /></div>
            ))}
          </div>
        </section>

        <section className={styles.solutions} id="windows-solutions" aria-labelledby="windows-solutions-title">
          <div className={styles.sectionHeader}>
            <div><p className={styles.eyebrow}>WHAT WE CAN BUILD</p><h2 id="windows-solutions-title">از یه ابزار کوچک تا برنامه‌ی کامل شرکت.</h2></div>
            <p>نوع نرم‌افزار، امکانات و شیوه‌ی ذخیره‌ی اطلاعات را بر اساس کاری که واقعاً انجام می‌دهی مشخص می‌کنیم.</p>
          </div>
          <div className={styles.solutionGrid}>
            {solutionCards.map(({ number, title, text, icon: Icon, tags }) => (
              <article key={number}>
                <div className={styles.cardHead}><span>{number}</span><Icon size={21} aria-hidden="true" /></div>
                <h3>{title}</h3><p>{text}</p>
                <ul>{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.architecture} id="windows-equipment" aria-labelledby="windows-architecture-title">
          <div className={styles.architectureCopy}>
            <p className={styles.eyebrow}>A DESKTOP SYSTEM THAT FITS</p>
            <h2 id="windows-architecture-title">برنامه فقط یک پنجره نیست؛ بخشی از مسیر کار توست.</h2>
            <p>می‌توانیم نرم‌افزار را برای کار آفلاین، شبکه‌ی داخلی، چندکاربره‌بودن، چاپ، ورود فایل یا ارتباط با تجهیزات آماده کنیم؛ هرکدام فقط وقتی که واقعاً به مسئله کمک کند.</p>
            <div className={styles.capabilities}><span><HardDrive size={17} /> آفلاین و محلی</span><span><ShieldCheck size={17} /> نقش و دسترسی</span><span><Printer size={17} /> چاپ و خروجی</span><span><Workflow size={17} /> گردش کار روشن</span></div>
          </div>
          <div className={styles.systemMap}>
            <div className={styles.mapNode}><Monitor size={21} /><b>نرم‌افزار ویندوز</b><small>ثبت / پردازش / گزارش</small></div>
            <div className={styles.mapLine}><i /><i /><i /></div>
            <div className={styles.mapNodes}><span><FileSpreadsheet size={18} /> Excel و CSV</span><span><PackageCheck size={18} /> سفارش و انبار</span><span><Printer size={18} /> چاپگر و دستگاه</span></div>
          </div>
        </section>

        <section className={styles.existing} id="windows-existing" aria-labelledby="windows-existing-title">
          <div><p className={styles.eyebrow}>HAVE AN EXISTING APP?</p><h2 id="windows-existing-title">لازم نیست همیشه از صفر شروع کنی.</h2><p>اگر نرم‌افزار قدیمی داری، اول وضعیت کد، فناوری، داده و مشکل‌های واقعی‌اش را بررسی می‌کنیم. بعد مشخص می‌شود اصلاح، توسعه یا بازسازی مرحله‌ای کدام مسیر منطقی‌تری است.</p></div>
          <ul>{["رفع باگ و اصلاح بخش‌های مشکل‌دار", "بازطراحی رابط کاربری و گزارش‌ها", "سازگاری با نسخه‌ی هدف ویندوز", "اضافه‌کردن قابلیت و خروجی جدید", "بررسی مسیر نصب و نگهداری"].map((item) => <li key={item}><Check size={17} />{item}</li>)}</ul>
        </section>

        <section className={styles.process} aria-labelledby="windows-process-title">
          <div className={styles.sectionHeader}><div><p className={styles.eyebrow}>THE DELIVERY PATH</p><h2 id="windows-process-title">از سناریوی کاری تا اجرای آزمایشی.</h2></div><p>نسخه‌ی اول را طوری تعریف می‌کنیم که بشود با آن کار کرد، آزمود و درباره‌ی قدم بعدی تصمیم گرفت.</p></div>
          <ol>{processSteps.map(([number, title, text]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
        </section>

        <section className={styles.faq} aria-labelledby="windows-faq-title">
          <h2 id="windows-faq-title">سؤال‌هایی که قبل از شروع پیش می‌آیند.</h2>
          <div>{faq.slice(0, 6).map(([question, answer]) => <details key={question}><summary>{question}<Plus size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div>
        </section>

        <section className={styles.closing}>
          <div><p className={styles.eyebrow}>START WITH THE REAL WORK</p><h2>بگو هر روز پشت کامپیوتر چه کاری انجام می‌دی.</h2><p>شاید یک نرم‌افزار کامل لازم داشته باشی، شاید یک ابزار محاسباتی کوچک. باهم مشخص می‌کنیم چه چیزی واقعاً باید ساخته شود.</p></div>
          <div className={styles.actions}><PrimaryLink>بیا درباره‌ی نرم‌افزارم حرف بزنیم</PrimaryLink><Link className={styles.secondary} href="/services/software">همه‌ی نرم‌افزارها <ArrowLeft size={16} aria-hidden="true" /></Link></div>
        </section>
      </div>
    </main>
  );
}
