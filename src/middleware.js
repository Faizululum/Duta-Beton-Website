import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "dbmsecretkey";

export function middleware(req) {
  const token = req.cookies.get("admin-token")?.value;
  const url = req.nextUrl;

  if (url.pathname.startsWith("/admin") && url.pathname !== "/admin/login") {
    try {
      jwt.verify(token, SECRET);
    } catch (err) {
      return new NextResponse(null, { status: 404 });
    }
  }

  if (token && url.pathname === "/admin/login") {
    try {
      jwt.verify(token, SECRET);
      return NextResponse.redirect(new URL("/admin/project", req.url));
    } catch (err) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
