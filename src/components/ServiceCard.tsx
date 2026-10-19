import Link from "next/link";
import { Reveal } from "@/components/Motion";
import {
  AccordionItem,
  AccordionPanel,
  AccordionToggle,
} from "@/components/Accordion";
import { localizedHref, translate, type Locale } from "@/lib/i18n";
import type { Service } from "@/content/services";
import { referenceStyles } from "@/styles/reference-styles";

const variants = {
  desktop: { open: "framer-v-16ad7hm", closed: "framer-v-ksyjlc" },
  phone: { open: "framer-v-jmhdwl", closed: "framer-v-1x6eqby" },
  tablet: { open: "framer-v-8uqube", closed: "framer-v-1tqt2ca" },
};

export function ServiceCard({
  service,
  index,
  variant,
  locale,
}: {
  service: Service;
  index: number;
  variant: keyof typeof variants;
  locale: Locale;
}) {
  const t = (text: string) => translate(text, locale);
  const href = (path: string) => localizedHref(path, locale);
  return (
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
        data-service-index={index}
        data-service-id={service.id}
        style={referenceStyles.s9014ee6b78}
        index={index}
        mode="service"
        openClass={variants[variant].open}
        closedClass={variants[variant].closed}
      >
        <div className="framer-1hokjwq" data-framer-name="Title Wrapper">
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
              {t(`${String(index + 1).padStart(2, "0")}.`)}
            </p>
          </div>
          <div className="framer-rjp6f9" data-framer-name="Title & Details">
            <div className="framer-l9ujw9" data-framer-name="Title & Tags">
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
                  {service.title[locale]}
                </h4>
              </div>
              <div className="framer-12p5a3z" data-framer-name="Tag Wrapper">
                {service.tags.map((tag) => (
                  <div className="framer-93jzjy-container" key={tag.en}>
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
                          {tag[locale]}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
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
                    src={service.image}
                    alt=""
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
                    {service.summary[locale]}
                  </h5>
                  <p className="framer-text rycode-service-scope" dir="auto">
                    {service.scope[locale]}
                  </p>
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
          label={service.title[locale]}
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
  );
}
