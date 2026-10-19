import { getTranslations } from "@/lib/i18n-server";
import { Reveal, SplitText } from "@/components/Motion";
import { AccordionGroup } from "@/components/Accordion";
import { serviceCatalog } from "@/server/content";
import { ServiceCard } from "@/components/ServiceCard";
import { referenceStyles } from "@/styles/reference-styles";
export async function HomeServiceSection() {
  const { t, locale } = await getTranslations();
  const services = await serviceCatalog(locale);
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
                      ? "از طراحی سایت تا نرم‌افزار و رشد کسب‌وکارت"
                      : "Websites, software and your next stage of growth"
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
                      ? "از طراحی سایت تا نرم‌افزار و رشد کسب‌وکارت"
                      : "Websites, software and your next stage of growth"
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
                      ? "از طراحی سایت تا نرم‌افزار و رشد کسب‌وکارت"
                      : "Websites, software and your next stage of growth"
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
              <div className="framer-d3CKe framer-17bhmoe framer-v-17bhmoe w-full!">
                {services.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    index={index}
                    variant="desktop"
                    locale={locale}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-72rtr7 hidden-1fs2pis">
            <div className="framer-uruf6e-container">
              <div className="framer-d3CKe framer-17bhmoe framer-v-1qmsj0d w-full!">
                {services.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    index={index}
                    variant="phone"
                    locale={locale}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-1bcn26v hidden-72rtr7">
            <div className="framer-uruf6e-container">
              <div className="framer-d3CKe framer-17bhmoe framer-v-6mo5kv w-full!">
                {services.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    index={index}
                    variant="tablet"
                    locale={locale}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AccordionGroup>
  );
}
