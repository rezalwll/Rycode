import { NextResponse, type NextRequest } from "next/server";
import { managedRedirect } from "@/server/redirects";
import { lookupContent } from "@/server/content";
import legacy from "@/content/legacy-content.json";
import { services } from "@/content/services";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const localized = /^\/(en|fa)(\/|$)/.exec(pathname);
  const headers = new Headers(request.headers);
  headers.set("x-rycode-locale", localized?.[1] === "en" ? "en" : "fa");
  headers.set(
    "x-rycode-path",
    pathname.replace(/^\/(fa|en)(?=\/|$)/, "") || "/",
  );
  if (
    request.headers.get("x-rycode-locale-rewrite") === "1" &&
    /^\/fa(?:\/|$)/.test(pathname)
  )
    return NextResponse.next({ request: { headers } });
  if (/^\/fa(?:\/|$)/.test(pathname)) {
    const canonical = request.nextUrl.clone();
    canonical.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(canonical, 308);
  }
  const target = await managedRedirect(pathname);
  if (target)
    return NextResponse.redirect(
      new URL(target.destination, request.url),
      target.permanent ? 308 : 307,
    );
  const contentPath = /^\/(blog|work|services|pages)\/([^/]+)$/.exec(
    headers.get("x-rycode-path") || "",
  );
  if (contentPath) {
    const kind = {
      blog: "ARTICLE",
      work: "PROJECT",
      services: "SERVICE",
      pages: "PAGE",
    }[contentPath[1]] as "ARTICLE" | "PROJECT" | "SERVICE" | "PAGE";
    const slug = decodeURIComponent(contentPath[2]);
    const result = await lookupContent(
      kind,
      slug,
      localized?.[1] === "en" ? "en" : "fa",
    );
    const fallback =
      kind === "SERVICE"
        ? services.some((s) => s.id === slug)
        : legacy.some((item) => item.kind === kind && item.slug === slug);
    if ((result.owned && !result.content) || (!result.owned && !fallback)) {
      const missing = request.nextUrl.clone();
      missing.pathname = localized?.[1] === "en" ? "/en/404" : "/fa/404";
      headers.set("x-rycode-locale-rewrite", "1");
      return NextResponse.rewrite(missing, { request: { headers } });
    }
  }
  if (localized) return NextResponse.next({ request: { headers } });
  const destination = request.nextUrl.clone();
  destination.pathname = `/fa${pathname === "/" ? "" : pathname}`;
  headers.set("x-rycode-locale-rewrite", "1");
  return NextResponse.rewrite(destination, { request: { headers } });
}

export const config = {
  matcher: ["/((?!api|media|_next|assets|brand|.*\\..*).*)"],
};
