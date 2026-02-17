"use client";

import ContactSection from "@/components/ContactSection/ContactSection";
import hero1 from "@/app/images/hero1.avif";
import { useTranslations } from "next-intl";
import PageHero from "@/components/General/PageHero";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <div className="min-h-screen bg-(--color-background)">
      <PageHero
        title={<>{t("HeroTitle")}{" "} <span className="text-(--color-secondary)">{t("HeroHighlight")}</span></>}
        subtitle={t("HeroSubtitle")}
        image={hero1}
      />

      <div className="pt-12">
        <ContactSection />
      </div>
    </div>
  );
}
