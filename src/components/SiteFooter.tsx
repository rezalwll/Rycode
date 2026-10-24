import { FooterIntro } from "./FooterIntro";
import { FooterTicker, TickerBrandLogo } from "./FooterTicker";
import { getTranslations } from "@/lib/i18n-server";
import { BrandLogo } from "@/components/BrandLogo";
import { Reveal, Ticker } from "@/components/Motion";
import { referenceStyles } from "@/styles/reference-styles";
import { FooterFluid } from "@/components/FooterFluid";
export async function SiteFooter() {
  const { t, href, locale } = await getTranslations();
  return (
    <>
      <div className="framer-10ygyz8"></div>
      <FooterTicker>
        <div className="ssr-variant hidden-16wj1xo hidden-zx6348">
          <section
            className="framer-5fvLi framer-1hpyrqy framer-v-1hpyrqy w-full!"
            data-framer-name="Desktop"
            style={referenceStyles.sff297ff3a2}
          >
            <div className="framer-16xipoe" data-framer-name="Container">
              <div
                className="framer-1q8y4wj"
                data-border="true"
                data-framer-name="Content"
                style={referenceStyles.s98ab1c1925}
              >
                <Reveal
                  className="framer-1druj2q relative!"
                  data-framer-name="Logos"
                  style={referenceStyles.s67fc646546}
                  as="div"
                  from="translateY(100px)"
                >
                  <Ticker
                    className="relative! w-full! h-full!"
                    style={referenceStyles.s0d6874e36a}
                  >
                    <li
                      className="ticker-item shrink-0! relative!"
                      aria-hidden="false"
                      aria-posinset={1}
                      aria-setsize={5}
                      style={referenceStyles.se800f65d54}
                    >
                      <div className="framer-1d93l7q">
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <TickerBrandLogo />
                        </div>
                      </div>
                    </li>
                    <li
                      className="ticker-item shrink-0! relative!"
                      aria-hidden="false"
                      aria-posinset={2}
                      aria-setsize={5}
                      style={referenceStyles.se800f65d54}
                    >
                      <div className="framer-khygi2">
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <TickerBrandLogo />
                        </div>
                      </div>
                    </li>
                    <li
                      className="ticker-item shrink-0! relative!"
                      aria-hidden="false"
                      aria-posinset={3}
                      aria-setsize={5}
                      style={referenceStyles.se800f65d54}
                    >
                      <div className="framer-173s6db">
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <TickerBrandLogo />
                        </div>
                      </div>
                    </li>
                    <li
                      className="ticker-item shrink-0! relative!"
                      aria-hidden="false"
                      aria-posinset={4}
                      aria-setsize={5}
                      style={referenceStyles.se800f65d54}
                    >
                      <div className="framer-1vs68u7">
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <TickerBrandLogo />
                        </div>
                      </div>
                    </li>
                    <li
                      className="ticker-item shrink-0! relative!"
                      aria-hidden="false"
                      aria-posinset={5}
                      aria-setsize={5}
                      style={referenceStyles.se800f65d54}
                    >
                      <div className="framer-s8zzta">
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <TickerBrandLogo />
                        </div>
                      </div>
                    </li>
                  </Ticker>
                </Reveal>{" "}
              </div>
            </div>
          </section>
        </div>
        <div className="ssr-variant hidden-zx6348 hidden-uxe76n">
          <section
            className="framer-5fvLi framer-1hpyrqy framer-v-1mofl5x w-full!"
            data-framer-name="Phone"
            style={referenceStyles.sff297ff3a2}
          >
            <div className="framer-16xipoe" data-framer-name="Container">
              <div
                className="framer-1q8y4wj"
                data-border="true"
                data-framer-name="Content"
                style={referenceStyles.s98ab1c1925}
              >
                <Reveal
                  className="framer-1druj2q relative!"
                  data-framer-name="Logos"
                  style={referenceStyles.sc89cffd404}
                  as="div"
                  from="translateY(40px)"
                >
                  <Ticker
                    className="relative! w-full! h-full!"
                    style={referenceStyles.s0d6874e36a}
                  >
                    <li
                      className="ticker-item shrink-0! relative!"
                      aria-hidden="false"
                      aria-posinset={1}
                      aria-setsize={5}
                      style={referenceStyles.se800f65d54}
                    >
                      <div className="framer-1d93l7q">
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <TickerBrandLogo />
                        </div>
                      </div>
                    </li>
                    <li
                      className="ticker-item shrink-0! relative!"
                      aria-hidden="false"
                      aria-posinset={2}
                      aria-setsize={5}
                      style={referenceStyles.se800f65d54}
                    >
                      <div className="framer-khygi2">
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <TickerBrandLogo />
                        </div>
                      </div>
                    </li>
                    <li
                      className="ticker-item shrink-0! relative!"
                      aria-hidden="false"
                      aria-posinset={3}
                      aria-setsize={5}
                      style={referenceStyles.se800f65d54}
                    >
                      <div className="framer-173s6db">
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <TickerBrandLogo />
                        </div>
                      </div>
                    </li>
                    <li
                      className="ticker-item shrink-0! relative!"
                      aria-hidden="false"
                      aria-posinset={4}
                      aria-setsize={5}
                      style={referenceStyles.se800f65d54}
                    >
                      <div className="framer-1vs68u7">
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <TickerBrandLogo />
                        </div>
                      </div>
                    </li>
                    <li
                      className="ticker-item shrink-0! relative!"
                      aria-hidden="false"
                      aria-posinset={5}
                      aria-setsize={5}
                      style={referenceStyles.se800f65d54}
                    >
                      <div className="framer-s8zzta">
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <TickerBrandLogo />
                        </div>
                      </div>
                    </li>
                  </Ticker>
                </Reveal>{" "}
              </div>
            </div>
          </section>
        </div>
        <div className="ssr-variant hidden-16wj1xo hidden-uxe76n">
          <section
            className="framer-5fvLi framer-1hpyrqy framer-v-7ddgo w-full!"
            data-framer-name="Tablet"
            style={referenceStyles.sff297ff3a2}
          >
            <div className="framer-16xipoe" data-framer-name="Container">
              <div
                className="framer-1q8y4wj"
                data-border="true"
                data-framer-name="Content"
                style={referenceStyles.s98ab1c1925}
              >
                <Reveal
                  className="framer-1druj2q relative!"
                  data-framer-name="Logos"
                  style={referenceStyles.s195c5f8295}
                  as="div"
                  from="translateY(60px)"
                >
                  <Ticker
                    className="relative! w-full! h-full!"
                    style={referenceStyles.s0d6874e36a}
                  >
                    <li
                      className="ticker-item shrink-0! relative!"
                      aria-hidden="false"
                      aria-posinset={1}
                      aria-setsize={5}
                      style={referenceStyles.se800f65d54}
                    >
                      <div className="framer-1d93l7q">
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <TickerBrandLogo />
                        </div>
                      </div>
                    </li>
                    <li
                      className="ticker-item shrink-0! relative!"
                      aria-hidden="false"
                      aria-posinset={2}
                      aria-setsize={5}
                      style={referenceStyles.se800f65d54}
                    >
                      <div className="framer-khygi2">
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <TickerBrandLogo />
                        </div>
                      </div>
                    </li>
                    <li
                      className="ticker-item shrink-0! relative!"
                      aria-hidden="false"
                      aria-posinset={3}
                      aria-setsize={5}
                      style={referenceStyles.se800f65d54}
                    >
                      <div className="framer-173s6db">
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <TickerBrandLogo />
                        </div>
                      </div>
                    </li>
                    <li
                      className="ticker-item shrink-0! relative!"
                      aria-hidden="false"
                      aria-posinset={4}
                      aria-setsize={5}
                      style={referenceStyles.se800f65d54}
                    >
                      <div className="framer-1vs68u7">
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <TickerBrandLogo />
                        </div>
                      </div>
                    </li>
                    <li
                      className="ticker-item shrink-0! relative!"
                      aria-hidden="false"
                      aria-posinset={5}
                      aria-setsize={5}
                      style={referenceStyles.se800f65d54}
                    >
                      <div className="framer-s8zzta">
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <TickerBrandLogo />
                        </div>
                      </div>
                    </li>
                  </Ticker>
                </Reveal>{" "}
              </div>
            </div>
          </section>
        </div>
      </FooterTicker>
      <div className="framer-1u5xqzl-container">
        <div className="ssr-variant hidden-16wj1xo hidden-zx6348">
          <footer
            className="framer-CoplX framer-9qjuV framer-1bxxpnk framer-v-1bxxpnk rycode-footer-fluid-host w-full!"
            data-framer-name="Desktop"
            style={referenceStyles.s338e3545a1}
          >
            <FooterFluid />
            <div className="framer-1c22mt7" data-framer-name="Container">
              <div className="framer-foecea" data-framer-name="Content">
                <FooterIntro locale={locale} />
                <Reveal
                  className="framer-f34uki"
                  data-border="true"
                  data-framer-name="Copyright & Logo"
                  style={referenceStyles.s1f0db4244e}
                  as="div"
                  from="translateY(200px)"
                >
                  <div className="framer-ejvtxl" data-framer-name="Copyright">
                    <div
                      className="framer-1be5m3u"
                      data-framer-component-type="RichTextContainer"
                      style={referenceStyles.sefbf82470d}
                    >
                      <p
                        className="framer-text framer-styles-preset-12928c1"
                        data-styles-preset="V0V25Na8R"
                        dir="auto"
                        style={referenceStyles.s0c39c3123b}
                      >
                        {t("©2026 RYCODE Studio. All Rights Reserved.")}
                      </p>
                    </div>
                    <div className="framer-1kx7ns8" data-framer-name="Policy">
                      <div className="framer-1i6bpqi-container">
                        <a
                          className="framer-fR17n framer-CkNQH framer-BGvaq framer-P2lQE framer-h28y84 framer-v-1vijufv framer-zcpo7a"
                          data-framer-name="Terms & Policy"
                          href={href("/terms")}
                          target="_blank"
                        >
                          <div
                            className="framer-10d9t98"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.sdb4e5c5446}
                          >
                            <p
                              className="framer-text framer-styles-preset-rx12qp"
                              data-styles-preset="EzakxyTlE"
                              dir="auto"
                              style={referenceStyles.s2a1463207d}
                            >
                              {t("Terms of Use")}
                            </p>
                          </div>
                          <div
                            className="framer-zvnvf1"
                            data-framer-name="Line"
                            style={referenceStyles.saab222fd1f}
                          ></div>
                        </a>
                      </div>
                      <div className="framer-1tesv7u-container">
                        <a
                          className="framer-fR17n framer-CkNQH framer-BGvaq framer-P2lQE framer-h28y84 framer-v-1vijufv framer-zcpo7a"
                          data-framer-name="Terms & Policy"
                          href={href("/privacy")}
                          target="_blank"
                        >
                          <div
                            className="framer-10d9t98"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.sdb4e5c5446}
                          >
                            <p
                              className="framer-text framer-styles-preset-rx12qp"
                              data-styles-preset="EzakxyTlE"
                              dir="auto"
                              style={referenceStyles.s2a1463207d}
                            >
                              {t("Privacy Policy")}
                            </p>
                          </div>
                          <div
                            className="framer-zvnvf1"
                            data-framer-name="Line"
                            style={referenceStyles.saab222fd1f}
                          ></div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="framer-157dvl2">
                    <div
                      data-framer-background-image-wrapper="true"
                      style={referenceStyles.s8a54025f8d}
                    >
                      <BrandLogo tone="light" variant="footer" />
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </footer>
        </div>
        <div className="ssr-variant hidden-zx6348 hidden-uxe76n">
          <footer
            className="framer-CoplX framer-9qjuV framer-1bxxpnk framer-v-1vxswwt rycode-footer-fluid-host w-full!"
            data-framer-name="Phone"
            style={referenceStyles.s338e3545a1}
          >
            <FooterFluid />
            <div className="framer-1c22mt7" data-framer-name="Container">
              <div className="framer-foecea" data-framer-name="Content">
                <FooterIntro locale={locale} />
                <Reveal
                  className="framer-f34uki"
                  data-border="true"
                  data-framer-name="Copyright & Logo"
                  style={referenceStyles.sf83652be1d}
                  as="div"
                  from="translateY(100px)"
                >
                  <div className="framer-ejvtxl" data-framer-name="Copyright">
                    <div
                      className="framer-1be5m3u"
                      data-framer-component-type="RichTextContainer"
                      style={referenceStyles.sefbf82470d}
                    >
                      <p
                        className="framer-text framer-styles-preset-12928c1"
                        data-styles-preset="V0V25Na8R"
                        dir="auto"
                        style={referenceStyles.s58373922e0}
                      >
                        {t("©2026 RYCODE Studio. All Rights Reserved.")}
                      </p>
                    </div>
                    <div className="framer-1kx7ns8" data-framer-name="Policy">
                      <div className="framer-1i6bpqi-container">
                        <a
                          className="framer-fR17n framer-CkNQH framer-BGvaq framer-P2lQE framer-h28y84 framer-v-1vijufv framer-zcpo7a"
                          data-framer-name="Terms & Policy"
                          href={href("/terms")}
                          target="_blank"
                        >
                          <div
                            className="framer-10d9t98"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.sdb4e5c5446}
                          >
                            <p
                              className="framer-text framer-styles-preset-rx12qp"
                              data-styles-preset="EzakxyTlE"
                              dir="auto"
                              style={referenceStyles.s2a1463207d}
                            >
                              {t("Terms of Use")}
                            </p>
                          </div>
                          <div
                            className="framer-zvnvf1"
                            data-framer-name="Line"
                            style={referenceStyles.saab222fd1f}
                          ></div>
                        </a>
                      </div>
                      <div className="framer-1tesv7u-container">
                        <a
                          className="framer-fR17n framer-CkNQH framer-BGvaq framer-P2lQE framer-h28y84 framer-v-1vijufv framer-zcpo7a"
                          data-framer-name="Terms & Policy"
                          href={href("/privacy")}
                          target="_blank"
                        >
                          <div
                            className="framer-10d9t98"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.sdb4e5c5446}
                          >
                            <p
                              className="framer-text framer-styles-preset-rx12qp"
                              data-styles-preset="EzakxyTlE"
                              dir="auto"
                              style={referenceStyles.s2a1463207d}
                            >
                              {t("Privacy Policy")}
                            </p>
                          </div>
                          <div
                            className="framer-zvnvf1"
                            data-framer-name="Line"
                            style={referenceStyles.saab222fd1f}
                          ></div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="framer-157dvl2">
                    <div
                      data-framer-background-image-wrapper="true"
                      style={referenceStyles.s8a54025f8d}
                    >
                      <BrandLogo tone="light" variant="footer" />
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </footer>
        </div>
        <div className="ssr-variant hidden-16wj1xo hidden-uxe76n">
          <footer
            className="framer-CoplX framer-9qjuV framer-1bxxpnk framer-v-1sao26m rycode-footer-fluid-host w-full!"
            data-framer-name="Tablet"
            style={referenceStyles.s338e3545a1}
          >
            <FooterFluid />
            <div className="framer-1c22mt7" data-framer-name="Container">
              <div className="framer-foecea" data-framer-name="Content">
                <FooterIntro locale={locale} />
                <Reveal
                  className="framer-f34uki"
                  data-border="true"
                  data-framer-name="Copyright & Logo"
                  style={referenceStyles.s1f0db4244e}
                  as="div"
                  from="translateY(200px)"
                >
                  <div className="framer-ejvtxl" data-framer-name="Copyright">
                    <div
                      className="framer-1be5m3u"
                      data-framer-component-type="RichTextContainer"
                      style={referenceStyles.sefbf82470d}
                    >
                      <p
                        className="framer-text framer-styles-preset-12928c1"
                        data-styles-preset="V0V25Na8R"
                        dir="auto"
                        style={referenceStyles.s0c39c3123b}
                      >
                        {t("©2026 RYCODE Studio. All Rights Reserved.")}
                      </p>
                    </div>
                    <div className="framer-1kx7ns8" data-framer-name="Policy">
                      <div className="framer-1i6bpqi-container">
                        <a
                          className="framer-fR17n framer-CkNQH framer-BGvaq framer-P2lQE framer-h28y84 framer-v-1vijufv framer-zcpo7a"
                          data-framer-name="Terms & Policy"
                          href={href("/terms")}
                          target="_blank"
                        >
                          <div
                            className="framer-10d9t98"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.sdb4e5c5446}
                          >
                            <p
                              className="framer-text framer-styles-preset-rx12qp"
                              data-styles-preset="EzakxyTlE"
                              dir="auto"
                              style={referenceStyles.s2a1463207d}
                            >
                              {t("Terms of Use")}
                            </p>
                          </div>
                          <div
                            className="framer-zvnvf1"
                            data-framer-name="Line"
                            style={referenceStyles.saab222fd1f}
                          ></div>
                        </a>
                      </div>
                      <div className="framer-1tesv7u-container">
                        <a
                          className="framer-fR17n framer-CkNQH framer-BGvaq framer-P2lQE framer-h28y84 framer-v-1vijufv framer-zcpo7a"
                          data-framer-name="Terms & Policy"
                          href={href("/privacy")}
                          target="_blank"
                        >
                          <div
                            className="framer-10d9t98"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.sdb4e5c5446}
                          >
                            <p
                              className="framer-text framer-styles-preset-rx12qp"
                              data-styles-preset="EzakxyTlE"
                              dir="auto"
                              style={referenceStyles.s2a1463207d}
                            >
                              {t("Privacy Policy")}
                            </p>
                          </div>
                          <div
                            className="framer-zvnvf1"
                            data-framer-name="Line"
                            style={referenceStyles.saab222fd1f}
                          ></div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="framer-157dvl2">
                    <div
                      data-framer-background-image-wrapper="true"
                      style={referenceStyles.s8a54025f8d}
                    >
                      <BrandLogo tone="light" variant="footer" />
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
