"use client";
import { BrandText } from "@/components/pages/rycode-services/brand-text";

import { useReferenceLocale } from "./reference-locale";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import {
  BatteryFull,
  CalendarDays,
  MapPin,
  MessagesSquare,
  Share2,
  Signal,
  UsersRound,
  Wifi,
} from "lucide-react";
export default function Moments() {
  const { copyText } = useReferenceLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const firstLineX = useTransform(scrollYProgress, [0, 1], [60, -130]);
  const secondLineX = useTransform(scrollYProgress, [0, 1], [-60, 130]);
  return (
    <BrandText>
      <section
        ref={sectionRef}
        id="moments"
        className="moments-section"
        aria-labelledby="moments-title"
      >
        <h2 id="moments-title" className="sr-only">
          {copyText("Your product\u2019s next chapter")}
        </h2>
        <div className="moments-text" aria-hidden="true">
          <motion.div
            className="moments-text-row"
            style={{ x: reduceMotion ? 0 : firstLineX }}
          >
            <p dir="auto">
              {copyText("Design, engineering and growth for your business")}
            </p>
          </motion.div>
          <motion.div
            className="moments-text-row moments-text-row-reverse"
            style={{ x: reduceMotion ? 0 : secondLineX }}
          >
            <p dir="auto">
              {copyText(
                "From your first idea to your product\u2019s next chapter",
              )}
            </p>
          </motion.div>
        </div>

        <div className="moments-stage">
          <div className="moments-orbit" aria-hidden="true" />
          <motion.div
            className="moments-star"
            aria-hidden="true"
            drag
            dragConstraints={{ left: -120, right: 120, top: -80, bottom: 80 }}
            dragElastic={0.15}
            dragSnapToOrigin
          >
            <motion.svg
              viewBox="0 0 54 65"
              {...(reduceMotion ? {} : { animate: { rotate: [0, 25, 0] } })}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M9 6c4 15 12 32 22 55M31 8C21 23 15 37 11 54M3 26c10 3 19 6 27 12M2 43C16 29 28 20 53 14" />
              </g>
            </motion.svg>
          </motion.div>

          <div
            className="moments-phone"
            role="img"
            aria-label={copyText(
              "RYCODE mobile app: Your product’s next chapter. Support and continuous development for a product you can keep moving forward.",
            )}
          >
            <div aria-hidden="true">
              <span className="moments-side-button moments-side-silent" />
              <span className="moments-side-button moments-side-volume-one" />
              <span className="moments-side-button moments-side-volume-two" />
              <span className="moments-side-button moments-side-power" />
              <div className="moments-phone-screen">
                <div className="moments-status">
                  <span>{copyText("9:41")}</span>
                  <div>
                    <Signal size={14} fill="currentColor" />
                    <Wifi size={13} />
                    <BatteryFull size={20} fill="currentColor" />
                  </div>
                </div>
                <div className="moments-island">
                  <span />
                </div>
                <div className="moments-phone-content">
                  <div className="moments-phone-top" dir="ltr">
                    <span>
                      <Share2 size={16} strokeWidth={1.5} />
                    </span>
                    <span>
                      <MapPin size={16} strokeWidth={1.5} />
                    </span>
                  </div>
                  <div className="moments-phone-main">
                    <div className="moments-dashboard" dir="ltr">
                      <div className="moments-dashboard-back" />
                      <div className="moments-dashboard-front">
                        <div className="moments-dashboard-rows">
                          <i />
                          <i />
                          <i />
                        </div>
                        <div className="moments-dashboard-chart">
                          <div className="moments-dashboard-trend">
                            <i />
                            <i />
                            <i />
                            <i />
                          </div>
                          <div className="moments-dashboard-bars">
                            <i />
                            <i />
                            <i />
                            <i />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="moments-phone-copy">
                      <p className="moments-phone-heading">
                        {copyText("Your product\u2019s next chapter")}
                      </p>
                      <p>
                        {copyText(
                          "Support and continuous development for a product you can keep moving forward.",
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="moments-phone-bottom">
                    <div className="moments-phone-tabs" dir="ltr">
                      <span>
                        <MessagesSquare size={17} strokeWidth={1.5} />
                      </span>
                      <span>
                        <CalendarDays size={17} strokeWidth={1.5} />
                      </span>
                      <span>
                        <UsersRound size={17} strokeWidth={1.5} />
                      </span>
                    </div>
                    <span className="moments-home-indicator" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="moments-eyes"
            aria-hidden="true"
            drag
            dragConstraints={{ left: -120, right: 120, top: -80, bottom: 80 }}
            dragElastic={0.15}
            dragSnapToOrigin
          >
            {copyText(
              [0, 1].map((eye) => (
                <span key={eye} className="moments-eye">
                  <motion.span
                    {...(reduceMotion ? {} : { animate: { rotate: [0, 360] } })}
                    transition={{
                      duration: 14,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <i />
                  </motion.span>
                </span>
              )),
            )}
          </motion.div>
        </div>
      </section>
    </BrandText>
  );
}
