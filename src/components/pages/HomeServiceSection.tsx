import { getTranslations } from "@/lib/i18n-server";
import Link from "next/link";
import { Reveal, SplitText } from "@/components/Motion";
import {
  AccordionGroup,
  AccordionItem,
  AccordionPanel,
  AccordionToggle,
} from "@/components/Accordion";
import { referenceStyles } from "@/styles/reference-styles";
export async function HomeServiceSection() {
  const { t, locale, href } = await getTranslations();
  return (
    <AccordionGroup
      className="framer-y8np0u"
      data-framer-name="Service Section"
      id="Service Section"
    >
      <div className="framer-1ckg2k9" data-framer-name="Container">
        <div className="framer-13vyr7c" data-framer-name="Content">
          <Reveal
            className="framer-a0wbmd"
            data-framer-name="Tag & Title"
            style={referenceStyles.s5916c9ffdd}
            as="div"
            from="translateY(200px)"
          >
            <div className="ssr-variant">
              <div className="framer-dpylpp-container">
                <div
                  className="framer-XXyqM framer-UO2GW framer-P2lQE framer-1fz5pen framer-v-1fz5pen"
                  data-framer-name="Variant 1"
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
                    style={referenceStyles.s143c03551f}
                  >
                    <p
                      className="framer-text framer-styles-preset-10zsitg"
                      data-styles-preset="Ic0XZZbRG"
                      dir="auto"
                      style={referenceStyles.se8682f4ed5}
                    >
                      {t("SERVICES")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="framer-dhp202-container"
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
                      ? t("Crafted with purpose. Built for lasting impact.")
                      : undefined
                  }
                >
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"C"}</span>
                    <span style={referenceStyles.s354fe386da}>{"r"}</span>
                    <span style={referenceStyles.s354fe386da}>{"a"}</span>
                    <span style={referenceStyles.s354fe386da}>{"f"}</span>
                    <span style={referenceStyles.s354fe386da}>{"t"}</span>
                    <span style={referenceStyles.s354fe386da}>{"e"}</span>
                    <span style={referenceStyles.s354fe386da}>{"d"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s354fe386da}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"w"}</span>
                    <span style={referenceStyles.s354fe386da}>{"i"}</span>
                    <span style={referenceStyles.s354fe386da}>{"t"}</span>
                    <span style={referenceStyles.s354fe386da}>{"h"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s354fe386da}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"p"}</span>
                    <span style={referenceStyles.s354fe386da}>{"u"}</span>
                    <span style={referenceStyles.s354fe386da}>{"r"}</span>
                    <span style={referenceStyles.s354fe386da}>{"p"}</span>
                    <span style={referenceStyles.s354fe386da}>{"o"}</span>
                    <span style={referenceStyles.s354fe386da}>{"s"}</span>
                    <span style={referenceStyles.s354fe386da}>{"e"}</span>
                    <span style={referenceStyles.s354fe386da}>{"."}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s354fe386da}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"B"}</span>
                    <span style={referenceStyles.s354fe386da}>{"u"}</span>
                    <span style={referenceStyles.s354fe386da}>{"i"}</span>
                    <span style={referenceStyles.s354fe386da}>{"l"}</span>
                    <span style={referenceStyles.s354fe386da}>{"t"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s354fe386da}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"f"}</span>
                    <span style={referenceStyles.s354fe386da}>{"o"}</span>
                    <span style={referenceStyles.s354fe386da}>{"r"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s354fe386da}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"l"}</span>
                    <span style={referenceStyles.s354fe386da}>{"a"}</span>
                    <span style={referenceStyles.s354fe386da}>{"s"}</span>
                    <span style={referenceStyles.s354fe386da}>{"t"}</span>
                    <span style={referenceStyles.s354fe386da}>{"i"}</span>
                    <span style={referenceStyles.s354fe386da}>{"n"}</span>
                    <span style={referenceStyles.s354fe386da}>{"g"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s354fe386da}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"i"}</span>
                    <span style={referenceStyles.s354fe386da}>{"m"}</span>
                    <span style={referenceStyles.s354fe386da}>{"p"}</span>
                    <span style={referenceStyles.s354fe386da}>{"a"}</span>
                    <span style={referenceStyles.s354fe386da}>{"c"}</span>
                    <span style={referenceStyles.s354fe386da}>{"t"}</span>
                    <span style={referenceStyles.s354fe386da}>{"."}</span>
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
                      ? t("Crafted with purpose. Built for lasting impact.")
                      : undefined
                  }
                >
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"C"}</span>
                    <span style={referenceStyles.s354fe386da}>{"r"}</span>
                    <span style={referenceStyles.s354fe386da}>{"a"}</span>
                    <span style={referenceStyles.s354fe386da}>{"f"}</span>
                    <span style={referenceStyles.s354fe386da}>{"t"}</span>
                    <span style={referenceStyles.s354fe386da}>{"e"}</span>
                    <span style={referenceStyles.s354fe386da}>{"d"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s354fe386da}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"w"}</span>
                    <span style={referenceStyles.s354fe386da}>{"i"}</span>
                    <span style={referenceStyles.s354fe386da}>{"t"}</span>
                    <span style={referenceStyles.s354fe386da}>{"h"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s354fe386da}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"p"}</span>
                    <span style={referenceStyles.s354fe386da}>{"u"}</span>
                    <span style={referenceStyles.s354fe386da}>{"r"}</span>
                    <span style={referenceStyles.s354fe386da}>{"p"}</span>
                    <span style={referenceStyles.s354fe386da}>{"o"}</span>
                    <span style={referenceStyles.s354fe386da}>{"s"}</span>
                    <span style={referenceStyles.s354fe386da}>{"e"}</span>
                    <span style={referenceStyles.s354fe386da}>{"."}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s354fe386da}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"B"}</span>
                    <span style={referenceStyles.s354fe386da}>{"u"}</span>
                    <span style={referenceStyles.s354fe386da}>{"i"}</span>
                    <span style={referenceStyles.s354fe386da}>{"l"}</span>
                    <span style={referenceStyles.s354fe386da}>{"t"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s354fe386da}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"f"}</span>
                    <span style={referenceStyles.s354fe386da}>{"o"}</span>
                    <span style={referenceStyles.s354fe386da}>{"r"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s354fe386da}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"l"}</span>
                    <span style={referenceStyles.s354fe386da}>{"a"}</span>
                    <span style={referenceStyles.s354fe386da}>{"s"}</span>
                    <span style={referenceStyles.s354fe386da}>{"t"}</span>
                    <span style={referenceStyles.s354fe386da}>{"i"}</span>
                    <span style={referenceStyles.s354fe386da}>{"n"}</span>
                    <span style={referenceStyles.s354fe386da}>{"g"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s354fe386da}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"i"}</span>
                    <span style={referenceStyles.s354fe386da}>{"m"}</span>
                    <span style={referenceStyles.s354fe386da}>{"p"}</span>
                    <span style={referenceStyles.s354fe386da}>{"a"}</span>
                    <span style={referenceStyles.s354fe386da}>{"c"}</span>
                    <span style={referenceStyles.s354fe386da}>{"t"}</span>
                    <span style={referenceStyles.s354fe386da}>{"."}</span>
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
                      ? t("Crafted with purpose. Built for lasting impact.")
                      : undefined
                  }
                >
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"C"}</span>
                    <span style={referenceStyles.s354fe386da}>{"r"}</span>
                    <span style={referenceStyles.s354fe386da}>{"a"}</span>
                    <span style={referenceStyles.s354fe386da}>{"f"}</span>
                    <span style={referenceStyles.s354fe386da}>{"t"}</span>
                    <span style={referenceStyles.s354fe386da}>{"e"}</span>
                    <span style={referenceStyles.s354fe386da}>{"d"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s354fe386da}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"w"}</span>
                    <span style={referenceStyles.s354fe386da}>{"i"}</span>
                    <span style={referenceStyles.s354fe386da}>{"t"}</span>
                    <span style={referenceStyles.s354fe386da}>{"h"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s354fe386da}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"p"}</span>
                    <span style={referenceStyles.s354fe386da}>{"u"}</span>
                    <span style={referenceStyles.s354fe386da}>{"r"}</span>
                    <span style={referenceStyles.s354fe386da}>{"p"}</span>
                    <span style={referenceStyles.s354fe386da}>{"o"}</span>
                    <span style={referenceStyles.s354fe386da}>{"s"}</span>
                    <span style={referenceStyles.s354fe386da}>{"e"}</span>
                    <span style={referenceStyles.s354fe386da}>{"."}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s354fe386da}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"B"}</span>
                    <span style={referenceStyles.s354fe386da}>{"u"}</span>
                    <span style={referenceStyles.s354fe386da}>{"i"}</span>
                    <span style={referenceStyles.s354fe386da}>{"l"}</span>
                    <span style={referenceStyles.s354fe386da}>{"t"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s354fe386da}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"f"}</span>
                    <span style={referenceStyles.s354fe386da}>{"o"}</span>
                    <span style={referenceStyles.s354fe386da}>{"r"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s354fe386da}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"l"}</span>
                    <span style={referenceStyles.s354fe386da}>{"a"}</span>
                    <span style={referenceStyles.s354fe386da}>{"s"}</span>
                    <span style={referenceStyles.s354fe386da}>{"t"}</span>
                    <span style={referenceStyles.s354fe386da}>{"i"}</span>
                    <span style={referenceStyles.s354fe386da}>{"n"}</span>
                    <span style={referenceStyles.s354fe386da}>{"g"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s354fe386da}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"i"}</span>
                    <span style={referenceStyles.s354fe386da}>{"m"}</span>
                    <span style={referenceStyles.s354fe386da}>{"p"}</span>
                    <span style={referenceStyles.s354fe386da}>{"a"}</span>
                    <span style={referenceStyles.s354fe386da}>{"c"}</span>
                    <span style={referenceStyles.s354fe386da}>{"t"}</span>
                    <span style={referenceStyles.s354fe386da}>{"."}</span>
                  </span>
                </SplitText>
              </div>
            </div>
          </Reveal>
          <div className="ssr-variant hidden-1bcn26v hidden-1fs2pis">
            <div className="framer-uruf6e-container">
              <div
                className="framer-d3CKe framer-17bhmoe framer-v-17bhmoe w-full!"
                data-framer-name="Variant 1"
              >
                <Reveal
                  className="framer-11itpg9-container"
                  style={referenceStyles.s2cca167b61}
                  as="div"
                  from="translateY(100px)"
                >
                  <AccordionItem
                    className="framer-IOjX6 framer-n9rVA framer-1jK3j framer-ge77Z framer-16ad7hm framer-v-16ad7hm w-full!"
                    data-framer-name="Variant 1"
                    data-highlight="true"
                    tabIndex={0}
                    data-service-index="0"
                    style={referenceStyles.s9014ee6b78}
                    index={0}
                    mode="service"
                    openClass="framer-v-16ad7hm"
                    closedClass="framer-v-ksyjlc"
                  >
                    <div
                      className="framer-1hokjwq"
                      data-framer-name="Title Wrapper"
                    >
                      <div
                        className="framer-d34t68"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s514342b65c}
                      >
                        <p
                          className="framer-text framer-styles-preset-1rq135e"
                          data-styles-preset="x6jp3Ye0n"
                          dir="auto"
                          style={referenceStyles.s97ca6ab9e2}
                        >
                          {t("01.")}
                        </p>
                      </div>
                      <div
                        className="framer-rjp6f9"
                        data-framer-name="Title & Details"
                      >
                        <div
                          className="framer-l9ujw9"
                          data-framer-name="Title & Tags"
                        >
                          <div
                            className="framer-146p3zs"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.se675b69d5b}
                          >
                            <h4
                              className="framer-text framer-styles-preset-167816o"
                              data-styles-preset="FECrL8yAb"
                              dir="auto"
                              style={referenceStyles.se56df9ff67}
                            >
                              {t("Website Design")}
                            </h4>
                          </div>
                          <div
                            className="framer-12p5a3z"
                            data-framer-name="Tag Wrapper"
                          >
                            <div className="framer-93jzjy-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("UI/UX")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-1vwuzdp-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Responsive")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-124zkr5-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Performance")}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <AccordionPanel
                          className="framer-1ebu21f"
                          data-framer-name="Image & Details"
                        >
                          <div
                            className="framer-5szoug"
                            style={referenceStyles.sbc989dc343}
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              style={referenceStyles.s8a54025f8d}
                            >
                              <img
                                decoding="async"
                                width="1500"
                                height="1130"
                                sizes="(min-width: 1200px) 339px, (max-width: 767.98px) min(max(max(min(100vw - 40px, 1120px), 1px) - 74px, 1px), 710px), (min-width: 768px) and (max-width: 1199.98px) 190px"
                                srcSet="/assets/5111438053d1eb63.png 512w, /assets/72c3f4c6773173b5.png 1024w, /assets/3345d22a74a07841.png 1500w"
                                src="/assets/3345d22a74a07841.png"
                                alt={t("Image")}
                                className="w-full! h-full!"
                                style={referenceStyles.s258149b79d}
                              />
                            </div>
                          </div>
                          <div
                            className="framer-1gicul7"
                            data-framer-name="Details & Button"
                          >
                            <div
                              className="framer-1ggwkfr"
                              data-framer-component-type="RichTextContainer"
                              style={referenceStyles.sa149e8bcd9}
                            >
                              <h5
                                className="framer-text framer-styles-preset-uttc6m"
                                data-styles-preset="lllneI4EJ"
                                dir="auto"
                                style={referenceStyles.s6861219acf}
                              >
                                {t(
                                  "Beautiful websites crafted to engage, inspire confidence.",
                                )}
                              </h5>
                            </div>
                            <div className="framer-12o1p8o-container">
                              <Link
                                className="framer-obWCA framer-9qjuV framer-Bq5uF framer-18sfddm framer-v-1fa7o3w framer-1fsrsxu"
                                data-border="true"
                                data-framer-name="Variant 2"
                                href={href("/contact")}
                                style={referenceStyles.s3bb9702481}
                              >
                                <div
                                  className="framer-14jkp0r"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.sdb4e5c5446}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-12928c1"
                                    data-styles-preset="V0V25Na8R"
                                    dir="auto"
                                    style={referenceStyles.s2a1463207d}
                                  >
                                    {t("Start Project")}
                                  </p>
                                </div>
                                <div className="framer-1glyh7l">
                                  <div
                                    className="framer-1oado6a"
                                    data-framer-name="Dot 01"
                                    style={referenceStyles.s21236d14f5}
                                  ></div>
                                </div>
                                <div
                                  className="framer-vweyvw"
                                  data-framer-name="Icon"
                                  style={referenceStyles.s9dc991bb8c}
                                >
                                  <svg
                                    className="framer-VdeRv framer-7wq510"
                                    role="presentation"
                                    viewBox="0 0 24 24"
                                    style={referenceStyles.s7981cc1085}
                                  >
                                    <use href="#2430009286"></use>
                                  </svg>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </AccordionPanel>
                      </div>
                    </div>
                    <AccordionToggle
                      className="framer-hf6rbv"
                      data-border="true"
                      data-framer-name="Icon"
                      data-reset="button"
                      style={referenceStyles.sbbbd28238a}
                      label={t("Website Design")}
                    >
                      <div
                        className="framer-6ju8k5"
                        data-framer-name="Line 2"
                        style={referenceStyles.scfd37f3c43}
                      ></div>
                      <div
                        className="framer-qhogpv"
                        data-framer-name="Line 1"
                        style={referenceStyles.s7338eecb53}
                      ></div>
                    </AccordionToggle>
                  </AccordionItem>
                </Reveal>
                <Reveal
                  className="framer-1wr4uqe-container"
                  style={referenceStyles.s2cca167b61}
                  as="div"
                  from="translateY(100px)"
                >
                  <AccordionItem
                    className="framer-IOjX6 framer-n9rVA framer-1jK3j framer-ge77Z framer-16ad7hm framer-v-ksyjlc w-full!"
                    data-framer-name="Variant 2"
                    data-highlight="true"
                    tabIndex={0}
                    data-service-index="1"
                    style={referenceStyles.s9014ee6b78}
                    index={1}
                    mode="service"
                    openClass="framer-v-16ad7hm"
                    closedClass="framer-v-ksyjlc"
                  >
                    <div
                      className="framer-1hokjwq"
                      data-framer-name="Title Wrapper"
                    >
                      <div
                        className="framer-d34t68"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s514342b65c}
                      >
                        <p
                          className="framer-text framer-styles-preset-1rq135e"
                          data-styles-preset="x6jp3Ye0n"
                          dir="auto"
                          style={referenceStyles.s97ca6ab9e2}
                        >
                          {t("02.")}
                        </p>
                      </div>
                      <div
                        className="framer-rjp6f9"
                        data-framer-name="Title & Details"
                      >
                        <div
                          className="framer-l9ujw9"
                          data-framer-name="Title & Tags"
                        >
                          <div
                            className="framer-146p3zs"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.se675b69d5b}
                          >
                            <h4
                              className="framer-text framer-styles-preset-167816o"
                              data-styles-preset="FECrL8yAb"
                              dir="auto"
                              style={referenceStyles.se56df9ff67}
                            >
                              {t("Framer Development")}
                            </h4>
                          </div>
                          <div
                            className="framer-12p5a3z"
                            data-framer-name="Tag Wrapper"
                          >
                            <div className="framer-93jzjy-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Framer")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-1vwuzdp-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("CMS")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-124zkr5-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Motion")}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <AccordionPanel
                          className="framer-1ebu21f"
                          data-framer-name="Image & Details"
                          style={referenceStyles.sc1ca5c600f}
                        >
                          <div
                            className="framer-5szoug"
                            style={referenceStyles.se09032584e}
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              style={referenceStyles.s713c3d973a}
                            >
                              <img
                                decoding="auto"
                                loading="lazy"
                                width="960"
                                height="1200"
                                sizes="339px"
                                srcSet="/assets/63dd57f7c994aeba.png 819w, /assets/ac62f0a5a6f4433f.png 960w"
                                src="/assets/ac62f0a5a6f4433f.png"
                                alt={t("Image")}
                                className="w-full! h-full!"
                                style={referenceStyles.s1adb816c0e}
                              />
                            </div>
                          </div>
                          <div
                            className="framer-1gicul7"
                            data-framer-name="Details & Button"
                            style={referenceStyles.sc1ca5c600f}
                          >
                            <div
                              className="framer-1ggwkfr"
                              data-framer-component-type="RichTextContainer"
                              style={referenceStyles.s278765ea87}
                            >
                              <h5
                                className="framer-text framer-styles-preset-uttc6m"
                                data-styles-preset="lllneI4EJ"
                                dir="auto"
                                style={referenceStyles.s6861219acf}
                              >
                                {t(
                                  "Fast Framer experiences built for exceptional performance.",
                                )}
                              </h5>
                            </div>
                            <div
                              className="framer-12o1p8o-container"
                              style={referenceStyles.sc1ca5c600f}
                            >
                              <Link
                                className="framer-obWCA framer-9qjuV framer-Bq5uF framer-18sfddm framer-v-1fa7o3w framer-1fsrsxu"
                                data-border="true"
                                data-framer-name="Variant 2"
                                href={href("/contact")}
                                style={referenceStyles.s5dc0758bc3}
                              >
                                <div
                                  className="framer-14jkp0r"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s6295475829}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-12928c1"
                                    data-styles-preset="V0V25Na8R"
                                    dir="auto"
                                    style={referenceStyles.s2a1463207d}
                                  >
                                    {t("Start Project")}
                                  </p>
                                </div>
                                <div
                                  className="framer-1glyh7l"
                                  style={referenceStyles.sc1ca5c600f}
                                >
                                  <div
                                    className="framer-1oado6a"
                                    data-framer-name="Dot 01"
                                    style={referenceStyles.s0eea5b0776}
                                  ></div>
                                </div>
                                <div
                                  className="framer-vweyvw"
                                  data-framer-name="Icon"
                                  style={referenceStyles.sb0a1e952a6}
                                >
                                  <svg
                                    className="framer-VdeRv framer-7wq510"
                                    role="presentation"
                                    viewBox="0 0 24 24"
                                    style={referenceStyles.s84f00561ca}
                                  >
                                    <use href="#2430009286"></use>
                                  </svg>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </AccordionPanel>
                      </div>
                    </div>
                    <AccordionToggle
                      className="framer-hf6rbv"
                      data-border="true"
                      data-framer-name="Icon"
                      data-reset="button"
                      style={referenceStyles.sbbbd28238a}
                      label={t("Framer Development")}
                    >
                      <div
                        className="framer-6ju8k5"
                        data-framer-name="Line 2"
                        style={referenceStyles.scfd37f3c43}
                      ></div>
                      <div
                        className="framer-qhogpv"
                        data-framer-name="Line 1"
                        style={referenceStyles.sefb4340700}
                      ></div>
                    </AccordionToggle>
                  </AccordionItem>
                </Reveal>
                <Reveal
                  className="framer-16nn1cs-container"
                  style={referenceStyles.s2cca167b61}
                  as="div"
                  from="translateY(100px)"
                >
                  <AccordionItem
                    className="framer-IOjX6 framer-n9rVA framer-1jK3j framer-ge77Z framer-16ad7hm framer-v-ksyjlc w-full!"
                    data-framer-name="Variant 2"
                    data-highlight="true"
                    tabIndex={0}
                    data-service-index="2"
                    style={referenceStyles.s9014ee6b78}
                    index={2}
                    mode="service"
                    openClass="framer-v-16ad7hm"
                    closedClass="framer-v-ksyjlc"
                  >
                    <div
                      className="framer-1hokjwq"
                      data-framer-name="Title Wrapper"
                    >
                      <div
                        className="framer-d34t68"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s514342b65c}
                      >
                        <p
                          className="framer-text framer-styles-preset-1rq135e"
                          data-styles-preset="x6jp3Ye0n"
                          dir="auto"
                          style={referenceStyles.s97ca6ab9e2}
                        >
                          {t("03.")}
                        </p>
                      </div>
                      <div
                        className="framer-rjp6f9"
                        data-framer-name="Title & Details"
                      >
                        <div
                          className="framer-l9ujw9"
                          data-framer-name="Title & Tags"
                        >
                          <div
                            className="framer-146p3zs"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.se675b69d5b}
                          >
                            <h4
                              className="framer-text framer-styles-preset-167816o"
                              data-styles-preset="FECrL8yAb"
                              dir="auto"
                              style={referenceStyles.se56df9ff67}
                            >
                              {t("No-Code Automation")}
                            </h4>
                          </div>
                          <div
                            className="framer-12p5a3z"
                            data-framer-name="Tag Wrapper"
                          >
                            <div className="framer-93jzjy-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Automation")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-1vwuzdp-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Workflow")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-124zkr5-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Integration")}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <AccordionPanel
                          className="framer-1ebu21f"
                          data-framer-name="Image & Details"
                          style={referenceStyles.s1b170b0f1e}
                        >
                          <div
                            className="framer-5szoug"
                            style={referenceStyles.se09032584e}
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              style={referenceStyles.s713c3d973a}
                            >
                              <img
                                decoding="async"
                                loading="lazy"
                                width="1500"
                                height="841"
                                sizes="339px"
                                srcSet="/assets/6eea4d261dd2de92.png 512w, /assets/f0531b0320a1dffb.png 1024w, /assets/9b3d48012a1cca23.png 1500w"
                                src="/assets/9b3d48012a1cca23.png"
                                alt={t("Image")}
                                className="w-full! h-full!"
                                style={referenceStyles.s1adb816c0e}
                              />
                            </div>
                          </div>
                          <div
                            className="framer-1gicul7"
                            data-framer-name="Details & Button"
                            style={referenceStyles.sc1ca5c600f}
                          >
                            <div
                              className="framer-1ggwkfr"
                              data-framer-component-type="RichTextContainer"
                              style={referenceStyles.s278765ea87}
                            >
                              <h5
                                className="framer-text framer-styles-preset-uttc6m"
                                data-styles-preset="lllneI4EJ"
                                dir="auto"
                                style={referenceStyles.s6861219acf}
                              >
                                {t(
                                  "Automate workflows efficiently without writing code.",
                                )}
                              </h5>
                            </div>
                            <div
                              className="framer-12o1p8o-container"
                              style={referenceStyles.sc1ca5c600f}
                            >
                              <Link
                                className="framer-obWCA framer-9qjuV framer-Bq5uF framer-18sfddm framer-v-1fa7o3w framer-1fsrsxu"
                                data-border="true"
                                data-framer-name="Variant 2"
                                href={href("/contact")}
                                style={referenceStyles.s5dc0758bc3}
                              >
                                <div
                                  className="framer-14jkp0r"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s6295475829}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-12928c1"
                                    data-styles-preset="V0V25Na8R"
                                    dir="auto"
                                    style={referenceStyles.s2a1463207d}
                                  >
                                    {t("Start Project")}
                                  </p>
                                </div>
                                <div
                                  className="framer-1glyh7l"
                                  style={referenceStyles.sc1ca5c600f}
                                >
                                  <div
                                    className="framer-1oado6a"
                                    data-framer-name="Dot 01"
                                    style={referenceStyles.s0eea5b0776}
                                  ></div>
                                </div>
                                <div
                                  className="framer-vweyvw"
                                  data-framer-name="Icon"
                                  style={referenceStyles.sb0a1e952a6}
                                >
                                  <svg
                                    className="framer-VdeRv framer-7wq510"
                                    role="presentation"
                                    viewBox="0 0 24 24"
                                    style={referenceStyles.s84f00561ca}
                                  >
                                    <use href="#2430009286"></use>
                                  </svg>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </AccordionPanel>
                      </div>
                    </div>
                    <AccordionToggle
                      className="framer-hf6rbv"
                      data-border="true"
                      data-framer-name="Icon"
                      data-reset="button"
                      style={referenceStyles.sbbbd28238a}
                      label={t("No-Code Automation")}
                    >
                      <div
                        className="framer-6ju8k5"
                        data-framer-name="Line 2"
                        style={referenceStyles.scfd37f3c43}
                      ></div>
                      <div
                        className="framer-qhogpv"
                        data-framer-name="Line 1"
                        style={referenceStyles.sefb4340700}
                      ></div>
                    </AccordionToggle>
                  </AccordionItem>
                </Reveal>
                <Reveal
                  className="framer-mrmlf-container"
                  style={referenceStyles.s2cca167b61}
                  as="div"
                  from="translateY(100px)"
                >
                  <AccordionItem
                    className="framer-IOjX6 framer-n9rVA framer-1jK3j framer-ge77Z framer-16ad7hm framer-v-ksyjlc w-full!"
                    data-framer-name="Variant 2"
                    data-highlight="true"
                    tabIndex={0}
                    data-service-index="3"
                    style={referenceStyles.s9014ee6b78}
                    index={3}
                    mode="service"
                    openClass="framer-v-16ad7hm"
                    closedClass="framer-v-ksyjlc"
                  >
                    <div
                      className="framer-1hokjwq"
                      data-framer-name="Title Wrapper"
                    >
                      <div
                        className="framer-d34t68"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s514342b65c}
                      >
                        <p
                          className="framer-text framer-styles-preset-1rq135e"
                          data-styles-preset="x6jp3Ye0n"
                          dir="auto"
                          style={referenceStyles.s97ca6ab9e2}
                        >
                          {t("04.")}
                        </p>
                      </div>
                      <div
                        className="framer-rjp6f9"
                        data-framer-name="Title & Details"
                      >
                        <div
                          className="framer-l9ujw9"
                          data-framer-name="Title & Tags"
                        >
                          <div
                            className="framer-146p3zs"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.se675b69d5b}
                          >
                            <h4
                              className="framer-text framer-styles-preset-167816o"
                              data-styles-preset="FECrL8yAb"
                              dir="auto"
                              style={referenceStyles.se56df9ff67}
                            >
                              {t("Brand Identity")}
                            </h4>
                          </div>
                          <div
                            className="framer-12p5a3z"
                            data-framer-name="Tag Wrapper"
                          >
                            <div className="framer-93jzjy-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Identity")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-1vwuzdp-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Strategy")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-124zkr5-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Visuals")}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <AccordionPanel
                          className="framer-1ebu21f"
                          data-framer-name="Image & Details"
                          style={referenceStyles.sdf4d72f1fb}
                        >
                          <div
                            className="framer-5szoug"
                            style={referenceStyles.se09032584e}
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              style={referenceStyles.s713c3d973a}
                            >
                              <img
                                decoding="async"
                                loading="lazy"
                                width="1200"
                                height="804"
                                sizes="339px"
                                srcSet="/assets/0ca02ec65b9efd5b.png 512w, /assets/1093883db13272e8.png 1024w, /assets/683feaedbf07a4c8.png 1200w"
                                src="/assets/683feaedbf07a4c8.png"
                                alt={t("Image")}
                                className="w-full! h-full!"
                                style={referenceStyles.s1adb816c0e}
                              />
                            </div>
                          </div>
                          <div
                            className="framer-1gicul7"
                            data-framer-name="Details & Button"
                            style={referenceStyles.sc1ca5c600f}
                          >
                            <div
                              className="framer-1ggwkfr"
                              data-framer-component-type="RichTextContainer"
                              style={referenceStyles.s278765ea87}
                            >
                              <h5
                                className="framer-text framer-styles-preset-uttc6m"
                                data-styles-preset="lllneI4EJ"
                                dir="auto"
                                style={referenceStyles.s6861219acf}
                              >
                                {t(
                                  "Distinctive brand identities building trust and recognition.",
                                )}
                              </h5>
                            </div>
                            <div
                              className="framer-12o1p8o-container"
                              style={referenceStyles.sc1ca5c600f}
                            >
                              <Link
                                className="framer-obWCA framer-9qjuV framer-Bq5uF framer-18sfddm framer-v-1fa7o3w framer-1fsrsxu"
                                data-border="true"
                                data-framer-name="Variant 2"
                                href={href("/contact")}
                                style={referenceStyles.s5dc0758bc3}
                              >
                                <div
                                  className="framer-14jkp0r"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s6295475829}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-12928c1"
                                    data-styles-preset="V0V25Na8R"
                                    dir="auto"
                                    style={referenceStyles.s2a1463207d}
                                  >
                                    {t("Start Project")}
                                  </p>
                                </div>
                                <div
                                  className="framer-1glyh7l"
                                  style={referenceStyles.sc1ca5c600f}
                                >
                                  <div
                                    className="framer-1oado6a"
                                    data-framer-name="Dot 01"
                                    style={referenceStyles.s0eea5b0776}
                                  ></div>
                                </div>
                                <div
                                  className="framer-vweyvw"
                                  data-framer-name="Icon"
                                  style={referenceStyles.sb0a1e952a6}
                                >
                                  <svg
                                    className="framer-VdeRv framer-7wq510"
                                    role="presentation"
                                    viewBox="0 0 24 24"
                                    style={referenceStyles.s84f00561ca}
                                  >
                                    <use href="#2430009286"></use>
                                  </svg>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </AccordionPanel>
                      </div>
                    </div>
                    <AccordionToggle
                      className="framer-hf6rbv"
                      data-border="true"
                      data-framer-name="Icon"
                      data-reset="button"
                      style={referenceStyles.sbbbd28238a}
                      label={t("Brand Identity")}
                    >
                      <div
                        className="framer-6ju8k5"
                        data-framer-name="Line 2"
                        style={referenceStyles.scfd37f3c43}
                      ></div>
                      <div
                        className="framer-qhogpv"
                        data-framer-name="Line 1"
                        style={referenceStyles.sefb4340700}
                      ></div>
                    </AccordionToggle>
                  </AccordionItem>
                </Reveal>
                <Reveal
                  className="framer-1ctbsv5-container"
                  style={referenceStyles.s2cca167b61}
                  as="div"
                  from="translateY(100px)"
                >
                  <AccordionItem
                    className="framer-IOjX6 framer-n9rVA framer-1jK3j framer-ge77Z framer-16ad7hm framer-v-ksyjlc w-full!"
                    data-framer-name="Variant 2"
                    data-highlight="true"
                    tabIndex={0}
                    data-service-index="4"
                    style={referenceStyles.s9014ee6b78}
                    index={4}
                    mode="service"
                    openClass="framer-v-16ad7hm"
                    closedClass="framer-v-ksyjlc"
                  >
                    <div
                      className="framer-1hokjwq"
                      data-framer-name="Title Wrapper"
                    >
                      <div
                        className="framer-d34t68"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s514342b65c}
                      >
                        <p
                          className="framer-text framer-styles-preset-1rq135e"
                          data-styles-preset="x6jp3Ye0n"
                          dir="auto"
                          style={referenceStyles.s97ca6ab9e2}
                        >
                          {t("05.")}
                        </p>
                      </div>
                      <div
                        className="framer-rjp6f9"
                        data-framer-name="Title & Details"
                      >
                        <div
                          className="framer-l9ujw9"
                          data-framer-name="Title & Tags"
                        >
                          <div
                            className="framer-146p3zs"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.se675b69d5b}
                          >
                            <h4
                              className="framer-text framer-styles-preset-167816o"
                              data-styles-preset="FECrL8yAb"
                              dir="auto"
                              style={referenceStyles.se56df9ff67}
                            >
                              {t("SEO & Growth")}
                            </h4>
                          </div>
                          <div
                            className="framer-12p5a3z"
                            data-framer-name="Tag Wrapper"
                          >
                            <div className="framer-93jzjy-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("SEO")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-1vwuzdp-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Analytics")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-124zkr5-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Growth")}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <AccordionPanel
                          className="framer-1ebu21f"
                          data-framer-name="Image & Details"
                          style={referenceStyles.s7f4fc74493}
                        >
                          <div
                            className="framer-5szoug"
                            style={referenceStyles.se09032584e}
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              style={referenceStyles.s713c3d973a}
                            >
                              <img
                                decoding="async"
                                loading="lazy"
                                width="960"
                                height="1200"
                                sizes="339px"
                                srcSet="/assets/9348b4e1b02f9706.png 819w, /assets/c9e087c0e10f7761.png 960w"
                                src="/assets/c9e087c0e10f7761.png"
                                alt={t("Image")}
                                className="w-full! h-full!"
                                style={referenceStyles.s1adb816c0e}
                              />
                            </div>
                          </div>
                          <div
                            className="framer-1gicul7"
                            data-framer-name="Details & Button"
                            style={referenceStyles.sc1ca5c600f}
                          >
                            <div
                              className="framer-1ggwkfr"
                              data-framer-component-type="RichTextContainer"
                              style={referenceStyles.s278765ea87}
                            >
                              <h5
                                className="framer-text framer-styles-preset-uttc6m"
                                data-styles-preset="lllneI4EJ"
                                dir="auto"
                                style={referenceStyles.s6861219acf}
                              >
                                {t(
                                  "Drive organic growth through strategic optimization.",
                                )}
                              </h5>
                            </div>
                            <div
                              className="framer-12o1p8o-container"
                              style={referenceStyles.sc1ca5c600f}
                            >
                              <Link
                                className="framer-obWCA framer-9qjuV framer-Bq5uF framer-18sfddm framer-v-1fa7o3w framer-1fsrsxu"
                                data-border="true"
                                data-framer-name="Variant 2"
                                href={href("/contact")}
                                style={referenceStyles.s5dc0758bc3}
                              >
                                <div
                                  className="framer-14jkp0r"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s6295475829}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-12928c1"
                                    data-styles-preset="V0V25Na8R"
                                    dir="auto"
                                    style={referenceStyles.s2a1463207d}
                                  >
                                    {t("Start Project")}
                                  </p>
                                </div>
                                <div
                                  className="framer-1glyh7l"
                                  style={referenceStyles.sc1ca5c600f}
                                >
                                  <div
                                    className="framer-1oado6a"
                                    data-framer-name="Dot 01"
                                    style={referenceStyles.s0eea5b0776}
                                  ></div>
                                </div>
                                <div
                                  className="framer-vweyvw"
                                  data-framer-name="Icon"
                                  style={referenceStyles.sb0a1e952a6}
                                >
                                  <svg
                                    className="framer-VdeRv framer-7wq510"
                                    role="presentation"
                                    viewBox="0 0 24 24"
                                    style={referenceStyles.s84f00561ca}
                                  >
                                    <use href="#2430009286"></use>
                                  </svg>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </AccordionPanel>
                      </div>
                    </div>
                    <AccordionToggle
                      className="framer-hf6rbv"
                      data-border="true"
                      data-framer-name="Icon"
                      data-reset="button"
                      style={referenceStyles.sbbbd28238a}
                      label={t("SEO & Growth")}
                    >
                      <div
                        className="framer-6ju8k5"
                        data-framer-name="Line 2"
                        style={referenceStyles.scfd37f3c43}
                      ></div>
                      <div
                        className="framer-qhogpv"
                        data-framer-name="Line 1"
                        style={referenceStyles.sefb4340700}
                      ></div>
                    </AccordionToggle>
                  </AccordionItem>
                </Reveal>
                <div
                  className="framer-1ihxooy-container"
                  style={referenceStyles.s4317ba2255}
                >
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-72rtr7 hidden-1fs2pis">
            <div className="framer-uruf6e-container">
              <div
                className="framer-d3CKe framer-17bhmoe framer-v-1qmsj0d w-full!"
                data-framer-name="Phone V"
              >
                <Reveal
                  className="framer-11itpg9-container"
                  style={referenceStyles.s2cca167b61}
                  as="div"
                  from="translateY(100px)"
                >
                  <AccordionItem
                    className="framer-IOjX6 framer-n9rVA framer-1jK3j framer-ge77Z framer-16ad7hm framer-v-jmhdwl w-full!"
                    data-framer-name="Phone"
                    data-highlight="true"
                    tabIndex={0}
                    data-service-index="0"
                    style={referenceStyles.s9014ee6b78}
                    index={0}
                    mode="service"
                    openClass="framer-v-jmhdwl"
                    closedClass="framer-v-1x6eqby"
                  >
                    <div
                      className="framer-1hokjwq"
                      data-framer-name="Title Wrapper"
                    >
                      <div
                        className="framer-d34t68"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s514342b65c}
                      >
                        <p
                          className="framer-text framer-styles-preset-1rq135e"
                          data-styles-preset="x6jp3Ye0n"
                          dir="auto"
                          style={referenceStyles.s97ca6ab9e2}
                        >
                          {t("01.")}
                        </p>
                      </div>
                      <div
                        className="framer-rjp6f9"
                        data-framer-name="Title & Details"
                      >
                        <div
                          className="framer-l9ujw9"
                          data-framer-name="Title & Tags"
                        >
                          <div
                            className="framer-146p3zs"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.se675b69d5b}
                          >
                            <h4
                              className="framer-text framer-styles-preset-167816o"
                              data-styles-preset="FECrL8yAb"
                              dir="auto"
                              style={referenceStyles.se56df9ff67}
                            >
                              {t("Website Design")}
                            </h4>
                          </div>
                          <div
                            className="framer-12p5a3z"
                            data-framer-name="Tag Wrapper"
                          >
                            <div className="framer-93jzjy-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("UI/UX")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-1vwuzdp-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Responsive")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-124zkr5-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Performance")}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <AccordionPanel
                          className="framer-1ebu21f"
                          data-framer-name="Image & Details"
                        >
                          <div
                            className="framer-5szoug"
                            style={referenceStyles.sbc989dc343}
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              style={referenceStyles.s8a54025f8d}
                            >
                              <img
                                decoding="async"
                                width="1500"
                                height="1130"
                                sizes="(min-width: 1200px) 339px, (max-width: 767.98px) min(max(max(min(100vw - 40px, 1120px), 1px) - 74px, 1px), 710px), (min-width: 768px) and (max-width: 1199.98px) 190px"
                                srcSet="/assets/5111438053d1eb63.png 512w, /assets/72c3f4c6773173b5.png 1024w, /assets/3345d22a74a07841.png 1500w"
                                src="/assets/3345d22a74a07841.png"
                                alt={t("Image")}
                                className="w-full! h-full!"
                                style={referenceStyles.s258149b79d}
                              />
                            </div>
                          </div>
                          <div
                            className="framer-1gicul7"
                            data-framer-name="Details & Button"
                          >
                            <div
                              className="framer-1ggwkfr"
                              data-framer-component-type="RichTextContainer"
                              style={referenceStyles.sa149e8bcd9}
                            >
                              <h5
                                className="framer-text framer-styles-preset-uttc6m"
                                data-styles-preset="lllneI4EJ"
                                dir="auto"
                                style={referenceStyles.s6861219acf}
                              >
                                {t(
                                  "Beautiful websites crafted to engage, inspire confidence.",
                                )}
                              </h5>
                            </div>
                            <div className="framer-12o1p8o-container">
                              <Link
                                className="framer-obWCA framer-9qjuV framer-Bq5uF framer-18sfddm framer-v-1fa7o3w framer-1fsrsxu"
                                data-border="true"
                                data-framer-name="Variant 2"
                                href={href("/contact")}
                                style={referenceStyles.s3bb9702481}
                              >
                                <div
                                  className="framer-14jkp0r"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.sdb4e5c5446}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-12928c1"
                                    data-styles-preset="V0V25Na8R"
                                    dir="auto"
                                    style={referenceStyles.s2a1463207d}
                                  >
                                    {t("Start Project")}
                                  </p>
                                </div>
                                <div className="framer-1glyh7l">
                                  <div
                                    className="framer-1oado6a"
                                    data-framer-name="Dot 01"
                                    style={referenceStyles.s21236d14f5}
                                  ></div>
                                </div>
                                <div
                                  className="framer-vweyvw"
                                  data-framer-name="Icon"
                                  style={referenceStyles.s9dc991bb8c}
                                >
                                  <svg
                                    className="framer-VdeRv framer-7wq510"
                                    role="presentation"
                                    viewBox="0 0 24 24"
                                    style={referenceStyles.s7981cc1085}
                                  >
                                    <use href="#2430009286"></use>
                                  </svg>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </AccordionPanel>
                      </div>
                    </div>
                    <AccordionToggle
                      className="framer-hf6rbv"
                      data-border="true"
                      data-framer-name="Icon"
                      data-reset="button"
                      style={referenceStyles.sbbbd28238a}
                      label={t("Website Design")}
                    >
                      <div
                        className="framer-6ju8k5"
                        data-framer-name="Line 2"
                        style={referenceStyles.scfd37f3c43}
                      ></div>
                      <div
                        className="framer-qhogpv"
                        data-framer-name="Line 1"
                        style={referenceStyles.s7338eecb53}
                      ></div>
                    </AccordionToggle>
                  </AccordionItem>
                </Reveal>
                <Reveal
                  className="framer-1wr4uqe-container"
                  style={referenceStyles.s2cca167b61}
                  as="div"
                  from="translateY(100px)"
                >
                  <AccordionItem
                    className="framer-IOjX6 framer-n9rVA framer-1jK3j framer-ge77Z framer-16ad7hm framer-v-1x6eqby w-full!"
                    data-framer-name="Phone V2"
                    data-highlight="true"
                    tabIndex={0}
                    data-service-index="1"
                    style={referenceStyles.s9014ee6b78}
                    index={1}
                    mode="service"
                    openClass="framer-v-jmhdwl"
                    closedClass="framer-v-1x6eqby"
                  >
                    <div
                      className="framer-1hokjwq"
                      data-framer-name="Title Wrapper"
                    >
                      <div
                        className="framer-d34t68"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s514342b65c}
                      >
                        <p
                          className="framer-text framer-styles-preset-1rq135e"
                          data-styles-preset="x6jp3Ye0n"
                          dir="auto"
                          style={referenceStyles.s97ca6ab9e2}
                        >
                          {t("02.")}
                        </p>
                      </div>
                      <div
                        className="framer-rjp6f9"
                        data-framer-name="Title & Details"
                      >
                        <div
                          className="framer-l9ujw9"
                          data-framer-name="Title & Tags"
                        >
                          <div
                            className="framer-146p3zs"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.se675b69d5b}
                          >
                            <h4
                              className="framer-text framer-styles-preset-167816o"
                              data-styles-preset="FECrL8yAb"
                              dir="auto"
                              style={referenceStyles.se56df9ff67}
                            >
                              {t("Framer Development")}
                            </h4>
                          </div>
                          <div
                            className="framer-12p5a3z"
                            data-framer-name="Tag Wrapper"
                          >
                            <div className="framer-93jzjy-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Framer")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-1vwuzdp-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("CMS")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-124zkr5-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Motion")}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <AccordionPanel
                          className="framer-1ebu21f"
                          data-framer-name="Image & Details"
                          style={referenceStyles.sc1ca5c600f}
                        >
                          <div
                            className="framer-5szoug"
                            style={referenceStyles.se09032584e}
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              style={referenceStyles.s713c3d973a}
                            >
                              <img
                                decoding="auto"
                                loading="lazy"
                                width="960"
                                height="1200"
                                sizes="339px"
                                srcSet="/assets/63dd57f7c994aeba.png 819w, /assets/ac62f0a5a6f4433f.png 960w"
                                src="/assets/ac62f0a5a6f4433f.png"
                                alt={t("Image")}
                                className="w-full! h-full!"
                                style={referenceStyles.s1adb816c0e}
                              />
                            </div>
                          </div>
                          <div
                            className="framer-1gicul7"
                            data-framer-name="Details & Button"
                            style={referenceStyles.sc1ca5c600f}
                          >
                            <div
                              className="framer-1ggwkfr"
                              data-framer-component-type="RichTextContainer"
                              style={referenceStyles.s278765ea87}
                            >
                              <h5
                                className="framer-text framer-styles-preset-uttc6m"
                                data-styles-preset="lllneI4EJ"
                                dir="auto"
                                style={referenceStyles.s6861219acf}
                              >
                                {t(
                                  "Fast Framer experiences built for exceptional performance.",
                                )}
                              </h5>
                            </div>
                            <div
                              className="framer-12o1p8o-container"
                              style={referenceStyles.sc1ca5c600f}
                            >
                              <Link
                                className="framer-obWCA framer-9qjuV framer-Bq5uF framer-18sfddm framer-v-1fa7o3w framer-1fsrsxu"
                                data-border="true"
                                data-framer-name="Variant 2"
                                href={href("/contact")}
                                style={referenceStyles.s5dc0758bc3}
                              >
                                <div
                                  className="framer-14jkp0r"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s6295475829}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-12928c1"
                                    data-styles-preset="V0V25Na8R"
                                    dir="auto"
                                    style={referenceStyles.s2a1463207d}
                                  >
                                    {t("Start Project")}
                                  </p>
                                </div>
                                <div
                                  className="framer-1glyh7l"
                                  style={referenceStyles.sc1ca5c600f}
                                >
                                  <div
                                    className="framer-1oado6a"
                                    data-framer-name="Dot 01"
                                    style={referenceStyles.s0eea5b0776}
                                  ></div>
                                </div>
                                <div
                                  className="framer-vweyvw"
                                  data-framer-name="Icon"
                                  style={referenceStyles.sb0a1e952a6}
                                >
                                  <svg
                                    className="framer-VdeRv framer-7wq510"
                                    role="presentation"
                                    viewBox="0 0 24 24"
                                    style={referenceStyles.s84f00561ca}
                                  >
                                    <use href="#2430009286"></use>
                                  </svg>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </AccordionPanel>
                      </div>
                    </div>
                    <AccordionToggle
                      className="framer-hf6rbv"
                      data-border="true"
                      data-framer-name="Icon"
                      data-reset="button"
                      style={referenceStyles.sbbbd28238a}
                      label={t("Framer Development")}
                    >
                      <div
                        className="framer-6ju8k5"
                        data-framer-name="Line 2"
                        style={referenceStyles.scfd37f3c43}
                      ></div>
                      <div
                        className="framer-qhogpv"
                        data-framer-name="Line 1"
                        style={referenceStyles.sefb4340700}
                      ></div>
                    </AccordionToggle>
                  </AccordionItem>
                </Reveal>
                <Reveal
                  className="framer-16nn1cs-container"
                  style={referenceStyles.s2cca167b61}
                  as="div"
                  from="translateY(100px)"
                >
                  <AccordionItem
                    className="framer-IOjX6 framer-n9rVA framer-1jK3j framer-ge77Z framer-16ad7hm framer-v-1x6eqby w-full!"
                    data-framer-name="Phone V2"
                    data-highlight="true"
                    tabIndex={0}
                    data-service-index="2"
                    style={referenceStyles.s9014ee6b78}
                    index={2}
                    mode="service"
                    openClass="framer-v-jmhdwl"
                    closedClass="framer-v-1x6eqby"
                  >
                    <div
                      className="framer-1hokjwq"
                      data-framer-name="Title Wrapper"
                    >
                      <div
                        className="framer-d34t68"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s514342b65c}
                      >
                        <p
                          className="framer-text framer-styles-preset-1rq135e"
                          data-styles-preset="x6jp3Ye0n"
                          dir="auto"
                          style={referenceStyles.s97ca6ab9e2}
                        >
                          {t("03.")}
                        </p>
                      </div>
                      <div
                        className="framer-rjp6f9"
                        data-framer-name="Title & Details"
                      >
                        <div
                          className="framer-l9ujw9"
                          data-framer-name="Title & Tags"
                        >
                          <div
                            className="framer-146p3zs"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.se675b69d5b}
                          >
                            <h4
                              className="framer-text framer-styles-preset-167816o"
                              data-styles-preset="FECrL8yAb"
                              dir="auto"
                              style={referenceStyles.se56df9ff67}
                            >
                              {t("No-Code Automation")}
                            </h4>
                          </div>
                          <div
                            className="framer-12p5a3z"
                            data-framer-name="Tag Wrapper"
                          >
                            <div className="framer-93jzjy-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Automation")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-1vwuzdp-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Workflow")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-124zkr5-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Integration")}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <AccordionPanel
                          className="framer-1ebu21f"
                          data-framer-name="Image & Details"
                          style={referenceStyles.s1b170b0f1e}
                        >
                          <div
                            className="framer-5szoug"
                            style={referenceStyles.se09032584e}
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              style={referenceStyles.s713c3d973a}
                            >
                              <img
                                decoding="async"
                                loading="lazy"
                                width="1500"
                                height="841"
                                sizes="339px"
                                srcSet="/assets/6eea4d261dd2de92.png 512w, /assets/f0531b0320a1dffb.png 1024w, /assets/9b3d48012a1cca23.png 1500w"
                                src="/assets/9b3d48012a1cca23.png"
                                alt={t("Image")}
                                className="w-full! h-full!"
                                style={referenceStyles.s1adb816c0e}
                              />
                            </div>
                          </div>
                          <div
                            className="framer-1gicul7"
                            data-framer-name="Details & Button"
                            style={referenceStyles.sc1ca5c600f}
                          >
                            <div
                              className="framer-1ggwkfr"
                              data-framer-component-type="RichTextContainer"
                              style={referenceStyles.s278765ea87}
                            >
                              <h5
                                className="framer-text framer-styles-preset-uttc6m"
                                data-styles-preset="lllneI4EJ"
                                dir="auto"
                                style={referenceStyles.s6861219acf}
                              >
                                {t(
                                  "Automate workflows efficiently without writing code.",
                                )}
                              </h5>
                            </div>
                            <div
                              className="framer-12o1p8o-container"
                              style={referenceStyles.sc1ca5c600f}
                            >
                              <Link
                                className="framer-obWCA framer-9qjuV framer-Bq5uF framer-18sfddm framer-v-1fa7o3w framer-1fsrsxu"
                                data-border="true"
                                data-framer-name="Variant 2"
                                href={href("/contact")}
                                style={referenceStyles.s5dc0758bc3}
                              >
                                <div
                                  className="framer-14jkp0r"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s6295475829}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-12928c1"
                                    data-styles-preset="V0V25Na8R"
                                    dir="auto"
                                    style={referenceStyles.s2a1463207d}
                                  >
                                    {t("Start Project")}
                                  </p>
                                </div>
                                <div
                                  className="framer-1glyh7l"
                                  style={referenceStyles.sc1ca5c600f}
                                >
                                  <div
                                    className="framer-1oado6a"
                                    data-framer-name="Dot 01"
                                    style={referenceStyles.s0eea5b0776}
                                  ></div>
                                </div>
                                <div
                                  className="framer-vweyvw"
                                  data-framer-name="Icon"
                                  style={referenceStyles.sb0a1e952a6}
                                >
                                  <svg
                                    className="framer-VdeRv framer-7wq510"
                                    role="presentation"
                                    viewBox="0 0 24 24"
                                    style={referenceStyles.s84f00561ca}
                                  >
                                    <use href="#2430009286"></use>
                                  </svg>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </AccordionPanel>
                      </div>
                    </div>
                    <AccordionToggle
                      className="framer-hf6rbv"
                      data-border="true"
                      data-framer-name="Icon"
                      data-reset="button"
                      style={referenceStyles.sbbbd28238a}
                      label={t("No-Code Automation")}
                    >
                      <div
                        className="framer-6ju8k5"
                        data-framer-name="Line 2"
                        style={referenceStyles.scfd37f3c43}
                      ></div>
                      <div
                        className="framer-qhogpv"
                        data-framer-name="Line 1"
                        style={referenceStyles.sefb4340700}
                      ></div>
                    </AccordionToggle>
                  </AccordionItem>
                </Reveal>
                <Reveal
                  className="framer-mrmlf-container"
                  style={referenceStyles.s2cca167b61}
                  as="div"
                  from="translateY(100px)"
                >
                  <AccordionItem
                    className="framer-IOjX6 framer-n9rVA framer-1jK3j framer-ge77Z framer-16ad7hm framer-v-1x6eqby w-full!"
                    data-framer-name="Phone V2"
                    data-highlight="true"
                    tabIndex={0}
                    data-service-index="3"
                    style={referenceStyles.s9014ee6b78}
                    index={3}
                    mode="service"
                    openClass="framer-v-jmhdwl"
                    closedClass="framer-v-1x6eqby"
                  >
                    <div
                      className="framer-1hokjwq"
                      data-framer-name="Title Wrapper"
                    >
                      <div
                        className="framer-d34t68"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s514342b65c}
                      >
                        <p
                          className="framer-text framer-styles-preset-1rq135e"
                          data-styles-preset="x6jp3Ye0n"
                          dir="auto"
                          style={referenceStyles.s97ca6ab9e2}
                        >
                          {t("04.")}
                        </p>
                      </div>
                      <div
                        className="framer-rjp6f9"
                        data-framer-name="Title & Details"
                      >
                        <div
                          className="framer-l9ujw9"
                          data-framer-name="Title & Tags"
                        >
                          <div
                            className="framer-146p3zs"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.se675b69d5b}
                          >
                            <h4
                              className="framer-text framer-styles-preset-167816o"
                              data-styles-preset="FECrL8yAb"
                              dir="auto"
                              style={referenceStyles.se56df9ff67}
                            >
                              {t("Brand Identity")}
                            </h4>
                          </div>
                          <div
                            className="framer-12p5a3z"
                            data-framer-name="Tag Wrapper"
                          >
                            <div className="framer-93jzjy-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Identity")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-1vwuzdp-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Strategy")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-124zkr5-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Visuals")}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <AccordionPanel
                          className="framer-1ebu21f"
                          data-framer-name="Image & Details"
                          style={referenceStyles.sdf4d72f1fb}
                        >
                          <div
                            className="framer-5szoug"
                            style={referenceStyles.se09032584e}
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              style={referenceStyles.s713c3d973a}
                            >
                              <img
                                decoding="async"
                                loading="lazy"
                                width="1200"
                                height="804"
                                sizes="339px"
                                srcSet="/assets/0ca02ec65b9efd5b.png 512w, /assets/1093883db13272e8.png 1024w, /assets/683feaedbf07a4c8.png 1200w"
                                src="/assets/683feaedbf07a4c8.png"
                                alt={t("Image")}
                                className="w-full! h-full!"
                                style={referenceStyles.s1adb816c0e}
                              />
                            </div>
                          </div>
                          <div
                            className="framer-1gicul7"
                            data-framer-name="Details & Button"
                            style={referenceStyles.sc1ca5c600f}
                          >
                            <div
                              className="framer-1ggwkfr"
                              data-framer-component-type="RichTextContainer"
                              style={referenceStyles.s278765ea87}
                            >
                              <h5
                                className="framer-text framer-styles-preset-uttc6m"
                                data-styles-preset="lllneI4EJ"
                                dir="auto"
                                style={referenceStyles.s6861219acf}
                              >
                                {t(
                                  "Distinctive brand identities building trust and recognition.",
                                )}
                              </h5>
                            </div>
                            <div
                              className="framer-12o1p8o-container"
                              style={referenceStyles.sc1ca5c600f}
                            >
                              <Link
                                className="framer-obWCA framer-9qjuV framer-Bq5uF framer-18sfddm framer-v-1fa7o3w framer-1fsrsxu"
                                data-border="true"
                                data-framer-name="Variant 2"
                                href={href("/contact")}
                                style={referenceStyles.s5dc0758bc3}
                              >
                                <div
                                  className="framer-14jkp0r"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s6295475829}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-12928c1"
                                    data-styles-preset="V0V25Na8R"
                                    dir="auto"
                                    style={referenceStyles.s2a1463207d}
                                  >
                                    {t("Start Project")}
                                  </p>
                                </div>
                                <div
                                  className="framer-1glyh7l"
                                  style={referenceStyles.sc1ca5c600f}
                                >
                                  <div
                                    className="framer-1oado6a"
                                    data-framer-name="Dot 01"
                                    style={referenceStyles.s0eea5b0776}
                                  ></div>
                                </div>
                                <div
                                  className="framer-vweyvw"
                                  data-framer-name="Icon"
                                  style={referenceStyles.sb0a1e952a6}
                                >
                                  <svg
                                    className="framer-VdeRv framer-7wq510"
                                    role="presentation"
                                    viewBox="0 0 24 24"
                                    style={referenceStyles.s84f00561ca}
                                  >
                                    <use href="#2430009286"></use>
                                  </svg>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </AccordionPanel>
                      </div>
                    </div>
                    <AccordionToggle
                      className="framer-hf6rbv"
                      data-border="true"
                      data-framer-name="Icon"
                      data-reset="button"
                      style={referenceStyles.sbbbd28238a}
                      label={t("Brand Identity")}
                    >
                      <div
                        className="framer-6ju8k5"
                        data-framer-name="Line 2"
                        style={referenceStyles.scfd37f3c43}
                      ></div>
                      <div
                        className="framer-qhogpv"
                        data-framer-name="Line 1"
                        style={referenceStyles.sefb4340700}
                      ></div>
                    </AccordionToggle>
                  </AccordionItem>
                </Reveal>
                <Reveal
                  className="framer-1ctbsv5-container"
                  style={referenceStyles.s2cca167b61}
                  as="div"
                  from="translateY(100px)"
                >
                  <AccordionItem
                    className="framer-IOjX6 framer-n9rVA framer-1jK3j framer-ge77Z framer-16ad7hm framer-v-1x6eqby w-full!"
                    data-framer-name="Phone V2"
                    data-highlight="true"
                    tabIndex={0}
                    data-service-index="4"
                    style={referenceStyles.s9014ee6b78}
                    index={4}
                    mode="service"
                    openClass="framer-v-jmhdwl"
                    closedClass="framer-v-1x6eqby"
                  >
                    <div
                      className="framer-1hokjwq"
                      data-framer-name="Title Wrapper"
                    >
                      <div
                        className="framer-d34t68"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s514342b65c}
                      >
                        <p
                          className="framer-text framer-styles-preset-1rq135e"
                          data-styles-preset="x6jp3Ye0n"
                          dir="auto"
                          style={referenceStyles.s97ca6ab9e2}
                        >
                          {t("05.")}
                        </p>
                      </div>
                      <div
                        className="framer-rjp6f9"
                        data-framer-name="Title & Details"
                      >
                        <div
                          className="framer-l9ujw9"
                          data-framer-name="Title & Tags"
                        >
                          <div
                            className="framer-146p3zs"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.se675b69d5b}
                          >
                            <h4
                              className="framer-text framer-styles-preset-167816o"
                              data-styles-preset="FECrL8yAb"
                              dir="auto"
                              style={referenceStyles.se56df9ff67}
                            >
                              {t("SEO & Growth")}
                            </h4>
                          </div>
                          <div
                            className="framer-12p5a3z"
                            data-framer-name="Tag Wrapper"
                          >
                            <div className="framer-93jzjy-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("SEO")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-1vwuzdp-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Analytics")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-124zkr5-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Growth")}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <AccordionPanel
                          className="framer-1ebu21f"
                          data-framer-name="Image & Details"
                          style={referenceStyles.s7f4fc74493}
                        >
                          <div
                            className="framer-5szoug"
                            style={referenceStyles.se09032584e}
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              style={referenceStyles.s713c3d973a}
                            >
                              <img
                                decoding="async"
                                loading="lazy"
                                width="960"
                                height="1200"
                                sizes="339px"
                                srcSet="/assets/9348b4e1b02f9706.png 819w, /assets/c9e087c0e10f7761.png 960w"
                                src="/assets/c9e087c0e10f7761.png"
                                alt={t("Image")}
                                className="w-full! h-full!"
                                style={referenceStyles.s1adb816c0e}
                              />
                            </div>
                          </div>
                          <div
                            className="framer-1gicul7"
                            data-framer-name="Details & Button"
                            style={referenceStyles.sc1ca5c600f}
                          >
                            <div
                              className="framer-1ggwkfr"
                              data-framer-component-type="RichTextContainer"
                              style={referenceStyles.s278765ea87}
                            >
                              <h5
                                className="framer-text framer-styles-preset-uttc6m"
                                data-styles-preset="lllneI4EJ"
                                dir="auto"
                                style={referenceStyles.s6861219acf}
                              >
                                {t(
                                  "Drive organic growth through strategic optimization.",
                                )}
                              </h5>
                            </div>
                            <div
                              className="framer-12o1p8o-container"
                              style={referenceStyles.sc1ca5c600f}
                            >
                              <Link
                                className="framer-obWCA framer-9qjuV framer-Bq5uF framer-18sfddm framer-v-1fa7o3w framer-1fsrsxu"
                                data-border="true"
                                data-framer-name="Variant 2"
                                href={href("/contact")}
                                style={referenceStyles.s5dc0758bc3}
                              >
                                <div
                                  className="framer-14jkp0r"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s6295475829}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-12928c1"
                                    data-styles-preset="V0V25Na8R"
                                    dir="auto"
                                    style={referenceStyles.s2a1463207d}
                                  >
                                    {t("Start Project")}
                                  </p>
                                </div>
                                <div
                                  className="framer-1glyh7l"
                                  style={referenceStyles.sc1ca5c600f}
                                >
                                  <div
                                    className="framer-1oado6a"
                                    data-framer-name="Dot 01"
                                    style={referenceStyles.s0eea5b0776}
                                  ></div>
                                </div>
                                <div
                                  className="framer-vweyvw"
                                  data-framer-name="Icon"
                                  style={referenceStyles.sb0a1e952a6}
                                >
                                  <svg
                                    className="framer-VdeRv framer-7wq510"
                                    role="presentation"
                                    viewBox="0 0 24 24"
                                    style={referenceStyles.s84f00561ca}
                                  >
                                    <use href="#2430009286"></use>
                                  </svg>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </AccordionPanel>
                      </div>
                    </div>
                    <AccordionToggle
                      className="framer-hf6rbv"
                      data-border="true"
                      data-framer-name="Icon"
                      data-reset="button"
                      style={referenceStyles.sbbbd28238a}
                      label={t("SEO & Growth")}
                    >
                      <div
                        className="framer-6ju8k5"
                        data-framer-name="Line 2"
                        style={referenceStyles.scfd37f3c43}
                      ></div>
                      <div
                        className="framer-qhogpv"
                        data-framer-name="Line 1"
                        style={referenceStyles.sefb4340700}
                      ></div>
                    </AccordionToggle>
                  </AccordionItem>
                </Reveal>
                <div
                  className="framer-1ihxooy-container"
                  style={referenceStyles.s4317ba2255}
                >
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-1bcn26v hidden-72rtr7">
            <div className="framer-uruf6e-container">
              <div
                className="framer-d3CKe framer-17bhmoe framer-v-6mo5kv w-full!"
                data-framer-name="Tablet V"
              >
                <Reveal
                  className="framer-11itpg9-container"
                  style={referenceStyles.s2cca167b61}
                  as="div"
                  from="translateY(100px)"
                >
                  <AccordionItem
                    className="framer-IOjX6 framer-n9rVA framer-1jK3j framer-ge77Z framer-16ad7hm framer-v-8uqube w-full!"
                    data-framer-name="Tablet"
                    data-highlight="true"
                    tabIndex={0}
                    data-service-index="0"
                    style={referenceStyles.s9014ee6b78}
                    index={0}
                    mode="service"
                    openClass="framer-v-8uqube"
                    closedClass="framer-v-1tqt2ca"
                  >
                    <div
                      className="framer-1hokjwq"
                      data-framer-name="Title Wrapper"
                    >
                      <div
                        className="framer-d34t68"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s514342b65c}
                      >
                        <p
                          className="framer-text framer-styles-preset-1rq135e"
                          data-styles-preset="x6jp3Ye0n"
                          dir="auto"
                          style={referenceStyles.s97ca6ab9e2}
                        >
                          {t("01.")}
                        </p>
                      </div>
                      <div
                        className="framer-rjp6f9"
                        data-framer-name="Title & Details"
                      >
                        <div
                          className="framer-l9ujw9"
                          data-framer-name="Title & Tags"
                        >
                          <div
                            className="framer-146p3zs"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.se675b69d5b}
                          >
                            <h4
                              className="framer-text framer-styles-preset-167816o"
                              data-styles-preset="FECrL8yAb"
                              dir="auto"
                              style={referenceStyles.se56df9ff67}
                            >
                              {t("Website Design")}
                            </h4>
                          </div>
                          <div
                            className="framer-12p5a3z"
                            data-framer-name="Tag Wrapper"
                          >
                            <div className="framer-93jzjy-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("UI/UX")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-1vwuzdp-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Responsive")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-124zkr5-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Performance")}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <AccordionPanel
                          className="framer-1ebu21f"
                          data-framer-name="Image & Details"
                        >
                          <div
                            className="framer-5szoug"
                            style={referenceStyles.sbc989dc343}
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              style={referenceStyles.s8a54025f8d}
                            >
                              <img
                                decoding="async"
                                width="1500"
                                height="1130"
                                sizes="(min-width: 1200px) 339px, (max-width: 767.98px) min(max(max(min(100vw - 40px, 1120px), 1px) - 74px, 1px), 710px), (min-width: 768px) and (max-width: 1199.98px) 190px"
                                srcSet="/assets/5111438053d1eb63.png 512w, /assets/72c3f4c6773173b5.png 1024w, /assets/3345d22a74a07841.png 1500w"
                                src="/assets/3345d22a74a07841.png"
                                alt={t("Image")}
                                className="w-full! h-full!"
                                style={referenceStyles.s258149b79d}
                              />
                            </div>
                          </div>
                          <div
                            className="framer-1gicul7"
                            data-framer-name="Details & Button"
                          >
                            <div
                              className="framer-1ggwkfr"
                              data-framer-component-type="RichTextContainer"
                              style={referenceStyles.sa149e8bcd9}
                            >
                              <h5
                                className="framer-text framer-styles-preset-uttc6m"
                                data-styles-preset="lllneI4EJ"
                                dir="auto"
                                style={referenceStyles.s6861219acf}
                              >
                                {t(
                                  "Beautiful websites crafted to engage, inspire confidence.",
                                )}
                              </h5>
                            </div>
                            <div className="framer-12o1p8o-container">
                              <Link
                                className="framer-obWCA framer-9qjuV framer-Bq5uF framer-18sfddm framer-v-1fa7o3w framer-1fsrsxu"
                                data-border="true"
                                data-framer-name="Variant 2"
                                href={href("/contact")}
                                style={referenceStyles.s3bb9702481}
                              >
                                <div
                                  className="framer-14jkp0r"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.sdb4e5c5446}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-12928c1"
                                    data-styles-preset="V0V25Na8R"
                                    dir="auto"
                                    style={referenceStyles.s2a1463207d}
                                  >
                                    {t("Start Project")}
                                  </p>
                                </div>
                                <div className="framer-1glyh7l">
                                  <div
                                    className="framer-1oado6a"
                                    data-framer-name="Dot 01"
                                    style={referenceStyles.s21236d14f5}
                                  ></div>
                                </div>
                                <div
                                  className="framer-vweyvw"
                                  data-framer-name="Icon"
                                  style={referenceStyles.s9dc991bb8c}
                                >
                                  <svg
                                    className="framer-VdeRv framer-7wq510"
                                    role="presentation"
                                    viewBox="0 0 24 24"
                                    style={referenceStyles.s7981cc1085}
                                  >
                                    <use href="#2430009286"></use>
                                  </svg>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </AccordionPanel>
                      </div>
                    </div>
                    <AccordionToggle
                      className="framer-hf6rbv"
                      data-border="true"
                      data-framer-name="Icon"
                      data-reset="button"
                      style={referenceStyles.sbbbd28238a}
                      label={t("Website Design")}
                    >
                      <div
                        className="framer-6ju8k5"
                        data-framer-name="Line 2"
                        style={referenceStyles.scfd37f3c43}
                      ></div>
                      <div
                        className="framer-qhogpv"
                        data-framer-name="Line 1"
                        style={referenceStyles.s7338eecb53}
                      ></div>
                    </AccordionToggle>
                  </AccordionItem>
                </Reveal>
                <Reveal
                  className="framer-1wr4uqe-container"
                  style={referenceStyles.s2cca167b61}
                  as="div"
                  from="translateY(100px)"
                >
                  <AccordionItem
                    className="framer-IOjX6 framer-n9rVA framer-1jK3j framer-ge77Z framer-16ad7hm framer-v-1tqt2ca w-full!"
                    data-framer-name="Tablet 2"
                    data-highlight="true"
                    tabIndex={0}
                    data-service-index="1"
                    style={referenceStyles.s9014ee6b78}
                    index={1}
                    mode="service"
                    openClass="framer-v-8uqube"
                    closedClass="framer-v-1tqt2ca"
                  >
                    <div
                      className="framer-1hokjwq"
                      data-framer-name="Title Wrapper"
                    >
                      <div
                        className="framer-d34t68"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s514342b65c}
                      >
                        <p
                          className="framer-text framer-styles-preset-1rq135e"
                          data-styles-preset="x6jp3Ye0n"
                          dir="auto"
                          style={referenceStyles.s97ca6ab9e2}
                        >
                          {t("02.")}
                        </p>
                      </div>
                      <div
                        className="framer-rjp6f9"
                        data-framer-name="Title & Details"
                      >
                        <div
                          className="framer-l9ujw9"
                          data-framer-name="Title & Tags"
                        >
                          <div
                            className="framer-146p3zs"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.se675b69d5b}
                          >
                            <h4
                              className="framer-text framer-styles-preset-167816o"
                              data-styles-preset="FECrL8yAb"
                              dir="auto"
                              style={referenceStyles.se56df9ff67}
                            >
                              {t("Framer Development")}
                            </h4>
                          </div>
                          <div
                            className="framer-12p5a3z"
                            data-framer-name="Tag Wrapper"
                          >
                            <div className="framer-93jzjy-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Framer")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-1vwuzdp-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("CMS")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-124zkr5-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Motion")}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <AccordionPanel
                          className="framer-1ebu21f"
                          data-framer-name="Image & Details"
                          style={referenceStyles.sc1ca5c600f}
                        >
                          <div
                            className="framer-5szoug"
                            style={referenceStyles.se09032584e}
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              style={referenceStyles.s713c3d973a}
                            >
                              <img
                                decoding="auto"
                                loading="lazy"
                                width="960"
                                height="1200"
                                sizes="339px"
                                srcSet="/assets/63dd57f7c994aeba.png 819w, /assets/ac62f0a5a6f4433f.png 960w"
                                src="/assets/ac62f0a5a6f4433f.png"
                                alt={t("Image")}
                                className="w-full! h-full!"
                                style={referenceStyles.s1adb816c0e}
                              />
                            </div>
                          </div>
                          <div
                            className="framer-1gicul7"
                            data-framer-name="Details & Button"
                            style={referenceStyles.sc1ca5c600f}
                          >
                            <div
                              className="framer-1ggwkfr"
                              data-framer-component-type="RichTextContainer"
                              style={referenceStyles.s278765ea87}
                            >
                              <h5
                                className="framer-text framer-styles-preset-uttc6m"
                                data-styles-preset="lllneI4EJ"
                                dir="auto"
                                style={referenceStyles.s6861219acf}
                              >
                                {t(
                                  "Fast Framer experiences built for exceptional performance.",
                                )}
                              </h5>
                            </div>
                            <div
                              className="framer-12o1p8o-container"
                              style={referenceStyles.sc1ca5c600f}
                            >
                              <Link
                                className="framer-obWCA framer-9qjuV framer-Bq5uF framer-18sfddm framer-v-1fa7o3w framer-1fsrsxu"
                                data-border="true"
                                data-framer-name="Variant 2"
                                href={href("/contact")}
                                style={referenceStyles.s5dc0758bc3}
                              >
                                <div
                                  className="framer-14jkp0r"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s6295475829}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-12928c1"
                                    data-styles-preset="V0V25Na8R"
                                    dir="auto"
                                    style={referenceStyles.s2a1463207d}
                                  >
                                    {t("Start Project")}
                                  </p>
                                </div>
                                <div
                                  className="framer-1glyh7l"
                                  style={referenceStyles.sc1ca5c600f}
                                >
                                  <div
                                    className="framer-1oado6a"
                                    data-framer-name="Dot 01"
                                    style={referenceStyles.s0eea5b0776}
                                  ></div>
                                </div>
                                <div
                                  className="framer-vweyvw"
                                  data-framer-name="Icon"
                                  style={referenceStyles.sb0a1e952a6}
                                >
                                  <svg
                                    className="framer-VdeRv framer-7wq510"
                                    role="presentation"
                                    viewBox="0 0 24 24"
                                    style={referenceStyles.s84f00561ca}
                                  >
                                    <use href="#2430009286"></use>
                                  </svg>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </AccordionPanel>
                      </div>
                    </div>
                    <AccordionToggle
                      className="framer-hf6rbv"
                      data-border="true"
                      data-framer-name="Icon"
                      data-reset="button"
                      style={referenceStyles.sbbbd28238a}
                      label={t("Framer Development")}
                    >
                      <div
                        className="framer-6ju8k5"
                        data-framer-name="Line 2"
                        style={referenceStyles.scfd37f3c43}
                      ></div>
                      <div
                        className="framer-qhogpv"
                        data-framer-name="Line 1"
                        style={referenceStyles.sefb4340700}
                      ></div>
                    </AccordionToggle>
                  </AccordionItem>
                </Reveal>
                <Reveal
                  className="framer-16nn1cs-container"
                  style={referenceStyles.s2cca167b61}
                  as="div"
                  from="translateY(100px)"
                >
                  <AccordionItem
                    className="framer-IOjX6 framer-n9rVA framer-1jK3j framer-ge77Z framer-16ad7hm framer-v-1tqt2ca w-full!"
                    data-framer-name="Tablet 2"
                    data-highlight="true"
                    tabIndex={0}
                    data-service-index="2"
                    style={referenceStyles.s9014ee6b78}
                    index={2}
                    mode="service"
                    openClass="framer-v-8uqube"
                    closedClass="framer-v-1tqt2ca"
                  >
                    <div
                      className="framer-1hokjwq"
                      data-framer-name="Title Wrapper"
                    >
                      <div
                        className="framer-d34t68"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s514342b65c}
                      >
                        <p
                          className="framer-text framer-styles-preset-1rq135e"
                          data-styles-preset="x6jp3Ye0n"
                          dir="auto"
                          style={referenceStyles.s97ca6ab9e2}
                        >
                          {t("03.")}
                        </p>
                      </div>
                      <div
                        className="framer-rjp6f9"
                        data-framer-name="Title & Details"
                      >
                        <div
                          className="framer-l9ujw9"
                          data-framer-name="Title & Tags"
                        >
                          <div
                            className="framer-146p3zs"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.se675b69d5b}
                          >
                            <h4
                              className="framer-text framer-styles-preset-167816o"
                              data-styles-preset="FECrL8yAb"
                              dir="auto"
                              style={referenceStyles.se56df9ff67}
                            >
                              {t("No-Code Automation")}
                            </h4>
                          </div>
                          <div
                            className="framer-12p5a3z"
                            data-framer-name="Tag Wrapper"
                          >
                            <div className="framer-93jzjy-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Automation")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-1vwuzdp-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Workflow")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-124zkr5-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Integration")}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <AccordionPanel
                          className="framer-1ebu21f"
                          data-framer-name="Image & Details"
                          style={referenceStyles.s1b170b0f1e}
                        >
                          <div
                            className="framer-5szoug"
                            style={referenceStyles.se09032584e}
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              style={referenceStyles.s713c3d973a}
                            >
                              <img
                                decoding="async"
                                loading="lazy"
                                width="1500"
                                height="841"
                                sizes="339px"
                                srcSet="/assets/6eea4d261dd2de92.png 512w, /assets/f0531b0320a1dffb.png 1024w, /assets/9b3d48012a1cca23.png 1500w"
                                src="/assets/9b3d48012a1cca23.png"
                                alt={t("Image")}
                                className="w-full! h-full!"
                                style={referenceStyles.s1adb816c0e}
                              />
                            </div>
                          </div>
                          <div
                            className="framer-1gicul7"
                            data-framer-name="Details & Button"
                            style={referenceStyles.sc1ca5c600f}
                          >
                            <div
                              className="framer-1ggwkfr"
                              data-framer-component-type="RichTextContainer"
                              style={referenceStyles.s278765ea87}
                            >
                              <h5
                                className="framer-text framer-styles-preset-uttc6m"
                                data-styles-preset="lllneI4EJ"
                                dir="auto"
                                style={referenceStyles.s6861219acf}
                              >
                                {t(
                                  "Automate workflows efficiently without writing code.",
                                )}
                              </h5>
                            </div>
                            <div
                              className="framer-12o1p8o-container"
                              style={referenceStyles.sc1ca5c600f}
                            >
                              <Link
                                className="framer-obWCA framer-9qjuV framer-Bq5uF framer-18sfddm framer-v-1fa7o3w framer-1fsrsxu"
                                data-border="true"
                                data-framer-name="Variant 2"
                                href={href("/contact")}
                                style={referenceStyles.s5dc0758bc3}
                              >
                                <div
                                  className="framer-14jkp0r"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s6295475829}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-12928c1"
                                    data-styles-preset="V0V25Na8R"
                                    dir="auto"
                                    style={referenceStyles.s2a1463207d}
                                  >
                                    {t("Start Project")}
                                  </p>
                                </div>
                                <div
                                  className="framer-1glyh7l"
                                  style={referenceStyles.sc1ca5c600f}
                                >
                                  <div
                                    className="framer-1oado6a"
                                    data-framer-name="Dot 01"
                                    style={referenceStyles.s0eea5b0776}
                                  ></div>
                                </div>
                                <div
                                  className="framer-vweyvw"
                                  data-framer-name="Icon"
                                  style={referenceStyles.sb0a1e952a6}
                                >
                                  <svg
                                    className="framer-VdeRv framer-7wq510"
                                    role="presentation"
                                    viewBox="0 0 24 24"
                                    style={referenceStyles.s84f00561ca}
                                  >
                                    <use href="#2430009286"></use>
                                  </svg>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </AccordionPanel>
                      </div>
                    </div>
                    <AccordionToggle
                      className="framer-hf6rbv"
                      data-border="true"
                      data-framer-name="Icon"
                      data-reset="button"
                      style={referenceStyles.sbbbd28238a}
                      label={t("No-Code Automation")}
                    >
                      <div
                        className="framer-6ju8k5"
                        data-framer-name="Line 2"
                        style={referenceStyles.scfd37f3c43}
                      ></div>
                      <div
                        className="framer-qhogpv"
                        data-framer-name="Line 1"
                        style={referenceStyles.sefb4340700}
                      ></div>
                    </AccordionToggle>
                  </AccordionItem>
                </Reveal>
                <Reveal
                  className="framer-mrmlf-container"
                  style={referenceStyles.s2cca167b61}
                  as="div"
                  from="translateY(100px)"
                >
                  <AccordionItem
                    className="framer-IOjX6 framer-n9rVA framer-1jK3j framer-ge77Z framer-16ad7hm framer-v-1tqt2ca w-full!"
                    data-framer-name="Tablet 2"
                    data-highlight="true"
                    tabIndex={0}
                    data-service-index="3"
                    style={referenceStyles.s9014ee6b78}
                    index={3}
                    mode="service"
                    openClass="framer-v-8uqube"
                    closedClass="framer-v-1tqt2ca"
                  >
                    <div
                      className="framer-1hokjwq"
                      data-framer-name="Title Wrapper"
                    >
                      <div
                        className="framer-d34t68"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s514342b65c}
                      >
                        <p
                          className="framer-text framer-styles-preset-1rq135e"
                          data-styles-preset="x6jp3Ye0n"
                          dir="auto"
                          style={referenceStyles.s97ca6ab9e2}
                        >
                          {t("04.")}
                        </p>
                      </div>
                      <div
                        className="framer-rjp6f9"
                        data-framer-name="Title & Details"
                      >
                        <div
                          className="framer-l9ujw9"
                          data-framer-name="Title & Tags"
                        >
                          <div
                            className="framer-146p3zs"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.se675b69d5b}
                          >
                            <h4
                              className="framer-text framer-styles-preset-167816o"
                              data-styles-preset="FECrL8yAb"
                              dir="auto"
                              style={referenceStyles.se56df9ff67}
                            >
                              {t("Brand Identity")}
                            </h4>
                          </div>
                          <div
                            className="framer-12p5a3z"
                            data-framer-name="Tag Wrapper"
                          >
                            <div className="framer-93jzjy-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Identity")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-1vwuzdp-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Strategy")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-124zkr5-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Visuals")}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <AccordionPanel
                          className="framer-1ebu21f"
                          data-framer-name="Image & Details"
                          style={referenceStyles.sdf4d72f1fb}
                        >
                          <div
                            className="framer-5szoug"
                            style={referenceStyles.se09032584e}
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              style={referenceStyles.s713c3d973a}
                            >
                              <img
                                decoding="async"
                                loading="lazy"
                                width="1200"
                                height="804"
                                sizes="339px"
                                srcSet="/assets/0ca02ec65b9efd5b.png 512w, /assets/1093883db13272e8.png 1024w, /assets/683feaedbf07a4c8.png 1200w"
                                src="/assets/683feaedbf07a4c8.png"
                                alt={t("Image")}
                                className="w-full! h-full!"
                                style={referenceStyles.s1adb816c0e}
                              />
                            </div>
                          </div>
                          <div
                            className="framer-1gicul7"
                            data-framer-name="Details & Button"
                            style={referenceStyles.sc1ca5c600f}
                          >
                            <div
                              className="framer-1ggwkfr"
                              data-framer-component-type="RichTextContainer"
                              style={referenceStyles.s278765ea87}
                            >
                              <h5
                                className="framer-text framer-styles-preset-uttc6m"
                                data-styles-preset="lllneI4EJ"
                                dir="auto"
                                style={referenceStyles.s6861219acf}
                              >
                                {t(
                                  "Distinctive brand identities building trust and recognition.",
                                )}
                              </h5>
                            </div>
                            <div
                              className="framer-12o1p8o-container"
                              style={referenceStyles.sc1ca5c600f}
                            >
                              <Link
                                className="framer-obWCA framer-9qjuV framer-Bq5uF framer-18sfddm framer-v-1fa7o3w framer-1fsrsxu"
                                data-border="true"
                                data-framer-name="Variant 2"
                                href={href("/contact")}
                                style={referenceStyles.s5dc0758bc3}
                              >
                                <div
                                  className="framer-14jkp0r"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s6295475829}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-12928c1"
                                    data-styles-preset="V0V25Na8R"
                                    dir="auto"
                                    style={referenceStyles.s2a1463207d}
                                  >
                                    {t("Start Project")}
                                  </p>
                                </div>
                                <div
                                  className="framer-1glyh7l"
                                  style={referenceStyles.sc1ca5c600f}
                                >
                                  <div
                                    className="framer-1oado6a"
                                    data-framer-name="Dot 01"
                                    style={referenceStyles.s0eea5b0776}
                                  ></div>
                                </div>
                                <div
                                  className="framer-vweyvw"
                                  data-framer-name="Icon"
                                  style={referenceStyles.sb0a1e952a6}
                                >
                                  <svg
                                    className="framer-VdeRv framer-7wq510"
                                    role="presentation"
                                    viewBox="0 0 24 24"
                                    style={referenceStyles.s84f00561ca}
                                  >
                                    <use href="#2430009286"></use>
                                  </svg>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </AccordionPanel>
                      </div>
                    </div>
                    <AccordionToggle
                      className="framer-hf6rbv"
                      data-border="true"
                      data-framer-name="Icon"
                      data-reset="button"
                      style={referenceStyles.sbbbd28238a}
                      label={t("Brand Identity")}
                    >
                      <div
                        className="framer-6ju8k5"
                        data-framer-name="Line 2"
                        style={referenceStyles.scfd37f3c43}
                      ></div>
                      <div
                        className="framer-qhogpv"
                        data-framer-name="Line 1"
                        style={referenceStyles.sefb4340700}
                      ></div>
                    </AccordionToggle>
                  </AccordionItem>
                </Reveal>
                <Reveal
                  className="framer-1ctbsv5-container"
                  style={referenceStyles.s2cca167b61}
                  as="div"
                  from="translateY(100px)"
                >
                  <AccordionItem
                    className="framer-IOjX6 framer-n9rVA framer-1jK3j framer-ge77Z framer-16ad7hm framer-v-1tqt2ca w-full!"
                    data-framer-name="Tablet 2"
                    data-highlight="true"
                    tabIndex={0}
                    data-service-index="4"
                    style={referenceStyles.s9014ee6b78}
                    index={4}
                    mode="service"
                    openClass="framer-v-8uqube"
                    closedClass="framer-v-1tqt2ca"
                  >
                    <div
                      className="framer-1hokjwq"
                      data-framer-name="Title Wrapper"
                    >
                      <div
                        className="framer-d34t68"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s514342b65c}
                      >
                        <p
                          className="framer-text framer-styles-preset-1rq135e"
                          data-styles-preset="x6jp3Ye0n"
                          dir="auto"
                          style={referenceStyles.s97ca6ab9e2}
                        >
                          {t("05.")}
                        </p>
                      </div>
                      <div
                        className="framer-rjp6f9"
                        data-framer-name="Title & Details"
                      >
                        <div
                          className="framer-l9ujw9"
                          data-framer-name="Title & Tags"
                        >
                          <div
                            className="framer-146p3zs"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.se675b69d5b}
                          >
                            <h4
                              className="framer-text framer-styles-preset-167816o"
                              data-styles-preset="FECrL8yAb"
                              dir="auto"
                              style={referenceStyles.se56df9ff67}
                            >
                              {t("SEO & Growth")}
                            </h4>
                          </div>
                          <div
                            className="framer-12p5a3z"
                            data-framer-name="Tag Wrapper"
                          >
                            <div className="framer-93jzjy-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("SEO")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-1vwuzdp-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Analytics")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-124zkr5-container">
                              <div
                                className="framer-tOJBk framer-pSPxj framer-k18yy2 framer-v-k18yy2"
                                data-border="true"
                                data-framer-name="Variant 1"
                                style={referenceStyles.s279aaed04c}
                              >
                                <div
                                  className="framer-1e1h34l"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s143c03551f}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-nxx96o"
                                    data-styles-preset="fHx27tEvF"
                                    dir="auto"
                                    style={referenceStyles.se8682f4ed5}
                                  >
                                    {t("Growth")}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <AccordionPanel
                          className="framer-1ebu21f"
                          data-framer-name="Image & Details"
                          style={referenceStyles.s7f4fc74493}
                        >
                          <div
                            className="framer-5szoug"
                            style={referenceStyles.se09032584e}
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              style={referenceStyles.s713c3d973a}
                            >
                              <img
                                decoding="async"
                                loading="lazy"
                                width="960"
                                height="1200"
                                sizes="339px"
                                srcSet="/assets/9348b4e1b02f9706.png 819w, /assets/c9e087c0e10f7761.png 960w"
                                src="/assets/c9e087c0e10f7761.png"
                                alt={t("Image")}
                                className="w-full! h-full!"
                                style={referenceStyles.s1adb816c0e}
                              />
                            </div>
                          </div>
                          <div
                            className="framer-1gicul7"
                            data-framer-name="Details & Button"
                            style={referenceStyles.sc1ca5c600f}
                          >
                            <div
                              className="framer-1ggwkfr"
                              data-framer-component-type="RichTextContainer"
                              style={referenceStyles.s278765ea87}
                            >
                              <h5
                                className="framer-text framer-styles-preset-uttc6m"
                                data-styles-preset="lllneI4EJ"
                                dir="auto"
                                style={referenceStyles.s6861219acf}
                              >
                                {t(
                                  "Drive organic growth through strategic optimization.",
                                )}
                              </h5>
                            </div>
                            <div
                              className="framer-12o1p8o-container"
                              style={referenceStyles.sc1ca5c600f}
                            >
                              <Link
                                className="framer-obWCA framer-9qjuV framer-Bq5uF framer-18sfddm framer-v-1fa7o3w framer-1fsrsxu"
                                data-border="true"
                                data-framer-name="Variant 2"
                                href={href("/contact")}
                                style={referenceStyles.s5dc0758bc3}
                              >
                                <div
                                  className="framer-14jkp0r"
                                  data-framer-component-type="RichTextContainer"
                                  style={referenceStyles.s6295475829}
                                >
                                  <p
                                    className="framer-text framer-styles-preset-12928c1"
                                    data-styles-preset="V0V25Na8R"
                                    dir="auto"
                                    style={referenceStyles.s2a1463207d}
                                  >
                                    {t("Start Project")}
                                  </p>
                                </div>
                                <div
                                  className="framer-1glyh7l"
                                  style={referenceStyles.sc1ca5c600f}
                                >
                                  <div
                                    className="framer-1oado6a"
                                    data-framer-name="Dot 01"
                                    style={referenceStyles.s0eea5b0776}
                                  ></div>
                                </div>
                                <div
                                  className="framer-vweyvw"
                                  data-framer-name="Icon"
                                  style={referenceStyles.sb0a1e952a6}
                                >
                                  <svg
                                    className="framer-VdeRv framer-7wq510"
                                    role="presentation"
                                    viewBox="0 0 24 24"
                                    style={referenceStyles.s84f00561ca}
                                  >
                                    <use href="#2430009286"></use>
                                  </svg>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </AccordionPanel>
                      </div>
                    </div>
                    <AccordionToggle
                      className="framer-hf6rbv"
                      data-border="true"
                      data-framer-name="Icon"
                      data-reset="button"
                      style={referenceStyles.sbbbd28238a}
                      label={t("SEO & Growth")}
                    >
                      <div
                        className="framer-6ju8k5"
                        data-framer-name="Line 2"
                        style={referenceStyles.scfd37f3c43}
                      ></div>
                      <div
                        className="framer-qhogpv"
                        data-framer-name="Line 1"
                        style={referenceStyles.sefb4340700}
                      ></div>
                    </AccordionToggle>
                  </AccordionItem>
                </Reveal>
                <div
                  className="framer-1ihxooy-container"
                  style={referenceStyles.s4317ba2255}
                >
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AccordionGroup>
  );
}
