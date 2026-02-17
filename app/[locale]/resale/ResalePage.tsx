"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { resales } from "@/lib/data";
import ResaleCard from "@/components/ResaleCard/ResaleCard";
import { Search } from "lucide-react";
import hero1 from "@/app/images/hero1.avif";
import ResaleFilters from "./ResaleFilters";
import PageHero from "@/components/General/PageHero";
import Pagination from "@/components/General/Pagination";

const ITEMS_PER_PAGE = 9;

export default function ResalePage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedType, setSelectedType] = useState("All");
    const [sortBy, setSortBy] = useState("newest");
    const [currentPage, setCurrentPage] = useState(1);
    const [showFilters, setShowFilters] = useState(false);

    /* ── Filter + Sort ──────────────────────────────────────── */
    const filtered = useMemo(() => {
        let list = [...resales];

        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            list = list.filter(
                (r) =>
                    r.title.toLowerCase().includes(q) ||
                    r.location.toLowerCase().includes(q) ||
                    r.compound.toLowerCase().includes(q)
            );
        }

        if (selectedType !== "All") {
            list = list.filter((r) => r.type === selectedType);
        }

        switch (sortBy) {
            case "roi-desc":
                list.sort((a, b) => parseFloat(b.roi) - parseFloat(a.roi));
                break;
            case "price-asc":
                list.sort(
                    (a, b) =>
                        parseFloat(a.askingPrice.replace(/,/g, "")) -
                        parseFloat(b.askingPrice.replace(/,/g, ""))
                );
                break;
            case "price-desc":
                list.sort(
                    (a, b) =>
                        parseFloat(b.askingPrice.replace(/,/g, "")) -
                        parseFloat(a.askingPrice.replace(/,/g, ""))
                );
                break;
            default:
                list.sort((a, b) => b.id - a.id);
        }

        return list;
    }, [searchQuery, selectedType, sortBy]);

    /* ── Pagination ─────────────────────────────────────────── */
    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const currentItems = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return filtered.slice(start, start + ITEMS_PER_PAGE);
    }, [filtered, currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const handleTypeChange = (type: string) => {
        setSelectedType(type);
        setCurrentPage(1);
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value);
        setCurrentPage(1);
    };

    const clearFilters = () => {
        setSearchQuery("");
        setSelectedType("All");
        setSortBy("newest");
        setCurrentPage(1);
    };

    const hasActiveFilters =
        searchQuery !== "" || selectedType !== "All" || sortBy !== "newest";

    return (
        <div className="min-h-screen bg-(--color-background)">
            <PageHero
                title={<>Browse <span className="text-(--color-secondary)">Resale</span> Properties</>}
                subtitle="Delivered units with proven returns — buy direct from owners at transparent market prices."
                image={hero1}
            />

            {/* ── Main Content ──────────────────────────────────── */}
            <div className="container mx-auto px-4 py-12 max-w-7xl">

                {/* ── Filters Component ─────────────────────────── */}
                <ResaleFilters
                    searchQuery={searchQuery}
                    selectedType={selectedType}
                    sortBy={sortBy}
                    totalCount={filtered.length}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    showFilters={showFilters}
                    hasActiveFilters={hasActiveFilters}
                    onSearchChange={handleSearch}
                    onTypeChange={handleTypeChange}
                    onSortChange={handleSortChange}
                    onClearFilters={clearFilters}
                    onToggleFilters={() => setShowFilters((p) => !p)}
                />

                {/* ── Grid ──────────────────────────────────────── */}
                {currentItems.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {currentItems.map((resale) => (
                            <ResaleCard key={resale.id} resale={resale} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-(--color-background-alt) rounded-full mb-4">
                            <Search className="w-8 h-8 text-(--color-text-secondary)" />
                        </div>
                        <h3 className="text-xl font-bold text-(--color-text-primary) mb-2">
                            No resale properties found
                        </h3>
                        <p className="text-(--color-text-secondary) mb-6">
                            Try adjusting your search or filters to find what you are looking for.
                        </p>
                        <button
                            onClick={clearFilters}
                            className="px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300"
                            style={{ backgroundColor: "var(--color-secondary)" }}
                        >
                            Clear Filters
                        </button>
                    </div>
                )}

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    className="mt-16"
                />
            </div>
        </div>
    );
}