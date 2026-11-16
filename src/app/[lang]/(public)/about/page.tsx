import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Motion";
import { getTranslations } from "@/lib/i18n-server";
import { pageMetadata } from "@/lib/seo";
import { aboutCopy, capabilityLinks } from "./copy";
import styles from "./about.module.css";

export async function generateMetadata() {
  const { locale } = await getTranslations();
  const { title, identity } = aboutCopy[locale];
  return pageMetadata({
    path: "/about",
    locale,
    title,
    description: identity.description[0],
  });
}

function SectionHeading({
  id,
  label,
  title,
  description,
}: {
  id: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal
      className={styles.heading}
      as="header"
      duration={650}
      initialOpacity={0.55}
    >
      <p className={styles.label}>{label}</p>
      <div>
        <h2 id={id}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </Reveal>
  );
}

export default async function AboutPage() {
  const { locale, href } = await getTranslations();
  const copy = aboutCopy[locale];
  const formatNumber = new Intl.NumberFormat(locale === "fa" ? "fa-IR" : "en", {
    minimumIntegerDigits: 2,
  });

  return (
    <main className={styles.page} dir={locale === "fa" ? "rtl" : "ltr"}>
      <div className={styles.shell}>
        <header className={styles.hero}>
          <div className={styles.heroIntro}>
            <div>
              <p className={styles.label}>{copy.title}</p>
              <p className={styles.tagline} lang="en" dir="ltr">
                BUILD. FIX. GROW.
              </p>
            </div>
            <Reveal duration={700} initialOpacity={0.55}>
              <h1>
                {copy.headline[0]} <em>{copy.headline[1]}</em>
              </h1>
              <p className={styles.heroDescription}>{copy.intro}</p>
              <div className={styles.actions}>
                <Link
                  className={styles.button}
                  href={href("/contact#project-inquiry")}
                >
                  {copy.contact}
                  <ArrowUpRight
                    size={16}
                    className={styles.arrow}
                    aria-hidden="true"
                  />
                </Link>
                <Link className={styles.textLink} href={href("/services")}>
                  {copy.services}
                </Link>
              </div>
            </Reveal>
          </div>

          <div className={styles.gallery}>
            <div className={`${styles.photo} ${styles.mainPhoto}`}>
              <Image
                src="/brand/software-service/web-workspace.webp"
                alt={copy.photoAlts[0]}
                fill
                fetchPriority="high"
                sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1520px) 64vw, 960px"
              />
            </div>
            <div className={styles.gallerySide}>
              <div className={`${styles.photo} ${styles.detailPhoto}`}>
                <Image
                  src="/brand/project-rescue/code-workspace.webp"
                  alt={copy.photoAlts[1]}
                  fill
                  sizes="(max-width: 640px) 48vw, (max-width: 1520px) 32vw, 480px"
                />
              </div>
              <a className={styles.galleryNote} href="#approach">
                <span>{copy.photoNote}</span>
                <ArrowDown size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </header>

        <section className={styles.section} aria-labelledby="about-identity">
          <SectionHeading
            id="about-identity"
            label={copy.identity.label}
            title={copy.identity.title}
          />
          <div className={styles.identityCopy}>
            {copy.identity.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section
          className={styles.section}
          id="approach"
          aria-labelledby="about-principles"
        >
          <SectionHeading
            id="about-principles"
            label={copy.principles.label}
            title={copy.principles.title}
          />
          <ul className={styles.principles}>
            {copy.principles.items.map(([title, description]) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className={styles.section}
          aria-labelledby="about-capabilities"
        >
          <SectionHeading
            id="about-capabilities"
            label={copy.capabilities.label}
            title={copy.capabilities.title}
          />
          <ul className={styles.capabilities}>
            {capabilityLinks.map(({ label, path }, index) => {
              const [title, description] = copy.capabilities.items[index];
              return (
                <li key={label}>
                  <Link href={href(path)} className={styles.capability}>
                    <span className={styles.capabilityLabel} lang="en">
                      {label}
                    </span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <span className={styles.linkIcon} aria-hidden="true">
                      <ArrowUpRight className={styles.arrow} size={20} />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section
          className={styles.section}
          id="process"
          aria-labelledby="about-process"
        >
          <SectionHeading
            id="about-process"
            label={copy.process.label}
            title={copy.process.title}
          />
          <ol className={styles.steps}>
            {copy.process.items.map(([title, description], index) => (
              <li key={title}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {formatNumber.format(index + 1)}
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.section} aria-labelledby="about-fit">
          <SectionHeading
            id="about-fit"
            label={copy.fit.label}
            title={copy.fit.title}
            description={copy.fit.description}
          />
          <ul className={styles.audiences}>
            {copy.fit.items.map(([title, description]) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.closing} aria-labelledby="about-closing">
          <SectionHeading
            id="about-closing"
            label={copy.closing.label}
            title={copy.closing.title}
            description={copy.closing.description}
          />
          <div className={styles.closingActions}>
            <Link
              className={styles.button}
              href={href("/contact#project-inquiry")}
            >
              {copy.closing.action}
              <ArrowUpRight
                size={16}
                className={styles.arrow}
                aria-hidden="true"
              />
            </Link>
            <Link className={styles.textLink} href={href("/services")}>
              {copy.services}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
