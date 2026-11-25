import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpLeft,
  ChevronLeft,
  CodeXml,
  LayoutGrid,
  Settings,
  Users,
} from "lucide-react";
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
    <div className={styles.end} id="software-contact">
      <div className={styles.inner}>
        <section className={styles.contact} aria-labelledby="software-contact-title">
          <div className={styles.copy}>
            <h2 id="software-contact-title" className={styles.title}>
              <span>ایده‌ات رو بگو تا راه</span>{" "}
              <span>ساختنش رو پیدا کنیم</span>
            </h2>
            <p>
              بگو نرم‌افزار قراره چه کاری انجام بده و چه کسانی ازش استفاده
              می‌کنن.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primary} href={inquiryHref}>
                بیا درباره نرم‌افزارم حرف بزنیم
                <ArrowUpLeft size={20} aria-hidden="true" />
              </Link>
              <Link className={styles.secondary} href="/services">
                <span>
                  <ChevronLeft size={20} aria-hidden="true" />
                </span>
                همه خدمات
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
            <span className={`${styles.tile} ${styles.settingsTile}`}>
              <Settings />
            </span>
          </div>
        </section>

        <nav className={styles.related} aria-labelledby="software-related-title">
          <div className={styles.layersArt} aria-hidden="true">
            <span />
            <span />
          </div>
          <div className={styles.relatedCopy}>
            <h2 id="software-related-title">
              <span className={styles.relatedIcon}>
                <LayoutGrid aria-hidden="true" />
              </span>
              خدمات مرتبط
            </h2>
            <ul role="list">
              {softwareRelated.map(({ href, title }) => (
                <li key={href}>
                  <Link href={localizedHref(href, "fa")}>
                    {title} <ArrowUpLeft size={16} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
