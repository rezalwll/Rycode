"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function AnonymousAnalytics() {
  const pathname = usePathname();
  const lastPage = useRef<string | null>(null);

  useEffect(() => {
    // Remove identifiers left by the previous opt-in implementation.
    try {
      localStorage.removeItem("rycode-analytics-consent");
      sessionStorage.removeItem("rycode-analytics-session");
    } catch {}
  }, []);

  useEffect(() => {
    const send = (name: "page_view" | "contact_click" | "lead_saved") => {
      void fetch("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, path: pathname }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        keepalive: true,
      }).catch(() => {});
    };
    // Avoid duplicate page views when React replays effects in development.
    if (lastPage.current !== pathname) {
      lastPage.current = pathname;
      send("page_view");
    }
    const click = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;
      const target = new URL(link.href);
      if (
        target.protocol === "tel:" ||
        (target.origin === location.origin &&
          /^\/(?:en\/|fa\/)?contact\/?$/.test(target.pathname))
      )
        send("contact_click");
    };
    const saved = () => send("lead_saved");
    document.addEventListener("click", click);
    window.addEventListener("rycode:lead-saved", saved);
    return () => {
      document.removeEventListener("click", click);
      window.removeEventListener("rycode:lead-saved", saved);
    };
  }, [pathname]);

  return null;
}
