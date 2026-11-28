import {
  analyticsContext,
  analyticsPath,
  campaignTag,
  type AnalyticsContext,
  type PublicEvent,
} from "./insights";

const visitKey = "rycode-visit-context";
const visitDuration = 30 * 60_000;
let visit: { expires: number; labels: AnalyticsContext } | undefined;
let queue: {
  name: PublicEvent;
  path: string;
  detail: string;
  context: AnalyticsContext;
}[] = [];
let timer: ReturnType<typeof setTimeout> | undefined;

function deviceContext(): Pick<
  AnalyticsContext,
  "device" | "browser" | "platform" | "viewport"
> {
  const ua = navigator.userAgent;
  const ipad =
    /iPad/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  const device =
    ipad || /Tablet/.test(ua) || (/Android/.test(ua) && !/Mobile/.test(ua))
      ? "tablet"
      : /Mobile|iPhone|iPod/.test(ua)
        ? "mobile"
        : "desktop";
  const platform =
    ipad || /iPhone|iPod/.test(ua)
      ? "ios"
      : /Android/.test(ua)
        ? "android"
        : /Windows/.test(ua)
          ? "windows"
          : /Mac OS/.test(ua)
            ? "macos"
            : /Linux/.test(ua)
              ? "linux"
              : "other";
  const browser = /Edg|EdgiOS|EdgA/.test(ua)
    ? "edge"
    : /SamsungBrowser/.test(ua)
      ? "samsung"
      : /Chrome|CriOS/.test(ua)
        ? "chrome"
        : /Firefox|FxiOS/.test(ua)
          ? "firefox"
          : /Safari/.test(ua)
            ? "safari"
            : "other";
  const viewport =
    innerWidth < 640 ? "compact" : innerWidth < 1024 ? "medium" : "large";
  return { device, platform, browser, viewport };
}

function entrySource(tag: string): AnalyticsContext["source"] {
  if (tag) {
    if (
      tag === "google" ||
      tag === "bing" ||
      tag === "instagram" ||
      tag === "telegram" ||
      tag === "bale"
    )
      return tag;
    if (["yahoo", "duckduckgo", "yandex"].includes(tag)) return "other-search";
    if (
      [
        "facebook",
        "linkedin",
        "x",
        "twitter",
        "whatsapp",
        "youtube",
        "aparat",
      ].includes(tag)
    )
      return "other-social";
    return "tagged";
  }
  let host = "";
  if (document.referrer) {
    const referrer = new URL(document.referrer);
    if (referrer.origin !== location.origin)
      host = referrer.hostname.toLowerCase();
  }
  if (/(?:^|\.)google\.(?:com|[a-z]{2}|(?:co|com)\.[a-z]{2})$/.test(host))
    return "google";
  if (/(?:^|\.)bing\.com$/.test(host)) return "bing";
  if (/(?:^|\.)instagram\.com$/.test(host)) return "instagram";
  if (/(?:^|\.)(?:t\.me|telegram\.(?:me|org))$/.test(host)) return "telegram";
  if (/(?:^|\.)ble\.ir$/.test(host)) return "bale";
  if (
    /(?:^|\.)(?:search\.yahoo\.com|duckduckgo\.com|yandex\.(?:ru|com))$/.test(
      host,
    )
  )
    return "other-search";
  if (
    /(?:^|\.)(?:facebook\.com|linkedin\.com|x\.com|t\.co|twitter\.com|whatsapp\.com|youtube\.com|aparat\.com)$/.test(
      host,
    )
  )
    return "other-social";
  return host ? "referral" : "unknown";
}

export function currentVisit(
  pathname = location.pathname,
  checkExternalEntry = false,
) {
  const path = analyticsPath(pathname) ?? undefined;
  const now = Date.now();
  let entry = false;
  if (!visit && checkExternalEntry) {
    try {
      const stored = JSON.parse(sessionStorage.getItem(visitKey) || "null");
      const labels = analyticsContext.safeParse(stored?.labels);
      const expiry = Number(stored?.expires);
      if (labels.success && expiry > now && expiry <= now + visitDuration) {
        visit = { expires: expiry, labels: labels.data };
      }
    } catch {}
  }
  const query = new URLSearchParams(location.search);
  const tag = campaignTag(query.get("utm_source"));
  const campaign = campaignTag(query.get("utm_campaign"));
  const creative = campaignTag(query.get("utm_content"));
  const source = entrySource(tag || (campaign ? "campaign" : ""));
  const changedCampaign =
    Boolean(tag || campaign) &&
    (campaign !== visit?.labels.campaign ||
      creative !== visit?.labels.creative ||
      source !== visit?.labels.source);
  if (
    !visit ||
    visit.expires <= now ||
    (checkExternalEntry && changedCampaign)
  ) {
    entry = true;
    visit = {
      expires: now,
      labels: {
        source,
        landing: path,
        campaign,
        creative,
        ...deviceContext(),
      },
    };
  }
  visit.expires = now + visitDuration;
  const labels = { ...visit.labels, ...deviceContext() };
  if (checkExternalEntry) {
    try {
      sessionStorage.setItem(visitKey, JSON.stringify(visit));
    } catch {}
  }
  return { labels, entry };
}

export function flushInsights() {
  clearTimeout(timer);
  timer = undefined;
  if (!queue.length) return;
  const events = queue;
  queue = [];
  void fetch("/api/analytics/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ events }),
    credentials: "omit",
    referrerPolicy: "no-referrer",
    keepalive: true,
  }).catch(() => {});
}

export function trackInsight(
  name: PublicEvent,
  detail = "",
  pathname = location.pathname,
  context?: AnalyticsContext,
) {
  const path = name === "page_not_found" ? "/404" : analyticsPath(pathname);
  if (!path) return;
  queue.push({ name, path, detail, context: context ?? currentVisit().labels });
  if (queue.length >= 12) flushInsights();
  else timer ??= setTimeout(flushInsights, 500);
}
