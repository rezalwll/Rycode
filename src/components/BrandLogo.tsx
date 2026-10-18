import { getTranslations } from "@/lib/i18n-server";
type BrandLogoProps = {
  tone?: "light" | "dark";
  variant?: "header" | "ticker" | "footer";
};

export async function BrandLogo({
  tone = "dark",
  variant = "header",
}: BrandLogoProps) {
  const { t } = await getTranslations();
  return (
    <span
      className={`brand-logo brand-logo--${variant} brand-logo--${tone}`}
      role="img"
      aria-label={t("Rycode Studio — رایکد استودیو")}
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
          <span className="brand-accent">{t("ry")}</span>
          {t("code")}
        </span>
        <span className="brand-logo__studio">{t("studio")}</span>
      </span>
    </span>
  );
}
