import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ActionBannerArt } from "@/components/content/ActionBannerArt";
import { Reveal } from "@/components/Motion";
import { ServiceArtwork } from "@/components/services/ServiceArtwork";
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
  title,
  description,
}: {
  id: string;
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
            <Reveal duration={700} initialOpacity={0.55}>
              <h1>
                {copy.headline[0]} <em>{copy.headline[1]}</em>
              </h1>
              <p className={styles.heroDescription}>{copy.intro}</p>
              <div className={styles.actions}>
                <Link
                  data-fill-button
                  className={styles.button}
                  href={href("/contact")}
                >
                  {copy.contact}
                  <ArrowUpRight
                    size={16}
                    className={styles.arrow}
                    aria-hidden="true"
                  />
                </Link>
                <Link data-secondary-action href={href("/services")}>
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
                sizes="(max-width: 700px) calc(100vw - 32px), (max-width: 1200px) 44vw, 510px"
              />
            </div>
            <a className={styles.galleryNote} href="#approach">
              <span>{copy.photoNote}</span>
            </a>
          </div>
        </header>

        <section
          className={`${styles.section} ${styles.identity}`}
          aria-labelledby="about-identity"
        >
          <div>
            <SectionHeading
              id="about-identity"
              title={copy.identity.title}
            />
            <div className={styles.identityCopy}>
              {copy.identity.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className={`${styles.photo} ${styles.detailPhoto}`}>
            <Image
              src="/brand/project-rescue/code-workspace.webp"
              alt={copy.photoAlts[1]}
              fill
              sizes="(max-width: 700px) calc(100vw - 32px), (max-width: 1200px) 36vw, 430px"
            />
          </div>
        </section>

        <section
          className={styles.section}
          id="approach"
          aria-labelledby="about-principles"
        >
          <SectionHeading
            id="about-principles"
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
            title={copy.capabilities.title}
          />
          <ul className={styles.capabilities}>
            {capabilityLinks.map(({ image, path }, index) => {
              const [title, description] = copy.capabilities.items[index];
              return (
                <li key={path}>
                  <Link href={href(path)} className={styles.capability}>
                    <ServiceArtwork
                      src={image}
                      className={styles.capabilityPhoto}
                      sizes="(max-width: 560px) 94vw, (max-width: 900px) 46vw, (max-width: 1200px) 23vw, 275px"
                    />
                    <div className={styles.capabilityCopy}>
                      <h3>{title}</h3>
                      <p>{description}</p>
                      <span className={styles.linkIcon} aria-hidden="true">
                        <ArrowUpRight className={styles.arrow} size={16} />
                      </span>
                    </div>
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

        <section
          id="next-step"
          className={styles.closing}
          aria-labelledby="about-closing"
          data-action-banner="centered"
          data-closing-banner="standard"
        >
          <div className={styles.closingBody}>
            <SectionHeading
              id="about-closing"
              title={copy.closing.title}
              description={copy.closing.description}
            />
            <div className={styles.closingActions}>
              <Link
                data-fill-button
                className={styles.button}
                href={href("/contact")}
              >
                {copy.closing.action}
                <ArrowUpRight
                  size={16}
                  className={styles.arrow}
                  aria-hidden="true"
                />
              </Link>
              <Link data-secondary-action href={href("/services")}>
                {copy.services}
              </Link>
            </div>
          </div>
          <ActionBannerArt />
        </section>
      </div>
    </main>
  );
}
