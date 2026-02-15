"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { compounds } from "@/lib/data";
import CompoundCard from "@/components/CompoundCard/CompoundCard";
import { Search, MapPin, ChevronLeft, ChevronRight, HomeIcon } from "lucide-react";
import hero1 from "@/app/images/hero1.avif";

const ITEMS_PER_PAGE = 20;

export default function CompoundsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter compounds based on search query
  const filteredCompounds = useMemo(() => {
    return compounds.filter((compound) =>
      compound.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      compound.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

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
    <div className="min-h-screen bg-(--color-background) pb-20">
      {/* Premium Header Section */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={hero1} // Using same hero image for consistency, or we could change it
            alt="Compounds Background"
            fill
            className="object-cover parallax-bg"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-linear-to-t from-(--color-background) via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium tracking-wider uppercase mb-4">
            Exclusive Communities
          </span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Find Your <span className="text-(--color-secondary)">Dream</span> Home
          </h1>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow-md">
            Discover the finest residential compounds and gated communities. 
            Luxury living re-imagined.
          </p>

          {/* Premium Search Bar */}
          <div className="max-w-3xl mx-auto relative group">
            {/* Glow effect matching brand color */}
            <div className="absolute -inset-1 bg-linear-to-r from-(--color-secondary) to-(--color-primary-light) rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-500" />
            
            <div className="relative flex items-center p-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl">
              <Search className="w-6 h-6 ms-4 text-(--color-secondary)" />
              <input
                type="text"
                placeholder="Search by compound name or location..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full px-4 py-4 bg-transparent border-none outline-none text-white placeholder:text-white/60 text-lg font-medium"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-20 max-w-7xl">
        {/* Results Count */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-(--color-text-primary) flex items-center gap-2">
            <HomeIcon className="w-5 h-5 text-(--color-secondary)" />
            {filteredCompounds.length} Compounds Found
          </h2>
          <div className="text-sm text-(--color-text-secondary)">
             Page {currentPage} of {totalPages || 1}
          </div>
        </div>

        {/* Grid */}
        {currentCompounds.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lx:grid-cols-4 gap-6 lg:gap-8 mb-16">
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-3 rounded-xl border border-(--color-text-secondary)/20 text-(--color-text-primary) disabled:opacity-50 disabled:cursor-not-allowed hover:bg-(--color-background-alt) transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => {
                const page = i + 1;
                return (
                   <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-xl font-bold transition-all duration-300 cursor-pointer ${
                      currentPage === page
                        ? "bg-(--color-secondary) text-white shadow-lg scale-110"
                        : "bg-(--color-background-alt) text-(--color-text-secondary) hover:bg-(--color-secondary)/10 hover:text-(--color-secondary)"
                    }`}
                  >
                    {page}
                  </button>
                )
              })}
            </div>

            <button
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-3 rounded-xl border border-(--color-text-secondary)/20 text-(--color-text-primary) disabled:opacity-50 disabled:cursor-not-allowed hover:bg-(--color-background-alt) transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
