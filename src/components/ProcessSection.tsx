"use client";

import { useLayoutEffect, useRef, type HTMLAttributes } from "react";
import { useLocale } from "./LocaleProvider";

const steps = [
  [".framer-1sadnpo-container", "#feature-one", 120, 10],
  [".framer-12amyrw-container", "#feature-two", 40, -10],
  [".framer-1itxpwx-container", "#feature-three", -40, 10],
  [".framer-1refysd-container", "#feature-four", -120, -10],
] as const;

/** Each marker straightens its card as it enters the bottom of the viewport. */
export function ProcessSection(props: HTMLAttributes<HTMLElement>) {
  const root = useRef<HTMLElement>(null);
  const { locale } = useLocale();

  useLayoutEffect(() => {
    const section = root.current;
    if (!section) return;
    const desktop = matchMedia("(min-width: 1200px)");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const direction = locale === "fa" ? -1 : 1;
    const cards = steps.flatMap(([selector, marker, x, angle]) => {
      const element = section.querySelector<HTMLElement>(selector);
      const target = section.querySelector<HTMLElement>(marker);
      return element && target
        ? [
            {
              element,
              target,
              x,
              angle,
              original: element.style.transform,
              value: 0,
              velocity: 0,
              goal: 0,
            },
          ]
        : [];
    });
    let frame = 0;
    let previous = 0;
    let measure = true;
    let initialized = false;

    const tick = (time: number) => {
      frame = 0;
      const enabled = desktop.matches && !reduced.matches;
      if (measure) {
        for (const card of cards) {
          const box = card.target.getBoundingClientRect();
          card.goal =
            enabled && box.height
              ? 1 -
                Math.max(0, Math.min(1, (innerHeight - box.top) / box.height))
              : 0;
          if (!initialized || !enabled) {
            card.value = card.goal;
            card.velocity = 0;
          }
        }
        measure = false;
        initialized = true;
      }
      // Match the reference spring (stiffness 500, damping 60, mass 1).
      let elapsed = previous ? Math.min((time - previous) / 1000, 1 / 30) : 0;
      previous = time;
      while (elapsed > 0) {
        const delta = Math.min(elapsed, 1 / 120);
        for (const card of cards) {
          card.velocity +=
            (500 * (card.goal - card.value) - 60 * card.velocity) * delta;
          card.value += card.velocity * delta;
        }
        elapsed -= delta;
      }
      let moving = false;
      for (const card of cards) {
        if (
          Math.abs(card.goal - card.value) < 0.0001 &&
          Math.abs(card.velocity) < 0.001
        ) {
          card.value = card.goal;
          card.velocity = 0;
        } else moving = true;
        card.element.style.transform =
          enabled && card.value
            ? `translateX(${card.x * direction * card.value}px) rotate(${card.angle * direction * card.value}deg)`
            : "none";
      }
      if (moving) frame = requestAnimationFrame(tick);
      else previous = 0;
    };
    const schedule = () => {
      measure = true;
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const reset = () => {
      initialized = false;
      schedule();
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(section);
    observer.observe(document.documentElement);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", reset);
    desktop.addEventListener("change", reset);
    reduced.addEventListener("change", reset);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", reset);
      desktop.removeEventListener("change", reset);
      reduced.removeEventListener("change", reset);
      cards.forEach(({ element, original }) => {
        element.style.transform = original;
      });
    };
  }, [locale]);

  return <section {...props} ref={root} />;
}
