"use client";

import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { cities } from "@/lib/data";
import { Link } from "@/i18n/navigation";
import CityCard from "@/components/CityCard/CityCard";

export default function CitiesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cities.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cities.length) % cities.length);
  };

  const getVisibleCities = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + cities.length) % cities.length;
      visible.push({ ...cities[index], position: i });
    }
    return visible;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const distance = touchStartX - touchEndX;
    const threshold = 50;

    if (distance > threshold) nextSlide();
    if (distance < -threshold) prevSlide();
  };

  return (
    <section
      className="py-8 sm:py-12 lg:py-16 relative overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-[var(--color-secondary)]" />
              <span
                className="text-sm font-bold uppercase tracking-wider"
                style={{ color: "var(--color-secondary)" }}
              >
                Top Destinations
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-3">
              Explore Prime Locations
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-xl">
              Find your perfect home in Egypt is most sought-after cities and
              regions
            </p>
          </div>

          <Link
            href={"/cities"}
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:gap-4 text-white"
            style={{ backgroundColor: "var(--color-secondary)" }}
          >
            Explore All Cities
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Slider */}
        <div className="relative h-140 sm:h-155 mb-6">
          <div className="absolute inset-0 flex items-center justify-center">
            {getVisibleCities().map((city) => {
              const isActive = city.position === 0;

              return (
                <div
                  key={city.id}
                  className="absolute transition-all duration-700 ease-out"
                  style={{
                    transform: `translateX(${
                      city.position * 100
                    }%) scale(${isActive ? 1 : 0.85})`,
                    opacity: isActive ? 1 : 0.4,
                    zIndex: isActive ? 20 : 10,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  {/* CARD */}
                  <div className="w-[85vw] sm:w-105 min-h-140 sm:h-135">
                    <CityCard city={city} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute -left-13 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border-2 border-(--border-color) shadow-lg items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 text-(--color-text-primary)" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden md:flex absolute -right-13 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border-2 border-(--border-color) shadow-lg items-center justify-center cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 text-(--color-text-primary)" />
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-6 md:hidden">
          <p className="mb-6 text-(--color-text-secondary)">
            Can not find your city? We cover 50+ locations nationwide
          </p>

          <Link
            href={"/cities"}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-white cursor-pointer"
            style={{ backgroundColor: "var(--color-secondary)" }}
          >
            Explore All Cities
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
