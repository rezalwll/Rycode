import Image from "next/image";
import {
  BRAND_MARK_SRC,
  BRAND_MARK_WIDTH,
  BRAND_MARK_HEIGHT,
} from "@/lib/brand-assets";

export function LogoMark({
  className,
  variant = "adaptive",
  alt = "RYCODE",
}: {
  className?: string;
  variant?: "default" | "light" | "adaptive";
  alt?: string;
}) {
  return (
    <Image
      src={BRAND_MARK_SRC}
      alt={alt}
      width={BRAND_MARK_WIDTH}
      height={BRAND_MARK_HEIGHT}
      sizes="(max-width: 640px) 36px, 96px"
      data-logo-variant={variant}
      className={["rycode-logo-mark size-8 shrink-0 object-contain", className]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
