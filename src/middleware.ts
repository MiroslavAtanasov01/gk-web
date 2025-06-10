import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = ["/login", "/register"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("auth_token")?.value;

  const isPublic = publicRoutes.some((route) => pathname.startsWith(route));

  // If user is logged in and tries to visit a public page, redirect to home
  if (token && isPublic) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // If user is not logged in and tries to visit a protected page, redirect to login
  if (!token && !isPublic && !pathname.startsWith("/api")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - _next (internal)
     * - static/image/favicon/etc.
     */
    "/((?!_next/static|_next/image|favicon.ico|images).*)",
  ],
};
