import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const localized = /^\/(en|fa)(\/|$)/.exec(pathname);
  const headers = new Headers(request.headers);
  headers.set("x-rycode-locale", localized?.[1] === "fa" ? "fa" : "en");
  if (localized) return NextResponse.next({ request: { headers } });
  const destination = request.nextUrl.clone();
  destination.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(destination, { request: { headers } });
}

export const config = {
  matcher: ["/((?!api|_next|assets|brand|.*\\..*).*)"],
};
