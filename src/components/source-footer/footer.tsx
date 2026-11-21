import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  ChevronRight,
  MapPin,
  MessageCircleMore,
  Phone,
  UsersRound,
} from "lucide-react";
import type { Locale } from "@/lib/i18n";

import { FooterFluid } from "./footer-fluid";
import { Link } from "./link";
import { LogoMark } from "./logo";
import { getFooterNav, inquiryHref } from "./navigation";
import { Container } from "./primitives";
import { LogoWordmark } from "./wordmark";

const quickLinkIcons = {
  "/work": BriefcaseBusiness,
  "/about": UsersRound,
  "/blog": BookOpen,
};

export function SiteFooter({
  locale,
  phone,
}: {
  locale: Locale;
  phone: string;
}) {
  const isFa = locale === "fa";
  const { quickLinks, secondary } = getFooterNav(locale);
  const year = new Date().getFullYear();
  const dial = phone.replace(/[^+0-9]/g, "");

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

        <section
          className="rycode-footer-inquiry"
          aria-labelledby="footer-inquiry-title"
        >
          <div className="rycode-footer-inquiry-copy">
            <h2 id="footer-inquiry-title">
              {isFa ? "بگو کجای مسیر کاری هستی" : "Tell us where you are today"}
            </h2>
            <p>
              {isFa
                ? "از ایده و طراحی سایت تا توسعه، بهبود و رفع باگ. اگر می‌خواهی قدم بعدی را درست برداری، با هم مسیرش را پیدا می‌کنیم."
                : "From an idea or a new site to development and bug fixes, let’s find the next step for your project."}
            </p>
          </div>
          <div className="rycode-footer-actions">
            <Link
              href={inquiryHref}
              locale={locale}
              className="rycode-footer-button rycode-footer-button-primary"
            >
              <MessageCircleMore aria-hidden="true" />
              {isFa ? "شروع یک گفت‌وگو" : "Start a conversation"}
            </Link>
            <Link
              href="/services"
              locale={locale}
              className="rycode-footer-button rycode-footer-button-secondary"
            >
              {isFa ? "مشاهده خدمات" : "Explore services"}
              <ChevronRight aria-hidden="true" />
            </Link>
          </div>
        </section>

        <nav
          className="rycode-footer-nav"
          aria-label={isFa ? "پیوندهای پایین سایت" : "Footer navigation"}
        >
          <ul className="rycode-footer-shortcuts">
            {quickLinks.map(({ label, href }) => {
              const Icon = quickLinkIcons[href];

              return (
                <li key={href}>
                  <Link
                    className="rycode-footer-shortcut"
                    href={href}
                    locale={locale}
                  >
                    <Icon
                      className="rycode-footer-shortcut-icon"
                      aria-hidden="true"
                    />
                    <span>{label}</span>
                    <ArrowUpRight
                      className="rycode-footer-shortcut-arrow"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                className="rycode-footer-shortcut rycode-footer-shortcut-phone"
                href={`tel:${dial}`}
              >
                <Phone
                  className="rycode-footer-shortcut-icon"
                  aria-hidden="true"
                />
                <span className="rycode-footer-shortcut-contact">
                  <span>{isFa ? "تماس مستقیم" : "Call us"}</span>
                  <bdi dir="ltr">{phone}</bdi>
                </span>
                <ArrowUpRight
                  className="rycode-footer-shortcut-arrow"
                  aria-hidden="true"
                />
              </a>
            </li>
          </ul>
        </nav>

        <div className="rycode-footer-bottom">
          <p className="rycode-footer-copyright">
            <span aria-hidden="true">©</span>
            <bdi dir="ltr">{isFa ? `RYCODE ${year}` : `${year} RYCODE`}</bdi>
            <span>
              {isFa ? " — تمام حقوق محفوظ است" : " — All rights reserved"}
            </span>
          </p>
          <nav aria-label={isFa ? "راهنما و قوانین" : "Help and legal"}>
            <ul className="rycode-footer-secondary-links">
              {secondary.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} locale={locale}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="rycode-footer-location">
            <MapPin aria-hidden="true" />
            {isFa ? "ساخته‌شده در ایران" : "Built in Iran"}
          </p>
        </div>
      </Container>
    </footer>
  );
}
