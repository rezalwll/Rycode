import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/content/services";
import { localizedHref, type Locale } from "@/lib/i18n";
import styles from "./ServicesOverview.module.css";

export function ServicesOverview({
  services,
  locale,
}: {
  services: Service[];
  locale: Locale;
}) {
  const fa = locale === "fa";
  const href = (path: string) => localizedHref(path, locale);
  const heroArt = services[0]?.artwork || services[0]?.image;
  const arrow = fa ? "↖" : "↗";
  return (
    <main className={`${styles.page} ${styles.atlasPage}`}>
      <section className={styles.hero} aria-labelledby="services-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>
            <span aria-hidden="true">✦</span>
            {fa ? "خدمات رایکد" : "WHAT WE DO"}
          </p>
          <h1 id="services-title">
            {fa ? (
              <>
                از ایده،
                <br />
                تا یک قدم <em>جلوتر</em>
              </>
            ) : (
              <>
                Good ideas.
                <br />
                <span>Built to go</span> <em>further.</em>
              </>
            )}
          </h1>
          <p className={styles.intro}>
            {fa
              ? "برای هر مسئله، یک راه‌حل درست. از طراحی و توسعه تا خودکارسازی و رشد، کنارت هستیم تا ایده‌ات به چیزی تبدیل شود که کار می‌کند"
              : "The right solution for the challenge ahead. From design and development to automation and growth, we turn your idea into something that works."}
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.button} href={href("/contact")}>
              <span>
                {fa ? "دربارهٔ پروژه‌ات بگو" : "Tell us about your project"}
              </span>
              <span className={styles.buttonArrow} aria-hidden="true">
                {arrow}
              </span>
            </Link>
            <a className={styles.textLink} href="#services-list">
              {fa ? "کشف خدمات" : "Explore services"}
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        {heroArt && (
          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.orbit} />
            <Image
              src={heroArt}
              alt=""
              fill
              sizes="(max-width: 767px) 90vw, 500px"
              loading="eager"
              fetchPriority="high"
              className={styles.heroImage}
            />
            <span className={styles.visualDot} />
          </div>
        )}
      </section>
      <section
        className={styles.services}
        id="services-list"
        aria-labelledby="service-list-title"
      >
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>
            <span aria-hidden="true">✦</span>
            {fa ? "راه‌حل‌های ما" : "OUR EXPERTISE"}
          </p>
          <h2 id="service-list-title">
            {fa ? "از کجا شروع کنیم؟" : "Where do we start?"}
          </h2>
        </div>
        <div className={styles.rows}>
          {services.map((service, index) => (
            <article key={service.id} id={"service-" + service.id}>
              <Link
                className={styles.row}
                data-service-card={service.id}
                href={href("/services/" + service.id)}
              >
                <div className={styles.serviceTitle}>
                  <span className={styles.number}>
                    {(index + 1).toLocaleString(locale, {
                      minimumIntegerDigits: 2,
                    })}
                    <span aria-hidden="true"> /</span>
                  </span>
                  <h3>{service.title[locale]}</h3>
                </div>
                <div className={styles.serviceCopy}>
                  <p>{service.summary[locale]}</p>
                  <ul
                    className={styles.tags}
                    aria-label={fa ? "حوزه‌های خدمت" : "Service capabilities"}
                  >
                    {service.tags.map((tag, i) => (
                      <li key={i}>{tag[locale]}</li>
                    ))}
                  </ul>
                  <span className={styles.detailLabel}>
                    {fa ? "بیشتر دربارهٔ این خدمت" : "Explore this service"}
                    <span className={styles.detailArrow} aria-hidden="true">
                      {arrow}
                    </span>
                  </span>
                </div>
                <div className={styles.artwork}>
                  <Image
                    src={service.artwork || service.image}
                    alt={service.title[locale]}
                    fill
                    sizes="(max-width: 767px) 90vw, (max-width: 1199px) 38vw, 350px"
                    className={styles.serviceImage}
                  />
                  <span className={styles.artworkLabel} aria-hidden="true">
                    RYCODE / {(index + 1).toString().padStart(2, "0")}
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section
        className={styles.closing}
        aria-labelledby="services-contact-title"
      >
        <div className={styles.closingInner}>
          <p className={styles.eyebrow}>
            <span aria-hidden="true">✦</span>
            {fa ? "قدم بعدی" : "YOUR NEXT MOVE"}
          </p>
          <h2 id="services-contact-title">
            {fa ? (
              <>
                مسیرت هنوز
                <br />
                مشخص نیست؟
              </>
            ) : (
              <>
                Not sure where
                <br />
                to begin?
              </>
            )}
          </h2>
          <div className={styles.closingAction}>
            <p>
              {fa
                ? "از مسئله‌ات بگو؛ با هم نقطهٔ شروع درست را پیدا می‌کنیم"
                : "Tell us what you’re working through. We’ll find the right starting point together."}
            </p>
            <Link className={styles.button} href={href("/contact")}>
              <span>{fa ? "بیایید صحبت کنیم" : "Let’s talk it through"}</span>
              <span className={styles.buttonArrow} aria-hidden="true">
                {arrow}
              </span>
            </Link>
          </div>
          <span className={styles.watermark} aria-hidden="true">
            RYCODE
          </span>
        </div>
      </section>
    </main>
  );
}
