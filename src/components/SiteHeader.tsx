import { getTranslations } from "@/lib/i18n-server";
import { SiteNavigationLinks } from "./SiteNavigationLinks";
import { navigationAction } from "@/content/navigation";
import { LanguageSwitch } from "./LanguageSwitch";
import { BrandLogo } from "@/components/BrandLogo";
import Link from "next/link";
import {
  MobileNavigation,
  MenuToggle,
  MenuPanel,
} from "@/components/Navigation";
import { referenceStyles } from "@/styles/reference-styles";
import { headers } from "next/headers";
import { contentRoute } from "@/lib/content-route";
import { lookupContent } from "@/server/content";
export async function SiteHeader() {
  const { href, locale } = await getTranslations();
  const route = contentRoute((await headers()).get("x-rycode-path") || "/");
  const managed = route
    ? await lookupContent(route.kind, route.slug, locale)
    : null;
  const switchAvailable =
    !managed?.owned ||
    Boolean(managed.content?.locales.includes(locale === "fa" ? "en" : "fa"));
  return (
    <header
      className="framer-ro7694"
      data-framer-layout-hint-center-x="true"
      data-framer-name="Header"
      style={referenceStyles.s4317ba2255}
    >
      <div className="ssr-variant hidden-16wj1xo hidden-zx6348">
        <div className="framer-gu70t0-container">
          <div
            className="framer-ATxvc framer-2hf838 framer-v-2hf838 w-full!"
            data-framer-name="Desktop V1"
            style={referenceStyles.sb4a37ba944}
          >
            <div className="framer-1mgfzd9" data-framer-name="Container">
              <Link
                className="framer-6w0zrt framer-1kjkpwk"
                data-framer-name="Logo Block"
                href={href("/")}
              >
                <BrandLogo />
              </Link>
              <SiteNavigationLinks locale={locale} variant="desktop" />
              <div className="framer-uk7nae" data-framer-name="Button Block">
                <LanguageSwitch available={switchAvailable} />
                <div className="framer-196w2zi-container">
                  <Link
                    className="framer-obWCA framer-9qjuV framer-Bq5uF framer-18sfddm framer-v-18sfddm framer-1fsrsxu"
                    data-border="true"
                    data-framer-name="Variant 1"
                    href={href(navigationAction.href)}
                    style={referenceStyles.s64b4a2310d}
                  >
                    <div
                      className="framer-14jkp0r"
                      data-framer-component-type="RichTextContainer"
                      style={referenceStyles.s143c03551f}
                    >
                      <p
                        className="framer-text framer-styles-preset-12928c1"
                        data-styles-preset="V0V25Na8R"
                        dir="auto"
                        style={referenceStyles.se8682f4ed5}
                      >
                        {navigationAction.label[locale]}
                      </p>
                    </div>
                    <div className="framer-1glyh7l">
                      <div
                        className="framer-1oado6a"
                        data-framer-name="Dot 01"
                        style={referenceStyles.s51915ca83d}
                      ></div>
                      <div
                        className="framer-d6q9x7"
                        data-framer-name="Dot 02"
                        style={referenceStyles.s0ee56a7b4b}
                      ></div>
                      <div
                        className="framer-qtebog"
                        data-framer-name="Dot 03"
                        style={referenceStyles.s0ee56a7b4b}
                      ></div>
                      <div
                        className="framer-tvyhl2"
                        data-framer-name="Dot 04"
                        style={referenceStyles.s0ee56a7b4b}
                      ></div>
                      <div
                        className="framer-1kar949"
                        data-framer-name="Dot 05"
                        style={referenceStyles.s0ee56a7b4b}
                      ></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ssr-variant hidden-uxe76n">
        <div className="framer-gu70t0-container">
          <MobileNavigation
            className="framer-ATxvc framer-2hf838 framer-v-1t09hgd w-full!"
            data-framer-name="Phone"
            style={referenceStyles.s1c10c495ce}
          >
            <div className="framer-1mgfzd9" data-framer-name="Container">
              <Link
                className="framer-6w0zrt framer-1kjkpwk"
                data-framer-name="Logo Block"
                href={href("/")}
              >
                <BrandLogo />
              </Link>
              <div className="framer-uk7nae" data-framer-name="Button Block">
                <LanguageSwitch available={switchAvailable} />
                <div className="framer-1xrfdkn-container">
                  <MenuToggle
                    className="framer-JjGLa framer-tge9hy framer-v-tge9hy"
                    data-framer-name="Menu"
                    data-highlight="true"
                    style={referenceStyles.s9bd38a27f9}
                  >
                    <div
                      className="framer-1rvl0gn"
                      data-framer-name="Line 01"
                      style={referenceStyles.s2601f6f815}
                    ></div>
                    <div
                      className="framer-mbjeww"
                      data-framer-name="Line 01"
                      style={referenceStyles.s2601f6f815}
                    ></div>
                  </MenuToggle>
                </div>
              </div>
            </div>
            <MenuPanel className="framer-jc5u9r" data-framer-name="Container">
              <SiteNavigationLinks locale={locale} variant="mobile" />
            </MenuPanel>
          </MobileNavigation>
        </div>
      </div>
    </header>
  );
}
