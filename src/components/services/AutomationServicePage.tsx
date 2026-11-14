import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDownLeft,
  ArrowUpLeft,
  Bot,
  Check,
  ClipboardList,
  Gauge,
  MessageCircle,
  PackageOpen,
  Plus,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { lookupContent } from "@/server/content";
import { AutomationDemo, AutomationMotion } from "./AutomationMotion";
import { automationFaq, automationProcess, automationServices } from "./automation-copy";
import { automationTemplateImages } from "./automation-template-images";
import styles from "./AutomationServicePage.module.css";

const inquiryHref = "/contact?service=connect#project-inquiry";
const shortcuts = [
  ["telegram", "ربات تلگرام", "ثبت درخواست"],
  ["orders", "خودکارسازی سفارش‌ها", "فروشگاه و انبار"],
  ["integrations", "اتصال سیستم‌ها", "حسابداری و API"],
  ["spreadsheets", "اکسل و گزارش‌ها", "فایل و داده"],
] as const;
const connections = [
  ["پیام‌رسان", "تلگرام"], ["فروش", "فروشگاه"], ["مالی", "حسابداری"],
  ["موجودی", "انبار"], ["مشتریان", "CRM"], ["اطلاع‌رسانی", "پیامک"],
  ["اطلاع‌رسانی", "ایمیل"], ["ثبت اطلاعات", "فرم سایت"], ["داده", "Excel و CSV"],
  ["تبادل داده", "API و Webhook"], ["پرداخت", "درگاه پرداخت"], ["مدیریت", "پنل وب"],
];
const related = [
  ["software", "طراحی نرم‌افزار اختصاصی"], ["build", "طراحی سایت و فروشگاه"],
  ["data", "داده و ابزارهای کاری"], ["rescue", "رفع باگ و توسعهٔ پروژه"],
  ["continue", "پشتیبانی و توسعهٔ مستمر"],
];

function number(index: number) {
  return (index + 1).toLocaleString("fa-IR", { minimumIntegerDigits: 2 });
}

function SectionIntro({
  number: sectionNumber,
  eyebrow,
  title,
  accent,
  children,
}: {
  number: string;
  eyebrow: string;
  title: string;
  accent: string;
  children: ReactNode;
}) {
  return (
    <div className={styles.sectionIntro} data-reveal>
      <div className={styles.sectionStamp}><span>{sectionNumber}</span><small>{eyebrow}</small></div>
      <div><h2>{title} <em>{accent}</em></h2><p>{children}</p></div>
    </div>
  );
}

export async function AutomationServicePage() {
  const { content: telegram } = await lookupContent("SERVICE", "telegram-bot-development", "fa");

  return (
    <main className={styles.page} data-automation-page dir="rtl">
      <AutomationMotion />
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroMeta}><span>RYCODE / SERVICE 05</span><span>BOT · FLOW · DATA</span></div>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy} data-reveal>
              <p className={styles.eyebrow}>ربات‌ها و خودکارسازی کارها</p>
              <h1>کارهای تکراری را <em>ساده‌تر</em> کن</h1>
              <p className={styles.heroLead}>سفارش، پیامک، فایل و اطلاعات بین ابزارها را به یک مسیر روشن و قابل پیگیری وصل می‌کنیم؛ با راهکاری که برای کار واقعی کسب‌وکارت ساخته شده باشد.</p>
              <div className={styles.actions}>
                <Link href={inquiryHref} className={styles.primary}>می‌خوام کارهام خودکار بشن <ArrowUpLeft size={17} /></Link>
                <a href="#automation-services" className={styles.secondary}>مسیرها را ببین <ArrowDownLeft size={17} /></a>
              </div>
              <div className={styles.heroStats}>
                <div><strong>۰۸</strong><span>مسیر آماده برای شروع</span></div>
                <div><strong>۱۲+</strong><span>ابزار قابل اتصال</span></div>
                <div><strong>۰۱</strong><span>منبع حقیقت برای هر فرایند</span></div>
              </div>
            </div>
            <div className={styles.heroVisual} data-reveal>
              <div className={styles.visualHeader}><span>LIVE FLOW</span><span>CONNECT / 01</span></div>
              <div className={styles.flowCanvas}>
                <div className={`${styles.flowNode} ${styles.flowNodeStart}`}><MessageCircle size={17} /><span>یک اتفاق می‌رسد</span><strong>سفارش جدید</strong></div>
                <div className={styles.flowLine} aria-hidden="true" />
                <div className={`${styles.flowNode} ${styles.flowNodeAction}`}><Workflow size={18} /><span>سیستم تصمیم می‌گیرد</span><strong>بررسی و ثبت</strong></div>
                <div className={styles.flowLine} aria-hidden="true" />
                <div className={styles.flowOutputs}><span><Check size={14} /> ثبت مالی</span><span><Check size={14} /> به‌روزرسانی انبار</span><span><Check size={14} /> پیامک مشتری</span></div>
              </div>
              <div className={styles.visualFooter}><span>INPUT</span><strong>فروشگاه + فرم سایت</strong><span>OUTPUT</span><strong>اطلاعات قابل پیگیری</strong></div>
            </div>
          </div>
          <nav className={styles.heroNav} aria-label="پرش به بخش‌های صفحه">
            {shortcuts.map(([id, title, label], index) => <a key={id} href={`#automation-${id}`}><span>{number(index)}</span><strong>{title}</strong><small>{label}</small><ArrowDownLeft size={16} /></a>)}
          </nav>
        </div>
      </header>

      <section id="automation-services" className={styles.section}>
        <div className={styles.container}>
          <SectionIntro number="۰۱" eyebrow="SERVICE SHEETS" title="از یک ربات" accent="تا یک سیستم کامل">برای هر مسیر، ورودی و خروجی روشن است. چیزی می‌سازیم که تیم بتواند استفاده‌اش کند، نتیجه‌اش را ببیند و بعداً توسعه‌اش بدهد.</SectionIntro>
          <div className={styles.serviceGrid}>
            {automationServices.map(({ id, title, intro, items, input, output, tools, condition }, index) => {
              return <article className={styles.serviceCard} id={`automation-${id}`} key={id} data-reveal>
                <div className={styles.cardTopline}><span>{number(index)}</span><span>AUTOMATION / {number(index + 1)}</span></div>
                <div className={styles.cardVisual}>
                  <Image src={automationTemplateImages[index]} alt="" fill sizes="(max-width: 720px) 100vw, 320px" />
                  <span className={styles.cardSignal}>FRAMER / {number(index + 1)}</span>
                </div>
                <div className={styles.cardBody}>
                  <h3>{title}</h3><p>{intro}</p>
                  {id === "telegram" && telegram ? <Link className={styles.textLink} href={`/services/${telegram.slug}`}>جزئیات ساخت ربات تلگرام <ArrowUpLeft size={15} /></Link> : null}
                  {id === "spreadsheets" ? <Link className={styles.textLink} href="/services/data">داده و ابزارهای کاری <ArrowUpLeft size={15} /></Link> : null}
                  <ul className={styles.cardList}>{items.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul>
                </div>
                <dl className={styles.cardSpec}><div><dt>ورودی</dt><dd>{input}</dd></div><div><dt>خروجی</dt><dd>{output}</dd></div><div><dt>ابزارها</dt><dd>{tools}</dd></div><div className={styles.cardNote}><dt>NOTE</dt><dd>{condition}</dd></div></dl>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section id="automation-examples" className={`${styles.section} ${styles.examplesSection}`}>
        <div className={styles.container}>
          <SectionIntro number="۰۲" eyebrow="LIVE EXAMPLE" title="یک اتفاق،" accent="چند کار مرتبط">یک سناریو را انتخاب کن و ببین اطلاعات از کجا وارد می‌شود، چه تصمیمی گرفته می‌شود و چه خروجی‌هایی برای تیم می‌سازد.</SectionIntro>
          <div className={styles.examplesGrid} data-reveal><div className={styles.demoFrame}><div className={styles.frameLabel}>FIG. 01 / WORKFLOW PREVIEW</div><AutomationDemo /></div><aside className={styles.exampleAside}><span className={styles.asideNumber}>01 — 03</span><h3>کار دستی را به یک مسیر قابل اعتماد تبدیل کن.</h3><p>هر مرحله‌ای که تکرار می‌شود، می‌تواند ورودی، تصمیم و خروجی مشخص داشته باشد.</p><ol><li><span>01</span><strong>رویداد را بگیر</strong><small>سفارش، فرم، پیام یا زمان مشخص</small></li><li><span>02</span><strong>قواعد را اجرا کن</strong><small>بررسی، اعتبارسنجی و ارجاع</small></li><li><span>03</span><strong>نتیجه را برسان</strong><small>ثبت، اعلان، گزارش یا پیگیری</small></li></ol></aside></div>
          <div className={styles.connectorPanel} data-reveal><div><span className={styles.panelKicker}>CONNECTOR MAP</span><h3>با ابزارهایی که همین حالا داری کار می‌کنیم.</h3></div><ul>{connections.map(([category, name]) => <li key={name}><small>{category}</small><strong>{name}</strong></li>)}</ul></div>
        </div>
      </section>

      <section id="automation-process" className={styles.section}><div className={styles.container}>
        <SectionIntro number="۰۳" eyebrow="DELIVERY METHOD" title="از همان کاری" accent="شروع می‌کنیم که وقتت را می‌گیرد">فرایند را با کوچک‌ترین نقطه‌ی قابل اندازه‌گیری شروع می‌کنیم و بعد اتصال‌ها و قابلیت‌های بعدی را روی آن می‌سازیم.</SectionIntro>
        <ol className={styles.processGrid} data-reveal>{automationProcess.map(([title, description], index) => <li key={title}><span>{number(index)}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol>
        <div className={styles.principles} data-reveal><article><Bot size={21} /><h3>ربات یا پنل؟</h3><p>برای تعامل سریع ربات، برای کار روزانه و گزارش پنل مناسب‌تر است.</p></article><article><PackageOpen size={21} /><h3>آماده یا اختصاصی؟</h3><p>اول ابزار آماده را بررسی می‌کنیم؛ فقط جایی اختصاصی می‌سازیم که ارزش داشته باشد.</p></article><article><ShieldCheck size={21} /><h3>کنترل و امنیت</h3><p>دسترسی، ثبت خطا و تأیید انسانی از ابتدا بخشی از نقشه‌ی راه است.</p></article></div>
      </div></section>

      <section id="automation-questions" className={`${styles.section} ${styles.questionsSection}`}><div className={styles.container}>
        <SectionIntro number="۰۴" eyebrow="DETAILS / FAQ" title="هزینه، دسترسی‌ها" accent="و سؤال‌های رایج">محدوده‌ی پروژه به تعداد مراحل، اتصال‌ها، حجم داده و شرایط نگهداری بستگی دارد. قبل از اجرا، همین موارد را شفاف می‌کنیم.</SectionIntro>
        <div className={styles.questionsGrid} data-reveal><div className={styles.faq}>{automationFaq.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={18} /></summary><p>{answer}</p></details>)}</div><aside className={styles.relatedPanel}><Gauge size={24} /><h3>از کجا شروع کنیم؟</h3><p>یک کار تکراری را انتخاب کن؛ با همان، اولین نقشه‌ی اتوماسیون را می‌سازیم.</p><Link href={inquiryHref} className={styles.darkLink}>شروع گفت‌وگو <ArrowUpLeft size={16} /></Link><div className={styles.relatedLinks}><span>RELATED</span>{related.map(([slug, title]) => <Link key={slug} href={`/services/${slug}`}>{title}</Link>)}</div></aside></div>
      </div></section>

      <section className={styles.closing} aria-labelledby="automation-contact-title"><div className={styles.container}><div className={styles.closingMeta}>RYCODE / NEXT MOVE</div><div className={styles.closingGrid} data-reveal><h2 id="automation-contact-title">بگو کدام کارت <em>تکراریه.</em></h2><div><p>فرایند فعلی‌ات را بگو؛ با هم مشخص می‌کنیم کدام بخش را اول ساده و قابل پیگیری کنیم.</p><div className={styles.actions}><Link className={styles.primary} href={inquiryHref}>بیا کارها را ساده‌تر کنیم <ArrowUpLeft size={17} /></Link><Link className={styles.secondary} href="/services">همهٔ خدمات رایکد <ClipboardList size={17} /></Link></div></div></div></div></section>
    </main>
  );
}
