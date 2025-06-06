"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import Logo from "../ui/Logo";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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

  const getLinkClass = (href) => {
    const isActive = pathname === href;
    return `text-base ${
      isActive ? "font-medium text-primary-red" : "text-gray-700"
    }`;
  };

  return (
    <nav className="w-full h-[72px] md:h-[100px] flex justify-between items-center px-6 md:px-20 font-roboto font-normal fixed drop-shadow-md bg-white z-50">
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
          <Button label="Hubungi Kami" icon="phoneRed" variant="outline" />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        aria-label="Buka menu"
        className="md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <Icon icon="gg:menu-right" width="24" height="24" />
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
            <Button label="Hubungi Kami" icon="phoneRed" variant="outline" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
