import { getTranslations } from "@/lib/i18n-server";
import Link from "next/link";
import { Reveal, SplitText } from "@/components/Motion";
import { referenceStyles } from "@/styles/reference-styles";
export async function HomePricingSection() {
  const { t, locale, href } = await getTranslations();
  return (
    <section
      className="framer-t2o7bb"
      data-framer-name="Pricing Section"
      id="Pricing Section"
    >
      <div className="framer-sxa9xf" data-framer-name="Container">
        <div className="framer-1uvtqlu" data-framer-name="Content">
          <Reveal
            className="framer-140y4pt"
            data-framer-name="Tag & Title"
            style={referenceStyles.s5916c9ffdd}
            as="div"
            from="translateY(200px)"
          >
            <div className="ssr-variant">
              <div className="framer-pvemih-container">
                <div
                  className="framer-XXyqM framer-UO2GW framer-P2lQE framer-1fz5pen framer-v-1tly2e5"
                  data-framer-name="Variant 2"
                >
                  <div
                    className="framer-1f0zcfp"
                    data-framer-component-type="RichTextContainer"
                    style={referenceStyles.sa95470ceb9}
                  >
                    <p
                      className="framer-text framer-styles-preset-10zsitg"
                      data-styles-preset="Ic0XZZbRG"
                      dir="auto"
                      style={referenceStyles.s781d92f43a}
                    >
                      {"✦"}
                    </p>
                  </div>
                  <div
                    className="framer-qs9ltm"
                    data-framer-component-type="RichTextContainer"
                    style={referenceStyles.sdb4e5c5446}
                  >
                    <p
                      className="framer-text framer-styles-preset-rx12qp"
                      data-styles-preset="EzakxyTlE"
                      dir="auto"
                      style={referenceStyles.s2a1463207d}
                    >
                      {t("PRICING")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="framer-mpjt7g-container"
              data-code-component-plugin-id="84d4c1"
            >
              <div className="ssr-variant hidden-1bcn26v hidden-1fs2pis">
                <SplitText
                  className="w-full!"
                  style={referenceStyles.s74a84b5217}
                  as="div"
                  scrollLinked={true}
                  localizedText={
                    locale === "fa"
                      ? t("Flexible plans for growing businesses.")
                      : undefined
                  }
                >
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s4c7dd41f2b}>{"F"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"l"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"x"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"i"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"b"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"l"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s4c7dd41f2b}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s4c7dd41f2b}>{"p"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"l"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"s"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s4c7dd41f2b}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s4c7dd41f2b}>{"f"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"o"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s4c7dd41f2b}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s4c7dd41f2b}>{"g"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"o"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"w"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"i"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"g"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s4c7dd41f2b}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s4c7dd41f2b}>{"b"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"u"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"s"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"i"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"s"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"s"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"s"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"."}</span>
                  </span>
                </SplitText>
              </div>
              <div className="ssr-variant hidden-72rtr7 hidden-1fs2pis">
                <SplitText
                  className="w-full!"
                  style={referenceStyles.s199340d136}
                  as="div"
                  scrollLinked={true}
                  localizedText={
                    locale === "fa"
                      ? t("Flexible plans for growing businesses.")
                      : undefined
                  }
                >
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s4c7dd41f2b}>{"F"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"l"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"x"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"i"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"b"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"l"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s4c7dd41f2b}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s4c7dd41f2b}>{"p"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"l"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"s"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s4c7dd41f2b}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s4c7dd41f2b}>{"f"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"o"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s4c7dd41f2b}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s4c7dd41f2b}>{"g"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"o"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"w"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"i"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"g"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s4c7dd41f2b}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s4c7dd41f2b}>{"b"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"u"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"s"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"i"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"s"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"s"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"s"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"."}</span>
                  </span>
                </SplitText>
              </div>
              <div className="ssr-variant hidden-1bcn26v hidden-72rtr7">
                <SplitText
                  className="w-full!"
                  style={referenceStyles.s78db03cecf}
                  as="div"
                  scrollLinked={true}
                  localizedText={
                    locale === "fa"
                      ? t("Flexible plans for growing businesses.")
                      : undefined
                  }
                >
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s4c7dd41f2b}>{"F"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"l"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"x"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"i"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"b"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"l"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s4c7dd41f2b}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s4c7dd41f2b}>{"p"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"l"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"s"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s4c7dd41f2b}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s4c7dd41f2b}>{"f"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"o"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s4c7dd41f2b}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s4c7dd41f2b}>{"g"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"o"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"w"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"i"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"g"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s4c7dd41f2b}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s4c7dd41f2b}>{"b"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"u"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"s"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"i"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"s"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"s"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"s"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"."}</span>
                  </span>
                </SplitText>
              </div>
            </div>
          </Reveal>
          <div className="framer-ojyley" data-framer-name="Card Wrapper">
            <div className="ssr-variant hidden-1bcn26v hidden-1fs2pis">
              <Reveal
                className="framer-18i0qd2-container"
                style={referenceStyles.s5eb3c6a9d0}
                as="div"
                from="translateX(-200px) translateY(200px) scale(0.6)"
              >
                <div
                  className="framer-Hg91I framer-1jK3j framer-A8dYT framer-9qjuV framer-pSPxj framer-1lrcio8 framer-v-1lrcio8 w-full!"
                  data-framer-name="Variant 1"
                  style={referenceStyles.sd08d862fd9}
                >
                  <div
                    className="framer-1p13pm5"
                    data-framer-name="Title & Price Tag"
                  >
                    <div
                      className="framer-w26oxm"
                      data-framer-name="Tag & Title"
                    >
                      <div className="framer-qqnlxx-container">
                        <div
                          className="framer-Srdvx framer-9qjuV framer-1kavjie framer-v-1kavjie"
                          data-framer-name="Variant 1"
                          style={referenceStyles.sbe342baaa4}
                        >
                          <div
                            className="framer-947gs5"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.sa95470ceb9}
                          >
                            <p
                              className="framer-text framer-styles-preset-12928c1"
                              data-styles-preset="V0V25Na8R"
                              dir="auto"
                              style={referenceStyles.s781d92f43a}
                            >
                              {"●"}
                            </p>
                          </div>
                          <div
                            className="framer-wm51rx"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.sdb4e5c5446}
                          >
                            <p
                              className="framer-text framer-styles-preset-12928c1"
                              data-styles-preset="V0V25Na8R"
                              dir="auto"
                              style={referenceStyles.s2a1463207d}
                            >
                              {t("Single Project")}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1cymiwu" data-framer-name="Title">
                        <div
                          className="framer-ketv43"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.sc78620297e}
                        >
                          <h4
                            className="framer-text framer-styles-preset-167816o"
                            data-styles-preset="FECrL8yAb"
                            dir="auto"
                            style={referenceStyles.sdc1c86cde7}
                          >
                            {t("Single")}
                          </h4>
                        </div>
                        <div
                          className="framer-wgwegd"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3fb15774c5}
                        >
                          <h2
                            className="framer-text framer-styles-preset-eiwrr4"
                            data-styles-preset="uizb2JBlh"
                            dir="auto"
                            style={referenceStyles.sad631ac374}
                          >
                            {t("Project")}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div
                      className="framer-1w0jopw"
                      data-framer-name="Details & Price Tag"
                    >
                      <div
                        className="framer-1cp4jm1"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.sdb4e5c5446}
                      >
                        <p
                          className="framer-text framer-styles-preset-12928c1"
                          data-styles-preset="V0V25Na8R"
                          dir="auto"
                          style={referenceStyles.s76fdf01e72}
                        >
                          {t(
                            "Perfect for startups and businesses launching a single premium website.",
                          )}
                        </p>
                      </div>
                      <div
                        className="framer-rz401r"
                        data-framer-name="Pricing"
                        style={referenceStyles.s0facb403f2}
                      >
                        <div
                          className="framer-1ywd3e3"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3a05f9f9c1}
                        >
                          <p
                            className="framer-text framer-styles-preset-12928c1"
                            data-styles-preset="V0V25Na8R"
                            dir="auto"
                            style={referenceStyles.s833ee3534c}
                          >
                            {t("From")}
                          </p>
                        </div>
                        <div
                          className="framer-94mya7"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s0c7a5a398f}
                        >
                          <h2
                            className="framer-text framer-styles-preset-eiwrr4"
                            data-styles-preset="uizb2JBlh"
                            dir="auto"
                            style={referenceStyles.s1a92a053b3}
                          >
                            {t("$499")}
                          </h2>
                        </div>
                        <div
                          className="framer-1lurp7h"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3a05f9f9c1}
                        >
                          <p
                            className="framer-text framer-styles-preset-12928c1"
                            data-styles-preset="V0V25Na8R"
                            dir="auto"
                            style={referenceStyles.s833ee3534c}
                          >
                            {t("/ Project")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-s8txjy" data-framer-name="Text & Icon">
                    <div
                      className="framer-1cuea4m"
                      data-framer-name="Icon & Text"
                    >
                      <div className="framer-ru6qf3">
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            width="80"
                            height="80"
                            src="/assets/ebc31eb3df399936.png"
                            alt={t("Icon")}
                            className="w-full! h-full!"
                            style={referenceStyles.s1100a320a2}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-ciuo7n"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.sefbf82470d}
                      >
                        <p
                          className="framer-text framer-styles-preset-nxx96o"
                          data-styles-preset="fHx27tEvF"
                          dir="auto"
                          style={referenceStyles.s0c39c3123b}
                        >
                          {t("Available Worldwide")}
                        </p>
                      </div>
                    </div>
                    <div className="framer-2u8td3-container">
                      <Link
                        className="framer-ez4Wr framer-c40k20 framer-v-c40k20 framer-v8kq0b"
                        data-framer-name="Variant 1"
                        href={href("/contact")}
                        style={referenceStyles.s0dfe548b37}
                      >
                        <div
                          className="framer-WzhHM framer-g86u4c"
                          style={referenceStyles.sf1c1de30b4}
                        ></div>
                        <div
                          className="framer-WzhHM framer-tnk03u"
                          style={referenceStyles.sf1c1de30b4}
                        ></div>
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="ssr-variant hidden-72rtr7 hidden-1fs2pis">
              <Reveal
                className="framer-18i0qd2-container"
                style={referenceStyles.s5eb3c6a9d0}
                as="div"
                from="translateX(-200px) translateY(200px) scale(0.6)"
              >
                <div
                  className="framer-Hg91I framer-1jK3j framer-A8dYT framer-9qjuV framer-pSPxj framer-1lrcio8 framer-v-1nffz13 w-full!"
                  data-framer-name="Variant 3"
                  style={referenceStyles.sd08d862fd9}
                >
                  <div
                    className="framer-1p13pm5"
                    data-framer-name="Title & Price Tag"
                  >
                    <div
                      className="framer-w26oxm"
                      data-framer-name="Tag & Title"
                    >
                      <div className="framer-qqnlxx-container">
                        <div
                          className="framer-Srdvx framer-9qjuV framer-1kavjie framer-v-1kavjie"
                          data-framer-name="Variant 1"
                          style={referenceStyles.sbe342baaa4}
                        >
                          <div
                            className="framer-947gs5"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.sa95470ceb9}
                          >
                            <p
                              className="framer-text framer-styles-preset-12928c1"
                              data-styles-preset="V0V25Na8R"
                              dir="auto"
                              style={referenceStyles.s781d92f43a}
                            >
                              {"●"}
                            </p>
                          </div>
                          <div
                            className="framer-wm51rx"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.sdb4e5c5446}
                          >
                            <p
                              className="framer-text framer-styles-preset-12928c1"
                              data-styles-preset="V0V25Na8R"
                              dir="auto"
                              style={referenceStyles.s2a1463207d}
                            >
                              {t("Single Project")}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1cymiwu" data-framer-name="Title">
                        <div
                          className="framer-ketv43"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.sc78620297e}
                        >
                          <h4
                            className="framer-text framer-styles-preset-167816o"
                            data-styles-preset="FECrL8yAb"
                            dir="auto"
                            style={referenceStyles.sdc1c86cde7}
                          >
                            {t("Single")}
                          </h4>
                        </div>
                        <div
                          className="framer-wgwegd"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3fb15774c5}
                        >
                          <h2
                            className="framer-text framer-styles-preset-eiwrr4"
                            data-styles-preset="uizb2JBlh"
                            dir="auto"
                            style={referenceStyles.sad631ac374}
                          >
                            {t("Project")}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div
                      className="framer-1w0jopw"
                      data-framer-name="Details & Price Tag"
                    >
                      <div
                        className="framer-1cp4jm1"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.sdb4e5c5446}
                      >
                        <p
                          className="framer-text framer-styles-preset-12928c1"
                          data-styles-preset="V0V25Na8R"
                          dir="auto"
                          style={referenceStyles.s76fdf01e72}
                        >
                          {t(
                            "Perfect for startups and businesses launching a single premium website.",
                          )}
                        </p>
                      </div>
                      <div
                        className="framer-rz401r"
                        data-framer-name="Pricing"
                        style={referenceStyles.s0facb403f2}
                      >
                        <div
                          className="framer-1ywd3e3"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3a05f9f9c1}
                        >
                          <p
                            className="framer-text framer-styles-preset-12928c1"
                            data-styles-preset="V0V25Na8R"
                            dir="auto"
                            style={referenceStyles.s833ee3534c}
                          >
                            {t("From")}
                          </p>
                        </div>
                        <div
                          className="framer-94mya7"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s0c7a5a398f}
                        >
                          <h2
                            className="framer-text framer-styles-preset-eiwrr4"
                            data-styles-preset="uizb2JBlh"
                            dir="auto"
                            style={referenceStyles.s1a92a053b3}
                          >
                            {t("$499")}
                          </h2>
                        </div>
                        <div
                          className="framer-1lurp7h"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3a05f9f9c1}
                        >
                          <p
                            className="framer-text framer-styles-preset-12928c1"
                            data-styles-preset="V0V25Na8R"
                            dir="auto"
                            style={referenceStyles.s833ee3534c}
                          >
                            {t("/ Project")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-s8txjy" data-framer-name="Text & Icon">
                    <div
                      className="framer-1cuea4m"
                      data-framer-name="Icon & Text"
                    >
                      <div className="framer-ru6qf3">
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            width="80"
                            height="80"
                            src="/assets/ebc31eb3df399936.png"
                            alt={t("Icon")}
                            className="w-full! h-full!"
                            style={referenceStyles.s1100a320a2}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-ciuo7n"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.sefbf82470d}
                      >
                        <p
                          className="framer-text framer-styles-preset-nxx96o"
                          data-styles-preset="fHx27tEvF"
                          dir="auto"
                          style={referenceStyles.s0c39c3123b}
                        >
                          {t("Available Worldwide")}
                        </p>
                      </div>
                    </div>
                    <div className="framer-2u8td3-container">
                      <Link
                        className="framer-ez4Wr framer-c40k20 framer-v-c40k20 framer-v8kq0b"
                        data-framer-name="Variant 1"
                        href={href("/contact")}
                        style={referenceStyles.s0dfe548b37}
                      >
                        <div
                          className="framer-WzhHM framer-g86u4c"
                          style={referenceStyles.sf1c1de30b4}
                        ></div>
                        <div
                          className="framer-WzhHM framer-tnk03u"
                          style={referenceStyles.sf1c1de30b4}
                        ></div>
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="ssr-variant hidden-1bcn26v hidden-72rtr7">
              <Reveal
                className="framer-18i0qd2-container"
                style={referenceStyles.s5eb3c6a9d0}
                as="div"
                from="translateX(-200px) translateY(200px) scale(0.6)"
              >
                <div
                  className="framer-Hg91I framer-1jK3j framer-A8dYT framer-9qjuV framer-pSPxj framer-1lrcio8 framer-v-1lrcio8 w-full!"
                  data-framer-name="Variant 1"
                  style={referenceStyles.sd08d862fd9}
                >
                  <div
                    className="framer-1p13pm5"
                    data-framer-name="Title & Price Tag"
                  >
                    <div
                      className="framer-w26oxm"
                      data-framer-name="Tag & Title"
                    >
                      <div className="framer-qqnlxx-container">
                        <div
                          className="framer-Srdvx framer-9qjuV framer-1kavjie framer-v-1kavjie"
                          data-framer-name="Variant 1"
                          style={referenceStyles.sbe342baaa4}
                        >
                          <div
                            className="framer-947gs5"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.sa95470ceb9}
                          >
                            <p
                              className="framer-text framer-styles-preset-12928c1"
                              data-styles-preset="V0V25Na8R"
                              dir="auto"
                              style={referenceStyles.s781d92f43a}
                            >
                              {"●"}
                            </p>
                          </div>
                          <div
                            className="framer-wm51rx"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.sdb4e5c5446}
                          >
                            <p
                              className="framer-text framer-styles-preset-12928c1"
                              data-styles-preset="V0V25Na8R"
                              dir="auto"
                              style={referenceStyles.s2a1463207d}
                            >
                              {t("Single Project")}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1cymiwu" data-framer-name="Title">
                        <div
                          className="framer-ketv43"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.sc78620297e}
                        >
                          <h4
                            className="framer-text framer-styles-preset-167816o"
                            data-styles-preset="FECrL8yAb"
                            dir="auto"
                            style={referenceStyles.sdc1c86cde7}
                          >
                            {t("Single")}
                          </h4>
                        </div>
                        <div
                          className="framer-wgwegd"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3fb15774c5}
                        >
                          <h2
                            className="framer-text framer-styles-preset-eiwrr4"
                            data-styles-preset="uizb2JBlh"
                            dir="auto"
                            style={referenceStyles.sad631ac374}
                          >
                            {t("Project")}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div
                      className="framer-1w0jopw"
                      data-framer-name="Details & Price Tag"
                    >
                      <div
                        className="framer-1cp4jm1"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.sdb4e5c5446}
                      >
                        <p
                          className="framer-text framer-styles-preset-12928c1"
                          data-styles-preset="V0V25Na8R"
                          dir="auto"
                          style={referenceStyles.s76fdf01e72}
                        >
                          {t(
                            "Perfect for startups and businesses launching a single premium website.",
                          )}
                        </p>
                      </div>
                      <div
                        className="framer-rz401r"
                        data-framer-name="Pricing"
                        style={referenceStyles.s0facb403f2}
                      >
                        <div
                          className="framer-1ywd3e3"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3a05f9f9c1}
                        >
                          <p
                            className="framer-text framer-styles-preset-12928c1"
                            data-styles-preset="V0V25Na8R"
                            dir="auto"
                            style={referenceStyles.s833ee3534c}
                          >
                            {t("From")}
                          </p>
                        </div>
                        <div
                          className="framer-94mya7"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s0c7a5a398f}
                        >
                          <h2
                            className="framer-text framer-styles-preset-eiwrr4"
                            data-styles-preset="uizb2JBlh"
                            dir="auto"
                            style={referenceStyles.s1a92a053b3}
                          >
                            {t("$499")}
                          </h2>
                        </div>
                        <div
                          className="framer-1lurp7h"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3a05f9f9c1}
                        >
                          <p
                            className="framer-text framer-styles-preset-12928c1"
                            data-styles-preset="V0V25Na8R"
                            dir="auto"
                            style={referenceStyles.s833ee3534c}
                          >
                            {t("/ Project")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-s8txjy" data-framer-name="Text & Icon">
                    <div
                      className="framer-1cuea4m"
                      data-framer-name="Icon & Text"
                    >
                      <div className="framer-ru6qf3">
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            width="80"
                            height="80"
                            src="/assets/ebc31eb3df399936.png"
                            alt={t("Icon")}
                            className="w-full! h-full!"
                            style={referenceStyles.s1100a320a2}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-ciuo7n"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.sefbf82470d}
                      >
                        <p
                          className="framer-text framer-styles-preset-nxx96o"
                          data-styles-preset="fHx27tEvF"
                          dir="auto"
                          style={referenceStyles.s0c39c3123b}
                        >
                          {t("Available Worldwide")}
                        </p>
                      </div>
                    </div>
                    <div className="framer-2u8td3-container">
                      <Link
                        className="framer-ez4Wr framer-c40k20 framer-v-c40k20 framer-v8kq0b"
                        data-framer-name="Variant 1"
                        href={href("/contact")}
                        style={referenceStyles.s0dfe548b37}
                      >
                        <div
                          className="framer-WzhHM framer-g86u4c"
                          style={referenceStyles.sf1c1de30b4}
                        ></div>
                        <div
                          className="framer-WzhHM framer-tnk03u"
                          style={referenceStyles.sf1c1de30b4}
                        ></div>
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="ssr-variant hidden-1bcn26v hidden-1fs2pis">
              <Reveal
                className="framer-qaqve8-container"
                style={referenceStyles.s5eb3c6a9d0}
                as="div"
                from="translateX(-200px) translateY(200px) scale(0.6)"
              >
                <div
                  className="framer-Hg91I framer-1jK3j framer-A8dYT framer-9qjuV framer-pSPxj framer-1lrcio8 framer-v-1panf14 w-full!"
                  data-framer-name="Variant 2"
                  style={referenceStyles.s38c32dfb73}
                >
                  <div
                    className="framer-1p13pm5"
                    data-framer-name="Title & Price Tag"
                  >
                    <div
                      className="framer-w26oxm"
                      data-framer-name="Tag & Title"
                    >
                      <div className="framer-qqnlxx-container">
                        <div
                          className="framer-Srdvx framer-9qjuV framer-1kavjie framer-v-zj6npi"
                          data-framer-name="Variant 2"
                          style={referenceStyles.sabec45497b}
                        >
                          <div
                            className="framer-947gs5"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.sa95470ceb9}
                          >
                            <p
                              className="framer-text framer-styles-preset-12928c1"
                              data-styles-preset="V0V25Na8R"
                              dir="auto"
                              style={referenceStyles.s781d92f43a}
                            >
                              {"●"}
                            </p>
                          </div>
                          <div
                            className="framer-wm51rx"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.sdb4e5c5446}
                          >
                            <p
                              className="framer-text framer-styles-preset-12928c1"
                              data-styles-preset="V0V25Na8R"
                              dir="auto"
                              style={referenceStyles.s2a1463207d}
                            >
                              {t("Growth Package")}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1cymiwu" data-framer-name="Title">
                        <div
                          className="framer-ketv43"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.se675b69d5b}
                        >
                          <h4
                            className="framer-text framer-styles-preset-167816o"
                            data-styles-preset="FECrL8yAb"
                            dir="auto"
                            style={referenceStyles.se56df9ff67}
                          >
                            {t("Multi-Project")}
                          </h4>
                        </div>
                        <div
                          className="framer-wgwegd"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s0c7a5a398f}
                        >
                          <h2
                            className="framer-text framer-styles-preset-eiwrr4"
                            data-styles-preset="uizb2JBlh"
                            dir="auto"
                            style={referenceStyles.sae7545a3d4}
                          >
                            {t("Package")}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div
                      className="framer-1w0jopw"
                      data-framer-name="Details & Price Tag"
                    >
                      <div
                        className="framer-1cp4jm1"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s3a05f9f9c1}
                      >
                        <p
                          className="framer-text framer-styles-preset-12928c1"
                          data-styles-preset="V0V25Na8R"
                          dir="auto"
                          style={referenceStyles.sab36aa4f56}
                        >
                          {t(
                            "Ideal for agencies and growing brands managing multiple projects.",
                          )}
                        </p>
                      </div>
                      <div
                        className="framer-rz401r"
                        data-framer-name="Pricing"
                        style={referenceStyles.sa1b24c8fb3}
                      >
                        <div
                          className="framer-1ywd3e3"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.sefbf82470d}
                        >
                          <p
                            className="framer-text framer-styles-preset-12928c1"
                            data-styles-preset="V0V25Na8R"
                            dir="auto"
                            style={referenceStyles.s0c39c3123b}
                          >
                            {t("From")}
                          </p>
                        </div>
                        <div
                          className="framer-94mya7"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3fb15774c5}
                        >
                          <h2
                            className="framer-text framer-styles-preset-eiwrr4"
                            data-styles-preset="uizb2JBlh"
                            dir="auto"
                            style={referenceStyles.s4a440dca67}
                          >
                            {t("$1,499")}
                          </h2>
                        </div>
                        <div
                          className="framer-1lurp7h"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.sefbf82470d}
                        >
                          <p
                            className="framer-text framer-styles-preset-12928c1"
                            data-styles-preset="V0V25Na8R"
                            dir="auto"
                            style={referenceStyles.s0c39c3123b}
                          >
                            {t("/ Package")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-s8txjy" data-framer-name="Text & Icon">
                    <div
                      className="framer-1cuea4m"
                      data-framer-name="Icon & Text"
                    >
                      <div className="framer-ru6qf3">
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            width="66"
                            height="66"
                            src="/assets/4cacfc7ed99aeca8.png"
                            alt={t("Icon")}
                            className="w-full! h-full!"
                            style={referenceStyles.s1100a320a2}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-ciuo7n"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s3a05f9f9c1}
                      >
                        <p
                          className="framer-text framer-styles-preset-nxx96o"
                          data-styles-preset="fHx27tEvF"
                          dir="auto"
                          style={referenceStyles.s833ee3534c}
                        >
                          {t("Available Worldwide")}
                        </p>
                      </div>
                    </div>
                    <div className="framer-2u8td3-container">
                      <Link
                        className="framer-ez4Wr framer-c40k20 framer-v-12429e3 framer-v8kq0b"
                        data-framer-name="Variant 3"
                        href={href("/contact")}
                        style={referenceStyles.s0dfe548b37}
                      >
                        <div
                          className="framer-WzhHM framer-g86u4c"
                          style={referenceStyles.sf1c1de30b4}
                        ></div>
                        <div
                          className="framer-WzhHM framer-tnk03u"
                          style={referenceStyles.sf1c1de30b4}
                        ></div>
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="ssr-variant hidden-72rtr7 hidden-1fs2pis">
              <Reveal
                className="framer-qaqve8-container"
                style={referenceStyles.s5eb3c6a9d0}
                as="div"
                from="translateX(-200px) translateY(200px) scale(0.6)"
              >
                <div
                  className="framer-Hg91I framer-1jK3j framer-A8dYT framer-9qjuV framer-pSPxj framer-1lrcio8 framer-v-1rqherr w-full!"
                  data-framer-name="Variant 4"
                  style={referenceStyles.s38c32dfb73}
                >
                  <div
                    className="framer-1p13pm5"
                    data-framer-name="Title & Price Tag"
                  >
                    <div
                      className="framer-w26oxm"
                      data-framer-name="Tag & Title"
                    >
                      <div className="framer-qqnlxx-container">
                        <div
                          className="framer-Srdvx framer-9qjuV framer-1kavjie framer-v-zj6npi"
                          data-framer-name="Variant 2"
                          style={referenceStyles.sabec45497b}
                        >
                          <div
                            className="framer-947gs5"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.sa95470ceb9}
                          >
                            <p
                              className="framer-text framer-styles-preset-12928c1"
                              data-styles-preset="V0V25Na8R"
                              dir="auto"
                              style={referenceStyles.s781d92f43a}
                            >
                              {"●"}
                            </p>
                          </div>
                          <div
                            className="framer-wm51rx"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.sdb4e5c5446}
                          >
                            <p
                              className="framer-text framer-styles-preset-12928c1"
                              data-styles-preset="V0V25Na8R"
                              dir="auto"
                              style={referenceStyles.s2a1463207d}
                            >
                              {t("Growth Package")}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1cymiwu" data-framer-name="Title">
                        <div
                          className="framer-ketv43"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.se675b69d5b}
                        >
                          <h4
                            className="framer-text framer-styles-preset-167816o"
                            data-styles-preset="FECrL8yAb"
                            dir="auto"
                            style={referenceStyles.se56df9ff67}
                          >
                            {t("Multi-Project")}
                          </h4>
                        </div>
                        <div
                          className="framer-wgwegd"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s0c7a5a398f}
                        >
                          <h2
                            className="framer-text framer-styles-preset-eiwrr4"
                            data-styles-preset="uizb2JBlh"
                            dir="auto"
                            style={referenceStyles.sae7545a3d4}
                          >
                            {t("Package")}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div
                      className="framer-1w0jopw"
                      data-framer-name="Details & Price Tag"
                    >
                      <div
                        className="framer-1cp4jm1"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s3a05f9f9c1}
                      >
                        <p
                          className="framer-text framer-styles-preset-12928c1"
                          data-styles-preset="V0V25Na8R"
                          dir="auto"
                          style={referenceStyles.sab36aa4f56}
                        >
                          {t(
                            "Ideal for agencies and growing brands managing multiple projects.",
                          )}
                        </p>
                      </div>
                      <div
                        className="framer-rz401r"
                        data-framer-name="Pricing"
                        style={referenceStyles.sa1b24c8fb3}
                      >
                        <div
                          className="framer-1ywd3e3"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.sefbf82470d}
                        >
                          <p
                            className="framer-text framer-styles-preset-12928c1"
                            data-styles-preset="V0V25Na8R"
                            dir="auto"
                            style={referenceStyles.s0c39c3123b}
                          >
                            {t("From")}
                          </p>
                        </div>
                        <div
                          className="framer-94mya7"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3fb15774c5}
                        >
                          <h2
                            className="framer-text framer-styles-preset-eiwrr4"
                            data-styles-preset="uizb2JBlh"
                            dir="auto"
                            style={referenceStyles.s4a440dca67}
                          >
                            {t("$1,499")}
                          </h2>
                        </div>
                        <div
                          className="framer-1lurp7h"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.sefbf82470d}
                        >
                          <p
                            className="framer-text framer-styles-preset-12928c1"
                            data-styles-preset="V0V25Na8R"
                            dir="auto"
                            style={referenceStyles.s0c39c3123b}
                          >
                            {t("/ Package")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-s8txjy" data-framer-name="Text & Icon">
                    <div
                      className="framer-1cuea4m"
                      data-framer-name="Icon & Text"
                    >
                      <div className="framer-ru6qf3">
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            width="66"
                            height="66"
                            src="/assets/4cacfc7ed99aeca8.png"
                            alt={t("Icon")}
                            className="w-full! h-full!"
                            style={referenceStyles.s1100a320a2}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-ciuo7n"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s3a05f9f9c1}
                      >
                        <p
                          className="framer-text framer-styles-preset-nxx96o"
                          data-styles-preset="fHx27tEvF"
                          dir="auto"
                          style={referenceStyles.s833ee3534c}
                        >
                          {t("Available Worldwide")}
                        </p>
                      </div>
                    </div>
                    <div className="framer-2u8td3-container">
                      <Link
                        className="framer-ez4Wr framer-c40k20 framer-v-c40k20 framer-v8kq0b"
                        data-framer-name="Variant 1"
                        href={href("/contact")}
                        style={referenceStyles.s0dfe548b37}
                      >
                        <div
                          className="framer-WzhHM framer-g86u4c"
                          style={referenceStyles.sf1c1de30b4}
                        ></div>
                        <div
                          className="framer-WzhHM framer-tnk03u"
                          style={referenceStyles.sf1c1de30b4}
                        ></div>
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="ssr-variant hidden-1bcn26v hidden-72rtr7">
              <Reveal
                className="framer-qaqve8-container"
                style={referenceStyles.s5eb3c6a9d0}
                as="div"
                from="translateX(-200px) translateY(200px) scale(0.6)"
              >
                <div
                  className="framer-Hg91I framer-1jK3j framer-A8dYT framer-9qjuV framer-pSPxj framer-1lrcio8 framer-v-1panf14 w-full!"
                  data-framer-name="Variant 2"
                  style={referenceStyles.s38c32dfb73}
                >
                  <div
                    className="framer-1p13pm5"
                    data-framer-name="Title & Price Tag"
                  >
                    <div
                      className="framer-w26oxm"
                      data-framer-name="Tag & Title"
                    >
                      <div className="framer-qqnlxx-container">
                        <div
                          className="framer-Srdvx framer-9qjuV framer-1kavjie framer-v-zj6npi"
                          data-framer-name="Variant 2"
                          style={referenceStyles.sabec45497b}
                        >
                          <div
                            className="framer-947gs5"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.sa95470ceb9}
                          >
                            <p
                              className="framer-text framer-styles-preset-12928c1"
                              data-styles-preset="V0V25Na8R"
                              dir="auto"
                              style={referenceStyles.s781d92f43a}
                            >
                              {"●"}
                            </p>
                          </div>
                          <div
                            className="framer-wm51rx"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.sdb4e5c5446}
                          >
                            <p
                              className="framer-text framer-styles-preset-12928c1"
                              data-styles-preset="V0V25Na8R"
                              dir="auto"
                              style={referenceStyles.s2a1463207d}
                            >
                              {t("Growth Package")}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1cymiwu" data-framer-name="Title">
                        <div
                          className="framer-ketv43"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.se675b69d5b}
                        >
                          <h4
                            className="framer-text framer-styles-preset-167816o"
                            data-styles-preset="FECrL8yAb"
                            dir="auto"
                            style={referenceStyles.se56df9ff67}
                          >
                            {t("Multi-Project")}
                          </h4>
                        </div>
                        <div
                          className="framer-wgwegd"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s0c7a5a398f}
                        >
                          <h2
                            className="framer-text framer-styles-preset-eiwrr4"
                            data-styles-preset="uizb2JBlh"
                            dir="auto"
                            style={referenceStyles.sae7545a3d4}
                          >
                            {t("Package")}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div
                      className="framer-1w0jopw"
                      data-framer-name="Details & Price Tag"
                    >
                      <div
                        className="framer-1cp4jm1"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s3a05f9f9c1}
                      >
                        <p
                          className="framer-text framer-styles-preset-12928c1"
                          data-styles-preset="V0V25Na8R"
                          dir="auto"
                          style={referenceStyles.sab36aa4f56}
                        >
                          {t(
                            "Ideal for agencies and growing brands managing multiple projects.",
                          )}
                        </p>
                      </div>
                      <div
                        className="framer-rz401r"
                        data-framer-name="Pricing"
                        style={referenceStyles.sa1b24c8fb3}
                      >
                        <div
                          className="framer-1ywd3e3"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.sefbf82470d}
                        >
                          <p
                            className="framer-text framer-styles-preset-12928c1"
                            data-styles-preset="V0V25Na8R"
                            dir="auto"
                            style={referenceStyles.s0c39c3123b}
                          >
                            {t("From")}
                          </p>
                        </div>
                        <div
                          className="framer-94mya7"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3fb15774c5}
                        >
                          <h2
                            className="framer-text framer-styles-preset-eiwrr4"
                            data-styles-preset="uizb2JBlh"
                            dir="auto"
                            style={referenceStyles.s4a440dca67}
                          >
                            {t("$1,499")}
                          </h2>
                        </div>
                        <div
                          className="framer-1lurp7h"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.sefbf82470d}
                        >
                          <p
                            className="framer-text framer-styles-preset-12928c1"
                            data-styles-preset="V0V25Na8R"
                            dir="auto"
                            style={referenceStyles.s0c39c3123b}
                          >
                            {t("/ Package")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-s8txjy" data-framer-name="Text & Icon">
                    <div
                      className="framer-1cuea4m"
                      data-framer-name="Icon & Text"
                    >
                      <div className="framer-ru6qf3">
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            width="66"
                            height="66"
                            src="/assets/4cacfc7ed99aeca8.png"
                            alt={t("Icon")}
                            className="w-full! h-full!"
                            style={referenceStyles.s1100a320a2}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-ciuo7n"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s3a05f9f9c1}
                      >
                        <p
                          className="framer-text framer-styles-preset-nxx96o"
                          data-styles-preset="fHx27tEvF"
                          dir="auto"
                          style={referenceStyles.s833ee3534c}
                        >
                          {t("Available Worldwide")}
                        </p>
                      </div>
                    </div>
                    <div className="framer-2u8td3-container">
                      <Link
                        className="framer-ez4Wr framer-c40k20 framer-v-12429e3 framer-v8kq0b"
                        data-framer-name="Variant 3"
                        href={href("/contact")}
                        style={referenceStyles.s0dfe548b37}
                      >
                        <div
                          className="framer-WzhHM framer-g86u4c"
                          style={referenceStyles.sf1c1de30b4}
                        ></div>
                        <div
                          className="framer-WzhHM framer-tnk03u"
                          style={referenceStyles.sf1c1de30b4}
                        ></div>
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
