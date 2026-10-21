import Link from "next/link";
import { navigationAction, primaryNavigation } from "@/content/navigation";
import { localizedHref, type Locale } from "@/lib/i18n";
import { referenceStyles } from "@/styles/reference-styles";
import { serviceCatalog } from "@/server/content";
import { ServiceMenu } from "./ServiceMenu";

export async function SiteNavigationLinks({
  locale,
  variant,
}: {
  locale: Locale;
  variant: "desktop" | "mobile" | "footer";
}) {
  const mobile = variant === "mobile";
  const footer = variant === "footer";
  const items = mobile
    ? [...primaryNavigation, navigationAction]
    : primaryNavigation;
  const services = footer ? [] : await serviceCatalog(locale);

  return (
    <nav
      aria-label={locale === "fa" ? "منوی اصلی" : "Main navigation"}
      className={
        footer ? "framer-15h5s5j" : mobile ? "framer-1uao1gk" : "framer-1cgc59w"
      }
      data-framer-name={footer ? "Footer Buttons" : "Navbar Block"}
      style={
        mobile
          ? referenceStyles.sc1ca5c600f
          : footer
            ? undefined
            : { ...referenceStyles.s1aad2a6e88, opacity: 1 }
      }
    >
      {items.map((item) => (
        <div
          key={item.id}
          className={
            footer
              ? "framer-1cnbq5x-container"
              : mobile
                ? "framer-9aq93d-container"
                : "framer-a503if-container"
          }
          style={mobile ? referenceStyles.sc1ca5c600f : undefined}
        >
          {item.id === "services" && !footer ? (
            <ServiceMenu
              locale={locale}
              mobile={mobile}
              services={services.map((service) => ({
                id: service.id,
                title: service.title[locale],
              }))}
            />
          ) : (
            <Link
              className={
                footer
                  ? "framer-fR17n framer-CkNQH framer-BGvaq framer-P2lQE framer-h28y84 framer-v-h28y84 framer-zcpo7a"
                  : "framer-hFcgW framer-9qjuV framer-gx3c1j framer-v-gx3c1j framer-8juzgy"
              }
              data-framer-name={footer ? "Footer" : "Primary"}
              data-highlight={footer ? undefined : "true"}
              href={localizedHref(item.href, locale)}
              style={
                footer
                  ? undefined
                  : mobile
                    ? referenceStyles.s5ff7a5484d
                    : referenceStyles.s5f3b0adb3a
              }
            >
              <div
                className={footer ? "framer-10d9t98" : "framer-1s61fu6"}
                data-framer-component-type="RichTextContainer"
                style={
                  footer
                    ? referenceStyles.sdb4e5c5446
                    : mobile
                      ? referenceStyles.s9fee3511a6
                      : referenceStyles.s143c03551f
                }
              >
                <p
                  className={`framer-text ${footer ? "framer-styles-preset-4un9qc" : "framer-styles-preset-12928c1"}`}
                  data-styles-preset={footer ? "LwB02gzuV" : "V0V25Na8R"}
                  dir="auto"
                  style={
                    footer
                      ? referenceStyles.s2a1463207d
                      : referenceStyles.se8682f4ed5
                  }
                >
                  {item.label[locale]}
                </p>
              </div>
              {footer && (
                <div
                  className="framer-zvnvf1"
                  data-framer-name="Line"
                  style={referenceStyles.saab222fd1f}
                />
              )}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
