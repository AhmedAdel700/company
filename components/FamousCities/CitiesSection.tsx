"use client";

import {
  MapPin,
  ArrowRight,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const cities = [
  {
    id: 1,
    name: "New York",
    region: "New York, USA",
    properties: 1234,
    averagePrice: "$850K",
    trending: true,
    description:
      "The city that never sleeps, featuring iconic skylines and luxury penthouses",
    image: "/cities/new-york.jpg",
  },
  {
    id: 2,
    name: "Los Angeles",
    region: "California, USA",
    properties: 987,
    averagePrice: "$1.2M",
    trending: true,
    description:
      "Sun-soaked homes with stunning views and celebrity neighborhoods",
    image: "/cities/los-angeles.jpg",
  },
  {
    id: 3,
    name: "Miami",
    region: "Florida, USA",
    properties: 756,
    averagePrice: "$680K",
    trending: false,
    description: "Beachfront properties and vibrant urban living in paradise",
    image: "/cities/miami.jpg",
  },
  {
    id: 4,
    name: "San Francisco",
    region: "California, USA",
    properties: 645,
    averagePrice: "$1.5M",
    trending: true,
    description: "Tech hub with Victorian homes and breathtaking bay views",
    image: "/cities/san-francisco.jpg",
  },
  {
    id: 5,
    name: "Chicago",
    region: "Illinois, USA",
    properties: 892,
    averagePrice: "$420K",
    trending: false,
    description: "Architectural marvels and lakefront luxury in the Windy City",
    image: "/cities/chicago.jpg",
  },
  {
    id: 6,
    name: "Austin",
    region: "Texas, USA",
    properties: 534,
    averagePrice: "$550K",
    trending: true,
    description:
      "Keep it weird with unique properties in this booming tech city",
    image: "/cities/austin.jpg",
  },
];

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

  // Touch Handling
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
      className="py-20 bg-(--color-background-alt) relative overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-(--color-primary-light) rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-(--color-secondary) rounded-full blur-3xl opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--color-primary) border border-(--color-primary-light)">
            <MapPin className="w-4 h-4 text-(--color-secondary)" />
            <span className="text-sm font-medium text-(--color-text-primary)">
              Top Destinations
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-(--color-text-primary)">
            Explore Prime
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-(--color-primary-light) to-(--color-secondary)">
              Locations
            </span>
          </h2>

          <p className="text-base sm:text-lg text-(--color-text-secondary) max-w-2xl mx-auto">
            Discover exceptional properties in America’s most desirable cities
          </p>
        </div>

        {/* Slider */}
        <div className="relative h-[560px] sm:h-[620px] mb-12">
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
                  <div className="w-[85vw] sm:w-[420px] h-[520px] sm:h-[600px] rounded-3xl overflow-hidden bg-(--color-background) border-2 border-(--color-primary-light) shadow-2xl">
                    {/* Image */}
                    <div className="relative h-72 sm:h-80 overflow-hidden">
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                      {city.trending && (
                        <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-(--color-secondary)">
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
                    <div className="p-5 space-y-5">
                      <p className="text-sm text-(--color-text-secondary)">
                        {city.description}
                      </p>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-(--color-background-alt) border border-(--color-primary-light)">
                          <div className="text-xs text-(--color-text-secondary)">
                            Properties
                          </div>
                          <div className="text-xl font-bold text-(--color-text-primary)">
                            {city.properties}+
                          </div>
                        </div>
                        <div className="p-3 rounded-xl bg-(--color-background-alt) border border-(--color-primary-light)">
                          <div className="text-xs text-(--color-text-secondary)">
                            Avg. Price
                          </div>
                          <div className="text-xl font-bold text-transparent bg-clip-text bg-linear-to-r from-(--color-primary-light) to-(--color-secondary)">
                            {city.averagePrice}
                          </div>
                        </div>
                      </div>

                      <button className="w-full flex items-center justify-center gap-2 py-3 bg-linear-to-r from-(--color-primary-light) to-(--color-secondary) text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300">
                        View Properties
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Arrows (hidden on mobile) */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute -left-10 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-(--color-background) border-2 border-(--color-primary-light) shadow-lg items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5 text-(--color-text-primary)" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden md:flex absolute -right-10 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-(--color-background) border-2 border-(--color-primary-light) shadow-lg items-center justify-center"
          >
            <ChevronRight className="w-5 h-5 text-(--color-text-primary)" />
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <p className="text-(--color-text-secondary) mb-4">
            Can’t find your city? We cover 50+ locations nationwide
          </p>
          <button className="inline-flex items-center gap-3 px-6 py-3 bg-(--color-background) border-2 border-(--color-primary-light) rounded-xl font-semibold hover:scale-105 transition-all">
            Explore All Cities
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
