"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { developers } from "@/lib/data";
import { ArrowRight, Building2, Search } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import hero1 from "@/app/images/hero1.avif";
import PageHero from "@/components/General/PageHero";
import FilterSearch from "@/components/General/FilterSearch";
import FilterDropdown from "@/components/General/FilterDropdown";
import Pagination from "@/components/General/Pagination";
import { ArrowUpDown, TrendingUp } from "lucide-react";

const ITEMS_PER_PAGE = 12;

export default function DevelopersPage() {
  const t = useTranslations("developers");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("name");

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter and Sort developers
  const filteredDevelopers = useMemo(() => {
    let result = developers.filter((dev) =>
      dev.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortBy === "projects") {
      result.sort((a, b) => b.projects - a.projects);
    } else {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [searchQuery, sortBy]);

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
    <div className="min-h-screen bg-(--color-background)">
      <PageHero
        title={<>{t("heroTitle")} <span className="text-(--color-secondary)">{t("heroHighlight")}</span></>}
        subtitle={t("description")}
        image={hero1}
      />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
          <div className="flex-1 w-full">
            <FilterSearch
              value={searchQuery}
              onChange={handleSearch}
              placeholder={t("searchPlaceholder")}
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-(--color-text-primary) flex items-center gap-2">
            <Building2 className="w-5 h-5 text-(--color-secondary)" />
            {filteredDevelopers.length} {t("resultsFound")}
          </h2>
          <div className="text-sm text-(--color-text-secondary) font-semibold tabular-nums px-3 py-1.5 rounded-lg bg-(--color-background-alt) border border-(--border-color)">
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

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="mt-14"
        />
      </div>
    </div>
  );
}
