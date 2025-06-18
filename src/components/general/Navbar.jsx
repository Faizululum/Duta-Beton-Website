"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import Logo from "../ui/Logo";
import { Icon } from "@iconify/react";
import clsx from "clsx";

export default function Navbar({ variant = "default" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const sidebarRef = useRef();

  const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Tentang", href: "/about" },
    { label: "Produk", href: "/product" },
    { label: "Proyek", href: "/project" },
    { label: "Kalkulator", href: "/calculator" },
  ];

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (variant !== "transparent") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [variant]);

  const getLinkClass = (href) => {
    const isActive =
      href === "/" ? pathname === "/" : pathname.startsWith(href);
    return `text-base hover-red ${
      isActive ? "font-medium text-primary-red" : ""
    }`;
  };

  return (
    <nav
      className={clsx(
        "w-full h-[72px] md:h-[100px] flex justify-between items-center px-6 md:px-20 font-roboto font-normal fixed z-50 transition-all duration-300",
        {
          "bg-white drop-shadow-md text-gray-700":
            variant === "default" || isScrolled,
          "bg-transparent text-white": variant === "transparent" && !isScrolled,
        }
      )}
    >
      <Link href="/">
        <Logo />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row text-desk-tagline gap-10 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={getLinkClass(link.href)}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/contact">
          <Button
            label="Hubungi Kami"
            icon={
              variant === "transparent" && !isScrolled
                ? "phoneWhite"
                : "phoneRed"
            }
            variant="outline"
            color={variant === "transparent" && !isScrolled ? "white" : "red"}
          />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        aria-label="Buka menu"
        className="md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <Icon
          icon="gg:menu-right"
          width="24"
          height="24"
          color={variant === "transparent" && !isScrolled ? "white" : "#222"}
        />
      </button>

      {/* Mobile Sidebar Backdrop */}
      {isOpen && (
        <div className="fixed h-screen inset-0 z-[998] bg-black/30 md:hidden"></div>
      )}

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-[999] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-[72px] p-4 justify-end">
          <button aria-label="Tutup menu" onClick={() => setIsOpen(false)}>
            <Icon icon="gg:close" width="24" height="24" />
          </button>
        </div>
        <div className="flex flex-col h-full gap-6 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={getLinkClass(link.href)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <Button
              label="Hubungi Kami"
              color="red"
              icon="phoneRed"
              variant="outline"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
