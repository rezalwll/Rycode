import { getTranslations } from "@/lib/i18n-server";
import { Fragment } from "react";
import Link from "next/link";
import { Reveal, SplitText, MediaVideo, Carousel } from "@/components/Motion";
import { referenceStyles } from "@/styles/reference-styles";
export async function HomeHeroSection() {
  const { t, href } = await getTranslations();
  return (
    <section
      className="framer-15gz4dg"
      data-framer-name="Hero Section"
      style={referenceStyles.s3bfbf70438}
    >
      <div className="framer-1iqbyd4-container">
        <MediaVideo
          src="/brand/hero-desktop.mp4"
          mobileSrc="/brand/hero-mobile.mp4"
          poster="/brand/hero-poster.webp"
          loop={true}
          preload="none"
          muted={true}
          playsInline={true}
          className="w-full! h-full!"
          style={referenceStyles.s475179ee1d}
        ></MediaVideo>
      </div>
      <div className="framer-1onjh2w" data-framer-name="Overlay"></div>
      <div className="framer-1x90tsp" data-framer-name="Container">
        <div className="framer-1b9iyr7" data-framer-name="Content">
          <div className="framer-z595cn" data-framer-name="Tag & Title">
            <div className="ssr-variant">
              <Reveal
                className="framer-dizg75-container"
                data-framer-appear-id="dizg75"
                style={referenceStyles.s753530771e}
                as="div"
                from="translateY(300px)"
              >
                <div
                  className="framer-XXyqM framer-UO2GW framer-P2lQE framer-1fz5pen framer-v-1sut3or w-full!"
                  data-framer-name="Hero Section Tag"
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
                      {t("Helping ambitious brands launch faster")}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="ssr-variant hidden-1bcn26v">
              <Reveal
                className="framer-1nayp60"
                data-framer-appear-id="1nayp60"
                data-framer-component-type="RichTextContainer"
                style={referenceStyles.s753530771e}
                as="div"
                from="translateY(300px)"
              >
                <SplitText
                  className="framer-text framer-styles-preset-843oen brand-wordmark"
                  data-styles-preset="QzS5d9Y4F"
                  dir="auto"
                  style={referenceStyles.s5a374ddac4}
                  as="h1"
                  scrollLinked={false}
                >
                  <span style={referenceStyles.sa20496458d}>
                    <span
                      className="brand-accent"
                      style={referenceStyles.s1b9115ae2a}
                    >
                      {"R"}
                    </span>
                    <span
                      className="brand-accent"
                      style={referenceStyles.s1b9115ae2a}
                    >
                      {"Y"}
                    </span>
                    <span style={referenceStyles.s1b9115ae2a}>{"C"}</span>
                    <span style={referenceStyles.s1b9115ae2a}>{"O"}</span>
                    <span style={referenceStyles.s1b9115ae2a}>{"D"}</span>
                    <span style={referenceStyles.s1b9115ae2a}>{"E"}</span>
                  </span>{" "}
                  <span
                    className="brand-studio"
                    style={referenceStyles.sa20496458d}
                  >
                    <span style={referenceStyles.s1b9115ae2a}>{"S"}</span>
                    <span style={referenceStyles.s1b9115ae2a}>{"T"}</span>
                    <span style={referenceStyles.s1b9115ae2a}>{"U"}</span>
                    <span style={referenceStyles.s1b9115ae2a}>{"D"}</span>
                    <span style={referenceStyles.s1b9115ae2a}>{"I"}</span>
                    <span style={referenceStyles.s1b9115ae2a}>{"O"}</span>
                  </span>
                </SplitText>
              </Reveal>
            </div>
            <div className="ssr-variant hidden-72rtr7 hidden-1fs2pis">
              <Reveal
                className="framer-1nayp60"
                data-framer-appear-id="1nayp60"
                data-framer-component-type="RichTextContainer"
                style={referenceStyles.s753530771e}
                as="div"
                from="translateY(300px)"
              >
                <SplitText
                  className="framer-text framer-styles-preset-843oen brand-wordmark"
                  data-styles-preset="QzS5d9Y4F"
                  dir="auto"
                  style={referenceStyles.s516259b142}
                  as="h1"
                  scrollLinked={false}
                >
                  <span style={referenceStyles.sa20496458d}>
                    <span
                      className="brand-accent"
                      style={referenceStyles.s1b9115ae2a}
                    >
                      {"R"}
                    </span>
                    <span
                      className="brand-accent"
                      style={referenceStyles.s1b9115ae2a}
                    >
                      {"Y"}
                    </span>
                    <span style={referenceStyles.s1b9115ae2a}>{"C"}</span>
                    <span style={referenceStyles.s1b9115ae2a}>{"O"}</span>
                    <span style={referenceStyles.s1b9115ae2a}>{"D"}</span>
                    <span style={referenceStyles.s1b9115ae2a}>{"E"}</span>
                  </span>{" "}
                  <span
                    className="brand-studio"
                    style={referenceStyles.sa20496458d}
                  >
                    <span style={referenceStyles.s1b9115ae2a}>{"S"}</span>
                    <span style={referenceStyles.s1b9115ae2a}>{"T"}</span>
                    <span style={referenceStyles.s1b9115ae2a}>{"U"}</span>
                    <span style={referenceStyles.s1b9115ae2a}>{"D"}</span>
                    <span style={referenceStyles.s1b9115ae2a}>{"I"}</span>
                    <span style={referenceStyles.s1b9115ae2a}>{"O"}</span>
                  </span>
                </SplitText>
              </Reveal>
            </div>
          </div>
          <Reveal
            className="framer-1kvdpim"
            data-framer-appear-id="1kvdpim"
            data-framer-name="Description & Image"
            style={referenceStyles.s753530771e}
            as="div"
            from="translateY(300px)"
          >
            <div
              className="framer-1ev7bk0"
              data-framer-name="Description & Butoons"
            >
              <div className="ssr-variant hidden-1bcn26v">
                <div
                  className="framer-t6ds4o"
                  data-framer-component-type="RichTextContainer"
                  style={referenceStyles.se120e01975}
                >
                  <p
                    className="framer-text framer-styles-preset-egbnuh"
                    data-styles-preset="X1PtepQgO"
                    dir="auto"
                    style={referenceStyles.s0f3867a315}
                  >
                    {t(
                      "We build websites and experiences that help brands launch faster, grow smarter, and stand out with confidence.",
                    )}
                  </p>
                </div>
              </div>
              <div className="ssr-variant hidden-72rtr7 hidden-1fs2pis">
                <div
                  className="framer-t6ds4o"
                  data-framer-component-type="RichTextContainer"
                  style={referenceStyles.se120e01975}
                >
                  <p
                    className="framer-text framer-styles-preset-egbnuh"
                    data-styles-preset="X1PtepQgO"
                    dir="auto"
                    style={referenceStyles.s402bdbd007}
                  >
                    {t(
                      "We build websites and experiences that help brands launch faster, grow smarter, and stand out with confidence.",
                    )}
                  </p>
                </div>
              </div>
              <div className="framer-y4kxxa" data-framer-name="Buttons">
                <div className="ssr-variant">
                  <div className="framer-mhbme0-container">
                    <Link
                      className="framer-obWCA framer-9qjuV framer-Bq5uF framer-18sfddm framer-v-18sfddm framer-1fsrsxu"
                      data-border="true"
                      data-framer-name="Variant 1"
                      href={href("/work")}
                      style={referenceStyles.s64b4a2310d}
                    >
                      <div
                        className="framer-14jkp0r"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s143c03551f}
                      >
                        <p
                          className="framer-text framer-styles-preset-12928c1"
                          data-styles-preset="V0V25Na8R"
                          dir="auto"
                          style={referenceStyles.se8682f4ed5}
                        >
                          {t("Explore Projects")}
                        </p>
                      </div>
                      <div className="framer-1glyh7l">
                        <div
                          className="framer-1oado6a"
                          data-framer-name="Dot 01"
                          style={referenceStyles.s51915ca83d}
                        ></div>
                        <div
                          className="framer-d6q9x7"
                          data-framer-name="Dot 02"
                          style={referenceStyles.s0ee56a7b4b}
                        ></div>
                        <div
                          className="framer-qtebog"
                          data-framer-name="Dot 03"
                          style={referenceStyles.s0ee56a7b4b}
                        ></div>
                        <div
                          className="framer-tvyhl2"
                          data-framer-name="Dot 04"
                          style={referenceStyles.s0ee56a7b4b}
                        ></div>
                        <div
                          className="framer-1kar949"
                          data-framer-name="Dot 05"
                          style={referenceStyles.s0ee56a7b4b}
                        ></div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="ssr-variant">
                  <div className="framer-qi9l3f-container">
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
                          {t("Book a Call")}
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
              </div>
            </div>
            <div className="framer-kiadmp" data-framer-name="Image & Lines">
              <div className="ssr-variant hidden-1bcn26v">
                <div className="framer-fqr645-container">
                  <div
                    className="framer-aelYo framer-nj3cev framer-v-nj3cev w-full!"
                    data-framer-name="Variant 1"
                  >
                    <div className="framer-5q3muz-container">
                      <Carousel
                        className="framer-slideshow framer-slideshow-axis-x w-full! h-full!"
                        style={referenceStyles.sd174679be1}
                        kind="hero"
                        items={[
                          <Fragment key="slide-0">
                            <div
                              className="framer-1z0k0zx-container shrink-0! w-full! h-full!"
                              data-framer-name="1"
                              style={referenceStyles.s5e042c7902}
                            >
                              <div
                                className="framer-N5z0F framer-ge77Z framer-9qjuV framer-i8hajd framer-v-i8hajd w-full!"
                                data-framer-name="Variant 1"
                                data-highlight="true"
                              >
                                <div
                                  className="framer-ek7ktt"
                                  data-framer-name="Hero Slide Card"
                                >
                                  <div
                                    className="framer-11vewur"
                                    data-framer-name="Cards"
                                  >
                                    <div
                                      className="framer-1rrrte2"
                                      data-framer-name="Hero Slide Card"
                                      style={referenceStyles.s0dd1ff94d5}
                                    >
                                      <div
                                        className="framer-34mdxk"
                                        data-framer-name="Image"
                                        style={referenceStyles.s4b8ea8456d}
                                      >
                                        <div
                                          data-framer-background-image-wrapper="true"
                                          style={referenceStyles.s8a54025f8d}
                                        >
                                          <img
                                            decoding="async"
                                            width="1200"
                                            height="673"
                                            sizes="(min-width: 1200px) max((max(492px, 1px) - 16px) / 2, 1px), (max-width: 767.98px) max(max((min(max(min(100vw - 40px, 1120px), 1px), 492px) - 10px) / 2, 50px), 1px), (min-width: 768px) and (max-width: 1199.98px) max((max(492px, 1px) - 16px) / 2, 1px)"
                                            srcSet="/assets/0540f6a2c0215a67.png 512w, /assets/853506061054dbb7.png 1024w, /assets/4e5eb3a3b4dc15eb.png 1200w"
                                            src="/assets/4e5eb3a3b4dc15eb.png"
                                            alt={t("Image")}
                                            className="w-full! h-full!"
                                            style={referenceStyles.s258149b79d}
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className="framer-cyky41"
                                        data-framer-name="Layer"
                                        style={referenceStyles.s130823e52d}
                                      ></div>
                                    </div>
                                    <div
                                      className="framer-d2zfzd"
                                      data-framer-name="Hero Slide Card"
                                      style={referenceStyles.sb500798d55}
                                    >
                                      <div
                                        className="framer-1mth06y"
                                        data-framer-name="Image"
                                        style={referenceStyles.s4b8ea8456d}
                                      >
                                        <div
                                          data-framer-background-image-wrapper="true"
                                          style={referenceStyles.s8a54025f8d}
                                        >
                                          <img
                                            decoding="async"
                                            width="1200"
                                            height="740"
                                            sizes="(min-width: 1200px) max((max(492px, 1px) - 16px) / 2, 1px), (max-width: 767.98px) max(max((min(max(min(100vw - 40px, 1120px), 1px), 492px) - 10px) / 2, 50px), 1px), (min-width: 768px) and (max-width: 1199.98px) max((max(492px, 1px) - 16px) / 2, 1px)"
                                            srcSet="/assets/a61fe20e1a470b9e.png 512w, /assets/e9caac000ea7cf9d.png 1024w, /assets/17d9438e92d7a286.png 1200w"
                                            src="/assets/17d9438e92d7a286.png"
                                            alt={t("Image")}
                                            className="w-full! h-full!"
                                            style={referenceStyles.s258149b79d}
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className="framer-tcpzsa"
                                        data-framer-name="Layer"
                                        style={referenceStyles.s921e6a3845}
                                      ></div>
                                      <div
                                        className="framer-1wzo58o"
                                        data-framer-component-type="RichTextContainer"
                                        style={referenceStyles.sfa34f72f95}
                                      >
                                        <h5
                                          className="framer-text framer-styles-preset-uttc6m"
                                          data-styles-preset="lllneI4EJ"
                                          dir="auto"
                                          style={referenceStyles.s0c86264d05}
                                        >
                                          <>
                                            <span className="brand-accent">
                                              {t("RY")}
                                            </span>
                                            {"CODE "}
                                            <span className="brand-studio">
                                              STUDIO
                                            </span>
                                          </>
                                        </h5>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="framer-acy1tn"
                                    data-framer-name="Serial Number"
                                  >
                                    <div
                                      className="framer-h2d8lq"
                                      data-framer-component-type="RichTextContainer"
                                      style={referenceStyles.s427a885dce}
                                    >
                                      <p
                                        className="framer-text framer-styles-preset-12928c1"
                                        data-styles-preset="V0V25Na8R"
                                        dir="auto"
                                        style={referenceStyles.se8682f4ed5}
                                      >
                                        {t("0.1")}
                                      </p>
                                    </div>
                                    <div className="framer-rp0r5w-container">
                                      <div
                                        className="framer-cc7aC framer-1hypkx9 framer-v-148tm3k w-full!"
                                        data-framer-name="Variant 2"
                                        data-highlight="true"
                                        style={referenceStyles.s6040a1963b}
                                      >
                                        <div className="framer-ZO72C framer-c0whpm"></div>
                                      </div>
                                    </div>
                                    <div
                                      className="framer-xmlp7n"
                                      data-framer-component-type="RichTextContainer"
                                      style={referenceStyles.s427a885dce}
                                    >
                                      <p
                                        className="framer-text framer-styles-preset-12928c1"
                                        data-styles-preset="V0V25Na8R"
                                        dir="auto"
                                        style={referenceStyles.se8682f4ed5}
                                      >
                                        {t("0.2")}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Fragment>,
                          <Fragment key="slide-1">
                            <div
                              className="framer-1hf9n2g-container shrink-0! w-full! h-full!"
                              data-framer-name="2"
                              style={referenceStyles.s5e042c7902}
                            >
                              <div
                                className="framer-N5z0F framer-ge77Z framer-9qjuV framer-i8hajd framer-v-i8hajd w-full!"
                                data-framer-name="Variant 1"
                                data-highlight="true"
                              >
                                <div
                                  className="framer-ek7ktt"
                                  data-framer-name="Hero Slide Card"
                                >
                                  <div
                                    className="framer-11vewur"
                                    data-framer-name="Cards"
                                  >
                                    <div
                                      className="framer-1rrrte2"
                                      data-framer-name="Hero Slide Card"
                                      style={referenceStyles.s0dd1ff94d5}
                                    >
                                      <div
                                        className="framer-34mdxk"
                                        data-framer-name="Image"
                                        style={referenceStyles.s4b8ea8456d}
                                      >
                                        <div
                                          data-framer-background-image-wrapper="true"
                                          style={referenceStyles.s8a54025f8d}
                                        >
                                          <img
                                            decoding="async"
                                            width="1200"
                                            height="740"
                                            sizes="(min-width: 1200px) max((max(492px, 1px) - 16px) / 2, 1px), (max-width: 767.98px) max(max((min(max(min(100vw - 40px, 1120px), 1px), 492px) - 10px) / 2, 50px), 1px), (min-width: 768px) and (max-width: 1199.98px) max((max(492px, 1px) - 16px) / 2, 1px)"
                                            srcSet="/assets/a61fe20e1a470b9e.png 512w, /assets/e9caac000ea7cf9d.png 1024w, /assets/17d9438e92d7a286.png 1200w"
                                            src="/assets/17d9438e92d7a286.png"
                                            alt=""
                                            className="w-full! h-full!"
                                            style={referenceStyles.s258149b79d}
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className="framer-cyky41"
                                        data-framer-name="Layer"
                                        style={referenceStyles.s130823e52d}
                                      ></div>
                                      <div
                                        className="framer-1fxv5h9"
                                        data-framer-component-type="RichTextContainer"
                                        style={referenceStyles.sfa34f72f95}
                                      >
                                        <h5
                                          className="framer-text framer-styles-preset-uttc6m"
                                          data-styles-preset="lllneI4EJ"
                                          dir="auto"
                                          style={referenceStyles.s0c86264d05}
                                        >
                                          <>
                                            <span className="brand-accent">
                                              {t("RY")}
                                            </span>
                                            {"CODE "}
                                            <span className="brand-studio">
                                              STUDIO
                                            </span>
                                          </>
                                        </h5>
                                      </div>
                                    </div>
                                    <div
                                      className="framer-d2zfzd"
                                      data-framer-name="Hero Slide Card"
                                      style={referenceStyles.sb500798d55}
                                    >
                                      <div className="framer-124v4kj-container">
                                        <MediaVideo
                                          src="/assets/252eb7a68beac870.mp4"
                                          loop={true}
                                          preload="none"
                                          muted={true}
                                          playsInline={true}
                                          className="w-full! h-full!"
                                          style={referenceStyles.sc4d590a879}
                                        ></MediaVideo>
                                      </div>
                                      <div
                                        className="framer-tcpzsa"
                                        data-framer-name="Layer"
                                        style={referenceStyles.s921e6a3845}
                                      ></div>
                                    </div>
                                  </div>
                                  <div
                                    className="framer-acy1tn"
                                    data-framer-name="Serial Number"
                                  >
                                    <div
                                      className="framer-h2d8lq"
                                      data-framer-component-type="RichTextContainer"
                                      style={referenceStyles.s427a885dce}
                                    >
                                      <p
                                        className="framer-text framer-styles-preset-12928c1"
                                        data-styles-preset="V0V25Na8R"
                                        dir="auto"
                                        style={referenceStyles.se8682f4ed5}
                                      >
                                        {t("0.2")}
                                      </p>
                                    </div>
                                    <div className="framer-rp0r5w-container">
                                      <div
                                        className="framer-cc7aC framer-1hypkx9 framer-v-148tm3k w-full!"
                                        data-framer-name="Variant 2"
                                        data-highlight="true"
                                        style={referenceStyles.s6040a1963b}
                                      >
                                        <div className="framer-ZO72C framer-c0whpm"></div>
                                      </div>
                                    </div>
                                    <div
                                      className="framer-xmlp7n"
                                      data-framer-component-type="RichTextContainer"
                                      style={referenceStyles.s427a885dce}
                                    >
                                      <p
                                        className="framer-text framer-styles-preset-12928c1"
                                        data-styles-preset="V0V25Na8R"
                                        dir="auto"
                                        style={referenceStyles.se8682f4ed5}
                                      >
                                        {t("0.3")}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Fragment>,
                          <Fragment key="slide-2">
                            <div
                              className="framer-q7yez6-container shrink-0! w-full! h-full!"
                              data-framer-name="3"
                              style={referenceStyles.s5e042c7902}
                            >
                              <div
                                className="framer-N5z0F framer-ge77Z framer-9qjuV framer-i8hajd framer-v-i8hajd w-full!"
                                data-framer-name="Variant 1"
                                data-highlight="true"
                              >
                                <div
                                  className="framer-ek7ktt"
                                  data-framer-name="Hero Slide Card"
                                >
                                  <div
                                    className="framer-11vewur"
                                    data-framer-name="Cards"
                                  >
                                    <div
                                      className="framer-1rrrte2"
                                      data-framer-name="Hero Slide Card"
                                      style={referenceStyles.s0dd1ff94d5}
                                    >
                                      <div className="framer-bg2sna-container">
                                        <MediaVideo
                                          src="/assets/252eb7a68beac870.mp4"
                                          loop={true}
                                          preload="none"
                                          muted={true}
                                          playsInline={true}
                                          className="w-full! h-full!"
                                          style={referenceStyles.sc4d590a879}
                                        ></MediaVideo>
                                      </div>
                                      <div
                                        className="framer-cyky41"
                                        data-framer-name="Layer"
                                        style={referenceStyles.s130823e52d}
                                      ></div>
                                    </div>
                                    <div
                                      className="framer-d2zfzd"
                                      data-framer-name="Hero Slide Card"
                                      style={referenceStyles.sb500798d55}
                                    >
                                      <div
                                        className="framer-1mth06y"
                                        data-framer-name="Image"
                                        style={referenceStyles.s4b8ea8456d}
                                      >
                                        <div
                                          data-framer-background-image-wrapper="true"
                                          style={referenceStyles.s8a54025f8d}
                                        >
                                          <img
                                            decoding="async"
                                            width="1500"
                                            height="841"
                                            sizes="(min-width: 1200px) max((max(492px, 1px) - 16px) / 2, 1px), (max-width: 767.98px) max(max((min(max(min(100vw - 40px, 1120px), 1px), 492px) - 10px) / 2, 50px), 1px), (min-width: 768px) and (max-width: 1199.98px) max((max(492px, 1px) - 16px) / 2, 1px)"
                                            srcSet="/assets/7aae1d3c9d02029b.png 512w, /assets/21e7253e7087a6ca.png 1024w, /assets/7939f31af4457ea1.png 1500w"
                                            src="/assets/7939f31af4457ea1.png"
                                            alt={t("Image")}
                                            className="w-full! h-full!"
                                            style={referenceStyles.s258149b79d}
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className="framer-tcpzsa"
                                        data-framer-name="Layer"
                                        style={referenceStyles.s921e6a3845}
                                      ></div>
                                    </div>
                                  </div>
                                  <div
                                    className="framer-acy1tn"
                                    data-framer-name="Serial Number"
                                  >
                                    <div
                                      className="framer-h2d8lq"
                                      data-framer-component-type="RichTextContainer"
                                      style={referenceStyles.s427a885dce}
                                    >
                                      <p
                                        className="framer-text framer-styles-preset-12928c1"
                                        data-styles-preset="V0V25Na8R"
                                        dir="auto"
                                        style={referenceStyles.se8682f4ed5}
                                      >
                                        {t("0.3")}
                                      </p>
                                    </div>
                                    <div className="framer-rp0r5w-container">
                                      <div
                                        className="framer-cc7aC framer-1hypkx9 framer-v-148tm3k w-full!"
                                        data-framer-name="Variant 2"
                                        data-highlight="true"
                                        style={referenceStyles.s6040a1963b}
                                      >
                                        <div className="framer-ZO72C framer-c0whpm"></div>
                                      </div>
                                    </div>
                                    <div
                                      className="framer-xmlp7n"
                                      data-framer-component-type="RichTextContainer"
                                      style={referenceStyles.s427a885dce}
                                    >
                                      <p
                                        className="framer-text framer-styles-preset-12928c1"
                                        data-styles-preset="V0V25Na8R"
                                        dir="auto"
                                        style={referenceStyles.se8682f4ed5}
                                      >
                                        {t("0.4")}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Fragment>,
                          <Fragment key="slide-3">
                            <div
                              className="framer-1obwc5t-container shrink-0! w-full! h-full!"
                              data-framer-name="4"
                              style={referenceStyles.s5e042c7902}
                            >
                              <div
                                className="framer-N5z0F framer-ge77Z framer-9qjuV framer-i8hajd framer-v-i8hajd w-full!"
                                data-framer-name="Variant 1"
                                data-highlight="true"
                              >
                                <div
                                  className="framer-ek7ktt"
                                  data-framer-name="Hero Slide Card"
                                >
                                  <div
                                    className="framer-11vewur"
                                    data-framer-name="Cards"
                                  >
                                    <div
                                      className="framer-1rrrte2"
                                      data-framer-name="Hero Slide Card"
                                      style={referenceStyles.s0dd1ff94d5}
                                    >
                                      <div
                                        className="framer-34mdxk"
                                        data-framer-name="Image"
                                        style={referenceStyles.s4b8ea8456d}
                                      >
                                        <div
                                          data-framer-background-image-wrapper="true"
                                          style={referenceStyles.s8a54025f8d}
                                        >
                                          <img
                                            decoding="async"
                                            width="1500"
                                            height="841"
                                            sizes="(min-width: 1200px) max((max(492px, 1px) - 16px) / 2, 1px), (max-width: 767.98px) max(max((min(max(min(100vw - 40px, 1120px), 1px), 492px) - 10px) / 2, 50px), 1px), (min-width: 768px) and (max-width: 1199.98px) max((max(492px, 1px) - 16px) / 2, 1px)"
                                            srcSet="/assets/7aae1d3c9d02029b.png 512w, /assets/21e7253e7087a6ca.png 1024w, /assets/7939f31af4457ea1.png 1500w"
                                            src="/assets/7939f31af4457ea1.png"
                                            alt=""
                                            className="w-full! h-full!"
                                            style={referenceStyles.s258149b79d}
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className="framer-cyky41"
                                        data-framer-name="Layer"
                                        style={referenceStyles.s130823e52d}
                                      ></div>
                                    </div>
                                    <div
                                      className="framer-d2zfzd"
                                      data-framer-name="Hero Slide Card"
                                      style={referenceStyles.sb500798d55}
                                    >
                                      <div
                                        className="framer-1mth06y"
                                        data-framer-name="Image"
                                        style={referenceStyles.s4b8ea8456d}
                                      >
                                        <div
                                          data-framer-background-image-wrapper="true"
                                          style={referenceStyles.s8a54025f8d}
                                        >
                                          <img
                                            decoding="async"
                                            width="1200"
                                            height="673"
                                            sizes="(min-width: 1200px) max((max(492px, 1px) - 16px) / 2, 1px), (max-width: 767.98px) max(max((min(max(min(100vw - 40px, 1120px), 1px), 492px) - 10px) / 2, 50px), 1px), (min-width: 768px) and (max-width: 1199.98px) max((max(492px, 1px) - 16px) / 2, 1px)"
                                            srcSet="/assets/0540f6a2c0215a67.png 512w, /assets/853506061054dbb7.png 1024w, /assets/4e5eb3a3b4dc15eb.png 1200w"
                                            src="/assets/4e5eb3a3b4dc15eb.png"
                                            alt={t("Image")}
                                            className="w-full! h-full!"
                                            style={referenceStyles.s258149b79d}
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className="framer-tcpzsa"
                                        data-framer-name="Layer"
                                        style={referenceStyles.s921e6a3845}
                                      ></div>
                                    </div>
                                  </div>
                                  <div
                                    className="framer-acy1tn"
                                    data-framer-name="Serial Number"
                                  >
                                    <div
                                      className="framer-h2d8lq"
                                      data-framer-component-type="RichTextContainer"
                                      style={referenceStyles.s427a885dce}
                                    >
                                      <p
                                        className="framer-text framer-styles-preset-12928c1"
                                        data-styles-preset="V0V25Na8R"
                                        dir="auto"
                                        style={referenceStyles.se8682f4ed5}
                                      >
                                        {t("0.4")}
                                      </p>
                                    </div>
                                    <div className="framer-rp0r5w-container">
                                      <div
                                        className="framer-cc7aC framer-1hypkx9 framer-v-148tm3k w-full!"
                                        data-framer-name="Variant 2"
                                        data-highlight="true"
                                        style={referenceStyles.s6040a1963b}
                                      >
                                        <div className="framer-ZO72C framer-c0whpm"></div>
                                      </div>
                                    </div>
                                    <div
                                      className="framer-xmlp7n"
                                      data-framer-component-type="RichTextContainer"
                                      style={referenceStyles.s427a885dce}
                                    >
                                      <p
                                        className="framer-text framer-styles-preset-12928c1"
                                        data-styles-preset="V0V25Na8R"
                                        dir="auto"
                                        style={referenceStyles.se8682f4ed5}
                                      >
                                        {t("0.1")}
                                      </p>
                                    </div>
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
              <div className="ssr-variant hidden-72rtr7 hidden-1fs2pis">
                <div className="framer-fqr645-container">
                  <div
                    className="framer-aelYo framer-nj3cev framer-v-qvkm71 w-full!"
                    data-framer-name="Variant 2"
                  >
                    <div
                      className="framer-hyc5m3-container"
                      data-framer-name="Small 1"
                    >
                      <div
                        className="framer-N5z0F framer-ge77Z framer-9qjuV framer-i8hajd framer-v-zzh84r w-full!"
                        data-framer-name="Variant 3"
                      >
                        <div
                          className="framer-ek7ktt"
                          data-framer-name="Hero Slide Card"
                        >
                          <div
                            className="framer-11vewur"
                            data-framer-name="Cards"
                          >
                            <div
                              className="framer-1rrrte2"
                              data-framer-name="Hero Slide Card"
                              style={referenceStyles.s7a65073d47}
                            >
                              <div
                                className="framer-34mdxk"
                                data-framer-name="Image"
                                style={referenceStyles.s426df16a14}
                              >
                                <div
                                  data-framer-background-image-wrapper="true"
                                  style={referenceStyles.s8a54025f8d}
                                >
                                  <img
                                    decoding="async"
                                    width="1200"
                                    height="673"
                                    sizes="(min-width: 1200px) max((max(492px, 1px) - 16px) / 2, 1px), (max-width: 767.98px) max(max((min(max(min(100vw - 40px, 1120px), 1px), 492px) - 10px) / 2, 50px), 1px), (min-width: 768px) and (max-width: 1199.98px) max((max(492px, 1px) - 16px) / 2, 1px)"
                                    srcSet="/assets/0540f6a2c0215a67.png 512w, /assets/853506061054dbb7.png 1024w, /assets/4e5eb3a3b4dc15eb.png 1200w"
                                    src="/assets/4e5eb3a3b4dc15eb.png"
                                    alt={t("Image")}
                                    className="w-full! h-full!"
                                    style={referenceStyles.s258149b79d}
                                  />
                                </div>
                              </div>
                              <div
                                className="framer-cyky41"
                                data-framer-name="Layer"
                                style={referenceStyles.s97e2642e78}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="framer-srwnzc-container"
                      data-framer-name="Small 2"
                    >
                      <div
                        className="framer-N5z0F framer-ge77Z framer-9qjuV framer-i8hajd framer-v-zzh84r w-full!"
                        data-framer-name="Variant 3"
                      >
                        <div
                          className="framer-ek7ktt"
                          data-framer-name="Hero Slide Card"
                        >
                          <div
                            className="framer-11vewur"
                            data-framer-name="Cards"
                          >
                            <div
                              className="framer-1rrrte2"
                              data-framer-name="Hero Slide Card"
                              style={referenceStyles.s7a65073d47}
                            >
                              <div
                                className="framer-34mdxk"
                                data-framer-name="Image"
                                style={referenceStyles.s426df16a14}
                              >
                                <div
                                  data-framer-background-image-wrapper="true"
                                  style={referenceStyles.s8a54025f8d}
                                >
                                  <img
                                    decoding="async"
                                    width="1200"
                                    height="740"
                                    sizes="(min-width: 1200px) max((max(492px, 1px) - 16px) / 2, 1px), (max-width: 767.98px) max(max((min(max(min(100vw - 40px, 1120px), 1px), 492px) - 10px) / 2, 50px), 1px), (min-width: 768px) and (max-width: 1199.98px) max((max(492px, 1px) - 16px) / 2, 1px)"
                                    srcSet="/assets/a61fe20e1a470b9e.png 512w, /assets/e9caac000ea7cf9d.png 1024w, /assets/17d9438e92d7a286.png 1200w"
                                    src="/assets/17d9438e92d7a286.png"
                                    alt=""
                                    className="w-full! h-full!"
                                    style={referenceStyles.s258149b79d}
                                  />
                                </div>
                              </div>
                              <div
                                className="framer-cyky41"
                                data-framer-name="Layer"
                                style={referenceStyles.s97e2642e78}
                              ></div>
                              <div
                                className="framer-1fxv5h9"
                                data-framer-component-type="RichTextContainer"
                                style={referenceStyles.sfa34f72f95}
                              >
                                <h5
                                  className="framer-text framer-styles-preset-uttc6m"
                                  data-styles-preset="lllneI4EJ"
                                  dir="auto"
                                  style={referenceStyles.s0c86264d05}
                                >
                                  <>
                                    <span className="brand-accent">
                                      {t("RY")}
                                    </span>
                                    {"CODE "}
                                    <span className="brand-studio">STUDIO</span>
                                  </>
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="framer-lt8ix3-container"
                      data-framer-name="Small 3"
                    >
                      <div
                        className="framer-N5z0F framer-ge77Z framer-9qjuV framer-i8hajd framer-v-pfooes w-full!"
                        data-framer-name="Variant 4"
                      >
                        <div
                          className="framer-ek7ktt"
                          data-framer-name="Hero Slide Card"
                        >
                          <div
                            className="framer-11vewur"
                            data-framer-name="Cards"
                          >
                            <div
                              className="framer-1rrrte2"
                              data-framer-name="Hero Slide Card"
                              style={referenceStyles.s7a65073d47}
                            >
                              <div className="framer-bg2sna-container">
                                <MediaVideo
                                  src="/assets/252eb7a68beac870.mp4"
                                  loop={true}
                                  preload="none"
                                  muted={true}
                                  playsInline={true}
                                  className="w-full! h-full!"
                                  style={referenceStyles.sc4d590a879}
                                ></MediaVideo>
                              </div>
                              <div
                                className="framer-cyky41"
                                data-framer-name="Layer"
                                style={referenceStyles.s97e2642e78}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="framer-l1sso3-container"
                      data-framer-name="Small 4"
                    >
                      <div
                        className="framer-N5z0F framer-ge77Z framer-9qjuV framer-i8hajd framer-v-zzh84r w-full!"
                        data-framer-name="Variant 3"
                      >
                        <div
                          className="framer-ek7ktt"
                          data-framer-name="Hero Slide Card"
                        >
                          <div
                            className="framer-11vewur"
                            data-framer-name="Cards"
                          >
                            <div
                              className="framer-1rrrte2"
                              data-framer-name="Hero Slide Card"
                              style={referenceStyles.s7a65073d47}
                            >
                              <div
                                className="framer-34mdxk"
                                data-framer-name="Image"
                                style={referenceStyles.s426df16a14}
                              >
                                <div
                                  data-framer-background-image-wrapper="true"
                                  style={referenceStyles.s8a54025f8d}
                                >
                                  <img
                                    decoding="async"
                                    width="1500"
                                    height="841"
                                    sizes="(min-width: 1200px) max((max(492px, 1px) - 16px) / 2, 1px), (max-width: 767.98px) max(max((min(max(min(100vw - 40px, 1120px), 1px), 492px) - 10px) / 2, 50px), 1px), (min-width: 768px) and (max-width: 1199.98px) max((max(492px, 1px) - 16px) / 2, 1px)"
                                    srcSet="/assets/7aae1d3c9d02029b.png 512w, /assets/21e7253e7087a6ca.png 1024w, /assets/7939f31af4457ea1.png 1500w"
                                    src="/assets/7939f31af4457ea1.png"
                                    alt=""
                                    className="w-full! h-full!"
                                    style={referenceStyles.s258149b79d}
                                  />
                                </div>
                              </div>
                              <div
                                className="framer-cyky41"
                                data-framer-name="Layer"
                                style={referenceStyles.s97e2642e78}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
