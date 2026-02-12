"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Globe } from "lucide-react";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("header");

  const handleSwitch = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <button
      onClick={handleSwitch}
      disabled={isPending}
      className="cursor-pointer"
      title={locale === "en" ? "Switch to Arabic" : "Switch to English"}
    >
      <Globe className="h-5 w-5" />
      <span className="sr-only">{t("Switch Language")}</span>
    </button>
  );
}
