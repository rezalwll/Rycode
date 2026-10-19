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
      aria-label="RYCODE Studio"
    >
      <img
        src={`/brand/rycode-${tone === "dark" ? "white" : "charcoal"}.webp`}
        width={96}
        height={128}
        alt=""
        aria-hidden="true"
        className="brand-logo__emblem"
      />
      <span className="brand-logo__type" aria-hidden="true">
        <span className="brand-logo__name">
          <span className="brand-accent">RY</span>CODE
        </span>
        <span className="brand-logo__studio">STUDIO</span>
      </span>
    </span>
  );
}
