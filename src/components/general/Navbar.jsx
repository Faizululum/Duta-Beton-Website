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
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Tentang", href: "/about" },
    {
      label: "Produk",
      href: "/product",
      dropdown: [
        { label: "Ready Mix", href: "/product/ready-mix" },
        { label: "Concrete Block", href: "/product/concrete-block" },
        { label: "Precast Concrete", href: "/product/precast-concrete" },
        { label: "Stenslag", href: "/product/stenslag" },
      ],
    },
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

  const getDropdownItemClass = (href) => {
    const isActive = pathname === href;
    return clsx(
      "text-sm hover-red",
      isActive ? "text-primary-red font-medium" : "text-gray-700"
    );
  };

  return (
    <nav
      className={clsx(
        "w-full h-[72px] md:h-[100px] flex justify-between items-center px-6 md:px-20 font-roboto font-normal fixed z-50 transition-all duration-300",
        {
          "bg-white drop-shadow-md text-gray-700":
            variant === "default" || isScrolled,
          "bg-transparent text-gray-700 md:text-white":
            variant === "transparent" && !isScrolled,
        }
      )}
    >
      <Link href="/">
        <Logo />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row text-desk-tagline gap-10 items-center">
        {navLinks.map((link) =>
          link.dropdown ? (
            <div key={link.label} className="relative group">
              <button
                className={clsx("text-base hover-red flex gap-thin-xs items-center", {
                  "text-primary-red font-medium":
                    pathname.startsWith("/product"),
                })}
              >
                {link.label}
                <Icon
                  icon="mdi:chevron-down"
                  className="w-regular-md h-regular-md md:w-regular-md md:h-regular-md -mr-thin-lg"
                  aria-hidden="true"
                />
              </button>
              <div className="absolute top-full -left-4 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                {link.dropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2 text-sm text-gray-700 ${getDropdownItemClass(
                      item.href
                    )}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className={getLinkClass(link.href)}
            >
              {link.label}
            </Link>
          )
        )}
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
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.label}>
                  <button
                    onClick={() => setIsProductDropdownOpen((prev) => !prev)}
                    className={`text-base text-gray-700 flex justify-between items-center w-full ${getLinkClass(
                      link.href
                    )}`}
                  >
                    {link.label}
                    <Icon
                      icon={
                        isProductDropdownOpen
                          ? "mdi:chevron-up"
                          : "mdi:chevron-down"
                      }
                      className="ml-2"
                    />
                  </button>

                  {/* Dropdown list with animasi */}
                  <div
                    ref={dropdownRef}
                    className=" duration-300 ease-in-out overflow-hidden -mb-3 pt-3 ml-2 flex flex-col gap-2"
                    style={{
                      height: isProductDropdownOpen
                        ? `${dropdownRef.current?.scrollHeight}px`
                        : "0px",
                    }}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center ${getDropdownItemClass(
                          item.href
                        )}`}
                      >
                        <Icon
                          icon="basil:caret-right-outline"
                          className="w-regular-md h-regular-md md:w-regular-lg md:h-regular-lg"
                          aria-hidden="true"
                        />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={getLinkClass(link.href)}
              >
                {link.label}
              </Link>
            );
          })}

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
