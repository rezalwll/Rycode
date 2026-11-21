const capabilityLinks = [
  {
    image: "/brand/channel-services/capabilities/build.webp",
    path: "/services/build",
  },
  {
    image: "/brand/channel-services/capabilities/rescue.webp",
    path: "/services/rescue",
  },
  {
    image: "/brand/channel-services/capabilities/connect.webp",
    path: "/services/connect",
  },
  {
    image: "/brand/channel-services/capabilities/grow.webp",
    path: "/services/grow",
  },
] as const;

type Entry = readonly [title: string, description: string];

type AboutCopy = {
  title: string;
  headline: readonly [string, string];
  intro: string;
  photoAlts: readonly [string, string];
  photoNote: string;
  contact: string;
  services: string;
  identity: { label: string; title: string; description: readonly string[] };
  principles: { label: string; title: string; items: readonly Entry[] };
  capabilities: {
    label: string;
    title: string;
    items: readonly [Entry, Entry, Entry, Entry];
  };
  process: { label: string; title: string; items: readonly Entry[] };
  fit: {
    label: string;
    title: string;
    description: string;
    items: readonly Entry[];
  };
  closing: {
    label: string;
    title: string;
    description: string;
    action: string;
  };
};

export const aboutCopy = {
  fa: {
    title: "درباره رایکد",
    headline: ["پشت یه محصول خوب،", "فقط کد نیست"],
    intro:
      "فکر، دقت و تصمیم‌های درست هم هست. ما توی رایکد اول مسئله رو می‌فهمیم، راه مناسب رو پیدا می‌کنیم و چیزی می‌سازیم که واقعاً به کار بیاد.",
    photoAlts: [
      "میز کار روشن با لپ‌تاپ و دفتر یادداشت کنار پنجره",
      "صفحهٔ کد روی لپ‌تاپ کنار دفتر یادداشت",
    ],
    photoNote: "اول مسئله، بعد راه‌حل",
    contact: "بیا دربارهٔ پروژه‌ات حرف بزنیم",
    services: "خدمات رایکد رو ببین",
    identity: {
      label: "رایکد چیه؟",
      title: "یه برند مستقل برای ساختن، درست کردن و بهتر کردن",
      description: [
        "رایکد یک برند مستقل در زمینهٔ طراحی سایت، توسعهٔ نرم‌افزار و راه‌حل‌های دیجیتاله. گاهی نقطهٔ شروع یک ایدهٔ تازه‌ست، گاهی یک سایت قدیمی یا پروژه‌ای که وسط راه به مشکل خورده.",
        "اول وضعیت پروژه و چیزی رو که باید تغییر کنه بررسی می‌کنیم. راه‌حل می‌تونه یک سایت وردپرسی، یک نرم‌افزار اختصاصی، ربات یا فایل اکسل باشه. گاهی هم همون چیزی که داری به اصلاح نیاز داره.",
      ],
    },
    principles: {
      label: "اصول کار",
      title: "چند چیز که توی رایکد برامون مهمه",
      items: [
        [
          "اول مسئله رو بفهمیم",
          "قبل از پیشنهاد فناوری یا قیمت، روشن می‌کنیم قرار چه مشکلی حل بشه.",
        ],
        [
          "پیچیدگی بی‌دلیل اضافه نکنیم",
          "اگه یک ابزار ساده‌تر جواب بده، همون رو بررسی می‌کنیم.",
        ],
        [
          "واضح حرف بزنیم",
          "می‌گیم چه چیزی ساخته می‌شه، چه محدودیت‌هایی داره و چه انتظاری می‌تونی داشته باشی.",
        ],
        [
          "چیزی بسازیم که بشه ازش استفاده کرد",
          "سرعت، تجربهٔ کاربری و نگهداری محصول به اندازهٔ ظاهرش مهمن.",
        ],
        [
          "برای فردای پروژه هم فکر کنیم",
          "تا جایی که شرایط اجازه بده، امروز تصمیم‌هایی می‌گیریم که فردا راه توسعه رو باز بذارن.",
        ],
        [
          "قولی بدیم که پشتش بررسی هست",
          "علت یک خطای پیچیده، امکان اتصال یا زمان اجرا رو بعد از بررسی روشن می‌کنیم.",
        ],
      ],
    },
    capabilities: {
      label: "کاری که انجام می‌دیم",
      title: "از ساختن تا بهتر کردن",
      items: [
        [
          "می‌سازیم",
          "از سایت شرکتی و فروشگاه تا نرم‌افزار اختصاصی، امکانات ضروری رو مشخص می‌کنیم و برای ساخت مسیر می‌چینیم.",
        ],
        [
          "درست می‌کنیم",
          "سایت، نرم‌افزار یا پروژهٔ نیمه‌کاره رو بررسی می‌کنیم تا معلوم بشه چه بخش‌هایی رو می‌شه حفظ یا اصلاح کرد.",
        ],
        [
          "متصل و ساده می‌کنیم",
          "با ربات، اتصال سیستم‌ها، پردازش داده و خودکارسازی، کارهای تکراری رو کمتر می‌کنیم.",
        ],
        [
          "بهترش می‌کنیم",
          "برای نگهداری، امکانات تازه، بهبود عملکرد یا بهتر دیده شدن همراهت می‌مونیم، در محدوده‌ای که با هم مشخص می‌کنیم.",
        ],
      ],
    },
    process: {
      label: "روش همکاری",
      title: "از یک گفت‌وگوی ساده شروع می‌کنیم",
      items: [
        [
          "تو از مسئله میگی",
          "میگی چه ایده‌ای داری، الان چطور کار می‌کنی یا کدوم بخش پروژه به مشکل خورده.",
        ],
        [
          "با هم نیاز رو روشن می‌کنیم",
          "سؤال‌های لازم رو می‌پرسیم، راه‌ها رو بررسی می‌کنیم و ضروری‌ها رو مشخص می‌کنیم.",
        ],
        [
          "محدودهٔ کار رو مشخص می‌کنیم",
          "روشن می‌کنیم چه چیزی ساخته یا اصلاح می‌شه و چه خروجی‌ای باید تحویل بگیری.",
        ],
        [
          "پروژه رو مرحله‌به‌مرحله جلو می‌بریم",
          "طراحی، توسعه، بررسی و تحویل رو بر اساس نوع همکاری پیش می‌بریم.",
        ],
        [
          "دربارهٔ ادامهٔ مسیر تصمیم می‌گیریم",
          "اگر پروژه به نگهداری یا امکانات تازه نیاز داشته باشه، محدودهٔ پشتیبانی و توسعه رو مشخص می‌کنیم.",
        ],
      ],
    },
    fit: {
      label: "مناسب چه پروژه‌هایی هستیم؟",
      title: "لازم نیست همه‌چیز رو از اول بدونی",
      description:
        "از یک اصلاح محدود تا طراحی یک محصول اختصاصی، اول نیاز، امکانات فنی و شرایط همکاری رو بررسی می‌کنیم.",
      items: [
        [
          "کسب‌وکار کوچک",
          "برای اولین سایت یا فروشگاه، با امکاناتی شروع می‌کنیم که واقعاً لازم داری.",
        ],
        [
          "شرکت یا تیم",
          "اگه به نرم‌افزار داخلی، پنل مدیریت یا راه ساده‌تری برای کارهای تکراری نیاز داری.",
        ],
        [
          "صاحب محصول یا توسعه‌دهنده",
          "اگه پروژه‌ات جایی گیر کرده و برای بررسی، اصلاح یا ادامه‌دادنش کمک فنی می‌خوای.",
        ],
      ],
    },
    closing: {
      label: "همکاری با رایکد",
      title: "پروژه‌ات رو برامون تعریف کن",
      description:
        "بگو چه چیزی می‌خوای بسازی یا کدوم کار رو می‌خوای ساده‌تر کنی. اگه سایت یا نرم‌افزاری داری که درست کار نمی‌کنه، لینک و شرح کوتاهی از مشکل رو بفرست.",
      action: "ثبت درخواست پروژه",
    },
  },
  en: {
    title: "About RYCODE",
    headline: ["There’s more to a good product", "than code"],
    intro:
      "It takes thought, care, and good decisions. At RYCODE, we start by understanding the problem, find the right approach, and build something people can use.",
    photoAlts: [
      "A sunlit workspace with a laptop and notebook by the window",
      "A laptop showing code beside a notebook",
    ],
    photoNote: "Start with the problem",
    contact: "Let’s talk about your project",
    services: "Explore RYCODE services",
    identity: {
      label: "Who we are",
      title:
        "An independent practice that builds, fixes, and improves digital products",
      description: [
        "RYCODE works across web design, software development, and digital solutions. Some projects start with a new idea. Others start with an ageing website or a product that got stuck halfway.",
        "We look at where you are and what makes sense next. It might be a WordPress site, custom software, a bot, a spreadsheet, or an improvement to something you already use.",
      ],
    },
    principles: {
      label: "Our principles",
      title: "What matters to us at RYCODE",
      items: [
        [
          "Understand the problem first",
          "Before suggesting technology or pricing, we get clear on what needs to be solved.",
        ],
        [
          "Keep it simple",
          "If a smaller tool can do the job, we consider it first.",
        ],
        [
          "Speak plainly",
          "We explain what we’ll build, where the limits are, and what you can expect.",
        ],
        [
          "Build things people can use",
          "Performance, usability, and maintenance matter as much as appearance.",
        ],
        [
          "Leave room to grow",
          "Where the project allows, we make decisions today that keep future improvements possible.",
        ],
        [
          "Check before making promises",
          "We investigate complex bugs, integrations, and timelines before making commitments.",
        ],
      ],
    },
    capabilities: {
      label: "What we do",
      title: "From building to improving",
      items: [
        [
          "We build",
          "From business sites and online stores to custom software, we define what matters and plan the build.",
        ],
        [
          "We fix",
          "We review sites, software, and unfinished projects to see what can be kept and what needs repair.",
        ],
        [
          "We connect and simplify",
          "We use bots, integrations, data processing, and automation to reduce repetitive work.",
        ],
        [
          "We improve",
          "We can help with maintenance, new features, performance, and visibility, within a scope we agree together.",
        ],
      ],
    },
    process: {
      label: "How we work",
      title: "We start with a simple conversation",
      items: [
        [
          "Tell us what you’re dealing with",
          "Share your idea, the way you currently work, or the part of your project that got stuck.",
        ],
        [
          "Clarify what you need together",
          "We ask questions, explore the options, and identify what matters most.",
        ],
        [
          "Agree on scope",
          "We define what we’ll build or fix and what you should expect to receive.",
        ],
        [
          "Move through the work in stages",
          "We plan design, development, review, and delivery to suit the project.",
        ],
        [
          "Plan support after delivery",
          "If the product needs maintenance or new features, we agree on the scope of ongoing support.",
        ],
      ],
    },
    fit: {
      label: "Who we work with",
      title: "You don’t need all the answers up front",
      description:
        "From a targeted fix to a custom product, we start by reviewing the need, technical options, and terms of working together.",
      items: [
        [
          "Small businesses",
          "Launch your first website or store with the features you actually need.",
        ],
        [
          "Companies and teams",
          "Build internal software, a management dashboard, or a simpler way to handle repetitive work.",
        ],
        [
          "Product owners and developers",
          "Get technical help reviewing, fixing, or picking up a project that got stuck.",
        ],
      ],
    },
    closing: {
      label: "Work with RYCODE",
      title: "Tell us about your project",
      description:
        "Tell us what you want to build or which task you want to simplify. If an existing website or application has a problem, share a link and a short description.",
      action: "Submit a project inquiry",
    },
  },
} satisfies Record<"fa" | "en", AboutCopy>;

export { capabilityLinks };
