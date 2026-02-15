"use client";

import {
  MapPin,
  ArrowRight,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { cities } from "@/lib/data";
import Image from "next/image";

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
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
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

          <button
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:gap-4 text-white"
            style={{ backgroundColor: "var(--color-secondary)" }}
          >
            Explore All Cities
            <ArrowRight className="w-5 h-5" />
          </button>
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
                  <div className="w-[85vw] sm:w-105 min-h-140 sm:h-150 rounded-3xl overflow-hidden border-2 border-(--border-color) shadow-xl flex flex-col">
                    {/* Image */}
                    <div className="relative h-72 sm:h-80 overflow-hidden">
                      <Image
                        src={city.image}
                        alt="City Image"
                        className="absolute inset-0 h-full w-full object-cover"
                        width={400}
                        height={400}
                      />

                      {city.trending && (
                        <div
                          className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full"
                          style={{ background: "var(--color-secondary)" }}
                        >
                          <TrendingUp className="w-4 h-4 text-white" />
                          <span className="text-xs font-bold text-white">
                            Hot Market
                          </span>
                        </div>
                      )}

                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">
                          {city.name}
                        </h3>
                        <div className="flex items-center gap-2 text-white/90 text-sm">
                          <MapPin className="w-4 h-4" />
                          {city.region}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-5 bg-(--color-background-alt)">
                      <p className="text-sm mb-5 text-(--color-text-secondary)">
                        {city.description}
                      </p>

                      <div className="grid grid-cols-2 gap-3 mb-5">
                        <div className="p-3 rounded-xl border border-(--color-secondary)">
                          <div className="text-xs text-(--color-text-secondary)">
                            Properties
                          </div>
                          <div className="text-xl font-bold text-(--color-text-primary)">
                            {city.properties}+
                          </div>
                        </div>

                        <div className="p-3 rounded-xl border border-(--color-secondary)">
                          <div className="text-xs text-(--color-text-secondary)">
                            Avg. Price
                          </div>
                          <div className="text-xl font-bold text-(--color-text-primary)">
                            {city.averagePrice}
                          </div>
                        </div>
                      </div>

                      {/* Button always at bottom */}
                      <button className="w-full flex items-center justify-center gap-2 py-3 mt-auto text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 cursor-pointer bg-(--color-secondary)">
                        View Properties
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
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

          <button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-white"
            style={{ backgroundColor: "var(--color-secondary)" }}
          >
            Explore All Cities
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
