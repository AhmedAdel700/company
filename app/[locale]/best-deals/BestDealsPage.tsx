"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { deals } from "@/lib/data";
import DealCard from "@/components/BestDeals/DealCard";
import { Search, Tag } from "lucide-react";
import hero1 from "@/app/images/hero1.avif";
import PageHero from "@/components/General/PageHero";
import FilterSearch from "@/components/General/FilterSearch";
import FilterDropdown from "@/components/General/FilterDropdown";
import PriceRangeDropdown from "@/components/General/PriceRangeDropdown";
import Pagination from "@/components/General/Pagination";
import { MapPin, Banknote } from "lucide-react";

const ITEMS_PER_PAGE = 9;

export default function BestDealsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedType, setSelectedType] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Extract unique types and locations
  const propertyTypes = useMemo(() => ["All", ...new Set(deals.map(d => d.type))], []);
  const locationOptions = useMemo(() => {
    const uniqueLocations = ["All", ...new Set(deals.map(d => d.location))];
    return uniqueLocations.map(loc => ({
      label: loc,
      value: loc,
      icon: loc === "All" ? undefined : MapPin
    }));
  }, []);

  // Filter deals based on search, type, location, and price
  const filteredDeals = useMemo(() => {
    return deals.filter((deal) => {
      const matchesSearch = deal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deal.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deal.compound.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = selectedType === "All" || deal.type === selectedType;
      const matchesLocation = selectedLocation === "All" || deal.location === selectedLocation;

      // Price filtering logic
      let matchesPrice = true;
      const price = parseFloat(deal.discountedPrice.replace(/,/g, ""));
      if (minPrice && price < parseFloat(minPrice)) matchesPrice = false;
      if (maxPrice && price > parseFloat(maxPrice)) matchesPrice = false;

      return matchesSearch && matchesType && matchesLocation && matchesPrice;
    });
  }, [searchQuery, selectedType, selectedLocation, minPrice, maxPrice]);

  // Pagination logic
  const totalPages = Math.ceil(filteredDeals.length / ITEMS_PER_PAGE);
  const currentDeals = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredDeals.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredDeals, currentPage]);

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
        title={<>Best <span className="text-(--color-secondary)">Deals</span> This Week</>}
        subtitle="Exclusive discounts on premium properties. Discover the most valuable investment opportunities in top-tier locations."
        image={hero1}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Search & Filter Bar */}
        <div className="space-y-6 mb-10">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 w-full">
              <FilterSearch
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search deals by title, location, or compound..."
              />
            </div>

            <div className="w-full md:w-64">
              <FilterDropdown
                label="Location"
                value={selectedLocation}
                options={locationOptions}
                onChange={(val) => {
                  setSelectedLocation(val);
                  setCurrentPage(1);
                }}
                icon={MapPin}
              />
            </div>

            <div className="w-full md:w-64">
              <PriceRangeDropdown
                minPrice={minPrice}
                maxPrice={maxPrice}
                onRangeChange={(min, max) => {
                  setMinPrice(min);
                  setMaxPrice(max);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>

          {/* Type Pills */}
          <div className="flex flex-wrap gap-2 p-2 bg-(--color-background-alt)/40 rounded-2xl border border-(--border-color)">
            {propertyTypes.map((type) => {
              const isActive = selectedType === type;
              return (
                <button
                  key={type}
                  onClick={() => {
                    setSelectedType(type);
                    setCurrentPage(1);
                  }}
                  className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${isActive
                    ? "text-white shadow-lg scale-105"
                    : "bg-(--color-background) text-(--color-text-secondary) hover:text-(--color-secondary)"
                    }`}
                  style={isActive ? { backgroundColor: "var(--color-secondary)" } : {}}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-(--color-text-primary) flex items-center gap-2">
            <Tag className="w-5 h-5 text-(--color-secondary)" />
            {filteredDeals.length} Deals Found
          </h2>
          <div className="text-sm text-(--color-text-secondary) font-semibold tabular-nums px-3 py-1.5 rounded-lg bg-(--color-background-alt) border border-(--border-color)">
            {currentPage} / {totalPages || 1}
          </div>
        </div>

        {/* Grid */}
        {currentDeals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-14">
            {currentDeals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-(--color-background-alt) rounded-full mb-4">
              <Search className="w-8 h-8 text-(--color-text-secondary)" />
            </div>
            <h3 className="text-xl font-bold text-(--color-text-primary) mb-2">No deals found</h3>
            <p className="text-(--color-text-secondary)">
              Try adjusting your search query to find the perfect deal.
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
