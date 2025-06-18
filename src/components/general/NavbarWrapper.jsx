"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();

  const transparentPaths = ["/project", "/calculator", "/contact"];
  const isTransparent =
    pathname === "/" || transparentPaths.some((p) => pathname.startsWith(p));

  return <Navbar variant={isTransparent ? "transparent" : "default"} />;
}
