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
      role="img"
      aria-label="Rycode Studio — رایکد استودیو"
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
        <span className="brand-logo__name">rycode</span>
        <span className="brand-logo__studio">studio</span>
      </span>
    </span>
  );
}
