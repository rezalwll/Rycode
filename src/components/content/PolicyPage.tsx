import {
  ChartNoAxesCombined,
  Database,
  ExternalLink,
  FilePenLine,
  Inbox,
  ListChecks,
  MessagesSquare,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { policies, type PolicyKind } from "@/content/policies";
import { getTranslations } from "@/lib/i18n-server";
import { lookupContent } from "@/server/content";
import { ActionBannerArt } from "./ActionBannerArt";
import { ContentDetail } from "./ContentDetail";
import styles from "./PolicyPage.module.css";

const privacyIcons: Partial<Record<string, LucideIcon>> = {
  inquiries: Inbox,
  comments: MessagesSquare,
  analytics: ChartNoAxesCombined,
  storage: Database,
  "external-services": ExternalLink,
  "data-requests": FilePenLine,
};

function PrivacyOverview({ fa }: { fa: boolean }) {
  const links = [
    { id: "inquiries", label: fa ? "فرم تماس" : "Contact forms", icon: Inbox },
    {
      id: "comments",
      label: fa ? "دیدگاه‌های بلاگ" : "Blog comments",
      icon: MessagesSquare,
    },
    {
      id: "analytics",
      label: fa ? "آمار سایت" : "Website analytics",
      icon: ChartNoAxesCombined,
    },
  ];

  return (
    <nav
      className={styles.dataMap}
      aria-label={
        fa ? "انواع اطلاعات ثبت‌شده" : "Types of information collected"
      }
    >
      <ul>
        {links.map(({ id, label, icon: Icon }) => (
          <li key={id}>
            <a href={`#${id}`}>
              <Icon size={18} aria-hidden="true" />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.dataHub} aria-hidden="true">
        <div className={styles.hubIcon}>
          <ShieldCheck strokeWidth={1.25} />
        </div>
      </div>
    </nav>
  );
}

function ProjectSteps({ fa }: { fa: boolean }) {
  const steps = [
    {
      icon: Inbox,
      title: fa ? "ثبت درخواست" : "Send an inquiry",
      summary: fa
        ? "نیاز پروژه و راه ارتباطی‌تان را می‌فرستید."
        : "Share what you need and how to reach you.",
    },
    {
      icon: ListChecks,
      title: fa ? "بررسی نیاز" : "Review the scope",
      summary: fa
        ? "جزئیات فنی، هزینه و زمان‌بندی بررسی می‌شود."
        : "Review technical details, pricing and timing.",
    },
    {
      icon: FilePenLine,
      title: fa ? "توافق پروژه" : "Agree on the work",
      summary: fa
        ? "تحویل، پرداخت و پشتیبانی در توافق مشخص می‌شوند."
        : "Set deliverables, payment and support in the agreement.",
    },
  ];

  return (
    <ol
      className={styles.steps}
      aria-label={fa ? "مسیر شروع همکاری" : "How a project starts"}
    >
      {steps.map(({ icon: Icon, title, summary }) => (
        <li key={title}>
          <Icon size={21} aria-hidden="true" />
          <div>
            <strong>{title}</strong>
            <p>{summary}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export async function PolicyPage({ kind }: { kind: PolicyKind }) {
  const { locale, href } = await getTranslations();
  const { owned, content } = await lookupContent("PAGE", kind, locale);
  if (owned && !content) notFound();
  if (content) return <ContentDetail content={content} locale={locale} />;

  const fa = locale === "fa";
  const privacy = kind === "privacy";
  const copy = policies[kind][locale];
  const related = privacy ? "terms" : "privacy";

  return (
    <main className={styles.page} data-policy={kind}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <h1>{copy.title}</h1>
            <p>{copy.introduction}</p>
            <a
              href={privacy ? "#data-requests" : "#project-request"}
              className={styles.heroLink}
            >
              {privacy
                ? fa
                  ? "پیگیری اطلاعات ارسالی"
                  : "Manage your information"
                : fa
                  ? "مشاهده شرایط شروع همکاری"
                  : "Read the project terms"}
            </a>
          </div>
          {privacy ? <PrivacyOverview fa={fa} /> : <ProjectSteps fa={fa} />}
        </header>

        <article className={styles.document}>
          {copy.sections.map(({ id, title, paragraphs }) => {
            const Icon = privacy ? privacyIcons[id] : undefined;
            return (
              <section
                key={id}
                id={id}
                data-topic={id}
                className={styles.topic}
                aria-labelledby={`${id}-title`}
              >
                {Icon && (
                  <div className={styles.topicIcon} aria-hidden="true">
                    <Icon size={20} />
                  </div>
                )}
                <h2 id={`${id}-title`}>{title}</h2>
                <div>
                  {paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            );
          })}
        </article>

        <section
          className={styles.contact}
          aria-labelledby="policy-contact"
          data-action-banner="quiet"
          data-banner-layout="side"
        >
          <div>
            <h2 id="policy-contact">{copy.contactTitle}</h2>
            <p>{copy.contactDescription}</p>
          </div>
          <div className={styles.actions}>
            <Link href={href("/contact")} data-fill-button>
              {fa ? "تماس با ما" : "Contact us"}
            </Link>
            <Link href={href(`/${related}`)} data-secondary-action>
              {policies[related][locale].title}
            </Link>
          </div>
          <ActionBannerArt />
        </section>
      </div>
    </main>
  );
}
