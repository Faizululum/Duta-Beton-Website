import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("admin-token")?.value;
  const url = req.nextUrl;

  if (!token && url.pathname.startsWith("/admin") && url.pathname !== "/admin/login") {
    return new NextResponse(null, { status: 404 });
  }

  if (token && url.pathname === "/admin/login") {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
