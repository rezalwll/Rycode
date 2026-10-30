import { BRAND_MARK_SRC } from "@/lib/brand-assets";

type BrandLogoProps = {
  tone?: "light" | "dark";
  variant?: "header" | "ticker" | "footer";
};

export function BrandLogo({
  tone = "dark",
  variant = "header",
}: BrandLogoProps) {
  return (
    <span
      className={`brand-logo brand-logo--${variant} brand-logo--${tone}`}
      dir="ltr"
      role="img"
      aria-label="RYCODE"
    >
      <img
        src={BRAND_MARK_SRC}
        width={96}
        height={128}
        alt=""
        aria-hidden="true"
        className="brand-logo__emblem"
      />
      <span className="brand-logo__type" aria-hidden="true">
        <span className="brand-logo__name">
          <span className="brand-letter-r">R</span>
          <span className="brand-letter-y">Y</span>
          <span className="brand-logo__code brand-code">CODE</span>
        </span>
      </span>
    </span>
  );
}
