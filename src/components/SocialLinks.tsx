import { siteSettings } from "@/server/content";
import { socialNetworks } from "@/content/social-networks";
import { translate, type Locale } from "@/lib/i18n";
import { referenceStyles } from "@/styles/reference-styles";

export async function SocialLinks({
  locale,
  variant,
}: {
  locale: Locale;
  variant: "footer" | "contact";
}) {
  const footer = variant === "footer";
  const settings = await siteSettings();
  return (
    <div
      className={footer ? "framer-1yeaahq" : "framer-1uv64u8"}
      data-framer-name={footer ? "Footer Buttons" : "Social Links"}
      data-social-networks={variant}
    >
      {socialNetworks.map((original) => {
        const network = {
          ...original,
          href:
            String(
              settings["social." + original.name.toLowerCase()] ||
                original.href ||
                "",
            ) || undefined,
        };
        const label = translate(network.name, locale);
        const Element = network.href ? "a" : "div";
        return (
          <div
            key={network.name}
            className={
              footer ? "framer-yezfjw-container" : "framer-k889av-container"
            }
          >
            <Element
              className={
                footer
                  ? "framer-fR17n framer-CkNQH framer-BGvaq framer-P2lQE framer-h28y84 framer-v-a9b1q3 framer-zcpo7a"
                  : "framer-rlCr3 framer-jzm7mt framer-v-jzm7mt framer-1pkfbc1"
              }
              data-framer-name="Social Link"
              data-social-network={network.name}
              href={network.href}
              target={network.href ? "_blank" : undefined}
              rel={network.href ? "noopener noreferrer" : undefined}
              role={!footer && !network.href ? "img" : undefined}
              aria-label={footer ? undefined : label}
              title={label}
            >
              {footer ? (
                <>
                  <div
                    className="framer-10d9t98"
                    data-framer-component-type="RichTextContainer"
                    style={referenceStyles.sdb4e5c5446}
                  >
                    <p
                      className="framer-text framer-styles-preset-1wgmhge"
                      data-styles-preset="o7GNKckl6"
                      dir="auto"
                      style={referenceStyles.s2a1463207d}
                    >
                      {label}
                    </p>
                  </div>
                  <div
                    className="framer-zvnvf1"
                    data-framer-name="Line"
                    style={referenceStyles.saab222fd1f}
                  />
                </>
              ) : (
                ["framer-8hgace", "framer-1x99mq8"].map((className) => (
                  <div className={className} key={className} aria-hidden="true">
                    <div
                      data-framer-background-image-wrapper="true"
                      style={referenceStyles.s8a54025f8d}
                    >
                      <img
                        decoding="async"
                        width="24"
                        height="24"
                        src={network.icon}
                        alt=""
                        className="w-full! h-full!"
                        style={referenceStyles.s1100a320a2}
                      />
                    </div>
                  </div>
                ))
              )}
            </Element>
          </div>
        );
      })}
    </div>
  );
}
