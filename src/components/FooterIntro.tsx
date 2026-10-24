import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { serviceCatalog, siteSettings } from "@/server/content";
import { localizedHref, type Locale } from "@/lib/i18n";
import { socialNetworks } from "@/content/social-networks";
import { translate } from "@/lib/i18n";
import styles from "./FooterIntro.module.css";

type FooterLink = { label: string; href: string };
type FooterGroup = { title: string; links: FooterLink[] };

export async function FooterIntro({ locale }: { locale: Locale }) {
  const [settings, services] = await Promise.all([
    siteSettings(),
    serviceCatalog(locale),
  ]);
  const fa = locale === "fa";
  const href = (path: string) => localizedHref(path, locale);
  const phone = String(settings["contact.phone"] || "0998 - 122 - 2022");
  const phoneHref = "tel:" + phone.replace(/[^+0-9]/g, "");
  const groups: FooterGroup[] = [
    {
      title: fa ? "رایکد" : "RYCODE",
      links: [
        {
          label: fa ? "درباره رایکد" : "About RYCODE",
          href: "/#About%20Section",
        },
        {
          label: fa ? "فرایند همکاری" : "Our process",
          href: "/#Process%20Section",
        },
        { label: fa ? "پرسش‌های متداول" : "FAQ", href: "/#FAQ%20Section" },
        { label: fa ? "تماس با ما" : "Contact", href: "/contact" },
      ],
    },
    {
      title: fa ? "خدمات" : "Services",
      links: services.map((service) => ({
        label: service.title[locale],
        href: "/services/" + service.id,
      })),
    },
    {
      title: fa ? "بیشتر ببین" : "Explore",
      links: [
        { label: fa ? "نمونه‌کارها" : "Work", href: "/work" },
        { label: fa ? "بلاگ" : "Blog", href: "/blog" },
        { label: fa ? "حریم خصوصی" : "Privacy policy", href: "/privacy" },
        { label: fa ? "شرایط استفاده" : "Terms of use", href: "/terms" },
      ],
    },
  ];
  return (
    <section
      className={styles.intro}
      data-footer-intro="true"
      aria-label={fa ? "فوتر رایکد" : "RYCODE footer"}
    >
      <div className={styles.brandRow} dir="ltr">
        <Link
          href={href("/")}
          className={styles.brandLink}
          aria-label="RYCODE Studio"
        >
          <BrandLogo tone="light" variant="footer" />
        </Link>
        <span className={styles.brandNote}>
          {fa
            ? "استودیو طراحی و توسعهٔ دیجیتال"
            : "Digital design & development studio"}
        </span>
      </div>
      <div className={styles.invitation}>
        <div>
          <p className={styles.eyebrow}>
            <span aria-hidden="true">✦</span>
            {fa ? "قدم بعدی، با رایکد" : "YOUR NEXT MOVE, WITH RYCODE"}
          </p>
          <h2>
            {fa ? (
              <>
                بگو کجای کاری؟
                <br />
                <span>با هم جلو می‌رویم</span>
              </>
            ) : (
              <>
                Tell us where you are.
                <br />
                <span>We’ll move it forward.</span>
              </>
            )}
          </h2>
          <p className={styles.description}>
            {fa
              ? "یک ایدهٔ تازه داری، پروژه‌ات متوقف شده یا سایتت نیاز به بهبود دارد؟ از همین‌جا دربارهٔ قدم بعدی حرف بزنیم"
              : "A new idea, an unfinished project or a site that needs improvement? Let’s talk about the next step."}
          </p>
        </div>
        <div className={styles.contactAction}>
          <Link className={styles.project} href={href("/contact")}>
            <span>{fa ? "شروع یک گفت‌وگو" : "Start a conversation"}</span>
            <span className={styles.projectIcon} aria-hidden="true">
              {fa ? "↖" : "↗"}
            </span>
          </Link>
          <a className={styles.phone} href={phoneHref} dir="ltr">
            {phone}
          </a>
        </div>
      </div>
      <nav
        className={styles.directory}
        aria-label={fa ? "پیوندهای پایین سایت" : "Footer navigation"}
      >
        {groups.map((group) => (
          <div className={styles.group} key={group.title}>
            <p className={styles.label}>{group.title}</p>
            <ul>
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link href={href(link.href)}>
                    <span>{link.label}</span>
                    <span className={styles.linkArrow} aria-hidden="true">
                      {fa ? "↖" : "↗"}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className={styles.group}>
          <p className={styles.label}>
            {fa ? "در ارتباط بمانیم" : "Stay connected"}
          </p>
          <div className={styles.networks}>
            {socialNetworks.map((network) => {
              const url = String(
                settings["social." + network.name.toLowerCase()] ||
                  network.href ||
                  "",
              );
              const label = translate(network.name, locale);
              return url ? (
                <a
                  key={network.name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{label}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className={styles.networkName} key={network.name}>
                  {label}
                </span>
              );
            })}
          </div>
        </div>
      </nav>
      <div className={styles.sourceNote}>
        {fa
          ? "ساخته‌شده برای رشد واقعی کسب‌وکارها"
          : "Built for businesses ready to grow."}
      </div>
    </section>
  );
}
