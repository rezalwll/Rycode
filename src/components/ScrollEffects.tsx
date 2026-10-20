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
    const tick = (time: number) => {
      scroll.raf(time);
      if (hero)
        hero.style.transform = `translateY(${-Math.min(window.scrollY, innerHeight * 2) * 0.2}px)`;
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
      document.removeEventListener("click", anchor, true);
      if (hero) hero.style.transform = "none";
    };
  }, [pathname]);
  return null;
}
