import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations } from "@/lib/i18n-server";
import { lookupContent } from "@/server/content";
import { ContentDetail } from "./ContentDetail";
import styles from "./Content.module.css";
export async function PolicyPage({ kind }: { kind: "privacy" | "terms" }) {
  const { locale, href } = await getTranslations();
  const { owned, content } = await lookupContent("PAGE", kind, locale);
  if (owned && !content) notFound();
  if (owned && content)
    return <ContentDetail content={content} locale={locale} />;
  const fa = locale === "fa";
  const privacy = kind === "privacy";
  return (
    <main className={styles.page}>
      <p className={styles.eyebrow}>RYCODE</p>
      <h1>
        {fa
          ? privacy
            ? "حریم خصوصی"
            : "استفاده از سایت"
          : privacy
            ? "Privacy"
            : "Using this website"}
      </h1>
      <div className={styles.article}>
        <article className={styles.rich}>
          <p>
            {fa
              ? "این صفحه شیوهٔ فعلی کار وب‌سایت را توضیح می‌دهد. شرایط همکاری و خدمات هر پروژه جداگانه توافق می‌شود."
              : "This page describes how this website currently works. Each project's services and terms are agreed separately."}
          </p>
          {privacy ? (
            <>
              <h2>{fa ? "اطلاعات درخواست" : "Inquiry information"}</h2>
              <p>
                {fa
                  ? "نام، راه ارتباطی و توضیحاتی که در فرم می‌فرستی برای بررسی درخواست و تماس با تو در پایگاه دادهٔ سایت ذخیره می‌شود. دسترسی به درخواست‌ها محدود به مدیران مجاز است."
                  : "The name, contact details and message you submit are stored to review and respond to your inquiry. Access is restricted to authorized administrators."}
              </p>
              <h2>{fa ? "آمار بازدید" : "Visit analytics"}</h2>
              <p>
                {fa
                  ? "تعداد بازدید صفحه‌ها و کلیک‌ها به‌صورت تجمیعی ثبت می‌شود. برای این آمار، کوکی یا شناسهٔ بازدیدکننده ذخیره نمی‌شود و اطلاعات فرم، نشانی ارجاع‌دهنده و پارامترهای پیوند در آن وارد نمی‌شوند."
                  : "Page views and clicks are counted in daily aggregates without analytics cookies or visitor identifiers. Form details, referrers and URL parameters are not included."}
              </p>
              <h2>{fa ? "پیگیری اطلاعات" : "Your information"}</h2>
              <p>
                {fa
                  ? "برای پرسش دربارهٔ اطلاعات ارسالی یا درخواست بررسی و حذف آن، از صفحهٔ تماس با ما استفاده کن."
                  : "Contact us to ask about information you have submitted or to request review and deletion."}
              </p>
            </>
          ) : (
            <>
              <h2>{fa ? "ارسال درخواست" : "Sending an inquiry"}</h2>
              <p>
                {fa
                  ? "ثبت فرم شروع یک گفت‌وگوست. محدودهٔ کار، زمان‌بندی و هزینهٔ خدمات پس از بررسی نیاز پروژه مشخص می‌شود."
                  : "Submitting a form starts a conversation. Scope, timeline and pricing are established after reviewing the project."}
              </p>
              <h2>{fa ? "محتوای سایت" : "Website content"}</h2>
              <p>
                {fa
                  ? "مطالب سایت برای معرفی خدمات و ارائهٔ اطلاعات عمومی هستند. برای تصمیم دربارهٔ نیاز پروژهٔ خود، توضیحات و شرایط اختصاصی را با رایکد هماهنگ کن."
                  : "Website content introduces services and provides general information. Discuss your project's specific requirements with RYCODE."}
              </p>
            </>
          )}
          <Link className={styles.button} href={href("/contact")}>
            {fa ? "تماس با ما" : "Contact us"} ↗
          </Link>
        </article>
      </div>
    </main>
  );
}
