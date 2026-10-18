import { getTranslations } from "@/lib/i18n-server";
import { Fragment } from "react";
import Link from "next/link";
import { Reveal, SplitText, Carousel, Counter } from "@/components/Motion";
import { DistortedImage } from "@/components/DistortedImage";
import { referenceStyles } from "@/styles/reference-styles";
export async function HomeChooseUsSection() {
  const { t, locale, href } = await getTranslations();
  return (
    <section className="framer-49zht" data-framer-name="Choose Us Section">
      <div className="framer-9k7if5" data-framer-name="Container">
        <div className="framer-bevtya" data-framer-name="Content">
          <Reveal
            className="framer-16zs1y6"
            data-framer-name="Tag & Title"
            style={referenceStyles.s5916c9ffdd}
            as="div"
            from="translateY(200px)"
          >
            <div className="ssr-variant">
              <div className="framer-1f2tiky-container">
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
                      {t("WHY CHOOSE US")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="framer-uxc1tw-container"
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
                      ? t("A trusted partner for ambitious brands.")
                      : undefined
                  }
                >
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s4c7dd41f2b}>{"A"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s4c7dd41f2b}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"u"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"s"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"d"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s4c7dd41f2b}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s4c7dd41f2b}>{"p"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
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
                    <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"m"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"b"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"i"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"i"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"o"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"u"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"s"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s4c7dd41f2b}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s4c7dd41f2b}>{"b"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"d"}</span>
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
                      ? t("A trusted partner for ambitious brands.")
                      : undefined
                  }
                >
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s4c7dd41f2b}>{"A"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s4c7dd41f2b}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"u"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"s"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"d"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s4c7dd41f2b}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s4c7dd41f2b}>{"p"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
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
                    <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"m"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"b"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"i"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"i"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"o"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"u"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"s"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s4c7dd41f2b}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s4c7dd41f2b}>{"b"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"d"}</span>
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
                      ? t("A trusted partner for ambitious brands.")
                      : undefined
                  }
                >
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s4c7dd41f2b}>{"A"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s4c7dd41f2b}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"u"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"s"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"d"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s4c7dd41f2b}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s4c7dd41f2b}>{"p"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
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
                    <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"m"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"b"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"i"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"i"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"o"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"u"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"s"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s4c7dd41f2b}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s4c7dd41f2b}>{"b"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"d"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"s"}</span>
                    <span style={referenceStyles.s4c7dd41f2b}>{"."}</span>
                  </span>
                </SplitText>
              </div>
            </div>
          </Reveal>
          <div className="framer-1uifg3z" data-framer-name="Image & Card">
            <div className="framer-1sni63a" data-framer-name="Image">
              <div className="framer-1dynl3p-container">
                <DistortedImage
                  src="/assets/feae7e4d917f2581.png"
                  fade={true}
                  replay={false}
                />
              </div>
            </div>
            <div className="framer-uaz0b7" data-framer-name="Title & Card">
              <Reveal
                className="framer-r60o9a"
                data-framer-name="Title & Review"
                style={referenceStyles.s5916c9ffdd}
                as="div"
                from="translateY(200px)"
              >
                <div
                  className="framer-pvmbr2-container"
                  data-code-component-plugin-id="84d4c1"
                >
                  <div className="ssr-variant hidden-1bcn26v hidden-1fs2pis">
                    <SplitText
                      className="w-full!"
                      style={referenceStyles.s801866e792}
                      as="div"
                      scrollLinked={true}
                      localizedText={
                        locale === "fa"
                          ? t(
                              "We combine design and no-code expertise to create experiences that help businesses launch faster, scale confidently, and achieve growth.",
                            )
                          : undefined
                      }
                    >
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"W"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"c"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"o"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"m"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"b"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"i"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"d"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"s"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"i"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"g"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"a"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"d"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"o"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"-"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"c"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"o"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"d"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"x"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"p"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"r"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"t"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"i"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"s"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"t"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"o"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"c"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"r"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"a"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"t"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"x"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"p"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"r"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"i"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"c"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"s"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"t"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"h"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"a"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"t"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"h"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"l"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"p"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"b"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"u"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"s"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"i"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"s"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"s"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"s"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"l"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"a"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"u"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"c"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"h"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"f"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"a"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"s"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"t"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"r"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{","}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"s"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"c"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"a"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"l"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"c"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"o"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"f"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"i"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"d"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"t"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"l"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"y"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{","}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"a"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"d"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"a"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"c"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"h"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"i"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"v"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"g"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"r"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"o"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"w"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"t"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"h"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"."}</span>
                      </span>
                    </SplitText>
                  </div>
                  <div className="ssr-variant hidden-72rtr7 hidden-1fs2pis">
                    <SplitText
                      className="w-full!"
                      style={referenceStyles.s6e2d299974}
                      as="div"
                      scrollLinked={true}
                      localizedText={
                        locale === "fa"
                          ? t(
                              "We combine design and no-code expertise to create experiences that help businesses launch faster, scale confidently, and achieve growth.",
                            )
                          : undefined
                      }
                    >
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"W"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"c"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"o"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"m"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"b"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"i"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"d"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"s"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"i"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"g"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"a"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"d"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"o"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"-"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"c"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"o"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"d"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"x"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"p"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"r"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"t"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"i"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"s"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"t"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"o"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"c"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"r"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"a"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"t"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"x"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"p"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"r"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"i"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"c"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"s"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"t"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"h"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"a"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"t"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"h"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"l"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"p"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"b"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"u"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"s"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"i"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"s"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"s"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"s"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"l"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"a"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"u"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"c"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"h"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"f"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"a"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"s"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"t"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"r"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{","}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"s"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"c"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"a"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"l"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"c"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"o"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"f"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"i"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"d"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"t"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"l"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"y"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{","}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"a"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"d"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"a"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"c"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"h"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"i"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"v"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"g"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"r"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"o"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"w"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"t"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"h"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"."}</span>
                      </span>
                    </SplitText>
                  </div>
                  <div className="ssr-variant hidden-1bcn26v hidden-72rtr7">
                    <SplitText
                      className="w-full!"
                      style={referenceStyles.s4428ca8151}
                      as="div"
                      scrollLinked={true}
                      localizedText={
                        locale === "fa"
                          ? t(
                              "We combine design and no-code expertise to create experiences that help businesses launch faster, scale confidently, and achieve growth.",
                            )
                          : undefined
                      }
                    >
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"W"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"c"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"o"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"m"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"b"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"i"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"d"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"s"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"i"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"g"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"a"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"d"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"o"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"-"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"c"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"o"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"d"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"x"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"p"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"r"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"t"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"i"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"s"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"t"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"o"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"c"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"r"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"a"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"t"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"x"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"p"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"r"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"i"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"c"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"s"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"t"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"h"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"a"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"t"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"h"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"l"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"p"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"b"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"u"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"s"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"i"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"s"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"s"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"s"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"l"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"a"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"u"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"c"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"h"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"f"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"a"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"s"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"t"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"r"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{","}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"s"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"c"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"a"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"l"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"c"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"o"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"f"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"i"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"d"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"t"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"l"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"y"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{","}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"a"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"n"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"d"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"a"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"c"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"h"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"i"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"v"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"e"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s05b6f147d0}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s05b6f147d0}>{"g"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"r"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"o"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"w"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"t"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"h"}</span>
                        <span style={referenceStyles.s05b6f147d0}>{"."}</span>
                      </span>
                    </SplitText>
                  </div>
                </div>
                <div
                  className="framer-12shqnv"
                  data-border="true"
                  data-framer-name="Countries  Review"
                >
                  <div
                    className="framer-1wlb6vu"
                    data-framer-name="Icon & Countries"
                  >
                    <div className="ssr-variant hidden-1fs2pis">
                      <div className="framer-3t2eu0">
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            width="128"
                            height="128"
                            src="/assets/6b9a7e67b5c61ec7.png"
                            alt={t("Icon")}
                            className="w-full! h-full!"
                            style={referenceStyles.s1100a320a2}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="ssr-variant hidden-1bcn26v hidden-72rtr7">
                      <div className="framer-3t2eu0">
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            width="128"
                            height="128"
                            src="/assets/6b9a7e67b5c61ec7.png"
                            alt={t("Icon")}
                            className="w-full! h-full!"
                            style={referenceStyles.s1100a320a2}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="framer-swkk2m"
                      data-framer-component-type="RichTextContainer"
                      style={referenceStyles.se120e01975}
                    >
                      <p
                        className="framer-text framer-styles-preset-nxx96o"
                        data-styles-preset="fHx27tEvF"
                        dir="auto"
                        style={referenceStyles.s012fd96313}
                      >
                        {t("Trusted Worldwide 12+ Countries")}
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1fs2pis">
                    <div className="framer-maxaxr">
                      <div
                        data-framer-background-image-wrapper="true"
                        style={referenceStyles.s8a54025f8d}
                      >
                        <img
                          decoding="async"
                          loading="lazy"
                          width="416"
                          height="152"
                          src="/assets/95ea9d28d0ed2641.png"
                          alt={t("Image")}
                          className="w-full! h-full!"
                          style={referenceStyles.s1100a320a2}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1bcn26v hidden-72rtr7">
                    <div className="framer-maxaxr">
                      <div
                        data-framer-background-image-wrapper="true"
                        style={referenceStyles.s8a54025f8d}
                      >
                        <img
                          decoding="async"
                          width="416"
                          height="152"
                          src="/assets/95ea9d28d0ed2641.png"
                          alt={t("Image")}
                          className="w-full! h-full!"
                          style={referenceStyles.s1100a320a2}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal
                className="framer-1we1abs"
                data-framer-name="Details & card"
                style={referenceStyles.s5916c9ffdd}
                as="div"
                from="translateY(200px)"
              >
                <div className="framer-m1s6cw" data-framer-name="Text Wrapper">
                  <div
                    className="framer-2hzffq"
                    data-framer-name="Title & Logos"
                  >
                    <div
                      className="framer-6n4p3c"
                      data-framer-name="Title & Details"
                    >
                      <div
                        className="framer-1g2fgsz"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.se120e01975}
                      >
                        <p
                          className="framer-text framer-styles-preset-188foe3"
                          data-styles-preset="Du09bpesC"
                          dir="auto"
                          style={referenceStyles.s2dadd18f2b}
                        >
                          {t("Trusted by  Modern Businesses")}
                        </p>
                      </div>
                      <div
                        className="framer-210su5"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.se120e01975}
                      >
                        <p
                          className="framer-text framer-styles-preset-nxx96o"
                          data-styles-preset="fHx27tEvF"
                          dir="auto"
                        >
                          {t(
                            "Helping ambitious brands launch confidently worldwide.",
                          )}
                        </p>
                      </div>
                    </div>
                    <div
                      className="framer-1dwqzse"
                      data-framer-name="Logo Wrapper"
                    >
                      <div
                        className="framer-bkc1n7 relative!"
                        data-framer-name="Logo"
                        style={referenceStyles.sa804d30e3f}
                      >
                        <Reveal
                          className="relative! w-full! h-full!"
                          style={referenceStyles.s37a844cc99}
                          as="ul"
                          from="translateX(-6px)"
                        >
                          <li
                            className="ticker-item shrink-0! relative!"
                            aria-hidden="false"
                            aria-posinset={1}
                            aria-setsize={3}
                            style={referenceStyles.se800f65d54}
                          >
                            <div className="ssr-variant hidden-1fs2pis">
                              <div className="framer-jynvzg-container">
                                <div
                                  className="framer-6Rpsi framer-16xbkmg framer-v-16xbkmg"
                                  data-framer-name="Variant 1"
                                  style={referenceStyles.sc8a32dec87}
                                >
                                  <div className="framer-1un4i5a">
                                    <div
                                      data-framer-background-image-wrapper="true"
                                      style={referenceStyles.s8a54025f8d}
                                    >
                                      <img
                                        decoding="async"
                                        loading="lazy"
                                        width="228"
                                        height="80"
                                        src="/assets/8f7548240d60986c.png"
                                        alt={t("Logo")}
                                        className="w-full! h-full!"
                                        style={referenceStyles.s1100a320a2}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ssr-variant hidden-1bcn26v hidden-72rtr7">
                              <div className="framer-jynvzg-container">
                                <div
                                  className="framer-6Rpsi framer-16xbkmg framer-v-16xbkmg"
                                  data-framer-name="Variant 1"
                                  style={referenceStyles.sc8a32dec87}
                                >
                                  <div className="framer-1un4i5a">
                                    <div
                                      data-framer-background-image-wrapper="true"
                                      style={referenceStyles.s8a54025f8d}
                                    >
                                      <img
                                        decoding="async"
                                        width="228"
                                        height="80"
                                        src="/assets/8f7548240d60986c.png"
                                        alt={t("Logo")}
                                        className="w-full! h-full!"
                                        style={referenceStyles.s1100a320a2}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="ticker-item shrink-0! relative!"
                            aria-hidden="false"
                            aria-posinset={2}
                            aria-setsize={3}
                            style={referenceStyles.se800f65d54}
                          >
                            <div className="ssr-variant hidden-1fs2pis">
                              <div className="framer-4hk2hu-container">
                                <div
                                  className="framer-6Rpsi framer-16xbkmg framer-v-16xbkmg"
                                  data-framer-name="Variant 1"
                                  style={referenceStyles.sc8a32dec87}
                                >
                                  <div className="framer-1un4i5a">
                                    <div
                                      data-framer-background-image-wrapper="true"
                                      style={referenceStyles.s8a54025f8d}
                                    >
                                      <img
                                        decoding="async"
                                        loading="lazy"
                                        width="73"
                                        height="20"
                                        src="/assets/8048d95379007fbc.svg"
                                        alt={t("Logo")}
                                        className="w-full! h-full!"
                                        style={referenceStyles.s1100a320a2}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ssr-variant hidden-1bcn26v hidden-72rtr7">
                              <div className="framer-4hk2hu-container">
                                <div
                                  className="framer-6Rpsi framer-16xbkmg framer-v-16xbkmg"
                                  data-framer-name="Variant 1"
                                  style={referenceStyles.sc8a32dec87}
                                >
                                  <div className="framer-1un4i5a">
                                    <div
                                      data-framer-background-image-wrapper="true"
                                      style={referenceStyles.s8a54025f8d}
                                    >
                                      <img
                                        decoding="async"
                                        width="73"
                                        height="20"
                                        src="/assets/8048d95379007fbc.svg"
                                        alt={t("Logo")}
                                        className="w-full! h-full!"
                                        style={referenceStyles.s1100a320a2}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="ticker-item shrink-0! relative!"
                            aria-hidden="false"
                            aria-posinset={3}
                            aria-setsize={3}
                            style={referenceStyles.se800f65d54}
                          >
                            <div className="ssr-variant hidden-1fs2pis">
                              <div className="framer-1w2tbd4-container">
                                <div
                                  className="framer-6Rpsi framer-16xbkmg framer-v-16xbkmg"
                                  data-framer-name="Variant 1"
                                  style={referenceStyles.sc8a32dec87}
                                >
                                  <div className="framer-1un4i5a">
                                    <div
                                      data-framer-background-image-wrapper="true"
                                      style={referenceStyles.s8a54025f8d}
                                    >
                                      <img
                                        decoding="async"
                                        loading="lazy"
                                        width="51"
                                        height="20"
                                        src="/assets/474056e8c24db082.svg"
                                        alt={t("Logo")}
                                        className="w-full! h-full!"
                                        style={referenceStyles.s1100a320a2}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ssr-variant hidden-1bcn26v hidden-72rtr7">
                              <div className="framer-1w2tbd4-container">
                                <div
                                  className="framer-6Rpsi framer-16xbkmg framer-v-16xbkmg"
                                  data-framer-name="Variant 1"
                                  style={referenceStyles.sc8a32dec87}
                                >
                                  <div className="framer-1un4i5a">
                                    <div
                                      data-framer-background-image-wrapper="true"
                                      style={referenceStyles.s8a54025f8d}
                                    >
                                      <img
                                        decoding="async"
                                        width="51"
                                        height="20"
                                        src="/assets/474056e8c24db082.svg"
                                        alt={t("Logo")}
                                        className="w-full! h-full!"
                                        style={referenceStyles.s1100a320a2}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </Reveal>
                      </div>{" "}
                      <div
                        className="framer-1bbkvd2 relative!"
                        data-framer-name="Logo"
                        style={referenceStyles.sa804d30e3f}
                      >
                        <Reveal
                          className="relative! w-full! h-full!"
                          style={referenceStyles.s37a844cc99}
                          as="ul"
                          from="translateX(-6px)"
                        >
                          <li
                            className="ticker-item shrink-0! relative!"
                            aria-hidden="false"
                            aria-posinset={1}
                            aria-setsize={3}
                            style={referenceStyles.se800f65d54}
                          >
                            <div className="ssr-variant hidden-1fs2pis">
                              <div className="framer-41vsqu-container">
                                <div
                                  className="framer-6Rpsi framer-16xbkmg framer-v-16xbkmg"
                                  data-framer-name="Variant 1"
                                  style={referenceStyles.sc8a32dec87}
                                >
                                  <div className="framer-1un4i5a">
                                    <div
                                      data-framer-background-image-wrapper="true"
                                      style={referenceStyles.s8a54025f8d}
                                    >
                                      <img
                                        decoding="async"
                                        loading="lazy"
                                        width="57"
                                        height="20"
                                        src="/assets/2492daa100dd7900.svg"
                                        alt={t("Logo")}
                                        className="w-full! h-full!"
                                        style={referenceStyles.s1100a320a2}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ssr-variant hidden-1bcn26v hidden-72rtr7">
                              <div className="framer-41vsqu-container">
                                <div
                                  className="framer-6Rpsi framer-16xbkmg framer-v-16xbkmg"
                                  data-framer-name="Variant 1"
                                  style={referenceStyles.sc8a32dec87}
                                >
                                  <div className="framer-1un4i5a">
                                    <div
                                      data-framer-background-image-wrapper="true"
                                      style={referenceStyles.s8a54025f8d}
                                    >
                                      <img
                                        decoding="async"
                                        width="57"
                                        height="20"
                                        src="/assets/2492daa100dd7900.svg"
                                        alt={t("Logo")}
                                        className="w-full! h-full!"
                                        style={referenceStyles.s1100a320a2}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="ticker-item shrink-0! relative!"
                            aria-hidden="false"
                            aria-posinset={2}
                            aria-setsize={3}
                            style={referenceStyles.se800f65d54}
                          >
                            <div className="ssr-variant hidden-1fs2pis">
                              <div className="framer-17ssh5t-container">
                                <div
                                  className="framer-6Rpsi framer-16xbkmg framer-v-16xbkmg"
                                  data-framer-name="Variant 1"
                                  style={referenceStyles.sc8a32dec87}
                                >
                                  <div className="framer-1un4i5a">
                                    <div
                                      data-framer-background-image-wrapper="true"
                                      style={referenceStyles.s8a54025f8d}
                                    >
                                      <img
                                        decoding="async"
                                        loading="lazy"
                                        width="57"
                                        height="20"
                                        src="/assets/0b58929227e7d388.svg"
                                        alt={t("Logo")}
                                        className="w-full! h-full!"
                                        style={referenceStyles.s1100a320a2}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ssr-variant hidden-1bcn26v hidden-72rtr7">
                              <div className="framer-17ssh5t-container">
                                <div
                                  className="framer-6Rpsi framer-16xbkmg framer-v-16xbkmg"
                                  data-framer-name="Variant 1"
                                  style={referenceStyles.sc8a32dec87}
                                >
                                  <div className="framer-1un4i5a">
                                    <div
                                      data-framer-background-image-wrapper="true"
                                      style={referenceStyles.s8a54025f8d}
                                    >
                                      <img
                                        decoding="async"
                                        width="57"
                                        height="20"
                                        src="/assets/0b58929227e7d388.svg"
                                        alt={t("Logo")}
                                        className="w-full! h-full!"
                                        style={referenceStyles.s1100a320a2}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="ticker-item shrink-0! relative!"
                            aria-hidden="false"
                            aria-posinset={3}
                            aria-setsize={3}
                            style={referenceStyles.se800f65d54}
                          >
                            <div className="ssr-variant hidden-1fs2pis">
                              <div className="framer-zedek3-container">
                                <div
                                  className="framer-6Rpsi framer-16xbkmg framer-v-16xbkmg"
                                  data-framer-name="Variant 1"
                                  style={referenceStyles.sc8a32dec87}
                                >
                                  <div className="framer-1un4i5a">
                                    <div
                                      data-framer-background-image-wrapper="true"
                                      style={referenceStyles.s8a54025f8d}
                                    >
                                      <img
                                        decoding="async"
                                        loading="lazy"
                                        width="63"
                                        height="20"
                                        src="/assets/87d2b5ddf0fb33fc.svg"
                                        alt={t("Logo")}
                                        className="w-full! h-full!"
                                        style={referenceStyles.s1100a320a2}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ssr-variant hidden-1bcn26v hidden-72rtr7">
                              <div className="framer-zedek3-container">
                                <div
                                  className="framer-6Rpsi framer-16xbkmg framer-v-16xbkmg"
                                  data-framer-name="Variant 1"
                                  style={referenceStyles.sc8a32dec87}
                                >
                                  <div className="framer-1un4i5a">
                                    <div
                                      data-framer-background-image-wrapper="true"
                                      style={referenceStyles.s8a54025f8d}
                                    >
                                      <img
                                        decoding="async"
                                        width="63"
                                        height="20"
                                        src="/assets/87d2b5ddf0fb33fc.svg"
                                        alt={t("Logo")}
                                        className="w-full! h-full!"
                                        style={referenceStyles.s1100a320a2}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </Reveal>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="ssr-variant">
                    <div className="framer-1anf1up-container">
                      <Link
                        className="framer-obWCA framer-9qjuV framer-Bq5uF framer-18sfddm framer-v-1d5fd42 framer-1fsrsxu w-full!"
                        data-border="true"
                        data-framer-name="V5"
                        href={href("/contact")}
                        style={referenceStyles.s559429094b}
                      >
                        <div
                          className="framer-14jkp0r"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s143c03551f}
                        >
                          <p
                            className="framer-text framer-styles-preset-1qlwfog"
                            data-styles-preset="gP9Cr14vr"
                            dir="auto"
                            style={referenceStyles.sea361c3b28}
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
                          style={referenceStyles.s51915ca83d}
                        >
                          <svg
                            className="framer-VdeRv framer-7wq510"
                            role="presentation"
                            viewBox="0 0 24 24"
                            style={referenceStyles.se7fe9d8969}
                          >
                            <use href="#2430009286"></use>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant">
                  <div className="framer-163zuzk-container">
                    <div
                      className="framer-p41Xx framer-1w0r13z framer-v-1w0r13z w-full!"
                      data-framer-name="Variant 1"
                    >
                      <div className="framer-160rk2v-container">
                        <Carousel
                          className="framer-slideshow framer-slideshow-axis-x w-full! h-full!"
                          style={referenceStyles.sd174679be1}
                          kind="stats"
                          items={[
                            <Fragment key="slide-0">
                              <div
                                className="framer-1ihfoza-container shrink-0! w-full! h-full!"
                                data-framer-name="1"
                                style={referenceStyles.s5e042c7902}
                              >
                                <div
                                  className="framer-LWEpH framer-P2lQE framer-YUW4K framer-9qjuV framer-1pnhhzc framer-v-1pnhhzc w-full!"
                                  data-framer-name="Variant 1"
                                  data-highlight="true"
                                >
                                  <div
                                    className="framer-gccwt2"
                                    style={referenceStyles.sbc989dc343}
                                  >
                                    <div
                                      data-framer-background-image-wrapper="true"
                                      style={referenceStyles.s8a54025f8d}
                                    >
                                      <img
                                        decoding="async"
                                        width="1500"
                                        height="1548"
                                        sizes="(min-width: 1200px) 275px, (max-width: 767.98px) 275px, (min-width: 768px) and (max-width: 1199.98px) 275px"
                                        srcSet="/assets/e5258974e6ea202c.png 992w, /assets/ace642dd096b1092.png 1500w"
                                        src="/assets/ace642dd096b1092.png"
                                        alt={t("Image")}
                                        className="w-full! h-full!"
                                        style={referenceStyles.s258149b79d}
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="framer-h8iz2h"
                                    data-framer-name="Title & Line"
                                  >
                                    <div
                                      className="framer-anw2zl"
                                      data-framer-name="Text & Date"
                                    >
                                      <div
                                        className="framer-14212e6"
                                        data-framer-component-type="RichTextContainer"
                                        style={referenceStyles.s143c03551f}
                                      >
                                        <p
                                          className="framer-text framer-styles-preset-rx12qp"
                                          data-styles-preset="EzakxyTlE"
                                          dir="auto"
                                          style={referenceStyles.se8682f4ed5}
                                        >
                                          {t("Client Satisfaction")}
                                        </p>
                                      </div>
                                      <div
                                        className="framer-17iun0t"
                                        data-framer-component-type="RichTextContainer"
                                        style={referenceStyles.s3a05f9f9c1}
                                      >
                                        <p
                                          className="framer-text framer-styles-preset-woy26o"
                                          data-styles-preset="QSDP86qs3"
                                          dir="auto"
                                          style={referenceStyles.s833ee3534c}
                                        >
                                          {t("01/04")}
                                        </p>
                                      </div>
                                    </div>
                                    <div
                                      className="framer-3ww8vq"
                                      data-framer-name="Lines"
                                    >
                                      <div className="framer-iy1zh4-container">
                                        <div
                                          className="framer-cc7aC framer-1hypkx9 framer-v-148tm3k h-full! w-full!"
                                          data-framer-name="Variant 2"
                                          data-highlight="true"
                                          style={referenceStyles.s6040a1963b}
                                        >
                                          <div className="framer-ZO72C framer-c0whpm"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="framer-uk77fa"
                                    data-framer-name="Persecnt & Details"
                                  >
                                    <div className="framer-rp6zzv-container">
                                      <Counter
                                        style={referenceStyles.scb4132a50d}
                                        value={98}
                                        suffix="%"
                                      />
                                      <Counter
                                        style={referenceStyles.sb98892aec5}
                                        value={98}
                                        suffix="%"
                                      />
                                    </div>
                                    <div
                                      className="framer-8m6tg"
                                      data-framer-component-type="RichTextContainer"
                                      style={referenceStyles.s3a05f9f9c1}
                                    >
                                      <p
                                        className="framer-text framer-styles-preset-12928c1"
                                        data-styles-preset="V0V25Na8R"
                                        dir="auto"
                                        style={referenceStyles.s833ee3534c}
                                      >
                                        {t(
                                          "Exceptional results backed by partnerships.",
                                        )}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Fragment>,
                            <Fragment key="slide-1">
                              <div
                                className="framer-1kameha-container shrink-0! w-full! h-full!"
                                data-framer-name="2"
                                style={referenceStyles.s5e042c7902}
                              >
                                <div
                                  className="framer-LWEpH framer-P2lQE framer-YUW4K framer-9qjuV framer-1pnhhzc framer-v-1pnhhzc w-full!"
                                  data-framer-name="Variant 1"
                                  data-highlight="true"
                                >
                                  <div
                                    className="framer-gccwt2"
                                    style={referenceStyles.sbc989dc343}
                                  >
                                    <div
                                      data-framer-background-image-wrapper="true"
                                      style={referenceStyles.s8a54025f8d}
                                    >
                                      <img
                                        decoding="async"
                                        width="1100"
                                        height="1088"
                                        sizes="(min-width: 1200px) 275px, (max-width: 767.98px) 275px, (min-width: 768px) and (max-width: 1199.98px) 275px"
                                        srcSet="/assets/df4447a86e0fa458.png 512w, /assets/d961550afe05945e.png 1024w, /assets/6330c7ffa9690823.png 1100w"
                                        src="/assets/6330c7ffa9690823.png"
                                        alt={t("Image")}
                                        className="w-full! h-full!"
                                        style={referenceStyles.s258149b79d}
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="framer-h8iz2h"
                                    data-framer-name="Title & Line"
                                  >
                                    <div
                                      className="framer-anw2zl"
                                      data-framer-name="Text & Date"
                                    >
                                      <div
                                        className="framer-14212e6"
                                        data-framer-component-type="RichTextContainer"
                                        style={referenceStyles.s143c03551f}
                                      >
                                        <p
                                          className="framer-text framer-styles-preset-rx12qp"
                                          data-styles-preset="EzakxyTlE"
                                          dir="auto"
                                          style={referenceStyles.se8682f4ed5}
                                        >
                                          {t("Projects Delivered")}
                                        </p>
                                      </div>
                                      <div
                                        className="framer-17iun0t"
                                        data-framer-component-type="RichTextContainer"
                                        style={referenceStyles.s3a05f9f9c1}
                                      >
                                        <p
                                          className="framer-text framer-styles-preset-woy26o"
                                          data-styles-preset="QSDP86qs3"
                                          dir="auto"
                                          style={referenceStyles.s833ee3534c}
                                        >
                                          {t("02/04")}
                                        </p>
                                      </div>
                                    </div>
                                    <div
                                      className="framer-3ww8vq"
                                      data-framer-name="Lines"
                                    >
                                      <div className="framer-iy1zh4-container">
                                        <div
                                          className="framer-cc7aC framer-1hypkx9 framer-v-148tm3k h-full! w-full!"
                                          data-framer-name="Variant 2"
                                          data-highlight="true"
                                          style={referenceStyles.s6040a1963b}
                                        >
                                          <div className="framer-ZO72C framer-c0whpm"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="framer-uk77fa"
                                    data-framer-name="Persecnt & Details"
                                  >
                                    <div className="framer-rp6zzv-container">
                                      <Counter
                                        style={referenceStyles.scb4132a50d}
                                        value={150}
                                        suffix="+"
                                      />
                                      <Counter
                                        style={referenceStyles.sb98892aec5}
                                        value={150}
                                        suffix="+"
                                      />
                                    </div>
                                    <div
                                      className="framer-8m6tg"
                                      data-framer-component-type="RichTextContainer"
                                      style={referenceStyles.s3a05f9f9c1}
                                    >
                                      <p
                                        className="framer-text framer-styles-preset-12928c1"
                                        data-styles-preset="V0V25Na8R"
                                        dir="auto"
                                        style={referenceStyles.s833ee3534c}
                                      >
                                        {t(
                                          "Delivering premium websites for brands.",
                                        )}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Fragment>,
                            <Fragment key="slide-2">
                              <div
                                className="framer-op46qi-container shrink-0! w-full! h-full!"
                                data-framer-name="3"
                                style={referenceStyles.s5e042c7902}
                              >
                                <div
                                  className="framer-LWEpH framer-P2lQE framer-YUW4K framer-9qjuV framer-1pnhhzc framer-v-1pnhhzc w-full!"
                                  data-framer-name="Variant 1"
                                  data-highlight="true"
                                >
                                  <div
                                    className="framer-gccwt2"
                                    style={referenceStyles.sbc989dc343}
                                  >
                                    <div
                                      data-framer-background-image-wrapper="true"
                                      style={referenceStyles.s8a54025f8d}
                                    >
                                      <img
                                        decoding="async"
                                        width="1100"
                                        height="1088"
                                        sizes="(min-width: 1200px) 275px, (max-width: 767.98px) 275px, (min-width: 768px) and (max-width: 1199.98px) 275px"
                                        srcSet="/assets/300bf60fd3dae872.png 512w, /assets/e0306ba92ce57bea.png 1024w, /assets/836c8c6ebc81ac8b.png 1100w"
                                        src="/assets/836c8c6ebc81ac8b.png"
                                        alt={t("Image")}
                                        className="w-full! h-full!"
                                        style={referenceStyles.s258149b79d}
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="framer-h8iz2h"
                                    data-framer-name="Title & Line"
                                  >
                                    <div
                                      className="framer-anw2zl"
                                      data-framer-name="Text & Date"
                                    >
                                      <div
                                        className="framer-14212e6"
                                        data-framer-component-type="RichTextContainer"
                                        style={referenceStyles.s143c03551f}
                                      >
                                        <p
                                          className="framer-text framer-styles-preset-rx12qp"
                                          data-styles-preset="EzakxyTlE"
                                          dir="auto"
                                          style={referenceStyles.se8682f4ed5}
                                        >
                                          {t("Countries Reached")}
                                        </p>
                                      </div>
                                      <div
                                        className="framer-17iun0t"
                                        data-framer-component-type="RichTextContainer"
                                        style={referenceStyles.s3a05f9f9c1}
                                      >
                                        <p
                                          className="framer-text framer-styles-preset-woy26o"
                                          data-styles-preset="QSDP86qs3"
                                          dir="auto"
                                          style={referenceStyles.s833ee3534c}
                                        >
                                          {t("03/04")}
                                        </p>
                                      </div>
                                    </div>
                                    <div
                                      className="framer-3ww8vq"
                                      data-framer-name="Lines"
                                    >
                                      <div className="framer-iy1zh4-container">
                                        <div
                                          className="framer-cc7aC framer-1hypkx9 framer-v-148tm3k h-full! w-full!"
                                          data-framer-name="Variant 2"
                                          data-highlight="true"
                                          style={referenceStyles.s6040a1963b}
                                        >
                                          <div className="framer-ZO72C framer-c0whpm"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="framer-uk77fa"
                                    data-framer-name="Persecnt & Details"
                                  >
                                    <div className="framer-rp6zzv-container">
                                      <Counter
                                        style={referenceStyles.scb4132a50d}
                                        value={12}
                                        suffix="+"
                                      />
                                      <Counter
                                        style={referenceStyles.sb98892aec5}
                                        value={12}
                                        suffix="+"
                                      />
                                    </div>
                                    <div
                                      className="framer-8m6tg"
                                      data-framer-component-type="RichTextContainer"
                                      style={referenceStyles.s3a05f9f9c1}
                                    >
                                      <p
                                        className="framer-text framer-styles-preset-12928c1"
                                        data-styles-preset="V0V25Na8R"
                                        dir="auto"
                                        style={referenceStyles.s833ee3534c}
                                      >
                                        {t(
                                          "Supporting ambitious brands across markets.",
                                        )}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Fragment>,
                            <Fragment key="slide-3">
                              <div
                                className="framer-1ya5j6e-container shrink-0! w-full! h-full!"
                                data-framer-name="4"
                                style={referenceStyles.s5e042c7902}
                              >
                                <div
                                  className="framer-LWEpH framer-P2lQE framer-YUW4K framer-9qjuV framer-1pnhhzc framer-v-1pnhhzc w-full!"
                                  data-framer-name="Variant 1"
                                  data-highlight="true"
                                >
                                  <div
                                    className="framer-gccwt2"
                                    style={referenceStyles.sbc989dc343}
                                  >
                                    <div
                                      data-framer-background-image-wrapper="true"
                                      style={referenceStyles.s8a54025f8d}
                                    >
                                      <img
                                        decoding="async"
                                        width="1100"
                                        height="1088"
                                        sizes="(min-width: 1200px) 275px, (max-width: 767.98px) 275px, (min-width: 768px) and (max-width: 1199.98px) 275px"
                                        srcSet="/assets/c4842f88a126fa71.png 512w, /assets/f8f60ddcc2f7a2c2.png 1024w, /assets/c0a97144289e39bf.png 1100w"
                                        src="/assets/c0a97144289e39bf.png"
                                        alt={t("Image")}
                                        className="w-full! h-full!"
                                        style={referenceStyles.s258149b79d}
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="framer-h8iz2h"
                                    data-framer-name="Title & Line"
                                  >
                                    <div
                                      className="framer-anw2zl"
                                      data-framer-name="Text & Date"
                                    >
                                      <div
                                        className="framer-14212e6"
                                        data-framer-component-type="RichTextContainer"
                                        style={referenceStyles.s143c03551f}
                                      >
                                        <p
                                          className="framer-text framer-styles-preset-rx12qp"
                                          data-styles-preset="EzakxyTlE"
                                          dir="auto"
                                          style={referenceStyles.se8682f4ed5}
                                        >
                                          {t("Years of Experience")}
                                        </p>
                                      </div>
                                      <div
                                        className="framer-17iun0t"
                                        data-framer-component-type="RichTextContainer"
                                        style={referenceStyles.s3a05f9f9c1}
                                      >
                                        <p
                                          className="framer-text framer-styles-preset-woy26o"
                                          data-styles-preset="QSDP86qs3"
                                          dir="auto"
                                          style={referenceStyles.s833ee3534c}
                                        >
                                          {t("04/04")}
                                        </p>
                                      </div>
                                    </div>
                                    <div
                                      className="framer-3ww8vq"
                                      data-framer-name="Lines"
                                    >
                                      <div className="framer-iy1zh4-container">
                                        <div
                                          className="framer-cc7aC framer-1hypkx9 framer-v-148tm3k h-full! w-full!"
                                          data-framer-name="Variant 2"
                                          data-highlight="true"
                                          style={referenceStyles.s6040a1963b}
                                        >
                                          <div className="framer-ZO72C framer-c0whpm"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="framer-uk77fa"
                                    data-framer-name="Persecnt & Details"
                                  >
                                    <div className="framer-rp6zzv-container">
                                      <Counter
                                        style={referenceStyles.scb4132a50d}
                                        value={6}
                                        suffix="+"
                                      />
                                      <Counter
                                        style={referenceStyles.sb98892aec5}
                                        value={6}
                                        suffix="+"
                                      />
                                    </div>
                                    <div
                                      className="framer-8m6tg"
                                      data-framer-component-type="RichTextContainer"
                                      style={referenceStyles.s3a05f9f9c1}
                                    >
                                      <p
                                        className="framer-text framer-styles-preset-12928c1"
                                        data-styles-preset="V0V25Na8R"
                                        dir="auto"
                                        style={referenceStyles.s833ee3534c}
                                      >
                                        {t(
                                          "Creating thoughtful digital experiences with precision.",
                                        )}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Fragment>,
                          ]}
                        />
                      </div>
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
