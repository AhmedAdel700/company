"use client";

import { useState, useMemo } from "react";
import { compounds } from "@/lib/data";
import CompoundCard from "@/components/CompoundCard/CompoundCard";
import { Search, MapPin, HomeIcon } from "lucide-react";
import hero1 from "@/app/images/hero1.avif";
import PageHero from "@/components/General/PageHero";
import FilterSearch from "@/components/General/FilterSearch";
import FilterDropdown from "@/components/General/FilterDropdown";
import Pagination from "@/components/General/Pagination";
import { useTranslations } from "next-intl";

const ITEMS_PER_PAGE = 12;

export default function CompoundsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState("All");
  const t = useTranslations("compounds");

  // Get unique locations for filter
  const locationOptions = useMemo(() => {
    const uniqueLocations = ["All", ...new Set(compounds.map(c => c.location))];
    return uniqueLocations.map(loc => ({
      label: loc,
      value: loc,
      icon: loc === "All" ? undefined : MapPin
    }));
  }, []);

  // Filter compounds based on search query and location
  const filteredCompounds = useMemo(() => {
    return compounds.filter((compound) => {
      const matchesSearch = compound.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        compound.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLocation = selectedLocation === "All" || compound.location === selectedLocation;
      return matchesSearch && matchesLocation;
    });
  }, [searchQuery, selectedLocation]);

  // Pagination logic
  const totalPages = Math.ceil(filteredCompounds.length / ITEMS_PER_PAGE);
  const currentCompounds = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCompounds.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredCompounds, currentPage]);

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
        title={<>Find Your <span className="text-(--color-secondary)">Dream</span> Home</>}
        subtitle="Discover the finest residential compounds and gated communities. Luxury living re-imagined."
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
              placeholder="Search by compound name or location..."
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
        </div>

        {/* Results Count */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-(--color-text-primary) flex items-center gap-2">
            <HomeIcon className="w-5 h-5 text-(--color-secondary)" />
            {filteredCompounds.length} Compounds Found
          </h2>
          <div className="text-sm text-(--color-text-secondary) font-semibold tabular-nums px-3 py-1.5 rounded-lg bg-(--color-background-alt) border border-(--border-color)">
            {t("pageInfo", { current: currentPage, total: totalPages || 1 })}
          </div>
        </div>

        {/* Grid */}
        {currentCompounds.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lx:grid-cols-4 gap-6 lg:gap-8 mb-14">
            {currentCompounds.map((compound) => (
              <div key={compound.id} className="h-full">
                <CompoundCard compound={compound} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-(--color-background-alt) rounded-full mb-4">
              <Search className="w-8 h-8 text-(--color-text-secondary)" />
            </div>
            <h3 className="text-xl font-bold text-(--color-text-primary) mb-2">No compounds found</h3>
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
