"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useReportWebVitals } from "next/web-vitals";
import { analyticsPath, type PublicEvent } from "@/lib/insights";
import {
  currentVisit,
  flushInsights,
  trackInsight,
} from "@/lib/insights-client";

const landmarks = [
  ["hero", "#top, section[data-framer-name='Hero Section']"],
  ["services", "#expertise, #services-list"],
  [
    "portfolio",
    "#work, [aria-labelledby='portfolio-title'], section[data-framer-name='Work Section']",
  ],
  ["process", "#process, #feature-one, [aria-labelledby='about-process']"],
  [
    "blog",
    "#blog-preview, [aria-labelledby='featured-title'], [aria-labelledby='all-articles-title']",
  ],
  ["faq", "#home-faq, section[aria-labelledby='faq-title']"],
  [
    "contact-banner",
    "[data-action-banner], [aria-labelledby='services-contact-title']",
  ],
  ["article", "#article-content"],
  ["header", "header"],
  ["footer", "footer"],
].map(([name, target]) => ({ name, target: `#main :is(${target})` }));

const reportVitals: Parameters<typeof useReportWebVitals>[0] = (metric) => {
  if (!["LCP", "INP", "CLS", "TTFB", "FCP"].includes(metric.name)) return;
  const path = metric.navigationURL
    ? new URL(metric.navigationURL, location.href).pathname
    : location.pathname;
  trackInsight("web_vital", `${metric.name}|${metric.rating}`, path);
  if (document.hidden) flushInsights();
};

function contactAction(url: URL) {
  if (url.protocol === "tel:") return "phone";
  if (url.protocol === "mailto:") return "email";
  if (
    url.origin === location.origin &&
    /^\/(?:fa\/|en\/)?contact\/?$/.test(url.pathname)
  )
    return "form";
  if (!["http:", "https:"].includes(url.protocol)) return null;
  if (/(?:^|\.)instagram\.com$/i.test(url.hostname)) return "instagram";
  if (/(?:^|\.)(?:t\.me|telegram\.(?:me|org))$/i.test(url.hostname))
    return "telegram";
  if (/(?:^|\.)ble\.ir$/i.test(url.hostname)) return "bale";
  return null;
}

export function AnonymousAnalytics() {
  const pathname = usePathname();
  const previousPage = useRef<string | null>(null);
  useReportWebVitals(reportVitals);

  useEffect(() => {
    const path = analyticsPath(pathname);
    if (!path) return;
    const { labels, entry } = currentVisit(path, true);
    const send = (name: PublicEvent, detail = "") =>
      trackInsight(name, detail, path, labels);
    if (previousPage.current !== path) {
      send("page_view");
      if (entry) send("page_entry");
      else if (previousPage.current)
        trackInsight("navigate", path, previousPage.current, labels);
      previousPage.current = path;
    }

    const seen = new Set<string>();
    const pending = new Map<Element, ReturnType<typeof setTimeout>>();
    const selector = landmarks.map(({ target }) => target).join(",");
    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              for (const item of entries) {
                clearTimeout(pending.get(item.target));
                pending.delete(item.target);
                if (!item.isIntersecting) continue;
                const name = landmarks.find(({ target }) =>
                  item.target.matches(target),
                )?.name;
                if (!name || seen.has(name)) continue;
                pending.set(
                  item.target,
                  setTimeout(() => {
                    pending.delete(item.target);
                    const rect = item.target.getBoundingClientRect();
                    const visible =
                      Math.min(innerHeight, rect.bottom) -
                      Math.max(0, rect.top);
                    if (
                      seen.has(name) ||
                      rect.height <= 0 ||
                      visible < Math.min(140, rect.height * 0.45) ||
                      document.hidden
                    )
                      return;
                    seen.add(name);
                    send("section_view", name);
                  }, 800),
                );
              }
            },
            { threshold: [0, 0.1, 0.25, 0.5, 0.8] },
          )
        : null;
    document
      .querySelectorAll(selector)
      .forEach((element) => observer?.observe(element));

    const clicked = new Set<string>();
    const click = ({ target }: MouseEvent) => {
      if (!(target instanceof Element)) return;
      const action = target.closest("a[href], button, summary");
      if (!action) return;
      const name = [...landmarks]
        .reverse()
        .find(({ target: selector }) => action.closest(selector))?.name;
      if (name && !clicked.has(name)) {
        clicked.add(name);
        send("section_click", name);
      }
      if (action instanceof HTMLAnchorElement) {
        const url = new URL(action.href, location.href);
        const channel = contactAction(url);
        if (channel) send("contact_click", channel);
        const targetPath =
          url.origin === location.origin ? analyticsPath(url.pathname) : null;
        if (targetPath && targetPath !== path)
          send("link_click", (name || "other") + "|" + targetPath);
      }
    };

    const scrollMarks = [25, 50, 75, 90];
    let frame = 0;
    const scroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const range = document.documentElement.scrollHeight - innerHeight;
        if (range < 100 || document.hidden) return;
        while (
          scrollMarks.length &&
          (100 * scrollY) / range >= scrollMarks[0]
        ) {
          send("scroll_depth", String(scrollMarks.shift()));
        }
      });
    };

    const timeMarks = [15, 45, 120];
    let activeSeconds = 0;
    let last = performance.now();
    const engagement = setInterval(() => {
      const now = performance.now();
      if (!document.hidden && document.hasFocus())
        activeSeconds += Math.min(2, (now - last) / 1000);
      last = now;
      while (timeMarks.length && activeSeconds >= timeMarks[0]) {
        send("active_time", String(timeMarks.shift()));
      }
    }, 1000);

    const error = (event: Event) => {
      const kind =
        event.type === "unhandledrejection"
          ? "promise"
          : event.target === window
            ? "script"
            : "resource";
      if (seen.has(kind)) return;
      // Only record failed same-origin resources and generic error categories.
      if (kind === "resource") {
        const target = event.target;
        if (!(
          target instanceof HTMLImageElement ||
          target instanceof HTMLScriptElement ||
          target instanceof HTMLLinkElement
        ))
          return;
        const url = new URL(
          target instanceof HTMLLinkElement ? target.href : target.src,
          location.href,
        );
        if (url.origin !== location.origin) return;
      }
      seen.add(kind);
      send("browser_error", kind);
    };
    const exit = () => {
      send("page_exit");
      flushInsights();
    };
    const visibility = () => {
      last = performance.now();
      if (document.hidden) flushInsights();
    };

    document.addEventListener("click", click);
    document.addEventListener("visibilitychange", visibility);
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("pagehide", exit);
    window.addEventListener("error", error, true);
    window.addEventListener("unhandledrejection", error);
    return () => {
      observer?.disconnect();
      pending.forEach((timeout) => clearTimeout(timeout));
      cancelAnimationFrame(frame);
      clearInterval(engagement);
      document.removeEventListener("click", click);
      document.removeEventListener("visibilitychange", visibility);
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("pagehide", exit);
      window.removeEventListener("error", error, true);
      window.removeEventListener("unhandledrejection", error);
    };
  }, [pathname]);

  return null;
}

export function NotFoundAnalytics() {
  const recorded = useRef(false);
  useEffect(() => {
    if (
      recorded.current ||
      /^\/(?:fa\/|en\/)?(?:admin|api|media|preview)(?:\/|$)/.test(
        location.pathname,
      )
    )
      return;
    recorded.current = true;
    trackInsight("page_not_found");
  }, []);
  return null;
}
