import Link from "next/link";
import Image from "next/image";
import { RichContent } from "@/components/content/RichContent";
import {
  contentPath,
  serviceHierarchy,
  type PublicContent,
} from "@/server/content";
import { localizedHref, type Locale } from "@/lib/i18n";
import type { RichNode } from "@/lib/content-rules";
import styles from "./ServiceDetailPage.module.css";

const websiteProjects = [
  {
    slug: "ai-agency-website",
    title: { fa: "وب‌سایت آژانس هوش مصنوعی", en: "AI agency website" },
    type: { fa: "سایت خدماتی", en: "Service website" },
    image: "/assets/79de4a62dbad0012.png",
  },
  {
    slug: "ai-automation-platform",
    title: { fa: "پلتفرم اتوماسیون هوش مصنوعی", en: "AI automation platform" },
    type: { fa: "وب‌اپلیکیشن", en: "Web application" },
    image: "/assets/3bec5082044715be.png",
  },
  {
    slug: "fashion-ecommerce",
    title: { fa: "فروشگاه اینترنتی مد و پوشاک", en: "Fashion ecommerce" },
    type: { fa: "فروشگاه اینترنتی", en: "Online store" },
    image: "/assets/1115c40b7f2ee826.png",
  },
  {
    slug: "finance-saas-website",
    title: { fa: "وب‌سایت نرم‌افزار مالی ابری", en: "Finance SaaS website" },
    type: { fa: "محصول دیجیتال", en: "Digital product" },
    image: "/assets/be48c8e8f72a2f47.png",
  },
] as const;

const websiteCapabilities = [
  {
    number: "01",
    title: { fa: "ساختار و تجربهٔ کاربر", en: "Structure & UX" },
    body: {
      fa: "صفحه‌ها و مسیرهایی که کاربر را از اولین نگاه تا اقدام بعدی همراهی می‌کنند.",
      en: "Pages and journeys that guide people from first impression to the next useful action.",
    },
  },
  {
    number: "02",
    title: { fa: "هویت بصری و رابط", en: "Visual system & UI" },
    body: {
      fa: "رابطی متمایز، خوانا و هماهنگ با شخصیت برند؛ از تایپوگرافی تا جزئیات تعاملی.",
      en: "A distinctive, readable interface system from typography to interaction details.",
    },
  },
  {
    number: "03",
    title: { fa: "واکنش‌گرا و سریع", en: "Responsive & fast" },
    body: {
      fa: "تجربه‌ای دقیق روی موبایل، تبلت و دسکتاپ، با پایه‌ای آماده برای رشد.",
      en: "A considered experience on every screen, with a foundation ready to grow.",
    },
  },
  {
    number: "04",
    title: { fa: "تحویل قابل مدیریت", en: "A manageable handover" },
    body: {
      fa: "محتوا، دسترسی‌ها و مسیر ادامهٔ کار روشن تحویل می‌شوند تا سایت بعداً هم قابل استفاده بماند.",
      en: "Content, access and next steps are handed over clearly so the site stays useful.",
    },
  },
] as const;

const websiteProcess = [
  {
    number: "01",
    title: { fa: "کشف", en: "Discover" },
    body: { fa: "مسئله، مخاطب و هدف را روشن می‌کنیم.", en: "Clarify the problem, audience and goal." },
  },
  {
    number: "02",
    title: { fa: "جهت‌دهی", en: "Direct" },
    body: { fa: "ساختار، اولویت‌ها و مسیر بصری را می‌چینیم.", en: "Shape the structure, priorities and visual direction." },
  },
  {
    number: "03",
    title: { fa: "ساختن", en: "Build" },
    body: { fa: "نسخه را مرحله‌به‌مرحله اجرا و بررسی می‌کنیم.", en: "Build and review the product in clear stages." },
  },
  {
    number: "04",
    title: { fa: "تحویل", en: "Launch" },
    body: { fa: "با آموزش و مالکیت روشن منتشر می‌کنیم.", en: "Launch with clear ownership and handover." },
  },
] as const;

const softwareModules = [
  {
    number: "01",
    title: { fa: "CRM و پنل مشتری", en: "CRM & customer portals" },
    body: { fa: "اطلاعات، پیگیری و ارتباط با مشتری در یک مسیر روشن.", en: "Keep customer information, follow-ups and communication in one clear flow." },
  },
  {
    number: "02",
    title: { fa: "داشبورد مدیریتی", en: "Management dashboards" },
    body: { fa: "عددهای مهم را از دل داده بیرون می‌کشیم تا تصمیم سریع‌تر شود.", en: "Turn important data into a view that helps decisions happen faster." },
  },
  {
    number: "03",
    title: { fa: "فروش و سفارش‌گیری", en: "Sales & ordering" },
    body: { fa: "فرایند سفارش، پرداخت و پیگیری را به هم وصل می‌کنیم.", en: "Connect ordering, payment and follow-up into one reliable workflow." },
  },
  {
    number: "04",
    title: { fa: "رزرو و نوبت‌دهی", en: "Booking & scheduling" },
    body: { fa: "زمان، ظرفیت و وضعیت درخواست‌ها همیشه قابل فهم می‌ماند.", en: "Keep time, capacity and request status easy to understand." },
  },
  {
    number: "05",
    title: { fa: "پرتال نمایندگان", en: "Dealer portals" },
    body: { fa: "دسترسی هر نقش را جدا می‌کنیم تا کارها امن و قابل پیگیری باشند.", en: "Separate access by role so work stays secure and traceable." },
  },
  {
    number: "06",
    title: { fa: "سامانه‌های سازمانی", en: "Enterprise systems" },
    body: { fa: "قواعد پیچیده را به تجربه‌ای ساده برای تیم تبدیل می‌کنیم.", en: "Turn complex business rules into a simple team experience." },
  },
] as const;

const softwareProcess = [
  { number: "01", title: { fa: "شناخت", en: "Understand" }, body: { fa: "مسئله، نقش‌ها و محدودیت‌ها را می‌بینیم.", en: "Map the problem, roles and constraints." } },
  { number: "02", title: { fa: "مدل", en: "Model" }, body: { fa: "فرایند و نسخهٔ اول را روی کاغذ قابل آزمون می‌کنیم.", en: "Make the workflow and first version testable." } },
  { number: "03", title: { fa: "ساخت", en: "Build" }, body: { fa: "مرحله‌به‌مرحله می‌سازیم و با سناریوهای واقعی می‌سنجیم.", en: "Build in stages and test with real scenarios." } },
  { number: "04", title: { fa: "تحویل", en: "Handover" }, body: { fa: "دسترسی، آموزش و مالکیت را روشن تحویل می‌دهیم.", en: "Hand over access, training and ownership clearly." } },
] as const;

const rescueFindings = [
  { number: "01", title: { fa: "خطای قابل تکرار", en: "Reproducible errors" }, body: { fa: "اول مسئله را دوباره ایجاد می‌کنیم تا اصلاح روی حدس ساخته نشود.", en: "Reproduce the issue first, so the fix is not built on guesses." } },
  { number: "02", title: { fa: "وابستگی‌های قدیمی", en: "Legacy dependencies" }, body: { fa: "کد، افزونه و سرویس‌هایی را که پروژه را شکننده کرده‌اند پیدا می‌کنیم.", en: "Find the code, plugins and services making the project fragile." } },
  { number: "03", title: { fa: "مسیر تحویل ناقص", en: "Broken delivery path" }, body: { fa: "می‌بینیم چرا پروژه ساخته، تست یا منتشر نمی‌شود.", en: "Understand why the project does not build, test or ship cleanly." } },
  { number: "04", title: { fa: "ریسک داده", en: "Data risk" }, body: { fa: "قبل از تغییرهای حساس، پشتیبان و مسیر بازگشت را روشن می‌کنیم.", en: "Make backups and rollback paths explicit before risky changes." } },
] as const;

const rescueSteps = [
  { number: "01", title: { fa: "اسکن", en: "Scan" }, body: { fa: "وضعیت پروژه و راه بازتولید مسئله را ثبت می‌کنیم.", en: "Record the project state and how to reproduce the issue." } },
  { number: "02", title: { fa: "ایمن‌سازی", en: "Stabilize" }, body: { fa: "پشتیبان، محیط آزمایشی و اولویت اصلاح را مشخص می‌کنیم.", en: "Set backups, a safe environment and a repair priority." } },
  { number: "03", title: { fa: "اصلاح", en: "Repair" }, body: { fa: "کوتاه‌ترین مسیر امن برای رفع یا توسعه را اجرا می‌کنیم.", en: "Apply the shortest safe route to repair or extend the project." } },
  { number: "04", title: { fa: "انتشار", en: "Release" }, body: { fa: "آزمون، تحویل و مسیر ادامهٔ کار را روشن می‌گذاریم.", en: "Leave testing, handover and the next maintenance path clear." } },
] as const;

const connectIntegrations = [
  { name: "Telegram", label: { fa: "ربات و پیام‌رسان", en: "Bot & messenger" }, mark: "TG" },
  { name: "Store", label: { fa: "فروشگاه", en: "Store" }, mark: "ST" },
  { name: "API", label: { fa: "اتصال سرویس", en: "Service API" }, mark: "↔" },
  { name: "Finance", label: { fa: "حسابداری", en: "Accounting" }, mark: "FN" },
  { name: "SMS", label: { fa: "پیامک و اعلان", en: "SMS & alerts" }, mark: "SMS" },
  { name: "Sheets", label: { fa: "گزارش و داده", en: "Reports & data" }, mark: "Σ" },
] as const;

const connectFlows = [
  { number: "01", title: { fa: "ورودی می‌رسد", en: "A trigger arrives" }, body: { fa: "سفارش، پیام، فرم یا رویداد به سیستم وارد می‌شود.", en: "An order, message, form or event enters the system." } },
  { number: "02", title: { fa: "قواعد تصمیم می‌گیرند", en: "Rules decide" }, body: { fa: "اطلاعات بررسی و به مسیر درست هدایت می‌شود.", en: "The information is checked and routed to the right path." } },
  { number: "03", title: { fa: "ابزارها وصل می‌شوند", en: "Tools connect" }, body: { fa: "سرویس‌های پراکنده با API و ربات کنار هم کار می‌کنند.", en: "Scattered tools work together through APIs and bots." } },
  { number: "04", title: { fa: "خروجی انجام می‌شود", en: "An outcome happens" }, body: { fa: "اعلان، ثبت، گزارش یا اقدام بعدی بدون دخالت دستی انجام می‌شود.", en: "The alert, record, report or next action happens automatically." } },
] as const;

const connectServices = [
  { number: "01", title: { fa: "ربات سفارش‌گیری", en: "Ordering bots" }, body: { fa: "سفارش را از گفتگو بگیر، بررسی کن و به تیم یا فروشگاه برسان.", en: "Collect orders in conversation, validate them and send them to the team or store." } },
  { number: "02", title: { fa: "اتصال فروشگاه و انبار", en: "Store & inventory sync" }, body: { fa: "موجودی، سفارش و وضعیت ارسال بین ابزارها هماهنگ می‌ماند.", en: "Inventory, orders and shipping status stay in sync across tools." } },
  { number: "03", title: { fa: "اعلان‌های هوشمند", en: "Smart notifications" }, body: { fa: "هر اتفاق مهم، به‌موقع و از کانال درست به آدم درست می‌رسد.", en: "Every important event reaches the right person through the right channel." } },
  { number: "04", title: { fa: "فرایندهای اختصاصی", en: "Custom workflows" }, body: { fa: "هر کاری که تکرار می‌شود، می‌تواند یک مسیر خودکار و قابل پیگیری داشته باشد.", en: "Any repeated task can become an automated, traceable workflow." } },
] as const;

const connectProcess = [
  { number: "01", title: { fa: "نقشه‌برداری", en: "Map" }, body: { fa: "می‌بینیم کار امروز دقیقاً چطور انجام می‌شود.", en: "See how the work happens today." } },
  { number: "02", title: { fa: "انتخاب نقطهٔ شروع", en: "Pick the first win" }, body: { fa: "یک گلوگاه پرتکرار و قابل اندازه‌گیری را انتخاب می‌کنیم.", en: "Choose a frequent, measurable bottleneck." } },
  { number: "03", title: { fa: "ساخت و اتصال", en: "Build & connect" }, body: { fa: "ربات، API و ابزارها را در یک مسیر قابل اعتماد می‌چینیم.", en: "Bring bots, APIs and tools into one reliable path." } },
  { number: "04", title: { fa: "تحویل و بهبود", en: "Handover & improve" }, body: { fa: "گزارش، مالکیت و راه توسعهٔ بعدی روشن می‌ماند.", en: "Reporting, ownership and the next improvement stay clear." } },
] as const;

const dataStats = [
  { value: "01", label: { fa: "یک منبع حقیقت", en: "One source of truth" } },
  { value: "02", label: { fa: "گزارش‌های قابل فهم", en: "Readable reports" } },
  { value: "03", label: { fa: "تصمیم‌های سریع‌تر", en: "Faster decisions" } },
  { value: "04", label: { fa: "ابزارهای قابل توسعه", en: "Tools that grow" } },
] as const;

const dataFeatures = [
  { number: "01", title: { fa: "داده را مرتب می‌کنیم", en: "Make data orderly" }, body: { fa: "فایل‌ها، فرمول‌ها و ورودی‌های پراکنده را به یک ساختار قابل اتکا تبدیل می‌کنیم.", en: "Turn scattered files, formulas and inputs into a structure you can trust." } },
  { number: "02", title: { fa: "عدد را قابل دیدن می‌کنیم", en: "Make numbers visible" }, body: { fa: "داشبوردی می‌سازیم که وضعیت را در یک نگاه نشان می‌دهد، نه بعد از چند ساعت فیلترکردن.", en: "Build dashboards that show the state at a glance, without hours of filtering." } },
  { number: "03", title: { fa: "گزارش را قابل استفاده می‌کنیم", en: "Make reports useful" }, body: { fa: "خروجی را برای آدمی طراحی می‌کنیم که باید با آن تصمیم بگیرد و کاری انجام دهد.", en: "Design outputs for the person who has to decide and act on them." } },
] as const;

const dataTools = [
  { name: "Excel", label: { fa: "فایل‌های اختصاصی", en: "Custom workbooks" } },
  { name: "DATA", label: { fa: "پاک‌سازی و تبدیل", en: "Clean & transform" } },
  { name: "KPI", label: { fa: "شاخص‌های مدیریتی", en: "Management KPIs" } },
  { name: "CHART", label: { fa: "نمودار و داشبورد", en: "Charts & dashboards" } },
  { name: "OPS", label: { fa: "ابزارهای عملیاتی", en: "Operations tools" } },
  { name: "FLOW", label: { fa: "ورودی و خروجی", en: "Inputs & exports" } },
] as const;

const dataProcess = [
  { number: "01", title: { fa: "جمع‌کردن", en: "Gather" }, body: { fa: "فایل‌ها، منابع و هدف گزارش را کنار هم می‌گذاریم.", en: "Bring files, sources and the reporting goal together." } },
  { number: "02", title: { fa: "تمیزکردن", en: "Clean" }, body: { fa: "دادهٔ ناسازگار و تکراری را برای تصمیم آماده می‌کنیم.", en: "Prepare inconsistent and duplicate data for decisions." } },
  { number: "03", title: { fa: "مدل‌کردن", en: "Model" }, body: { fa: "فرمول، شاخص و مسیر گزارش را به زبان کسب‌وکار می‌چینیم.", en: "Shape formulas, metrics and report paths around the business." } },
  { number: "04", title: { fa: "تحویل‌دادن", en: "Hand over" }, body: { fa: "ابزاری می‌دهیم که تیم بتواند فردا هم از آن استفاده کند.", en: "Deliver a tool the team can keep using tomorrow." } },
] as const;

const continueServices = [
  { number: "01", title: { fa: "مراقبت فنی", en: "Technical care" }, body: { fa: "بروزرسانی، بررسی سلامت و رفع مشکل‌های دوره‌ای بدون توقف کار تیم.", en: "Updates, health checks and recurring fixes without interrupting the team." } },
  { number: "02", title: { fa: "بهبود مستمر", en: "Continuous improvement" }, body: { fa: "هر ماه یک جای بهتر برای سرعت، تجربه یا فرایند پیدا می‌کنیم.", en: "Find one better place for speed, experience or process every month." } },
  { number: "03", title: { fa: "توسعهٔ مرحله‌ای", en: "Step-by-step development" }, body: { fa: "امکانات جدید را بر اساس اولویت و ظرفیت واقعی پروژه جلو می‌بریم.", en: "Move new features forward around the project’s real priority and capacity." } },
] as const;

const continueSteps = [
  { number: "01", title: { fa: "شناخت وضعیت", en: "Know the state" }, body: { fa: "می‌دانیم چه چیزی سالم است و کدام بخش نیاز به توجه دارد.", en: "Know what is healthy and what needs attention." } },
  { number: "02", title: { fa: "اولویت‌بندی", en: "Prioritize" }, body: { fa: "درخواست‌ها را با اثر و فوریت واقعی مرتب می‌کنیم.", en: "Order requests by their real impact and urgency." } },
  { number: "03", title: { fa: "اجرا و گزارش", en: "Do & report" }, body: { fa: "کار را انجام می‌دهیم و نتیجه را طوری تحویل می‌دهیم که دیده شود.", en: "Do the work and hand over a result people can see." } },
  { number: "04", title: { fa: "قدم بعدی", en: "Next step" }, body: { fa: "پروژه همیشه یک مسیر روشن برای ادامه دارد.", en: "The project always has a clear path forward." } },
] as const;

const continueCadence = [
  { label: { fa: "فوری", en: "Urgent" }, title: { fa: "رفع مشکل", en: "Issue fix" }, body: { fa: "برای وقتی که چیزی از کار افتاده و باید سریع به وضعیت پایدار برگردد.", en: "For when something is down and needs a fast return to stable." } },
  { label: { fa: "ماهانه", en: "Monthly" }, title: { fa: "مراقبت منظم", en: "Regular care" }, body: { fa: "برای بروزرسانی، بررسی سلامت و بهبودهای کوچک اما مداوم.", en: "For updates, health checks and small, steady improvements." } },
  { label: { fa: "رشد", en: "Growth" }, title: { fa: "توسعهٔ همراه", en: "Partnered growth" }, body: { fa: "برای تیم‌هایی که محصولشان همزمان با کسب‌وکارشان بزرگ می‌شود.", en: "For teams whose product grows alongside the business." } },
] as const;

export async function ServiceDetailPage({
  content,
  locale,
}: {
  content: PublicContent;
  locale: Locale;
}) {
  const fa = locale === "fa";
  const isWebsiteService = content.slug === "build";
  const isSoftwareService = content.slug === "software";
  const isRescueService = content.slug === "rescue";
  const isConnectService = content.slug === "connect";
  const isDataService = content.slug === "data";
  const isContinueService = content.slug === "continue";
  const hierarchy = await serviceHierarchy(content, locale);
  const inquiryHref = localizedHref(
    "/contact?service=" + encodeURIComponent(content.slug),
    locale,
  );
  const contentSections: RichNode[][] = [];
  for (const node of content.body.content || []) {
    if (node.type === "heading" && contentSections.length) contentSections.push([]);
    if (!contentSections.length) contentSections.push([]);
    contentSections[contentSections.length - 1].push(node);
  }

  return (
    <main
      className={`${styles.page} serviceDetailPage${isWebsiteService ? ` buildPage ${styles.buildPage}` : isSoftwareService ? ` softwarePage softwareLight currentPage ${styles.softwarePage} ${styles.softwareLight} ${styles.currentPage}` : isRescueService ? ` rescuePage ${styles.rescuePage}` : isConnectService ? ` connectPage brutalistPage ${styles.connectPage} ${styles.brutalistPage}` : isDataService ? ` dataPage fintlyPage ${styles.dataPage} ${styles.fintlyPage}` : isContinueService ? ` continuePage ledgerPage ${styles.continuePage} ${styles.ledgerPage}` : ""}`}
    >
      <nav className={styles.breadcrumb} aria-label={fa ? "مسیر صفحه" : "Breadcrumb"}>
        <Link href={localizedHref("/", locale)}>{fa ? "خانه" : "Home"}</Link>
        <span>/</span>
        <Link href={localizedHref("/services", locale)}>{fa ? "خدمات" : "Services"}</Link>
        <span>/</span>
        <span>{content.title}</span>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}><span>✦</span>{fa ? "خدمات رایکد" : "RYCODE SERVICE"}</p>
          <h1>{content.title}</h1>
          {(isWebsiteService || isSoftwareService || isRescueService || isConnectService || isDataService || isContinueService) && (
            <p className={styles.heroClaim}>
              {isContinueService
                ? fa
                  ? "بعد از تحویل، پروژه باید هر روز آرام‌تر و بهتر کار کند."
                  : "After launch, the project should feel calmer and work better every day."
                : isDataService
                ? fa
                  ? "داده وقتی ارزش دارد که بتوانی با آن تصمیم بگیری."
                  : "Data matters when it helps you make a decision."
                : isConnectService
                ? fa
                  ? "کارهای تکراری را به یک مسیر روان و قابل اعتماد تبدیل می‌کنیم."
                  : "Turn repeated work into a smooth, reliable workflow."
                : isRescueService
                ? fa
                  ? "پروژه‌ات خراب نیست؛ نیاز به تشخیص درست دارد."
                  : "Your project needs a diagnosis, not a guess."
                : isSoftwareService
                ? fa
                  ? "نرم‌افزاری که با روش کار شما شکل می‌گیرد."
                  : "Software shaped around the way you work."
                : fa
                  ? "سایتی که فقط دیده نمی‌شود؛ کار می‌کند."
                  : "A website that does more than look good."}
            </p>
          )}
          <p className={styles.summary}>{content.summary}</p>
          <div className={styles.heroActions}>
            <Link className={styles.primary} href={inquiryHref}>
              {fa ? "شروع پروژه" : "Start a project"}
              <span aria-hidden="true">{fa ? "↖" : "↗"}</span>
            </Link>
            {(isWebsiteService || isSoftwareService || isRescueService || isConnectService || isDataService || isContinueService) && (
              <a className={styles.secondaryAction} href={isContinueService ? "#continue-services" : isDataService ? "#data-dashboard" : isConnectService ? "#connect-flow" : isRescueService ? "#rescue-findings" : isSoftwareService ? "#software-map" : "#build-work"}>
                {isContinueService ? (fa ? "دیدن مسیر پشتیبانی" : "See the support path") : isDataService ? (fa ? "دیدن داشبورد" : "See the dashboard") : isConnectService ? (fa ? "دیدن مسیر خودکارسازی" : "See the workflow") : isRescueService ? (fa ? "دیدن یافته‌های اسکن" : "See the findings") : isSoftwareService ? (fa ? "دیدن معماری راه‌حل" : "See the system map") : fa ? "دیدن نمونه‌کارها" : "See selected work"}
                <span aria-hidden="true">↓</span>
              </a>
            )}
          </div>
          <div className={styles.heroMeta}>
            <span>{fa ? "طراحی با فکر، اجرای دقیق" : "Considered design, precise delivery"}</span>
            <span>{content.tags.join(" · ")}</span>
          </div>
        </div>
        {isWebsiteService ? (
          <div
            className={styles.buildHeroVisual}
            role="img"
            aria-label={fa ? "نمونه‌ای از طراحی رابط سایت" : "Website interface design preview"}
          >
            <div className={styles.buildHeroGlow} />
            <figure className={`${styles.heroScreen} ${styles.heroScreenBack}`}>
              <Image src={websiteProjects[1].image} alt="" fill sizes="260px" />
            </figure>
            <figure className={`${styles.heroScreen} ${styles.heroScreenMain}`}>
              <Image src={websiteProjects[0].image} alt="" fill sizes="(max-width: 850px) 80vw, 540px" priority />
              <figcaption><span>RYCODE / 01</span><span>{fa ? "نمونهٔ منتخب" : "SELECTED WORK"}</span></figcaption>
            </figure>
            <figure className={`${styles.heroScreen} ${styles.heroScreenFront}`}>
              <Image src={websiteProjects[2].image} alt="" fill sizes="220px" />
            </figure>
            <span className={styles.heroCursor} aria-hidden="true">↗</span>
            <span className={styles.heroFloatLabel}>{fa ? "ساختن برای حرکت" : "BUILT TO MOVE"}</span>
          </div>
        ) : isSoftwareService ? (
          <div className={styles.softwareHeroVisual} role="img" aria-label={fa ? "نمایی انتزاعی از یک نرم‌افزار اختصاصی" : "Abstract custom software system preview"}>
            <div className={styles.softwareGrid} />
            <div className={styles.softwareGlow} />
            <div className={styles.softwareOrb}><Image src="/brand/services/software.webp" alt="" fill sizes="(max-width: 850px) 75vw, 490px" priority /></div>
            <div className={`${styles.softwarePanel} ${styles.softwarePanelMain}`}>
              <span className={styles.softwarePanelTop}><b>RYCODE / SYSTEM 01</b><i>● LIVE</i></span>
              <strong>{fa ? "اتاق فرمان پروژه" : "PROJECT CONTROL"}</strong>
              <span className={styles.softwarePanelLine}><i style={{ width: "76%" }} /></span>
              <span className={styles.softwarePanelData}><b>FLOW</b><b>DATA</b><b>ACCESS</b></span>
            </div>
            <div className={`${styles.softwarePanel} ${styles.softwarePanelSide}`}>
              <span>INPUT</span><b>→</b><span>RULES</span><b>→</b><span>OUTPUT</span>
            </div>
            <span className={styles.softwareTag}>BUILT AROUND YOUR WORK</span>
          </div>
        ) : isRescueService ? (
          <div className={styles.rescueHeroVisual} role="img" aria-label={fa ? "نمایی از اسکن و تشخیص پروژه" : "Project scan and diagnosis preview"}>
            <div className={styles.rescueScanBeam} />
            <div className={styles.rescueImage}><Image src="/brand/services/rescue.webp" alt="" fill sizes="(max-width: 850px) 80vw, 560px" priority /></div>
            <div className={styles.rescueScore}><span>RISK SCORE</span><strong>42</strong><small>{fa ? "قابل اصلاح" : "ACTIONABLE"}</small></div>
            <div className={styles.rescueFinding}><i>!</i><span><b>BUILD / DEPENDENCY</b><small>{fa ? "وابستگی نیاز به بررسی دارد" : "Dependency needs review"}</small></span></div>
            <span className={styles.rescueLabel}>RYCODE / INCIDENT 01</span>
          </div>
        ) : isConnectService ? (
          <div className={styles.connectWorkflowVisual} role="img" aria-label={fa ? "نمایش یک مسیر خودکارسازی" : "Live automation workflow preview"}>
            <div className={styles.connectVisualTop}><span>RYCODE / AUTOMATION LAB</span><b><i /> LIVE RUN</b></div>
            <div className={styles.connectFlowCanvas}>
              <div className={`${styles.connectNode} ${styles.connectNodeTrigger}`}><span>01</span><b>TRIGGER</b><strong>{fa ? "سفارش جدید" : "New order"}</strong><small>{fa ? "فروشگاه آنلاین" : "Online store"}</small></div>
              <div className={styles.connectFlowConnector}><i /></div>
              <div className={`${styles.connectNode} ${styles.connectNodeLogic}`}><span>02</span><b>ROUTE</b><strong>{fa ? "بررسی و هدایت" : "Check & route"}</strong><small>{fa ? "قواعد کسب‌وکار" : "Business rules"}</small></div>
              <div className={styles.connectFlowConnector}><i /></div>
              <div className={`${styles.connectNode} ${styles.connectNodeAction}`}><span>03</span><b>ACTION</b><strong>{fa ? "اعلان تیم" : "Notify team"}</strong><small>{fa ? "تلگرام · پیامک" : "Telegram · SMS"}</small></div>
            </div>
            <div className={styles.connectArtwork}><Image src="/brand/services/connect.webp" alt="" fill sizes="260px" /></div>
            <div className={styles.connectRunLog}><span><i /> 14:28:06</span><b>{fa ? "فرایند با موفقیت اجرا شد" : "Workflow completed"}</b><em>+ 1.8s saved</em></div>
          </div>
        ) : isDataService ? (
          <div className={styles.dataDashboardVisual} role="img" aria-label={fa ? "داشبورد داده و گزارش مدیریتی" : "Data and reporting dashboard"}>
            <div className={styles.dataDashboardTop}><span>RYCODE / DATA DESK</span><b><i /> SYNCED</b></div>
            <div className={styles.dataDashboardBody}>
              <div className={styles.dataBalance}><small>{fa ? "وضعیت این ماه" : "THIS MONTH"}</small><strong>۸۴٪</strong><span><i /> ۱۲٪ بهتر از ماه قبل</span></div>
              <div className={styles.dataChart}><small>{fa ? "روند عملکرد" : "PERFORMANCE"}</small><div><i /><i /><i /><i /><i /><i /><i /></div><span>فروردین&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; اردیبهشت&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; خرداد</span></div>
              <div className={styles.dataMini}><span>{fa ? "گزارش‌های آماده" : "READY REPORTS"}</span><strong>24</strong><b>↗</b></div>
            </div>
            <div className={styles.dataDashboardFoot}><span>LAST UPDATE / 14:32</span><b>{fa ? "همه‌چیز مرتب است" : "Everything is in order"}</b></div>
            <div className={styles.dataArtwork}><Image src="/brand/services/data.webp" alt="" fill sizes="250px" /></div>
          </div>
        ) : isContinueService ? (
          <div className={styles.continueLineVisual} role="img" aria-label={fa ? "مسیر پشتیبانی و توسعهٔ مستمر" : "Ongoing support and development path"}>
            <div className={styles.continueVisualTop}><span>RYCODE / CARE PLAN</span><b>{fa ? "همراه پروژه" : "PROJECT PARTNER"}</b></div>
            <div className={styles.continuePhoto}><Image src="/brand/services/continue.webp" alt="" fill sizes="(max-width: 850px) 80vw, 540px" priority /></div>
            <svg className={styles.continueLine} viewBox="0 0 500 640" aria-hidden="true"><path d="M46 620 C 44 530, 146 522, 112 435 S 77 300, 213 294 S 420 232, 365 142 S 301 55, 452 25" /></svg>
            <div className={`${styles.continueNode} ${styles.continueNodeOne}`}><span>01</span><b>{fa ? "پایش" : "WATCH"}</b></div>
            <div className={`${styles.continueNode} ${styles.continueNodeTwo}`}><span>02</span><b>{fa ? "بهبود" : "IMPROVE"}</b></div>
            <div className={`${styles.continueNode} ${styles.continueNodeThree}`}><span>03</span><b>{fa ? "توسعه" : "GROW"}</b></div>
            <div className={styles.continueNote}><small>{fa ? "وضعیت پروژه" : "PROJECT HEALTH"}</small><strong>{fa ? "پایدار و رو به رشد" : "Stable & growing"}</strong><i>↗</i></div>
          </div>
        ) : (
          <figure className={styles.heroMedia}>
            {content.image && <img src={content.image} alt={content.imageAlt} />}
            <figcaption><span>RYCODE</span><span>{fa ? "استودیو دیجیتال" : "DIGITAL STUDIO"}</span></figcaption>
          </figure>
        )}
      </section>

      {isWebsiteService && (
        <>
          <section className={styles.buildProof} aria-label={fa ? "ویژگی‌های اصلی" : "Key benefits"}>
            <div><strong>{fa ? "از ایده تا انتشار" : "Idea to launch"}</strong><span>{fa ? "یک تیم، یک مسیر روشن" : "One team, one clear path"}</span></div>
            <div><strong>{fa ? "برای هر صفحه هدفی هست" : "Every page has a job"}</strong><span>{fa ? "تجربه، محتوا و فناوری کنار هم" : "Experience, content and technology aligned"}</span></div>
            <div><strong>{fa ? "روی هر صفحه‌نمایش" : "On every screen"}</strong><span>{fa ? "موبایل، تبلت و دسکتاپ" : "Mobile, tablet and desktop"}</span></div>
          </section>

          <section className={styles.buildWork} id="build-work" aria-labelledby="build-work-title">
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.kicker}><span>✦</span>{fa ? "نمونه‌کارهای منتخب" : "SELECTED WORK"}</p>
                <h2 id="build-work-title">{fa ? "چیزی که می‌سازیم، باید دیده شود." : "The work should speak for itself."}</h2>
              </div>
              <p>{fa ? "چند مسیر بصری متفاوت برای سایت، فروشگاه و محصول دیجیتال؛ هرکدام با مسئله و شخصیت خودش." : "A few visual directions for websites, stores and digital products, each shaped around its own problem."}</p>
            </div>
            <div className={styles.projectGrid}>
              {websiteProjects.map((project, index) => (
                <Link
                  key={project.slug}
                  className={`${styles.projectCard} ${index % 3 === 1 ? styles.projectCardTall : ""}`}
                  href={localizedHref("/work/" + project.slug, locale)}
                >
                  <div className={styles.projectImage}>
                    <Image src={project.image} alt={project.title[locale]} fill sizes="(max-width: 700px) 100vw, 55vw" />
                    <span className={styles.projectArrow} aria-hidden="true">{fa ? "↖" : "↗"}</span>
                  </div>
                  <div className={styles.projectInfo}>
                    <span className={styles.projectNumber}>{String(index + 1).padStart(2, "0")}</span>
                    <span><strong>{project.title[locale]}</strong><small>{project.type[locale]}</small></span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className={styles.capabilities} aria-labelledby="capabilities-title">
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.kicker}><span>✦</span>{fa ? "آنچه تحویل می‌گیری" : "WHAT YOU GET"}</p>
                <h2 id="capabilities-title">{fa ? "زیبایی فقط شروع کار است." : "Beauty is only the beginning."}</h2>
              </div>
              <p>{fa ? "هر تصمیم بصری باید به فهم بهتر، اعتماد بیشتر یا اقدام ساده‌تر کمک کند." : "Every visual decision should make the product clearer, more trustworthy or easier to use."}</p>
            </div>
            <div className={styles.capabilityGrid}>
              {websiteCapabilities.map((item) => (
                <article className={styles.capability} key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title[locale]}</h3>
                  <p>{item.body[locale]}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.process} aria-labelledby="process-title">
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.kicker}><span>✦</span>{fa ? "مسیر همکاری" : "THE PROCESS"}</p>
                <h2 id="process-title">{fa ? "قدم بعدی همیشه روشن است." : "You always know what comes next."}</h2>
              </div>
            </div>
            <ol className={styles.processList}>
              {websiteProcess.map((item) => (
                <li key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title[locale]}</h3>
                  <p>{item.body[locale]}</p>
                </li>
              ))}
            </ol>
          </section>
        </>
      )}

      {isSoftwareService && (
        <>
          <section className={styles.softwareStats} aria-label={fa ? "روش کار رایکد" : "RYCODE approach"}>
            <div><strong>01</strong><span>{fa ? "شناخت مسئله" : "Problem first"}</span></div>
            <div><strong>02</strong><span>{fa ? "طراحی تجربه" : "Experience design"}</span></div>
            <div><strong>03</strong><span>{fa ? "توسعهٔ مرحله‌ای" : "Incremental build"}</span></div>
            <div><strong>04</strong><span>{fa ? "تحویل روشن" : "Clear handover"}</span></div>
          </section>

          <section className={styles.softwareMap} id="software-map" aria-labelledby="software-map-title">
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.kicker}><span>✦</span>{fa ? "از مسئله تا سیستم" : "FROM PROBLEM TO SYSTEM"}</p>
                <h2 id="software-map-title">{fa ? "هر فرایند، یک مسیر قابل فهم دارد." : "Every workflow can become a clear system."}</h2>
              </div>
              <p>{fa ? "اول می‌بینیم اطلاعات از کجا می‌آید، چه کسی تصمیم می‌گیرد و خروجی باید کجا برسد؛ بعد نرم‌افزار را می‌سازیم." : "We map where information comes from, who decides and where the outcome should land before we build."}</p>
            </div>
            <ol className={styles.systemFlow}>
              {[
                { number: "01", title: { fa: "مسئله", en: "Problem" }, body: { fa: "چه چیزی کند، مبهم یا تکراری است؟", en: "What is slow, unclear or repetitive?" } },
                { number: "02", title: { fa: "داده", en: "Data" }, body: { fa: "اطلاعات از کجا می‌آید؟", en: "Where does the information come from?" } },
                { number: "03", title: { fa: "تصمیم", en: "Decision" }, body: { fa: "چه کسی و بر اساس چه قاعده‌ای؟", en: "Who decides, and by which rule?" } },
                { number: "04", title: { fa: "اقدام", en: "Action" }, body: { fa: "خروجی بعدی چیست؟", en: "What should happen next?" } },
              ].map((item) => (
                <li key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title[locale]}</h3>
                  <p>{item.body[locale]}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className={styles.softwareModules} aria-labelledby="software-modules-title">
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.kicker}><span>✦</span>{fa ? "چه چیزی می‌سازیم" : "WHAT WE BUILD"}</p>
                <h2 id="software-modules-title">{fa ? "ماژول‌ها جدا نیستند؛ با هم کار می‌کنند." : "Modules that work together."}</h2>
              </div>
              <p>{fa ? "از یک پنل ساده تا یک سامانهٔ سازمانی؛ محدوده را از مسئلهٔ واقعی شروع می‌کنیم." : "From a focused panel to an enterprise system, scope starts with the real problem."}</p>
            </div>
            <div className={styles.moduleGrid}>
              {softwareModules.map((item) => (
                <article className={styles.moduleCard} key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title[locale]}</h3>
                  <p>{item.body[locale]}</p>
                  <i aria-hidden="true">↗</i>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.softwarePlans} aria-labelledby="software-plans-title">
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.kicker}><span>✦</span>{fa ? "مسیر مناسب پروژه" : "A FIT FOR YOUR PROJECT"}</p>
                <h2 id="software-plans-title">{fa ? "از نسخهٔ کاربردی شروع کن؛ بعد بزرگش کن." : "Start useful, then grow with confidence."}</h2>
              </div>
              <p>{fa ? "هر پروژه لازم نیست از روز اول یک سامانهٔ بزرگ باشد. محدوده را بر اساس ارزش واقعی مرحلهٔ اول می‌چینیم." : "Every project does not need a massive system on day one. We shape the first scope around real value."}</p>
            </div>
            <div className={styles.planGrid}>
              <article className={styles.planCard}>
                <span className={styles.planLabel}>{fa ? "برای شروع سریع" : "FOR A FAST START"}</span>
                <h3>{fa ? "نسخهٔ اول کاربردی" : "Focused first version"}</h3>
                <p>{fa ? "برای وقتی که می‌خواهی مسئلهٔ اصلی را سریع و قابل اندازه‌گیری حل کنی." : "For when you need to solve the most important problem quickly and clearly."}</p>
                <ul>
                  <li>{fa ? "محدودهٔ کوچک و قابل تحویل" : "Focused, shippable scope"}</li>
                  <li>{fa ? "سناریوهای اصلی کاربران" : "Core user scenarios"}</li>
                  <li>{fa ? "پایهٔ آماده برای توسعهٔ بعدی" : "A foundation for what comes next"}</li>
                </ul>
                <Link href={inquiryHref}>{fa ? "بررسی نسخهٔ اول" : "Discuss the first version"}<span aria-hidden="true">↗</span></Link>
              </article>
              <article className={`${styles.planCard} ${styles.planCardFeatured}`}>
                <span className={styles.planLabel}>{fa ? "برای فرایندهای پیچیده" : "FOR COMPLEX WORKFLOWS"}</span>
                <h3>{fa ? "سامانهٔ یکپارچه" : "Connected system"}</h3>
                <p>{fa ? "برای تیم‌هایی که نقش‌ها، داده‌ها و اتصال‌های بیشتری را باید کنار هم مدیریت کنند." : "For teams managing more roles, data sources and integrations in one place."}</p>
                <ul>
                  <li>{fa ? "نقش‌ها و دسترسی‌های دقیق" : "Detailed roles and access"}</li>
                  <li>{fa ? "اتصال به سرویس‌ها و داده‌ها" : "Connected services and data"}</li>
                  <li>{fa ? "داشبورد و مسیرهای مدیریتی" : "Dashboards and management flows"}</li>
                </ul>
                <Link href={inquiryHref}>{fa ? "صحبت دربارهٔ سامانه" : "Talk about your system"}<span aria-hidden="true">↗</span></Link>
              </article>
            </div>
          </section>

          <section className={styles.softwareArchitecture} aria-labelledby="software-architecture-title">
            <div className={styles.architectureCopy}>
              <p className={styles.kicker}><span>✦</span>{fa ? "ساختار پشت تجربه" : "BEHIND THE INTERFACE"}</p>
              <h2 id="software-architecture-title">{fa ? "پیچیدگی را پشت یک تجربهٔ ساده پنهان می‌کنیم." : "Hide the complexity behind a simple experience."}</h2>
              <p>{fa ? "کاربر باید بداند چه کاری انجام دهد؛ نه اینکه مجبور باشد معماری سیستم را بفهمد. دسترسی، وضعیت و خطاها را از ابتدا در طراحی می‌بینیم." : "People should know what to do without needing to understand the architecture. Access, states and failure paths are designed from the start."}</p>
            </div>
            <div className={styles.architecturePanel} aria-label={fa ? "نقشهٔ فنی سیستم" : "System architecture map"}>
              <div className={styles.architectureToolbar}><span>RYCODE / ARCHITECTURE</span><b>● ● ●</b></div>
              <div className={styles.architectureRows}>
                <div><span>01</span><b>INPUT</b><em>فرم، فایل، API</em></div>
                <div><span>02</span><b>RULES</b><em>نقش‌ها، وضعیت‌ها، منطق</em></div>
                <div><span>03</span><b>INTERFACE</b><em>پنل، داشبورد، اعلان</em></div>
                <div><span>04</span><b>OUTCOME</b><em>تصمیم، گزارش، اقدام</em></div>
              </div>
              <div className={styles.architectureLine}><i /><i /><i /><i /></div>
            </div>
          </section>

          <section className={styles.softwareProcess} aria-labelledby="software-process-title">
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.kicker}><span>✦</span>{fa ? "مسیر توسعه" : "DELIVERY PATH"}</p>
                <h2 id="software-process-title">{fa ? "از نسخهٔ اول شروع می‌کنیم، نه از پیچیدگی." : "Start with the first useful version."}</h2>
              </div>
            </div>
            <ol className={styles.processList}>
              {softwareProcess.map((item) => (
                <li key={item.number}><span>{item.number}</span><h3>{item.title[locale]}</h3><p>{item.body[locale]}</p></li>
              ))}
            </ol>
          </section>
        </>
      )}

      {isRescueService && (
        <>
          <section className={styles.rescueScan} id="rescue-findings" aria-labelledby="rescue-findings-title">
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.kicker}><span>✦</span>{fa ? "یافته‌های اسکن" : "SCAN FINDINGS"}</p>
                <h2 id="rescue-findings-title">{fa ? "قبل از اصلاح، مسئله را قابل دیدن می‌کنیم." : "Make the problem visible before fixing it."}</h2>
              </div>
              <p>{fa ? "هر پروژهٔ نیمه‌کاره یا خراب، یک مسیر امن برای برگشتن دارد؛ اگر اول نشانه‌ها را درست بخوانیم." : "Every broken or unfinished project has a safe route back when its signals are read first."}</p>
            </div>
            <div className={styles.findingGrid}>
              {rescueFindings.map((item) => (
                <article className={styles.findingCard} key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title[locale]}</h3>
                  <p>{item.body[locale]}</p>
                  <i aria-hidden="true">↗</i>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.rescueIncident} aria-labelledby="rescue-incident-title">
            <div className={styles.incidentCopy}>
              <p className={styles.kicker}><span>✦</span>{fa ? "از خطا تا انتشار" : "FROM INCIDENT TO RELEASE"}</p>
              <h2 id="rescue-incident-title">{fa ? "نجات پروژه یعنی هر تغییر، یک دلیل داشته باشد." : "Rescuing a project means every change has a reason."}</h2>
              <p>{fa ? "مشکل را بازتولید می‌کنیم، ریسک را محدود می‌کنیم و بعد اصلاح را با آزمون همان سناریو جلو می‌بریم." : "We reproduce the issue, limit the risk, then repair it by testing the same scenario that failed."}</p>
              <Link className={styles.primary} href={inquiryHref}>{fa ? "درخواست بررسی پروژه" : "Request a project audit"}<span aria-hidden="true">{fa ? "↖" : "↗"}</span></Link>
            </div>
            <div className={styles.incidentTimeline}>
              <span className={styles.timelineStatus}>INCIDENT / 001 <b>● OPEN</b></span>
              <div className={styles.timelineTrack}>
                {rescueSteps.map((item) => (
                  <div key={item.number}>
                    <span>{item.number}</span>
                    <h3>{item.title[locale]}</h3>
                    <p>{item.body[locale]}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.rescueChecklist} aria-labelledby="rescue-checklist-title">
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.kicker}><span>✦</span>{fa ? "خروجی بررسی" : "AUDIT OUTPUT"}</p>
                <h2 id="rescue-checklist-title">{fa ? "در پایان می‌دانی چه چیزی سالم است و قدم بعدی چیست." : "You leave knowing what is healthy and what comes next."}</h2>
              </div>
            </div>
            <div className={styles.checklistGrid}>
              <div><strong>✓</strong><span>{fa ? "گزارش مسئله و راه بازتولید" : "Issue report and reproduction path"}</span></div>
              <div><strong>✓</strong><span>{fa ? "اولویت‌بندی ریسک‌ها و اصلاح‌ها" : "Prioritized risks and repairs"}</span></div>
              <div><strong>✓</strong><span>{fa ? "برنامهٔ انتشار و مسیر بازگشت" : "Release plan and rollback path"}</span></div>
            </div>
          </section>
        </>
      )}

      {isConnectService && (
        <>
          <section className={styles.connectProof} aria-label={fa ? "اتصال‌های قابل ساخت" : "Automation connections"}>
            <span>{fa ? "ابزارها را کنار هم می‌آوریم" : "TOOLS THAT WORK TOGETHER"}</span>
            <div>{connectIntegrations.map((item) => <div key={item.name}><b>{item.mark}</b><small>{item.name}</small></div>)}</div>
          </section>

          <section className={styles.connectFlow} id="connect-flow" aria-labelledby="connect-flow-title">
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.kicker}><span>✦</span>{fa ? "یک اجرای واقعی" : "A LIVE RUN"}</p>
                <h2 id="connect-flow-title">{fa ? "از یک ورودی ساده تا یک خروجی کامل." : "From one simple trigger to a complete outcome."}</h2>
              </div>
              <p>{fa ? "خودکارسازی خوب جادو نیست؛ مسیری است که ورودی، تصمیم و خروجی‌اش برای همه قابل فهم است." : "Good automation is not magic. It is a path where the trigger, decision and outcome are clear to everyone."}</p>
            </div>
            <div className={styles.connectFlowGrid}>{connectFlows.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title[locale]}</h3><p>{item.body[locale]}</p><i aria-hidden="true">↗</i></article>)}</div>
          </section>

          <section className={styles.connectBeforeAfter} aria-labelledby="connect-before-after-title">
            <div className={styles.beforeAfterCopy}>
              <p className={styles.kicker}><span>✦</span>{fa ? "قبل و بعد" : "BEFORE / AFTER"}</p>
              <h2 id="connect-before-after-title">{fa ? "زمان آدم‌ها برای تصمیم است، نه کپی‌کردن اطلاعات." : "People should spend time deciding, not copying information."}</h2>
              <p>{fa ? "کارهای تکراری را از مسیر تیم بیرون می‌کشیم تا سرعت بیشتر شود و خطای انسانی کمتر." : "We remove repetitive work from the team’s path so work gets faster and errors become rarer."}</p>
              <Link className={styles.primary} href={inquiryHref}>{fa ? "پیدا کردن اولین اتوماسیون" : "Find the first automation"}<span aria-hidden="true">{fa ? "↖" : "↗"}</span></Link>
            </div>
            <div className={styles.beforeAfterTable}>
              <div className={styles.beforeAfterHead}><span>{fa ? "دستی" : "MANUAL"}</span><span>{fa ? "خودکار" : "AUTOMATED"}</span></div>
              <div className={styles.beforeAfterRow}><p>{fa ? "ورود اطلاعات از چند کانال" : "Inputs from multiple channels"}</p><b>→</b><strong>{fa ? "یک ورودی واحد" : "One clear trigger"}</strong></div>
              <div className={styles.beforeAfterRow}><p>{fa ? "پیگیری با یادآوری شخصی" : "Follow-up by memory"}</p><b>→</b><strong>{fa ? "اعلان به‌موقع" : "Timely notification"}</strong></div>
              <div className={styles.beforeAfterRow}><p>{fa ? "گزارش‌سازی آخر هفته" : "End-of-week reporting"}</p><b>→</b><strong>{fa ? "گزارش زنده" : "Live report"}</strong></div>
            </div>
          </section>

          <section className={styles.connectServices} aria-labelledby="connect-services-title">
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.kicker}><span>✦</span>{fa ? "چه چیزی خودکار می‌شود" : "WHAT WE AUTOMATE"}</p>
                <h2 id="connect-services-title">{fa ? "هر اتصال، یک گره از کار را باز می‌کند." : "Every connection removes one knot from the work."}</h2>
              </div>
              <p>{fa ? "از یک ربات تلگرام تا زنجیرهٔ کامل فروش، انبار و اطلاع‌رسانی؛ مسیر را از یک گلوگاه واقعی شروع می‌کنیم." : "From a Telegram bot to a full sales, inventory and notification chain, we start with a real bottleneck."}</p>
            </div>
            <div className={styles.connectServiceGrid}>{connectServices.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title[locale]}</h3><p>{item.body[locale]}</p><i aria-hidden="true">↗</i></article>)}</div>
          </section>

          <section className={styles.connectProcess} aria-labelledby="connect-process-title">
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.kicker}><span>✦</span>{fa ? "مسیر اجرا" : "THE RUNBOOK"}</p>
                <h2 id="connect-process-title">{fa ? "اولین صرفه‌جویی را سریع پیدا می‌کنیم." : "We find the first saving quickly."}</h2>
              </div>
            </div>
            <ol className={styles.connectProcessList}>{connectProcess.map((item) => <li key={item.number}><span>{item.number}</span><h3>{item.title[locale]}</h3><p>{item.body[locale]}</p></li>)}</ol>
          </section>
        </>
      )}

      {isDataService && (
        <>
          <section className={styles.dataStats} aria-label={fa ? "نتیجهٔ کار با داده" : "Working with data"}>
            {dataStats.map((item) => <div key={item.value}><strong>{item.value}</strong><span>{item.label[locale]}</span></div>)}
          </section>

          <section className={styles.dataDashboard} id="data-dashboard" aria-labelledby="data-dashboard-title">
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.kicker}><span>✦</span>{fa ? "یک نگاه کافی است" : "ONE CLEAR VIEW"}</p>
                <h2 id="data-dashboard-title">{fa ? "از چند فایل پراکنده تا یک تصویر روشن." : "From scattered files to one clear picture."}</h2>
              </div>
              <p>{fa ? "داشبورد فقط نمودار نیست؛ راهی است برای اینکه تیم بداند الان چه خبر است و قدم بعدی چیست." : "A dashboard is more than a chart. It helps the team see what is happening and what comes next."}</p>
            </div>
            <div className={styles.dataBento}>
              <article className={styles.dataBentoWide}><span>01 / OVERVIEW</span><h3>{fa ? "وضعیت کسب‌وکار در یک نگاه" : "The business at a glance"}</h3><div className={styles.bentoBars}><i style={{height:"34%"}}/><i style={{height:"48%"}}/><i style={{height:"41%"}}/><i style={{height:"69%"}}/><i style={{height:"57%"}}/><i style={{height:"82%"}}/><i style={{height:"73%"}}/><i style={{height:"94%"}}/></div><small>{fa ? "روند رشد ماهانه" : "Monthly growth trend"}</small></article>
              <article className={styles.dataBentoMetric}><span>02 / KPI</span><strong>+۳۲٪</strong><p>{fa ? "بهبود سرعت گزارش‌گیری" : "Faster reporting"}</p><b>↗</b></article>
              <article className={styles.dataBentoDark}><span>03 / CLEANUP</span><strong>۱۲,۸۴۰</strong><p>{fa ? "ردیف دادهٔ مرتب‌شده" : "Rows organized"}</p><div className={styles.bentoLine}><i /></div></article>
              <article className={styles.dataBentoNote}><span>04 / NEXT</span><h3>{fa ? "تصمیم بعدی واضح است." : "The next decision is clear."}</h3><p>{fa ? "گزارش خوب، جلسه را کوتاه‌تر می‌کند." : "A good report makes the meeting shorter."}</p></article>
            </div>
          </section>

          <section className={styles.dataFeatures} aria-labelledby="data-features-title">
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.kicker}><span>✦</span>{fa ? "چه چیزی بهتر می‌شود" : "WHAT GETS BETTER"}</p>
                <h2 id="data-features-title">{fa ? "ابزار باید کار را ساده‌تر کند، نه پیچیده‌تر." : "The tool should simplify the work, not add to it."}</h2>
              </div>
            </div>
            <div className={styles.dataFeatureStack}>{dataFeatures.map((item, index) => <article key={item.number} className={index === 1 ? styles.dataFeatureAccent : ""}><span>{item.number}</span><div><h3>{item.title[locale]}</h3><p>{item.body[locale]}</p></div><b>↗</b></article>)}</div>
          </section>

          <section className={styles.dataTools} aria-labelledby="data-tools-title">
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.kicker}><span>✦</span>{fa ? "ابزارهای کاری" : "WORK TOOLS"}</p>
                <h2 id="data-tools-title">{fa ? "از اکسل تا داشبورد، متناسب با کار تو." : "From Excel to dashboards, shaped around your work."}</h2>
              </div>
              <p>{fa ? "هر پروژه از ابزار آماده شروع نمی‌شود؛ اول می‌بینیم تیم با چه چیزی راحت‌تر و دقیق‌تر کار می‌کند." : "Every project starts with the tool the team can use accurately and comfortably."}</p>
            </div>
            <div className={styles.dataToolGrid}>{dataTools.map((item) => <article key={item.name}><b>{item.name}</b><span>{item.label[locale]}</span></article>)}</div>
          </section>

          <section className={styles.dataProcess} aria-labelledby="data-process-title">
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.kicker}><span>✦</span>{fa ? "روش ساخت" : "THE METHOD"}</p>
                <h2 id="data-process-title">{fa ? "داده را به ابزار قابل استفاده تبدیل می‌کنیم." : "Turn data into a tool people can use."}</h2>
              </div>
            </div>
            <ol className={styles.dataProcessList}>{dataProcess.map((item) => <li key={item.number}><span>{item.number}</span><h3>{item.title[locale]}</h3><p>{item.body[locale]}</p></li>)}</ol>
          </section>
        </>
      )}

      {isContinueService && (
        <>
          <section className={styles.continueServices} id="continue-services" aria-labelledby="continue-services-title">
            <div className={styles.continueRail}><span className={styles.continueRailDot} /></div>
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.kicker}><span>✦</span>{fa ? "همراه بعد از تحویل" : "AFTER LAUNCH"}</p>
                <h2 id="continue-services-title">{fa ? "پروژه را رها نمی‌کنیم؛ کنارش می‌مانیم." : "We do not leave the project alone."}</h2>
              </div>
              <p>{fa ? "پشتیبانی فقط خاموش‌کردن آتش نیست؛ یعنی بدانیم چه چیزی باید بهتر شود و چرا." : "Support is more than putting out fires. It is knowing what should improve and why."}</p>
            </div>
            <div className={styles.continueServiceRows}>{continueServices.map((item) => <article key={item.number}><span>{item.number}</span><div><h3>{item.title[locale]}</h3><p>{item.body[locale]}</p></div><b>↗</b></article>)}</div>
          </section>

          <section className={styles.continueCadence} aria-labelledby="continue-cadence-title">
            <div className={styles.continueCadenceIntro}><p className={styles.kicker}><span>✦</span>{fa ? "مدل همراهی" : "WAYS TO WORK"}</p><h2 id="continue-cadence-title">{fa ? "به اندازهٔ نیاز پروژه، نزدیک." : "As close as the project needs."}</h2><p>{fa ? "یک مدل ثابت برای همه وجود ندارد؛ ریتم همکاری را با وضعیت واقعی کار تنظیم می‌کنیم." : "There is no single model for every project. We set the rhythm around the real work."}</p></div>
            <div className={styles.continueCadenceGrid}>{continueCadence.map((item) => <article key={item.label.en}><span>{item.label[locale]}</span><h3>{item.title[locale]}</h3><p>{item.body[locale]}</p><i>↗</i></article>)}</div>
          </section>

          <section className={styles.continueSteps} aria-labelledby="continue-steps-title">
            <div className={styles.sectionHeader}><div><p className={styles.kicker}><span>✦</span>{fa ? "خط همراهی" : "THE CARE LINE"}</p><h2 id="continue-steps-title">{fa ? "هر درخواست، یک قدم قابل مشاهده دارد." : "Every request has a visible next step."}</h2></div></div>
            <ol className={styles.continueStepList}>{continueSteps.map((item) => <li key={item.number}><span>{item.number}</span><div><h3>{item.title[locale]}</h3><p>{item.body[locale]}</p></div></li>)}</ol>
          </section>
        </>
      )}

      <section className={styles.statement}>
        <span className={styles.statementNumber}>01</span>
        <h2>{fa ? "یک سایت خوب، فقط زیبا نیست؛ باید کار کند." : "A good website is more than beautiful. It has a job to do."}</h2>
        <p>{fa ? "از شناخت مسئله و مخاطب شروع می‌کنیم و هر تصمیم را به هدف واقعی کسب‌وکار وصل می‌کنیم؛ تا نتیجه هم چشمگیر باشد و هم قابل اندازه‌گیری." : "We start with the problem and the people, then connect every decision to a real business goal."}</p>
      </section>

      {hierarchy.children.length > 0 && (
        <section className={styles.specialties}>
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}><span>✦</span>{fa ? "مسیرهای تخصصی" : "SPECIALIST PATHS"}</p>
            <h2>{fa ? "از کجا شروع کنیم؟" : "Where should we start?"}</h2>
          </div>
          <div className={styles.specialtyGrid}>
            {hierarchy.children.map((child, index) => (
              <Link key={child.id} className={styles.specialty} href={localizedHref(contentPath(child), locale)}>
                <span className={styles.cardIndex}>{String(index + 1).padStart(2, "0")}</span>
                <h3>{child.title}</h3>
                <p>{child.summary}</p>
                <span className={styles.cardArrow}>↗</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className={styles.contentSection}>
        <div className={styles.contentAside}>
          <p className={styles.kicker}><span>✦</span>{fa ? "چطور جلو می‌رویم" : "THE APPROACH"}</p>
          <h2>{fa ? "شفاف، مرحله‌به‌مرحله، بدون پیچیدگی اضافه" : "Clear, considered and built in stages."}</h2>
          <p>{fa ? "هر مرحله خروجی مشخص دارد؛ می‌دانید الان کجا هستیم و قدم بعدی چیست." : "Every stage has a clear outcome, so you always know where we are and what comes next."}</p>
        </div>
        <div className={styles.contentCards}>
          {contentSections.map((section, index) => (
            <article className={styles.contentCard} key={index}>
              <RichContent document={{ type: "doc", content: section }} />
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <p className={styles.kicker}><span>✦</span>{fa ? "قدم بعدی" : "NEXT STEP"}</p>
        <h2>{fa ? "بیایید پروژه‌ات را از جای درست شروع کنیم." : "Let’s start your project from the right place."}</h2>
        <Link className={styles.primary} href={inquiryHref}>{fa ? "شروع گفت‌وگو" : "Start a conversation"}<span aria-hidden="true">{fa ? "↖" : "↗"}</span></Link>
      </section>
    </main>
  );
}
