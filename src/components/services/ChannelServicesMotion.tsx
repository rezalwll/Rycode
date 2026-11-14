"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { channelSteps } from "./channel-content";
import type { Locale } from "@/lib/i18n";
import styles from "./ChannelServicesPage.module.css";

type Capability = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  image: string;
  href: string;
  number: string;
};

const tabDuration = 5000;

export function ChannelCapabilities({
  services,
  detailLabel,
}: {
  services: Capability[];
  detailLabel: string;
}) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [manual, setManual] = useState(0);
  const paused = hovered || focused;

  useEffect(() => {
    if (
      services.length < 2 ||
      paused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const timer = window.setTimeout(
      () => setActive((value) => (value + 1) % services.length),
      tabDuration,
    );
    return () => window.clearTimeout(timer);
  }, [active, manual, paused, services.length]);

  return (
    <div
      className={styles.capabilities}
      onPointerEnter={(event) => {
        if (event.pointerType !== "touch") setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
      onFocusCapture={(event) =>
        setFocused(event.target.matches(":focus-visible"))
      }
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
    >
      {services.map((service, index) => {
        const selected = index === active;
        const number = service.number;
        const id = `channel-capability-${index}`;
        return (
          <div
            key={service.id}
            className={styles.capability}
            data-active={selected}
          >
            {selected && !paused && services.length > 1 && (
              <span
                key={manual}
                className={styles.progress}
                aria-hidden="true"
              />
            )}
            <button
              className={styles.capabilityControl}
              type="button"
              aria-label={`${number} ${service.title}`}
              aria-expanded={selected}
              aria-controls={id}
              onClick={() => {
                setActive(index);
                setManual((value) => value + 1);
              }}
            />
            <div className={styles.capabilityNumber} aria-hidden="true">
              <span>{number}</span>
              <span className={styles.phoneName}>{service.title}</span>
            </div>
            {!selected && (
              <span className={styles.verticalName} aria-hidden="true">
                {service.title}
              </span>
            )}
            <div id={id} className={styles.capabilityBody} hidden={!selected}>
              <div>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <ul>
                  {service.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <Link
                  data-fill-button
                  href={service.href}
                  aria-label={`${detailLabel}: ${service.title}`}
                >
                  {detailLabel}
                </Link>
              </div>
              <div
                className={styles.capabilityImage}
                style={{
                  backgroundImage: `url(${JSON.stringify(service.image)})`,
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

const clamp = (value: number) => Math.max(0, Math.min(1, value));
const fraction = (value: number) => value - Math.floor(value);

export function ChannelProcess({ locale }: { locale: Locale }) {
  const format = new Intl.NumberFormat(locale, { minimumIntegerDigits: 2 });
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const phone = window.matchMedia("(max-width: 809px)");
    const tiles = Array.from(
      element.querySelectorAll<HTMLElement>("[data-tile]"),
    );
    const cards = Array.from(
      element.querySelectorAll<HTMLElement>("[data-process-card]"),
    );
    let frame = 0;
    let previous = -1;
    let columns = 0;
    const paint = () => {
      frame = 0;
      const nextColumns = phone.matches ? 4 : 6;
      const progress = reduced.matches
        ? 1
        : clamp(
            (innerHeight - element.getBoundingClientRect().top) /
              Math.max(1, innerHeight * 0.75),
          );
      if (Math.abs(progress - previous) < 0.002 && nextColumns === columns)
        return;
      previous = progress;
      columns = nextColumns;
      for (let index = 0; index < columns * 4; index++) {
        const tile = tiles[index];
        const col = index % columns;
        const row = Math.floor(index / columns);
        const delay = fraction(Math.sin(index * 12.9898 + 4.1) * 43758.5453);
        const drift = fraction(Math.sin(index * 78.233 + 1.7) * 12345.678);
        const offset = (1 - clamp((progress - delay * 0.35) / 0.65)) ** 3;
        const x =
          ((col - (columns - 1) / 2) * 26 + (drift - 0.5) * 90) * offset;
        const y = ((row - 1.5) * 22 + (delay - 0.5) * 80) * offset;
        tile.style.transform =
          offset > 0
            ? `translate(${x}%, ${y}%) rotate(${(drift - 0.5) * 18 * offset}deg) scale(${1 - 0.28 * offset})`
            : "none";
        tile.style.borderRadius = `${14 * offset}px`;
        tile.style.boxShadow =
          offset > 0.02
            ? `0 18px 40px -20px rgb(0 0 0 / ${0.35 * offset})`
            : "none";
      }
      const stage = Math.max(0, Math.floor(progress * 3 - 0.0001));
      cards.forEach((card, index) => {
        card.dataset.active = String(progress >= 0.999 || index <= stage);
      });
    };
    const update = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const resize = new ResizeObserver(update);
    resize.observe(element);
    resize.observe(document.documentElement);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    reduced.addEventListener("change", update);
    update();
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  return (
    <div className={styles.processArt} ref={root}>
      <div
        className={styles.processPicture}
        role="img"
        aria-label={
          locale === "fa"
            ? "میز کار و طرح‌های اولیهٔ پروژه"
            : "Pinned sketches and material swatches above a studio desk"
        }
      >
        {Array.from({ length: 24 }, (_, index) => (
          <div
            key={index}
            className={styles.tile}
            data-tile
            aria-hidden="true"
            style={
              {
                "--desktop-column": index % 6,
                "--desktop-row": Math.floor(index / 6),
                "--phone-column": index % 4,
                "--phone-row": Math.floor(index / 4),
              } as CSSProperties
            }
          >
            <div className={styles.tilePhoto} />
          </div>
        ))}
      </div>
      <div className={styles.steps}>
        {channelSteps[locale].map(([title, text], index) => (
          <div
            className={styles.step}
            data-process-card
            data-active
            key={title}
          >
            <span>{format.format(index + 1)}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChannelReveals() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const animations: Animation[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const { target, isIntersecting } of entries) {
          if (!isIntersecting) continue;
          observer.unobserve(target);
          const reveal = (target as HTMLElement).dataset.channelReveal;
          const from =
            reveal === "zoom"
              ? { opacity: 0.75, transform: "scale(0.98)" }
              : { opacity: 0.35, transform: "translateY(18px)" };
          animations.push(
            target.animate([from, { opacity: 1, transform: "none" }], {
              duration: 720,
              easing: "cubic-bezier(.22,1,.36,1)",
            }),
          );
        }
      },
      { rootMargin: "0px 0px -6% 0px" },
    );
    document
      .querySelectorAll("#channel-services [data-channel-reveal]")
      .forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
  }, []);
  return null;
}
