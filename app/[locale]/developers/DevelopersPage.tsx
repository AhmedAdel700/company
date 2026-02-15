"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { developers } from "@/lib/data";
import { ArrowRight, Building2, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useMemo } from "react";
import hero1 from "@/app/images/hero1.avif";

const ITEMS_PER_PAGE = 20;

export default function DevelopersPage() {
  const t = useTranslations("developers");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter developers based on search query
  const filteredDevelopers = useMemo(() => {
    return developers.filter((dev) =>
      dev.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Pagination logic
  const totalPages = Math.ceil(filteredDevelopers.length / ITEMS_PER_PAGE);
  const currentDevelopers = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredDevelopers.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredDevelopers, currentPage]);

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
            src={hero1}
            alt="Developers Background"
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
            {t("eyebrow")}
          </span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            {t("heroTitle")}{" "} <span className="text-(--color-secondary)">{t("heroHighlight")}</span>
          </h1>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow-md">
            {t("description")}
          </p>

          {/* Premium Search Bar */}
          <div className="max-w-3xl mx-auto relative group">
            {/* Glow effect matching brand color */}
            <div className="absolute -inset-1 bg-linear-to-r from-(--color-secondary) to-(--color-primary-light) rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-500" />
            
            <div className="relative flex items-center p-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl">
              <Search className="w-6 h-6 ms-4 text-(--color-secondary)" />
              <input
                type="text"
                placeholder={t("searchPlaceholder")}
                value={searchQuery}
                onChange={handleSearch}
                className="w-full px-4 py-4 bg-transparent border-none outline-none text-white placeholder:text-white/60 text-lg font-medium"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-7xl">
        {/* Results Count */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-(--color-text-primary) flex items-center gap-2">
            <Building2 className="w-5 h-5 text-(--color-secondary)" />
            {filteredDevelopers.length} {t("resultsFound")}
          </h2>
          <div className="text-sm text-(--color-text-secondary)">
             {t("pageInfo", { current: currentPage, total: totalPages || 1 })}
          </div>
        </div>

        {/* Developers Grid */}
        {currentDevelopers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentDevelopers.map((dev) => (
              <Link
                key={dev.id}
                href={`/developers/${dev.id}`}
                className="group relative w-full h-full bg-(--color-background) rounded-3xl overflow-hidden border-2 border-(--border-color) shadow-xl flex flex-col hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Top Section with Logo */}
                <div className="relative h-60 p-6 bg-(--color-background-alt) flex items-center justify-center overflow-hidden group-hover:bg-(--color-background-alt)/80 transition-colors duration-500">
                  <div className="relative w-55 h-55 rounded-full transition-transform duration-500 group-hover:scale-110">
                    <Image
                      src={dev.logo}
                      alt={dev.name}
                      fill
                      className="object-cover drop-shadow-sm"
                    />
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-(--color-secondary)/5 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-(--color-primary)/5 rounded-tr-full -ml-8 -mb-8 transition-transform duration-500 group-hover:scale-150" />
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-2xl font-bold text-(--color-text-primary) mb-2 text-center">
                    {dev.name}
                  </h3>
                  
                  <div className="flex items-center justify-center gap-2 text-(--color-text-secondary) mb-6">
                    <Building2 className="w-5 h-5 text-(--color-secondary)" />
                    <span className="font-medium">
                      {dev.projects} {t("projects")}
                    </span>
                  </div>

                  {/* Button */}
                  <div className="mt-auto pt-4 border-t border-(--border-color) w-full">
                    <div className="w-full flex items-center justify-center gap-2 py-3 text-white rounded-xl font-semibold transition-all duration-300 cursor-pointer bg-(--color-secondary) shadow-md group-hover:shadow-lg group-hover:bg-(--color-secondary)/90">
                      {t("viewDetails")}
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            </div>
        ) : (
            <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-(--color-background-alt) rounded-full mb-4">
                  <Search className="w-8 h-8 text-(--color-text-secondary)" />
                </div>
                <h3 className="text-xl font-bold text-(--color-text-primary) mb-2">{t("noResults")}</h3>
                <p className="text-(--color-text-secondary)">
                  {t("noResultsDesc")}
                </p>
            </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-16">
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
