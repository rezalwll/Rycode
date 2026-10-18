import { Reveal } from "@/components/Motion";
import { referenceStyles } from "@/styles/reference-styles";
export function NotFoundHeroSection() {
  return (
    <section className="framer-14oxyep" data-framer-name="Hero Section">
      <div className="framer-qn6hea" data-framer-name="Container">
        <div className="framer-ij7t5o" data-framer-name="Content">
          <div className="ssr-variant">
            <Reveal
              className="framer-1ii77cf"
              data-framer-appear-id="1ii77cf"
              style={referenceStyles.s4e92405491}
              as="div"
              from="translateY(150px) scale(0.5)"
            >
              <div
                data-framer-background-image-wrapper="true"
                style={referenceStyles.s8a54025f8d}
              >
                <img
                  decoding="async"
                  width="4208"
                  height="1604"
                  sizes="(min-width: 1200px) max(min(max(100vw - 60px, 1px), 1052px), 1px), (min-width: 768px) and (max-width: 1199.98px) max(min(max(100vw - 60px, 1px), 1052px), 1px), (max-width: 767.98px) max(min(100vw - 40px, 1052px), 1px)"
                  srcSet="/assets/8960ab2eed7d6779.png 512w, /assets/83ab7dc8890dc336.png 1024w, /assets/cf9ce8b8afde8c46.png 2048w, /assets/4f112ff5bb09d9b3.png 4096w, /assets/2fedaa4900b8820f.png 4208w"
                  src="/assets/2fedaa4900b8820f.png"
                  alt=""
                  className="w-full! h-full!"
                  style={referenceStyles.s1100a320a2}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
