import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import DealCard from "./DealCard";
import { deals } from "@/lib/data";
import { Link } from "@/i18n/navigation";

const BestDeals = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
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

          <Link
            href="/best-deals"
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:gap-4 text-white"
            style={{ backgroundColor: "var(--color-secondary)" }}
          >
            Explore More Deals
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {deals.slice(0, 6).map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 md:hidden">
          <Link
            href="/best-deals"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-white"
            style={{ backgroundColor: "var(--color-secondary)" }}
          >
            Explore More Deals
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestDeals;
