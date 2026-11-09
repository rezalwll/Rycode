import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpLeft,
  Blocks,
  Gauge,
  MousePointer2,
  Plus,
  Search,
  Settings2,
  Smartphone,
} from "lucide-react";
import { Fragment, type ReactNode } from "react";
import { websiteDesignCopy as copy } from "./website-design-copy";
import styles from "./WebsiteDesignPage.module.css";

const inquiryHref = "/contact?service=build";
const qualityIcons = [
  Smartphone,
  Gauge,
  MousePointer2,
  Search,
  Settings2,
  Blocks,
];
const [comparisonIntro, wordpress, custom, comparisonNote] =
  copy.comparison.paragraphs;

const templateSources = {
  pane: {
    name: "Pane",
    href: "https://www.framer.com/marketplace/templates/studio-website/",
  },
  cartelle: {
    name: "Cartelle",
    href: "https://www.framer.com/marketplace/templates/cartelle/",
  },
  cornice: {
    name: "Cornice",
    href: "https://www.framer.com/marketplace/templates/cornice/",
  },
};

type TemplateArtwork = {
  src: string;
  alt: string;
  source: keyof typeof templateSources;
};

const templateArtwork = {
  website: {
    src: "/brand/website-design/pane-wayline.webp",
    alt: "پیش‌نمایش سایت رزرو سفر Wayline روی زمینهٔ آبی و نارنجی",
    source: "pane",
  },
  shop: {
    src: "/brand/website-design/cartelle-shop.webp",
    alt: "صفحهٔ فروشگاه Cartelle با دسته‌بندی، فیلتر و کارت‌های محصول",
    source: "cartelle",
  },
  dashboard: {
    src: "/brand/website-design/pane-ledgerly.webp",
    alt: "داشبورد Ledgerly با جدول فاکتورها و جزئیات پرداخت",
    source: "pane",
  },
  studio: {
    src: "/brand/website-design/cornice-studio.webp",
    alt: "عکس سیاه‌وسفید از گفت‌وگو دربارهٔ طراحی روی لپ‌تاپ",
    source: "cornice",
  },
} satisfies Record<string, TemplateArtwork>;

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
  wide,
  children,
}: {
  id: string;
  title: string;
  wide?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      className={styles.splitSection}
      id={id}
      data-wide={wide}
      aria-labelledby={`${id}-title`}
    >
      <h2 id={`${id}-title`}>{title}</h2>
      <div className={styles.sectionBody}>{children}</div>
    </section>
  );
}

function MoreCopy({
  label,
  items,
}: {
  label: string;
  items: readonly string[];
}) {
  return (
    <details className={styles.moreCopy}>
      <summary>
        {label}
        <Plus size={15} className={styles.plus} aria-hidden="true" />
      </summary>
      <div>
        <Paragraphs items={items} />
      </div>
    </details>
  );
}

function TemplatePreview({
  artwork,
  frame,
  sizes,
  eager = false,
}: {
  artwork: TemplateArtwork;
  frame: string;
  sizes: string;
  eager?: boolean;
}) {
  const source = templateSources[artwork.source];

  return (
    <figure className={styles.templatePreview}>
      <div className={`${styles.templateImage} ${frame}`}>
        <Image
          src={artwork.src}
          alt={artwork.alt}
          fill
          sizes={sizes}
          loading={eager ? "eager" : "lazy"}
        />
      </div>
      <figcaption>
        تصویر از قالب{" "}
        <a href={source.href} target="_blank" rel="noreferrer">
          <bdi lang="en">{source.name}</bdi>
          <ArrowUpLeft size={12} aria-hidden="true" />
        </a>
      </figcaption>
    </figure>
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

        <TemplatePreview
          artwork={templateArtwork.website}
          frame={styles.heroArtwork}
          sizes="(max-width: 1184px) 94vw, 1120px"
          eager
        />

        <SplitSection id="website-types" title={copy.types.title} wide>
          <p>{copy.types.subtitle}</p>
          <div className={styles.typeList}>
            {[copy.types.items.slice(0, 4), copy.types.items.slice(4)].map(
              (column) => (
                <div className={styles.typeColumn} key={column[0].id}>
                  {column.map((item) => (
                    <details key={item.id} name="website-types">
                      <summary>
                        <span className={styles.number}>{item.number}</span>
                        <span>{item.title}</span>
                        <Plus
                          size={18}
                          aria-hidden="true"
                          className={styles.plus}
                        />
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
              ),
            )}
          </div>
          <MoreCopy
            label="بیشتر دربارهٔ طراحی سایت در رایکد"
            items={[...copy.hero.paragraphs, ...copy.types.paragraphs]}
          />
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

        <SplitSection id="website-quality" title={copy.quality.title} wide>
          <p>{copy.quality.subtitle}</p>
          <div className={styles.qualityGrid}>
            {copy.quality.items.map((item, index) => {
              const Icon = qualityIcons[index];
              return (
                <article key={item.number}>
                  <span className={styles.qualityIcon}>
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              );
            })}
          </div>
          <MoreCopy
            label="چرا این ویژگی‌ها مهم‌اند؟"
            items={copy.quality.paragraphs}
          />
        </SplitSection>

        <SplitSection id="website-platform" title={copy.comparison.title} wide>
          <p>{copy.comparison.subtitle}</p>
          <div className={styles.comparisonGrid}>
            <article>
              <TemplatePreview
                artwork={templateArtwork.shop}
                frame={styles.shopArtwork}
                sizes="(max-width: 620px) 90vw, 520px"
              />
              <h3>وردپرس و ووکامرس</h3>
              <p>{wordpress}</p>
            </article>
            <article>
              <TemplatePreview
                artwork={templateArtwork.dashboard}
                frame={styles.dashboardArtwork}
                sizes="(max-width: 620px) 90vw, 520px"
              />
              <h3>طراحی اختصاصی</h3>
              <p>{custom}</p>
            </article>
          </div>
          <MoreCopy
            label="چطور انتخاب می‌کنیم؟"
            items={[comparisonIntro, comparisonNote]}
          />
          <Link href={inquiryHref} className={styles.secondary}>
            {copy.comparison.action}
          </Link>
        </SplitSection>

        <SplitSection id="website-process" title={copy.process.title} wide>
          <Paragraphs
            items={[copy.process.subtitle, ...copy.process.paragraphs]}
          />
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
          <ul className={styles.costFactors}>
            {copy.cost.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <MoreCopy
            label="جزئیات برآورد و پرداخت"
            items={[...copy.cost.paragraphs, ...copy.cost.notes]}
          />
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

        <SplitSection id="website-related" title={copy.related.title} wide>
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
            <Paragraphs items={copy.closing.paragraphs.slice(-1)} />
            <div className={styles.actions}>
              <Link href={inquiryHref} className={styles.primary}>
                {copy.closing.primary}
              </Link>
              <Link href="/services" className={styles.secondary}>
                {copy.closing.secondary}
              </Link>
            </div>
            <MoreCopy
              label="از کجا می‌تونیم شروع کنیم؟"
              items={copy.closing.paragraphs.slice(0, -1)}
            />
          </div>
          <TemplatePreview
            artwork={templateArtwork.studio}
            frame={styles.closingArt}
            sizes="(max-width: 840px) 90vw, 520px"
          />
        </section>
      </div>
    </main>
  );
}
