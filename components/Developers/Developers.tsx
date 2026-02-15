"use client";

import { Building, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

// Mock Data for Developers
const developers = [
  {
    id: 1,
    name: "Emaar Misr",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Emaar_Properties_logo.svg/1200px-Emaar_Properties_logo.svg.png",
    projects: 15,
  },
  {
    id: 2,
    name: "Palm Hills",
    logo: "https://seeklogo.com/images/P/palm-hills-developments-logo-A356A2F2C5-seeklogo.com.png",
    projects: 12,
  },
  {
    id: 3,
    name: "TMG",
    logo: "https://seeklogo.com/images/T/talaat-moustafa-group-logo-F91D501712-seeklogo.com.png",
    projects: 20,
  },
  {
    id: 4,
    name: "Mountain View",
    logo: "https://seeklogo.com/images/M/mountain-view-egypt-logo-8A7C6E0F1A-seeklogo.com.png",
    projects: 10,
  },
  {
    id: 5,
    name: "Sodic",
    logo: "https://seeklogo.com/images/S/sodic-logo-5D129E0F21-seeklogo.com.png",
    projects: 14,
  },
  {
    id: 6,
    name: "Orascom",
    logo: "https://seeklogo.com/images/O/orascom-development-holding-logo-5F5B361863-seeklogo.com.png",
    projects: 9,
  },
  {
    id: 7,
    name: "Hyde Park",
    logo: "https://seeklogo.com/images/H/hyde-park-logo-8A9E1F0C1B-seeklogo.com.png",
    projects: 8,
  },
  {
    id: 8,
    name: "City Edge",
    logo: "https://seeklogo.com/images/C/city-edge-developments-logo-1A2B3C4D5E-seeklogo.com.png", // Generic Placeholder if real logo URL fails, but using consistent structure
    projects: 11,
  }
];

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
          reverse && "direction-reverse"
        )}
        style={{ 
            animationDuration: duration,
            animationDirection: reverse ? "reverse" : "normal"
        }}
      >
        {/* Quadruple the content to ensure extremely smooth loop without gaps or glitches */}
        {[...developers, ...developers, ...developers, ...developers].map((dev, idx) => (
          <div
            key={`${dev.id}-${idx}`}
            className="group bg-(--color-background) p-6 rounded-2xl border border-(--border-color) hover:border-(--color-secondary) transition-all duration-300 hover:shadow-lg flex flex-col items-center justify-center text-center gap-4 cursor-pointer mx-2"
          >
            <div className="w-16 h-16 relative flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100">
                <Building className="w-8 h-8 text-(--color-text-secondary) group-hover:text-(--color-secondary) transition-colors" />
            </div>
            <div>
              <h3 className="text-base font-bold text-(--color-text-primary) group-hover:text-(--color-secondary) transition-colors">
                {dev.name}
              </h3>
              <p className="text-xs text-(--color-text-secondary)">
                {dev.projects} Projects
              </p>
            </div>
          </div>
        ))}
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
            {renderColumn("80s", true)}
            
            {/* Column 2: Faster, Top to Bottom */}
            {renderColumn("50s", true)}

            {/* Column 3: Medium, Top to Bottom */}
            {renderColumn("70s", true)}
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
