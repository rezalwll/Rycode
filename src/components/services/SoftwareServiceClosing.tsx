import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft, CodeXml, LayoutGrid, Users } from "lucide-react";
import {
  BRAND_MARK_HEIGHT,
  BRAND_MARK_SRC,
  BRAND_MARK_WIDTH,
} from "@/lib/brand-assets";
import { localizedHref } from "@/lib/i18n";
import { softwareRelated } from "./software-copy";
import styles from "./SoftwareServiceClosing.module.css";

export function SoftwareServiceClosing({ inquiryHref }: { inquiryHref: string }) {
  return (
    <section
      className={styles.banner}
      id="software-contact"
      aria-labelledby="software-contact-title"
      data-closing-banner="standard"
    >
      <div className={styles.copy}>
        <h2 id="software-contact-title">
          ایده‌ات رو بگو تا راه ساختنش رو پیدا کنیم
        </h2>
        <p>
          بگو نرم‌افزار قراره چه کاری انجام بده و چه کسانی ازش استفاده
          می‌کنن.
        </p>
        <div className={styles.actions}>
          <Link data-fill-button href={inquiryHref}>
            گفت‌وگو درباره پروژه
          </Link>
        </div>
      </div>
      <div className={styles.art} aria-hidden="true">
        <span className={styles.backPlate} />
        <span className={styles.markPlate}>
          <Image
            src={BRAND_MARK_SRC}
            alt=""
            width={BRAND_MARK_WIDTH}
            height={BRAND_MARK_HEIGHT}
          />
        </span>
        <span className={`${styles.tile} ${styles.codeTile}`}>
          <CodeXml />
        </span>
        <span className={`${styles.tile} ${styles.usersTile}`}>
          <Users />
        </span>
      </div>
      <nav className={styles.related} aria-labelledby="software-related-title">
        <div className={styles.relatedHeader}>
          <span className={styles.relatedLabel} id="software-related-title">
            <LayoutGrid size={16} aria-hidden="true" />
            خدمات مرتبط
          </span>
          <Link className={styles.allServices} href="/services">
            همه خدمات <ArrowUpLeft size={14} aria-hidden="true" />
          </Link>
        </div>
        <ul role="list">
          {softwareRelated.map(({ href, title }) => (
            <li key={href}>
              <Link href={localizedHref(href, "fa")}>
                {title} <ArrowUpLeft size={14} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
