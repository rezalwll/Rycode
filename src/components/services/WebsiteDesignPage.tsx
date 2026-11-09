import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowUpLeft, Plus } from "lucide-react";
import { Fragment, type ReactNode } from "react";
import { websiteDesignCopy as copy } from "./website-design-copy";
import styles from "./WebsiteDesignPage.module.css";

const inquiryHref = "/contact?service=build";

const examples = [
  {
    title: "وب‌سایت آژانس هوش مصنوعی",
    type: "سایت شرکتی",
    href: "/work/ai-agency-website",
    image: "/assets/79de4a62dbad0012.png",
  },
  {
    title: "فروشگاه اینترنتی مد و پوشاک",
    type: "فروشگاه اینترنتی",
    href: "/work/fashion-ecommerce",
    image: "/assets/1115c40b7f2ee826.png",
  },
];

function InlineCopy({ text }: { text: string }) {
  return text
    .split("**")
    .map((part, index) => (
      <Fragment key={index}>
        {index % 2 === 0 ? (
          part
        ) : part === "سئو و رشد" ? (
          <Link href="/services/grow">{part}</Link>
        ) : (
          <strong>{part}</strong>
        )}
      </Fragment>
    ));
}

function Paragraphs({ items }: { items: readonly string[] }) {
  return items.map((text) => (
    <p key={text}>
      <InlineCopy text={text} />
    </p>
  ));
}

function SplitSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      className={styles.splitSection}
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <h2 id={`${id}-title`}>{title}</h2>
      <div className={styles.sectionBody}>{children}</div>
    </section>
  );
}

function WebsitePreview() {
  return (
    <div
      className={`${styles.glass} ${styles.heroArtwork}`}
      role="img"
      aria-label="پیش‌نمایش طراحی یک سایت در اندازهٔ دسکتاپ و موبایل"
    >
      <div className={styles.browser} aria-hidden="true">
        <div className={styles.browserBar}>
          <b dir="ltr">
            RYCODE<span>.</span>
          </b>
          <div>
            <span>خانه</span>
            <span>خدمات</span>
            <span>پروژه‌ها</span>
          </div>
          <i>تماس با ما</i>
        </div>
        <div className={styles.browserHero}>
          <div className={styles.browserCopy}>
            <small dir="ltr">WEB DESIGN / RYCODE</small>
            <strong>
              ایده‌ای که
              <br />
              به زندگی می‌رسد
            </strong>
            <span>طراحی برای تجربه‌ای ساده و ماندگار</span>
            <i>
              مشاهدهٔ پروژه‌ها <ArrowUpLeft size={14} />
            </i>
          </div>
          <div className={styles.browserImage}>
            <Image
              src="/brand/capabilities/business-site.webp"
              alt=""
              fill
              sizes="(max-width: 700px) 70vw, 460px"
              loading="eager"
            />
          </div>
        </div>
      </div>
      <div className={styles.phone} aria-hidden="true">
        <div className={styles.phoneTop}>
          <b dir="ltr">RYCODE.</b>
          <span>☰</span>
        </div>
        <div className={styles.phoneImage}>
          <Image
            src="/brand/capabilities/online-store.webp"
            alt=""
            fill
            sizes="180px"
          />
        </div>
        <strong>فروشگاه آنلاین</strong>
        <span>
          کشف محصولات <ArrowLeft size={11} />
        </span>
      </div>
    </div>
  );
}

export function WebsiteDesignPage() {
  return (
    <main className={styles.page} data-website-design-page dir="rtl">
      <div className={styles.container}>
        <section className={styles.intro} aria-labelledby="website-title">
          <Link href="/services" className={styles.textLink}>
            همهٔ خدمات <ArrowLeft size={16} aria-hidden="true" />
          </Link>
          <div className={styles.introGrid}>
            <div className={styles.introCopy}>
              <span className={styles.eyebrow} lang="en" dir="ltr">
                {copy.hero.tag}
              </span>
              <h1 id="website-title">{copy.hero.title}</h1>
              <p className={styles.heroLead}>{copy.hero.subtitle}</p>
              <div className={styles.actions}>
                <Link className={styles.primary} href={inquiryHref}>
                  {copy.hero.primary}
                </Link>
                <a className={styles.secondary} href="#website-types">
                  {copy.hero.secondary}{" "}
                  <ArrowDown size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
            <dl className={styles.facts}>
              <div>
                <dt>خروجی</dt>
                <dd>طراحی، توسعه و راه‌اندازی سایت</dd>
              </div>
              <div>
                <dt>زمان اجرا</dt>
                <dd>بر اساس امکانات و آماده بودن محتوا</dd>
              </div>
              <div>
                <dt>هزینه</dt>
                <dd>
                  <a href="#website-cost">
                    برآورد پس از بررسی نیاز{" "}
                    <ArrowDown size={14} aria-hidden="true" />
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <WebsitePreview />

        <SplitSection id="website-types" title={copy.types.title}>
          <div className={styles.overviewNote}>
            <Paragraphs items={copy.hero.paragraphs} />
          </div>
          <h3>{copy.types.subtitle}</h3>
          <Paragraphs items={copy.types.paragraphs} />
          <div className={styles.typeList}>
            {copy.types.items.map((item, index) => (
              <details key={item.id} open={index === 0} name="website-types">
                <summary>
                  <span className={styles.number}>{item.number}</span>
                  <span>{item.title}</span>
                  <Plus size={18} aria-hidden="true" className={styles.plus} />
                </summary>
                <div className={styles.detailsBody}>
                  <p className={styles.detailLead}>{item.lead}</p>
                  <Paragraphs items={item.paragraphs} />
                  <h4>{item.listTitle}</h4>
                  <ul className={styles.featureList}>
                    {item.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <Link
                    href={
                      item.id === "corporate"
                        ? "/services/corporate-website-design"
                        : inquiryHref
                    }
                    className={styles.textLink}
                  >
                    {item.link} <ArrowLeft size={16} aria-hidden="true" />
                  </Link>
                </div>
              </details>
            ))}
          </div>
        </SplitSection>

        <SplitSection id="website-quality" title={copy.quality.title}>
          <h3>{copy.quality.subtitle}</h3>
          <Paragraphs items={copy.quality.paragraphs} />
          <div className={styles.qualityGrid}>
            {copy.quality.items.map((item) => (
              <article key={item.number}>
                <span className={styles.number}>{item.number}</span>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </SplitSection>

        <section
          className={styles.work}
          id="build-work"
          aria-labelledby="build-work-title"
        >
          <div className={styles.sectionHeading}>
            <h2 id="build-work-title">نمونه‌هایی از طراحی سایت</h2>
            <Link href="/work" className={styles.textLink}>
              همهٔ نمونه‌کارها <ArrowLeft size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className={styles.workGrid}>
            {examples.map((project) => (
              <Link
                key={project.href}
                href={project.href}
                className={styles.project}
              >
                <div className={`${styles.glass} ${styles.projectArt}`}>
                  <div
                    className={`${styles.projectWindow} ${styles.projectMockup}`}
                    aria-hidden="true"
                  >
                    <div className={styles.projectToolbar}>
                      <b dir="ltr">RYCODE.</b>
                      <span>خانه</span>
                      <span>{project.type}</span>
                    </div>
                    <div className={styles.projectMockupBody}>
                      <div className={styles.projectMockupCopy}>
                        <small>پیش‌نمایش طراحی</small>
                        <strong>{project.title}</strong>
                        <span>
                          مشاهدهٔ پروژه <ArrowUpLeft size={12} />
                        </span>
                      </div>
                      <div className={styles.projectMockupImage}>
                        <Image
                          src={project.image}
                          alt=""
                          fill
                          sizes="(max-width: 620px) 45vw, 260px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.projectMeta}>
                  <span>{project.type}</span>
                  <ArrowUpLeft size={18} aria-hidden="true" />
                </div>
                <h3>{project.title}</h3>
              </Link>
            ))}
          </div>
        </section>

        <SplitSection id="website-platform" title={copy.comparison.title}>
          <h3>{copy.comparison.subtitle}</h3>
          <Paragraphs items={copy.comparison.paragraphs} />
          <Link href={inquiryHref} className={styles.secondary}>
            {copy.comparison.action}
          </Link>
        </SplitSection>

        <SplitSection id="website-process" title={copy.process.title}>
          <h3>{copy.process.subtitle}</h3>
          <Paragraphs items={copy.process.paragraphs} />
          <ol className={styles.steps}>
            {copy.process.items.map((step) => (
              <li key={step.number}>
                <span className={styles.number} aria-hidden="true">
                  {step.number}
                </span>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </SplitSection>

        <SplitSection id="website-cost" title={copy.cost.title}>
          <h3>{copy.cost.subtitle}</h3>
          <Paragraphs items={copy.cost.paragraphs} />
          <ul className={styles.featureList}>
            {copy.cost.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <Paragraphs items={copy.cost.notes} />
          <Link href={inquiryHref} className={styles.secondary}>
            {copy.cost.action}
          </Link>
        </SplitSection>

        <section className={styles.faq} aria-labelledby="website-faq-title">
          <h2 id="website-faq-title">{copy.faq.title}</h2>
          <div className={styles.faqGrid}>
            {copy.faq.items.map((item) => (
              <details key={item.question} name="website-faq">
                <summary>
                  {item.question}
                  <Plus size={17} className={styles.plus} aria-hidden="true" />
                </summary>
                <p>
                  <InlineCopy text={item.answer} />
                </p>
              </details>
            ))}
          </div>
        </section>

        <SplitSection id="website-related" title={copy.related.title}>
          <Paragraphs items={copy.related.paragraphs} />
          <div className={styles.relatedGrid}>
            {copy.related.items.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <h3>
                  {service.title}
                  <ArrowUpLeft size={16} aria-hidden="true" />
                </h3>
                <p>{service.body}</p>
              </Link>
            ))}
          </div>
        </SplitSection>

        <section
          className={styles.closing}
          aria-labelledby="website-closing-title"
        >
          <div className={styles.closingCopy}>
            <h2 id="website-closing-title">{copy.closing.title}</h2>
            <Paragraphs items={copy.closing.paragraphs} />
            <div className={styles.actions}>
              <Link href={inquiryHref} className={styles.primary}>
                {copy.closing.primary}
              </Link>
              <Link href="/services" className={styles.secondary}>
                {copy.closing.secondary}
              </Link>
            </div>
          </div>
          <div className={`${styles.glass} ${styles.closingArt}`}>
            <div className={styles.projectWindow}>
              <Image
                src="/brand/capabilities/landing-redesign.webp"
                alt="پیش‌نمایش بازطراحی سایت روی تبلت"
                fill
                sizes="(max-width: 840px) 90vw, 520px"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
