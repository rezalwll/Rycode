import { ArrowUpRight, Phone } from "lucide-react";
import { siteSettings } from "@/server/content";
import { getTranslations } from "@/lib/i18n-server";
import { socialNetworks } from "@/content/social-networks";
import { BrandLogo } from "@/components/BrandLogo";
import { ContactForm, FormField, FormSubmit } from "@/components/ContactForm";
import styles from "./ContactHeroSection.module.css";

export async function ContactHeroSection() {
  const { t, locale } = await getTranslations();
  const fa = locale === "fa";
  const settings = await siteSettings();
  const phone = String(settings["contact.phone"] || "0998 - 122 - 2022");
  const dial = phone.replace(/[^+0-9]/g, "");
  const phoneHref =
    "tel:" + (dial.startsWith("0") ? "+98" + dial.slice(1) : dial);
  const address = String(settings["contact.address." + locale] || "");

  return (
    <section
      className={styles.contact}
      dir={fa ? "rtl" : "ltr"}
      aria-labelledby="contact-heading"
    >
      <div className={styles.portrait}>
        <img
          src="/assets/c9e087c0e10f7761.png"
          width={960}
          height={1200}
          alt=""
          fetchPriority="high"
          className={styles.portraitImage}
        />
        <div className={styles.portraitBrand}>
          <BrandLogo />
        </div>
        <div className={styles.portraitCopy}>
          <span className={styles.eyebrow}>
            ✦{" "}
            {fa ? "از یک گفت‌وگو شروع می‌شود" : "It starts with a conversation"}
          </span>
          <p>
            {fa ? (
              <>
                ایده از تو،
                <br />
                قدم بعدی با هم
              </>
            ) : (
              <>
                Your idea.
                <br />
                Our next chapter.
              </>
            )}
          </p>
        </div>
        <span className={styles.photoTab}>
          {fa ? "فضایی برای ایده‌های تازه" : "Room for new ideas"}
        </span>
      </div>
      <div className={styles.content}>
        <div className={styles.formCard}>
          <div className={styles.intro}>
            <h1 id="contact-heading">{fa ? "بیا حرف بزنیم" : "Let’s talk"}</h1>
            <p>
              {fa
                ? "از ایده، پروژه یا چالشت بگو؛ با هم راهش را پیدا می‌کنیم"
                : "Tell us about your idea, project or challenge. Let’s find a way forward."}
            </p>
          </div>
          <ContactForm id="project-inquiry" className={styles.form}>
            <div className={styles.fieldRow}>
              <label className={styles.field}>
                <span>{fa ? "نام و نام خانوادگی" : "Your name"}</span>
                <FormField
                  as="input"
                  type="text"
                  name="Name"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={120}
                  placeholder={fa ? "نام شما" : "Your name"}
                />
              </label>
              <label className={styles.field}>
                <span>{fa ? "شمارهٔ تماس" : "Phone number"}</span>
                <FormField
                  as="input"
                  type="tel"
                  name="Phone"
                  autoComplete="tel"
                  placeholder="09xxxxxxxxx"
                  aria-describedby="contact-method-hint"
                />
              </label>
              <label className={styles.field}>
                <span>{fa ? "ایمیل" : "Email"}</span>
                <FormField
                  as="input"
                  type="email"
                  name="Email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  aria-describedby="contact-method-hint"
                />
              </label>
            </div>
            <p id="contact-method-hint" className={styles.hint}>
              {fa
                ? "برای پاسخ، شمارهٔ تماس یا ایمیل را وارد کن"
                : "Leave a phone number or email so we can reply."}
            </p>
            <label className={styles.field}>
              <span>{fa ? "دربارهٔ پروژه" : "About your project"}</span>
              <FormField
                as="textarea"
                name="Message"
                required
                minLength={10}
                maxLength={5000}
                rows={3}
                placeholder={
                  fa ? "چه چیزی در ذهن داری؟" : "What do you have in mind?"
                }
              />
            </label>
            <FormSubmit
              type="submit"
              data-fill-button
              className={styles.submit}
            >
              {t("Send Message")}
            </FormSubmit>
          </ContactForm>
        </div>
        <div className={styles.details}>
          <div className={styles.phoneCard}>
            <Phone size={24} strokeWidth={1.5} aria-hidden />
            <h2>{fa ? "مستقیم در تماس باش" : "A direct connection"}</h2>
            {address && <p className={styles.address}>{address}</p>}
            <a href={phoneHref} className={styles.phone} dir="ltr">
              {phone}
            </a>
            <span className={styles.small}>
              {fa
                ? "دربارهٔ قدم بعدی حرف بزنیم"
                : "Let’s talk about the next step"}
            </span>
          </div>
          <div className={styles.detailPhoto}>
            <img
              src="/assets/13dc8d5e7fa13d30.png"
              width={2208}
              height={1912}
              alt=""
              loading="lazy"
            />
          </div>
          <nav
            className={styles.socials}
            aria-label={fa ? "شبکه‌های اجتماعی" : "Social media"}
          >
            {socialNetworks.map((network) => {
              const url = String(
                settings["social." + network.name.toLowerCase()] ||
                  network.href ||
                  "",
              );
              const Element = url ? "a" : "div";
              return (
                <Element
                  key={network.name}
                  href={url || undefined}
                  target={url ? "_blank" : undefined}
                  rel={url ? "noopener noreferrer" : undefined}
                  className={styles.social}
                >
                  <span
                    className={styles.socialIcon}
                    aria-hidden
                    style={{ maskImage: `url("${network.icon}")` }}
                  />
                  <span>{t(network.name)}</span>
                  {url && (
                    <ArrowUpRight
                      size={15}
                      className={styles.socialArrow}
                      aria-hidden
                    />
                  )}
                </Element>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
}
