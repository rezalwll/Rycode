import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpLeft,
  Calculator,
  ClipboardCheck,
  PackageCheck,
  Search,
  ShieldCheck,
} from "lucide-react";
import { lookupContent } from "@/server/content";
import { rescueCopy as copy } from "./rescue-copy";
import styles from "./ProjectRescuePage.module.css";

const inquiryHref = "/contact?service=rescue#project-inquiry";
const processIcons = [Search, ShieldCheck, PackageCheck];
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
      <div className={styles.container}>
        <header className={styles.hero}>
          <Link className={styles.back} href="/services">
            <ArrowRight size={16} aria-hidden="true" />
            همهٔ خدمات
          </Link>
          <div className={styles.heroHeading}>
            <h1>{copy.hero.title}</h1>
            <div className={styles.heroIntro}>
              <p className={styles.lead}>{copy.hero.lead}</p>
              <p>{copy.hero.intro}</p>
              <div className={styles.actions}>
                <InquiryLink>{copy.hero.primary}</InquiryLink>
                <a className={styles.secondary} href="#rescue-findings">
                  {copy.hero.secondary}
                  <ArrowDown size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <Image
            className={styles.heroPhoto}
            src="/brand/project-rescue/code-workspace.webp"
            alt="لپ‌تاپ با ویرایشگر کد روی میز کار"
            width={1680}
            height={760}
            sizes="(max-width: 1320px) 94vw, 1240px"
            fetchPriority="high"
          />
        </header>

        <section
          className={styles.situations}
          id="rescue-signs"
          aria-labelledby="rescue-situations-title"
        >
          <header className={styles.situationHeader}>
            <div className={styles.sectionHeading}>
              <h2 id="rescue-situations-title">{copy.situations.title}</h2>
              <p>{copy.situations.subtitle}</p>
            </div>
            <Link className={styles.textLink} href={inquiryHref}>
              {copy.situations.action}
              <ArrowUpLeft size={16} aria-hidden="true" />
            </Link>
          </header>
          <div className={styles.situationGrid}>
            {copy.situations.items.map(({ title, description, target }) => (
              <a className={styles.situation} key={target} href={`#${target}`}>
                <div className={styles.situationCopy}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <span className={styles.situationArrow}>
                  <ArrowDown size={17} aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </section>

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

        <Section id="rescue-checklist" title="شروع بررسی و برآورد هزینه">
          <div className={styles.inquiryGrid}>
            {[
              {
                id: "rescue-intake",
                icon: ClipboardCheck,
                ...copy.gettingStarted,
              },
              { id: "rescue-cost", icon: Calculator, ...copy.cost },
            ].map(({ id, icon: Icon, title, summary, items, action }) => (
              <article className={styles.inquiryCard} id={id} key={id}>
                <span className={styles.inquiryIcon}>
                  <Icon size={24} aria-hidden="true" />
                </span>
                <div className={styles.inquiryHeading}>
                  <h3>{title}</h3>
                  <p>{summary}</p>
                </div>
                <dl className={styles.inquiryList}>
                  {items.map(({ label, value }) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
                <InquiryLink>{action}</InquiryLink>
              </article>
            ))}
          </div>
          <div className={styles.inquiryNotes}>
            <div id="rescue-rebuild">
              <h3>{copy.rebuild.title}</h3>
              <p>{copy.rebuild.summary}</p>
            </div>
            <div id="rescue-urgent">
              <h3>{copy.urgent.title}</h3>
              <p>{copy.urgent.summary}</p>
              <InquiryLink urgent>{copy.urgent.action}</InquiryLink>
            </div>
          </div>
        </Section>

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

        <Section id="rescue-related" title="خدمات مرتبط">
          <div className={styles.related}>
            {copy.related.items.map(({ title, href }) => (
              <Link key={href} href={href}>
                {title}
                <ArrowUpLeft size={16} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </Section>

        <section
          className={styles.closing}
          id="rescue-work"
          aria-labelledby="rescue-closing-title"
        >
          <div className={styles.closingCopy}>
            <h2 id="rescue-closing-title">{copy.closing.title}</h2>
            <p>بگو پروژه الان کجاست و دوست داری به چه نتیجه‌ای برسی.</p>
            <div className={styles.actions}>
              <InquiryLink>{copy.closing.primary}</InquiryLink>
              <Link className={styles.secondary} href="/work">
                {copy.work.action}
                <ArrowUpLeft size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className={styles.closingPhoto}>
            <Image
              src="/brand/project-rescue/consultation-room.webp"
              alt="میز جلسه کنار پنجره‌های یک دفتر روشن"
              fill
              sizes="(max-width: 760px) calc(100vw - 36px), (max-width: 1320px) 40vw, 510px"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
