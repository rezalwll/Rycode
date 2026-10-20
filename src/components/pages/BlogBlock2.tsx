import { articleImageSources } from "@/lib/article-images";
import type { PublicContent } from "@/server/content";
import { articleDate } from "@/lib/article-date";
import { BlogHero } from "@/components/BlogHero";
import { getTranslations } from "@/lib/i18n-server";
import Link from "next/link";
import { Reveal } from "@/components/Motion";
import { referenceStyles } from "@/styles/reference-styles";
export async function BlogBlock2({ articles }: { articles: PublicContent[] }) {
  const { t, href, locale } = await getTranslations();
  return (
    <div className="ssr-variant">
      <div className="framer-17t6xgj-container hidden-l5lhc hidden-poasp1">
        <BlogHero
          itemCount={articles.length}
          className="framer-aQ9vY framer-A8dYT framer-1hplv6u framer-v-1hplv6u w-full!"
          data-framer-name="Desktop"
          data-highlight="true"
        >
          <div
            className="framer-d44grj"
            data-framer-name="Image"
            data-blog-images
          >
            <div className="framer-oqepsw">
              <div
                data-framer-background-image-wrapper="true"
                style={referenceStyles.s8a54025f8d}
              >
                <img
                  decoding="async"
                  src={articles[0]?.image || "/brand/og-card.png"}
                  srcSet={articleImageSources(articles[0]?.image)}
                  sizes="100vw"
                  alt=""
                  className="w-full! h-full!"
                  style={referenceStyles.s258149b79d}
                  fetchPriority="high"
                />
              </div>
            </div>
            <div className="framer-ijvuci">
              <div
                data-framer-background-image-wrapper="true"
                style={referenceStyles.s8a54025f8d}
              >
                <img
                  decoding="async"
                  src={articles[1]?.image || "/brand/og-card.png"}
                  srcSet={articleImageSources(articles[1]?.image)}
                  sizes="100vw"
                  alt=""
                  className="w-full! h-full!"
                  style={referenceStyles.s258149b79d}
                  fetchPriority="auto"
                />
              </div>
            </div>
            <div className="framer-12ofluh">
              <div
                data-framer-background-image-wrapper="true"
                style={referenceStyles.s8a54025f8d}
              >
                <img
                  decoding="async"
                  src={articles[2]?.image || "/brand/og-card.png"}
                  srcSet={articleImageSources(articles[2]?.image)}
                  sizes="100vw"
                  alt=""
                  className="w-full! h-full!"
                  style={referenceStyles.s258149b79d}
                  fetchPriority="auto"
                />
              </div>
            </div>
            <div
              className="framer-ebq35v"
              data-framer-name="Overlay"
              style={referenceStyles.s08a868fd71}
            ></div>
          </div>
          <div className="framer-6gm9fz" data-framer-name="Container">
            <div className="framer-rc7iyp" data-framer-name="Content">
              <Reveal
                className="framer-14rfa2f"
                data-framer-appear-id="14rfa2f"
                data-framer-component-type="RichTextContainer"
                style={referenceStyles.sf592d15cd0}
                as="div"
                from="translateY(120px)"
              >
                <h2
                  className="framer-text framer-styles-preset-eiwrr4"
                  data-styles-preset="uizb2JBlh"
                  dir="auto"
                  style={referenceStyles.s4bba586cf3}
                >
                  {t(
                    "Explore expert insights, design trends, no-code strategies, and practical resources to help you create better digital experiences and grow your business.",
                  )}
                </h2>
              </Reveal>
              <Reveal
                className="framer-1ep8fap"
                data-framer-appear-id="1ep8fap"
                data-framer-name="Taxt Wrapper"
                data-blog-previews
                style={referenceStyles.sd189d1cd9b}
                as="div"
                from="translateY(120px)"
              >
                {articles[0] && (
                  <div className="framer-1xsxtd4">
                    <Link
                      className="framer-42yekb framer-11jsdob"
                      href={href("/blog/" + articles[0].slug)}
                    >
                      <div className="framer-1bcushk-container">
                        <div
                          className="framer-wqubC framer-P2lQE framer-YUW4K framer-19a506g framer-v-19a506g w-full!"
                          data-framer-name="Variant 1"
                        >
                          <div
                            className="framer-qawdxa"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.s143c03551f}
                          >
                            <p
                              className="framer-text framer-styles-preset-rx12qp"
                              data-styles-preset="EzakxyTlE"
                              dir="auto"
                              style={referenceStyles.se8682f4ed5}
                            >
                              {articles[0].title}
                            </p>
                          </div>
                          <div
                            className="framer-16c1a6a"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.s143c03551f}
                          >
                            <p
                              className="framer-text framer-styles-preset-woy26o"
                              data-styles-preset="QSDP86qs3"
                              dir="auto"
                              style={referenceStyles.se8682f4ed5}
                            >
                              {articleDate(articles[0].publishedAt, locale)}
                            </p>
                          </div>
                          <div
                            className="framer-1j2enta"
                            data-framer-name="Line"
                            style={referenceStyles.s79d81f830d}
                          >
                            <svg
                              className="framer-lllko framer-fn69f1"
                              role="presentation"
                              viewBox="0 0 352 1"
                            >
                              <path
                                d="M 0 0.5 L 352 0"
                                fill="transparent"
                                height="1px"
                                id="s2XG_rfo2"
                                stroke="var(--token-b02c606e-9b2a-4d9e-8320-ea5ab15fdd98, rgb(255, 255, 255))"
                                strokeDasharray="352.0003662109375 352.0003662109375"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="4"
                                strokeWidth="2"
                                width="352px"
                                strokeDashoffset="351.6483658447266"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
                {articles[1] && (
                  <div className="framer-1a4rzvf">
                    <Link
                      className="framer-t2smr0 framer-11jsdob"
                      href={href("/blog/" + articles[1].slug)}
                    >
                      <div className="framer-1nbordd-container">
                        <div
                          className="framer-wqubC framer-P2lQE framer-YUW4K framer-19a506g framer-v-nbl93y w-full!"
                          data-framer-name="Variant 2"
                        >
                          <div
                            className="framer-qawdxa"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.s143c03551f}
                          >
                            <p
                              className="framer-text framer-styles-preset-rx12qp"
                              data-styles-preset="EzakxyTlE"
                              dir="auto"
                              style={referenceStyles.se8682f4ed5}
                            >
                              {articles[1].title}
                            </p>
                          </div>
                          <div
                            className="framer-16c1a6a"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.s143c03551f}
                          >
                            <p
                              className="framer-text framer-styles-preset-woy26o"
                              data-styles-preset="QSDP86qs3"
                              dir="auto"
                              style={referenceStyles.se8682f4ed5}
                            >
                              {articleDate(articles[1].publishedAt, locale)}
                            </p>
                          </div>
                          <div
                            className="framer-1j2enta"
                            data-framer-name="Line"
                            style={referenceStyles.s79d81f830d}
                          >
                            <div className="framer-HFYKW framer-fn69f1"></div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
                {articles[2] && (
                  <div className="framer-1rsnmel">
                    <Link
                      className="framer-10gpxiz framer-11jsdob"
                      href={href("/blog/" + articles[2].slug)}
                    >
                      <div className="framer-1db0jpq-container">
                        <div
                          className="framer-wqubC framer-P2lQE framer-YUW4K framer-19a506g framer-v-nbl93y w-full!"
                          data-framer-name="Variant 2"
                        >
                          <div
                            className="framer-qawdxa"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.s143c03551f}
                          >
                            <p
                              className="framer-text framer-styles-preset-rx12qp"
                              data-styles-preset="EzakxyTlE"
                              dir="auto"
                              style={referenceStyles.se8682f4ed5}
                            >
                              {articles[2].title}
                            </p>
                          </div>
                          <div
                            className="framer-16c1a6a"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.s143c03551f}
                          >
                            <p
                              className="framer-text framer-styles-preset-woy26o"
                              data-styles-preset="QSDP86qs3"
                              dir="auto"
                              style={referenceStyles.se8682f4ed5}
                            >
                              {articleDate(articles[2].publishedAt, locale)}
                            </p>
                          </div>
                          <div
                            className="framer-1j2enta"
                            data-framer-name="Line"
                            style={referenceStyles.s79d81f830d}
                          >
                            <div className="framer-HFYKW framer-fn69f1"></div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </Reveal>
            </div>
          </div>
        </BlogHero>
      </div>
    </div>
  );
}
