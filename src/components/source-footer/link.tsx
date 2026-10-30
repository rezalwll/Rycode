import NextLink from "next/link";
import type { ComponentProps } from "react";
import { localizedHref, type Locale } from "@/lib/i18n";

export function Link({
  locale,
  href,
  ...props
}: Omit<ComponentProps<typeof NextLink>, "href" | "locale"> & {
  href: string;
  locale: Locale;
}) {
  return (
    <NextLink
      {...props}
      href={localizedHref(
        href === "/start-project" ? "/contact" : href,
        locale,
      )}
    />
  );
}
