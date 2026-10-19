import { getTranslations } from "@/lib/i18n-server";
import Link from "next/link";
import { Reveal, SplitText } from "@/components/Motion";
import { ProcessSection } from "@/components/ProcessSection";
import { referenceStyles } from "@/styles/reference-styles";
export async function HomeProcessSection() {
  const { t, locale, href } = await getTranslations();
  return (
    <ProcessSection
      className="framer-nc16a8"
      data-framer-name="Process Section"
      id="Process Section"
    >
      <div className="ssr-variant">
        <div className="framer-u10ewl">
          <div
            data-framer-background-image-wrapper="true"
            style={referenceStyles.s8a54025f8d}
          >
            <img
              decoding="async"
              width="5289"
              height="1339"
              sizes="(min-width: 1200px) 100vw, (max-width: 767.98px) 100vw, (min-width: 768px) and (max-width: 1199.98px) 100vw"
              srcSet="/assets/d94001e8c47fd2b7.png 512w, /assets/5330a8808a582a6b.png 1024w, /assets/2789b4303ae40187.png 2048w, /assets/2c2b02c2a93c3f31.png 4096w, /assets/430cd16262d906e5.png 5289w"
              src="/assets/430cd16262d906e5.png"
              alt=""
              className="w-full! h-full!"
              style={referenceStyles.s1100a320a2}
            />
          </div>
        </div>
      </div>
      <div className="framer-1k2skyl" data-framer-name="Container">
        <div className="framer-dm4dxe" data-framer-name="Content">
          <div className="framer-1jo4ukt" data-framer-name="Sticky">
            <Reveal
              className="framer-5vpldf"
              data-framer-name="Title & Button"
              style={referenceStyles.s5916c9ffdd}
              as="div"
              from="translateY(200px)"
            >
              <div className="framer-sw5qlg" data-framer-name="Tag & Title">
                <div className="ssr-variant">
                  <div className="framer-1yki4yl-container">
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
                          {t("PROCESS")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="framer-1s0jpir-container"
                  data-code-component-plugin-id="84d4c1"
                >
                  <div className="ssr-variant hidden-1bcn26v hidden-1fs2pis">
                    <SplitText
                      className="w-full!"
                      style={referenceStyles.s3f28666393}
                      as="div"
                      scrollLinked={true}
                      localizedText={
                        locale === "fa"
                          ? t(
                              "Creating digital experiences that help ambitious brands grow, connect, and stand apart.",
                            )
                          : undefined
                      }
                    >
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"C"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"i"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"g"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s4c7dd41f2b}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"d"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"i"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"g"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"i"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"l"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s4c7dd41f2b}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"x"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"p"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"i"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"c"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"s"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s4c7dd41f2b}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"h"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s4c7dd41f2b}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"h"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"l"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"p"}</span>
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
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s4c7dd41f2b}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"g"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"o"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"w"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{","}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s4c7dd41f2b}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"c"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"o"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"c"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{","}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s4c7dd41f2b}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"d"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s4c7dd41f2b}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"s"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"d"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s4c7dd41f2b}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"p"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"."}</span>
                      </span>
                    </SplitText>
                  </div>
                  <div className="ssr-variant hidden-72rtr7 hidden-1fs2pis">
                    <SplitText
                      className="w-full!"
                      style={referenceStyles.s9f2ef076de}
                      as="div"
                      scrollLinked={true}
                      localizedText={
                        locale === "fa"
                          ? t(
                              "Creating digital experiences that help ambitious brands grow, connect, and stand apart.",
                            )
                          : undefined
                      }
                    >
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"C"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"i"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"g"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s4c7dd41f2b}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"d"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"i"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"g"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"i"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"l"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s4c7dd41f2b}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"x"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"p"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"i"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"c"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"s"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s4c7dd41f2b}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"h"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s4c7dd41f2b}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"h"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"l"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"p"}</span>
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
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s4c7dd41f2b}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"g"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"o"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"w"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{","}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s4c7dd41f2b}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"c"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"o"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"c"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{","}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s4c7dd41f2b}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"d"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s4c7dd41f2b}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"s"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"d"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s4c7dd41f2b}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"p"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"."}</span>
                      </span>
                    </SplitText>
                  </div>
                  <div className="ssr-variant hidden-1bcn26v hidden-72rtr7">
                    <SplitText
                      className="w-full!"
                      style={referenceStyles.s1912e89047}
                      as="div"
                      scrollLinked={true}
                      localizedText={
                        locale === "fa"
                          ? t(
                              "Creating digital experiences that help ambitious brands grow, connect, and stand apart.",
                            )
                          : undefined
                      }
                    >
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"C"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"i"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"g"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s4c7dd41f2b}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"d"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"i"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"g"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"i"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"l"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s4c7dd41f2b}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"x"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"p"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"i"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"c"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"s"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s4c7dd41f2b}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"h"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s4c7dd41f2b}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"h"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"l"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"p"}</span>
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
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s4c7dd41f2b}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"g"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"o"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"w"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{","}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s4c7dd41f2b}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"c"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"o"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"e"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"c"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{","}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s4c7dd41f2b}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"d"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s4c7dd41f2b}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"s"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"n"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"d"}</span>
                      </span>
                      <span style={referenceStyles.s22ed7e0551}>
                        <span style={referenceStyles.s4c7dd41f2b}> </span>
                      </span>
                      <span style={referenceStyles.se34a5ceebc}>
                        <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"p"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"a"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"r"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"t"}</span>
                        <span style={referenceStyles.s4c7dd41f2b}>{"."}</span>
                      </span>
                    </SplitText>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div className="framer-q93s52-container">
                  <Link
                    className="framer-obWCA framer-9qjuV framer-Bq5uF framer-18sfddm framer-v-ymklat framer-1fsrsxu"
                    data-border="true"
                    data-framer-name="Variant 4"
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
                        style={referenceStyles.se8682f4ed5}
                      >
                        {t("Contact Us")}
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
            </Reveal>
            <Reveal
              className="framer-1j0zs3p"
              data-framer-name="Card Wrapper"
              style={referenceStyles.s5916c9ffdd}
              as="div"
              from="translateY(200px)"
            >
              <div className="ssr-variant hidden-1bcn26v hidden-1fs2pis">
                <div
                  className="framer-1sadnpo-container"
                  style={referenceStyles.sdcc09c7e0d}
                >
                  <div
                    className="framer-kyd25 framer-ge77Z framer-9qjuV framer-10tnql framer-v-10tnql"
                    data-framer-name="Variant 1"
                    style={referenceStyles.s4b1e815eaa}
                  >
                    <div className="framer-cmf096">
                      <div
                        data-framer-background-image-wrapper="true"
                        style={referenceStyles.s8a54025f8d}
                      >
                        <img
                          decoding="async"
                          loading="lazy"
                          width="192"
                          height="192"
                          src="/assets/69872f1a957155d3.png"
                          alt={t("Icon")}
                          className="w-full! h-full!"
                          style={referenceStyles.s1100a320a2}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-2kq18k"
                      data-framer-name="Title & Details"
                    >
                      <div
                        className="framer-spfz6a"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.sd1b612ddae}
                      >
                        <h5
                          className="framer-text framer-styles-preset-uttc6m"
                          data-styles-preset="lllneI4EJ"
                          dir="auto"
                          style={referenceStyles.sbb6a8b195d}
                        >
                          {t("01 — Discover")}
                        </h5>
                      </div>
                      <div
                        className="framer-138i8i5"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.sefbf82470d}
                      >
                        <p
                          className="framer-text framer-styles-preset-12928c1"
                          data-styles-preset="V0V25Na8R"
                          dir="auto"
                          style={referenceStyles.s0c39c3123b}
                        >
                          {t(
                            "Understanding your goals, audience, and opportunities before every decision.",
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-72rtr7 hidden-1fs2pis">
                <div
                  className="framer-1sadnpo-container"
                  style={referenceStyles.s042daa9eb6}
                >
                  <div
                    className="framer-kyd25 framer-ge77Z framer-9qjuV framer-10tnql framer-v-koyefg w-full!"
                    data-framer-name="Variant 5"
                    style={referenceStyles.s1f865e87e1}
                  >
                    <div className="framer-cmf096">
                      <div
                        data-framer-background-image-wrapper="true"
                        style={referenceStyles.s8a54025f8d}
                      >
                        <img
                          decoding="async"
                          loading="lazy"
                          width="192"
                          height="192"
                          src="/assets/69872f1a957155d3.png"
                          alt={t("Icon")}
                          className="w-full! h-full!"
                          style={referenceStyles.s1100a320a2}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-2kq18k"
                      data-framer-name="Title & Details"
                    >
                      <div
                        className="framer-spfz6a"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.sd1b612ddae}
                      >
                        <h5
                          className="framer-text framer-styles-preset-uttc6m"
                          data-styles-preset="lllneI4EJ"
                          dir="auto"
                          style={referenceStyles.sbb6a8b195d}
                        >
                          {t("01 — Discover")}
                        </h5>
                      </div>
                      <div
                        className="framer-138i8i5"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.sefbf82470d}
                      >
                        <p
                          className="framer-text framer-styles-preset-12928c1"
                          data-styles-preset="V0V25Na8R"
                          dir="auto"
                          style={referenceStyles.s0c39c3123b}
                        >
                          {t(
                            "Understanding your goals, audience, and opportunities before every decision.",
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-1bcn26v hidden-72rtr7">
                <div
                  className="framer-1sadnpo-container"
                  style={referenceStyles.s042daa9eb6}
                >
                  <div
                    className="framer-kyd25 framer-ge77Z framer-9qjuV framer-10tnql framer-v-10tnql"
                    data-framer-name="Variant 1"
                    style={referenceStyles.s4b1e815eaa}
                  >
                    <div className="framer-cmf096">
                      <div
                        data-framer-background-image-wrapper="true"
                        style={referenceStyles.s8a54025f8d}
                      >
                        <img
                          decoding="async"
                          width="192"
                          height="192"
                          src="/assets/69872f1a957155d3.png"
                          alt={t("Icon")}
                          className="w-full! h-full!"
                          style={referenceStyles.s1100a320a2}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-2kq18k"
                      data-framer-name="Title & Details"
                    >
                      <div
                        className="framer-spfz6a"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.sd1b612ddae}
                      >
                        <h5
                          className="framer-text framer-styles-preset-uttc6m"
                          data-styles-preset="lllneI4EJ"
                          dir="auto"
                          style={referenceStyles.sbb6a8b195d}
                        >
                          {t("01 — Discover")}
                        </h5>
                      </div>
                      <div
                        className="framer-138i8i5"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.sefbf82470d}
                      >
                        <p
                          className="framer-text framer-styles-preset-12928c1"
                          data-styles-preset="V0V25Na8R"
                          dir="auto"
                          style={referenceStyles.s0c39c3123b}
                        >
                          {t(
                            "Understanding your goals, audience, and opportunities before every decision.",
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-1bcn26v hidden-1fs2pis">
                <div
                  className="framer-12amyrw-container"
                  style={referenceStyles.s9432c0989a}
                >
                  <div
                    className="framer-kyd25 framer-ge77Z framer-9qjuV framer-10tnql framer-v-1tnxi83"
                    data-framer-name="Variant 2"
                    style={referenceStyles.s0088626c0b}
                  >
                    <div className="framer-cmf096">
                      <div
                        data-framer-background-image-wrapper="true"
                        style={referenceStyles.s8a54025f8d}
                      >
                        <img
                          decoding="async"
                          loading="lazy"
                          width="192"
                          height="192"
                          src="/assets/84733fda4a52228a.png"
                          alt={t("Icon")}
                          className="w-full! h-full!"
                          style={referenceStyles.s1100a320a2}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-2kq18k"
                      data-framer-name="Title & Details"
                    >
                      <div
                        className="framer-spfz6a"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.sa04f18bfa2}
                      >
                        <h5
                          className="framer-text framer-styles-preset-uttc6m"
                          data-styles-preset="lllneI4EJ"
                          dir="auto"
                          style={referenceStyles.s0c86264d05}
                        >
                          {t("02 — Design")}
                        </h5>
                      </div>
                      <div
                        className="framer-138i8i5"
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
                            "Crafting intuitive experiences that balance beauty, usability, and performance.",
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-72rtr7 hidden-1fs2pis">
                <div
                  className="framer-12amyrw-container"
                  style={referenceStyles.s042daa9eb6}
                >
                  <div
                    className="framer-kyd25 framer-ge77Z framer-9qjuV framer-10tnql framer-v-1qy738s w-full!"
                    data-framer-name="Variant 5"
                    style={referenceStyles.scacd1b083c}
                  >
                    <div className="framer-cmf096">
                      <div
                        data-framer-background-image-wrapper="true"
                        style={referenceStyles.s8a54025f8d}
                      >
                        <img
                          decoding="async"
                          loading="lazy"
                          width="192"
                          height="192"
                          src="/assets/84733fda4a52228a.png"
                          alt={t("Icon")}
                          className="w-full! h-full!"
                          style={referenceStyles.s1100a320a2}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-2kq18k"
                      data-framer-name="Title & Details"
                    >
                      <div
                        className="framer-spfz6a"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.sa04f18bfa2}
                      >
                        <h5
                          className="framer-text framer-styles-preset-uttc6m"
                          data-styles-preset="lllneI4EJ"
                          dir="auto"
                          style={referenceStyles.s0c86264d05}
                        >
                          {t("02 — Design")}
                        </h5>
                      </div>
                      <div
                        className="framer-138i8i5"
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
                            "Crafting intuitive experiences that balance beauty, usability, and performance.",
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-1bcn26v hidden-72rtr7">
                <div
                  className="framer-12amyrw-container"
                  style={referenceStyles.s042daa9eb6}
                >
                  <div
                    className="framer-kyd25 framer-ge77Z framer-9qjuV framer-10tnql framer-v-1tnxi83"
                    data-framer-name="Variant 2"
                    style={referenceStyles.s0088626c0b}
                  >
                    <div className="framer-cmf096">
                      <div
                        data-framer-background-image-wrapper="true"
                        style={referenceStyles.s8a54025f8d}
                      >
                        <img
                          decoding="async"
                          width="192"
                          height="192"
                          src="/assets/84733fda4a52228a.png"
                          alt={t("Icon")}
                          className="w-full! h-full!"
                          style={referenceStyles.s1100a320a2}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-2kq18k"
                      data-framer-name="Title & Details"
                    >
                      <div
                        className="framer-spfz6a"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.sa04f18bfa2}
                      >
                        <h5
                          className="framer-text framer-styles-preset-uttc6m"
                          data-styles-preset="lllneI4EJ"
                          dir="auto"
                          style={referenceStyles.s0c86264d05}
                        >
                          {t("02 — Design")}
                        </h5>
                      </div>
                      <div
                        className="framer-138i8i5"
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
                            "Crafting intuitive experiences that balance beauty, usability, and performance.",
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-1bcn26v hidden-1fs2pis">
                <div
                  className="framer-1itxpwx-container"
                  style={referenceStyles.s98af6ef072}
                >
                  <div
                    className="framer-kyd25 framer-ge77Z framer-9qjuV framer-10tnql framer-v-1y2daa1"
                    data-framer-name="Variant 3"
                    style={referenceStyles.s92892685fc}
                  >
                    <div className="framer-cmf096">
                      <div
                        data-framer-background-image-wrapper="true"
                        style={referenceStyles.s8a54025f8d}
                      >
                        <img
                          decoding="async"
                          loading="lazy"
                          width="192"
                          height="192"
                          src="/assets/51387f2546e8ab17.png"
                          alt={t("Icon")}
                          className="w-full! h-full!"
                          style={referenceStyles.s1100a320a2}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-2kq18k"
                      data-framer-name="Title & Details"
                    >
                      <div
                        className="framer-spfz6a"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.sd1b612ddae}
                      >
                        <h5
                          className="framer-text framer-styles-preset-uttc6m"
                          data-styles-preset="lllneI4EJ"
                          dir="auto"
                          style={referenceStyles.sbb6a8b195d}
                        >
                          {t("03 — Develop")}
                        </h5>
                      </div>
                      <div
                        className="framer-138i8i5"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.sefbf82470d}
                      >
                        <p
                          className="framer-text framer-styles-preset-12928c1"
                          data-styles-preset="V0V25Na8R"
                          dir="auto"
                          style={referenceStyles.s0c39c3123b}
                        >
                          {t(
                            "Building scalable no-code websites with precision, speed, and flexibility.",
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-72rtr7 hidden-1fs2pis">
                <div
                  className="framer-1itxpwx-container"
                  style={referenceStyles.s042daa9eb6}
                >
                  <div
                    className="framer-kyd25 framer-ge77Z framer-9qjuV framer-10tnql framer-v-koyefg w-full!"
                    data-framer-name="Variant 6"
                    style={referenceStyles.s1f865e87e1}
                  >
                    <div className="framer-cmf096">
                      <div
                        data-framer-background-image-wrapper="true"
                        style={referenceStyles.s8a54025f8d}
                      >
                        <img
                          decoding="async"
                          loading="lazy"
                          width="192"
                          height="192"
                          src="/assets/51387f2546e8ab17.png"
                          alt={t("Icon")}
                          className="w-full! h-full!"
                          style={referenceStyles.s1100a320a2}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-2kq18k"
                      data-framer-name="Title & Details"
                    >
                      <div
                        className="framer-spfz6a"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.sd1b612ddae}
                      >
                        <h5
                          className="framer-text framer-styles-preset-uttc6m"
                          data-styles-preset="lllneI4EJ"
                          dir="auto"
                          style={referenceStyles.sbb6a8b195d}
                        >
                          {t("03 — Develop")}
                        </h5>
                      </div>
                      <div
                        className="framer-138i8i5"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.sefbf82470d}
                      >
                        <p
                          className="framer-text framer-styles-preset-12928c1"
                          data-styles-preset="V0V25Na8R"
                          dir="auto"
                          style={referenceStyles.s0c39c3123b}
                        >
                          {t(
                            "Building scalable no-code websites with precision, speed, and flexibility.",
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-1bcn26v hidden-72rtr7">
                <div
                  className="framer-1itxpwx-container"
                  style={referenceStyles.s042daa9eb6}
                >
                  <div
                    className="framer-kyd25 framer-ge77Z framer-9qjuV framer-10tnql framer-v-1y2daa1"
                    data-framer-name="Variant 3"
                    style={referenceStyles.s92892685fc}
                  >
                    <div className="framer-cmf096">
                      <div
                        data-framer-background-image-wrapper="true"
                        style={referenceStyles.s8a54025f8d}
                      >
                        <img
                          decoding="async"
                          width="192"
                          height="192"
                          src="/assets/51387f2546e8ab17.png"
                          alt={t("Icon")}
                          className="w-full! h-full!"
                          style={referenceStyles.s1100a320a2}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-2kq18k"
                      data-framer-name="Title & Details"
                    >
                      <div
                        className="framer-spfz6a"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.sd1b612ddae}
                      >
                        <h5
                          className="framer-text framer-styles-preset-uttc6m"
                          data-styles-preset="lllneI4EJ"
                          dir="auto"
                          style={referenceStyles.sbb6a8b195d}
                        >
                          {t("03 — Develop")}
                        </h5>
                      </div>
                      <div
                        className="framer-138i8i5"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.sefbf82470d}
                      >
                        <p
                          className="framer-text framer-styles-preset-12928c1"
                          data-styles-preset="V0V25Na8R"
                          dir="auto"
                          style={referenceStyles.s0c39c3123b}
                        >
                          {t(
                            "Building scalable no-code websites with precision, speed, and flexibility.",
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-1bcn26v hidden-1fs2pis">
                <div
                  className="framer-1refysd-container"
                  style={referenceStyles.s8156ecfdec}
                >
                  <div
                    className="framer-kyd25 framer-ge77Z framer-9qjuV framer-10tnql framer-v-1utqbr4"
                    data-framer-name="Variant 4"
                    style={referenceStyles.s0088626c0b}
                  >
                    <div className="framer-cmf096">
                      <div
                        data-framer-background-image-wrapper="true"
                        style={referenceStyles.s8a54025f8d}
                      >
                        <img
                          decoding="async"
                          loading="lazy"
                          width="192"
                          height="192"
                          src="/assets/11e1d43b7ba9a78a.png"
                          alt={t("Icon")}
                          className="w-full! h-full!"
                          style={referenceStyles.s1100a320a2}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-2kq18k"
                      data-framer-name="Title & Details"
                    >
                      <div
                        className="framer-spfz6a"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.sa04f18bfa2}
                      >
                        <h5
                          className="framer-text framer-styles-preset-uttc6m"
                          data-styles-preset="lllneI4EJ"
                          dir="auto"
                          style={referenceStyles.s0c86264d05}
                        >
                          {t("04 — Launch")}
                        </h5>
                      </div>
                      <div
                        className="framer-138i8i5"
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
                            "Delivering a polished digital experience ready to grow your business.",
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-72rtr7 hidden-1fs2pis">
                <div
                  className="framer-1refysd-container"
                  style={referenceStyles.s042daa9eb6}
                >
                  <div
                    className="framer-kyd25 framer-ge77Z framer-9qjuV framer-10tnql framer-v-1qy738s w-full!"
                    data-framer-name="Variant 5"
                    style={referenceStyles.scacd1b083c}
                  >
                    <div className="framer-cmf096">
                      <div
                        data-framer-background-image-wrapper="true"
                        style={referenceStyles.s8a54025f8d}
                      >
                        <img
                          decoding="async"
                          loading="lazy"
                          width="192"
                          height="192"
                          src="/assets/11e1d43b7ba9a78a.png"
                          alt={t("Icon")}
                          className="w-full! h-full!"
                          style={referenceStyles.s1100a320a2}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-2kq18k"
                      data-framer-name="Title & Details"
                    >
                      <div
                        className="framer-spfz6a"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.sa04f18bfa2}
                      >
                        <h5
                          className="framer-text framer-styles-preset-uttc6m"
                          data-styles-preset="lllneI4EJ"
                          dir="auto"
                          style={referenceStyles.s0c86264d05}
                        >
                          {t("04 — Launch")}
                        </h5>
                      </div>
                      <div
                        className="framer-138i8i5"
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
                            "Delivering a polished digital experience ready to grow your business.",
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-1bcn26v hidden-72rtr7">
                <div
                  className="framer-1refysd-container"
                  style={referenceStyles.s042daa9eb6}
                >
                  <div
                    className="framer-kyd25 framer-ge77Z framer-9qjuV framer-10tnql framer-v-1utqbr4"
                    data-framer-name="Variant 4"
                    style={referenceStyles.s0088626c0b}
                  >
                    <div className="framer-cmf096">
                      <div
                        data-framer-background-image-wrapper="true"
                        style={referenceStyles.s8a54025f8d}
                      >
                        <img
                          decoding="async"
                          width="192"
                          height="192"
                          src="/assets/11e1d43b7ba9a78a.png"
                          alt={t("Icon")}
                          className="w-full! h-full!"
                          style={referenceStyles.s1100a320a2}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-2kq18k"
                      data-framer-name="Title & Details"
                    >
                      <div
                        className="framer-spfz6a"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.sa04f18bfa2}
                      >
                        <h5
                          className="framer-text framer-styles-preset-uttc6m"
                          data-styles-preset="lllneI4EJ"
                          dir="auto"
                          style={referenceStyles.s0c86264d05}
                        >
                          {t("04 — Launch")}
                        </h5>
                      </div>
                      <div
                        className="framer-138i8i5"
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
                            "Delivering a polished digital experience ready to grow your business.",
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          <div
            className="framer-scmzq hidden-1fs2pis hidden-1bcn26v"
            data-framer-name="Feature - One"
            id="feature-one"
          ></div>
          <div
            className="framer-11nf8hc hidden-1fs2pis hidden-1bcn26v"
            data-framer-name="Feature - Two"
            id="feature-two"
          ></div>
          <div
            className="framer-1xgskgm hidden-1fs2pis hidden-1bcn26v"
            data-framer-name="Feature - Three"
            id="feature-three"
          ></div>
          <div
            className="framer-w8udll hidden-1fs2pis hidden-1bcn26v"
            data-framer-name="Feature - Four"
            id="feature-four"
          ></div>
        </div>
      </div>
    </ProcessSection>
  );
}
