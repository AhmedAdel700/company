// ... imports
import {
  MapPin,
  Building2,
  TrendingUp,
  ArrowRight,
  HomeIcon,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { compounds } from "@/lib/data";
import CompoundCard from "@/components/CompoundCard/CompoundCard";

const FeaturedCompounds = () => {
  // Take first 6 compounds for featured section
  const featuredCompounds = compounds.slice(0, 6);

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
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

          <Link
            href="/compounds"
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:gap-4 text-white"
            style={{ backgroundColor: "var(--color-secondary)" }}
          >
            Explore All Compounds
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredCompounds.map((compound) => (
            <div key={compound.id} className="h-full">
              <CompoundCard compound={compound} />
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="text-center mt-12 md:hidden">
          <Link
            href="/compounds"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-white"
            style={{ backgroundColor: "var(--color-secondary)" }}
          >
            Explore All Compounds
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};


export default FeaturedCompounds;
