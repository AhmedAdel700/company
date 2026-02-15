import React from "react";
import {
  MapPin,
  Building2,
  TrendingUp,
  ArrowRight,
  HomeIcon,
} from "lucide-react";

interface Compound {
  id: number;
  name: string;
  location: string;
  properties: number;
  image: string;
  trend: string;
}

const compounds: Compound[] = [
  {
    id: 1,
    name: "Palm Hills",
    location: "6th October City",
    properties: 450,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    trend: "+12%",
  },
  {
    id: 2,
    name: "Madinaty",
    location: "New Cairo",
    properties: 680,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    trend: "+8%",
  },
  {
    id: 3,
    name: "Allegria",
    location: "Sheikh Zayed",
    properties: 320,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    trend: "+15%",
  },
  {
    id: 4,
    name: "Mountain View",
    location: "New Cairo",
    properties: 540,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    trend: "+10%",
  },
  {
    id: 5,
    name: "Hyde Park",
    location: "New Cairo",
    properties: 420,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    trend: "+18%",
  },
  {
    id: 6,
    name: "Sodic West",
    location: "Sheikh Zayed",
    properties: 380,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
    trend: "+13%",
  },
];

const FeaturedCompounds = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <HomeIcon className="w-5 h-5 text-[var(--color-secondary)]" />
              <span
                className="text-sm font-bold uppercase tracking-wider"
                style={{ color: "var(--color-secondary)" }}
              >
                Premium Communities
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-3">
              Featured Compounds
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-xl">
              Discover premium residential communities across Egypt
            </p>
          </div>

          <button
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:gap-4 text-white"
            style={{ backgroundColor: "var(--color-secondary)" }}
          >
            Explore All Compounds
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {compounds.map((compound) => (
            <div
              key={compound.id}
              className="group rounded-2xl overflow-hidden border-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              style={{
                backgroundColor: "var(--color-background-alt)",
                borderColor: "var(--border-color)",
              }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={compound.image}
                  alt={compound.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Trend Badge */}
                <div
                  className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white"
                  style={{ backgroundColor: "var(--color-secondary)" }}
                >
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-semibold">
                    {compound.trend}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
                  {compound.name}
                </h3>

                <div className="flex items-center gap-2 text-[var(--color-text-secondary)] mb-4">
                  <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                  <span className="text-sm">{compound.location}</span>
                </div>

                <div
                  className="flex items-center justify-between p-3 rounded-xl mb-5"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[var(--color-accent)]" />
                    <span className="text-sm text-[var(--color-text-secondary)]">
                      Properties
                    </span>
                  </div>
                  <span className="font-bold text-[var(--color-text-primary)]">
                    {compound.properties}
                  </span>
                </div>

                <button className="w-full flex items-center justify-center gap-2 py-3 mt-auto text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 cursor-pointer bg-(--color-secondary)">
                  View Properties
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="text-center mt-12 md:hidden">
          <button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-white"
            style={{ backgroundColor: "var(--color-secondary)" }}
          >
            Explore All Compounds
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompounds;
