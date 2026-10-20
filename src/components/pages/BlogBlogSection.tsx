import { articleImageSources } from "@/lib/article-images";
import { getTranslations } from "@/lib/i18n-server";
import Link from "next/link";
import { Reveal } from "@/components/Motion";
import { referenceStyles } from "@/styles/reference-styles";
import type { PublicContent } from "@/server/content";
import type { ReactNode } from "react";
import { articleDate } from "@/lib/article-date";
import styles from "./BlogListing.module.css";
export async function BlogBlogSection({
  items,
  filters,
  pagination,
}: {
  items: PublicContent[];
  filters?: ReactNode;
  pagination?: ReactNode;
}) {
  const { href, locale } = await getTranslations();
  return (
    <section
      className={"framer-1yqm1dg " + styles.listing}
      data-framer-name="Blog Section"
      aria-label={locale === "fa" ? "مقاله‌ها" : "Articles"}
    >
      <div className="framer-pqpzn7" data-framer-name="Container">
        <div className="framer-kjvge1" data-framer-name="Content">
          {filters}
          <div className="framer-1ees2dn">
            {items.map((article) => (
              <Link
                className="framer-1hpua4g framer-1s1vr5q"
                key={article.id}
                data-blog-card
                data-article-id={article.id}
                href={href("/blog/" + article.slug)}
              >
                <div className="ssr-variant hidden-poasp1 hidden-1iwgygr">
                  <Reveal
                    className="framer-te54jw-container"
                    style={referenceStyles.s7b42a5ac55}
                    as="div"
                    from="translateX(200px) translateY(200px) scale(0.6)"
                  >
                    <div
                      className="framer-X0SPq framer-4M2HY framer-pSPxj framer-UO2GW framer-o0znmx framer-v-o0znmx w-full!"
                      data-framer-name="Variant 1"
                    >
                      <div
                        className="framer-1gvpwbt"
                        data-framer-name="Image"
                        style={referenceStyles.s34b23b8957}
                      >
                        <div
                          className="framer-vtrboj"
                          style={referenceStyles.s34b23b8957}
                        >
                          <div
                            data-framer-background-image-wrapper="true"
                            style={referenceStyles.s8a54025f8d}
                          >
                            <img
                              decoding="async"
                              loading="lazy"
                              src={article.image || "/brand/og-card.png"}
                              srcSet={articleImageSources(article.image)}
                              sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1199px) calc((100vw - 76px) / 2), calc((100vw - 92px) / 3)"
                              alt={article.imageAlt}
                              className="w-full! h-full!"
                              style={referenceStyles.s258149b79d}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-1o9ixez"
                          data-framer-name="Layer"
                          style={referenceStyles.s47ade10003}
                        ></div>
                        <div
                          className="framer-1jl6no1"
                          style={referenceStyles.s6e17375e26}
                        >
                          <div
                            data-framer-background-image-wrapper="true"
                            style={referenceStyles.s8a54025f8d}
                          >
                            <img
                              decoding="async"
                              loading="lazy"
                              src={article.image || "/brand/og-card.png"}
                              srcSet={articleImageSources(article.image)}
                              sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1199px) calc((100vw - 76px) / 2), calc((100vw - 92px) / 3)"
                              alt=""
                              className="w-full! h-full!"
                              style={referenceStyles.s258149b79d}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="framer-1v7n3h6"
                        data-framer-name="Title & Date"
                      >
                        <div
                          className="framer-z5bx6l"
                          data-framer-name="Title & description"
                        >
                          <div
                            className="framer-p08vs7"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.sdb4e5c5446}
                          >
                            <p
                              className="framer-text framer-styles-preset-7tjvnq"
                              data-styles-preset="jotaYYAew"
                              dir="auto"
                              style={referenceStyles.s2a1463207d}
                            >
                              {article.title}
                            </p>
                          </div>
                          <div
                            className="framer-ef2y83"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.s387d8c6703}
                          >
                            <p
                              className="framer-text framer-styles-preset-nxx96o"
                              data-styles-preset="fHx27tEvF"
                              dir="auto"
                              style={referenceStyles.s8d634beba4}
                            >
                              {article.summary}
                            </p>
                          </div>
                        </div>
                        <div
                          className="framer-1l76jpf"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.sdb4e5c5446}
                        >
                          <p
                            className="framer-text framer-styles-preset-10zsitg"
                            data-styles-preset="Ic0XZZbRG"
                            dir="auto"
                            style={referenceStyles.s2a1463207d}
                          >
                            {articleDate(article.publishedAt, locale)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
                <div className="ssr-variant hidden-l5lhc hidden-1iwgygr">
                  <Reveal
                    className="framer-te54jw-container"
                    style={referenceStyles.s7b42a5ac55}
                    as="div"
                    from="translateX(200px) translateY(200px) scale(0.6)"
                  >
                    <div
                      className="framer-X0SPq framer-4M2HY framer-pSPxj framer-UO2GW framer-o0znmx framer-v-pj0qne w-full!"
                      data-framer-name="Variant 3"
                    >
                      <div
                        className="framer-1gvpwbt"
                        data-framer-name="Image"
                        style={referenceStyles.s34b23b8957}
                      >
                        <div
                          className="framer-vtrboj"
                          style={referenceStyles.s34b23b8957}
                        >
                          <div
                            data-framer-background-image-wrapper="true"
                            style={referenceStyles.s8a54025f8d}
                          >
                            <img
                              decoding="async"
                              loading="lazy"
                              src={article.image || "/brand/og-card.png"}
                              srcSet={articleImageSources(article.image)}
                              sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1199px) calc((100vw - 76px) / 2), calc((100vw - 92px) / 3)"
                              alt={article.imageAlt}
                              className="w-full! h-full!"
                              style={referenceStyles.s258149b79d}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-1o9ixez"
                          data-framer-name="Layer"
                          style={referenceStyles.s47ade10003}
                        ></div>
                      </div>
                      <div
                        className="framer-1v7n3h6"
                        data-framer-name="Title & Date"
                      >
                        <div
                          className="framer-z5bx6l"
                          data-framer-name="Title & description"
                        >
                          <div
                            className="framer-p08vs7"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.sdb4e5c5446}
                          >
                            <p
                              className="framer-text framer-styles-preset-7tjvnq"
                              data-styles-preset="jotaYYAew"
                              dir="auto"
                              style={referenceStyles.s2a1463207d}
                            >
                              {article.title}
                            </p>
                          </div>
                          <div
                            className="framer-ef2y83"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.s387d8c6703}
                          >
                            <p
                              className="framer-text framer-styles-preset-nxx96o"
                              data-styles-preset="fHx27tEvF"
                              dir="auto"
                              style={referenceStyles.s8d634beba4}
                            >
                              {article.summary}
                            </p>
                          </div>
                        </div>
                        <div
                          className="framer-1l76jpf"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.sdb4e5c5446}
                        >
                          <p
                            className="framer-text framer-styles-preset-10zsitg"
                            data-styles-preset="Ic0XZZbRG"
                            dir="auto"
                            style={referenceStyles.s2a1463207d}
                          >
                            {articleDate(article.publishedAt, locale)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
                <div className="ssr-variant hidden-poasp1 hidden-l5lhc">
                  <Reveal
                    className="framer-te54jw-container"
                    style={referenceStyles.s7b42a5ac55}
                    as="div"
                    from="translateX(200px) translateY(200px) scale(0.6)"
                  >
                    <div
                      className="framer-X0SPq framer-4M2HY framer-pSPxj framer-UO2GW framer-o0znmx framer-v-tm1pdv w-full!"
                      data-framer-name="Variant 2"
                    >
                      <div
                        className="framer-1gvpwbt"
                        data-framer-name="Image"
                        style={referenceStyles.s34b23b8957}
                      >
                        <div
                          className="framer-vtrboj"
                          style={referenceStyles.s34b23b8957}
                        >
                          <div
                            data-framer-background-image-wrapper="true"
                            style={referenceStyles.s8a54025f8d}
                          >
                            <img
                              decoding="async"
                              loading="lazy"
                              src={article.image || "/brand/og-card.png"}
                              srcSet={articleImageSources(article.image)}
                              sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1199px) calc((100vw - 76px) / 2), calc((100vw - 92px) / 3)"
                              alt={article.imageAlt}
                              className="w-full! h-full!"
                              style={referenceStyles.s258149b79d}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-1o9ixez"
                          data-framer-name="Layer"
                          style={referenceStyles.s47ade10003}
                        ></div>
                      </div>
                      <div
                        className="framer-1v7n3h6"
                        data-framer-name="Title & Date"
                      >
                        <div
                          className="framer-z5bx6l"
                          data-framer-name="Title & description"
                        >
                          <div
                            className="framer-p08vs7"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.sdb4e5c5446}
                          >
                            <p
                              className="framer-text framer-styles-preset-7tjvnq"
                              data-styles-preset="jotaYYAew"
                              dir="auto"
                              style={referenceStyles.s2a1463207d}
                            >
                              {article.title}
                            </p>
                          </div>
                          <div
                            className="framer-ef2y83"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.s387d8c6703}
                          >
                            <p
                              className="framer-text framer-styles-preset-nxx96o"
                              data-styles-preset="fHx27tEvF"
                              dir="auto"
                              style={referenceStyles.s8d634beba4}
                            >
                              {article.summary}
                            </p>
                          </div>
                        </div>
                        <div
                          className="framer-1l76jpf"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.sdb4e5c5446}
                        >
                          <p
                            className="framer-text framer-styles-preset-10zsitg"
                            data-styles-preset="Ic0XZZbRG"
                            dir="auto"
                            style={referenceStyles.s2a1463207d}
                          >
                            {articleDate(article.publishedAt, locale)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </Link>
            ))}
          </div>
          {items.length === 0 && (
            <p className={styles.empty}>
              {locale === "fa"
                ? "مطلبی با این مشخصات پیدا نشد"
                : "No matching articles found"}
            </p>
          )}
          {pagination}
        </div>
      </div>
    </section>
  );
}
