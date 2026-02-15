import React from "react";
import { Tag, MapPin, Home, Clock, ArrowRight, Sparkles } from "lucide-react";

interface Deal {
  id: number;
  title: string;
  location: string;
  compound: string;
  originalPrice: string;
  discountedPrice: string;
  discount: string;
  image: string;
  type: string;
  area: string;
  timeLeft: string;
  featured?: boolean;
}

const deals: Deal[] = [
  {
    id: 1,
    title: "Luxury Villa with Pool",
    location: "New Cairo",
    compound: "Hyde Park",
    originalPrice: "8,500,000",
    discountedPrice: "7,200,000",
    discount: "15%",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    type: "Villa",
    area: "450 m²",
    timeLeft: "3 days",
    featured: true,
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "Sheikh Zayed",
    compound: "Allegria",
    originalPrice: "4,200,000",
    discountedPrice: "3,600,000",
    discount: "14%",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    type: "Apartment",
    area: "180 m²",
    timeLeft: "5 days",
  },
  {
    id: 3,
    title: "Penthouse with Terrace",
    location: "New Cairo",
    compound: "Madinaty",
    originalPrice: "6,800,000",
    discountedPrice: "5,800,000",
    discount: "15%",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    type: "Penthouse",
    area: "320 m²",
    timeLeft: "2 days",
    featured: true,
  },
  {
    id: 4,
    title: "Garden Duplex",
    location: "6th October",
    compound: "Palm Hills",
    originalPrice: "5,500,000",
    discountedPrice: "4,700,000",
    discount: "15%",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
    type: "Duplex",
    area: "280 m²",
    timeLeft: "7 days",
  },
  {
    id: 5,
    title: "Townhouse Premium",
    location: "New Cairo",
    compound: "Mountain View",
    originalPrice: "7,200,000",
    discountedPrice: "6,100,000",
    discount: "15%",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    type: "Townhouse",
    area: "380 m²",
    timeLeft: "4 days",
  },
  {
    id: 6,
    title: "Studio Apartment",
    location: "Sheikh Zayed",
    compound: "Sodic West",
    originalPrice: "2,800,000",
    discountedPrice: "2,400,000",
    discount: "14%",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    type: "Studio",
    area: "85 m²",
    timeLeft: "6 days",
  },
];

const BestDeals = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-[var(--color-secondary)]" />
              <span
                className="text-sm font-bold uppercase tracking-wider"
                style={{ color: "var(--color-secondary)" }}
              >
                Limited Time Offers
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-3">
              Best Deals This Week
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-xl">
              Exclusive discounts on premium properties. Do not miss out on
              these incredible opportunities.
            </p>
          </div>

          <button
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:gap-4 text-white"
            style={{ backgroundColor: "var(--color-secondary)" }}
          >
            Explore More Deals
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-(--color-background-alt) group rounded-2xl overflow-hidden border-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative"
              style={{
                borderColor: deal.featured
                  ? "var(--color-secondary)"
                  : "var(--border-color)",
              }}
            >
              {/* Featured Badge */}
              {deal.featured && (
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-bold">FEATURED</span>
                </div>
              )}

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Discount Badge */}
                <div
                  className="absolute top-4 right-4 flex items-center gap-1.5 px-4 py-2 rounded-xl text-white shadow-lg"
                  style={{ backgroundColor: "var(--color-secondary)" }}
                >
                  <Tag className="w-4 h-4" />
                  <span className="text-base font-bold">
                    {deal.discount} OFF
                  </span>
                </div>

                {/* Time Left */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-sm text-white">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-semibold">
                    {deal.timeLeft} left
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-xs font-bold px-2 py-1 rounded"
                    style={{
                      backgroundColor: "var(--color-accent)",
                      color: "white",
                    }}
                  >
                    {deal.type}
                  </span>
                  <span className="text-xs text-[var(--color-text-secondary)]">
                    {deal.area}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
                  {deal.title}
                </h3>

                <div className="flex items-center gap-2 text-[var(--color-text-secondary)] mb-4">
                  <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                  <span className="text-sm">
                    {deal.compound}, {deal.location}
                  </span>
                </div>

                {/* Pricing */}
                <div className="p-4 rounded-xl mb-5 bg-(--color-background)">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[var(--color-text-secondary)] line-through">
                      EGP {deal.originalPrice}
                    </span>
                    <span
                      className="text-xs font-bold px-2 py-1 rounded"
                      style={{
                        backgroundColor: "var(--color-secondary)",
                        color: "white",
                      }}
                    >
                      SAVE {deal.discount}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-[var(--color-secondary)]">
                      EGP {deal.discountedPrice}
                    </span>
                  </div>
                </div>

                <button
                  className="w-full flex items-center justify-center gap-2 py-3 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 cursor-pointer"
                  style={{ backgroundColor: "var(--color-secondary)" }}
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 md:hidden">
          <button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-white"
            style={{ backgroundColor: "var(--color-secondary)" }}
          >
            Explore More Deals
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestDeals;
