import Image from "next/image";
import Link from "next/link";
import { ActionBannerArt } from "@/components/content/ActionBannerArt";
import type { ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpLeft,
  Bug,
  Calculator,
  CalendarDays,
  ClipboardCheck,
  Gauge,
  Laptop,
  Layers2,
  Layers3,
  PackageCheck,
  Plus,
  RefreshCw,
  Search,
  ShieldCheck,
  TriangleAlert,
  Users,
  Zap,
} from "lucide-react";
import { lookupContent } from "@/server/content";
import { rescueCopy as copy } from "./rescue-copy";
import styles from "./ProjectRescuePage.module.css";

const inquiryHref = "/contact?service=rescue";
const processIcons = [Search, ShieldCheck, PackageCheck];
const situationIcons = [Bug, Layers2, Plus, Gauge] as const;
const sectionLinks = [
  { href: "#rescue-findings", label: "امکانات" },
  { href: "#rescue-incident", label: "فرآیند کار" },
  { href: "/work", label: "پروژه‌های انجام‌شده" },
  { href: "#rescue-faq", label: "سوالات متداول" },
] as const;
const serviceImageSizes =
  "(max-width: 480px) 34vw, (max-width: 760px) 32vw, 210px";

function InquiryLink({
  children,
  urgent = false,
}: {
  children: ReactNode;
  urgent?: boolean;
}) {
  return (
    <Link
      data-fill-button
      className={urgent ? styles.urgentAction : styles.primary}
      href={inquiryHref}
    >
      {children}
      <ArrowUpLeft size={17} aria-hidden="true" />
    </Link>
  );
}

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className={styles.section} id={id} aria-labelledby={`${id}-title`}>
      <header className={styles.sectionHeading}>
        <h2 id={`${id}-title`}>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </header>
      <div className={styles.sectionBody}>{children}</div>
    </section>
  );
}

export async function ProjectRescuePage() {
  const { content: wordpress } = await lookupContent(
    "SERVICE",
    "wordpress-troubleshooting",
    "fa",
  );
  return (
    <main className={styles.page} dir="rtl" data-project-rescue-page>
      <div className={styles.introRegion}>
        <div className={styles.introContainer}>
          <header className={styles.hero}>
            <div className={styles.heroNav}>
              <nav aria-label="دسترسی سریع به بخش‌های رفع باگ">
                {sectionLinks.map(({ href, label }) => (
                  <Link href={href} key={href}>
                    {label}
                  </Link>
                ))}
              </nav>
              <Link className={styles.back} href="/services">
                <ArrowRight size={17} aria-hidden="true" />
                همه خدمات
              </Link>
            </div>
            <div className={styles.heroLayout}>
              <div className={styles.heroIntro}>
                <h1>
                  <span>{copy.hero.titleStart}</span>{" "}
                  <span>{copy.hero.titleEnd}</span>
                </h1>
                <p className={styles.lead}>{copy.hero.lead}</p>
                <p>{copy.hero.intro}</p>
                <div className={styles.actions}>
                  <InquiryLink>{copy.hero.primary}</InquiryLink>
                  <a data-secondary-action href="#rescue-findings">
                    {copy.hero.secondary}
                  </a>
                </div>
              </div>
              <div className={styles.heroVisual}>
                <div className={styles.heroFrame}>
                  <Image
                    className={styles.heroPhoto}
                    src="/brand/project-rescue/hero-code-desk.webp"
                    alt="لپ‌تاپ با ویرایشگر کد روی میز کار"
                    fill
                    sizes="(max-width: 820px) 92vw, (max-width: 1560px) 48vw, 740px"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </header>

          <section
            className={styles.situations}
            id="rescue-signs"
            aria-labelledby="rescue-situations-title"
          >
            <h2 className="sr-only" id="rescue-situations-title">
              {copy.situations.title}
            </h2>
            <div className={styles.situationGrid}>
              {copy.situations.items.map(({ title, description, target }, index) => {
                const Icon = situationIcons[index];
                return (
                  <a className={styles.situation} key={target} href={`#${target}`}>
                    <span className={styles.situationIcon}>
                      <Icon aria-hidden="true" />
                    </span>
                    <div className={styles.situationCopy}>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </section>
        </div>
      </div>

      <div className={styles.container}>
        <Section id="rescue-findings" title={copy.services.title}>
          <div className={styles.serviceGrid}>
            {copy.services.items.map(
              ({ id, title, summary, highlights, image }) => (
                <article className={styles.service} key={id} id={id}>
                  <div className={styles.cardImage}>
                    <Image src={image} alt="" fill sizes={serviceImageSizes} />
                  </div>
                  <div className={styles.serviceBody}>
                    <div className={styles.serviceCopy}>
                      <h3>{title}</h3>
                      <p>{summary}</p>
                    </div>
                    <ul className={styles.serviceHighlights} role="list">
                      {highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ),
            )}
          </div>
          {wordpress && (
            <div className={styles.specialty}>
              <h3 id="specialty-services-title">خدمات تخصصی این بخش</h3>
              <Link
                className={styles.textLink}
                href={`/services/${wordpress.slug}`}
              >
                {wordpress.title}
                <ArrowUpLeft size={16} aria-hidden="true" />
              </Link>
            </div>
          )}
        </Section>

        <Section id="rescue-incident" title={copy.process.title}>
          <div className={styles.processFeature}>
            <div className={styles.photoBanner}>
              <Image
                src="/brand/project-rescue/process-workspace.webp"
                alt="فضای کار روشن با میزهای مجهز به مانیتور کنار پنجره"
                fill
                sizes="(max-width: 760px) 92vw, (max-width: 1320px) 48vw, 630px"
              />
            </div>
            <ol className={styles.timeline} role="list">
              {copy.process.items.map(({ title, text }, index) => {
                const Icon = processIcons[index];
                return (
                  <li key={title}>
                    <span className={styles.situationIcon}>
                      <Icon size={21} aria-hidden="true" />
                    </span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </Section>

        <section
          className={`${styles.section} ${styles.estimate}`}
          id="rescue-checklist"
          aria-labelledby="rescue-checklist-title"
        >
          <header className={styles.estimateHead}>
            <div>
              <h2 id="rescue-checklist-title">شروع بررسی و برآورد هزینه</h2>
              <p>
                مشکل پروژه‌ات رو برامون بفرست تا بعد از بررسی اولیه، محدوده کار و
                برآورد هزینه رو بهت اعلام کنیم.
              </p>
            </div>
            <div className={styles.estimateArt}>
              <Image
                src="/brand/project-rescue/estimate-checklist.webp"
                alt=""
                fill
                sizes="(max-width: 620px) calc(100vw - 36px), (max-width: 920px) 40vw, 440px"
              />
            </div>
          </header>
          <div className={styles.inquiryGrid}>
            {[
              {
                id: "rescue-intake",
                icon: ClipboardCheck,
                rowIcons: [Laptop, TriangleAlert, CalendarDays],
                ...copy.gettingStarted,
              },
              {
                id: "rescue-cost",
                icon: Calculator,
                rowIcons: [Layers3, Laptop, Users],
                ...copy.cost,
              },
            ].map(({ id, icon: Icon, title, summary, items, action, rowIcons }) => (
              <article className={styles.inquiryCard} id={id} key={id}>
                <div className={styles.inquiryHeading}>
                  <span className={styles.inquiryIcon}>
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{summary}</p>
                  </div>
                </div>
                <dl className={styles.inquiryList}>
                  {items.map(({ label, value }, index) => {
                    const RowIcon = rowIcons[index];

                    return (
                      <div key={label}>
                        <dt>
                          <span className={styles.inquiryListIcon}>
                            <RowIcon size={17} aria-hidden="true" />
                          </span>
                          {label}
                        </dt>
                        <dd>{value}</dd>
                      </div>
                    );
                  })}
                </dl>
                <InquiryLink>{action}</InquiryLink>
              </article>
            ))}
          </div>
          <div className={styles.inquiryNotes}>
            <article className={styles.inquiryNote} id="rescue-rebuild">
              <span className={styles.inquiryIcon}>
                <RefreshCw size={22} aria-hidden="true" />
              </span>
              <div>
                <h3>{copy.rebuild.title}</h3>
                <p>{copy.rebuild.summary}</p>
              </div>
            </article>
            <article
              className={`${styles.inquiryNote} ${styles.inquiryUrgent}`}
              id="rescue-urgent"
            >
              <span className={styles.inquiryIcon}>
                <Zap size={22} aria-hidden="true" />
              </span>
              <div>
                <h3>{copy.urgent.title}</h3>
                <p>{copy.urgent.summary}</p>
              </div>
              <InquiryLink urgent>{copy.urgent.action}</InquiryLink>
            </article>
          </div>
        </section>

        <Section id="rescue-faq" title={copy.faq.title}>
          <div className={styles.faq}>
            {copy.faq.items.map(({ question, answer }) => (
              <div key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </div>
            ))}
          </div>
        </Section>

        <section
          className={styles.closing}
          id="rescue-work"
          aria-labelledby="rescue-closing-title"
          data-closing-banner="standard"
        >
          <div className={styles.closingCopy} data-action-banner="quiet">
            <h2 id="rescue-closing-title">{copy.closing.title}</h2>
            <p>بگو پروژه الان کجاست و دوست داری به چه نتیجه‌ای برسی.</p>
            <div className={styles.actions}>
              <InquiryLink>{copy.closing.primary}</InquiryLink>
              <Link data-secondary-action href="/work">
                {copy.work.action}
              </Link>
            </div>
            <ActionBannerArt />
          </div>
          <div className={styles.closingPhoto}>
            <Image
              src="/brand/project-rescue/consultation-room.webp"
              alt="میز جلسه کنار پنجره‌های یک دفتر روشن"
              fill
              sizes="(max-width: 760px) 48vw, 400px"
            />
          </div>
        </section>

        <nav
          className={styles.related}
          id="rescue-related"
          aria-labelledby="rescue-related-title"
        >
          <span className={styles.relatedLabel} id="rescue-related-title">
            خدمات مرتبط
          </span>
          <ul role="list">
            {copy.related.items.map(({ title, href }) => (
              <li key={href}>
                <Link href={href}>
                  {title}
                  <ArrowUpLeft size={12} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
