import Image from "next/image";
import {
  BRAND_MARK_HEIGHT,
  BRAND_MARK_SRC,
  BRAND_MARK_WIDTH,
} from "@/lib/brand-assets";
import styles from "./ActionBannerArt.module.css";

export function ActionBannerArt() {
  return (
    <span className={styles.art} data-banner-art aria-hidden="true">
      <span className={styles.drawing}>
        <span className={styles.plate} />
        <Image
          src={BRAND_MARK_SRC}
          alt=""
          width={BRAND_MARK_WIDTH}
          height={BRAND_MARK_HEIGHT}
          className={styles.mark}
        />
      </span>
    </span>
  );
}
