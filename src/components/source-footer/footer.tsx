import {
  BookOpen,
  ChevronRight,
  Handshake,
  House,
  Layers,
  MapPin,
  MessageCircleMore,
} from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { BrandBanner } from "@/components/content/BrandBanner";
import { SocialLinks } from "@/components/SocialLinks";

import { FooterFluid } from "./footer-fluid";
import { Link } from "./link";
import { LogoMark } from "./logo";
import { getFooterNav } from "./navigation";
import { Container } from "./primitives";
import { LogoWordmark } from "./wordmark";

const groupIcons = {
  company: House,
  services: Layers,
  start: Handshake,
  resources: BookOpen,
};

export function SiteFooter({ locale }: { locale: Locale }) {
  const isFa = locale === "fa";
  const groups = getFooterNav(locale);
  const year = new Date().getFullYear();

  return (
    <footer id="site-footer" className="rycode-footer">
      <FooterFluid />
      <Container className="rycode-footer-inner">
        <div className="rycode-footer-brand">
          <Link
            href="/"
            locale={locale}
            className="rycode-footer-lockup"
            dir="ltr"
          >
            <LogoWordmark />
            <LogoMark className="rycode-footer-mark" variant="default" alt="" />
          </Link>
          <div className="rycode-footer-brand-copy" dir={isFa ? "rtl" : "ltr"}>
            <p className="rycode-footer-name">{isFa ? "رایکد" : "RYCODE"}</p>
            <p>
              {isFa
                ? "طراحی، توسعه و رشد راه‌حل‌های دیجیتال برای کسب‌وکارهایی که می‌خواهند جدی‌تر دیده شوند."
                : "Digital design, development and growth for businesses ready to stand out."}
            </p>
          </div>
        </div>

        <BrandBanner
          id="footer-inquiry"
          className="rycode-footer-inquiry"
          title={isFa ? "برای پروژه‌ات چه کمکی لازم داری؟" : "What do you need help with?"}
          description={
            isFa
              ? "برای طراحی سایت، توسعه نرم‌افزار یا رفع باگ، توی فرم درخواست بگو چه کمکی لازم داری."
              : "Tell us whether you need a new site, custom software, or help fixing an existing project."
          }
        >
          <div className="rycode-footer-actions">
            <Link
              href="/contact"
              locale={locale}
              className="rycode-footer-button rycode-footer-button-primary"
            >
              <MessageCircleMore aria-hidden="true" />
              {isFa ? "ارسال شرح پروژه" : "Share your project brief"}
            </Link>
            <Link
              href="/services"
              locale={locale}
              data-secondary-action
            >
              {isFa ? "مشاهده خدمات" : "Explore services"}
            </Link>
          </div>
        </BrandBanner>

        <nav
          className="rycode-footer-nav"
          aria-label={isFa ? "پیوندهای پایین سایت" : "Footer navigation"}
        >
          {groups.map(({ id, title, items }) => {
            const Icon = groupIcons[id];

            return (
              <div className="rycode-footer-group" key={id}>
                <h3>
                  <span className="rycode-footer-group-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  {title}
                </h3>
                <ul>
                  {items.map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} locale={locale}>
                        <ChevronRight aria-hidden="true" />
                        <span>{label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                {id === "resources" && (
                  <SocialLinks locale={locale} variant="footer" />
                )}
              </div>
            );
          })}
        </nav>

        <div id="site-end" className="rycode-footer-bottom">
          <p className="rycode-footer-copyright">
            <span aria-hidden="true">©</span>
            <bdi dir="ltr">
              {isFa ? `RYCODE ${year}` : `${year} RYCODE`}
            </bdi>
            <span>
              {isFa ? " — تمام حقوق محفوظ است" : " — All rights reserved"}
            </span>
          </p>
          <p className="rycode-footer-location">
            <MapPin aria-hidden="true" />
            {isFa ? "ساخته‌شده در ایران" : "Built in Iran"}
          </p>
        </div>
      </Container>
    </footer>
  );
}
