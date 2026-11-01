"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

/** Native React lifecycle for the reference's 1.5-second wheel easing and hero parallax. */
export function ScrollEffects() {
  const pathname = usePathname();
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const scroll = new Lenis({ duration: 1.5, syncTouch: false });
    let frame = 0;
    const hero = document.querySelector<HTMLElement>(".framer-15gz4dg");
    const intro = document.querySelector<HTMLElement>(".home-intro");
    const videoHero = intro?.querySelector<HTMLElement>(".rycode-hero-source");
    const videoFrame = videoHero?.querySelector<HTMLElement>(".hero-frame");
    let introTop = 0;
    let heroHeight = 1;
    let lastProgress = -1;
    const measure = () => {
      introTop = intro ? intro.getBoundingClientRect().top + window.scrollY : 0;
      heroHeight = videoHero?.offsetHeight || 1;
    };
    measure();
    const resize = new ResizeObserver(measure);
    if (videoHero) resize.observe(videoHero);
    const tick = (time: number) => {
      scroll.raf(time);
      if (hero)
        hero.style.transform = `translateY(${-Math.min(window.scrollY, innerHeight * 2) * 0.2}px)`;
      if (videoFrame) {
        const progress = Math.max(
          0,
          Math.min(1, (window.scrollY - introTop) / (heroHeight * 0.9)),
        );
        if (Math.abs(progress - lastProgress) > 0.0001) {
          videoFrame.style.transform = progress
            ? `scale(${1 - progress * 0.035})`
            : "none";
          lastProgress = progress;
        }
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    const anchor = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>(
        "a[href]",
      );
      if (
        !link ||
        event.defaultPrevented ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const url = new URL(link.href);
      if (
        url.origin !== location.origin ||
        url.pathname !== location.pathname ||
        url.search !== location.search ||
        !url.hash
      )
        return;
      const target = document.getElementById(
        decodeURIComponent(url.hash.slice(1)),
      );
      if (!target) return;
      event.preventDefault();
      const margin =
        Number.parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
      scroll.scrollTo(target, { offset: -margin });
      history.pushState(null, "", url.hash);
    };
    document.addEventListener("click", anchor, true);
    return () => {
      cancelAnimationFrame(frame);
      scroll.destroy();
      resize.disconnect();
      document.removeEventListener("click", anchor, true);
      if (hero) hero.style.transform = "none";
      if (videoFrame) videoFrame.style.transform = "none";
    };
  }, [pathname]);
  return null;
}
