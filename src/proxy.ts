import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.[^/]+$/;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const isEnglishPath = pathname === "/en" || pathname.startsWith("/en/");

  if (isEnglishPath) {
    const rewrittenUrl = request.nextUrl.clone();
    rewrittenUrl.pathname = pathname === "/en" ? "/" : pathname.slice(3);

    const requestHeaders = new Headers(request.headers);
    const cookies = (request.headers.get("cookie") ?? "")
      .split(";")
      .map((cookie) => cookie.trim())
      .filter((cookie) => cookie && !cookie.startsWith("officina-locale="));
    requestHeaders.set("cookie", [...cookies, "officina-locale=en"].join("; "));

    const response = NextResponse.rewrite(rewrittenUrl, {
      request: { headers: requestHeaders },
    });
    response.cookies.set("officina-locale", "en", {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
      sameSite: "lax",
    });
    return response;
  }

  if (request.cookies.get("officina-locale")?.value === "en") {
    const englishUrl = request.nextUrl.clone();
    englishUrl.pathname = pathname === "/" ? "/en" : `/en${pathname}`;
    return NextResponse.redirect(englishUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png).*)"],
};
