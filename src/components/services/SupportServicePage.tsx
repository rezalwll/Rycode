import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpLeft,
  Check,
  CircleAlert,
  Plus,
  Wrench,
} from "lucide-react";
import { ContactForm, FormSubmit } from "@/components/ContactForm";
import { supportServiceId, supportServiceSlug } from "@/lib/service-routes";
import { SupportGallery, SupportScenarios } from "./SupportShowcases";
import {
  supportFaq,
  supportModels,
  supportProcess,
  supportServices,
} from "./support-copy";
import styles from "./SupportServicePage.module.css";

const priorities = [
  ["بحرانی", "قطع سرویس، توقف سفارش‌گیری یا خطر برای اطلاعات"],
  ["مهم", "خرابی یک امکان ضروری برای بخشی از کاربران"],
  ["عادی", "اصلاح محدود یا نگهداری برنامه‌ریزی‌شده"],
  ["توسعه", "درخواست قابلیت، گزارش یا تغییر رابط"],
];
const qualities = [
  [
    "محدودهٔ روشن",
    "قبل از شروع مشخص می‌کنیم مسئول هر کار کیه و چه درخواست‌هایی پوشش داده می‌شن.",
  ],
  [
    "تغییر کنترل‌شده",
    "تغییر مهم با توجه به ریسک، امکان بازگشت و آزمایش بخش‌های مرتبط اجرا می‌شه.",
  ],
  [
    "اولویت‌بندی درخواست‌ها",
    "اختلالی که فروش رو متوقف کرده با یک تغییر ظاهری در یک اولویت قرار نمی‌گیره.",
  ],
  [
    "گزارش قابل فهم",
    "می‌دونی چه کاری انجام شده، چه مسئله‌ای باقی مونده و قدم بعدی چیه.",
  ],
];
const stepNumber = new Intl.NumberFormat("fa-IR", { minimumIntegerDigits: 2 });

function Action({
  href,
  children,
  down = false,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  down?: boolean;
  secondary?: boolean;
}) {
  const Icon = down ? ArrowDown : ArrowUpLeft;
  const className = `${styles.action} ${secondary ? styles.secondary : ""}`;
  const label = (
    <>
      <span>{children}</span>
      <span>
        <Icon size={17} aria-hidden="true" />
      </span>
    </>
  );
  return href.startsWith("#") ? (
    <a className={className} href={href}>
      {label}
    </a>
  ) : (
    <Link className={className} href={href}>
      {label}
    </Link>
  );
}

function Section({
  id,
  title,
  intro,
  action,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className={styles.section} id={id} aria-labelledby={`${id}-title`}>
      <header className={styles.sectionHead}>
        <div>
          <h2 id={`${id}-title`}>{title}</h2>
          {intro && <p>{intro}</p>}
        </div>
        {action}
      </header>
      {children}
    </section>
  );
}

export function SupportServicePage({ model }: { model?: string | string[] }) {
  const chosenModel = supportModels.find(({ id }) => id === model);
  return (
    <main dir="rtl" data-support-page className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.hero}>
          <h1 className={styles.eyebrow}>پشتیبانی و توسعهٔ مستمر</h1>
          <p className={styles.heroTitle}>
            تحویل پروژه،<span> آخر ماجرا نیست</span>
          </p>
          <p className={styles.intro}>
            از نگهداری و رفع خطا تا اضافه کردن امکانات تازه، برای ادامهٔ مسیر
            سایت یا نرم‌افزارت هم می‌تونیم برنامه داشته باشیم.
          </p>
          <div className={styles.actions}>
            <Action href="#support-request">
              برای پروژه‌ام پشتیبانی می‌خوام
            </Action>
            <Action href="#support-services" down secondary>
              ببین چه خدماتی داریم
            </Action>
          </div>
          <div className={styles.heroPanels}>
            <section
              className={styles.heroPanel}
              aria-labelledby="support-lifecycle-title"
            >
              <h2 id="support-lifecycle-title">مسیر پروژه بعد از راه‌اندازی</h2>
              <ol className={styles.lifecycle}>
                <li>راه‌اندازی</li>
                <li>نگهداری</li>
                <li>بهبود</li>
                <li>توسعه</li>
              </ol>
              <p>
                بسته به وضعیت پروژه، می‌تونیم از یک اصلاح کوچک یا یک برنامهٔ
                نگهداری شروع کنیم.
              </p>
            </section>
            <section
              className={styles.heroPanel}
              aria-labelledby="support-projects-title"
            >
              <h2 id="support-projects-title">
                چه پروژه‌هایی رو بررسی می‌کنیم؟
              </h2>
              <ul className={styles.tags}>
                {[
                  "سایت شرکتی",
                  "فروشگاه اینترنتی",
                  "وردپرس",
                  "نرم‌افزار اختصاصی",
                  "ربات و اتصال‌ها",
                ].map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
              <p>
                اگه پروژه جای دیگه ساخته شده، اول فناوری، دسترسی‌ها و وضعیت
                فنی‌اش رو بررسی می‌کنیم.
              </p>
            </section>
          </div>
        </header>

        <Section
          id="support-scope"
          title="حل یک مشکل یا برنامه‌ای برای ادامه؟"
          intro="از توقف ثبت سفارش تا نیاز به امکانات تازه، نوع درخواست مشخص می‌کنه از کجا شروع کنیم."
        >
          <div className={styles.scopeGrid}>
            <article>
              <CircleAlert size={24} aria-hidden="true" />
              <h3>رفع باگ و اختلال</h3>
              <p>
                وقتی خطای مشخصی مثل خرابی فرم تماس یا پرداخت داری، تمرکز روی
                تشخیص علت و اصلاح همون مسیر است.
              </p>
              <Action href="/services/rescue" secondary>
                خدمات رفع باگ و توسعهٔ پروژه
              </Action>
            </article>
            <article>
              <Wrench size={24} aria-hidden="true" />
              <h3>پشتیبانی و نگهداری</h3>
              <p>
                برای بررسی‌های منظم، به‌روزرسانی کنترل‌شده و اولویت‌بندی
                بهبودها، محدوده و روش همکاری رو مشخص می‌کنیم.
              </p>
              <Action href="#support-models" down secondary>
                دیدن مدل‌های همکاری
              </Action>
            </article>
          </div>
        </Section>

        <Section
          id="support-services"
          title="برای بهتر شدن پروژه‌ات چه کار می‌کنیم؟"
          intro="هر خدمت رو باز کن تا ببینی چه چیزهایی رو می‌تونیم بررسی یا اصلاح کنیم."
          action={<Action href="#support-request">درخواست بررسی پروژه</Action>}
        >
          <div className={styles.galleries}>
            <SupportGallery
              items={supportServices.slice(0, 4)}
              label="پشتیبانی سایت و نرم‌افزار"
            />
            <SupportGallery
              items={supportServices.slice(4)}
              label="نگهداری فنی و توسعه"
            />
          </div>
        </Section>

        <Section
          id="support-process"
          title="پشتیبانی چطور شروع می‌شه؟"
          intro="قبل از انجام تغییرات، وضعیت فعلی پروژه و محدودهٔ رسیدگی رو باهم مشخص می‌کنیم."
        >
          <ol className={styles.process}>
            {supportProcess.map(({ title, detail }, index) => (
              <li key={title}>
                <span className={styles.step}>
                  {stepNumber.format(index + 1)}
                </span>
                <h3>{title}</h3>
                <p>{detail}</p>
                <span className={styles.stepLine} aria-hidden="true" />
              </li>
            ))}
          </ol>
        </Section>

        <Section
          id="support-scenarios"
          title="رسیدگی توی عمل چه شکلیه؟"
          intro="نوع پروژه رو انتخاب کن تا یک نمونهٔ نمایشی از مشکل و مسیر بررسیش ببینی."
        >
          <SupportScenarios />
        </Section>

        <Section
          id="support-expectations"
          title="از اول بدونیم چه کاری قراره انجام بشه"
        >
          <div className={styles.qualityGrid}>
            {qualities.map(([title, copy]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className={styles.scopeNote}>
            <p>
              <strong>در محدودهٔ توافق</strong> بررسی فنی، به‌روزرسانی‌های مشخص،
              رفع خطاهای توافق‌شده، اصلاح محدود و گزارش کار.
            </p>
            <p>
              <strong>با برآورد جداگانه</strong> بازطراحی گسترده، توسعهٔ قابلیت
              بزرگ، مهاجرت پیچیده، خدمات سئو و هزینهٔ سرویس‌های جانبی.
            </p>
          </div>
        </Section>

        <Section
          id="support-models"
          title="سه مدل همکاری برای سه نوع نیاز"
          intro="هزینه به وضعیت پروژه، تعداد درخواست‌ها، سطح پوشش و شرایط پاسخ‌گویی بستگی داره. بعد از بررسی، محدوده و هزینه رو مشخص می‌کنیم."
        >
          <div className={styles.models}>
            {supportModels.map(
              ({ id, title, description, cadence, points }) => (
                <article key={id} data-selected={id === chosenModel?.id}>
                  <p className={styles.cadence}>{cadence}</p>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <ul>
                    {points.map((point) => (
                      <li key={point}>
                        <Check size={15} aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.modelAction}>
                    <Action
                      href={`/services/${supportServiceSlug}?model=${id}#support-request`}
                      secondary
                    >
                      درخواست {title}
                    </Action>
                  </div>
                </article>
              ),
            )}
          </div>
        </Section>

        <Section id="support-faq" title="پرسش‌های متداول">
          <div className={styles.faq}>
            {supportFaq.map(([question, answer]) => (
              <details name="support-faq" key={question}>
                <summary>
                  {question}
                  <Plus size={19} aria-hidden="true" />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </Section>

        <Section
          id="support-request"
          title="بیا دربارهٔ پشتیبانی پروژه‌ات حرف بزنیم"
          intro="نوع پروژه، شرح نیاز و اثرش روی کار روزمره رو بگو. برای بررسی اولیه، شرح مسئله و نشانی عمومی سایت کافیه."
        >
          <div className={styles.contactGrid}>
            <div className={styles.priorities}>
              <h3>شدت درخواست چطوری مشخص می‌شه؟</h3>
              <dl>
                {priorities.map(([title, copy]) => (
                  <div key={title}>
                    <dt>{title}</dt>
                    <dd>{copy}</dd>
                  </div>
                ))}
              </dl>
              <p>
                ساعات پاسخ‌گویی و نحوهٔ رسیدگی به درخواست فوری در توافق هر پروژه
                مشخص می‌شه.
              </p>
            </div>
            <ContactForm key={chosenModel?.id} className={styles.form}>
              <input type="hidden" name="Service" value={supportServiceId} />
              <label>
                نام و نام خانوادگی
                <input
                  name="Name"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={120}
                  dir="auto"
                />
              </label>
              <label>
                شمارهٔ تماس
                <input
                  name="Phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  maxLength={24}
                  dir="ltr"
                />
              </label>
              <label>
                ایمیل (اختیاری)
                <input
                  name="Email"
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  dir="ltr"
                />
              </label>
              <label>
                مدل همکاری
                <select
                  name="Support model"
                  defaultValue={chosenModel?.title || ""}
                >
                  <option value="">نیاز به راهنمایی دارم</option>
                  {supportModels.map(({ id, title }) => (
                    <option key={id} value={title}>
                      {title}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                شرح درخواست
                <textarea
                  name="Message"
                  rows={4}
                  required
                  minLength={10}
                  maxLength={4900}
                  dir="auto"
                />
              </label>
              <FormSubmit className={styles.submit}>
                ثبت درخواست پشتیبانی{" "}
                <ArrowUpLeft size={17} aria-hidden="true" />
              </FormSubmit>
            </ContactForm>
          </div>
          <nav className={styles.related} aria-label="خدمات مرتبط با پشتیبانی">
            <Link href="/services/build">طراحی سایت و فروشگاه</Link>
            <Link href="/services/software">نرم‌افزار اختصاصی</Link>
            <Link href="/services/integrations-bots">ربات‌ها و خودکارسازی</Link>
            <Link href="/services/grow">سئو و رشد سایت</Link>
            <Link href="/services">همهٔ خدمات رایکد</Link>
          </nav>
        </Section>
      </div>
    </main>
  );
}
