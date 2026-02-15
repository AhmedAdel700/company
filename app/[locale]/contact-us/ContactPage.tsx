"use client";

import ContactSection from "@/components/ContactSection/ContactSection";
import hero1 from "@/app/images/hero1.avif";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <div className="min-h-screen bg-(--color-background) pb-20">
      {/* Hero Section (Reused style from Developers/Cities) */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden mb-12">
        <div className="absolute inset-0 z-0">
          <Image
            src={hero1}
            alt="Contact Us"
            fill
            className="object-cover parallax-bg"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-black/40" />
           <div className="absolute inset-0 bg-linear-to-t from-(--color-background) via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
            {t("HeroTitle")}{" "}
            <span className="text-(--color-secondary)">{t("HeroHighlight")}</span>
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto font-light drop-shadow-md">
            {t("HeroSubtitle")}
            </p>
        </div>
      </div>

      <ContactSection />
    </div>
  );
}
