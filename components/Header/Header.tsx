"use client";

import { useRef, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import LanguageSwitcher from "../Custom/LanguageSwitcher";
import DrawerMenu from "./DrawerMenu";
import PopupMenu from "./PopupMenu";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

interface HeaderProps {
  type?: "drawer" | "popup";
}

export default function Header({ type = "popup" }: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const t = useTranslations("header");

  const { theme, setTheme } = useTheme();

  // Nav items now link to pages (remove scroll logic)
  const navItems = [
    { name: t("Home"), href: "/home" },
    { name: t("About"), href: "/about" },
    { name: t("Services"), href: "/services" },
    { name: t("Projects"), href: "/projects" },
    { name: t("Contact"), href: "/contact-us" },
  ];

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-99 bg-(--color-primary) text-(--color-text-primary) md:py-2 transition-all"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between relative">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold transition-all duration-300 hover:scale-105 text-(--color-text-primary)"
        >
          Logo
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <div ref={navRef} className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-base font-medium transition-all duration-300 hover:scale-105 hover:text-(--color-secondary) text-(--color-text-primary)"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-0.5 bg-(--color-primary) rounded-full w-0 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Language Switcher + Theme Switcher */}
          <div className="flex items-center gap-4">
            <div
              ref={langRef}
              className="transition-all duration-300 hover:scale-105"
            >
              <LanguageSwitcher />
            </div>

            {/* Theme Switcher Icon */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-(--color-text-primary)" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          {type === "drawer" ? (
            <DrawerMenu navItems={navItems} locale={locale} />
          ) : (
            <PopupMenu navItems={navItems} />
          )}
        </div>
      </div>
    </header>
  );
}
