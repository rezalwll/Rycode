import Image from "next/image";
import Link from "next/link";
import { ActionBannerArt } from "@/components/content/ActionBannerArt";
import { serviceCards } from "@/content/service-cards";
import type { Service } from "@/content/services";
import { localizedHref, type Locale } from "@/lib/i18n";
import { canonicalServiceId } from "@/lib/service-routes";
import { ServiceArtwork } from "./ServiceArtwork";
import {
  ChannelCapabilities,
  ChannelProcess,
  ChannelReveals,
} from "./ChannelServicesMotion";
import styles from "./ChannelServicesPage.module.css";

function SectionHeading({
  title,
  note,
  id,
}: {
  title: string;
  note?: string;
  id: string;
}) {
  return (
    <div className={styles.sectionHeading} data-channel-reveal="rise">
      <div>
        <h2 className={styles.sectionTitle} id={id}>
          {title}
        </h2>
      </div>
      {note && <p className={styles.headingNote}>{note}</p>}
    </div>
  );
}

export function ChannelServicesPage({
  locale,
  services,
}: {
  locale: Locale;
  services: Service[];
}) {
  const fa = locale === "fa";
  const href = (path: string) => localizedHref(path, locale);
  const format = (index: number, digits: number) =>
    new Intl.NumberFormat(locale, {
      minimumIntegerDigits: digits,
      useGrouping: false,
    }).format(index + 1);
  const items = services.map((service, index) => {
    const categoryId = canonicalServiceId(service.id);
    const homeCard = serviceCards.find((card) => card.categoryId === categoryId);
    return {
      id: service.id,
      title: service.title[locale],
      summary: service.summary[locale],
      tags: service.tags.map((tag) => tag[locale]),
      image: homeCard?.image || service.artwork || service.image,
      href: href("/services/" + service.id),
      number: format(index, 3),
    };
  });
  const detailLabel = fa ? "جزئیات خدمت" : "Service details";
  const contactLabel = fa
    ? "درباره پروژه‌ات بگو"
    : "Tell us about your project";

  return (
    <main
      id="channel-services"
      className={styles.page}
      lang={locale}
      dir={fa ? "rtl" : "ltr"}
    >
      <section className={styles.hero} aria-labelledby="channel-title">
        <div className={`${styles.inner} ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <h1 className={styles.heroTitle} id="channel-title">
              <span>{fa ? "از ایده،" : "Good ideas."}</span>
              <br />
              {fa ? "تا یک قدم جلوتر" : "Built to go further."}
            </h1>
            <p className={styles.heroNote}>
              {fa
                ? "برای هر مسئله، یک راه‌حل درست. از طراحی و توسعه تا خودکارسازی و رشد، کنارت هستیم تا ایده‌ات به چیزی تبدیل شود که کار می‌کند."
                : "The right solution for the challenge ahead. From design and development to automation and growth, we turn your idea into something that works."}
            </p>
            <div className={styles.heroActions}>
              <Link data-fill-button href={href("/contact")}>
                {contactLabel}
              </Link>
              {items.length > 0 && (
                <a data-secondary-action href="#services-list">
                  {fa ? "کشف خدمات" : "Explore services"}
                </a>
              )}
            </div>
          </div>
          <div className={styles.heroArt}>
            <Image
              src="/brand/channel-services/hero-workspace.webp"
              alt=""
              fill
              sizes="(max-width: 700px) 94vw, (max-width: 1500px) 54vw, 770px"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>
      {items.length > 0 && (
        <>
          <section
            className={styles.capabilitySection}
            aria-labelledby="channel-capability-title"
          >
            <div className={styles.capabilityPanel}>
              <div className={styles.inner}>
                <SectionHeading
                  title={fa ? "از کجا شروع کنیم؟" : "Where do we start?"}
                  note={
                    fa
                      ? "هر خدمت را انتخاب کن تا بیشتر درباره‌اش ببینی."
                      : "Choose a service to see what it includes."
                  }
                  id="channel-capability-title"
                />
                <ChannelCapabilities
                  services={items}
                  detailLabel={detailLabel}
                />
              </div>
            </div>
          </section>
          <section
            className={styles.details}
            id="services-list"
            aria-labelledby="channel-details-title"
          >
            <div className={styles.inner}>
              <SectionHeading
                title={
                  fa
                    ? "هر خدمت چه چیزهایی را پوشش می‌دهد؟"
                    : "What each service includes"
                }
                id="channel-details-title"
              />
              <div className={styles.detailRows}>
                {services.map((service, index) => {
                  const item = items[index]!;
                  return (
                    <article
                      key={item.id}
                      id={`service-${item.id}`}
                      className={styles.detailRow}
                      data-channel-reveal="rise"
                    >
                      <span className={styles.detailIndex} aria-hidden="true">
                        {format(index, 2)}
                      </span>
                      <div className={styles.detailCopy}>
                        <h3 className={styles.detailTitle}>{item.title}</h3>
                        <p>{service.scope[locale]}</p>
                        {item.tags.length > 0 && (
                          <span className={styles.detailTags}>
                            {item.tags.join(" · ")}
                          </span>
                        )}
                        <Link
                          data-fill-button
                          data-service-card={item.id}
                          href={item.href}
                          aria-label={`${detailLabel}: ${item.title}`}
                        >
                          {detailLabel}
                        </Link>
                      </div>
                      <ServiceArtwork
                        src={item.image}
                        className={styles.detailMedia}
                        sizes="(max-width: 809px) calc(100vw - 74px), (max-width: 979px) calc(100vw - 86px), (max-width: 1300px) 36vw, 440px"
                        framing="card"
                      />
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}
      <section
        className={styles.process}
        aria-labelledby="channel-process-title"
      >
        <div className={styles.inner}>
          <SectionHeading
            title={fa ? "پروژه چطور پیش می‌رود؟" : "How a project runs"}
            note={
              fa
                ? "از شناخت نیاز تا تحویل پروژه و پشتیبانی پس از آن."
                : "From discussing requirements to delivery and ongoing support."
            }
            id="channel-process-title"
          />
          <ChannelProcess locale={locale} />
        </div>
      </section>
      <section
        className={styles.callToAction}
        aria-labelledby="channel-project-title"
      >
        <div
          className={styles.callToActionPanel}
          data-channel-reveal="zoom"
          data-action-banner="quiet"
          data-closing-banner="standard"
        >
          <h2 className={styles.heroTitle} id="channel-project-title">
            <span>{fa ? "ایده‌ای داری؟" : "Have an idea?"}</span>
            <br />
            {fa ? "با هم شروع کنیم" : "Let’s get started."}
          </h2>
          <Link data-fill-button href={href("/contact")}>
            {contactLabel}
          </Link>
          <ActionBannerArt />
        </div>
      </section>
      <ChannelReveals />
    </main>
  );
}
