"use client";

import { useState, useMemo } from "react";
import { cities } from "@/lib/data";
import CityCard from "@/components/CityCard/CityCard";
import { Search, MapPin } from "lucide-react";
import hero1 from "@/app/images/hero1.avif";
import PageHero from "@/components/General/PageHero";
import FilterSearch from "@/components/General/FilterSearch";
import Pagination from "@/components/General/Pagination";
import { useTranslations } from "next-intl";

const ITEMS_PER_PAGE = 12;

export default function CitiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [trendingOnly] = useState(false);
  const t = useTranslations("cities");

  // Filter cities based on search query and trending status
  const filteredCities = useMemo(() => {
    return cities.filter((city) => {
      const matchesSearch = city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        city.region.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTrending = trendingOnly ? city.trending : true;
      return matchesSearch && matchesTrending;
    });
  }, [searchQuery, trendingOnly]);

  // Pagination logic
  const totalPages = Math.ceil(filteredCities.length / ITEMS_PER_PAGE);
  const currentCities = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCities.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredCities, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  return (
    <div className="min-h-screen bg-(--color-background)">
      <PageHero
        title={<>Find Your <span className="text-(--color-secondary)">Perfect</span> City</>}
        subtitle="Explore the most exclusive properties in top-tier locations. From vibrant urban centers to peaceful coastal retreats."
        image={hero1}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
          <div className="flex-1 w-full">
            <FilterSearch
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search by city, region, or keyword..."
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-(--color-text-primary) flex items-center gap-2">
            <MapPin className="w-5 h-5 text-(--color-secondary)" />
            {filteredCities.length} Cities Found
          </h2>
          <div className="text-sm text-(--color-text-secondary) font-semibold tabular-nums px-3 py-1.5 rounded-lg bg-(--color-background-alt) border border-(--border-color)">
            {t("pageInfo", { current: currentPage, total: totalPages || 1 })}
          </div>
        </div>

        {/* Grid */}
        {currentCities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lx:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {currentCities.map((city) => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-(--color-background-alt) rounded-full mb-4">
              <Search className="w-8 h-8 text-(--color-text-secondary)" />
            </div>
            <h3 className="text-xl font-bold text-(--color-text-primary) mb-2">No cities found</h3>
            <p className="text-(--color-text-secondary)">
              Try adjusting your search query to find what you are looking for.
            </p>
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
