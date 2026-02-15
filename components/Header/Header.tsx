"use client";

import { useRef, useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import LanguageSwitcher from "../Custom/LanguageSwitcher";
import DrawerMenu from "./DrawerMenu";
import PopupMenu from "./PopupMenu";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

interface HeaderProps {
  type?: "drawer" | "popup";
}

export default function Header({ type = "popup" }: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const locale = useLocale();
  const t = useTranslations("header");
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: t("Home"), href: "/" },
    { name: t("Cities"), href: "/cities" },
    { name: t("Developers"), href: "/developers" },
    { name: t("Compounds"), href: "/compounds" },
    { name: t("Contact"), href: "/contact-us" },
  ];

  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-background-alt)] text-[var(--color-text-primary)] shadow-md"
          : "bg-transparent text-[var(--color-text-primary)]"
      }`}
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
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-base font-medium transition-all duration-300 hover:scale-105 ${
                  isActive
                    ? "text-[var(--color-secondary)] font-bold scale-105"
                    : "hover:text-[var(--color-secondary)]"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-full bg-[var(--color-secondary)]"
                      : "w-0 bg-[var(--color-secondary)] group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

          {/* Buttons: Language + Theme */}
          <div className="flex items-center gap-6">
            <LanguageSwitcher />

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {mounted &&
                (theme === "dark" ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-[var(--color-text-primary)]" />
                ))}
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
