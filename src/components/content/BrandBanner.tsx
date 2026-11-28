import Image from "next/image";
import type { ReactNode } from "react";
import {
  BRAND_MARK_HEIGHT,
  BRAND_MARK_SRC,
  BRAND_MARK_WIDTH,
} from "@/lib/brand-assets";
import styles from "./BrandBanner.module.css";

export function BrandBanner({
  id,
  title,
  description,
  children,
  className,
}: {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
}) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      className={className ? `${styles.banner} ${className}` : styles.banner}
      aria-labelledby={titleId}
    >
      <div className={styles.copy}>
        <h2 id={titleId}>{title}</h2>
        <p>{description}</p>
        <div className={styles.actions}>{children}</div>
      </div>
      <div className={styles.art} aria-hidden="true">
        <div className={styles.plate}>
          <Image
            src={BRAND_MARK_SRC}
            alt=""
            width={BRAND_MARK_WIDTH}
            height={BRAND_MARK_HEIGHT}
          />
        </div>
      </div>
    </section>
  );
}
