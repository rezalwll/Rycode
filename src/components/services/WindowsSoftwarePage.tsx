import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpLeft,
  ArrowUpRight,
  BarChart3,
  Boxes,
  Check,
  ClipboardList,
  FileSpreadsheet,
  Gauge,
  HardDrive,
  Monitor,
  Network,
  PackageCheck,
  Plus,
  Printer,
  Wrench,
} from "lucide-react";
import { specialtyServices } from "@/content/specialty-services";
import { getTranslations } from "@/lib/i18n-server";
import styles from "./WindowsSoftwarePage.module.css";

const inquiryHref = "/contact?service=software#project-inquiry";

const orderTrend = [
  [{ fa: "شنبه", en: "Sat" }, 38],
  [{ fa: "یکشنبه", en: "Sun" }, 55],
  [{ fa: "دوشنبه", en: "Mon" }, 46],
  [{ fa: "سه‌شنبه", en: "Tue" }, 72],
  [{ fa: "چهارشنبه", en: "Wed" }, 62],
  [{ fa: "پنجشنبه", en: "Thu" }, 88],
  [{ fa: "جمعه", en: "Fri" }, 76],
] as const;

const systemOptions = [
  {
    icon: HardDrive,
    title: { fa: "آفلاین و محلی", en: "Local and offline" },
    description: {
      fa: "ثبت و مشاهدهٔ اطلاعات روی همان رایانه، با مسیر مشخص پشتیبان‌گیری.",
      en: "Enter and view data on the same computer with a clear way to back it up.",
    },
  },
  {
    icon: Network,
    title: {
      fa: "شبکهٔ داخلی و چندکاربره",
      en: "Shared access on a local network",
    },
    description: {
      fa: "دادهٔ مشترک برای چند رایانه، با دسترسی متناسب با نقش هر کاربر.",
      en: "Share data across computers, with access tailored to each user's role.",
    },
  },
  {
    icon: Printer,
    title: { fa: "چاپ و تجهیزات", en: "Printing and equipment" },
    description: {
      fa: "چاپ فاکتور و لیبل، یا دریافت اطلاعات از دستگاه پس از بررسی رابط و مدل آن.",
      en: "Print invoices and labels, or read data from equipment after checking the model and interface.",
    },
  },
  {
    icon: FileSpreadsheet,
    title: { fa: "ورود و خروجی فایل", en: "File imports and exports" },
    description: {
      fa: "خواندن و بررسی داده‌های اکسل و CSV و تهیهٔ خروجی متناسب با کار.",
      en: "Read and validate Excel and CSV data, then export it in the format your work requires.",
    },
  },
];

const quickPaths = [
  {
    label: { fa: "یک نرم‌افزار جدید می‌خوام", en: "I need new software" },
    detail: {
      fa: "ثبت اطلاعات، سفارش، محاسبه یا مدیریت داخلی",
      en: "Data entry, orders, calculations or internal operations",
    },
    href: "#windows-solutions",
    icon: Monitor,
  },
  {
    label: {
      fa: "برنامه باید به دستگاه وصل بشه",
      en: "My software needs to talk to a device",
    },
    detail: {
      fa: "بارکدخوان، چاپگر، اسکنر یا تجهیزات دارای رابط",
      en: "Barcode readers, printers, scanners and other supported equipment",
    },
    href: "#windows-equipment",
    icon: PackageCheck,
  },
  {
    label: { fa: "نرم‌افزار قدیمی دارم", en: "I have an older application" },
    detail: {
      fa: "رفع باگ، توسعه امکانات یا بازسازی مرحله‌ای",
      en: "Bug fixes, new features or a rebuild in stages",
    },
    href: "#windows-existing",
    icon: Wrench,
  },
];

const solutionCards = [
  {
    title: { fa: "اداری و مدیریتی", en: "Office and operations" },
    text: {
      fa: "فرم‌ها، پرونده‌ها، مشتریان و وضعیت کارها را در یک برنامه‌ی مشخص جمع کن.",
      en: "Bring forms, records, customers and task status into one application.",
    },
    icon: ClipboardList,
    tags: {
      fa: ["فرم و جست‌وجو", "سطح دسترسی", "گزارش و چاپ"],
      en: ["Forms and search", "Access control", "Reports and printing"],
    },
  },
  {
    title: {
      fa: "محاسبات و ابزار تخصصی",
      en: "Calculators and specialist tools",
    },
    text: {
      fa: "قواعد محاسبه‌ی قیمت، هزینه یا نتیجه را یک‌بار تعریف کن و خروجی قابل پیگیری بگیر.",
      en: "Define pricing, cost or calculation rules once and keep a record of the results.",
    },
    icon: Gauge,
    tags: {
      fa: ["فرمول اختصاصی", "اعتبارسنجی ورودی", "ذخیره‌ی سابقه"],
      en: ["Custom formulas", "Input validation", "Calculation history"],
    },
  },
  {
    title: { fa: "ثبت و مدیریت اطلاعات", en: "Data entry and records" },
    text: {
      fa: "داده‌های پراکنده را به رکوردهایی تبدیل کن که سریع پیدا، اصلاح و خروجی گرفته می‌شوند.",
      en: "Turn scattered data into records your team can find, edit and export quickly.",
    },
    icon: Boxes,
    tags: {
      fa: ["دسته‌بندی", "پیوست فایل", "Excel و CSV"],
      en: ["Categories", "Attachments", "Excel and CSV"],
    },
  },
  {
    title: { fa: "انبار، سفارش و عملیات", en: "Inventory and order tracking" },
    text: {
      fa: "ورود و خروج کالا، مراحل سفارش و مسئول هر مرحله را قابل مشاهده کن.",
      en: "See stock movements, order stages and who is responsible for each step.",
    },
    icon: PackageCheck,
    tags: {
      fa: ["موجودی", "رهگیری سفارش", "چاپ لیبل"],
      en: ["Stock levels", "Order tracking", "Label printing"],
    },
  },
  {
    title: { fa: "گزارش و داشبورد", en: "Reports and dashboards" },
    text: {
      fa: "از فایل یا پایگاه داده به یک تصویر روشن از فروش، موجودی و عملکرد برس.",
      en: "Turn files and databases into a clear view of sales, stock and performance.",
    },
    icon: BarChart3,
    tags: {
      fa: ["نمودار", "فیلتر تاریخ", "خروجی PDF"],
      en: ["Charts", "Date filters", "PDF export"],
    },
  },
  {
    title: { fa: "فایل‌ها و Excel", en: "Files and Excel" },
    text: {
      fa: "ترکیب، پاک‌سازی، تبدیل و پردازش انبوه فایل‌ها را از کار دستی جدا کن.",
      en: "Automate merging, cleaning and converting files in batches.",
    },
    icon: FileSpreadsheet,
    tags: {
      fa: ["پردازش انبوه", "تبدیل فرمت", "خروجی استاندارد"],
      en: ["Batch processing", "Format conversion", "Standard exports"],
    },
  },
];

const processSteps = [
  [
    "01",
    "شناخت کار واقعی",
    "یک یا چند کار روزمره را قدم‌به‌قدم بررسی می‌کنیم.",
    "Understand the work",
    "We walk through one or more everyday tasks with your team.",
  ],
  [
    "02",
    "طراحی نسخه‌ی اول",
    "ورودی، خروجی، نقش‌ها و صفحه‌های ضروری را مشخص می‌کنیم.",
    "Design the first version",
    "We define the inputs, outputs, roles and screens the first version needs.",
  ],
  [
    "03",
    "ساخت و اتصال",
    "برنامه، داده، فایل‌ها و تجهیزات موردنیاز را به هم وصل می‌کنیم.",
    "Build and connect",
    "We connect the application to the data, files and equipment your workflow depends on.",
  ],
  [
    "04",
    "آزمون روی محیط واقعی",
    "نصب، چاپ، ورود فایل، دسترسی و سناریوهای خطا را می‌سنجیم.",
    "Test in your environment",
    "We test installation, printing, imports, access and common failure scenarios.",
  ],
  [
    "05",
    "تحویل و آموزش",
    "روش نصب، پشتیبان‌گیری و استفاده‌ی تیم را روشن می‌کنیم.",
    "Hand over and train",
    "We show your team how to install, back up and use the software.",
  ],
  [
    "06",
    "نگهداری و توسعه",
    "بعد از راه‌اندازی، مسیر اصلاح و قابلیت‌های بعدی مشخص می‌شود.",
    "Maintain and improve",
    "After launch, we agree how to handle fixes and plan the next features.",
  ],
] as const;

const fallbackFaq = [
  [
    "نرم‌افزار بدون اینترنت هم کار می‌کند؟",
    "اگر کار آفلاین جزو نیاز باشد، ذخیره‌سازی محلی و روش پشتیبان‌گیری از ابتدا طراحی می‌شود. اتصال به سرویس بیرونی همچنان به اینترنت نیاز دارد.",
  ],
  [
    "می‌شود چند نفر هم‌زمان از برنامه استفاده کنند؟",
    "بله؛ تعداد کاربران، محل ذخیره‌ی داده و شرایط شبکه در معماری و آزمون پذیرش لحاظ می‌شوند.",
  ],
  [
    "اطلاعات Excel یا برنامه‌ی قبلی قابل انتقال است؟",
    "بعد از بررسی ساختار فایل، کیفیت داده و دسترسی به خروجی، محدوده‌ی انتقال و پاک‌سازی مشخص می‌شود.",
  ],
  [
    "برنامه روی چه نسخه‌ای از ویندوز نصب می‌شود؟",
    "نسخه‌های هدف و پیش‌نیازهای نصب برای همان پروژه اعلام و روی محیط‌های توافق‌شده آزمایش می‌شوند.",
  ],
] as const;

const specialty = specialtyServices.find(
  (item) => item.slug === "windows-software-development",
);
const faq = {
  fa:
    specialty?.faqs.map((item) => [item.question, item.answer] as const) ??
    fallbackFaq,
  en: [
    [
      "Can the software work offline?",
      "If you need offline access, we design local storage and offline features from the start. Connections to external services and data synchronization still need a network, so we plan how the app should behave when that connection drops.",
    ],
    [
      "Can several people use it at the same time?",
      "Yes, with a multi-user setup, clear roles and the right infrastructure. The number of users, where the data lives and the network setup all inform the estimate and acceptance testing.",
    ],
    [
      "Can you move my existing data from Excel or another app?",
      "We scope the migration after reviewing how you can export the data, its structure and quality, and how incomplete or duplicate records should be handled.",
    ],
    [
      "Which versions of Windows will it run on?",
      "We agree on supported Windows versions and installation requirements for your project. We check your computers before estimating and test the installer in the agreed environment.",
    ],
  ],
} as const;

function PrimaryLink({
  href,
  arrow: Arrow,
  children,
}: {
  href: string;
  arrow: typeof ArrowUpLeft;
  children: React.ReactNode;
}) {
  return (
    <Link className={styles.primary} href={href}>
      {children}
      <Arrow size={17} aria-hidden="true" />
    </Link>
  );
}

export async function WindowsSoftwarePage() {
  const { locale, href } = await getTranslations();
  const fa = locale === "fa";
  const text = (persian: string, english: string) => (fa ? persian : english);
  const Arrow = fa ? ArrowLeft : ArrowRight;
  const PrimaryArrow = fa ? ArrowUpLeft : ArrowUpRight;
  const format = new Intl.NumberFormat(locale, { useGrouping: false });
  return (
    <main
      className={styles.page}
      dir={fa ? "rtl" : "ltr"}
      data-windows-software-page
    >
      <div className={styles.container}>
        <header className={styles.hero}>
          <div className={styles.breadcrumb}>
            <Link href={href("/services/software")}>
              {text("نرم‌افزار اختصاصی", "Custom software")}
            </Link>
            <span>/</span>
            <span>{text("نرم‌افزار ویندوز", "Windows software")}</span>
          </div>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <h1>
                {text("نرم‌افزار ویندوز،", "Windows software")}{" "}
                <span>
                  {text("متناسب با کار شما", "built around your work")}
                </span>
              </h1>
              <p className={styles.lead}>
                {text(
                  "ثبت سفارش، محاسبات، گزارش‌گیری یا کار با تجهیزات رو در برنامه‌ای جمع کن که برای روال کاری مجموعه‌ات ساخته شده.",
                  "Bring orders, calculations, reports or equipment into a desktop application designed around how your team works.",
                )}
              </p>
              <div className={styles.actions}>
                <PrimaryLink href={href(inquiryHref)} arrow={PrimaryArrow}>
                  {text(
                    "می‌خوام نرم‌افزار ویندوز بسازم",
                    "Discuss a Windows app",
                  )}
                </PrimaryLink>
                <a className={styles.secondary} href="#windows-solutions">
                  {text("ببین چه نرم‌افزارهایی می‌سازیم", "See what we build")}{" "}
                  <ArrowDown size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
            <figure className={styles.productStage}>
              <div className={styles.window} aria-hidden="true">
                <div className={styles.windowBar}>
                  <Monitor size={15} />
                  <strong>
                    {text("داشبورد عملیات", "Operations dashboard")}
                  </strong>
                  <span className={styles.windowDots}>
                    <i />
                    <i />
                    <i />
                  </span>
                </div>
                <div className={styles.windowBody}>
                  <aside className={styles.windowSidebar}>
                    <b>
                      <BarChart3 size={15} /> {text("نمای کلی", "Overview")}
                    </b>
                    <span>
                      <ClipboardList size={15} /> {text("سفارش‌ها", "Orders")}
                    </span>
                    <span>
                      <Boxes size={15} /> {text("موجودی", "Inventory")}
                    </span>
                    <span>
                      <FileSpreadsheet size={15} />{" "}
                      {text("گزارش‌ها", "Reports")}
                    </span>
                  </aside>
                  <div className={styles.windowMain}>
                    <div className={styles.windowHeading}>
                      <strong>{text("وضعیت سفارش‌ها", "Order status")}</strong>
                      <span>{text("۷ روز اخیر", "Last 7 days")}</span>
                    </div>
                    <div className={styles.metrics}>
                      <div>
                        <strong>{format.format(248)}</strong>
                        <span>{text("سفارش ثبت‌شده", "Orders received")}</span>
                      </div>
                      <div>
                        <strong>{format.format(36)}</strong>
                        <span>{text("در حال انجام", "In progress")}</span>
                      </div>
                      <div>
                        <strong>{format.format(8)}</strong>
                        <span>{text("هشدار موجودی", "Stock alerts")}</span>
                      </div>
                    </div>
                    <div className={styles.chartPanel}>
                      <b>{text("روند سفارش‌ها", "Order trend")}</b>
                      <div className={styles.chartBars}>
                        {orderTrend.map(([day, height]) => (
                          <i key={day.en} style={{ height: `${height}%` }} />
                        ))}
                      </div>
                      <div className={styles.chartAxis}>
                        {orderTrend.map(([day]) => (
                          <span key={day.en}>{day[locale]}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <figcaption>
                {text(
                  "پیش‌نمایش رابط نرم‌افزار با داده‌های نمونه",
                  "Application preview with sample data",
                )}
              </figcaption>
            </figure>
          </div>
          <div className={styles.quickPaths}>
            {quickPaths.map(({ label, detail, href, icon: Icon }) => (
              <a href={href} key={href}>
                <Icon size={20} aria-hidden="true" />
                <span>
                  <b>{label[locale]}</b>
                  <small>{detail[locale]}</small>
                </span>
                <ArrowDown size={17} aria-hidden="true" />
              </a>
            ))}
          </div>
        </header>

        <section
          className={styles.problem}
          aria-labelledby="windows-problem-title"
        >
          <div className={styles.sectionIntro}>
            <h2 id="windows-problem-title">
              {text(
                "هنوز برای انجام یه کار ساده، چند تا برنامه باز می‌کنی؟",
                "Still opening several apps to do one simple job?",
              )}
            </h2>
            <p>
              {text(
                "مشکل همیشه از روش کارت نیست؛ گاهی ابزار مناسبی برای همان روش وجود ندارد.",
                "Sometimes the workflow is fine and you just need a tool that fits it.",
              )}
            </p>
          </div>
          <ul className={styles.problemList}>
            {[
              text(
                "اطلاعات کاری بین چند فایل Excel پخش شده.",
                "Business data is scattered across spreadsheets.",
              ),
              text(
                "هر روز محاسبات مشابه را چند بار انجام می‌دهی.",
                "You repeat the same calculations several times a day.",
              ),
              text(
                "برای چاپ فاکتور، لیبل یا گزارش چند مرحله طی می‌کنی.",
                "Printing an invoice, label or report takes several steps.",
              ),
              text(
                "نرم‌افزار آماده با فرایند واقعی مجموعه هماهنگ نیست.",
                "Off-the-shelf tools do not fit your team's workflow.",
              ),
              text(
                "باید اطلاعات یک دستگاه را دریافت و ثبت کنی.",
                "You need to capture and save data from a device.",
              ),
              text(
                "بخشی از کار باید بدون اینترنت انجام شود.",
                "Part of the work needs to happen offline.",
              ),
            ].map((item) => (
              <li key={item}>
                <Check size={17} aria-hidden="true" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className={styles.solutions}
          id="windows-solutions"
          aria-labelledby="windows-solutions-title"
        >
          <div className={styles.sectionHeader}>
            <h2 id="windows-solutions-title">
              {text("چه نرم‌افزارهایی می‌سازیم؟", "What can we build for you?")}
            </h2>
            <p>
              {text(
                "نوع نرم‌افزار، امکانات و شیوه‌ی ذخیره‌ی اطلاعات را بر اساس کاری که واقعاً انجام می‌دهی مشخص می‌کنیم.",
                "We choose the application, its features and the way it stores data based on the work you do every day.",
              )}
            </p>
          </div>
          <div className={styles.solutionGrid}>
            {solutionCards.map(({ title, text, icon: Icon, tags }) => (
              <article key={title.en}>
                <div className={styles.cardHead}>
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3>{title[locale]}</h3>
                <p>{text[locale]}</p>
                <ul>
                  {tags[locale].map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          className={styles.architecture}
          id="windows-equipment"
          aria-labelledby="windows-architecture-title"
        >
          <div className={styles.architectureCopy}>
            <h2 id="windows-architecture-title">
              {text(
                "برنامه کجا و چطور کار می‌کند؟",
                "Where and how will the application run?",
              )}
            </h2>
            <p>
              {text(
                "از یک رایانهٔ آفلاین تا چند کاربر روی شبکهٔ داخلی، شیوهٔ نصب رو بر اساس محل ذخیرهٔ داده، دستگاه‌ها و نیاز تیم مشخص می‌کنیم.",
                "From one offline computer to multiple users on a local network, we plan the setup around your data, devices and team.",
              )}
            </p>
          </div>
          <ul className={styles.systemOptions}>
            {systemOptions.map(({ icon: Icon, title, description }) => (
              <li key={title.en}>
                <Icon size={21} aria-hidden="true" />
                <div>
                  <h3>{title[locale]}</h3>
                  <p>{description[locale]}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section
          className={styles.existing}
          id="windows-existing"
          aria-labelledby="windows-existing-title"
        >
          <div className={styles.existingCopy}>
            <h2 id="windows-existing-title">
              {text(
                "نرم‌افزار فعلی رو می‌شه بهتر کرد؟",
                "Can we improve your existing software?",
              )}
            </h2>
            <p>
              {text(
                "کد، داده‌ها و مشکلات برنامه رو بررسی می‌کنیم تا معلوم بشه چه بخش‌هایی رو می‌شه حفظ کرد و کجا به اصلاح یا بازسازی نیاز داریم.",
                "We review the code, data and known issues to see what can stay and what needs a fix or a rebuild.",
              )}
            </p>
            <ul>
              {[
                text(
                  "رفع باگ و بهبود رابط کاربری",
                  "Bug fixes and interface improvements",
                ),
                text(
                  "سازگاری با نسخهٔ هدف ویندوز",
                  "Compatibility with the target Windows version",
                ),
                text(
                  "اضافه کردن قابلیت یا خروجی جدید",
                  "New features and export formats",
                ),
              ].map((item) => (
                <li key={item}>
                  <Check size={17} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <Link className={styles.textLink} href={href("/services/rescue")}>
              {text(
                "رفع باگ و توسعهٔ پروژه‌های موجود",
                "Fix and improve an existing project",
              )}{" "}
              <Arrow size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className={styles.existingPhoto}>
            <Image
              src="/brand/software-service/desktop-workspace.webp"
              alt=""
              fill
              sizes="(max-width: 980px) 92vw, (max-width: 1400px) 49vw, 700px"
            />
          </div>
        </section>

        <section
          className={styles.process}
          aria-labelledby="windows-process-title"
        >
          <div className={styles.sectionHeader}>
            <h2 id="windows-process-title">
              {text(
                "از شناخت کار تا نصب و تحویل",
                "From discovery to installation and handover",
              )}
            </h2>
            <p>
              {text(
                "نسخهٔ اول رو با کارهای روزمرهٔ تیمت می‌سنجیم. قبل از تحویل، نصب و مسیرهای اصلی رو در محیط توافق‌شده آزمایش می‌کنیم.",
                "We check the first version against your team's daily tasks, then test installation and core workflows in the agreed environment before handover.",
              )}
            </p>
          </div>
          <ol>
            {processSteps.map(
              ([number, faTitle, faDescription, enTitle, enDescription]) => (
                <li key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{text(faTitle, enTitle)}</h3>
                    <p>{text(faDescription, enDescription)}</p>
                  </div>
                </li>
              ),
            )}
          </ol>
        </section>

        <section className={styles.faq} aria-labelledby="windows-faq-title">
          <h2 id="windows-faq-title">
            {text("سؤال‌های متداول", "Frequently asked questions")}
          </h2>
          <div>
            {faq[locale].map(([question, answer]) => (
              <details key={question} name="windows-faq">
                <summary>
                  {question}
                  <Plus size={18} aria-hidden="true" />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.closing}>
          <div>
            <h2>
              {text(
                "کدوم کار رو می‌خوای ساده‌تر کنی؟",
                "Which task would you like to simplify?",
              )}
            </h2>
            <p>
              {text(
                "بگو امروز چطور انجامش می‌دی و چه خروجی‌ای لازم داری. از همین‌جا محدودهٔ نسخهٔ اول رو مشخص می‌کنیم.",
                "Tell us how you do it today and what result you need. We can use that to scope the first version.",
              )}
            </p>
          </div>
          <div className={styles.actions}>
            <PrimaryLink href={href(inquiryHref)} arrow={PrimaryArrow}>
              {text(
                "بیا درباره‌ی نرم‌افزارم حرف بزنیم",
                "Talk about my software",
              )}
            </PrimaryLink>
            <Link
              className={styles.secondary}
              href={href("/services/software")}
            >
              {text("همه‌ی نرم‌افزارها", "All software services")}{" "}
              <Arrow size={16} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
