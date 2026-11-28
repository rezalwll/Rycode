import Image from "next/image";
import Link from "next/link";
import {
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
import { HomeWorkSection } from "@/components/pages/HomeWorkSection";
import { WebsiteDesignHero } from "./WebsiteDesignHero";
import { WebsiteTypePicker } from "./WebsiteTypePicker";
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
type Artwork = {
  src: string;
  alt: string;
};

const websiteArtwork = {
  shop: {
    src: "/brand/home-service-cards/online-store.webp",
    alt: "نمونه فروشگاه لوازم خانه با کارت‌های محصول و سبد خرید",
  },
  customSite: {
    src: "/brand/website-design/grayscale-site-preview.webp",
    alt: "پیش‌نمایش سایت Grayscale با منوی بالا و تصویر کوهستان مه‌آلود",
  },
} satisfies Record<string, Artwork>;

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

function DesignSection({
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
      className={styles.designSection}
      id={id}
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

function ArtworkPreview({
  artwork,
  frame,
  sizes,
}: {
  artwork: Artwork;
  frame: string;
  sizes: string;
}) {
  return (
    <figure className={`${styles.artwork} ${frame}`}>
      <Image
        src={artwork.src}
        alt={artwork.alt}
        fill
        sizes={sizes}
      />
    </figure>
  );
}

export function WebsiteDesignPage() {
  return (
    <main className={styles.page} data-website-design-page dir="rtl">
      <WebsiteDesignHero
        locale="fa"
        inquiryHref={inquiryHref}
        secondaryHref="#website-types"
      />
      <div className={styles.container}>
        <DesignSection id="website-types" title={copy.types.title}>
          <p>{copy.types.subtitle}</p>
          <WebsiteTypePicker
            items={copy.types.items.map((item) => ({
              id: item.id,
              number: item.number,
              title: item.title,
              content: (
                <>
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
                    data-secondary-action
                  >
                    {item.link}
                  </Link>
                </>
              ),
            }))}
          />
        </DesignSection>
      </div>
      <HomeWorkSection placement="website" />
      <div className={styles.container}>
        <DesignSection id="website-quality" title={copy.quality.title}>
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
        </DesignSection>

        <DesignSection id="website-platform" title={copy.comparison.title}>
          <p>{copy.comparison.subtitle}</p>
          <div className={styles.comparisonGrid}>
            <article>
              <ArtworkPreview
                artwork={websiteArtwork.shop}
                frame={styles.comparisonArtwork}
                sizes="(max-width: 620px) 90vw, 520px"
              />
              <h3>وردپرس و ووکامرس</h3>
              <p>{copy.comparison.wordpress}</p>
            </article>
            <article>
              <ArtworkPreview
                artwork={websiteArtwork.customSite}
                frame={`${styles.comparisonArtwork} ${styles.customSiteArtwork}`}
                sizes="(max-width: 620px) 90vw, 520px"
              />
              <h3>طراحی اختصاصی</h3>
              <p>{copy.comparison.custom}</p>
            </article>
          </div>
          <Link href={inquiryHref} data-secondary-action>
            {copy.comparison.action}
          </Link>
        </DesignSection>

        <DesignSection id="website-process" title={copy.process.title}>
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
        </DesignSection>

        <DesignSection id="website-cost" title={copy.cost.title}>
          <div className={styles.costPanel}>
            <div className={styles.costHeader}>
              <div className={styles.costCopy}>
                <h3>{copy.cost.subtitle}</h3>
                <ul
                  className={styles.costFactors}
                  aria-label={copy.cost.paragraphs[1]}
                >
                  {copy.cost.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <Link href={inquiryHref} data-secondary-action>
                {copy.cost.action}
              </Link>
            </div>
            <details className={styles.moreCopy}>
              <summary>
                جزئیات برآورد و پرداخت
                <Plus size={15} className={styles.plus} aria-hidden="true" />
              </summary>
              <div className={styles.costNotes}>
                <div>
                  <h4>محدوده پروژه</h4>
                  <p>
                    <InlineCopy text={copy.cost.paragraphs[0]} />
                  </p>
                </div>
                <div>
                  <h4>اولویت امکانات</h4>
                  <p>
                    <InlineCopy text={copy.cost.notes[0]} />
                  </p>
                </div>
                <div>
                  <h4>شرایط پرداخت</h4>
                  <p>
                    <InlineCopy text={copy.cost.notes[1]} />
                  </p>
                </div>
              </div>
            </details>
          </div>
        </DesignSection>

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

        <DesignSection id="website-related" title={copy.related.title}>
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
        </DesignSection>

      </div>

      <section
        className={styles.closing}
        id="website-closing"
        aria-labelledby="website-closing-title"
      >
        <div className={styles.closingCopy}>
          <h2 id="website-closing-title">
            <span className={styles.closingSpark} aria-hidden="true" />
            {copy.closing.title[0]}
            <br />
            {copy.closing.title[1]}{" "}
            <span className={styles.closingHighlight}>{copy.closing.title[2]}</span>
          </h2>
          <Paragraphs items={copy.closing.paragraphs.slice(-1)} />
          <div className={styles.actions}>
            <Link href={inquiryHref} data-fill-button>
              <ArrowLeft size={20} aria-hidden="true" />
              {copy.closing.primary}
            </Link>
            <Link href="/services" data-secondary-action>
              {copy.closing.secondary}
            </Link>
          </div>
          <MoreCopy
            label="از کجا می‌تونیم شروع کنیم؟"
            items={copy.closing.paragraphs.slice(0, -1)}
          />
        </div>
        <div className={styles.closingArt}>
          <Image
            src="/brand/website-design/closing-laptop.webp"
            alt="پیش‌نمایش یک وب‌سایت معماری روی لپ‌تاپ"
            fill
            sizes="(max-width: 840px) calc(100vw - 32px), (max-width: 1600px) 59vw, 930px"
          />
        </div>
      </section>
    </main>
  );
}
