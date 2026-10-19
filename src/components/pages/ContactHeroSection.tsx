import { SocialLinks } from "@/components/SocialLinks";
import { LineTrace } from "@/components/LineTrace";
import { getTranslations } from "@/lib/i18n-server";
import { Reveal } from "@/components/Motion";
import { ContactForm, FormField } from "@/components/ContactForm";
import { DistortedImage } from "@/components/DistortedImage";
import { referenceStyles } from "@/styles/reference-styles";
export async function ContactHeroSection() {
  const { t, locale } = await getTranslations();
  return (
    <section className="framer-zh7igo" data-framer-name="Hero Section">
      <div className="framer-16icyyk" data-framer-name="Container">
        <div className="framer-1lxnfwb">
          <div
            data-framer-background-image-wrapper="true"
            style={referenceStyles.s8a54025f8d}
          >
            <img
              decoding="async"
              width="13"
              height="13"
              src="/assets/44648efdb77196fa.svg"
              alt=""
              className="w-full! h-full!"
              style={referenceStyles.s1100a320a2}
            />
          </div>
        </div>
        <div
          className="framer-101bh9k hidden-1bruh7p hidden-5h19nt"
          style={referenceStyles.s4317ba2255}
        >
          <div
            data-framer-background-image-wrapper="true"
            style={referenceStyles.s8a54025f8d}
          >
            <img
              decoding="async"
              width="13"
              height="13"
              src="/assets/44648efdb77196fa.svg"
              alt=""
              className="w-full! h-full!"
              style={referenceStyles.s1100a320a2}
            />
          </div>
        </div>
        <div className="framer-1etwmq0">
          <div
            data-framer-background-image-wrapper="true"
            style={referenceStyles.s8a54025f8d}
          >
            <img
              decoding="async"
              width="13"
              height="13"
              src="/assets/44648efdb77196fa.svg"
              alt=""
              className="w-full! h-full!"
              style={referenceStyles.s1100a320a2}
            />
          </div>
        </div>
        <div
          className="framer-1pmlejd"
          data-border="true"
          data-framer-name="Layer"
        >
          <LineTrace className="framer-bjrpan" axis="x" distance={1094} />
        </div>
        <div
          className="framer-5dmamn"
          data-border="true"
          data-framer-name="Layer"
        >
          <LineTrace className="framer-yy9oih" axis="x" distance={1094} />
        </div>
        <div
          className="framer-1ggja40"
          data-border="true"
          data-framer-name="Layer"
        >
          <div className="ssr-variant">
            <LineTrace
              className="framer-15p1owo"
              axis="y"
              distance={703}
              mobileDistance={1034}
            />
          </div>
        </div>
        <div
          className="framer-1ilmqib hidden-1bruh7p hidden-5h19nt"
          data-border="true"
          data-framer-name="Layer"
        >
          <LineTrace className="framer-1fweau2" axis="y" distance={703} />
        </div>
        <div
          className="framer-ekdjfg"
          data-border="true"
          data-framer-name="Layer"
        >
          <div className="ssr-variant">
            <LineTrace
              className="framer-5pmhj6"
              axis="y"
              distance={703}
              mobileDistance={1034}
            />
          </div>
        </div>
        <div className="framer-1h20kp" data-framer-name="Content">
          <div className="framer-v5sqzd" data-framer-name="Contact Card">
            <div className="framer-hbprlz-container">
              <DistortedImage
                src="/assets/2b301ea654ac561c.png"
                fade={false}
                replay={true}
              />
            </div>
            <div className="framer-pqxl1p" data-framer-name="Layer"></div>
            <Reveal
              className="framer-1j847sh"
              data-framer-appear-id="1j847sh"
              data-framer-name="Name & Location"
              style={referenceStyles.s3670d2058c}
              as="div"
              from="translateY(200px)"
            >
              <div
                className="framer-12tkm4c"
                data-framer-component-type="RichTextContainer"
                style={referenceStyles.se120e01975}
              >
                <h5
                  className="framer-text framer-styles-preset-uttc6m"
                  data-styles-preset="lllneI4EJ"
                  dir="auto"
                  style={referenceStyles.s5a374ddac4}
                >
                  {t("RYCODE Studio")}
                </h5>
              </div>
              <div
                className="framer-1d753wm"
                data-framer-component-type="RichTextContainer"
                style={referenceStyles.se120e01975}
              >
                <p
                  className="framer-text framer-styles-preset-1qlwfog"
                  data-styles-preset="gP9Cr14vr"
                  dir="auto"
                  style={referenceStyles.s5a374ddac4}
                >
                  {t(
                    "1209 Mountain Road Place NE Albuquerque, NM 87110 United States",
                  )}
                </p>
              </div>
            </Reveal>
            <Reveal
              className="framer-1isbmdq"
              data-framer-appear-id="1isbmdq"
              data-framer-name="Contact Sources"
              style={referenceStyles.s3670d2058c}
              as="div"
              from="translateY(200px)"
            >
              <div
                className="framer-s50f44"
                data-border="true"
                data-framer-name="Contact Source"
              >
                <div
                  className="framer-1e8pes4"
                  data-framer-component-type="RichTextContainer"
                  style={referenceStyles.se120e01975}
                >
                  <p
                    className="framer-text framer-styles-preset-rx12qp"
                    data-styles-preset="EzakxyTlE"
                    dir="auto"
                    style={referenceStyles.s5a374ddac4}
                  >
                    {t("Phone")}
                  </p>
                </div>
                <div className="framer-2wh2ey-container">
                  <a
                    className="framer-n76Tz framer-9qjuV framer-1in1u19 framer-v-1in1u19 framer-1y6m83r"
                    data-framer-name="Variant 1"
                    href="tel:+989981222022"
                    dir="ltr"
                  >
                    <div
                      className="framer-19ao40j"
                      data-framer-component-type="RichTextContainer"
                      style={referenceStyles.s143c03551f}
                    >
                      <p
                        className="framer-text framer-styles-preset-12928c1"
                        data-styles-preset="V0V25Na8R"
                        dir="ltr"
                        style={referenceStyles.s22c291e9ee}
                      >
                        {"0998 - 122 - 2022"}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="framer-jzzf7m"
                data-border="true"
                data-framer-name="Contact Source"
              >
                <div
                  className="framer-lryk23"
                  data-framer-component-type="RichTextContainer"
                  style={referenceStyles.se120e01975}
                >
                  <p
                    className="framer-text framer-styles-preset-rx12qp"
                    data-styles-preset="EzakxyTlE"
                    dir="auto"
                    style={referenceStyles.s5a374ddac4}
                  >
                    {t("Project inquiry")}
                  </p>
                </div>
                <div className="framer-1dv129i-container">
                  <a
                    className="framer-n76Tz framer-9qjuV framer-1in1u19 framer-v-1in1u19 framer-1y6m83r"
                    data-framer-name="Variant 1"
                    href="#project-inquiry"
                  >
                    <div
                      className="framer-19ao40j"
                      data-framer-component-type="RichTextContainer"
                      style={referenceStyles.s143c03551f}
                    >
                      <p
                        className="framer-text framer-styles-preset-12928c1"
                        data-styles-preset="V0V25Na8R"
                        dir="auto"
                        style={referenceStyles.s22c291e9ee}
                      >
                        {t("Start a project")}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="framer-1rtz9aa" data-framer-name="Contact Source">
                <div
                  className="framer-1b7a1y6"
                  data-framer-component-type="RichTextContainer"
                  style={referenceStyles.se120e01975}
                >
                  <p
                    className="framer-text framer-styles-preset-rx12qp"
                    data-styles-preset="EzakxyTlE"
                    dir="auto"
                    style={referenceStyles.s5a374ddac4}
                  >
                    {t("Social")}
                  </p>
                </div>
                <SocialLinks locale={locale} variant="contact" />
              </div>
            </Reveal>
          </div>
          <div className="framer-7whc3i" data-framer-name="Title & Form">
            <Reveal
              className="framer-4ent3p"
              data-framer-appear-id="4ent3p"
              data-framer-component-type="RichTextContainer"
              style={referenceStyles.s3670d2058c}
              as="div"
              from="translateY(200px)"
            >
              <h2
                className="framer-text framer-styles-preset-eiwrr4"
                data-styles-preset="uizb2JBlh"
                dir="auto"
                style={referenceStyles.s5a374ddac4}
              >
                {t("Let's Build Something Great")}
              </h2>
            </Reveal>
            <ContactForm id="project-inquiry" className="framer-lknqqb">
              <div className="framer-19lbbtg" data-framer-name="All Forms">
                <Reveal
                  className="framer-14aqv6z"
                  data-framer-appear-id="14aqv6z"
                  style={referenceStyles.sd26cd70eb9}
                  as="label"
                  from="translateY(150px)"
                >
                  <div
                    className="framer-1fc8ydd"
                    data-framer-component-type="RichTextContainer"
                    style={referenceStyles.se120e01975}
                  >
                    <p
                      className="framer-text framer-styles-preset-1e46qyy"
                      data-styles-preset="l8F5L_1Ss"
                      dir="auto"
                      style={referenceStyles.s5a374ddac4}
                    >
                      {t("What's your name?")}
                    </p>
                  </div>
                  <div className="framer-form-text-input framer-form-input-wrapper framer-1qy90qm framer-form-text-input-type">
                    <FormField
                      type="text"
                      required={true}
                      name="Name"
                      placeholder={t("e.g John Doe")}
                      className="framer-form-input framer-form-input-empty"
                      as="input"
                    ></FormField>
                  </div>
                </Reveal>
                <Reveal
                  className="framer-1yitcnd"
                  data-framer-appear-id="1yitcnd"
                  style={referenceStyles.sd26cd70eb9}
                  as="label"
                  from="translateY(150px)"
                >
                  <div
                    className="framer-uemtml"
                    data-framer-component-type="RichTextContainer"
                    style={referenceStyles.se120e01975}
                  >
                    <p
                      className="framer-text framer-styles-preset-1e46qyy"
                      data-styles-preset="l8F5L_1Ss"
                      dir="auto"
                      style={referenceStyles.s5a374ddac4}
                    >
                      {t("What's your email?")}
                    </p>
                  </div>
                  <div className="framer-form-text-input framer-form-input-wrapper framer-ko6oy0">
                    <FormField
                      type="email"
                      required={true}
                      name="Email"
                      placeholder={t("e.g info@mail.com")}
                      className="framer-form-input framer-form-input-empty"
                      as="input"
                    ></FormField>
                  </div>
                </Reveal>
                <Reveal
                  className="framer-tgctt4"
                  data-framer-appear-id="tgctt4"
                  style={referenceStyles.sd26cd70eb9}
                  as="label"
                  from="translateY(150px)"
                >
                  <div
                    className="framer-1nlzkfn"
                    data-framer-component-type="RichTextContainer"
                    style={referenceStyles.se120e01975}
                  >
                    <p
                      className="framer-text framer-styles-preset-1e46qyy"
                      data-styles-preset="l8F5L_1Ss"
                      dir="auto"
                      style={referenceStyles.s5a374ddac4}
                    >
                      {t("Tell us about your project")}
                    </p>
                  </div>
                  <div className="framer-form-text-input framer-form-input-wrapper framer-762f3r framer-form-textarea-input-type">
                    <FormField
                      required={true}
                      name="Massege"
                      placeholder={t("Write in detail...")}
                      className="framer-form-input"
                      as="textarea"
                    ></FormField>
                  </div>
                </Reveal>
              </div>
              <Reveal
                className="framer-153eq3v-container"
                data-framer-appear-id="153eq3v"
                style={referenceStyles.sd26cd70eb9}
                as="div"
                from="translateY(150px)"
              >
                <button
                  type="submit"
                  className="framer-Irrnf framer-P2lQE framer-9qjuV framer-1wjqi8p framer-v-1wjqi8p"
                  data-framer-name="Default"
                  data-reset="button"
                  tabIndex={0}
                  style={referenceStyles.sa6a459f700}
                >
                  <div
                    className="framer-6vonoc"
                    data-framer-name="Dot"
                    style={referenceStyles.scc74618bfd}
                  ></div>
                  <div
                    className="framer-1uu97bw"
                    data-framer-component-type="RichTextContainer"
                    style={referenceStyles.sdb4e5c5446}
                  >
                    <p
                      className="framer-text framer-styles-preset-rx12qp"
                      data-styles-preset="EzakxyTlE"
                      dir="auto"
                      style={referenceStyles.s2a1463207d}
                    >
                      {t("Send Message")}
                    </p>
                  </div>
                  <div
                    className="framer-1akqox4"
                    data-framer-name="Icon"
                    style={referenceStyles.s9dc991bb8c}
                  >
                    <svg
                      className="framer-VdeRv framer-bhgblo"
                      role="presentation"
                      viewBox="0 0 24 24"
                      style={referenceStyles.s7981cc1085}
                    >
                      <use href="#2430009286"></use>
                    </svg>
                  </div>
                </button>
              </Reveal>
            </ContactForm>
          </div>
        </div>
      </div>
    </section>
  );
}
