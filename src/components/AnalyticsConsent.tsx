"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "./LocaleProvider";
import styles from "./AnalyticsConsent.module.css";
export function AnalyticsConsent() {
  const { locale } = useLocale();
  const pathname = usePathname();
  const [choice, setChoice] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      const value = localStorage.getItem("rycode-analytics-consent");
      queueMicrotask(() => {
        setChoice(value);
        setReady(true);
      });
    } catch {
      queueMicrotask(() => setReady(true));
    }
  }, []);
  useEffect(() => {
    if (choice !== "yes") return;
    let session = "";
    try {
      session =
        sessionStorage.getItem("rycode-analytics-session") ||
        crypto.randomUUID();
      sessionStorage.setItem("rycode-analytics-session", session);
    } catch {
      return;
    }
    const send = (name: string) => {
      let referrerHost = "";
      try {
        referrerHost = document.referrer
          ? new URL(document.referrer).hostname
          : "";
      } catch {}
      const campaign =
        new URLSearchParams(location.search).get("utm_campaign") || "";
      void fetch("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          path: location.pathname,
          session,
          consent: true,
          referrerHost,
          ...(/^[a-zA-Z0-9_-]{1,80}$/.test(campaign) ? { campaign } : {}),
        }),
        keepalive: true,
      }).catch(() => {});
    };
    send("page_view");
    const click = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>(
        "a[href]",
      );
      if (
        link &&
        new URL(link.href).origin === location.origin &&
        new URL(link.href).pathname.includes("/contact")
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
  }, [choice, pathname]);
  const choose = (value: string) => {
    try {
      localStorage.setItem("rycode-analytics-consent", value);
    } catch {}
    setChoice(value);
  };
  if (!ready) return null;
  return choice === null ? (
    <aside
      className={styles.banner}
      aria-label={locale === "fa" ? "آمار بازدید" : "Visit analytics"}
    >
      <p>
        {locale === "fa"
          ? "برای بهتر کردن سایت، اجازه می‌دهی آمار ناشناس بازدید و کلیک‌ها ثبت شود؟"
          : "May we collect anonymous visit and click statistics to improve this site?"}
      </p>
      <div>
        <button onClick={() => choose("yes")}>
          {locale === "fa" ? "موافقم" : "Allow"}
        </button>
        <button onClick={() => choose("no")}>
          {locale === "fa" ? "فعلاً نه" : "No thanks"}
        </button>
      </div>
    </aside>
  ) : (
    <button
      className={styles.preference}
      onClick={() => choose(choice === "yes" ? "no" : "yes")}
    >
      {locale === "fa"
        ? choice === "yes"
          ? "آمار ناشناس: فعال"
          : "آمار ناشناس: غیرفعال"
        : choice === "yes"
          ? "Analytics: on"
          : "Analytics: off"}
    </button>
  );
}
