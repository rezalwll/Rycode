import { BRAND_LOADING_MARK_SRC } from "@/lib/brand-assets";
import styles from "./BrandLoading.module.css";

export function BrandLoadingMark() {
  return (
    <span className={styles.mark} aria-hidden="true">
      <img src={BRAND_LOADING_MARK_SRC} width={80} height={102} alt="" />
    </span>
  );
}

export function BrandLoading({
  label,
  variant = "inline",
}: {
  label: string;
  variant?: "inline" | "page";
}) {
  return (
    <div
      role="status"
      className={variant === "page" ? styles.page : styles.inline}
      data-brand-loading={variant}
    >
      <BrandLoadingMark />
      <span>{label}</span>
    </div>
  );
}

export function BrandTableLoading({ label }: { label: string }) {
  return (
    <div className={styles.table}>
      <BrandLoading label={label} />
      <div className={styles.rows} aria-hidden="true">
        {[0, 1, 2].map((row) => (
          <div className={styles.row} key={row}>
            <span />
            <span />
            <span />
          </div>
        ))}
      </div>
    </div>
  );
}
