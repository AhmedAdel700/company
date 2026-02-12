"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import LanguageSwitcher from "../Custom/LanguageSwitcher";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

interface DrawerMenuProps {
  navItems: { name: string; href: string }[];
  locale: string;
}

export default function DrawerMenu({ navItems, locale }: DrawerMenuProps) {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const t = useTranslations("header");

  const drawerSide = locale === "ar" ? "left" : "right";
  const menuAlignment =
    locale === "en" ? "items-start text-left" : "items-end text-right";

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Trigger Button */}
      <SheetTrigger asChild>
        <Menu className="h-8 w-8 cursor-pointer text-(--color-text-primary)" />
      </SheetTrigger>

      {/* Drawer Content */}
      <SheetContent
        side={drawerSide}
        className={`w-75 sm:w-100 flex flex-col p-6 bg-(--color-background) text-(--color-text-primary) z-999`}
      >
        <SheetTitle>
          <span className="sr-only">Navigation Menu</span>
        </SheetTitle>

        {/* Header with Logo */}
        <SheetHeader className={`mb-6 flex flex-col ${menuAlignment}`}>
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-(--color-text-primary) hover:opacity-80 transition-opacity"
          >
            Logo
          </Link>
        </SheetHeader>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto">
          <div className={`flex flex-col gap-4 ${menuAlignment} pr-2`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href} // Normal page navigation
                className={`text-xl font-medium py-3 px-4 w-full text-center rounded-md border border-(--color-text-primary) text-(--color-text-primary) hover:bg-(--color-primary) hover:text-(--color-background) transition-all duration-200`}
                onClick={() => setOpen(false)} // Close drawer on click
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Language Switcher */}
        <div className="mt-auto pt-6 border-t border-(--color-accent)">
          <div className="flex items-center justify-between">
            <span className="text-(--color-text-primary)">
              {t("Switch Language")}
            </span>
            <LanguageSwitcher />
          </div>
        </div>

        {/* Theme Switcher Icon */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full transition-colors cursor-pointer flex items-center justify-between text-(--color-text-primary)"
          aria-label="Toggle Theme"
        >
          <span>{t("Switch Theme")}</span>
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-(--color-text-primary)" />
          )}
        </button>
      </SheetContent>
    </Sheet>
  );
}
