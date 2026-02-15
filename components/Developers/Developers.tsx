"use client";

import { Building, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { developers } from "@/lib/data";

export default function Developers() {
  // Split developers into 3 columns for varied content
  // We'll just reuse the main array but maybe shuffle or offset for variety if needed
  // For simplicity, we use the same array but different speeds/directions as requested

  // Helper to render a column
  const renderColumn = (duration: string, reverse = false) => (
    <div className="relative h-[600px] overflow-hidden">
      {/* Removed Gradient Masks as requested */}

      <div
        className={cn(
          "flex flex-col gap-6 animate-marquee-vertical hover:pause-on-hover",
          reverse && "direction-reverse",
        )}
        style={{
          animationDuration: duration,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {/* Quadruple the content to ensure extremely smooth loop without gaps or glitches */}
        {[...developers, ...developers, ...developers, ...developers].map(
          (dev, idx) => (
            <div
              key={`${dev.id}-${idx}`}
              className="group relative bg-transparent
             overflow-hidden cursor-pointer mx-2
             transition-all duration-500 hover:shadow-xl 
             hover:-translate-y-1"
            >
              <div className="relative h-55 flex items-center justify-center">
                <Image
                  src={dev.logo}
                  alt={dev.name}
                  className="h-full w-full object-contain
                 grayscale group-hover:grayscale-0
                 opacity-70 group-hover:opacity-100
                 transition-all duration-500"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );

  return (
    <section className="py-8 sm:py-12 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Building className="w-5 h-5 text-(--color-secondary)" />
              <span
                className="text-sm font-bold uppercase tracking-wider"
                style={{ color: "var(--color-secondary)" }}
              >
                Market Leaders
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-(--color-text-primary) mb-3">
              Top Developers
            </h2>
            <p className="text-lg text-(--color-text-secondary) max-w-xl">
              Partnering with the most trusted names in real estate
            </p>
          </div>

          <Link
            href="/developers"
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:gap-4 text-white"
            style={{ backgroundColor: "var(--color-secondary)" }}
          >
            All Developers
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* 3-Column Vertical Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px] overflow-hidden">
          {/* Column 1: Slow, Top to Bottom? (Reverse direction) */}
          {renderColumn("100s", true)}

          {/* Column 2: Faster, Top to Bottom */}
          {renderColumn("80s", true)}

          {/* Column 3: Medium, Top to Bottom */}
          {renderColumn("120s", true)}
        </div>

        {/* Mobile CTA */}
        <div className="text-center mt-12 md:hidden">
          <Link
            href="/developers"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-white"
            style={{ backgroundColor: "var(--color-secondary)" }}
          >
            All Developers
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
