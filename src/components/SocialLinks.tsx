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
  const settings = await siteSettings();
  const networks = socialNetworks.map((network) => {
    const configured = settings[`social.${network.name.toLowerCase()}`];
    return {
      ...network,
      href:
        typeof configured === "string"
          ? configured.trim() || network.href
          : network.href,
      label: translate(network.name, locale),
    };
  });

  if (variant === "footer") {
    return (
      <div
        className="rycode-footer-social"
        data-social-networks="footer"
        role="group"
        aria-label={translate("Social media", locale)}
      >
        {networks.map(({ name, icon, href, label }) => {
          const Element = href ? "a" : "span";
          return (
            <Element
              key={name}
              className="rycode-footer-social-item"
              data-social-network={name}
              href={href}
              target={href ? "_blank" : undefined}
              rel={href ? "noopener noreferrer" : undefined}
              role={href ? undefined : "img"}
              aria-label={label}
              title={label}
            >
              <span
                className="rycode-footer-social-icon"
                style={{ maskImage: `url("${icon}")` }}
                aria-hidden="true"
              />
            </Element>
          );
        })}
      </div>
    );
  }

  return (
    <div
      className="framer-1uv64u8"
      data-framer-name="Social Links"
      data-social-networks="contact"
    >
      {networks.map((network) => {
        const Element = network.href ? "a" : "div";
        return (
          <div key={network.name} className="framer-k889av-container">
            <Element
              className="framer-rlCr3 framer-jzm7mt framer-v-jzm7mt framer-1pkfbc1"
              data-framer-name="Social Link"
              data-social-network={network.name}
              href={network.href}
              target={network.href ? "_blank" : undefined}
              rel={network.href ? "noopener noreferrer" : undefined}
              role={network.href ? undefined : "img"}
              aria-label={network.label}
              title={network.label}
            >
              {["framer-8hgace", "framer-1x99mq8"].map((className) => (
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
              ))}
            </Element>
          </div>
        );
      })}
    </div>
  );
}
