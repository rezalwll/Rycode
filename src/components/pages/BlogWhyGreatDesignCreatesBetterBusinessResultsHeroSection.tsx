import { getTranslations } from "@/lib/i18n-server";
import { Reveal } from "@/components/Motion";
import { DistortedImage } from "@/components/DistortedImage";
import { referenceStyles } from "@/styles/reference-styles";
export async function BlogWhyGreatDesignCreatesBetterBusinessResultsHeroSection() {
  const { t } = await getTranslations();
  return (
    <section className="framer-8xh1tf" data-framer-name="Hero Section">
      <div className="framer-1yaeu7q" data-framer-name="Container">
        <div className="framer-1u5djwt">
          <div
            data-framer-background-image-wrapper="true"
            style={referenceStyles.s8a54025f8d}
          >
            <img
              decoding="async"
              width="13"
              height="13"
              src="/assets/44648efdb77196fa.svg"
              alt=""
              className="w-full! h-full!"
              style={referenceStyles.s1100a320a2}
            />
          </div>
        </div>
        <div
          className="framer-1yjonsh hidden-1qf0chi"
          style={referenceStyles.s4317ba2255}
        >
          <div
            data-framer-background-image-wrapper="true"
            style={referenceStyles.s8a54025f8d}
          >
            <img
              decoding="async"
              width="13"
              height="13"
              src="/assets/44648efdb77196fa.svg"
              alt=""
              className="w-full! h-full!"
              style={referenceStyles.s1100a320a2}
            />
          </div>
        </div>
        <div className="framer-1sexpoe">
          <div
            data-framer-background-image-wrapper="true"
            style={referenceStyles.s8a54025f8d}
          >
            <img
              decoding="async"
              width="13"
              height="13"
              src="/assets/44648efdb77196fa.svg"
              alt=""
              className="w-full! h-full!"
              style={referenceStyles.s1100a320a2}
            />
          </div>
        </div>
        <div
          className="framer-16gcius"
          data-border="true"
          data-framer-name="Layer"
        >
          <div
            className="framer-9w7glh"
            style={referenceStyles.s042daa9eb6}
          ></div>
        </div>
        <div
          className="framer-v3ppu7"
          data-border="true"
          data-framer-name="Layer"
        >
          <div
            className="framer-2i51pl"
            style={referenceStyles.s042daa9eb6}
          ></div>
        </div>
        <div
          className="framer-1upldr9 hidden-1qf0chi"
          data-border="true"
          data-framer-name="Layer"
        >
          <div
            className="framer-1hijfke"
            style={referenceStyles.s042daa9eb6}
          ></div>
        </div>
        <div
          className="framer-u41v3f"
          data-border="true"
          data-framer-name="Layer"
        >
          <div
            className="framer-442342"
            style={referenceStyles.s042daa9eb6}
          ></div>
        </div>
        <div className="framer-1xzhtii" data-framer-name="Content">
          <div className="framer-ax4ed3" data-framer-name="Blog Details">
            <div
              className="framer-drrc37"
              data-framer-name="Top Content & Image"
            >
              <div className="framer-rutfna" data-framer-name="Top Content">
                <Reveal
                  className="framer-r2eclc"
                  data-framer-appear-id="r2eclc"
                  data-framer-component-type="RichTextContainer"
                  style={referenceStyles.s899376f5cd}
                  as="div"
                  from="translateY(250px)"
                >
                  <p
                    dir="auto"
                    className="framer-text framer-styles-preset-egbnuh"
                  >
                    {t(
                      "Successful digital products begin with a clear strategy. Every design decision should solve real problems, simplify user journeys, and create meaningful experiences.",
                    )}
                    <br className="framer-text" />
                    <br className="framer-text" />
                    {t(
                      "Great design goes beyond visual appeal. It builds trust, improves usability, strengthens brand perception, and helps businesses achieve measurable growth.",
                    )}
                  </p>
                </Reveal>
              </div>
              <div className="framer-4xwn1c" data-framer-name="Images">
                <div className="framer-1fk527i-container">
                  <DistortedImage
                    src="/assets/508f67ae9fd7d5f5.png"
                    fade={true}
                    replay={false}
                  />
                </div>
                <div className="framer-xa7f4f-container">
                  <DistortedImage
                    src="/assets/e91e755f9f6c0d7f.png"
                    fade={true}
                    replay={false}
                  />
                </div>
              </div>
            </div>
            <div
              className="framer-pvequ9"
              data-framer-name="Bottom Content & Images"
            >
              <div
                className="framer-1q5u00s"
                data-framer-name="Bottom Content Details"
              >
                <Reveal
                  className="framer-1nfrmii"
                  data-framer-component-type="RichTextContainer"
                  style={referenceStyles.s5916c9ffdd}
                  as="div"
                  from="translateY(200px)"
                >
                  <p
                    dir="auto"
                    className="framer-text framer-styles-preset-egbnuh"
                  >
                    {t(
                      "Every interaction should feel natural and intentional. Thoughtful layouts, clear hierarchy, and purposeful motion create experiences users genuinely enjoy.",
                    )}
                    <br className="framer-text" />
                    <br className="framer-text" />
                    {t(
                      "Modern no-code platforms empower teams to launch faster while maintaining flexibility, performance, and exceptional design quality across every device.",
                    )}
                  </p>
                </Reveal>
              </div>
              <div className="framer-xq46k9" data-framer-name="3 Image">
                <div className="framer-1rpvmvr" data-framer-name="Images">
                  <div className="framer-1fskxld-container">
                    <DistortedImage
                      src="/assets/1115c40b7f2ee826.png"
                      fade={true}
                      replay={false}
                    />
                  </div>
                  <div className="framer-1t3rvhq-container">
                    <DistortedImage
                      src="/assets/780a2a9013e192bd.png"
                      fade={true}
                      replay={false}
                    />
                  </div>
                  <div className="framer-7znfip-container">
                    <DistortedImage
                      src="/assets/9aa6f2295dcd4f35.png"
                      fade={true}
                      replay={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-xxv35s" data-framer-name="Image & Title">
            <div className="framer-1q316k3-container">
              <DistortedImage
                src="/assets/46fbadd99d68ae26.png"
                fade={true}
                replay={false}
              />
            </div>
            <Reveal
              className="framer-1ue0kjd"
              data-framer-appear-id="1ue0kjd"
              data-framer-component-type="RichTextContainer"
              style={referenceStyles.s899376f5cd}
              as="div"
              from="translateY(250px)"
            >
              <h4
                className="framer-text framer-styles-preset-167816o"
                data-styles-preset="FECrL8yAb"
                dir="auto"
                style={referenceStyles.s5a374ddac4}
              >
                {t("Why Great Design Creates Better Business Results")}
              </h4>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
