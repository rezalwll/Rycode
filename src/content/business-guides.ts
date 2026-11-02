import type { RichNode } from "@/lib/content-rules";
import type { Locale } from "@/lib/i18n";

const text = (value: string): RichNode => ({ type: "text", text: value });
const p = (value: string): RichNode => ({
  type: "paragraph",
  content: [text(value)],
});
const h = (value: string): RichNode => ({
  type: "heading",
  attrs: { level: 2 },
  content: [text(value)],
});
const list = (...items: string[]): RichNode => ({
  type: "bulletList",
  content: items.map((item) => ({ type: "listItem", content: [p(item)] })),
});
const table = (rows: string[][]): RichNode => ({
  type: "table",
  content: rows.map((row, i) => ({
    type: "tableRow",
    content: row.map((cell) => ({
      type: i ? "tableCell" : "tableHeader",
      content: [p(cell)],
    })),
  })),
});
const source = (label: string, href: string): RichNode => ({
  type: "paragraph",
  content: [
    { type: "text", text: label, marks: [{ type: "link", attrs: { href } }] },
  ],
});
type Translation = { title: string; summary: string; content: RichNode[] };
export type BusinessGuide = {
  slug: string;
  serviceId: string;
  cover: string;
  translations: Record<Locale, Translation>;
};

export const businessGuides: BusinessGuide[] = [
  {
    slug: "wordpress-or-custom-website",
    serviceId: "build",
    cover: "compare",
    translations: {
      fa: {
        title: "وردپرس یا سایت اختصاصی؛ کدام برای کسب‌وکار تو مناسب‌تر است؟",
        summary:
          "مقایسهٔ هزینه، انعطاف و نگهداری؛ با چند سؤال ساده بفهم کدام مسیر برای نیاز واقعی تو مناسب‌تر است",
        content: [
          p(
            "اگر برای یک سایت مشابه، پیشنهاد وردپرسی و اختصاصی گرفته‌ای، اختلاف قیمت به‌تنهایی جواب سؤال تو نیست. انتخاب درست به کاری که سایت باید انجام دهد، شیوهٔ ادارهٔ آن و محدودیت‌های پروژه بستگی دارد. هیچ‌کدام از این دو گزینه برای همهٔ کسب‌وکارها بهترین نیست.",
          ),
          h("اول خروجی را مشخص کن، بعد فناوری را"),
          p(
            "فرض کن یک شرکت خدماتی می‌خواهد خدماتش را معرفی کند، مقاله منتشر کند و درخواست مشاوره بگیرد. این نیاز با یک فروشگاه دارای قیمت‌گذاری قراردادی، اتصال به انبار و سطح دسترسی نمایندگان فرق دارد. قبل از انتخاب، سه مسیر اصلی کاربر و کار روزانهٔ مدیر سایت را روی کاغذ بنویس. از مجری بخواه نشان دهد همین مسیرها چگونه اجرا و ویرایش می‌شوند.",
          ),
          h("تفاوتی که در عمل حس می‌کنی"),
          table([
            ["معیار", "وردپرس", "توسعهٔ اختصاصی"],
            [
              "شروع کار",
              "مدیریت محتوا و امکانات رایج آماده‌اند",
              "قابلیت‌ها و پنل باید در محدودهٔ پروژه تعریف شوند",
            ],
            [
              "قابلیت ویژه",
              "ممکن است افزونه یا توسعهٔ اختصاصی لازم شود",
              "می‌تواند حول فرایند ویژهٔ کسب‌وکار ساخته شود",
            ],
            [
              "نگهداری",
              "به‌روزرسانی هسته، قالب و افزونه‌ها لازم است",
              "به‌روزرسانی وابستگی‌ها و نگهداری کد و زیرساخت لازم است",
            ],
            [
              "مالکیت و تحویل",
              "دسترسی هاست، دامنه و مجوز افزونه‌ها را روشن کن",
              "مخزن کد، راه‌اندازی و دسترسی‌ها را در تحویل مشخص کن",
            ],
          ]),
          p(
            "وردپرس خودش هم نرم‌افزاری مبتنی بر کد است؛ این مقایسه بین استفاده از یک سیستم مدیریت محتوای آماده و ساخت یک راه‌حل متناسب با پروژه است. افزونه‌ها و قالب‌ها امکانات وردپرس را گسترش می‌دهند، اما نصب هر افزونه باید دلیل مشخص و برنامهٔ نگهداری داشته باشد.",
          ),
          h("چطور دو پیشنهاد را منصفانه مقایسه کنی؟"),
          list(
            "فهرست امکانات، طراحی، ورود محتوا و آموزش در هر دو پیشنهاد یکسان باشد",
            "هزینهٔ تمدید هاست، افزونه و پشتیبانی سال بعد مشخص باشد",
            "یک قابلیت مهم مثل ثبت سفارش یا رزرو را در نسخهٔ نمایشی ببین",
            "معیار تحویل شامل موبایل، مسیر تماس، دسترسی مدیر و نسخهٔ پشتیبان باشد",
          ),
          h("پیش از تصمیم نهایی"),
          p(
            "اگر نیازهایت استاندارد و زمان شروع محدود است، وردپرس می‌تواند گزینه‌ای قابل‌بررسی باشد. اگر فرایند خاص، اتصال‌های متعدد یا منطق تجاری متفاوت داری، ارزیابی توسعهٔ اختصاصی ارزش دارد. امنیت، سرعت و سئو نتیجهٔ کیفیت اجرا و نگهداری‌اند؛ نام فناوری به‌تنهایی تضمینشان نمی‌کند. برای بررسی اولیه، نوع کسب‌وکار، امکانات ضروری و برنامهٔ رشدت را آماده کن.",
          ),
          source(
            "امکانات و قابلیت توسعهٔ وردپرس در مستندات رسمی",
            "https://wordpress.org/about/features/",
          ),
        ],
      },
      en: {
        title: "WordPress or a custom website: which fits your business?",
        summary:
          "Compare ownership, flexibility and ongoing work before choosing a platform for your next website.",
        content: [
          p(
            "A lower quote is useful only when you know what it includes. WordPress and custom development can both serve a business well; the better fit depends on your workflows, constraints and the people who will maintain the site.",
          ),
          h("Start with the job the site needs to do"),
          p(
            "A service company publishing articles and collecting inquiries has different needs from a distributor with negotiated prices and inventory integrations. Write down your three most important customer journeys and the daily work of the site administrator. Ask each supplier to demonstrate these journeys.",
          ),
          h("What changes between the two approaches?"),
          table([
            ["Decision", "WordPress", "Custom development"],
            [
              "Starting point",
              "Content management and common features are available",
              "Features and the management interface need a defined scope",
            ],
            [
              "Special workflows",
              "May require plugins or custom extensions",
              "Can be designed around your business rules",
            ],
            [
              "Ongoing work",
              "Maintain core, themes and plugins",
              "Maintain code, dependencies and infrastructure",
            ],
          ]),
          h("Compare the whole commitment"),
          list(
            "Use the same feature list when comparing proposals",
            "Include hosting, licenses and support renewals",
            "Clarify ownership of the domain, accounts and source code",
            "Test mobile use, inquiries and recovery from a backup",
          ),
          p(
            "WordPress is also built with code. This is a choice between an established content platform and a project-specific implementation, not between a coded and an uncoded product. Neither label guarantees speed, security or search visibility. Prepare your essential workflows before asking for a recommendation.",
          ),
          source(
            "Official WordPress features",
            "https://wordpress.org/about/features/",
          ),
        ],
      },
    },
  },
  {
    slug: "website-cost-and-project-scope",
    serviceId: "build",
    cover: "budget",
    translations: {
      fa: {
        title: "هزینهٔ طراحی سایت به چه چیزهایی بستگی دارد؟",
        summary:
          "چطور پیشنهاد قیمت بگیری، هزینه‌های پنهان را ببینی و بودجه‌ات را صرف امکاناتی کنی که واقعاً نیاز داری",
        content: [
          p(
            "دو پیشنهاد برای «طراحی سایت شرکتی» می‌توانند قیمت‌های متفاوتی داشته باشند، چون این عبارت محدودهٔ دقیق کار را مشخص نمی‌کند. تعداد صفحات فقط یک بخش ماجراست. طراحی اختصاصی، ورود محتوا، اتصال به سامانه‌های دیگر و مسئولیت نگهداری هم روی برآورد اثر می‌گذارند. قبل از مقایسهٔ عددها، خروجی‌ها را هم‌تراز کن.",
          ),
          h("از مجری چه چیزهایی را جدا بخواهی؟"),
          table([
            ["بخش هزینه", "سؤالی که باید روشن شود"],
            ["طراحی و پیاده‌سازی", "چند نوع صفحه و چند دور بازبینی داریم؟"],
            [
              "محتوا و محصولات",
              "چه کسی متن، عکس و اطلاعات اولیه را آماده و وارد می‌کند؟",
            ],
            ["اتصال‌ها", "درگاه، پیامک، انبار یا حسابداری دقیقاً کدام‌اند؟"],
            ["راه‌اندازی", "دامنه، هاست و مجوزها به نام چه کسی خواهند بود؟"],
            ["نگهداری", "چه مواردی شامل پشتیبانی است و تمدید چه شرایطی دارد؟"],
          ]),
          h("نسخهٔ اول را کوچک اما قابل‌استفاده تعریف کن"),
          p(
            "برای مثال، اگر هدف شرکتت دریافت درخواست همکاری است، معرفی روشن خدمات، نمونه‌های قابل‌ارائه، فرم سالم و مسیر تماس روی موبایل از یک قابلیت جانبی پیچیده مهم‌ترند. امکاناتی را که استفاده‌شان هنوز مشخص نیست برای مرحلهٔ بعد نگه دار. حذف قابلیت ضروری مثل گزارش سفارش برای ارزان‌ترشدن، هزینه را به عملیات روزانه منتقل می‌کند.",
          ),
          h("قبل از قبول قیمت، این موارد را مکتوب کن"),
          list(
            "فهرست صفحات و قابلیت‌های داخل محدوده، همراه موارد خارج از محدوده",
            "زمان تحویل به‌شرط آماده‌بودن محتوا و دسترسی‌ها",
            "مراحل پرداخت و معیار پذیرش هر مرحله",
            "تفاوت رفع نقص با درخواست تغییر یا قابلیت تازه",
            "آموزش، دسترسی‌های مالک، فایل‌ها و مستندات تحویلی",
          ),
          h("برای برآورد دقیق چه بفرستی؟"),
          p(
            "نوع کسب‌وکار، هدف اصلی سایت، چند نمونهٔ موردپسند با توضیح دلیل انتخاب، امکانات ضروری و محدودیت زمانی را آماده کن. اگر سایتی داری، نشانی و مشکل‌های فعلی را هم بفرست؛ در مرحلهٔ اول نیازی به ارسال رمزها نیست. یک بودجهٔ حدودی کمک می‌کند محدوده‌ای قابل‌اجرا تعریف شود، اما جای شرح نیاز را نمی‌گیرد. قیمت نهایی باید بعد از بررسی همین محدوده تعیین شود، نه بر اساس یک وعدهٔ عمومی.",
          ),
        ],
      },
      en: {
        title: "What actually determines the cost of a website?",
        summary:
          "Make proposals comparable, identify recurring costs and define a useful first release.",
        content: [
          p(
            "A quote for a business website is meaningful only when the deliverables are clear. Page count matters, but so do unique layouts, content entry, integrations and responsibility after launch.",
          ),
          h("Separate one-time and recurring work"),
          table([
            ["Item", "What to clarify"],
            ["Design", "Page types and revision rounds"],
            ["Content", "Who writes, supplies and enters it"],
            ["Integrations", "Which payment, inventory or messaging systems"],
            ["Ownership", "Who controls domains, hosting and licenses"],
            ["Support", "Included tasks, exclusions and renewal terms"],
          ]),
          h("Define a useful first release"),
          p(
            "For an inquiry-driven business, a clear offer, credible work, a working form and a usable mobile contact path may matter more than a complex secondary feature. Defer uncertain extras without removing the operational features the business needs every day.",
          ),
          h("Ask for a written scope"),
          list(
            "Deliverables and exclusions",
            "Milestones and acceptance criteria",
            "Content and access dependencies",
            "Bug fixes versus new change requests",
            "Training, account ownership and handover documentation",
          ),
          h("Prepare a better brief"),
          p(
            "Send your business type, website goal, examples with reasons, essential features and deadline. Include your current site and its problems if there is one. Do not send passwords in the initial inquiry. A budget range helps shape a viable scope; it cannot replace that scope. Agree a project-specific estimate after the requirements have been reviewed.",
          ),
        ],
      },
    },
  },
  {
    slug: "repair-or-redesign-your-website",
    serviceId: "rescue",
    cover: "repair",
    translations: {
      fa: {
        title: "سایت فعلی را اصلاح کنیم یا از نو بسازیم؟",
        summary:
          "قبل از هزینهٔ بازطراحی، مشکل اصلی، ریسک انتقال و بخش‌هایی را که ارزش نگه‌داشتن دارند بررسی کن",
        content: [
          p(
            "قدیمی به‌نظررسیدن سایت لزوماً به معنی نیاز به ساخت دوباره نیست. ممکن است مشکل اصلی، فرم خراب، کندی صفحات مهم یا سختی ویرایش اطلاعات باشد. از طرف دیگر، اضافه‌کردن اصلاحات پراکنده به سیستمی که قابل‌نگهداری نیست هم می‌تواند هزینهٔ بیشتری بسازد. تصمیم را با فهرست مشکل‌ها شروع کن.",
          ),
          h("نشانهٔ ظاهری را از مسئلهٔ واقعی جدا کن"),
          p(
            "اگر کاربران خرید را رها می‌کنند، ابتدا مشخص کن در کدام مرحله متوقف می‌شوند. اگر سایت کند است، چند صفحه و دستگاه واقعی را بررسی کن. اگر تیم نمی‌تواند محتوا را به‌روز کند، محدودیت پنل و گردش کار را ثبت کن. بدون این تشخیص، ممکن است ظاهر تازه‌ای بسازی و همان مشکل قبلی باقی بماند.",
          ),
          h("چه زمانی اصلاح مرحله‌ای منطقی‌تر است؟"),
          list(
            "کد و دسترسی‌ها موجودند و محیط آزمایشی قابل‌راه‌اندازی است",
            "مشکل به بخش مشخصی مثل فرم، صفحهٔ محصول یا جست‌وجو محدود است",
            "ساختار اصلی نیازهای نزدیک کسب‌وکار را پاسخ می‌دهد",
            "می‌توان تغییر را تست کرد و در صورت مشکل به نسخهٔ قبل برگشت",
          ),
          h("چه زمانی بازطراحی را جدی بررسی کنیم؟"),
          p(
            "وقتی ساختار فعلی مانع فرایندهای ضروری شده، نگهداری وابستگی‌های اصلی ممکن نیست یا برای هر تغییر کوچک چند بخش دیگر خراب می‌شود، ارزیابی بازسازی ارزش دارد. این تصمیم به معنی دورریختن همه‌چیز نیست؛ محتوا، تصاویر دارای مجوز، نشانی‌های مهم و داده‌های عملیاتی ممکن است قابل‌انتقال باشند.",
          ),
          table([
            ["پیش از شروع", "چیزی که باید تحویل بگیری"],
            ["اصلاح", "فهرست اولویت‌ها، برآورد هر مرحله و معیار تست"],
            ["بازسازی", "برنامهٔ انتقال داده، نشانی‌ها و زمان جابه‌جایی"],
            ["هر دو مسیر", "نسخهٔ پشتیبان قابل‌بازیابی و روش بازگشت"],
          ]),
          h("انتقال را بخشی از پروژه حساب کن"),
          p(
            "در بازسازی، فهرست نشانی‌های فعلی، صفحات ورودی مهم و شیوهٔ انتقال سفارش‌ها را مشخص کن. تغییر نشانی باید با نگاشت مناسب بررسی شود و ارسال فرم یا پرداخت هم بعد از انتقال تست شود. برای بررسی اولیه، نشانی سایت و چند نمونهٔ دقیق از خرابی‌ها را بفرست. یک بررسی محدود و روشن می‌تواند پیش از تعهد به ساخت دوباره، مسیر تصمیم را مشخص کند.",
          ),
        ],
      },
      en: {
        title: "Should you repair your website or rebuild it?",
        summary:
          "Diagnose the problem before committing to a redesign, and plan for the parts worth keeping.",
        content: [
          p(
            "An outdated appearance does not automatically justify rebuilding a site. A broken form, slow key page or difficult publishing workflow may be a more specific problem. Equally, repeated patches on an unmaintainable system can become expensive.",
          ),
          h("Identify the actual failure"),
          p(
            "Record the page, device and action where a problem occurs. A fresh design may leave the underlying issue untouched if the cause is never established.",
          ),
          h("When a repair is worth considering"),
          list(
            "Source code and access are available",
            "The issue is isolated and testable",
            "The main structure still supports your business",
            "Changes can be tested and rolled back",
          ),
          h("When to assess a rebuild"),
          p(
            "Consider a rebuild when essential workflows cannot fit the current structure, key dependencies cannot be maintained or small changes repeatedly break other areas. Content, important URLs and operational records may still be worth migrating.",
          ),
          h("Include the transition in the scope"),
          p(
            "Ask for a backup and recovery plan, a URL inventory, a data-migration plan and acceptance tests for inquiries and payments. A redesign quote without a transition plan is incomplete. Start an assessment with the current address and specific examples of failures rather than a blanket request to replace everything.",
          ),
        ],
      },
    },
  },
  {
    slug: "seo-or-ads-for-your-business",
    serviceId: "grow",
    cover: "growth",
    translations: {
      fa: {
        title: "برای جذب مشتری، سئو را شروع کنیم یا تبلیغات؟",
        summary:
          "هدف، زمان و مسیر تبدیل را کنار هم ببین؛ ترافیک بیشتر همیشه به معنی درخواست باکیفیت‌تر نیست",
        content: [
          p(
            "اگر به جذب مشتری فکر می‌کنی، انتخاب بین سئو و تبلیغات را فقط با تعداد بازدید نسنج. سؤال اصلی این است که چه کسی، برای چه نیازی و بعد از ورود به کدام صفحه قرار است با تو تماس بگیرد یا خرید کند. سئو و تبلیغات می‌توانند نقش‌های متفاوت و مکمل داشته باشند؛ نتیجهٔ هیچ‌کدام بدون بررسی بازار و سایت قابل‌تضمین نیست.",
          ),
          h("اول صفحهٔ مقصد را آماده کن"),
          p(
            "صفحه‌ای که خدمات را مبهم توضیح می‌دهد، روی موبایل فرم سالمی ندارد یا مسیر تماسش مشخص نیست، مقصد مناسبی برای هزینهٔ جذب نیست. پیش از شروع، یک پیشنهاد روشن، پاسخ به سؤال‌های اصلی خریدار و یک اقدام قابل‌اندازه‌گیری مثل ثبت درخواست تعریف کن. سپس بررسی کن ابزار سنجش واقعاً همان اقدام را ثبت می‌کند.",
          ),
          h("هر مسیر چه چیزی را می‌آزماید؟"),
          table([
            ["مسیر", "کاربرد قابل‌بررسی", "نکتهٔ تصمیم"],
            [
              "تبلیغات",
              "آزمودن پیام و صفحه برای یک مخاطب مشخص",
              "بودجه، دسترسی به کانال و هزینهٔ جذب باید بررسی شوند",
            ],
            [
              "سئو",
              "پاسخ‌دادن به جست‌وجوی مرتبط با خدمات در طول زمان",
              "به محتوای مفید، دسترسی خزنده و پیگیری مستمر نیاز دارد",
            ],
            [
              "ترکیبی",
              "آزمودن پیام و توسعهٔ محتوا بر اساس نیاز واقعی",
              "بودجه و مسئولیت هر بخش باید جدا روشن باشد",
            ],
          ]),
          h("گزارشی بخواه که به کسب‌وکار ربط دارد"),
          list(
            "کدام عبارت‌ها و صفحه‌ها درخواست مرتبط آورده‌اند؟",
            "چند درخواست واقعی و چند پیام نامرتبط داشته‌ایم؟",
            "هزینهٔ جذب شامل تولید محتوا، اجرا و بودجهٔ رسانه چقدر است؟",
            "بعد از دریافت درخواست، پیگیری فروش چگونه انجام شده است؟",
          ),
          h("برای شروع چه آماده کنی؟"),
          p(
            "خدمات اولویت‌دار، محدودهٔ جغرافیایی، ظرفیت پاسخ‌گویی و یک نمونهٔ مشتری مناسب را مشخص کن. برای سئو، دسترسی خواندن گزارش‌های موجود می‌تواند به ارزیابی کمک کند؛ هدف باید بهبود مسیر یافتن و انتخاب خدمات تو باشد، نه صرفاً افزایش عدد بازدید. انتظار رتبه یا تعداد فروش تضمینی را جای معیارهای روشن، بازهٔ ارزیابی و گزارش کار قرار نده.",
          ),
          source(
            "راهنمای رسمی گوگل برای محتوای مفید و مخاطب‌محور",
            "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
          ),
        ],
      },
      en: {
        title: "SEO or advertising: where should customer acquisition start?",
        summary:
          "Compare intent, timing and lead quality instead of treating traffic as the business outcome.",
        content: [
          p(
            "More visits are not automatically more suitable customers. Start with the audience, the problem they want solved and the action they should take after landing on your website.",
          ),
          h("Prepare the destination first"),
          p(
            "Clarify the offer, answer buying questions and test the contact or purchase path on mobile. Measure a real business action such as a completed inquiry, not just page views.",
          ),
          h("Give each channel a clear role"),
          table([
            ["Channel", "Possible role", "What to check"],
            [
              "Advertising",
              "Test an offer with a defined audience",
              "Availability, budget and acquisition cost",
            ],
            [
              "SEO",
              "Answer relevant searches over time",
              "Useful content, crawl access and ongoing work",
            ],
            [
              "Combined",
              "Use observed demand to refine pages",
              "Separate responsibilities and budgets",
            ],
          ]),
          h("Ask for a business-focused report"),
          list(
            "Which queries and pages generate relevant inquiries?",
            "How many contacts fit your service?",
            "What is the full acquisition cost?",
            "Does sales follow up effectively?",
          ),
          p(
            "Define priority services, location and response capacity before starting. Agree a review period and meaningful measures. No provider can responsibly promise a fixed search position or sales result without regard to the market and your operation.",
          ),
          source(
            "Google guidance on people-first content",
            "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
          ),
        ],
      },
    },
  },
  {
    slug: "ready-made-or-custom-business-software",
    serviceId: "software",
    cover: "software",
    translations: {
      fa: {
        title: "نرم‌افزار آماده بخریم یا نرم‌افزار اختصاصی بسازیم؟",
        summary:
          "پیش از سفارش یک سامانه، فرایند واقعی تیم، هزینهٔ تغییر روش کار و وابستگی به تأمین‌کننده را بسنج",
        content: [
          p(
            "وقتی فایل‌ها و پیام‌ها برای ادارهٔ کار کافی نیستند، ساخت نرم‌افزار اختصاصی تنها گزینه نیست. یک محصول آماده ممکن است بخش مهم نیاز را پوشش دهد؛ توسعهٔ اختصاصی هم می‌تواند برای فرایندی خاص ارزش داشته باشد. معیار انتخاب، تعداد امکانات روی بروشور نیست؛ باید دید یک کار واقعی از شروع تا پایان چقدر درست انجام می‌شود.",
          ),
          h("یک سناریوی واقعی را معیار مقایسه قرار بده"),
          p(
            "مثلاً سفارش از طرف نماینده ثبت می‌شود، قیمت طبق قرارداد تعیین می‌شود، مدیر آن را تأیید می‌کند و وضعیت تحویل باید قابل‌پیگیری باشد. همین سناریو را با دادهٔ ساختگی در هر گزینه اجرا کن. تعداد ورود دوبارهٔ اطلاعات، مجوزهای لازم و استثناهایی مثل لغو یا برگشت سفارش را هم بررسی کن.",
          ),
          h("هزینه فقط خرید یا ساخت اولیه نیست"),
          table([
            ["موضوع", "در نرم‌افزار آماده بپرس", "در توسعهٔ اختصاصی بپرس"],
            [
              "کاربران",
              "هزینه با تعداد کاربر چگونه تغییر می‌کند؟",
              "نقش‌ها و سطح دسترسی‌ها در محدوده هستند؟",
            ],
            [
              "اطلاعات",
              "خروجی کامل و قابل‌استفاده می‌گیرم؟",
              "ساختار داده و روش پشتیبان‌گیری مستند است؟",
            ],
            [
              "تغییر",
              "قابلیت موردنیاز قابل‌تنظیم است؟",
              "تغییرهای بعدی چگونه برآورد و تحویل می‌شوند؟",
            ],
            [
              "ادامهٔ کار",
              "شرایط تمدید و قطع سرویس چیست؟",
              "کد و راه‌اندازی را چه کسی تحویل می‌گیرد؟",
            ],
          ]),
          h("قبل از ساخت، ریسک را کوچک کن"),
          p(
            "به‌جای سفارش همهٔ بخش‌ها یک‌جا، فرایند اصلی را اولویت‌بندی کن. نمونهٔ قابل‌بررسی یا نسخهٔ اول باید با مشارکت کاربر واقعی تیم سنجیده شود. اگر کسی مسئول ورود اطلاعات، تأیید خروجی و آموزش همکاران نیست، حتی نرم‌افزار مناسب هم ممکن است استفاده نشود.",
          ),
          h("چک‌لیست آماده‌سازی درخواست"),
          list(
            "نقش کاربران و نمونهٔ یک روز کاری را بنویس",
            "داده‌های ورودی، گزارش لازم و استثناها را مشخص کن",
            "اتصال به حسابداری، انبار یا سایت را جدا توضیح بده",
            "دربارهٔ مالکیت داده، خروجی گرفتن و تحویل کد توافق کن",
            "برای انتقال اطلاعات و آموزش تیم زمان در نظر بگیر",
          ),
          p(
            "رایکد می‌تواند نیاز نرم‌افزار تحت وب، ویندوز یا اندروید را بر اساس همین فرایند بررسی کند. از شرح مسئله شروع کن؛ انتخاب بستر و محدودهٔ اجرا باید بعد از روشن‌شدن کاربر، محیط استفاده و هدف پروژه انجام شود.",
          ),
        ],
      },
      en: {
        title: "Off-the-shelf or custom business software?",
        summary:
          "Compare a real workflow, data ownership and ongoing costs before ordering a new system.",
        content: [
          p(
            "Custom software is not the only answer when spreadsheets and messages become difficult to manage. An existing product may cover the core need. A tailored system may be justified by a distinctive workflow. Test the actual job rather than counting features.",
          ),
          h("Demonstrate one complete scenario"),
          p(
            "Follow an order from entry and contract pricing through approval, fulfillment and cancellation. Use fictional data. Record duplicate entry, access requirements and exceptions in each option.",
          ),
          h("Compare the continuing commitment"),
          list(
            "User-based pricing or development scope",
            "Exporting data in a usable format",
            "Integrations and their limitations",
            "Support, changes and renewal terms",
            "Source code and operational handover for custom work",
          ),
          h("Reduce risk before building everything"),
          p(
            "Start with the essential workflow and ask actual staff to evaluate an early version. Assign someone to own data quality, acceptance and training. Plan migration and access roles before going live.",
          ),
          h("Prepare the right brief"),
          p(
            "Describe users, inputs, reports, exceptions and external systems. Agree data ownership and a way to leave or hand over the solution. A web, Windows or Android implementation should follow the working environment and the business need, rather than being chosen before those requirements are clear.",
          ),
        ],
      },
    },
  },
  {
    slug: "when-your-business-needs-automation",
    serviceId: "connect",
    cover: "automation",
    translations: {
      fa: {
        title: "کدام کارهای کسب‌وکار را به ربات بسپاریم؟",
        summary:
          "از پیگیری سفارش تا گزارش روزانه؛ یک کار تکراری مناسب پیدا کن و مرز دخالت انسان را از اول مشخص کن",
        content: [
          p(
            "اگر همکارانت هر روز اطلاعات یکسانی را بین پیام‌رسان، سایت و فایل‌ها جابه‌جا می‌کنند، خودکارسازی ارزش بررسی دارد. اما ربات خوب قرار نیست همهٔ تصمیم‌ها را جای تیم بگیرد. بهترین نقطهٔ شروع، کاری تکراری با ورودی مشخص، قاعدهٔ روشن و نتیجهٔ قابل‌بررسی است.",
          ),
          h("از یک کار کوچک و پرتکرار شروع کن"),
          p(
            "مثلاً درخواست از فرم سایت ثبت می‌شود، یک کد پیگیری می‌گیرد و به مسئول مربوط اطلاع داده می‌شود. این کار را از مذاکره دربارهٔ سفارش غیرمعمول جدا کن. اولی قواعد مشخصی دارد؛ دومی ممکن است به تصمیم انسانی نیاز داشته باشد. کانال اجرا می‌تواند سایت، تلگرام یا اتصال میان ابزارهای کاری باشد؛ دسترسی و محدودیت هر سرویس باید پیش از برآورد بررسی شود.",
          ),
          h("قبل از سفارش ربات چه بنویسی؟"),
          list(
            "چه رویدادی کار را آغاز می‌کند؟",
            "ورودی از کجا می‌آید و کدام داده واقعاً لازم است؟",
            "در حالت عادی چه خروجی‌ای باید ایجاد شود؟",
            "اگر اطلاعات ناقص بود یا سرویس قطع شد چه اتفاقی بیفتد؟",
            "کدام موارد باید به انسان ارجاع داده شوند؟",
          ),
          h("کار تکراری را دوباره اجرا نکن"),
          p(
            "در طراحی باید مشخص شود اگر یک پیام یا درخواست دو بار رسید، سفارش یا اعلان تکراری ایجاد نشود. برای خطا، ثبت رویداد و راه پیگیری در نظر بگیر. رباتی که در سکوت از کار می‌افتد، می‌تواند از کار دستی پرهزینه‌تر شود؛ مسئول بررسی خطاها باید معلوم باشد.",
          ),
          table([
            ["نمونهٔ کار", "مرز مناسب"],
            ["اطلاع‌رسانی وضعیت سفارش", "ارسال بر اساس وضعیت تأییدشدهٔ سیستم"],
            ["جمع‌آوری درخواست", "اعتبارسنجی اطلاعات و تحویل به مسئول"],
            ["گزارش روزانه", "خلاصهٔ داده با امکان رجوع به منبع"],
            ["تخفیف یا بازپرداخت ویژه", "ارجاع برای تصمیم صاحب اختیار"],
          ]),
          h("نتیجه را چطور ارزیابی کنی؟"),
          p(
            "قبل و بعد از اجرا، زمان انجام کار، تعداد خطاها و موارد ارجاع به انسان را در بازه‌ای مشابه ثبت کن. هدف باید بهترشدن یک فرایند مشخص باشد، نه صرفاً داشتن ربات. برای بررسی، نمونهٔ فرایند و چند ورودی ساختگی آماده کن؛ رمز سرویس‌ها یا اطلاعات واقعی مشتریان را در پیام اولیه نفرست.",
          ),
        ],
      },
      en: {
        title: "Which business tasks should you automate?",
        summary:
          "Choose a repeatable workflow, define human handoffs and make failures visible.",
        content: [
          p(
            "Moving the same information between messages, forms and files is a useful signal to investigate automation. The best starting point is a repeatable task with clear inputs and a verifiable outcome, rather than every decision the team makes.",
          ),
          h("Start with one complete task"),
          p(
            "A website inquiry can receive a tracking reference and notify the responsible person. A negotiation about an unusual order may still need human judgment. Check the chosen channel and external service limitations before estimating work.",
          ),
          h("Write down the boundaries"),
          list(
            "What triggers the process?",
            "Which input fields are necessary?",
            "What should happen with missing data?",
            "What happens if a service is unavailable?",
            "Which cases require a human decision?",
          ),
          h("Plan for repeated requests and failures"),
          p(
            "A repeated message should not create duplicate orders. Require visible failure records and a responsible person for investigating them. An automation that stops silently can disrupt operations.",
          ),
          h("Measure the actual improvement"),
          p(
            "Compare handling time, errors and human escalations across comparable periods before and after launch. Bring a process description and fictional inputs to the first discussion. Do not send customer records or service passwords in the initial message.",
          ),
        ],
      },
    },
  },
  {
    slug: "excel-or-business-dashboard",
    serviceId: "data",
    cover: "data",
    translations: {
      fa: {
        title: "اکسل کافی است یا به داشبورد مدیریتی نیاز داریم؟",
        summary:
          "وقتی نسخه‌های متفاوت فایل و گزارش‌های دستی دردسر می‌شوند، مسیر بعدی را بر اساس نیاز تیم انتخاب کن",
        content: [
          p(
            "اکسل برای خیلی از کارهای کسب‌وکار ابزار مناسبی است؛ زیادشدن ردیف‌ها به‌تنهایی دلیل ساخت سامانهٔ تازه نیست. مشکل زمانی جدی می‌شود که معلوم نیست کدام فایل درست است، چند نفر هم‌زمان اطلاعات را تغییر می‌دهند یا گزارش مدیریتی به جمع‌کردن دستی چند منبع وابسته است. ابتدا منشأ خطا و تأخیر را مشخص کن.",
          ),
          h("چه زمانی فایل بهتر کافی است؟"),
          p(
            "اگر مسئول ورود اطلاعات مشخص است، دسترسی‌ها پیچیده نیست و گزارش‌ها از یک منبع محدود ساخته می‌شوند، استانداردکردن فایل، اعتبارسنجی ورودی و خودکارکردن گزارش می‌تواند نقطهٔ شروع باشد. در این مسیر هم باید مالک فایل، روش نسخه‌بندی و نسخهٔ پشتیبان روشن باشد.",
          ),
          h("چه زمانی یک ابزار مشترک ارزش بررسی دارد؟"),
          list(
            "چند نقش با سطح دسترسی متفاوت روی داده کار می‌کنند",
            "لازم است معلوم باشد چه کسی چه تغییری داده است",
            "اطلاعات باید از چند سامانه به‌روز دریافت شوند",
            "خطای یک فایل روی سفارش، موجودی یا تصمیم مدیریتی اثر مستقیم دارد",
          ),
          table([
            ["سؤال", "چرا مهم است؟"],
            [
              "منبع اصلی داده چیست؟",
              "داشبورد نمی‌تواند دادهٔ نامعتبر را درست کند",
            ],
            [
              "گزارش چند وقت یک بار لازم است؟",
              "به‌روزرسانی لحظه‌ای همیشه ضروری نیست",
            ],
            [
              "چه کسی با گزارش تصمیم می‌گیرد؟",
              "هر نمودار باید به یک تصمیم مرتبط باشد",
            ],
            [
              "داده چطور خروجی گرفته می‌شود؟",
              "وابستگی و امکان جابه‌جایی باید روشن باشد",
            ],
          ]),
          h("داشبورد را از تصمیم شروع کن"),
          p(
            "به‌جای درخواست «چند نمودار زیبا»، مثال بزن که مدیر هر هفته باید سفارش‌های عقب‌افتاده یا تغییر موجودی را ببیند. برای هر شاخص، تعریف، منبع و زمان آخرین به‌روزرسانی را مشخص کن. بهتر است اولین نسخه چند سؤال مهم را دقیق جواب دهد تا اینکه تعداد زیادی عدد نامطمئن نشان دهد.",
          ),
          h("برای بررسی اولیه چه بفرستی؟"),
          p(
            "یک فایل بدون اطلاعات حساس یا ساختار ستون‌ها، نمونهٔ گزارش مطلوب و توضیح کار دستی فعلی کافی است. نام و اطلاعات واقعی مشتریان را از نمونه حذف کن. بعد از بررسی می‌توان تصمیم گرفت اصلاح اکسل، اتصال داده و گزارش خودکار کافی است یا پنل مشترک بهتری لازم داریم.",
          ),
        ],
      },
      en: {
        title: "Is Excel enough, or do you need a business dashboard?",
        summary:
          "Choose the next step based on data ownership, shared work and the decisions your reports support.",
        content: [
          p(
            "Excel remains useful for many business tasks. Row count alone is not a reason to replace it. Investigate when teams disagree about the correct version, people overwrite changes or managers rely on manually assembled reports.",
          ),
          h("When a better workbook may be enough"),
          p(
            "If ownership is clear and the data source is limited, validation, a consistent file structure and automated reports may solve the immediate problem. Establish versioning and backups.",
          ),
          h("When to consider a shared tool"),
          list(
            "Different roles need different access",
            "Changes need an audit trail",
            "Several systems feed the report",
            "File errors affect orders or inventory",
          ),
          h("Start with decisions, not charts"),
          p(
            "Define the question a manager needs answered, the source of each measure and its update frequency. A dashboard cannot correct unreliable source data simply by presenting it attractively. A small, reliable report is more useful than many uncertain measures.",
          ),
          h("Prepare a safe example"),
          p(
            "Share a sanitized workbook or column structure and an example of the desired report. Remove real customer information. After reviewing the workflow, decide between improving the workbook, automating data collection and building a shared management interface.",
          ),
        ],
      },
    },
  },
  {
    slug: "website-support-and-handover-checklist",
    serviceId: "continue",
    cover: "support",
    translations: {
      fa: {
        title: "بعد از تحویل سایت، چه پشتیبانی‌ای لازم داریم؟",
        summary:
          "مالکیت دسترسی‌ها، نسخهٔ پشتیبان، رفع خرابی و توسعهٔ بعدی را پیش از تحویل نهایی روشن کن",
        content: [
          p(
            "تحویل سایت پایان کار فنی نیست. فرم‌ها، افزونه‌ها، سرویس پیامک یا زیرساخت ممکن است به نگهداری نیاز پیدا کنند. عبارت «پشتیبانی دارد» هم به‌تنهایی محدودهٔ مسئولیت را معلوم نمی‌کند. پیش از تحویل، روشن کن چه کسی هر بخش را کنترل می‌کند، چه چیزی بررسی می‌شود و خرابی از چه مسیری پیگیری خواهد شد.",
          ),
          h("چه چیزهایی باید در اختیار صاحب پروژه باشد؟"),
          list(
            "مالکیت و دسترسی دامنه، هاست و سرویس‌های اصلی",
            "حساب مدیر سایت و راهنمای کارهای روزمره",
            "فهرست مجوزها، تاریخ تمدید و هزینه‌های دوره‌ای",
            "کد و مستندات در پروژه‌هایی که تحویل کد در توافق آمده است",
            "روش تهیه و بازیابی نسخهٔ پشتیبان، همراه مسئول اجرا",
          ),
          h("رفع نقص را از توسعهٔ تازه جدا کن"),
          p(
            "اگر فرم توافق‌شده درست کار نمی‌کند، موضوع با اضافه‌کردن یک درگاه جدید یا طراحی صفحهٔ تازه فرق دارد. در توافق پشتیبانی، نمونهٔ هرکدام را بنویس. زمان پاسخ اولیه را هم از زمان حل مسئله جدا کن؛ خرابی وابسته به سرویس بیرونی ممکن است نیازمند بررسی و هماهنگی بیشتری باشد.",
          ),
          table([
            ["موضوع", "چیزی که باید مشخص باشد"],
            ["پایش", "چه مواردی، با چه تناوبی و توسط چه کسی بررسی می‌شوند؟"],
            ["پشتیبان‌گیری", "چه داده‌ای، کجا و تا چه مدت نگه‌داری می‌شود؟"],
            ["بازیابی", "آخرین آزمایش بازیابی چه زمانی بوده است؟"],
            ["گزارش خرابی", "کانال ثبت، اولویت و مسئول پیگیری چیست؟"],
            ["توسعه", "درخواست تازه چگونه بررسی و قیمت‌گذاری می‌شود؟"],
          ]),
          h("یک تحویل قابل‌بررسی داشته باش"),
          p(
            "چند کار واقعی مثل ثبت درخواست، تغییر محتوا، مشاهدهٔ سفارش و استفاده روی موبایل را با مسئول سایت اجرا کن. صرف داشتن فایل پشتیبان کافی نیست؛ باید معلوم باشد بازیابی چگونه انجام می‌شود. اطلاعات ورود را در کانال مناسب تحویل بگیر و سطح دسترسی همکاران را متناسب با کارشان تعریف کن.",
          ),
          h("پشتیبانی را با نیازت هماهنگ کن"),
          p(
            "سایتی با سفارش روزانه و اتصال‌های متعدد با یک سایت معرفی کوچک نیاز یکسانی ندارد. بخش‌های حیاتی، ساعات کاری و تغییرات موردانتظار را توضیح بده تا محدودهٔ نگهداری قابل‌فهمی تعریف شود. برای ادامهٔ همکاری یا تحویل‌گرفتن پروژهٔ فعلی، اول فهرست دسترسی‌ها و وضعیت نگهداری را بررسی کنیم؛ هیچ زمان پاسخ یا دسترس‌پذیری مشخصی بدون توافق پروژه وعده داده نمی‌شود.",
          ),
        ],
      },
      en: {
        title: "What support do you need after a website handover?",
        summary:
          "Clarify account ownership, backups, bug fixes and future changes before accepting delivery.",
        content: [
          p(
            "A website handover does not end its technical needs. Forms, integrations and infrastructure may need ongoing care. The phrase support included is useful only when responsibilities and exclusions are clear.",
          ),
          h("Keep control of the essentials"),
          list(
            "Domain, hosting and key service accounts",
            "Administrator access and daily-use instructions",
            "License renewals and recurring costs",
            "Agreed source code and operational documentation",
            "Backup ownership and recovery instructions",
          ),
          h("Separate defects from new requests"),
          p(
            "A form failing to meet its agreed behavior is different from adding a new payment provider. Define examples of both. Also separate the initial response time from the time required to resolve a problem, especially when an external service is involved.",
          ),
          h("Test the handover"),
          p(
            "Run through inquiries, content editing, orders and mobile use with the person who will operate the site. A backup is valuable only when there is a workable recovery process. Document access roles and a suitable method of handing over credentials.",
          ),
          h("Match support to business risk"),
          p(
            "A busy ordering system has different needs from a small brochure website. Identify critical workflows, operating hours and expected changes before agreeing a plan. Response times and availability commitments should be project-specific rather than assumed from a general support label.",
          ),
        ],
      },
    },
  },
];
