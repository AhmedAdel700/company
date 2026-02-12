"use client";

import { useRef, useEffect, useState } from "react";
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
  const locale = useLocale();
  const t = useTranslations("header");
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: t("Home"), href: "/home" },
    { name: t("About"), href: "/about" },
    { name: t("Services"), href: "/services" },
    { name: t("Projects"), href: "/projects" },
    { name: t("Contact"), href: "/contact-us" },
  ];

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 text-(--color-text-primary) md:py-2 transition-all"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg transition-transform duration-300 hover:scale-105"
        >
          Logo
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-base font-medium transition-transform duration-300 hover:scale-105 hover:text-(--color-secondary)"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-(--color-secondary) rounded-full group-hover:w-full transition-all duration-300" />
            </Link>
          ))}

          {/* Buttons: Language + Theme */}
          <div className="flex items-center gap-6">
            <LanguageSwitcher />

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {mounted && (
                theme === "dark" ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-(--color-text-primary)" />
                )
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
