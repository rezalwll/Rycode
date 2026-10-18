import { getTranslations } from "@/lib/i18n-server";
import Link from "next/link";
import { Reveal } from "@/components/Motion";
import { referenceStyles } from "@/styles/reference-styles";
export async function WorkWorkSection() {
  const { href, t } = await getTranslations();
  return (
    <section className="framer-10d3fdc" data-framer-name="Work Section">
      <div className="framer-1llhsa3" data-framer-name="Container">
        <div className="framer-hrj0um" data-framer-name="Content">
          <div className="framer-1fqxwy5">
            <Link
              className="framer-1s211g6 framer-z64aky"
              href={href("/work/finance-saas-website")}
            >
              <div className="ssr-variant hidden-z2ghmu hidden-1suspea">
                <Reveal
                  className="framer-1l4ll9g-container"
                  style={referenceStyles.s5916c9ffdd}
                  as="div"
                  from="translateY(200px)"
                >
                  <div
                    className="framer-7wCKM framer-A8dYT framer-OQzud framer-5BqlT framer-1f3fcye framer-v-1f3fcye w-full!"
                    data-framer-name="Variant 1"
                    style={referenceStyles.sbc989dc343}
                  >
                    <div
                      className="framer-1crex6q"
                      data-framer-name="Image"
                      style={referenceStyles.sbc989dc343}
                    >
                      <div
                        className="framer-1qqezkx"
                        style={referenceStyles.s3d15f10c59}
                      >
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            width="1500"
                            height="1130"
                            sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                            srcSet="/assets/c4ece3fc79887f38.png 512w, /assets/1264e45ed8314c48.png 1024w, /assets/5c389cc347701526.png 1500w"
                            src="/assets/5c389cc347701526.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-10vim37"
                        data-framer-name="Layer"
                        style={referenceStyles.s472d7cdf86}
                      ></div>
                    </div>
                    <div
                      className="framer-1oq7wyn"
                      data-framer-name="Title Wrapper"
                      style={referenceStyles.sb9473ab68e}
                    >
                      <div
                        className="framer-18pgrnb"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s17c99b3f1b}
                      >
                        <h2
                          className="framer-text framer-styles-preset-eiwrr4"
                          data-styles-preset="uizb2JBlh"
                          dir="auto"
                          style={referenceStyles.s0b5b49610b}
                        >
                          {t("01")}
                        </h2>
                      </div>
                      <div
                        className="framer-ahnkoi"
                        data-framer-name="Tittle & DEscription"
                      >
                        <div
                          className="framer-52e6s5"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.see41b2de46}
                        >
                          <h3
                            className="framer-text framer-styles-preset-1n8fd82"
                            data-styles-preset="rjlO_9pBI"
                            dir="auto"
                            style={referenceStyles.s014a368608}
                          >
                            {t("Finance SaaS Website")}
                          </h3>
                        </div>
                        <div
                          className="framer-86or56"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3a05f9f9c1}
                        >
                          <p
                            className="framer-text framer-styles-preset-egbnuh"
                            data-styles-preset="X1PtepQgO"
                            dir="auto"
                            style={referenceStyles.s833ee3534c}
                          >
                            {t(
                              "A premium Framer website designed for a modern fintech startup with a focus on trust, speed, and conversion.",
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Reveal
                      className="framer-hrddsa"
                      data-framer-name="Hover"
                      style={referenceStyles.s888a330fb5}
                      as="div"
                      from="none"
                    >
                      <div className="framer-1qyebu1">
                        <div
                          className="framer-170e1mz"
                          style={referenceStyles.sbc989dc343}
                        >
                          <div
                            data-framer-background-image-wrapper="true"
                            style={referenceStyles.s8a54025f8d}
                          >
                            <img
                              decoding="async"
                              loading="lazy"
                              width="1500"
                              height="1130"
                              sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                              srcSet="/assets/c4ece3fc79887f38.png 512w, /assets/1264e45ed8314c48.png 1024w, /assets/5c389cc347701526.png 1500w"
                              src="/assets/5c389cc347701526.png"
                              alt={t("Image")}
                              className="w-full! h-full!"
                              style={referenceStyles.s258149b79d}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-6aujbd"
                          data-framer-name="Layer"
                          style={referenceStyles.se1fb606277}
                        ></div>
                      </div>
                      <div
                        className="framer-jkza45"
                        data-framer-name="Title Wrapper"
                        style={referenceStyles.s2d22c5c87a}
                      >
                        <div
                          className="framer-16pyk2f"
                          data-framer-name="Tittle & DEscription"
                        >
                          <div
                            className="framer-1e59ee2"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.see41b2de46}
                          >
                            <h3
                              className="framer-text framer-styles-preset-1n8fd82"
                              data-styles-preset="rjlO_9pBI"
                              dir="auto"
                              style={referenceStyles.s014a368608}
                            >
                              {t("Finance SaaS Website")}
                            </h3>
                          </div>
                          <div
                            className="framer-p3dpy"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.s3a05f9f9c1}
                          >
                            <p
                              className="framer-text framer-styles-preset-egbnuh"
                              data-styles-preset="X1PtepQgO"
                              dir="auto"
                              style={referenceStyles.s833ee3534c}
                            >
                              {t(
                                "A premium Framer website designed for a modern fintech startup with a focus on trust, speed, and conversion.",
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </Reveal>
              </div>
              <div className="ssr-variant hidden-3tl24i hidden-1suspea">
                <Reveal
                  className="framer-1l4ll9g-container"
                  style={referenceStyles.s5916c9ffdd}
                  as="div"
                  from="translateY(200px)"
                >
                  <div
                    className="framer-7wCKM framer-A8dYT framer-OQzud framer-5BqlT framer-1f3fcye framer-v-x5bm98 w-full!"
                    data-framer-name="Variant 4"
                    style={referenceStyles.sbc989dc343}
                  >
                    <div
                      className="framer-1crex6q"
                      data-framer-name="Image"
                      style={referenceStyles.sbc989dc343}
                    >
                      <div
                        className="framer-1qqezkx"
                        style={referenceStyles.s3d15f10c59}
                      >
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            width="1500"
                            height="1130"
                            sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                            srcSet="/assets/c4ece3fc79887f38.png 512w, /assets/1264e45ed8314c48.png 1024w, /assets/5c389cc347701526.png 1500w"
                            src="/assets/5c389cc347701526.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-10vim37"
                        data-framer-name="Layer"
                        style={referenceStyles.s472d7cdf86}
                      ></div>
                    </div>
                    <div
                      className="framer-1oq7wyn"
                      data-framer-name="Title Wrapper"
                      style={referenceStyles.sb9473ab68e}
                    >
                      <div
                        className="framer-18pgrnb"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s17c99b3f1b}
                      >
                        <h2
                          className="framer-text framer-styles-preset-eiwrr4"
                          data-styles-preset="uizb2JBlh"
                          dir="auto"
                          style={referenceStyles.s0b5b49610b}
                        >
                          {t("01")}
                        </h2>
                      </div>
                      <div
                        className="framer-ahnkoi"
                        data-framer-name="Tittle & DEscription"
                      >
                        <div
                          className="framer-52e6s5"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.see41b2de46}
                        >
                          <h3
                            className="framer-text framer-styles-preset-1n8fd82"
                            data-styles-preset="rjlO_9pBI"
                            dir="auto"
                            style={referenceStyles.s014a368608}
                          >
                            {t("Finance SaaS Website")}
                          </h3>
                        </div>
                        <div
                          className="framer-86or56"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3a05f9f9c1}
                        >
                          <p
                            className="framer-text framer-styles-preset-egbnuh"
                            data-styles-preset="X1PtepQgO"
                            dir="auto"
                            style={referenceStyles.s833ee3534c}
                          >
                            {t(
                              "A premium Framer website designed for a modern fintech startup with a focus on trust, speed, and conversion.",
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Reveal
                      className="framer-hrddsa"
                      data-framer-name="Hover"
                      style={referenceStyles.s888a330fb5}
                      as="div"
                      from="none"
                    >
                      <div className="framer-1qyebu1">
                        <div
                          className="framer-170e1mz"
                          style={referenceStyles.sbc989dc343}
                        >
                          <div
                            data-framer-background-image-wrapper="true"
                            style={referenceStyles.s8a54025f8d}
                          >
                            <img
                              decoding="async"
                              loading="lazy"
                              width="1500"
                              height="1130"
                              sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                              srcSet="/assets/c4ece3fc79887f38.png 512w, /assets/1264e45ed8314c48.png 1024w, /assets/5c389cc347701526.png 1500w"
                              src="/assets/5c389cc347701526.png"
                              alt={t("Image")}
                              className="w-full! h-full!"
                              style={referenceStyles.s258149b79d}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-6aujbd"
                          data-framer-name="Layer"
                          style={referenceStyles.se1fb606277}
                        ></div>
                      </div>
                      <div
                        className="framer-jkza45"
                        data-framer-name="Title Wrapper"
                        style={referenceStyles.s2d22c5c87a}
                      >
                        <div
                          className="framer-16pyk2f"
                          data-framer-name="Tittle & DEscription"
                        >
                          <div
                            className="framer-1e59ee2"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.see41b2de46}
                          >
                            <h3
                              className="framer-text framer-styles-preset-1n8fd82"
                              data-styles-preset="rjlO_9pBI"
                              dir="auto"
                              style={referenceStyles.s014a368608}
                            >
                              {t("Finance SaaS Website")}
                            </h3>
                          </div>
                          <div
                            className="framer-p3dpy"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.s3a05f9f9c1}
                          >
                            <p
                              className="framer-text framer-styles-preset-egbnuh"
                              data-styles-preset="X1PtepQgO"
                              dir="auto"
                              style={referenceStyles.s833ee3534c}
                            >
                              {t(
                                "A premium Framer website designed for a modern fintech startup with a focus on trust, speed, and conversion.",
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </Reveal>
              </div>
              <div className="ssr-variant hidden-3tl24i hidden-z2ghmu">
                <Reveal
                  className="framer-1l4ll9g-container"
                  style={referenceStyles.s5916c9ffdd}
                  as="div"
                  from="translateY(200px)"
                >
                  <div
                    className="framer-7wCKM framer-A8dYT framer-OQzud framer-5BqlT framer-1f3fcye framer-v-11fuext w-full!"
                    data-framer-name="Variant 3"
                    style={referenceStyles.sbc989dc343}
                  >
                    <div
                      className="framer-1crex6q"
                      data-framer-name="Image"
                      style={referenceStyles.sbc989dc343}
                    >
                      <div
                        className="framer-1qqezkx"
                        style={referenceStyles.s3d15f10c59}
                      >
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            width="1500"
                            height="1130"
                            sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                            srcSet="/assets/c4ece3fc79887f38.png 512w, /assets/1264e45ed8314c48.png 1024w, /assets/5c389cc347701526.png 1500w"
                            src="/assets/5c389cc347701526.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-10vim37"
                        data-framer-name="Layer"
                        style={referenceStyles.s472d7cdf86}
                      ></div>
                    </div>
                    <div
                      className="framer-1oq7wyn"
                      data-framer-name="Title Wrapper"
                      style={referenceStyles.sb9473ab68e}
                    >
                      <div
                        className="framer-18pgrnb"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s17c99b3f1b}
                      >
                        <h2
                          className="framer-text framer-styles-preset-eiwrr4"
                          data-styles-preset="uizb2JBlh"
                          dir="auto"
                          style={referenceStyles.s0b5b49610b}
                        >
                          {t("01")}
                        </h2>
                      </div>
                      <div
                        className="framer-ahnkoi"
                        data-framer-name="Tittle & DEscription"
                      >
                        <div
                          className="framer-52e6s5"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.see41b2de46}
                        >
                          <h3
                            className="framer-text framer-styles-preset-1n8fd82"
                            data-styles-preset="rjlO_9pBI"
                            dir="auto"
                            style={referenceStyles.s014a368608}
                          >
                            {t("Finance SaaS Website")}
                          </h3>
                        </div>
                        <div
                          className="framer-86or56"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3a05f9f9c1}
                        >
                          <p
                            className="framer-text framer-styles-preset-egbnuh"
                            data-styles-preset="X1PtepQgO"
                            dir="auto"
                            style={referenceStyles.s833ee3534c}
                          >
                            {t(
                              "A premium Framer website designed for a modern fintech startup with a focus on trust, speed, and conversion.",
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Reveal
                      className="framer-hrddsa"
                      data-framer-name="Hover"
                      style={referenceStyles.s888a330fb5}
                      as="div"
                      from="none"
                    >
                      <div className="framer-1qyebu1">
                        <div
                          className="framer-170e1mz"
                          style={referenceStyles.sbc989dc343}
                        >
                          <div
                            data-framer-background-image-wrapper="true"
                            style={referenceStyles.s8a54025f8d}
                          >
                            <img
                              decoding="async"
                              loading="lazy"
                              width="1500"
                              height="1130"
                              sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                              srcSet="/assets/c4ece3fc79887f38.png 512w, /assets/1264e45ed8314c48.png 1024w, /assets/5c389cc347701526.png 1500w"
                              src="/assets/5c389cc347701526.png"
                              alt={t("Image")}
                              className="w-full! h-full!"
                              style={referenceStyles.s258149b79d}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-6aujbd"
                          data-framer-name="Layer"
                          style={referenceStyles.se1fb606277}
                        ></div>
                      </div>
                      <div
                        className="framer-jkza45"
                        data-framer-name="Title Wrapper"
                        style={referenceStyles.s2d22c5c87a}
                      >
                        <div
                          className="framer-16pyk2f"
                          data-framer-name="Tittle & DEscription"
                        >
                          <div
                            className="framer-1e59ee2"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.see41b2de46}
                          >
                            <h3
                              className="framer-text framer-styles-preset-1n8fd82"
                              data-styles-preset="rjlO_9pBI"
                              dir="auto"
                              style={referenceStyles.s014a368608}
                            >
                              {t("Finance SaaS Website")}
                            </h3>
                          </div>
                          <div
                            className="framer-p3dpy"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.s3a05f9f9c1}
                          >
                            <p
                              className="framer-text framer-styles-preset-egbnuh"
                              data-styles-preset="X1PtepQgO"
                              dir="auto"
                              style={referenceStyles.s833ee3534c}
                            >
                              {t(
                                "A premium Framer website designed for a modern fintech startup with a focus on trust, speed, and conversion.",
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </Reveal>
              </div>
            </Link>
            <Link
              className="framer-1s211g6 framer-z64aky"
              href={href("/work/ai-automation-platform")}
            >
              <div className="ssr-variant hidden-z2ghmu hidden-1suspea">
                <Reveal
                  className="framer-1l4ll9g-container"
                  style={referenceStyles.s5916c9ffdd}
                  as="div"
                  from="translateY(200px)"
                >
                  <div
                    className="framer-7wCKM framer-A8dYT framer-OQzud framer-5BqlT framer-1f3fcye framer-v-1f3fcye w-full!"
                    data-framer-name="Variant 1"
                    style={referenceStyles.sbc989dc343}
                  >
                    <div
                      className="framer-1crex6q"
                      data-framer-name="Image"
                      style={referenceStyles.sbc989dc343}
                    >
                      <div
                        className="framer-1qqezkx"
                        style={referenceStyles.s3d15f10c59}
                      >
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            width="1200"
                            height="1200"
                            sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                            srcSet="/assets/6e3bd1574d35b3ad.png 512w, /assets/f12edc0fa176090e.png 1024w, /assets/c055dfbc646842dc.png 1200w"
                            src="/assets/c055dfbc646842dc.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-10vim37"
                        data-framer-name="Layer"
                        style={referenceStyles.s472d7cdf86}
                      ></div>
                    </div>
                    <div
                      className="framer-1oq7wyn"
                      data-framer-name="Title Wrapper"
                      style={referenceStyles.sb9473ab68e}
                    >
                      <div
                        className="framer-18pgrnb"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s17c99b3f1b}
                      >
                        <h2
                          className="framer-text framer-styles-preset-eiwrr4"
                          data-styles-preset="uizb2JBlh"
                          dir="auto"
                          style={referenceStyles.s0b5b49610b}
                        >
                          {t("02")}
                        </h2>
                      </div>
                      <div
                        className="framer-ahnkoi"
                        data-framer-name="Tittle & DEscription"
                      >
                        <div
                          className="framer-52e6s5"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.see41b2de46}
                        >
                          <h3
                            className="framer-text framer-styles-preset-1n8fd82"
                            data-styles-preset="rjlO_9pBI"
                            dir="auto"
                            style={referenceStyles.s014a368608}
                          >
                            {t("AI Automation Platform")}
                          </h3>
                        </div>
                        <div
                          className="framer-86or56"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3a05f9f9c1}
                        >
                          <p
                            className="framer-text framer-styles-preset-egbnuh"
                            data-styles-preset="X1PtepQgO"
                            dir="auto"
                            style={referenceStyles.s833ee3534c}
                          >
                            {t(
                              "A scalable product website built to simplify complex AI solutions through clear storytelling and intuitive design.",
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Reveal
                      className="framer-hrddsa"
                      data-framer-name="Hover"
                      style={referenceStyles.s888a330fb5}
                      as="div"
                      from="none"
                    >
                      <div className="framer-1qyebu1">
                        <div
                          className="framer-170e1mz"
                          style={referenceStyles.sbc989dc343}
                        >
                          <div
                            data-framer-background-image-wrapper="true"
                            style={referenceStyles.s8a54025f8d}
                          >
                            <img
                              decoding="async"
                              loading="lazy"
                              width="1200"
                              height="1200"
                              sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                              srcSet="/assets/6e3bd1574d35b3ad.png 512w, /assets/f12edc0fa176090e.png 1024w, /assets/c055dfbc646842dc.png 1200w"
                              src="/assets/c055dfbc646842dc.png"
                              alt={t("Image")}
                              className="w-full! h-full!"
                              style={referenceStyles.s258149b79d}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-6aujbd"
                          data-framer-name="Layer"
                          style={referenceStyles.se1fb606277}
                        ></div>
                      </div>
                      <div
                        className="framer-jkza45"
                        data-framer-name="Title Wrapper"
                        style={referenceStyles.s2d22c5c87a}
                      >
                        <div
                          className="framer-16pyk2f"
                          data-framer-name="Tittle & DEscription"
                        >
                          <div
                            className="framer-1e59ee2"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.see41b2de46}
                          >
                            <h3
                              className="framer-text framer-styles-preset-1n8fd82"
                              data-styles-preset="rjlO_9pBI"
                              dir="auto"
                              style={referenceStyles.s014a368608}
                            >
                              {t("AI Automation Platform")}
                            </h3>
                          </div>
                          <div
                            className="framer-p3dpy"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.s3a05f9f9c1}
                          >
                            <p
                              className="framer-text framer-styles-preset-egbnuh"
                              data-styles-preset="X1PtepQgO"
                              dir="auto"
                              style={referenceStyles.s833ee3534c}
                            >
                              {t(
                                "A scalable product website built to simplify complex AI solutions through clear storytelling and intuitive design.",
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </Reveal>
              </div>
              <div className="ssr-variant hidden-3tl24i hidden-1suspea">
                <Reveal
                  className="framer-1l4ll9g-container"
                  style={referenceStyles.s5916c9ffdd}
                  as="div"
                  from="translateY(200px)"
                >
                  <div
                    className="framer-7wCKM framer-A8dYT framer-OQzud framer-5BqlT framer-1f3fcye framer-v-x5bm98 w-full!"
                    data-framer-name="Variant 4"
                    style={referenceStyles.sbc989dc343}
                  >
                    <div
                      className="framer-1crex6q"
                      data-framer-name="Image"
                      style={referenceStyles.sbc989dc343}
                    >
                      <div
                        className="framer-1qqezkx"
                        style={referenceStyles.s3d15f10c59}
                      >
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            width="1200"
                            height="1200"
                            sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                            srcSet="/assets/6e3bd1574d35b3ad.png 512w, /assets/f12edc0fa176090e.png 1024w, /assets/c055dfbc646842dc.png 1200w"
                            src="/assets/c055dfbc646842dc.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-10vim37"
                        data-framer-name="Layer"
                        style={referenceStyles.s472d7cdf86}
                      ></div>
                    </div>
                    <div
                      className="framer-1oq7wyn"
                      data-framer-name="Title Wrapper"
                      style={referenceStyles.sb9473ab68e}
                    >
                      <div
                        className="framer-18pgrnb"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s17c99b3f1b}
                      >
                        <h2
                          className="framer-text framer-styles-preset-eiwrr4"
                          data-styles-preset="uizb2JBlh"
                          dir="auto"
                          style={referenceStyles.s0b5b49610b}
                        >
                          {t("02")}
                        </h2>
                      </div>
                      <div
                        className="framer-ahnkoi"
                        data-framer-name="Tittle & DEscription"
                      >
                        <div
                          className="framer-52e6s5"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.see41b2de46}
                        >
                          <h3
                            className="framer-text framer-styles-preset-1n8fd82"
                            data-styles-preset="rjlO_9pBI"
                            dir="auto"
                            style={referenceStyles.s014a368608}
                          >
                            {t("AI Automation Platform")}
                          </h3>
                        </div>
                        <div
                          className="framer-86or56"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3a05f9f9c1}
                        >
                          <p
                            className="framer-text framer-styles-preset-egbnuh"
                            data-styles-preset="X1PtepQgO"
                            dir="auto"
                            style={referenceStyles.s833ee3534c}
                          >
                            {t(
                              "A scalable product website built to simplify complex AI solutions through clear storytelling and intuitive design.",
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Reveal
                      className="framer-hrddsa"
                      data-framer-name="Hover"
                      style={referenceStyles.s888a330fb5}
                      as="div"
                      from="none"
                    >
                      <div className="framer-1qyebu1">
                        <div
                          className="framer-170e1mz"
                          style={referenceStyles.sbc989dc343}
                        >
                          <div
                            data-framer-background-image-wrapper="true"
                            style={referenceStyles.s8a54025f8d}
                          >
                            <img
                              decoding="async"
                              loading="lazy"
                              width="1200"
                              height="1200"
                              sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                              srcSet="/assets/6e3bd1574d35b3ad.png 512w, /assets/f12edc0fa176090e.png 1024w, /assets/c055dfbc646842dc.png 1200w"
                              src="/assets/c055dfbc646842dc.png"
                              alt={t("Image")}
                              className="w-full! h-full!"
                              style={referenceStyles.s258149b79d}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-6aujbd"
                          data-framer-name="Layer"
                          style={referenceStyles.se1fb606277}
                        ></div>
                      </div>
                      <div
                        className="framer-jkza45"
                        data-framer-name="Title Wrapper"
                        style={referenceStyles.s2d22c5c87a}
                      >
                        <div
                          className="framer-16pyk2f"
                          data-framer-name="Tittle & DEscription"
                        >
                          <div
                            className="framer-1e59ee2"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.see41b2de46}
                          >
                            <h3
                              className="framer-text framer-styles-preset-1n8fd82"
                              data-styles-preset="rjlO_9pBI"
                              dir="auto"
                              style={referenceStyles.s014a368608}
                            >
                              {t("AI Automation Platform")}
                            </h3>
                          </div>
                          <div
                            className="framer-p3dpy"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.s3a05f9f9c1}
                          >
                            <p
                              className="framer-text framer-styles-preset-egbnuh"
                              data-styles-preset="X1PtepQgO"
                              dir="auto"
                              style={referenceStyles.s833ee3534c}
                            >
                              {t(
                                "A scalable product website built to simplify complex AI solutions through clear storytelling and intuitive design.",
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </Reveal>
              </div>
              <div className="ssr-variant hidden-3tl24i hidden-z2ghmu">
                <Reveal
                  className="framer-1l4ll9g-container"
                  style={referenceStyles.s5916c9ffdd}
                  as="div"
                  from="translateY(200px)"
                >
                  <div
                    className="framer-7wCKM framer-A8dYT framer-OQzud framer-5BqlT framer-1f3fcye framer-v-11fuext w-full!"
                    data-framer-name="Variant 3"
                    style={referenceStyles.sbc989dc343}
                  >
                    <div
                      className="framer-1crex6q"
                      data-framer-name="Image"
                      style={referenceStyles.sbc989dc343}
                    >
                      <div
                        className="framer-1qqezkx"
                        style={referenceStyles.s3d15f10c59}
                      >
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            width="1200"
                            height="1200"
                            sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                            srcSet="/assets/6e3bd1574d35b3ad.png 512w, /assets/f12edc0fa176090e.png 1024w, /assets/c055dfbc646842dc.png 1200w"
                            src="/assets/c055dfbc646842dc.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-10vim37"
                        data-framer-name="Layer"
                        style={referenceStyles.s472d7cdf86}
                      ></div>
                    </div>
                    <div
                      className="framer-1oq7wyn"
                      data-framer-name="Title Wrapper"
                      style={referenceStyles.sb9473ab68e}
                    >
                      <div
                        className="framer-18pgrnb"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s17c99b3f1b}
                      >
                        <h2
                          className="framer-text framer-styles-preset-eiwrr4"
                          data-styles-preset="uizb2JBlh"
                          dir="auto"
                          style={referenceStyles.s0b5b49610b}
                        >
                          {t("02")}
                        </h2>
                      </div>
                      <div
                        className="framer-ahnkoi"
                        data-framer-name="Tittle & DEscription"
                      >
                        <div
                          className="framer-52e6s5"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.see41b2de46}
                        >
                          <h3
                            className="framer-text framer-styles-preset-1n8fd82"
                            data-styles-preset="rjlO_9pBI"
                            dir="auto"
                            style={referenceStyles.s014a368608}
                          >
                            {t("AI Automation Platform")}
                          </h3>
                        </div>
                        <div
                          className="framer-86or56"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3a05f9f9c1}
                        >
                          <p
                            className="framer-text framer-styles-preset-egbnuh"
                            data-styles-preset="X1PtepQgO"
                            dir="auto"
                            style={referenceStyles.s833ee3534c}
                          >
                            {t(
                              "A scalable product website built to simplify complex AI solutions through clear storytelling and intuitive design.",
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Reveal
                      className="framer-hrddsa"
                      data-framer-name="Hover"
                      style={referenceStyles.s888a330fb5}
                      as="div"
                      from="none"
                    >
                      <div className="framer-1qyebu1">
                        <div
                          className="framer-170e1mz"
                          style={referenceStyles.sbc989dc343}
                        >
                          <div
                            data-framer-background-image-wrapper="true"
                            style={referenceStyles.s8a54025f8d}
                          >
                            <img
                              decoding="async"
                              loading="lazy"
                              width="1200"
                              height="1200"
                              sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                              srcSet="/assets/6e3bd1574d35b3ad.png 512w, /assets/f12edc0fa176090e.png 1024w, /assets/c055dfbc646842dc.png 1200w"
                              src="/assets/c055dfbc646842dc.png"
                              alt={t("Image")}
                              className="w-full! h-full!"
                              style={referenceStyles.s258149b79d}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-6aujbd"
                          data-framer-name="Layer"
                          style={referenceStyles.se1fb606277}
                        ></div>
                      </div>
                      <div
                        className="framer-jkza45"
                        data-framer-name="Title Wrapper"
                        style={referenceStyles.s2d22c5c87a}
                      >
                        <div
                          className="framer-16pyk2f"
                          data-framer-name="Tittle & DEscription"
                        >
                          <div
                            className="framer-1e59ee2"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.see41b2de46}
                          >
                            <h3
                              className="framer-text framer-styles-preset-1n8fd82"
                              data-styles-preset="rjlO_9pBI"
                              dir="auto"
                              style={referenceStyles.s014a368608}
                            >
                              {t("AI Automation Platform")}
                            </h3>
                          </div>
                          <div
                            className="framer-p3dpy"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.s3a05f9f9c1}
                          >
                            <p
                              className="framer-text framer-styles-preset-egbnuh"
                              data-styles-preset="X1PtepQgO"
                              dir="auto"
                              style={referenceStyles.s833ee3534c}
                            >
                              {t(
                                "A scalable product website built to simplify complex AI solutions through clear storytelling and intuitive design.",
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </Reveal>
              </div>
            </Link>
            <Link
              className="framer-1s211g6 framer-z64aky"
              href={href("/work/fashion-ecommerce")}
            >
              <div className="ssr-variant hidden-z2ghmu hidden-1suspea">
                <Reveal
                  className="framer-1l4ll9g-container"
                  style={referenceStyles.s5916c9ffdd}
                  as="div"
                  from="translateY(200px)"
                >
                  <div
                    className="framer-7wCKM framer-A8dYT framer-OQzud framer-5BqlT framer-1f3fcye framer-v-1f3fcye w-full!"
                    data-framer-name="Variant 1"
                    style={referenceStyles.sbc989dc343}
                  >
                    <div
                      className="framer-1crex6q"
                      data-framer-name="Image"
                      style={referenceStyles.sbc989dc343}
                    >
                      <div
                        className="framer-1qqezkx"
                        style={referenceStyles.s3d15f10c59}
                      >
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            width="1500"
                            height="841"
                            sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                            srcSet="/assets/d2b0ff9756c92df5.png 512w, /assets/3b929f659b425fd5.png 1024w, /assets/139099262b4af3c7.png 1500w"
                            src="/assets/139099262b4af3c7.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-10vim37"
                        data-framer-name="Layer"
                        style={referenceStyles.s472d7cdf86}
                      ></div>
                    </div>
                    <div
                      className="framer-1oq7wyn"
                      data-framer-name="Title Wrapper"
                      style={referenceStyles.sb9473ab68e}
                    >
                      <div
                        className="framer-18pgrnb"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s17c99b3f1b}
                      >
                        <h2
                          className="framer-text framer-styles-preset-eiwrr4"
                          data-styles-preset="uizb2JBlh"
                          dir="auto"
                          style={referenceStyles.s0b5b49610b}
                        >
                          {t("03")}
                        </h2>
                      </div>
                      <div
                        className="framer-ahnkoi"
                        data-framer-name="Tittle & DEscription"
                      >
                        <div
                          className="framer-52e6s5"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.see41b2de46}
                        >
                          <h3
                            className="framer-text framer-styles-preset-1n8fd82"
                            data-styles-preset="rjlO_9pBI"
                            dir="auto"
                            style={referenceStyles.s014a368608}
                          >
                            {t("Fashion Ecommerce")}
                          </h3>
                        </div>
                        <div
                          className="framer-86or56"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3a05f9f9c1}
                        >
                          <p
                            className="framer-text framer-styles-preset-egbnuh"
                            data-styles-preset="X1PtepQgO"
                            dir="auto"
                            style={referenceStyles.s833ee3534c}
                          >
                            {t(
                              "An editorial shopping experience crafted to showcase premium products with a clean, modern aesthetic.",
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Reveal
                      className="framer-hrddsa"
                      data-framer-name="Hover"
                      style={referenceStyles.s888a330fb5}
                      as="div"
                      from="none"
                    >
                      <div className="framer-1qyebu1">
                        <div
                          className="framer-170e1mz"
                          style={referenceStyles.sbc989dc343}
                        >
                          <div
                            data-framer-background-image-wrapper="true"
                            style={referenceStyles.s8a54025f8d}
                          >
                            <img
                              decoding="async"
                              loading="lazy"
                              width="1500"
                              height="841"
                              sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                              srcSet="/assets/d2b0ff9756c92df5.png 512w, /assets/3b929f659b425fd5.png 1024w, /assets/139099262b4af3c7.png 1500w"
                              src="/assets/139099262b4af3c7.png"
                              alt={t("Image")}
                              className="w-full! h-full!"
                              style={referenceStyles.s258149b79d}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-6aujbd"
                          data-framer-name="Layer"
                          style={referenceStyles.se1fb606277}
                        ></div>
                      </div>
                      <div
                        className="framer-jkza45"
                        data-framer-name="Title Wrapper"
                        style={referenceStyles.s2d22c5c87a}
                      >
                        <div
                          className="framer-16pyk2f"
                          data-framer-name="Tittle & DEscription"
                        >
                          <div
                            className="framer-1e59ee2"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.see41b2de46}
                          >
                            <h3
                              className="framer-text framer-styles-preset-1n8fd82"
                              data-styles-preset="rjlO_9pBI"
                              dir="auto"
                              style={referenceStyles.s014a368608}
                            >
                              {t("Fashion Ecommerce")}
                            </h3>
                          </div>
                          <div
                            className="framer-p3dpy"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.s3a05f9f9c1}
                          >
                            <p
                              className="framer-text framer-styles-preset-egbnuh"
                              data-styles-preset="X1PtepQgO"
                              dir="auto"
                              style={referenceStyles.s833ee3534c}
                            >
                              {t(
                                "An editorial shopping experience crafted to showcase premium products with a clean, modern aesthetic.",
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </Reveal>
              </div>
              <div className="ssr-variant hidden-3tl24i hidden-1suspea">
                <Reveal
                  className="framer-1l4ll9g-container"
                  style={referenceStyles.s5916c9ffdd}
                  as="div"
                  from="translateY(200px)"
                >
                  <div
                    className="framer-7wCKM framer-A8dYT framer-OQzud framer-5BqlT framer-1f3fcye framer-v-x5bm98 w-full!"
                    data-framer-name="Variant 4"
                    style={referenceStyles.sbc989dc343}
                  >
                    <div
                      className="framer-1crex6q"
                      data-framer-name="Image"
                      style={referenceStyles.sbc989dc343}
                    >
                      <div
                        className="framer-1qqezkx"
                        style={referenceStyles.s3d15f10c59}
                      >
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            width="1500"
                            height="841"
                            sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                            srcSet="/assets/d2b0ff9756c92df5.png 512w, /assets/3b929f659b425fd5.png 1024w, /assets/139099262b4af3c7.png 1500w"
                            src="/assets/139099262b4af3c7.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-10vim37"
                        data-framer-name="Layer"
                        style={referenceStyles.s472d7cdf86}
                      ></div>
                    </div>
                    <div
                      className="framer-1oq7wyn"
                      data-framer-name="Title Wrapper"
                      style={referenceStyles.sb9473ab68e}
                    >
                      <div
                        className="framer-18pgrnb"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s17c99b3f1b}
                      >
                        <h2
                          className="framer-text framer-styles-preset-eiwrr4"
                          data-styles-preset="uizb2JBlh"
                          dir="auto"
                          style={referenceStyles.s0b5b49610b}
                        >
                          {t("03")}
                        </h2>
                      </div>
                      <div
                        className="framer-ahnkoi"
                        data-framer-name="Tittle & DEscription"
                      >
                        <div
                          className="framer-52e6s5"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.see41b2de46}
                        >
                          <h3
                            className="framer-text framer-styles-preset-1n8fd82"
                            data-styles-preset="rjlO_9pBI"
                            dir="auto"
                            style={referenceStyles.s014a368608}
                          >
                            {t("Fashion Ecommerce")}
                          </h3>
                        </div>
                        <div
                          className="framer-86or56"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3a05f9f9c1}
                        >
                          <p
                            className="framer-text framer-styles-preset-egbnuh"
                            data-styles-preset="X1PtepQgO"
                            dir="auto"
                            style={referenceStyles.s833ee3534c}
                          >
                            {t(
                              "An editorial shopping experience crafted to showcase premium products with a clean, modern aesthetic.",
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Reveal
                      className="framer-hrddsa"
                      data-framer-name="Hover"
                      style={referenceStyles.s888a330fb5}
                      as="div"
                      from="none"
                    >
                      <div className="framer-1qyebu1">
                        <div
                          className="framer-170e1mz"
                          style={referenceStyles.sbc989dc343}
                        >
                          <div
                            data-framer-background-image-wrapper="true"
                            style={referenceStyles.s8a54025f8d}
                          >
                            <img
                              decoding="async"
                              loading="lazy"
                              width="1500"
                              height="841"
                              sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                              srcSet="/assets/d2b0ff9756c92df5.png 512w, /assets/3b929f659b425fd5.png 1024w, /assets/139099262b4af3c7.png 1500w"
                              src="/assets/139099262b4af3c7.png"
                              alt={t("Image")}
                              className="w-full! h-full!"
                              style={referenceStyles.s258149b79d}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-6aujbd"
                          data-framer-name="Layer"
                          style={referenceStyles.se1fb606277}
                        ></div>
                      </div>
                      <div
                        className="framer-jkza45"
                        data-framer-name="Title Wrapper"
                        style={referenceStyles.s2d22c5c87a}
                      >
                        <div
                          className="framer-16pyk2f"
                          data-framer-name="Tittle & DEscription"
                        >
                          <div
                            className="framer-1e59ee2"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.see41b2de46}
                          >
                            <h3
                              className="framer-text framer-styles-preset-1n8fd82"
                              data-styles-preset="rjlO_9pBI"
                              dir="auto"
                              style={referenceStyles.s014a368608}
                            >
                              {t("Fashion Ecommerce")}
                            </h3>
                          </div>
                          <div
                            className="framer-p3dpy"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.s3a05f9f9c1}
                          >
                            <p
                              className="framer-text framer-styles-preset-egbnuh"
                              data-styles-preset="X1PtepQgO"
                              dir="auto"
                              style={referenceStyles.s833ee3534c}
                            >
                              {t(
                                "An editorial shopping experience crafted to showcase premium products with a clean, modern aesthetic.",
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </Reveal>
              </div>
              <div className="ssr-variant hidden-3tl24i hidden-z2ghmu">
                <Reveal
                  className="framer-1l4ll9g-container"
                  style={referenceStyles.s5916c9ffdd}
                  as="div"
                  from="translateY(200px)"
                >
                  <div
                    className="framer-7wCKM framer-A8dYT framer-OQzud framer-5BqlT framer-1f3fcye framer-v-11fuext w-full!"
                    data-framer-name="Variant 3"
                    style={referenceStyles.sbc989dc343}
                  >
                    <div
                      className="framer-1crex6q"
                      data-framer-name="Image"
                      style={referenceStyles.sbc989dc343}
                    >
                      <div
                        className="framer-1qqezkx"
                        style={referenceStyles.s3d15f10c59}
                      >
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            width="1500"
                            height="841"
                            sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                            srcSet="/assets/d2b0ff9756c92df5.png 512w, /assets/3b929f659b425fd5.png 1024w, /assets/139099262b4af3c7.png 1500w"
                            src="/assets/139099262b4af3c7.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-10vim37"
                        data-framer-name="Layer"
                        style={referenceStyles.s472d7cdf86}
                      ></div>
                    </div>
                    <div
                      className="framer-1oq7wyn"
                      data-framer-name="Title Wrapper"
                      style={referenceStyles.sb9473ab68e}
                    >
                      <div
                        className="framer-18pgrnb"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s17c99b3f1b}
                      >
                        <h2
                          className="framer-text framer-styles-preset-eiwrr4"
                          data-styles-preset="uizb2JBlh"
                          dir="auto"
                          style={referenceStyles.s0b5b49610b}
                        >
                          {t("03")}
                        </h2>
                      </div>
                      <div
                        className="framer-ahnkoi"
                        data-framer-name="Tittle & DEscription"
                      >
                        <div
                          className="framer-52e6s5"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.see41b2de46}
                        >
                          <h3
                            className="framer-text framer-styles-preset-1n8fd82"
                            data-styles-preset="rjlO_9pBI"
                            dir="auto"
                            style={referenceStyles.s014a368608}
                          >
                            {t("Fashion Ecommerce")}
                          </h3>
                        </div>
                        <div
                          className="framer-86or56"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3a05f9f9c1}
                        >
                          <p
                            className="framer-text framer-styles-preset-egbnuh"
                            data-styles-preset="X1PtepQgO"
                            dir="auto"
                            style={referenceStyles.s833ee3534c}
                          >
                            {t(
                              "An editorial shopping experience crafted to showcase premium products with a clean, modern aesthetic.",
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Reveal
                      className="framer-hrddsa"
                      data-framer-name="Hover"
                      style={referenceStyles.s888a330fb5}
                      as="div"
                      from="none"
                    >
                      <div className="framer-1qyebu1">
                        <div
                          className="framer-170e1mz"
                          style={referenceStyles.sbc989dc343}
                        >
                          <div
                            data-framer-background-image-wrapper="true"
                            style={referenceStyles.s8a54025f8d}
                          >
                            <img
                              decoding="async"
                              loading="lazy"
                              width="1500"
                              height="841"
                              sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                              srcSet="/assets/d2b0ff9756c92df5.png 512w, /assets/3b929f659b425fd5.png 1024w, /assets/139099262b4af3c7.png 1500w"
                              src="/assets/139099262b4af3c7.png"
                              alt={t("Image")}
                              className="w-full! h-full!"
                              style={referenceStyles.s258149b79d}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-6aujbd"
                          data-framer-name="Layer"
                          style={referenceStyles.se1fb606277}
                        ></div>
                      </div>
                      <div
                        className="framer-jkza45"
                        data-framer-name="Title Wrapper"
                        style={referenceStyles.s2d22c5c87a}
                      >
                        <div
                          className="framer-16pyk2f"
                          data-framer-name="Tittle & DEscription"
                        >
                          <div
                            className="framer-1e59ee2"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.see41b2de46}
                          >
                            <h3
                              className="framer-text framer-styles-preset-1n8fd82"
                              data-styles-preset="rjlO_9pBI"
                              dir="auto"
                              style={referenceStyles.s014a368608}
                            >
                              {t("Fashion Ecommerce")}
                            </h3>
                          </div>
                          <div
                            className="framer-p3dpy"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.s3a05f9f9c1}
                          >
                            <p
                              className="framer-text framer-styles-preset-egbnuh"
                              data-styles-preset="X1PtepQgO"
                              dir="auto"
                              style={referenceStyles.s833ee3534c}
                            >
                              {t(
                                "An editorial shopping experience crafted to showcase premium products with a clean, modern aesthetic.",
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </Reveal>
              </div>
            </Link>
            <Link
              className="framer-1s211g6 framer-z64aky"
              href={href("/work/logistics-company")}
            >
              <div className="ssr-variant hidden-z2ghmu hidden-1suspea">
                <Reveal
                  className="framer-1l4ll9g-container"
                  style={referenceStyles.s5916c9ffdd}
                  as="div"
                  from="translateY(200px)"
                >
                  <div
                    className="framer-7wCKM framer-A8dYT framer-OQzud framer-5BqlT framer-1f3fcye framer-v-1f3fcye w-full!"
                    data-framer-name="Variant 1"
                    style={referenceStyles.sbc989dc343}
                  >
                    <div
                      className="framer-1crex6q"
                      data-framer-name="Image"
                      style={referenceStyles.sbc989dc343}
                    >
                      <div
                        className="framer-1qqezkx"
                        style={referenceStyles.s3d15f10c59}
                      >
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            width="1500"
                            height="841"
                            sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                            srcSet="/assets/d9d680eec294ef15.png 512w, /assets/b5e27e1796452b7d.png 1024w, /assets/9e6a623a95964bcc.png 1500w"
                            src="/assets/9e6a623a95964bcc.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-10vim37"
                        data-framer-name="Layer"
                        style={referenceStyles.s472d7cdf86}
                      ></div>
                    </div>
                    <div
                      className="framer-1oq7wyn"
                      data-framer-name="Title Wrapper"
                      style={referenceStyles.sb9473ab68e}
                    >
                      <div
                        className="framer-18pgrnb"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s17c99b3f1b}
                      >
                        <h2
                          className="framer-text framer-styles-preset-eiwrr4"
                          data-styles-preset="uizb2JBlh"
                          dir="auto"
                          style={referenceStyles.s0b5b49610b}
                        >
                          {t("04")}
                        </h2>
                      </div>
                      <div
                        className="framer-ahnkoi"
                        data-framer-name="Tittle & DEscription"
                      >
                        <div
                          className="framer-52e6s5"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.see41b2de46}
                        >
                          <h3
                            className="framer-text framer-styles-preset-1n8fd82"
                            data-styles-preset="rjlO_9pBI"
                            dir="auto"
                            style={referenceStyles.s014a368608}
                          >
                            {t("Logistics Company")}
                          </h3>
                        </div>
                        <div
                          className="framer-86or56"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3a05f9f9c1}
                        >
                          <p
                            className="framer-text framer-styles-preset-egbnuh"
                            data-styles-preset="X1PtepQgO"
                            dir="auto"
                            style={referenceStyles.s833ee3534c}
                          >
                            {t(
                              "A conversion-focused website helping logistics businesses build credibility and attract enterprise clients.",
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Reveal
                      className="framer-hrddsa"
                      data-framer-name="Hover"
                      style={referenceStyles.s888a330fb5}
                      as="div"
                      from="none"
                    >
                      <div className="framer-1qyebu1">
                        <div
                          className="framer-170e1mz"
                          style={referenceStyles.sbc989dc343}
                        >
                          <div
                            data-framer-background-image-wrapper="true"
                            style={referenceStyles.s8a54025f8d}
                          >
                            <img
                              decoding="async"
                              loading="lazy"
                              width="1500"
                              height="841"
                              sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                              srcSet="/assets/d9d680eec294ef15.png 512w, /assets/b5e27e1796452b7d.png 1024w, /assets/9e6a623a95964bcc.png 1500w"
                              src="/assets/9e6a623a95964bcc.png"
                              alt={t("Image")}
                              className="w-full! h-full!"
                              style={referenceStyles.s258149b79d}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-6aujbd"
                          data-framer-name="Layer"
                          style={referenceStyles.se1fb606277}
                        ></div>
                      </div>
                      <div
                        className="framer-jkza45"
                        data-framer-name="Title Wrapper"
                        style={referenceStyles.s2d22c5c87a}
                      >
                        <div
                          className="framer-16pyk2f"
                          data-framer-name="Tittle & DEscription"
                        >
                          <div
                            className="framer-1e59ee2"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.see41b2de46}
                          >
                            <h3
                              className="framer-text framer-styles-preset-1n8fd82"
                              data-styles-preset="rjlO_9pBI"
                              dir="auto"
                              style={referenceStyles.s014a368608}
                            >
                              {t("Logistics Company")}
                            </h3>
                          </div>
                          <div
                            className="framer-p3dpy"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.s3a05f9f9c1}
                          >
                            <p
                              className="framer-text framer-styles-preset-egbnuh"
                              data-styles-preset="X1PtepQgO"
                              dir="auto"
                              style={referenceStyles.s833ee3534c}
                            >
                              {t(
                                "A conversion-focused website helping logistics businesses build credibility and attract enterprise clients.",
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </Reveal>
              </div>
              <div className="ssr-variant hidden-3tl24i hidden-1suspea">
                <Reveal
                  className="framer-1l4ll9g-container"
                  style={referenceStyles.s5916c9ffdd}
                  as="div"
                  from="translateY(200px)"
                >
                  <div
                    className="framer-7wCKM framer-A8dYT framer-OQzud framer-5BqlT framer-1f3fcye framer-v-x5bm98 w-full!"
                    data-framer-name="Variant 4"
                    style={referenceStyles.sbc989dc343}
                  >
                    <div
                      className="framer-1crex6q"
                      data-framer-name="Image"
                      style={referenceStyles.sbc989dc343}
                    >
                      <div
                        className="framer-1qqezkx"
                        style={referenceStyles.s3d15f10c59}
                      >
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            width="1500"
                            height="841"
                            sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                            srcSet="/assets/d9d680eec294ef15.png 512w, /assets/b5e27e1796452b7d.png 1024w, /assets/9e6a623a95964bcc.png 1500w"
                            src="/assets/9e6a623a95964bcc.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-10vim37"
                        data-framer-name="Layer"
                        style={referenceStyles.s472d7cdf86}
                      ></div>
                    </div>
                    <div
                      className="framer-1oq7wyn"
                      data-framer-name="Title Wrapper"
                      style={referenceStyles.sb9473ab68e}
                    >
                      <div
                        className="framer-18pgrnb"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s17c99b3f1b}
                      >
                        <h2
                          className="framer-text framer-styles-preset-eiwrr4"
                          data-styles-preset="uizb2JBlh"
                          dir="auto"
                          style={referenceStyles.s0b5b49610b}
                        >
                          {t("04")}
                        </h2>
                      </div>
                      <div
                        className="framer-ahnkoi"
                        data-framer-name="Tittle & DEscription"
                      >
                        <div
                          className="framer-52e6s5"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.see41b2de46}
                        >
                          <h3
                            className="framer-text framer-styles-preset-1n8fd82"
                            data-styles-preset="rjlO_9pBI"
                            dir="auto"
                            style={referenceStyles.s014a368608}
                          >
                            {t("Logistics Company")}
                          </h3>
                        </div>
                        <div
                          className="framer-86or56"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3a05f9f9c1}
                        >
                          <p
                            className="framer-text framer-styles-preset-egbnuh"
                            data-styles-preset="X1PtepQgO"
                            dir="auto"
                            style={referenceStyles.s833ee3534c}
                          >
                            {t(
                              "A conversion-focused website helping logistics businesses build credibility and attract enterprise clients.",
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Reveal
                      className="framer-hrddsa"
                      data-framer-name="Hover"
                      style={referenceStyles.s888a330fb5}
                      as="div"
                      from="none"
                    >
                      <div className="framer-1qyebu1">
                        <div
                          className="framer-170e1mz"
                          style={referenceStyles.sbc989dc343}
                        >
                          <div
                            data-framer-background-image-wrapper="true"
                            style={referenceStyles.s8a54025f8d}
                          >
                            <img
                              decoding="async"
                              loading="lazy"
                              width="1500"
                              height="841"
                              sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                              srcSet="/assets/d9d680eec294ef15.png 512w, /assets/b5e27e1796452b7d.png 1024w, /assets/9e6a623a95964bcc.png 1500w"
                              src="/assets/9e6a623a95964bcc.png"
                              alt={t("Image")}
                              className="w-full! h-full!"
                              style={referenceStyles.s258149b79d}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-6aujbd"
                          data-framer-name="Layer"
                          style={referenceStyles.se1fb606277}
                        ></div>
                      </div>
                      <div
                        className="framer-jkza45"
                        data-framer-name="Title Wrapper"
                        style={referenceStyles.s2d22c5c87a}
                      >
                        <div
                          className="framer-16pyk2f"
                          data-framer-name="Tittle & DEscription"
                        >
                          <div
                            className="framer-1e59ee2"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.see41b2de46}
                          >
                            <h3
                              className="framer-text framer-styles-preset-1n8fd82"
                              data-styles-preset="rjlO_9pBI"
                              dir="auto"
                              style={referenceStyles.s014a368608}
                            >
                              {t("Logistics Company")}
                            </h3>
                          </div>
                          <div
                            className="framer-p3dpy"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.s3a05f9f9c1}
                          >
                            <p
                              className="framer-text framer-styles-preset-egbnuh"
                              data-styles-preset="X1PtepQgO"
                              dir="auto"
                              style={referenceStyles.s833ee3534c}
                            >
                              {t(
                                "A conversion-focused website helping logistics businesses build credibility and attract enterprise clients.",
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </Reveal>
              </div>
              <div className="ssr-variant hidden-3tl24i hidden-z2ghmu">
                <Reveal
                  className="framer-1l4ll9g-container"
                  style={referenceStyles.s5916c9ffdd}
                  as="div"
                  from="translateY(200px)"
                >
                  <div
                    className="framer-7wCKM framer-A8dYT framer-OQzud framer-5BqlT framer-1f3fcye framer-v-11fuext w-full!"
                    data-framer-name="Variant 3"
                    style={referenceStyles.sbc989dc343}
                  >
                    <div
                      className="framer-1crex6q"
                      data-framer-name="Image"
                      style={referenceStyles.sbc989dc343}
                    >
                      <div
                        className="framer-1qqezkx"
                        style={referenceStyles.s3d15f10c59}
                      >
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            width="1500"
                            height="841"
                            sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                            srcSet="/assets/d9d680eec294ef15.png 512w, /assets/b5e27e1796452b7d.png 1024w, /assets/9e6a623a95964bcc.png 1500w"
                            src="/assets/9e6a623a95964bcc.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-10vim37"
                        data-framer-name="Layer"
                        style={referenceStyles.s472d7cdf86}
                      ></div>
                    </div>
                    <div
                      className="framer-1oq7wyn"
                      data-framer-name="Title Wrapper"
                      style={referenceStyles.sb9473ab68e}
                    >
                      <div
                        className="framer-18pgrnb"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s17c99b3f1b}
                      >
                        <h2
                          className="framer-text framer-styles-preset-eiwrr4"
                          data-styles-preset="uizb2JBlh"
                          dir="auto"
                          style={referenceStyles.s0b5b49610b}
                        >
                          {t("04")}
                        </h2>
                      </div>
                      <div
                        className="framer-ahnkoi"
                        data-framer-name="Tittle & DEscription"
                      >
                        <div
                          className="framer-52e6s5"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.see41b2de46}
                        >
                          <h3
                            className="framer-text framer-styles-preset-1n8fd82"
                            data-styles-preset="rjlO_9pBI"
                            dir="auto"
                            style={referenceStyles.s014a368608}
                          >
                            {t("Logistics Company")}
                          </h3>
                        </div>
                        <div
                          className="framer-86or56"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3a05f9f9c1}
                        >
                          <p
                            className="framer-text framer-styles-preset-egbnuh"
                            data-styles-preset="X1PtepQgO"
                            dir="auto"
                            style={referenceStyles.s833ee3534c}
                          >
                            {t(
                              "A conversion-focused website helping logistics businesses build credibility and attract enterprise clients.",
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Reveal
                      className="framer-hrddsa"
                      data-framer-name="Hover"
                      style={referenceStyles.s888a330fb5}
                      as="div"
                      from="none"
                    >
                      <div className="framer-1qyebu1">
                        <div
                          className="framer-170e1mz"
                          style={referenceStyles.sbc989dc343}
                        >
                          <div
                            data-framer-background-image-wrapper="true"
                            style={referenceStyles.s8a54025f8d}
                          >
                            <img
                              decoding="async"
                              loading="lazy"
                              width="1500"
                              height="841"
                              sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                              srcSet="/assets/d9d680eec294ef15.png 512w, /assets/b5e27e1796452b7d.png 1024w, /assets/9e6a623a95964bcc.png 1500w"
                              src="/assets/9e6a623a95964bcc.png"
                              alt={t("Image")}
                              className="w-full! h-full!"
                              style={referenceStyles.s258149b79d}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-6aujbd"
                          data-framer-name="Layer"
                          style={referenceStyles.se1fb606277}
                        ></div>
                      </div>
                      <div
                        className="framer-jkza45"
                        data-framer-name="Title Wrapper"
                        style={referenceStyles.s2d22c5c87a}
                      >
                        <div
                          className="framer-16pyk2f"
                          data-framer-name="Tittle & DEscription"
                        >
                          <div
                            className="framer-1e59ee2"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.see41b2de46}
                          >
                            <h3
                              className="framer-text framer-styles-preset-1n8fd82"
                              data-styles-preset="rjlO_9pBI"
                              dir="auto"
                              style={referenceStyles.s014a368608}
                            >
                              {t("Logistics Company")}
                            </h3>
                          </div>
                          <div
                            className="framer-p3dpy"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.s3a05f9f9c1}
                          >
                            <p
                              className="framer-text framer-styles-preset-egbnuh"
                              data-styles-preset="X1PtepQgO"
                              dir="auto"
                              style={referenceStyles.s833ee3534c}
                            >
                              {t(
                                "A conversion-focused website helping logistics businesses build credibility and attract enterprise clients.",
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </Reveal>
              </div>
            </Link>
            <Link
              className="framer-1s211g6 framer-z64aky"
              href={href("/work/creative-agency")}
            >
              <div className="ssr-variant hidden-z2ghmu hidden-1suspea">
                <Reveal
                  className="framer-1l4ll9g-container"
                  style={referenceStyles.s5916c9ffdd}
                  as="div"
                  from="translateY(200px)"
                >
                  <div
                    className="framer-7wCKM framer-A8dYT framer-OQzud framer-5BqlT framer-1f3fcye framer-v-1f3fcye w-full!"
                    data-framer-name="Variant 1"
                    style={referenceStyles.sbc989dc343}
                  >
                    <div
                      className="framer-1crex6q"
                      data-framer-name="Image"
                      style={referenceStyles.sbc989dc343}
                    >
                      <div
                        className="framer-1qqezkx"
                        style={referenceStyles.s3d15f10c59}
                      >
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            width="1500"
                            height="1875"
                            sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                            srcSet="/assets/d55e9eee9ea8cb44.png 819w, /assets/975c8c2047116118.png 1500w"
                            src="/assets/975c8c2047116118.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-10vim37"
                        data-framer-name="Layer"
                        style={referenceStyles.s472d7cdf86}
                      ></div>
                    </div>
                    <div
                      className="framer-1oq7wyn"
                      data-framer-name="Title Wrapper"
                      style={referenceStyles.sb9473ab68e}
                    >
                      <div
                        className="framer-18pgrnb"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s17c99b3f1b}
                      >
                        <h2
                          className="framer-text framer-styles-preset-eiwrr4"
                          data-styles-preset="uizb2JBlh"
                          dir="auto"
                          style={referenceStyles.s0b5b49610b}
                        >
                          {t("05")}
                        </h2>
                      </div>
                      <div
                        className="framer-ahnkoi"
                        data-framer-name="Tittle & DEscription"
                      >
                        <div
                          className="framer-52e6s5"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.see41b2de46}
                        >
                          <h3
                            className="framer-text framer-styles-preset-1n8fd82"
                            data-styles-preset="rjlO_9pBI"
                            dir="auto"
                            style={referenceStyles.s014a368608}
                          >
                            {t("Creative Agency")}
                          </h3>
                        </div>
                        <div
                          className="framer-86or56"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3a05f9f9c1}
                        >
                          <p
                            className="framer-text framer-styles-preset-egbnuh"
                            data-styles-preset="X1PtepQgO"
                            dir="auto"
                            style={referenceStyles.s833ee3534c}
                          >
                            {t(
                              "A bold agency website featuring immersive interactions, smooth animations, and premium visual storytelling.",
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Reveal
                      className="framer-hrddsa"
                      data-framer-name="Hover"
                      style={referenceStyles.s888a330fb5}
                      as="div"
                      from="none"
                    >
                      <div className="framer-1qyebu1">
                        <div
                          className="framer-170e1mz"
                          style={referenceStyles.sbc989dc343}
                        >
                          <div
                            data-framer-background-image-wrapper="true"
                            style={referenceStyles.s8a54025f8d}
                          >
                            <img
                              decoding="async"
                              loading="lazy"
                              width="1500"
                              height="1875"
                              sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                              srcSet="/assets/d55e9eee9ea8cb44.png 819w, /assets/975c8c2047116118.png 1500w"
                              src="/assets/975c8c2047116118.png"
                              alt={t("Image")}
                              className="w-full! h-full!"
                              style={referenceStyles.s258149b79d}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-6aujbd"
                          data-framer-name="Layer"
                          style={referenceStyles.se1fb606277}
                        ></div>
                      </div>
                      <div
                        className="framer-jkza45"
                        data-framer-name="Title Wrapper"
                        style={referenceStyles.s2d22c5c87a}
                      >
                        <div
                          className="framer-16pyk2f"
                          data-framer-name="Tittle & DEscription"
                        >
                          <div
                            className="framer-1e59ee2"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.see41b2de46}
                          >
                            <h3
                              className="framer-text framer-styles-preset-1n8fd82"
                              data-styles-preset="rjlO_9pBI"
                              dir="auto"
                              style={referenceStyles.s014a368608}
                            >
                              {t("Creative Agency")}
                            </h3>
                          </div>
                          <div
                            className="framer-p3dpy"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.s3a05f9f9c1}
                          >
                            <p
                              className="framer-text framer-styles-preset-egbnuh"
                              data-styles-preset="X1PtepQgO"
                              dir="auto"
                              style={referenceStyles.s833ee3534c}
                            >
                              {t(
                                "A bold agency website featuring immersive interactions, smooth animations, and premium visual storytelling.",
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </Reveal>
              </div>
              <div className="ssr-variant hidden-3tl24i hidden-1suspea">
                <Reveal
                  className="framer-1l4ll9g-container"
                  style={referenceStyles.s5916c9ffdd}
                  as="div"
                  from="translateY(200px)"
                >
                  <div
                    className="framer-7wCKM framer-A8dYT framer-OQzud framer-5BqlT framer-1f3fcye framer-v-x5bm98 w-full!"
                    data-framer-name="Variant 4"
                    style={referenceStyles.sbc989dc343}
                  >
                    <div
                      className="framer-1crex6q"
                      data-framer-name="Image"
                      style={referenceStyles.sbc989dc343}
                    >
                      <div
                        className="framer-1qqezkx"
                        style={referenceStyles.s3d15f10c59}
                      >
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            width="1500"
                            height="1875"
                            sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                            srcSet="/assets/d55e9eee9ea8cb44.png 819w, /assets/975c8c2047116118.png 1500w"
                            src="/assets/975c8c2047116118.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-10vim37"
                        data-framer-name="Layer"
                        style={referenceStyles.s472d7cdf86}
                      ></div>
                    </div>
                    <div
                      className="framer-1oq7wyn"
                      data-framer-name="Title Wrapper"
                      style={referenceStyles.sb9473ab68e}
                    >
                      <div
                        className="framer-18pgrnb"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s17c99b3f1b}
                      >
                        <h2
                          className="framer-text framer-styles-preset-eiwrr4"
                          data-styles-preset="uizb2JBlh"
                          dir="auto"
                          style={referenceStyles.s0b5b49610b}
                        >
                          {t("05")}
                        </h2>
                      </div>
                      <div
                        className="framer-ahnkoi"
                        data-framer-name="Tittle & DEscription"
                      >
                        <div
                          className="framer-52e6s5"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.see41b2de46}
                        >
                          <h3
                            className="framer-text framer-styles-preset-1n8fd82"
                            data-styles-preset="rjlO_9pBI"
                            dir="auto"
                            style={referenceStyles.s014a368608}
                          >
                            {t("Creative Agency")}
                          </h3>
                        </div>
                        <div
                          className="framer-86or56"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3a05f9f9c1}
                        >
                          <p
                            className="framer-text framer-styles-preset-egbnuh"
                            data-styles-preset="X1PtepQgO"
                            dir="auto"
                            style={referenceStyles.s833ee3534c}
                          >
                            {t(
                              "A bold agency website featuring immersive interactions, smooth animations, and premium visual storytelling.",
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Reveal
                      className="framer-hrddsa"
                      data-framer-name="Hover"
                      style={referenceStyles.s888a330fb5}
                      as="div"
                      from="none"
                    >
                      <div className="framer-1qyebu1">
                        <div
                          className="framer-170e1mz"
                          style={referenceStyles.sbc989dc343}
                        >
                          <div
                            data-framer-background-image-wrapper="true"
                            style={referenceStyles.s8a54025f8d}
                          >
                            <img
                              decoding="async"
                              loading="lazy"
                              width="1500"
                              height="1875"
                              sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                              srcSet="/assets/d55e9eee9ea8cb44.png 819w, /assets/975c8c2047116118.png 1500w"
                              src="/assets/975c8c2047116118.png"
                              alt={t("Image")}
                              className="w-full! h-full!"
                              style={referenceStyles.s258149b79d}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-6aujbd"
                          data-framer-name="Layer"
                          style={referenceStyles.se1fb606277}
                        ></div>
                      </div>
                      <div
                        className="framer-jkza45"
                        data-framer-name="Title Wrapper"
                        style={referenceStyles.s2d22c5c87a}
                      >
                        <div
                          className="framer-16pyk2f"
                          data-framer-name="Tittle & DEscription"
                        >
                          <div
                            className="framer-1e59ee2"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.see41b2de46}
                          >
                            <h3
                              className="framer-text framer-styles-preset-1n8fd82"
                              data-styles-preset="rjlO_9pBI"
                              dir="auto"
                              style={referenceStyles.s014a368608}
                            >
                              {t("Creative Agency")}
                            </h3>
                          </div>
                          <div
                            className="framer-p3dpy"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.s3a05f9f9c1}
                          >
                            <p
                              className="framer-text framer-styles-preset-egbnuh"
                              data-styles-preset="X1PtepQgO"
                              dir="auto"
                              style={referenceStyles.s833ee3534c}
                            >
                              {t(
                                "A bold agency website featuring immersive interactions, smooth animations, and premium visual storytelling.",
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </Reveal>
              </div>
              <div className="ssr-variant hidden-3tl24i hidden-z2ghmu">
                <Reveal
                  className="framer-1l4ll9g-container"
                  style={referenceStyles.s5916c9ffdd}
                  as="div"
                  from="translateY(200px)"
                >
                  <div
                    className="framer-7wCKM framer-A8dYT framer-OQzud framer-5BqlT framer-1f3fcye framer-v-11fuext w-full!"
                    data-framer-name="Variant 3"
                    style={referenceStyles.sbc989dc343}
                  >
                    <div
                      className="framer-1crex6q"
                      data-framer-name="Image"
                      style={referenceStyles.sbc989dc343}
                    >
                      <div
                        className="framer-1qqezkx"
                        style={referenceStyles.s3d15f10c59}
                      >
                        <div
                          data-framer-background-image-wrapper="true"
                          style={referenceStyles.s8a54025f8d}
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            width="1500"
                            height="1875"
                            sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                            srcSet="/assets/d55e9eee9ea8cb44.png 819w, /assets/975c8c2047116118.png 1500w"
                            src="/assets/975c8c2047116118.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-10vim37"
                        data-framer-name="Layer"
                        style={referenceStyles.s472d7cdf86}
                      ></div>
                    </div>
                    <div
                      className="framer-1oq7wyn"
                      data-framer-name="Title Wrapper"
                      style={referenceStyles.sb9473ab68e}
                    >
                      <div
                        className="framer-18pgrnb"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s17c99b3f1b}
                      >
                        <h2
                          className="framer-text framer-styles-preset-eiwrr4"
                          data-styles-preset="uizb2JBlh"
                          dir="auto"
                          style={referenceStyles.s0b5b49610b}
                        >
                          {t("05")}
                        </h2>
                      </div>
                      <div
                        className="framer-ahnkoi"
                        data-framer-name="Tittle & DEscription"
                      >
                        <div
                          className="framer-52e6s5"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.see41b2de46}
                        >
                          <h3
                            className="framer-text framer-styles-preset-1n8fd82"
                            data-styles-preset="rjlO_9pBI"
                            dir="auto"
                            style={referenceStyles.s014a368608}
                          >
                            {t("Creative Agency")}
                          </h3>
                        </div>
                        <div
                          className="framer-86or56"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3a05f9f9c1}
                        >
                          <p
                            className="framer-text framer-styles-preset-egbnuh"
                            data-styles-preset="X1PtepQgO"
                            dir="auto"
                            style={referenceStyles.s833ee3534c}
                          >
                            {t(
                              "A bold agency website featuring immersive interactions, smooth animations, and premium visual storytelling.",
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Reveal
                      className="framer-hrddsa"
                      data-framer-name="Hover"
                      style={referenceStyles.s888a330fb5}
                      as="div"
                      from="none"
                    >
                      <div className="framer-1qyebu1">
                        <div
                          className="framer-170e1mz"
                          style={referenceStyles.sbc989dc343}
                        >
                          <div
                            data-framer-background-image-wrapper="true"
                            style={referenceStyles.s8a54025f8d}
                          >
                            <img
                              decoding="async"
                              loading="lazy"
                              width="1500"
                              height="1875"
                              sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                              srcSet="/assets/d55e9eee9ea8cb44.png 819w, /assets/975c8c2047116118.png 1500w"
                              src="/assets/975c8c2047116118.png"
                              alt={t("Image")}
                              className="w-full! h-full!"
                              style={referenceStyles.s258149b79d}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-6aujbd"
                          data-framer-name="Layer"
                          style={referenceStyles.se1fb606277}
                        ></div>
                      </div>
                      <div
                        className="framer-jkza45"
                        data-framer-name="Title Wrapper"
                        style={referenceStyles.s2d22c5c87a}
                      >
                        <div
                          className="framer-16pyk2f"
                          data-framer-name="Tittle & DEscription"
                        >
                          <div
                            className="framer-1e59ee2"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.see41b2de46}
                          >
                            <h3
                              className="framer-text framer-styles-preset-1n8fd82"
                              data-styles-preset="rjlO_9pBI"
                              dir="auto"
                              style={referenceStyles.s014a368608}
                            >
                              {t("Creative Agency")}
                            </h3>
                          </div>
                          <div
                            className="framer-p3dpy"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.s3a05f9f9c1}
                          >
                            <p
                              className="framer-text framer-styles-preset-egbnuh"
                              data-styles-preset="X1PtepQgO"
                              dir="auto"
                              style={referenceStyles.s833ee3534c}
                            >
                              {t(
                                "A bold agency website featuring immersive interactions, smooth animations, and premium visual storytelling.",
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </Reveal>
              </div>
            </Link>
            <Link
              className="framer-1s211g6 framer-z64aky"
              href={href("/work/ai-agency-website")}
            >
              <div className="ssr-variant hidden-z2ghmu hidden-1suspea">
                <Reveal
                  className="framer-1l4ll9g-container"
                  style={referenceStyles.s5916c9ffdd}
                  as="div"
                  from="translateY(200px)"
                >
                  <div
                    className="framer-7wCKM framer-A8dYT framer-OQzud framer-5BqlT framer-1f3fcye framer-v-1f3fcye w-full!"
                    data-framer-name="Variant 1"
                    style={referenceStyles.sbc989dc343}
                  >
                    <div
                      className="framer-1crex6q"
                      data-framer-name="Image"
                      style={referenceStyles.sbc989dc343}
                    >
                      <div
                        className="framer-1qqezkx"
                        style={referenceStyles.s3d15f10c59}
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
                            sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                            srcSet="/assets/659b1cd179ced567.png 512w, /assets/035f3a01c541a553.png 1024w, /assets/1f85b9f13658cfe3.png 1500w"
                            src="/assets/1f85b9f13658cfe3.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-10vim37"
                        data-framer-name="Layer"
                        style={referenceStyles.s472d7cdf86}
                      ></div>
                    </div>
                    <div
                      className="framer-1oq7wyn"
                      data-framer-name="Title Wrapper"
                      style={referenceStyles.sb9473ab68e}
                    >
                      <div
                        className="framer-18pgrnb"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s17c99b3f1b}
                      >
                        <h2
                          className="framer-text framer-styles-preset-eiwrr4"
                          data-styles-preset="uizb2JBlh"
                          dir="auto"
                          style={referenceStyles.s0b5b49610b}
                        >
                          {t("06")}
                        </h2>
                      </div>
                      <div
                        className="framer-ahnkoi"
                        data-framer-name="Tittle & DEscription"
                      >
                        <div
                          className="framer-52e6s5"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.see41b2de46}
                        >
                          <h3
                            className="framer-text framer-styles-preset-1n8fd82"
                            data-styles-preset="rjlO_9pBI"
                            dir="auto"
                            style={referenceStyles.s014a368608}
                          >
                            {t("AI Agency Website")}
                          </h3>
                        </div>
                        <div
                          className="framer-86or56"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3a05f9f9c1}
                        >
                          <p
                            className="framer-text framer-styles-preset-egbnuh"
                            data-styles-preset="X1PtepQgO"
                            dir="auto"
                            style={referenceStyles.s833ee3534c}
                          >
                            {t(
                              "A high-converting agency website crafted with premium interactions, clean layouts, and a modern visual identity.",
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Reveal
                      className="framer-hrddsa"
                      data-framer-name="Hover"
                      style={referenceStyles.s888a330fb5}
                      as="div"
                      from="none"
                    >
                      <div className="framer-1qyebu1">
                        <div
                          className="framer-170e1mz"
                          style={referenceStyles.sbc989dc343}
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
                              sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                              srcSet="/assets/659b1cd179ced567.png 512w, /assets/035f3a01c541a553.png 1024w, /assets/1f85b9f13658cfe3.png 1500w"
                              src="/assets/1f85b9f13658cfe3.png"
                              alt={t("Image")}
                              className="w-full! h-full!"
                              style={referenceStyles.s258149b79d}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-6aujbd"
                          data-framer-name="Layer"
                          style={referenceStyles.se1fb606277}
                        ></div>
                      </div>
                      <div
                        className="framer-jkza45"
                        data-framer-name="Title Wrapper"
                        style={referenceStyles.s2d22c5c87a}
                      >
                        <div
                          className="framer-16pyk2f"
                          data-framer-name="Tittle & DEscription"
                        >
                          <div
                            className="framer-1e59ee2"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.see41b2de46}
                          >
                            <h3
                              className="framer-text framer-styles-preset-1n8fd82"
                              data-styles-preset="rjlO_9pBI"
                              dir="auto"
                              style={referenceStyles.s014a368608}
                            >
                              {t("AI Agency Website")}
                            </h3>
                          </div>
                          <div
                            className="framer-p3dpy"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.s3a05f9f9c1}
                          >
                            <p
                              className="framer-text framer-styles-preset-egbnuh"
                              data-styles-preset="X1PtepQgO"
                              dir="auto"
                              style={referenceStyles.s833ee3534c}
                            >
                              {t(
                                "A high-converting agency website crafted with premium interactions, clean layouts, and a modern visual identity.",
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </Reveal>
              </div>
              <div className="ssr-variant hidden-3tl24i hidden-1suspea">
                <Reveal
                  className="framer-1l4ll9g-container"
                  style={referenceStyles.s5916c9ffdd}
                  as="div"
                  from="translateY(200px)"
                >
                  <div
                    className="framer-7wCKM framer-A8dYT framer-OQzud framer-5BqlT framer-1f3fcye framer-v-x5bm98 w-full!"
                    data-framer-name="Variant 4"
                    style={referenceStyles.sbc989dc343}
                  >
                    <div
                      className="framer-1crex6q"
                      data-framer-name="Image"
                      style={referenceStyles.sbc989dc343}
                    >
                      <div
                        className="framer-1qqezkx"
                        style={referenceStyles.s3d15f10c59}
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
                            sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                            srcSet="/assets/659b1cd179ced567.png 512w, /assets/035f3a01c541a553.png 1024w, /assets/1f85b9f13658cfe3.png 1500w"
                            src="/assets/1f85b9f13658cfe3.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-10vim37"
                        data-framer-name="Layer"
                        style={referenceStyles.s472d7cdf86}
                      ></div>
                    </div>
                    <div
                      className="framer-1oq7wyn"
                      data-framer-name="Title Wrapper"
                      style={referenceStyles.sb9473ab68e}
                    >
                      <div
                        className="framer-18pgrnb"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s17c99b3f1b}
                      >
                        <h2
                          className="framer-text framer-styles-preset-eiwrr4"
                          data-styles-preset="uizb2JBlh"
                          dir="auto"
                          style={referenceStyles.s0b5b49610b}
                        >
                          {t("06")}
                        </h2>
                      </div>
                      <div
                        className="framer-ahnkoi"
                        data-framer-name="Tittle & DEscription"
                      >
                        <div
                          className="framer-52e6s5"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.see41b2de46}
                        >
                          <h3
                            className="framer-text framer-styles-preset-1n8fd82"
                            data-styles-preset="rjlO_9pBI"
                            dir="auto"
                            style={referenceStyles.s014a368608}
                          >
                            {t("AI Agency Website")}
                          </h3>
                        </div>
                        <div
                          className="framer-86or56"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3a05f9f9c1}
                        >
                          <p
                            className="framer-text framer-styles-preset-egbnuh"
                            data-styles-preset="X1PtepQgO"
                            dir="auto"
                            style={referenceStyles.s833ee3534c}
                          >
                            {t(
                              "A high-converting agency website crafted with premium interactions, clean layouts, and a modern visual identity.",
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Reveal
                      className="framer-hrddsa"
                      data-framer-name="Hover"
                      style={referenceStyles.s888a330fb5}
                      as="div"
                      from="none"
                    >
                      <div className="framer-1qyebu1">
                        <div
                          className="framer-170e1mz"
                          style={referenceStyles.sbc989dc343}
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
                              sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                              srcSet="/assets/659b1cd179ced567.png 512w, /assets/035f3a01c541a553.png 1024w, /assets/1f85b9f13658cfe3.png 1500w"
                              src="/assets/1f85b9f13658cfe3.png"
                              alt={t("Image")}
                              className="w-full! h-full!"
                              style={referenceStyles.s258149b79d}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-6aujbd"
                          data-framer-name="Layer"
                          style={referenceStyles.se1fb606277}
                        ></div>
                      </div>
                      <div
                        className="framer-jkza45"
                        data-framer-name="Title Wrapper"
                        style={referenceStyles.s2d22c5c87a}
                      >
                        <div
                          className="framer-16pyk2f"
                          data-framer-name="Tittle & DEscription"
                        >
                          <div
                            className="framer-1e59ee2"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.see41b2de46}
                          >
                            <h3
                              className="framer-text framer-styles-preset-1n8fd82"
                              data-styles-preset="rjlO_9pBI"
                              dir="auto"
                              style={referenceStyles.s014a368608}
                            >
                              {t("AI Agency Website")}
                            </h3>
                          </div>
                          <div
                            className="framer-p3dpy"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.s3a05f9f9c1}
                          >
                            <p
                              className="framer-text framer-styles-preset-egbnuh"
                              data-styles-preset="X1PtepQgO"
                              dir="auto"
                              style={referenceStyles.s833ee3534c}
                            >
                              {t(
                                "A high-converting agency website crafted with premium interactions, clean layouts, and a modern visual identity.",
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </Reveal>
              </div>
              <div className="ssr-variant hidden-3tl24i hidden-z2ghmu">
                <Reveal
                  className="framer-1l4ll9g-container"
                  style={referenceStyles.s5916c9ffdd}
                  as="div"
                  from="translateY(200px)"
                >
                  <div
                    className="framer-7wCKM framer-A8dYT framer-OQzud framer-5BqlT framer-1f3fcye framer-v-11fuext w-full!"
                    data-framer-name="Variant 3"
                    style={referenceStyles.sbc989dc343}
                  >
                    <div
                      className="framer-1crex6q"
                      data-framer-name="Image"
                      style={referenceStyles.sbc989dc343}
                    >
                      <div
                        className="framer-1qqezkx"
                        style={referenceStyles.s3d15f10c59}
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
                            sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                            srcSet="/assets/659b1cd179ced567.png 512w, /assets/035f3a01c541a553.png 1024w, /assets/1f85b9f13658cfe3.png 1500w"
                            src="/assets/1f85b9f13658cfe3.png"
                            alt={t("Image")}
                            className="w-full! h-full!"
                            style={referenceStyles.s258149b79d}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-10vim37"
                        data-framer-name="Layer"
                        style={referenceStyles.s472d7cdf86}
                      ></div>
                    </div>
                    <div
                      className="framer-1oq7wyn"
                      data-framer-name="Title Wrapper"
                      style={referenceStyles.sb9473ab68e}
                    >
                      <div
                        className="framer-18pgrnb"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s17c99b3f1b}
                      >
                        <h2
                          className="framer-text framer-styles-preset-eiwrr4"
                          data-styles-preset="uizb2JBlh"
                          dir="auto"
                          style={referenceStyles.s0b5b49610b}
                        >
                          {t("06")}
                        </h2>
                      </div>
                      <div
                        className="framer-ahnkoi"
                        data-framer-name="Tittle & DEscription"
                      >
                        <div
                          className="framer-52e6s5"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.see41b2de46}
                        >
                          <h3
                            className="framer-text framer-styles-preset-1n8fd82"
                            data-styles-preset="rjlO_9pBI"
                            dir="auto"
                            style={referenceStyles.s014a368608}
                          >
                            {t("AI Agency Website")}
                          </h3>
                        </div>
                        <div
                          className="framer-86or56"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s3a05f9f9c1}
                        >
                          <p
                            className="framer-text framer-styles-preset-egbnuh"
                            data-styles-preset="X1PtepQgO"
                            dir="auto"
                            style={referenceStyles.s833ee3534c}
                          >
                            {t(
                              "A high-converting agency website crafted with premium interactions, clean layouts, and a modern visual identity.",
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Reveal
                      className="framer-hrddsa"
                      data-framer-name="Hover"
                      style={referenceStyles.s888a330fb5}
                      as="div"
                      from="none"
                    >
                      <div className="framer-1qyebu1">
                        <div
                          className="framer-170e1mz"
                          style={referenceStyles.sbc989dc343}
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
                              sizes="(min-width: 1200px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px)), (max-width: 767.98px) max(max(min(100vw - 60px, 1120px), 1px), max(max(min(100vw - 60px, 1120px), 1px) * 0.65, 1px)), (min-width: 768px) and (max-width: 1199.98px) max(max(min(max(100vw - 60px, 1px), 1120px), 1px), max(max(min(max(100vw - 60px, 1px), 1120px), 1px) * 0.65, 1px))"
                              srcSet="/assets/659b1cd179ced567.png 512w, /assets/035f3a01c541a553.png 1024w, /assets/1f85b9f13658cfe3.png 1500w"
                              src="/assets/1f85b9f13658cfe3.png"
                              alt={t("Image")}
                              className="w-full! h-full!"
                              style={referenceStyles.s258149b79d}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-6aujbd"
                          data-framer-name="Layer"
                          style={referenceStyles.se1fb606277}
                        ></div>
                      </div>
                      <div
                        className="framer-jkza45"
                        data-framer-name="Title Wrapper"
                        style={referenceStyles.s2d22c5c87a}
                      >
                        <div
                          className="framer-16pyk2f"
                          data-framer-name="Tittle & DEscription"
                        >
                          <div
                            className="framer-1e59ee2"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.see41b2de46}
                          >
                            <h3
                              className="framer-text framer-styles-preset-1n8fd82"
                              data-styles-preset="rjlO_9pBI"
                              dir="auto"
                              style={referenceStyles.s014a368608}
                            >
                              {t("AI Agency Website")}
                            </h3>
                          </div>
                          <div
                            className="framer-p3dpy"
                            data-framer-component-type="RichTextContainer"
                            style={referenceStyles.s3a05f9f9c1}
                          >
                            <p
                              className="framer-text framer-styles-preset-egbnuh"
                              data-styles-preset="X1PtepQgO"
                              dir="auto"
                              style={referenceStyles.s833ee3534c}
                            >
                              {t(
                                "A high-converting agency website crafted with premium interactions, clean layouts, and a modern visual identity.",
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
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
