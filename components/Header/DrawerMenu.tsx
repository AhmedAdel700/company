"use client";

import { useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
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
  const pathname = usePathname();

  const drawerSide = locale === "ar" ? "left" : "right";
  const menuAlignment =
    locale === "en" ? "items-start text-left" : "items-end text-right";

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Trigger */}
      <SheetTrigger asChild>
        <Menu className="h-8 w-8 cursor-pointer text-(--color-text-primary)" />
      </SheetTrigger>

      {/* Drawer */}
      <SheetContent
        side={drawerSide}
        className="w-75 sm:w-100 flex flex-col h-screen p-0 section-gradient text-(--color-text-primary) z-999 border-none"
      >
        {/* Header (Fixed Top) */}
        <div className="p-6 pb-4">
          <SheetTitle>
            <span className="sr-only">Navigation Menu</span>
          </SheetTitle>

          <SheetHeader className={`flex flex-col ${menuAlignment}`}>
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-2xl text-(--color-text-primary)"
              onClick={() => setOpen(false)}
            >
              Logo
            </Link>
          </SheetHeader>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 pb-10 scrollbar-hide">
          <div className="flex flex-col gap-4">
            {/* Navigation Links */}
            <div className={`flex flex-col gap-3 ${menuAlignment}`}>
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-lg font-semibold py-4 px-6 w-full text-center rounded-2xl transition-all duration-300 border ${
                      isActive
                        ? "bg-(--color-secondary)/85 text-white border-transparent"
                        : "border-(--color-text-primary)/10 text-(--color-text-primary) hover:bg-(--color-secondary)/10 hover:border-(--color-secondary)/20"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Language + Theme Section */}
            <div className="flex flex-col gap-3 mt-4 mb-6">
              {/* Language */}
              <div className="p-4 rounded-2xl bg-(--color-background-alt)/50 border border-(--color-text-primary)/10 transition-all duration-300 hover:bg-(--color-background-alt) flex items-center justify-between text-(--color-text-primary)">
                <span className="font-medium">{t("Switch Language")}</span>
                <LanguageSwitcher />
              </div>

              {/* Theme */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-4 rounded-2xl bg-(--color-background-alt)/50 border border-(--color-text-primary)/10 transition-all duration-300 hover:bg-(--color-background-alt) cursor-pointer flex items-center justify-between text-(--color-text-primary)"
                aria-label="Toggle Theme"
              >
                <span className="font-medium">{t("Switch Theme")}</span>
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-(--color-text-primary)" />
                )}
              </button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
