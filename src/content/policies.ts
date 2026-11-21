import type { Locale } from "@/lib/i18n";

export type PolicyKind = "privacy" | "terms";

type PolicyCopy = {
  title: string;
  introduction: string;
  sections: { id: string; title: string; paragraphs: string[] }[];
  contactTitle: string;
  contactDescription: string;
};

export const policies: Record<PolicyKind, Record<Locale, PolicyCopy>> = {
  privacy: {
    fa: {
      title: "حریم خصوصی",
      introduction:
        "این صفحه توضیح می‌دهد هنگام مرور سایت، ارسال فرم تماس یا ثبت دیدگاه چه اطلاعاتی در رایکد ثبت می‌شود و چطور می‌توانید آن را پیگیری کنید.",
      sections: [
        {
          id: "inquiries",
          title: "فرم تماس و درخواست همکاری",
          paragraphs: [
            "برای رسیدگی به درخواست، نام، راه ارتباطی واردشده (تلفن یا ایمیل)، متن پیام و در صورت انتخاب، نوع خدمت را ذخیره می‌کنیم. زبان فرم، مسیر صفحه و کد پیگیری هم همراه درخواست ثبت می‌شود.",
            "مدیران مجاز رایکد از این اطلاعات برای بررسی نیاز پروژه، پاسخ‌گویی و پیگیری همان درخواست استفاده می‌کنند. برای شروع، شرح کوتاهی از کار کافی است. رمز عبور، توکن دسترسی، اطلاعات بانکی یا دادهٔ محرمانهٔ مشتریانتان را در فرم وارد نکنید.",
          ],
        },
        {
          id: "comments",
          title: "دیدگاه‌های بلاگ",
          paragraphs: [
            "نام نمایشی و متن دیدگاه برای بررسی مدیر سایت ذخیره می‌شود. اگر ایمیل اختیاری را وارد کنید، ایمیل در بخش مدیریت باقی می‌ماند و عمومی نمی‌شود. پس از تأیید، نام نمایشی، متن دیدگاه، زمان ارسال و پاسخ احتمالی رایکد در همان مقاله قابل مشاهده‌اند.",
          ],
        },
        {
          id: "analytics",
          title: "آمار استفاده از سایت",
          paragraphs: [
            "بازدید صفحه‌ها، کلیک روی راه‌های تماس و ارسال موفق فرم به‌صورت شمارنده‌های روزانه ثبت می‌شوند. دادهٔ آماری شامل نوع رویداد، مسیر صفحه و تعداد آن است. اطلاعات فرم، نشانی ارجاع‌دهنده و پارامترهای پیوند وارد این شمارنده‌ها نمی‌شوند.",
            "برای آمار بازدید، کوکی یا شناسهٔ بازدیدکننده ذخیره نمی‌کنیم. این تعدادها نمایانگر رویدادها هستند و تعداد افراد یکتا را نشان نمی‌دهند.",
          ],
        },
        {
          id: "storage",
          title: "ذخیره‌سازی و دسترسی",
          paragraphs: [
            "انتخاب تم روشن، تیره یا خودکار در حافظهٔ همان مرورگر ذخیره می‌شود. کوکی نشست برای ورود و حفظ دسترسی کارکنان به پنل مدیریت استفاده می‌شود. بعضی فرم‌ها و درخواست‌ها برای جلوگیری از ارسال انبوه، محدودیت موقت دارند.",
            "اطلاعات درخواست‌ها و دیدگاه‌ها در پایگاه دادهٔ سایت برای رسیدگی و پیگیری نگهداری می‌شود. اطلاعات تماس درخواست‌ها و ایمیل دیدگاه‌ها در بخش عمومی سایت نمایش داده نمی‌شوند.",
          ],
        },
        {
          id: "external-services",
          title: "پیوندهای بیرونی",
          paragraphs: [
            "پیوندهای شبکه‌های اجتماعی و منابع بیرونی شما را به سرویس‌های دیگری می‌برند. اطلاعاتی که در آن سرویس‌ها وارد می‌کنید تابع سیاست حریم خصوصی همان سرویس است.",
          ],
        },
        {
          id: "data-requests",
          title: "دسترسی، اصلاح یا حذف اطلاعات",
          paragraphs: [
            "برای درخواست دسترسی، اصلاح یا حذف اطلاعات ارسالی، از صفحهٔ تماس با ما پیام بفرستید. اگر درخواست همکاری بوده، کد پیگیری را در صورت دسترسی بنویسید. برای دیدگاه، نشانی مقاله و نام نمایشی کافی است تا مورد را پیدا کنیم.",
            "در صورت نیاز برای احراز ارتباط شما با اطلاعات ارسالی، جزئیات بیشتری درخواست می‌کنیم. درخواست‌ها با توجه به مقررات مربوط و تعهدات نگهداری اطلاعات بررسی می‌شوند.",
          ],
        },
      ],
      contactTitle: "دربارهٔ اطلاعاتتان سؤال دارید؟",
      contactDescription:
        "برای پیگیری اطلاعات ارسالی یا درخواست دسترسی، اصلاح یا حذف، از راه‌های تماس با رایکد استفاده کنید.",
    },
    en: {
      title: "Privacy Policy",
      introduction:
        "This page explains what RYCODE records when you contact us, leave a blog comment or browse the website, and how to ask about the information you have shared.",
      sections: [
        {
          id: "inquiries",
          title: "Contact and project inquiries",
          paragraphs: [
            "We store your name, the phone number or email you provide, your message and any service you select. The inquiry also includes its language, page path and reference code.",
            "Authorized RYCODE administrators use these details to review, respond to and follow up on your inquiry. A short project description is enough to get started. Keep passwords, access tokens, payment details and confidential customer data out of the form.",
          ],
        },
        {
          id: "comments",
          title: "Blog comments",
          paragraphs: [
            "Your display name and comment are stored for moderation. If you include an optional email address, it stays in the admin area. Once a comment is approved, the display name, comment, submission time and any RYCODE reply are visible on the article.",
          ],
        },
        {
          id: "analytics",
          title: "Website analytics",
          paragraphs: [
            "We count page views, contact clicks and successful form submissions in daily totals. The counters record the event type, page path and total. Form contents, referrers and URL parameters are excluded.",
            "We use no analytics cookies or stored visitor IDs for these counts. The totals measure events rather than unique visitors.",
          ],
        },
        {
          id: "storage",
          title: "Storage and access",
          paragraphs: [
            "Your light, dark or system theme preference is saved in your browser. A session cookie keeps authorized staff signed in to the admin area. Temporary limits on some forms and requests help prevent spam.",
            "Inquiry and comment data are kept in the site's database for handling and follow-up. Inquiry contact details and comment email addresses stay out of the public website.",
          ],
        },
        {
          id: "external-services",
          title: "External links",
          paragraphs: [
            "Social links and other external references take you to separate services. Information you enter there is subject to their own privacy policies.",
          ],
        },
        {
          id: "data-requests",
          title: "Access, correction or deletion",
          paragraphs: [
            "Contact us to request access to, correction of or deletion of information you submitted. Include your inquiry reference if you have it, or the article link and display name for a comment, so we can find the relevant record.",
            "We may ask for additional details to verify that the information is yours. We review requests in light of applicable rules and retention obligations.",
          ],
        },
      ],
      contactTitle: "Questions about your information?",
      contactDescription:
        "Get in touch to ask about information you shared or to request access, correction or deletion.",
    },
  },
  terms: {
    fa: {
      title: "شرایط استفاده از سایت",
      introduction:
        "این شرایط به استفاده از وب‌سایت رایکد، ثبت درخواست همکاری و ارسال دیدگاه مربوط است. جزئیات انجام هر پروژه هنگام توافق دربارهٔ همان پروژه مشخص می‌شود.",
      sections: [
        {
          id: "scope",
          title: "محتوای سایت و معرفی خدمات",
          paragraphs: [
            "صفحات خدمات، مقاله‌ها و نمونه‌کارها برای شناخت خدمات و بررسی گزینه‌ها منتشر می‌شوند. برای تصمیم دربارهٔ یک پروژهٔ مشخص، جزئیات فنی، هزینه و زمان‌بندی را پس از بررسی نیازها از رایکد دریافت کنید.",
          ],
        },
        {
          id: "project-request",
          title: "ثبت درخواست و توافق پروژه",
          paragraphs: [
            "ثبت فرم تماس برای شروع بررسی و گفت‌وگوست. کد پیگیری، ثبت درخواست در سایت را نشان می‌دهد. شروع کار، مبلغ، زمان‌بندی، تحویل‌ها، شرایط پرداخت و پشتیبانی طبق توافق جداگانهٔ پروژه مشخص می‌شوند.",
            "تغییرات محدودهٔ کار، توقف یا لغو پروژه و رسیدگی به پرداخت‌ها بر اساس توافق همان پروژه و مقررات قابل اعمال بررسی می‌شوند. حقوق قانونی طرفین طبق مقررات مربوط محفوظ است.",
          ],
        },
        {
          id: "acceptable-use",
          title: "استفاده مسئولانه از سایت",
          paragraphs: [
            "در فرم‌ها اطلاعات درست و مرتبط بنویسید و فقط اطلاعات یا فایل‌هایی را به اشتراک بگذارید که مجاز به ارسالشان هستید. ارسال هرزنامه، جعل هویت دیگران، تلاش برای دسترسی غیرمجاز یا ایجاد اختلال در کار سایت مجاز نیست.",
            "برای گفت‌وگوی اولیه دربارهٔ پروژه، شرح نیازتان کافی است. اگر دسترسی به کد یا حساب کاربری برای بررسی لازم باشد، روش امن انتقال آن جداگانه هماهنگ می‌شود.",
          ],
        },
        {
          id: "comment-guidelines",
          title: "دیدگاه‌ها و انتشار عمومی",
          paragraphs: [
            "دیدگاه باید به موضوع مقاله مربوط باشد. دیدگاه‌های حاوی تبلیغ ناخواسته، توهین، اطلاعات شخصی افراد یا محتوایی که حقوق دیگران را نقض کند ممکن است رد یا از نمایش عمومی برداشته شوند. دیدگاه‌ها بعد از بررسی منتشر می‌شوند.",
          ],
        },
        {
          id: "content-rights",
          title: "حقوق محتوا و فایل‌های پروژه",
          paragraphs: [
            "می‌توانید پیوند مستقیم مطالب را با دیگران به اشتراک بگذارید. برای بازنشر یا استفاده از متن، تصویر، نشان یا سایر آثار، حقوق صاحب اثر و شرایط مجوز مربوط را رعایت کنید.",
            "مالکیت، نحوهٔ استفاده و تحویل فایل‌ها یا کد اختصاصی پروژه در توافق همان پروژه مشخص می‌شود. دارایی‌ها و ابزارهای متعلق به اشخاص ثالث تابع مجوزهای خودشان هستند.",
          ],
        },
        {
          id: "changes",
          title: "پیوندهای بیرونی و تغییرات سایت",
          paragraphs: [
            "برای استفاده از وب‌سایت‌ها و سرویس‌هایی که از این سایت به آن‌ها پیوند داده شده، شرایط همان سرویس را بررسی کنید. در صورت تغییر امکانات یا روال استفاده از سایت، متن مربوط به آن در همین صفحه به‌روزرسانی می‌شود.",
          ],
        },
      ],
      contactTitle: "دربارهٔ همکاری سؤال دارید؟",
      contactDescription:
        "برای پرسش دربارهٔ ثبت درخواست، محدودهٔ همکاری یا شرایط یک پروژه، از صفحهٔ تماس با ما پیام بفرستید.",
    },
    en: {
      title: "Terms of Use",
      introduction:
        "These terms cover browsing the RYCODE website, submitting a project inquiry and leaving blog comments. The details of any project are set out in its own agreement.",
      sections: [
        {
          id: "scope",
          title: "Website content and services",
          paragraphs: [
            "Service pages, articles and work examples help you understand what we offer and explore your options. Contact RYCODE to confirm technical details, timing and pricing for your project after we review its requirements.",
          ],
        },
        {
          id: "project-request",
          title: "Project inquiries and agreements",
          paragraphs: [
            "Submitting the contact form starts a review and conversation. Your reference code confirms that the website received the inquiry. The project agreement establishes the start of work, pricing, schedule, deliverables, payment terms and support.",
            "Scope changes, cancellation and payment questions are handled under the relevant project agreement and applicable rules. Each party retains its statutory rights.",
          ],
        },
        {
          id: "acceptable-use",
          title: "Responsible use",
          paragraphs: [
            "Provide accurate, relevant information and share only materials you are authorized to send. Spam, impersonation, attempts at unauthorized access and interference with the website are prohibited.",
            "A description of what you need is enough for the first conversation. If we later need access to code or an account, we arrange a secure way to share that access separately.",
          ],
        },
        {
          id: "comment-guidelines",
          title: "Comments and publication",
          paragraphs: [
            "Keep comments relevant to the article. We may reject or remove unsolicited advertising, abuse, other people's personal information or content that infringes their rights. Comments are published after moderation.",
          ],
        },
        {
          id: "content-rights",
          title: "Content and project files",
          paragraphs: [
            "You can share direct links to our pages. Follow the rights holder's terms and any applicable licence when republishing or reusing text, photography, branding or other material.",
            "The project agreement sets out ownership, permitted use and delivery of custom code or project files. Third-party tools and assets remain subject to their own licences.",
          ],
        },
        {
          id: "changes",
          title: "External links and changes to the site",
          paragraphs: [
            "Review the terms of any external website or service you reach through one of our links. If website features or practices change, the relevant terms will be updated on this page.",
          ],
        },
      ],
      contactTitle: "Questions about working together?",
      contactDescription:
        "Ask us about making an inquiry, the scope of a collaboration or a specific project's terms.",
    },
  },
};
