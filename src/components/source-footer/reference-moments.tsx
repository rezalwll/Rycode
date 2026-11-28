"use client";
import Image from "next/image";
import { BrandText } from "@/components/pages/rycode-services/brand-text";

import { useReferenceLocale } from "./reference-locale";
import { Link } from "./link";
import { LogoMark } from "./logo";
import { LogoWordmark } from "./wordmark";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowRight, BatteryFull, Menu, Signal, Wifi } from "lucide-react";

const phoneShowcase = [
  {
    title: "Web design",
    image: "/brand/source-footer/phone-showcase-web.webp",
    href: "/services/build",
  },
  {
    title: "Automation",
    image: "/brand/source-footer/phone-automation.webp",
    href: "/services/connect",
  },
  {
    title: "Online stores",
    image: "/brand/source-footer/phone-showcase-store.webp",
    href: "/services/build#build-work",
    faHref: "/services/build#website-types",
  },
  {
    title: "Apps",
    image: "/brand/source-footer/phone-showcase-app.webp",
    href: "/services/software",
    faHref: "/services/software#software-android",
  },
];

export default function Moments() {
  const { copyText, fa, locale } = useReferenceLocale();
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
          {copyText("Digital design by RYCODE")}
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
            <p dir="auto">{copyText("Designed for the real world")}</p>
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
            role="group"
            aria-label={copyText(
              "Mobile preview of RYCODE with web design, automation, stores and apps.",
            )}
          >
            <span className="moments-side-button moments-side-silent" />
            <span className="moments-side-button moments-side-volume-one" />
            <span className="moments-side-button moments-side-volume-two" />
            <span className="moments-side-button moments-side-power" />
            <div className="moments-phone-screen">
              <div className="moments-status" dir="ltr" aria-hidden="true">
                <span>9:41</span>
                <div>
                  <Signal size={14} fill="currentColor" />
                  <Wifi size={13} />
                  <BatteryFull size={20} fill="currentColor" />
                </div>
              </div>
              <div className="moments-island">
                <span />
              </div>
              <div className="moments-app">
                <div className="moments-app-header" aria-hidden="true">
                  <div className="moments-app-brand" dir="ltr">
                    <LogoMark alt="" />
                    <LogoWordmark />
                  </div>
                  <span className="moments-app-menu">
                    <Menu />
                  </span>
                </div>
                <div className="moments-app-intro" aria-hidden="true">
                  <p className="moments-app-title">
                    <span>{copyText("From idea,")}</span>
                    <br />
                    {copyText("to product")}
                  </p>
                  <p className="moments-app-note">
                    {copyText(
                      "The right solution for every challenge. From design and development to automation and growth, we’re with you.",
                    )}
                  </p>
                </div>
                <div className="moments-app-hero">
                  <Image
                    src="/brand/channel-services/hero-workspace.webp"
                    alt=""
                    fill
                    sizes="(max-width: 432px) 74vw, 320px"
                  />
                </div>
                <div className="moments-app-gallery">
                  {phoneShowcase.map(({ title, image, href, faHref }) => (
                    <Link
                      className="moments-app-tile"
                      href={fa && faHref ? faHref : href}
                      locale={locale}
                      key={title}
                    >
                      <span className="moments-app-tile-art">
                        <Image
                          src={image}
                          alt=""
                          fill
                          sizes="(max-width: 432px) 37vw, 145px"
                        />
                      </span>
                      <span className="moments-app-tile-label">
                        {copyText(title)}
                        <span aria-hidden="true">
                          <ArrowRight />
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
                <span className="moments-home-indicator" />
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
