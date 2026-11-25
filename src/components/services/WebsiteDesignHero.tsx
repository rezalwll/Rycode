import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CirclePlay,
  CodeXml,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { localizedHref, type Locale } from "@/lib/i18n";
import { websiteDesignHeroCopy } from "./website-design-copy";
import styles from "./WebsiteDesignHero.module.css";

const featureIcons = [MonitorSmartphone, ShieldCheck, Rocket] as const;

export function WebsiteDesignHero({
  locale,
  inquiryHref,
  secondaryHref,
}: {
  locale: Locale;
  inquiryHref: string;
  secondaryHref: string;
}) {
  const copy = websiteDesignHeroCopy[locale];
  const rtl = locale === "fa";
  const Arrow = rtl ? ArrowLeft : ArrowRight;

  return (
    <section
      className={styles.hero}
      aria-labelledby="website-title"
      dir={rtl ? "rtl" : "ltr"}
    >
      <svg
        className={styles.curves}
        viewBox="0 0 1820 780"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className={styles.corner}
          d="M0 0H242C215 52 191 63 146 100C83 153 39 196 0 239Z"
        />
        <path
          className={styles.arc}
          d="M-5 601C54 406 184 329 306 190S517 28 605 12"
        />
        <path
          className={styles.wave}
          d="M846 787C1067 724 1204 713 1340 721S1674 742 1820 587V787Z"
        />
      </svg>
      <div className={styles.layout}>
        <div className={styles.copy}>
          <Link href={localizedHref("/services", locale)} className={styles.back}>
            {copy.back} <Arrow size={18} aria-hidden="true" />
          </Link>
          <h1 className={styles.title} id="website-title">
            <span>{copy.titleStart}</span>{" "}
            <span className={styles.titleAccent}>{copy.titleEnd}</span>
          </h1>
          <p className={styles.lead}>{copy.subtitle}</p>
          <p className={styles.description}>{copy.description}</p>
          <ul className={styles.features} role="list">
            {copy.features.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <li key={feature}>
                  <span className={styles.featureIcon}>
                    <Icon size={30} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  {feature}
                </li>
              );
            })}
          </ul>
          <div className={styles.actions}>
            <Link href={inquiryHref} className={styles.primary}>
              {copy.primary} <Arrow size={19} aria-hidden="true" />
            </Link>
            <a href={secondaryHref} className={styles.secondary}>
              <CirclePlay size={25} strokeWidth={1.5} aria-hidden="true" />
              {copy.secondary}
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <span className={styles.shape} aria-hidden="true" />
          <span className={styles.platform} aria-hidden="true" />
          <Image
            className={styles.devices}
            src="/brand/website-design/hero-devices.webp"
            alt={copy.artworkAlt}
            width={829}
            height={558}
            sizes="(max-width: 630px) calc(100vw - 40px), (max-width: 900px) 590px, (max-width: 1800px) 53vw, 900px"
            fetchPriority="high"
            loading="eager"
          />
          <span className={styles.codeCard} aria-hidden="true">
            <CodeXml strokeWidth={1.9} />
          </span>
        </div>
      </div>
    </section>
  );
}
