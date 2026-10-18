import { getTranslations } from "@/lib/i18n-server";
import Link from "next/link";
import { Reveal } from "@/components/Motion";
import { referenceStyles } from "@/styles/reference-styles";
export async function BlogBlogSection() {
  const { href, t } = await getTranslations();
  return (
    <section className="framer-1yqm1dg" data-framer-name="Blog Section">
      <div className="framer-pqpzn7" data-framer-name="Container">
        <div className="framer-kjvge1" data-framer-name="Content">
          <div className="framer-1ees2dn">
            <Link
              className="framer-1hpua4g framer-1s1vr5q"
              href={href(
                "/blog/why-great-design-creates-better-business-results",
              )}
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
                            width="1500"
                            height="1986"
                            sizes="(min-width: 1200px) max(max(100vw, 1px), max(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px), 1px), calc(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px) * 0.7)), (min-width: 768px) and (max-width: 1199.98px) max(max(100vw, 1px), max(max(max((max(100vw - 60px, 1px) - 16px) / 2, 50px), 1px), 1px)), (max-width: 767.98px) max(max(100vw, 1px), max(max(100vw - 40px, 1px), 1px))"
                            srcSet="/assets/f8530c1da19d5f0e.png 773w, /assets/46fbadd99d68ae26.png 1500w"
                            src="/assets/46fbadd99d68ae26.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <Reveal
                        className="framer-1o9ixez"
                        data-framer-name="Layer"
                        style={referenceStyles.s47ade10003}
                        as="div"
                        from="none"
                      ></Reveal>
                      <Reveal
                        className="framer-1jl6no1"
                        style={referenceStyles.s6e17375e26}
                        as="div"
                        from="none"
                      >
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            width="1500"
                            height="1986"
                            sizes="(min-width: 1200px) max(max(100vw, 1px), max(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px), 1px), calc(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px) * 0.7)), (min-width: 768px) and (max-width: 1199.98px) max(max(100vw, 1px), max(max(max((max(100vw - 60px, 1px) - 16px) / 2, 50px), 1px), 1px)), (max-width: 767.98px) max(max(100vw, 1px), max(max(100vw - 40px, 1px), 1px))"
                            srcSet="/assets/f8530c1da19d5f0e.png 773w, /assets/46fbadd99d68ae26.png 1500w"
                            src="/assets/46fbadd99d68ae26.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </Reveal>
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
                            {t(
                              "Why Great Design Creates Better Business Results",
                            )}
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
                            {t(
                              "Discover how thoughtful design improves user experience, builds trust, and increases conversions.",
                            )}
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
                          {t("OCT 12, 2026")}
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
                            width="1500"
                            height="1986"
                            sizes="(min-width: 1200px) max(max(100vw, 1px), max(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px), 1px), calc(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px) * 0.7)), (min-width: 768px) and (max-width: 1199.98px) max(max(100vw, 1px), max(max(max((max(100vw - 60px, 1px) - 16px) / 2, 50px), 1px), 1px)), (max-width: 767.98px) max(max(100vw, 1px), max(max(100vw - 40px, 1px), 1px))"
                            srcSet="/assets/f8530c1da19d5f0e.png 773w, /assets/46fbadd99d68ae26.png 1500w"
                            src="/assets/46fbadd99d68ae26.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <Reveal
                        className="framer-1o9ixez"
                        data-framer-name="Layer"
                        style={referenceStyles.s47ade10003}
                        as="div"
                        from="none"
                      ></Reveal>
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
                            {t(
                              "Why Great Design Creates Better Business Results",
                            )}
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
                            {t(
                              "Discover how thoughtful design improves user experience, builds trust, and increases conversions.",
                            )}
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
                          {t("OCT 12, 2026")}
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
                            width="1500"
                            height="1986"
                            sizes="(min-width: 1200px) max(max(100vw, 1px), max(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px), 1px), calc(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px) * 0.7)), (min-width: 768px) and (max-width: 1199.98px) max(max(100vw, 1px), max(max(max((max(100vw - 60px, 1px) - 16px) / 2, 50px), 1px), 1px)), (max-width: 767.98px) max(max(100vw, 1px), max(max(100vw - 40px, 1px), 1px))"
                            srcSet="/assets/f8530c1da19d5f0e.png 773w, /assets/46fbadd99d68ae26.png 1500w"
                            src="/assets/46fbadd99d68ae26.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <Reveal
                        className="framer-1o9ixez"
                        data-framer-name="Layer"
                        style={referenceStyles.s47ade10003}
                        as="div"
                        from="none"
                      ></Reveal>
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
                            {t(
                              "Why Great Design Creates Better Business Results",
                            )}
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
                            {t(
                              "Discover how thoughtful design improves user experience, builds trust, and increases conversions.",
                            )}
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
                          {t("OCT 12, 2026")}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </Link>
            <Link
              className="framer-1hpua4g framer-1s1vr5q"
              href={href("/blog/the-future-of-no-code-product-development")}
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
                            width="1500"
                            height="1991"
                            sizes="(min-width: 1200px) max(100vw, max(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px), 1px), calc(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px) * 0.7)), (min-width: 768px) and (max-width: 1199.98px) max(100vw, max(max(max((max(100vw - 60px, 1px) - 16px) / 2, 50px), 1px), 1px)), (max-width: 767.98px) max(100vw, max(max(100vw - 40px, 1px), 1px))"
                            srcSet="/assets/0295f0e470a65f2e.png 771w, /assets/49673833e2e44520.png 1500w"
                            src="/assets/49673833e2e44520.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <Reveal
                        className="framer-1o9ixez"
                        data-framer-name="Layer"
                        style={referenceStyles.s47ade10003}
                        as="div"
                        from="none"
                      ></Reveal>
                      <Reveal
                        className="framer-1jl6no1"
                        style={referenceStyles.s6e17375e26}
                        as="div"
                        from="none"
                      >
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            width="1500"
                            height="1991"
                            sizes="(min-width: 1200px) max(100vw, max(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px), 1px), calc(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px) * 0.7)), (min-width: 768px) and (max-width: 1199.98px) max(100vw, max(max(max((max(100vw - 60px, 1px) - 16px) / 2, 50px), 1px), 1px)), (max-width: 767.98px) max(100vw, max(max(100vw - 40px, 1px), 1px))"
                            srcSet="/assets/0295f0e470a65f2e.png 771w, /assets/49673833e2e44520.png 1500w"
                            src="/assets/49673833e2e44520.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </Reveal>
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
                            {t("The Future of No-Code Product Development")}
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
                            {t(
                              "Learn how modern no-code tools accelerate product launches without sacrificing quality.",
                            )}
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
                          {t("OCT 10, 2026")}
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
                            width="1500"
                            height="1991"
                            sizes="(min-width: 1200px) max(100vw, max(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px), 1px), calc(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px) * 0.7)), (min-width: 768px) and (max-width: 1199.98px) max(100vw, max(max(max((max(100vw - 60px, 1px) - 16px) / 2, 50px), 1px), 1px)), (max-width: 767.98px) max(100vw, max(max(100vw - 40px, 1px), 1px))"
                            srcSet="/assets/0295f0e470a65f2e.png 771w, /assets/49673833e2e44520.png 1500w"
                            src="/assets/49673833e2e44520.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <Reveal
                        className="framer-1o9ixez"
                        data-framer-name="Layer"
                        style={referenceStyles.s47ade10003}
                        as="div"
                        from="none"
                      ></Reveal>
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
                            {t("The Future of No-Code Product Development")}
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
                            {t(
                              "Learn how modern no-code tools accelerate product launches without sacrificing quality.",
                            )}
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
                          {t("OCT 10, 2026")}
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
                            width="1500"
                            height="1991"
                            sizes="(min-width: 1200px) max(100vw, max(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px), 1px), calc(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px) * 0.7)), (min-width: 768px) and (max-width: 1199.98px) max(100vw, max(max(max((max(100vw - 60px, 1px) - 16px) / 2, 50px), 1px), 1px)), (max-width: 767.98px) max(100vw, max(max(100vw - 40px, 1px), 1px))"
                            srcSet="/assets/0295f0e470a65f2e.png 771w, /assets/49673833e2e44520.png 1500w"
                            src="/assets/49673833e2e44520.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <Reveal
                        className="framer-1o9ixez"
                        data-framer-name="Layer"
                        style={referenceStyles.s47ade10003}
                        as="div"
                        from="none"
                      ></Reveal>
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
                            {t("The Future of No-Code Product Development")}
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
                            {t(
                              "Learn how modern no-code tools accelerate product launches without sacrificing quality.",
                            )}
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
                          {t("OCT 10, 2026")}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </Link>
            <Link
              className="framer-1hpua4g framer-1s1vr5q"
              href={href(
                "/blog/creating-websites-that-convert-more-visitors-effectively",
              )}
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
                            width="1500"
                            height="2676"
                            sizes="(min-width: 1200px) max(100vw, max(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px), 1px), calc(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px) * 0.7)), (min-width: 768px) and (max-width: 1199.98px) max(100vw, max(max(max((max(100vw - 60px, 1px) - 16px) / 2, 50px), 1px), 1px)), (max-width: 767.98px) max(100vw, max(max(100vw - 40px, 1px), 1px))"
                            srcSet="/assets/9687ec6232582fba.png 573w, /assets/06627ec678df7c8c.png 1147w, /assets/61b2b6dd4ec05747.png 1500w"
                            src="/assets/61b2b6dd4ec05747.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <Reveal
                        className="framer-1o9ixez"
                        data-framer-name="Layer"
                        style={referenceStyles.s47ade10003}
                        as="div"
                        from="none"
                      ></Reveal>
                      <Reveal
                        className="framer-1jl6no1"
                        style={referenceStyles.s6e17375e26}
                        as="div"
                        from="none"
                      >
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            width="1500"
                            height="2676"
                            sizes="(min-width: 1200px) max(100vw, max(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px), 1px), calc(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px) * 0.7)), (min-width: 768px) and (max-width: 1199.98px) max(100vw, max(max(max((max(100vw - 60px, 1px) - 16px) / 2, 50px), 1px), 1px)), (max-width: 767.98px) max(100vw, max(max(100vw - 40px, 1px), 1px))"
                            srcSet="/assets/9687ec6232582fba.png 573w, /assets/06627ec678df7c8c.png 1147w, /assets/61b2b6dd4ec05747.png 1500w"
                            src="/assets/61b2b6dd4ec05747.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </Reveal>
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
                            {t(
                              "Creating Websites That Convert More Visitors Effectively",
                            )}
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
                            {t(
                              "Explore proven strategies for designing websites that attract, engage, and convert users.",
                            )}
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
                          {t("OCT 08, 2026")}
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
                            width="1500"
                            height="2676"
                            sizes="(min-width: 1200px) max(100vw, max(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px), 1px), calc(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px) * 0.7)), (min-width: 768px) and (max-width: 1199.98px) max(100vw, max(max(max((max(100vw - 60px, 1px) - 16px) / 2, 50px), 1px), 1px)), (max-width: 767.98px) max(100vw, max(max(100vw - 40px, 1px), 1px))"
                            srcSet="/assets/9687ec6232582fba.png 573w, /assets/06627ec678df7c8c.png 1147w, /assets/61b2b6dd4ec05747.png 1500w"
                            src="/assets/61b2b6dd4ec05747.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <Reveal
                        className="framer-1o9ixez"
                        data-framer-name="Layer"
                        style={referenceStyles.s47ade10003}
                        as="div"
                        from="none"
                      ></Reveal>
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
                            {t(
                              "Creating Websites That Convert More Visitors Effectively",
                            )}
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
                            {t(
                              "Explore proven strategies for designing websites that attract, engage, and convert users.",
                            )}
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
                          {t("OCT 08, 2026")}
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
                            width="1500"
                            height="2676"
                            sizes="(min-width: 1200px) max(100vw, max(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px), 1px), calc(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px) * 0.7)), (min-width: 768px) and (max-width: 1199.98px) max(100vw, max(max(max((max(100vw - 60px, 1px) - 16px) / 2, 50px), 1px), 1px)), (max-width: 767.98px) max(100vw, max(max(100vw - 40px, 1px), 1px))"
                            srcSet="/assets/9687ec6232582fba.png 573w, /assets/06627ec678df7c8c.png 1147w, /assets/61b2b6dd4ec05747.png 1500w"
                            src="/assets/61b2b6dd4ec05747.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <Reveal
                        className="framer-1o9ixez"
                        data-framer-name="Layer"
                        style={referenceStyles.s47ade10003}
                        as="div"
                        from="none"
                      ></Reveal>
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
                            {t(
                              "Creating Websites That Convert More Visitors Effectively",
                            )}
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
                            {t(
                              "Explore proven strategies for designing websites that attract, engage, and convert users.",
                            )}
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
                          {t("OCT 08, 2026")}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </Link>
            <Link
              className="framer-1hpua4g framer-1s1vr5q"
              href={href("/blog/building-modern-brands-with-purpose-today")}
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
                            width="1500"
                            height="2250"
                            sizes="(min-width: 1200px) max(max(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px), 1px), calc(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px) * 0.7)), (max-width: 767.98px) max(max(100vw - 40px, 1px), 1px), (min-width: 768px) and (max-width: 1199.98px) max(max(max((max(100vw - 60px, 1px) - 16px) / 2, 50px), 1px), 1px)"
                            srcSet="/assets/48b931441014f0f7.png 682w, /assets/b064087d07393853.png 1365w, /assets/79de4a62dbad0012.png 1500w"
                            src="/assets/79de4a62dbad0012.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <Reveal
                        className="framer-1o9ixez"
                        data-framer-name="Layer"
                        style={referenceStyles.s47ade10003}
                        as="div"
                        from="none"
                      ></Reveal>
                      <Reveal
                        className="framer-1jl6no1"
                        style={referenceStyles.s6e17375e26}
                        as="div"
                        from="none"
                      >
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            width="1500"
                            height="2250"
                            sizes="(min-width: 1200px) max(max(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px), 1px), calc(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px) * 0.7)), (max-width: 767.98px) max(max(100vw - 40px, 1px), 1px), (min-width: 768px) and (max-width: 1199.98px) max(max(max((max(100vw - 60px, 1px) - 16px) / 2, 50px), 1px), 1px)"
                            srcSet="/assets/48b931441014f0f7.png 682w, /assets/b064087d07393853.png 1365w, /assets/79de4a62dbad0012.png 1500w"
                            src="/assets/79de4a62dbad0012.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </Reveal>
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
                            {t("Building Modern Brands With Purpose Today")}
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
                            {t(
                              "Build stronger brands with proven design strategies.",
                            )}
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
                          {t("SEP 18, 2026")}
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
                            width="1500"
                            height="2250"
                            sizes="(min-width: 1200px) max(max(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px), 1px), calc(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px) * 0.7)), (max-width: 767.98px) max(max(100vw - 40px, 1px), 1px), (min-width: 768px) and (max-width: 1199.98px) max(max(max((max(100vw - 60px, 1px) - 16px) / 2, 50px), 1px), 1px)"
                            srcSet="/assets/48b931441014f0f7.png 682w, /assets/b064087d07393853.png 1365w, /assets/79de4a62dbad0012.png 1500w"
                            src="/assets/79de4a62dbad0012.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <Reveal
                        className="framer-1o9ixez"
                        data-framer-name="Layer"
                        style={referenceStyles.s47ade10003}
                        as="div"
                        from="none"
                      ></Reveal>
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
                            {t("Building Modern Brands With Purpose Today")}
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
                            {t(
                              "Build stronger brands with proven design strategies.",
                            )}
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
                          {t("SEP 18, 2026")}
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
                            width="1500"
                            height="2250"
                            sizes="(min-width: 1200px) max(max(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px), 1px), calc(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px) * 0.7)), (max-width: 767.98px) max(max(100vw - 40px, 1px), 1px), (min-width: 768px) and (max-width: 1199.98px) max(max(max((max(100vw - 60px, 1px) - 16px) / 2, 50px), 1px), 1px)"
                            srcSet="/assets/48b931441014f0f7.png 682w, /assets/b064087d07393853.png 1365w, /assets/79de4a62dbad0012.png 1500w"
                            src="/assets/79de4a62dbad0012.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <Reveal
                        className="framer-1o9ixez"
                        data-framer-name="Layer"
                        style={referenceStyles.s47ade10003}
                        as="div"
                        from="none"
                      ></Reveal>
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
                            {t("Building Modern Brands With Purpose Today")}
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
                            {t(
                              "Build stronger brands with proven design strategies.",
                            )}
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
                          {t("SEP 18, 2026")}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </Link>
            <Link
              className="framer-1hpua4g framer-1s1vr5q"
              href={href("/blog/mastering-framer-for-faster-website-launches")}
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
                            width="1500"
                            height="1991"
                            sizes="(min-width: 1200px) max(max(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px), 1px), calc(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px) * 0.7)), (max-width: 767.98px) max(max(100vw - 40px, 1px), 1px), (min-width: 768px) and (max-width: 1199.98px) max(max(max((max(100vw - 60px, 1px) - 16px) / 2, 50px), 1px), 1px)"
                            srcSet="/assets/a81aef47088f07b8.png 771w, /assets/2b301ea654ac561c.png 1500w"
                            src="/assets/2b301ea654ac561c.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <Reveal
                        className="framer-1o9ixez"
                        data-framer-name="Layer"
                        style={referenceStyles.s47ade10003}
                        as="div"
                        from="none"
                      ></Reveal>
                      <Reveal
                        className="framer-1jl6no1"
                        style={referenceStyles.s6e17375e26}
                        as="div"
                        from="none"
                      >
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            width="1500"
                            height="1991"
                            sizes="(min-width: 1200px) max(max(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px), 1px), calc(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px) * 0.7)), (max-width: 767.98px) max(max(100vw - 40px, 1px), 1px), (min-width: 768px) and (max-width: 1199.98px) max(max(max((max(100vw - 60px, 1px) - 16px) / 2, 50px), 1px), 1px)"
                            srcSet="/assets/a81aef47088f07b8.png 771w, /assets/2b301ea654ac561c.png 1500w"
                            src="/assets/2b301ea654ac561c.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </Reveal>
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
                            {t("Mastering Framer For Faster Website Launches")}
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
                            {t(
                              "Launch premium websites with efficient Framer workflows.",
                            )}
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
                          {t("SEP 15, 2026")}
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
                            width="1500"
                            height="1991"
                            sizes="(min-width: 1200px) max(max(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px), 1px), calc(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px) * 0.7)), (max-width: 767.98px) max(max(100vw - 40px, 1px), 1px), (min-width: 768px) and (max-width: 1199.98px) max(max(max((max(100vw - 60px, 1px) - 16px) / 2, 50px), 1px), 1px)"
                            srcSet="/assets/a81aef47088f07b8.png 771w, /assets/2b301ea654ac561c.png 1500w"
                            src="/assets/2b301ea654ac561c.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <Reveal
                        className="framer-1o9ixez"
                        data-framer-name="Layer"
                        style={referenceStyles.s47ade10003}
                        as="div"
                        from="none"
                      ></Reveal>
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
                            {t("Mastering Framer For Faster Website Launches")}
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
                            {t(
                              "Launch premium websites with efficient Framer workflows.",
                            )}
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
                          {t("SEP 15, 2026")}
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
                            width="1500"
                            height="1991"
                            sizes="(min-width: 1200px) max(max(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px), 1px), calc(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px) * 0.7)), (max-width: 767.98px) max(max(100vw - 40px, 1px), 1px), (min-width: 768px) and (max-width: 1199.98px) max(max(max((max(100vw - 60px, 1px) - 16px) / 2, 50px), 1px), 1px)"
                            srcSet="/assets/a81aef47088f07b8.png 771w, /assets/2b301ea654ac561c.png 1500w"
                            src="/assets/2b301ea654ac561c.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <Reveal
                        className="framer-1o9ixez"
                        data-framer-name="Layer"
                        style={referenceStyles.s47ade10003}
                        as="div"
                        from="none"
                      ></Reveal>
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
                            {t("Mastering Framer For Faster Website Launches")}
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
                            {t(
                              "Launch premium websites with efficient Framer workflows.",
                            )}
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
                          {t("SEP 15, 2026")}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </Link>
            <Link
              className="framer-1hpua4g framer-1s1vr5q"
              href={href(
                "/blog/creating-scalable-design-systems-with-confidence",
              )}
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
                            width="1500"
                            height="1500"
                            sizes="(min-width: 1200px) max(max(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px), 1px), calc(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px) * 0.7)), (max-width: 767.98px) max(max(100vw - 40px, 1px), 1px), (min-width: 768px) and (max-width: 1199.98px) max(max(max((max(100vw - 60px, 1px) - 16px) / 2, 50px), 1px), 1px)"
                            srcSet="/assets/a7cd10814999aa63.png 512w, /assets/25f1bd4d2e9d60aa.png 1024w, /assets/d7e288e78a7395d1.png 1500w"
                            src="/assets/d7e288e78a7395d1.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <Reveal
                        className="framer-1o9ixez"
                        data-framer-name="Layer"
                        style={referenceStyles.s47ade10003}
                        as="div"
                        from="none"
                      ></Reveal>
                      <Reveal
                        className="framer-1jl6no1"
                        style={referenceStyles.s6e17375e26}
                        as="div"
                        from="none"
                      >
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            width="1500"
                            height="1500"
                            sizes="(min-width: 1200px) max(max(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px), 1px), calc(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px) * 0.7)), (max-width: 767.98px) max(max(100vw - 40px, 1px), 1px), (min-width: 768px) and (max-width: 1199.98px) max(max(max((max(100vw - 60px, 1px) - 16px) / 2, 50px), 1px), 1px)"
                            srcSet="/assets/a7cd10814999aa63.png 512w, /assets/25f1bd4d2e9d60aa.png 1024w, /assets/d7e288e78a7395d1.png 1500w"
                            src="/assets/d7e288e78a7395d1.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </Reveal>
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
                            {t(
                              "Creating Scalable Design Systems With Confidence",
                            )}
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
                            {t(
                              "Design consistent products that scale with growth.",
                            )}
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
                          {t("SEP 10, 2026")}
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
                            width="1500"
                            height="1500"
                            sizes="(min-width: 1200px) max(max(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px), 1px), calc(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px) * 0.7)), (max-width: 767.98px) max(max(100vw - 40px, 1px), 1px), (min-width: 768px) and (max-width: 1199.98px) max(max(max((max(100vw - 60px, 1px) - 16px) / 2, 50px), 1px), 1px)"
                            srcSet="/assets/a7cd10814999aa63.png 512w, /assets/25f1bd4d2e9d60aa.png 1024w, /assets/d7e288e78a7395d1.png 1500w"
                            src="/assets/d7e288e78a7395d1.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <Reveal
                        className="framer-1o9ixez"
                        data-framer-name="Layer"
                        style={referenceStyles.s47ade10003}
                        as="div"
                        from="none"
                      ></Reveal>
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
                            {t(
                              "Creating Scalable Design Systems With Confidence",
                            )}
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
                            {t(
                              "Design consistent products that scale with growth.",
                            )}
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
                          {t("SEP 10, 2026")}
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
                            width="1500"
                            height="1500"
                            sizes="(min-width: 1200px) max(max(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px), 1px), calc(max(max((max(100vw - 60px, 1px) - 32px) / 3, 50px), 1px) * 0.7)), (max-width: 767.98px) max(max(100vw - 40px, 1px), 1px), (min-width: 768px) and (max-width: 1199.98px) max(max(max((max(100vw - 60px, 1px) - 16px) / 2, 50px), 1px), 1px)"
                            srcSet="/assets/a7cd10814999aa63.png 512w, /assets/25f1bd4d2e9d60aa.png 1024w, /assets/d7e288e78a7395d1.png 1500w"
                            src="/assets/d7e288e78a7395d1.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <Reveal
                        className="framer-1o9ixez"
                        data-framer-name="Layer"
                        style={referenceStyles.s47ade10003}
                        as="div"
                        from="none"
                      ></Reveal>
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
                            {t(
                              "Creating Scalable Design Systems With Confidence",
                            )}
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
                            {t(
                              "Design consistent products that scale with growth.",
                            )}
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
                          {t("SEP 10, 2026")}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
