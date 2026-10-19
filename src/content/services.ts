import type { Locale } from "@/lib/i18n";

type LocalizedText = Record<Locale, string>;
export type Service = {
  id: string;
  title: LocalizedText;
  summary: LocalizedText;
  scope: LocalizedText;
  tags: LocalizedText[];
  image: string;
};

// The seven service groups supplied in the RYCODE business platform.
export const services: Service[] = [
  {
    id: "build",
    title: {
      fa: "طراحی سایت و فروشگاه اینترنتی",
      en: "Website & ecommerce design",
    },
    summary: {
      fa: "از یه سایت ساده و شیک تا یه فروشگاه اینترنتی کامل.",
      en: "From a simple, polished website to a complete online store.",
    },
    scope: {
      fa: "طراحی سایت شرکتی، شخصی، فروشگاهی، پزشکی، آموزشی، املاک، صنعتی، وردپرس، ووکامرس، سایت اختصاصی، چندزبانه، B2B، لندینگ‌پیج و بازطراحی سایت‌های قدیمی.",
      en: "Business, personal, ecommerce, medical, educational, real-estate and industrial websites; WordPress, WooCommerce, custom and multilingual sites, B2B, landing pages and redesigns.",
    },
    tags: [
      {
        en: "WEB",
        fa: "وب",
      },
      {
        en: "ECOMMERCE",
        fa: "فروشگاه",
      },
    ],
    image: "/assets/3345d22a74a07841.png",
  },
  {
    id: "grow",
    title: {
      fa: "سئو و رشد سایت",
      en: "SEO & website growth",
    },
    summary: {
      fa: "کمکت می‌کنیم آدم‌هایی که دنبال خدمات یا محصولاتت هستن، راحت‌تر پیدات کنن.",
      en: "Help people looking for your products or services find you more easily.",
    },
    scope: {
      fa: "سئو تکنیکال، سئو فروشگاهی، سئو محلی، تحقیق کلمات کلیدی، تولید و بهینه‌سازی محتوا، بهبود رتبه صفحات، لینک‌سازی داخلی، افزایش سرعت، رفع مشکلات ایندکس و بررسی رقبا.",
      en: "Technical, ecommerce and local SEO, keyword research, content creation and optimization, page-ranking improvements, internal linking, performance, indexing fixes and competitor research.",
    },
    tags: [
      {
        en: "SEO",
        fa: "سئو",
      },
      {
        en: "GROWTH",
        fa: "رشد",
      },
    ],
    image: "/assets/c9e087c0e10f7761.png",
  },
  {
    id: "software",
    title: {
      fa: "طراحی و توسعه نرم‌افزار اختصاصی",
      en: "Custom software design & development",
    },
    summary: {
      fa: "وقتی نرم‌افزارهای آماده جواب کارت رو نمی‌دن، چیزی می‌سازیم که دقیقاً به دردت بخوره.",
      en: "When off-the-shelf software does not fit, we build something around the way you work.",
    },
    scope: {
      fa: "نرم‌افزار تحت وب، ویندوز و اندروید، CRM، پنل مدیریت، داشبورد مدیریتی، سیستم فروش و سفارش‌گیری، سامانه رزرو و نوبت‌دهی، گارانتی، پنل مشتریان و نمایندگان، سامانه آموزشی و نرم‌افزارهای سازمانی.",
      en: "Web, Windows and Android software, CRM, admin panels, management dashboards, sales and ordering, booking and scheduling, warranty systems, customer and dealer portals, learning platforms and enterprise software.",
    },
    tags: [
      {
        en: "CUSTOM SOFTWARE",
        fa: "نرم‌افزار اختصاصی",
      },
    ],
    image: "/assets/ac62f0a5a6f4433f.png",
  },
  {
    id: "rescue",
    title: {
      fa: "رفع باگ و توسعه پروژه‌های موجود",
      en: "Bug fixes & existing project development",
    },
    summary: {
      fa: "پروژه‌ات نیمه‌کاره مونده یا درست کار نمی‌کنه؟ از همون‌جایی که هست ادامه می‌دیم.",
      en: "An unfinished project or something that is not working? We start from where it stands.",
    },
    scope: {
      fa: "رفع باگ، تکمیل پروژه‌های نیمه‌کاره، اصلاح کدهای قدیمی، اضافه‌کردن امکانات جدید، بهینه‌سازی سرعت و دیتابیس، رفع مشکلات وردپرس و ووکامرس، مهاجرت و بازسازی پروژه‌ها.",
      en: "Bug fixes, unfinished project completion, legacy-code improvements, new features, performance and database optimization, WordPress and WooCommerce fixes, migrations and rebuilding.",
    },
    tags: [
      {
        en: "BUG FIX",
        fa: "رفع باگ",
      },
      {
        en: "PROJECT RESCUE",
        fa: "نجات پروژه",
      },
    ],
    image: "/assets/683feaedbf07a4c8.png",
  },
  {
    id: "connect",
    title: {
      fa: "ربات‌ها و خودکارسازی کارها",
      en: "Bots & workflow automation",
    },
    summary: {
      fa: "کارهای تکراری رو بسپار به ابزارهایی که خودشون انجامشون می‌دن.",
      en: "Let tools handle repetitive tasks for you.",
    },
    scope: {
      fa: "ساخت ربات تلگرام، ربات سفارش‌گیری و اطلاع‌رسانی، طراحی و اتصال API، اتصال فروشگاه به انبار و حسابداری، اتصال درگاه پرداخت و پیامک، جابه‌جایی خودکار اطلاعات و اتوماسیون کارهای روزمره.",
      en: "Telegram bots, ordering and notification bots, API design and integration, store connections to inventory and accounting, payments and SMS, automatic data transfer and everyday workflow automation.",
    },
    tags: [
      {
        en: "BOTS",
        fa: "ربات",
      },
      {
        en: "AUTOMATION",
        fa: "خودکارسازی",
      },
      {
        en: "API",
        fa: "API",
      },
    ],
    image: "/assets/9b3d48012a1cca23.png",
  },
  {
    id: "data",
    title: {
      fa: "اکسل، داده و ابزارهای کاری",
      en: "Excel, data & business tools",
    },
    summary: {
      fa: "اگه کارهات بین چندتا فایل و گزارش پخش شده، کمک می‌کنیم مرتب‌تر و سریع‌تر پیش برن.",
      en: "If work is scattered across files and reports, we help make it more organized and efficient.",
    },
    scope: {
      fa: "طراحی فایل اکسل اختصاصی، فرمول‌نویسی، ابزارهای محاسباتی، داشبورد گزارش‌گیری، گزارش‌های مدیریتی، پاک‌سازی و تبدیل داده، ورود و خروجی اطلاعات و ساخت ابزارهای کاربردی برای کسب‌وکار.",
      en: "Custom Excel files, formulas, calculators, reporting dashboards, management reports, data cleaning and conversion, imports and exports, and practical business tools.",
    },
    tags: [
      {
        en: "EXCEL",
        fa: "اکسل",
      },
      {
        en: "DATA",
        fa: "داده",
      },
      {
        en: "BUSINESS TOOLS",
        fa: "ابزارهای کاری",
      },
    ],
    image: "/assets/9b3d48012a1cca23.png",
  },
  {
    id: "continue",
    title: {
      fa: "پشتیبانی و توسعه مستمر",
      en: "Support & ongoing development",
    },
    summary: {
      fa: "بعد از تحویل پروژه هم کنارت هستیم؛ برای رفع مشکل، بهترکردن و اضافه‌کردن امکانات جدید.",
      en: "We stay alongside you after handover, fixing issues, improving the product and adding new features.",
    },
    scope: {
      fa: "پشتیبانی سایت، فروشگاه اینترنتی، وردپرس، ووکامرس و نرم‌افزارهای اختصاصی، نگهداری فنی، بروزرسانی، رفع مشکلات دوره‌ای، بهینه‌سازی عملکرد و توسعه امکانات جدید.",
      en: "Support for websites, online stores, WordPress, WooCommerce and custom software; technical maintenance, updates, recurring fixes, performance improvements and new features.",
    },
    tags: [
      {
        en: "SUPPORT",
        fa: "پشتیبانی",
      },
      {
        en: "MAINTENANCE",
        fa: "نگهداری",
      },
    ],
    image: "/assets/ac62f0a5a6f4433f.png",
  },
];
