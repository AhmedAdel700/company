"use client";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link, useRouter, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleSwitch = (newLocale: "en" | "ar") => {
    if (newLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  const socialLinks = [
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Facebook", href: "#", icon: Facebook },
  ];

  const mainLinks = [
    { name: t("Home"), href: "/" },
    { name: t("AboutLink"), href: "/about" },
    { name: t("Services"), href: "/services" },
    { name: t("Projects"), href: "/projects" },
    { name: t("Contact"), href: "/contact-us" },
  ];

  const serviceLinks = [
    { name: t("Privacy"), href: "#" },
    { name: t("Terms"), href: "#" },
    { name: t("FAQ"), href: "#" },
    { name: t("Help"), href: "#" },
  ];

  return (
    <footer className="pt-16 pb-8 border-t border-(--border-color) bg-(--color-background)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-block text-3xl font-bold text-[var(--color-text-primary)] hover:text-[var(--color-secondary)] transition-colors mb-4"
            >
              Logo<span className="text-[var(--color-secondary)]">.</span>
            </Link>
            <p className="text-(--color-text-secondary) mb-6 max-w-sm leading-relaxed">
              {t("Tagline")}
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-300 hover:scale-110 group"
                    style={{
                      borderColor: "var(--border-color)",
                      backgroundColor: "var(--color-background)",
                      color: "var(--color-text-secondary)",
                    }}
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4 group-hover:text-[var(--color-secondary)] transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-primary)] mb-4">
              {t("QuickLinks")}
            </h3>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-secondary)] transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-primary)] mb-4">
              {t("Services")}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-secondary)] transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-primary)] mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@company.com"
                  className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-secondary)] transition-colors group"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    <Mail className="w-4 h-4 text-[var(--color-secondary)]" />
                  </div>
                  <span>contact@company.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+201234567890"
                  className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-secondary)] transition-colors group"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    <Phone className="w-4 h-4 text-[var(--color-secondary)]" />
                  </div>
                  <span>+20 123 456 7890</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[var(--color-text-secondary)]">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    <MapPin className="w-4 h-4 text-[var(--color-secondary)]" />
                  </div>
                  <span>
                    123 Real Estate St.
                    <br />
                    New Cairo, Egypt
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: "var(--border-color)" }}
        >
          <p className="text-sm text-[var(--color-text-secondary)]">
            {t("Copyright")}
          </p>

          <div className="flex gap-6">
            <button
              onClick={() => handleSwitch("en")}
              disabled={isPending}
              className={`text-sm transition-colors cursor-pointer ${locale === "en" ? "text-(--color-secondary) font-bold" : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"}`}
            >
              English
            </button>
            <button
              onClick={() => handleSwitch("ar")}
              disabled={isPending}
              className={`text-sm transition-colors cursor-pointer ${locale === "ar" ? "text-(--color-secondary) font-bold" : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"}`}
            >
              العربية
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}