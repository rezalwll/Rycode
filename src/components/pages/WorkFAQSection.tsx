import { getTranslations } from "@/lib/i18n-server";
import { Reveal, SplitText } from "@/components/Motion";
import {
  AccordionItem,
  AccordionPanel,
  AccordionToggle,
} from "@/components/Accordion";
import { DistortedImage } from "@/components/DistortedImage";
import { referenceStyles } from "@/styles/reference-styles";
export async function WorkFAQSection() {
  const { t, locale } = await getTranslations();
  return (
    <section className="framer-omnlhh" data-framer-name="FAQ Section">
      <div className="framer-1wz7ln" data-framer-name="Container">
        <div className="framer-1dqrbom" data-framer-name="Content">
          <Reveal
            className="framer-sf3nw9"
            data-framer-name="Tag & Title"
            style={referenceStyles.s5916c9ffdd}
            as="div"
            from="translateY(200px)"
          >
            <div className="ssr-variant">
              <div className="framer-1e84rea-container">
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
                      {t("FAQ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="framer-o9j9zv-container"
              data-code-component-plugin-id="84d4c1"
            >
              <div className="ssr-variant hidden-z2ghmu hidden-1suspea">
                <SplitText
                  className="faq-heading w-full!"
                  style={referenceStyles.s74a84b5217}
                  as="h2"
                  scrollLinked={true}
                  localizedText={
                    locale === "fa"
                      ? t("Frequently asked questions.")
                      : undefined
                  }
                >
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"F"}</span>
                    <span style={referenceStyles.s354fe386da}>{"r"}</span>
                    <span style={referenceStyles.s354fe386da}>{"e"}</span>
                    <span style={referenceStyles.s354fe386da}>{"q"}</span>
                    <span style={referenceStyles.s354fe386da}>{"u"}</span>
                    <span style={referenceStyles.s354fe386da}>{"e"}</span>
                    <span style={referenceStyles.s354fe386da}>{"n"}</span>
                    <span style={referenceStyles.s354fe386da}>{"t"}</span>
                    <span style={referenceStyles.s354fe386da}>{"l"}</span>
                    <span style={referenceStyles.s354fe386da}>{"y"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s354fe386da}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"a"}</span>
                    <span style={referenceStyles.s354fe386da}>{"s"}</span>
                    <span style={referenceStyles.s354fe386da}>{"k"}</span>
                    <span style={referenceStyles.s354fe386da}>{"e"}</span>
                    <span style={referenceStyles.s354fe386da}>{"d"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s354fe386da}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"q"}</span>
                    <span style={referenceStyles.s354fe386da}>{"u"}</span>
                    <span style={referenceStyles.s354fe386da}>{"e"}</span>
                    <span style={referenceStyles.s354fe386da}>{"s"}</span>
                    <span style={referenceStyles.s354fe386da}>{"t"}</span>
                    <span style={referenceStyles.s354fe386da}>{"i"}</span>
                    <span style={referenceStyles.s354fe386da}>{"o"}</span>
                    <span style={referenceStyles.s354fe386da}>{"n"}</span>
                    <span style={referenceStyles.s354fe386da}>{"s"}</span>
                    <span style={referenceStyles.s354fe386da}>{"."}</span>
                  </span>
                </SplitText>
              </div>
              <div className="ssr-variant hidden-3tl24i hidden-1suspea">
                <SplitText
                  className="faq-heading w-full!"
                  style={referenceStyles.s199340d136}
                  as="h2"
                  scrollLinked={true}
                  localizedText={
                    locale === "fa"
                      ? t("Frequently asked questions.")
                      : undefined
                  }
                >
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"F"}</span>
                    <span style={referenceStyles.s354fe386da}>{"r"}</span>
                    <span style={referenceStyles.s354fe386da}>{"e"}</span>
                    <span style={referenceStyles.s354fe386da}>{"q"}</span>
                    <span style={referenceStyles.s354fe386da}>{"u"}</span>
                    <span style={referenceStyles.s354fe386da}>{"e"}</span>
                    <span style={referenceStyles.s354fe386da}>{"n"}</span>
                    <span style={referenceStyles.s354fe386da}>{"t"}</span>
                    <span style={referenceStyles.s354fe386da}>{"l"}</span>
                    <span style={referenceStyles.s354fe386da}>{"y"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s354fe386da}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"a"}</span>
                    <span style={referenceStyles.s354fe386da}>{"s"}</span>
                    <span style={referenceStyles.s354fe386da}>{"k"}</span>
                    <span style={referenceStyles.s354fe386da}>{"e"}</span>
                    <span style={referenceStyles.s354fe386da}>{"d"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s354fe386da}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"q"}</span>
                    <span style={referenceStyles.s354fe386da}>{"u"}</span>
                    <span style={referenceStyles.s354fe386da}>{"e"}</span>
                    <span style={referenceStyles.s354fe386da}>{"s"}</span>
                    <span style={referenceStyles.s354fe386da}>{"t"}</span>
                    <span style={referenceStyles.s354fe386da}>{"i"}</span>
                    <span style={referenceStyles.s354fe386da}>{"o"}</span>
                    <span style={referenceStyles.s354fe386da}>{"n"}</span>
                    <span style={referenceStyles.s354fe386da}>{"s"}</span>
                    <span style={referenceStyles.s354fe386da}>{"."}</span>
                  </span>
                </SplitText>
              </div>
              <div className="ssr-variant hidden-3tl24i hidden-z2ghmu">
                <SplitText
                  className="faq-heading w-full!"
                  style={referenceStyles.s78db03cecf}
                  as="h2"
                  scrollLinked={true}
                  localizedText={
                    locale === "fa"
                      ? t("Frequently asked questions.")
                      : undefined
                  }
                >
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"F"}</span>
                    <span style={referenceStyles.s354fe386da}>{"r"}</span>
                    <span style={referenceStyles.s354fe386da}>{"e"}</span>
                    <span style={referenceStyles.s354fe386da}>{"q"}</span>
                    <span style={referenceStyles.s354fe386da}>{"u"}</span>
                    <span style={referenceStyles.s354fe386da}>{"e"}</span>
                    <span style={referenceStyles.s354fe386da}>{"n"}</span>
                    <span style={referenceStyles.s354fe386da}>{"t"}</span>
                    <span style={referenceStyles.s354fe386da}>{"l"}</span>
                    <span style={referenceStyles.s354fe386da}>{"y"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s354fe386da}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"a"}</span>
                    <span style={referenceStyles.s354fe386da}>{"s"}</span>
                    <span style={referenceStyles.s354fe386da}>{"k"}</span>
                    <span style={referenceStyles.s354fe386da}>{"e"}</span>
                    <span style={referenceStyles.s354fe386da}>{"d"}</span>
                  </span>
                  <span style={referenceStyles.s22ed7e0551}>
                    <span style={referenceStyles.s354fe386da}> </span>
                  </span>
                  <span style={referenceStyles.se34a5ceebc}>
                    <span style={referenceStyles.s354fe386da}>{"q"}</span>
                    <span style={referenceStyles.s354fe386da}>{"u"}</span>
                    <span style={referenceStyles.s354fe386da}>{"e"}</span>
                    <span style={referenceStyles.s354fe386da}>{"s"}</span>
                    <span style={referenceStyles.s354fe386da}>{"t"}</span>
                    <span style={referenceStyles.s354fe386da}>{"i"}</span>
                    <span style={referenceStyles.s354fe386da}>{"o"}</span>
                    <span style={referenceStyles.s354fe386da}>{"n"}</span>
                    <span style={referenceStyles.s354fe386da}>{"s"}</span>
                    <span style={referenceStyles.s354fe386da}>{"."}</span>
                  </span>
                </SplitText>
              </div>
            </div>
          </Reveal>
          <div className="framer-1ydijv7" data-framer-name="FAQ & Image">
            <div className="ssr-variant">
              <div className="framer-oxl98l-container">
                <div
                  className="framer-mp02B framer-13ta7p3 framer-v-13ta7p3 w-full!"
                  data-framer-name="Variant 1"
                  style={referenceStyles.s795513cd8f}
                >
                  <Reveal
                    className="framer-wsfvks-container"
                    style={referenceStyles.s2cca167b61}
                    as="div"
                    from="translateY(100px)"
                  >
                    <AccordionItem
                      className="framer-QEDYB framer-CkNQH framer-9qjuV framer-bgq6iw framer-v-bgq6iw w-full!"
                      data-framer-name="Open"
                      data-highlight="true"
                      tabIndex={0}
                      style={referenceStyles.s83ea7f59fc}
                      mode="faq"
                      index={0}
                      initialOpen={true}
                      openClass="framer-v-bgq6iw"
                      closedClass="framer-v-5va5ez"
                    >
                      <div
                        className="framer-k86jas"
                        data-framer-name="Question & Icon"
                      >
                        <div
                          className="framer-163wn5t"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s143c03551f}
                        >
                          <p
                            className="framer-text framer-styles-preset-4un9qc"
                            data-styles-preset="LwB02gzuV"
                            dir="auto"
                            style={referenceStyles.se8682f4ed5}
                          >
                            {t("How long does a typical project take?")}
                          </p>
                        </div>
                        <AccordionToggle
                          className="framer-1mcnny4"
                          data-framer-name="Icon"
                          data-reset="button"
                          style={referenceStyles.s9d13712d7f}
                          label={t("How long does a typical project take?")}
                        >
                          <div
                            className="framer-1okky9a"
                            data-framer-name="Line 2"
                            style={referenceStyles.scfd37f3c43}
                          ></div>
                          <div
                            className="framer-dnf87r"
                            data-framer-name="Line 1"
                            style={referenceStyles.s7338eecb53}
                          ></div>
                        </AccordionToggle>
                      </div>
                      <AccordionPanel
                        className="framer-qq7w8r"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s817e1dddb3}
                      >
                        <p
                          className="framer-text framer-styles-preset-12928c1"
                          data-styles-preset="V0V25Na8R"
                          dir="auto"
                          style={referenceStyles.s4b608901d2}
                        >
                          {t(
                            "Most websites are completed within 2–4 weeks, depending on the project scope, content, and revisions.",
                          )}
                        </p>
                      </AccordionPanel>
                    </AccordionItem>
                  </Reveal>
                  <Reveal
                    className="framer-10t7g72-container"
                    style={referenceStyles.s2cca167b61}
                    as="div"
                    from="translateY(100px)"
                  >
                    <AccordionItem
                      className="framer-QEDYB framer-CkNQH framer-9qjuV framer-bgq6iw framer-v-5va5ez w-full!"
                      data-framer-name="Close"
                      data-highlight="true"
                      tabIndex={0}
                      style={referenceStyles.s83ea7f59fc}
                      mode="faq"
                      index={0}
                      initialOpen={false}
                      openClass="framer-v-bgq6iw"
                      closedClass="framer-v-5va5ez"
                    >
                      <div
                        className="framer-k86jas"
                        data-framer-name="Question & Icon"
                      >
                        <div
                          className="framer-163wn5t"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s143c03551f}
                        >
                          <p
                            className="framer-text framer-styles-preset-4un9qc"
                            data-styles-preset="LwB02gzuV"
                            dir="auto"
                            style={referenceStyles.se8682f4ed5}
                          >
                            {t("Do you provide ongoing support?")}
                          </p>
                        </div>
                        <AccordionToggle
                          className="framer-1mcnny4"
                          data-framer-name="Icon"
                          data-reset="button"
                          style={referenceStyles.s9d13712d7f}
                          label={t("Do you provide ongoing support?")}
                        >
                          <div
                            className="framer-1okky9a"
                            data-framer-name="Line 2"
                            style={referenceStyles.scfd37f3c43}
                          ></div>
                          <div
                            className="framer-dnf87r"
                            data-framer-name="Line 1"
                            style={referenceStyles.sefb4340700}
                          ></div>
                        </AccordionToggle>
                      </div>
                      <AccordionPanel
                        className="framer-qq7w8r"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s64658ab9e2}
                      >
                        <p
                          className="framer-text framer-styles-preset-12928c1"
                          data-styles-preset="V0V25Na8R"
                          dir="auto"
                          style={referenceStyles.s4b608901d2}
                        >
                          {t(
                            "Yes, we offer ongoing support, maintenance, and updates to keep your website secure and performing smoothly.",
                          )}
                        </p>
                      </AccordionPanel>
                    </AccordionItem>
                  </Reveal>
                  <Reveal
                    className="framer-1eom7yh-container"
                    style={referenceStyles.s2cca167b61}
                    as="div"
                    from="translateY(100px)"
                  >
                    <AccordionItem
                      className="framer-QEDYB framer-CkNQH framer-9qjuV framer-bgq6iw framer-v-5va5ez w-full!"
                      data-framer-name="Close"
                      data-highlight="true"
                      tabIndex={0}
                      style={referenceStyles.s83ea7f59fc}
                      mode="faq"
                      index={0}
                      initialOpen={false}
                      openClass="framer-v-bgq6iw"
                      closedClass="framer-v-5va5ez"
                    >
                      <div
                        className="framer-k86jas"
                        data-framer-name="Question & Icon"
                      >
                        <div
                          className="framer-163wn5t"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s143c03551f}
                        >
                          <p
                            className="framer-text framer-styles-preset-4un9qc"
                            data-styles-preset="LwB02gzuV"
                            dir="auto"
                            style={referenceStyles.se8682f4ed5}
                          >
                            {t("Can you redesign an existing website?")}
                          </p>
                        </div>
                        <AccordionToggle
                          className="framer-1mcnny4"
                          data-framer-name="Icon"
                          data-reset="button"
                          style={referenceStyles.s9d13712d7f}
                          label={t("Can you redesign an existing website?")}
                        >
                          <div
                            className="framer-1okky9a"
                            data-framer-name="Line 2"
                            style={referenceStyles.scfd37f3c43}
                          ></div>
                          <div
                            className="framer-dnf87r"
                            data-framer-name="Line 1"
                            style={referenceStyles.sefb4340700}
                          ></div>
                        </AccordionToggle>
                      </div>
                      <AccordionPanel
                        className="framer-qq7w8r"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s64658ab9e2}
                      >
                        <p
                          className="framer-text framer-styles-preset-12928c1"
                          data-styles-preset="V0V25Na8R"
                          dir="auto"
                          style={referenceStyles.s4b608901d2}
                        >
                          {t(
                            "Yes, we redesign existing websites with modern layouts, improved functionality, and a better user experience.",
                          )}
                        </p>
                      </AccordionPanel>
                    </AccordionItem>
                  </Reveal>
                  <Reveal
                    className="framer-j1d8ck-container"
                    style={referenceStyles.s2cca167b61}
                    as="div"
                    from="translateY(100px)"
                  >
                    <AccordionItem
                      className="framer-QEDYB framer-CkNQH framer-9qjuV framer-bgq6iw framer-v-5va5ez w-full!"
                      data-framer-name="Close"
                      data-highlight="true"
                      tabIndex={0}
                      style={referenceStyles.s83ea7f59fc}
                      mode="faq"
                      index={0}
                      initialOpen={false}
                      openClass="framer-v-bgq6iw"
                      closedClass="framer-v-5va5ez"
                    >
                      <div
                        className="framer-k86jas"
                        data-framer-name="Question & Icon"
                      >
                        <div
                          className="framer-163wn5t"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s143c03551f}
                        >
                          <p
                            className="framer-text framer-styles-preset-4un9qc"
                            data-styles-preset="LwB02gzuV"
                            dir="auto"
                            style={referenceStyles.se8682f4ed5}
                          >
                            {t("Which platforms do you work with?")}
                          </p>
                        </div>
                        <AccordionToggle
                          className="framer-1mcnny4"
                          data-framer-name="Icon"
                          data-reset="button"
                          style={referenceStyles.s9d13712d7f}
                          label={t("Which platforms do you work with?")}
                        >
                          <div
                            className="framer-1okky9a"
                            data-framer-name="Line 2"
                            style={referenceStyles.scfd37f3c43}
                          ></div>
                          <div
                            className="framer-dnf87r"
                            data-framer-name="Line 1"
                            style={referenceStyles.sefb4340700}
                          ></div>
                        </AccordionToggle>
                      </div>
                      <AccordionPanel
                        className="framer-qq7w8r"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s64658ab9e2}
                      >
                        <p
                          className="framer-text framer-styles-preset-12928c1"
                          data-styles-preset="V0V25Na8R"
                          dir="auto"
                          style={referenceStyles.s4b608901d2}
                        >
                          {t(
                            "We work with Framer, WordPress, Webflow, and other modern platforms based on your project requirements.",
                          )}
                        </p>
                      </AccordionPanel>
                    </AccordionItem>
                  </Reveal>
                  <Reveal
                    className="framer-1ouzol1-container"
                    style={referenceStyles.s2cca167b61}
                    as="div"
                    from="translateY(100px)"
                  >
                    <AccordionItem
                      className="framer-QEDYB framer-CkNQH framer-9qjuV framer-bgq6iw framer-v-5va5ez w-full!"
                      data-framer-name="Close"
                      data-highlight="true"
                      tabIndex={0}
                      style={referenceStyles.s83ea7f59fc}
                      mode="faq"
                      index={0}
                      initialOpen={false}
                      openClass="framer-v-bgq6iw"
                      closedClass="framer-v-5va5ez"
                    >
                      <div
                        className="framer-k86jas"
                        data-framer-name="Question & Icon"
                      >
                        <div
                          className="framer-163wn5t"
                          data-framer-component-type="RichTextContainer"
                          style={referenceStyles.s143c03551f}
                        >
                          <p
                            className="framer-text framer-styles-preset-4un9qc"
                            data-styles-preset="LwB02gzuV"
                            dir="auto"
                            style={referenceStyles.se8682f4ed5}
                          >
                            {t("How do we get started?")}
                          </p>
                        </div>
                        <AccordionToggle
                          className="framer-1mcnny4"
                          data-framer-name="Icon"
                          data-reset="button"
                          style={referenceStyles.s9d13712d7f}
                          label={t("How do we get started?")}
                        >
                          <div
                            className="framer-1okky9a"
                            data-framer-name="Line 2"
                            style={referenceStyles.scfd37f3c43}
                          ></div>
                          <div
                            className="framer-dnf87r"
                            data-framer-name="Line 1"
                            style={referenceStyles.sefb4340700}
                          ></div>
                        </AccordionToggle>
                      </div>
                      <AccordionPanel
                        className="framer-qq7w8r"
                        data-framer-component-type="RichTextContainer"
                        style={referenceStyles.s64658ab9e2}
                      >
                        <p
                          className="framer-text framer-styles-preset-12928c1"
                          data-styles-preset="V0V25Na8R"
                          dir="auto"
                          style={referenceStyles.s4b608901d2}
                        >
                          {t(
                            "Simply contact us to discuss your goals, project scope, and timeline, and we'll guide you through every step.",
                          )}
                        </p>
                      </AccordionPanel>
                    </AccordionItem>
                  </Reveal>
                  <div
                    className="framer-m8d42f-container"
                    style={referenceStyles.s4317ba2255}
                  >
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-tb4u94" data-framer-name="Image">
              <div className="framer-14m6xfw-container">
                <DistortedImage
                  src="/assets/13dc8d5e7fa13d30.png"
                  fade={false}
                  replay={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
