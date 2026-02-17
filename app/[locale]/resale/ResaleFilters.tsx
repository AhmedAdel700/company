"use client";

import { useState, useRef, useEffect } from "react";
import {
    Search,
    TrendingUp,
    SlidersHorizontal,
    X,
    ChevronDown,
    Check,
    ArrowUpDown,
    TrendingDown,
    ArrowUp,
    ArrowDown,
} from "lucide-react";
import FilterSearch from "@/components/General/FilterSearch";
import FilterDropdown from "@/components/General/FilterDropdown";
import { useTranslations } from "next-intl";

export const PROPERTY_TYPES = [
    "All",
    "Apartment",
    "Villa",
    "Twin House",
    "Penthouse",
    "Duplex",
    "Townhouse",
];

export const SORT_OPTIONS = [
    { label: "Newest First", value: "newest", icon: ArrowUpDown, desc: "Most recently listed" },
    { label: "Highest ROI", value: "roi-desc", icon: TrendingUp, desc: "Best return on investment" },
    { label: "Price: Low to High", value: "price-asc", icon: ArrowUp, desc: "Starting from lowest" },
    { label: "Price: High to Low", value: "price-desc", icon: ArrowDown, desc: "Starting from highest" },
];

interface ResaleFiltersProps {
    searchQuery: string;
    selectedType: string;
    sortBy: string;
    totalCount: number;
    currentPage: number;
    totalPages: number;
    showFilters: boolean;
    hasActiveFilters: boolean;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onTypeChange: (type: string) => void;
    onSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onClearFilters: () => void;
    onToggleFilters: () => void;
}

// Custom SortDropdown removed in favor of FilterDropdown

/* ── Main Component ───────────────────────────────────────── */
export default function ResaleFilters({
    searchQuery,
    selectedType,
    sortBy,
    totalCount,
    currentPage,
    totalPages,
    showFilters,
    hasActiveFilters,
    onSearchChange,
    onTypeChange,
    onSortChange,
    onClearFilters,
    onToggleFilters,
}: ResaleFiltersProps) {
    const t = useTranslations("resale");
    return (
        <div className="mb-10 space-y-5">
            {/* ── Search Bar ── */}
            <FilterSearch
                value={searchQuery}
                onChange={onSearchChange}
                placeholder="Search by title, compound, or location…"
            />

            {/* ── Toolbar row ───────────────────────────────────── */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                {/* Count badge */}
                <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-(--color-secondary)/10 text-(--color-secondary) text-sm font-bold">
                        <TrendingUp className="w-4 h-4" />
                        {totalCount}
                    </span>
                    <span className="text-(--color-text-primary) font-bold text-lg">
                        Resale{totalCount !== 1 ? "s" : ""} Found
                    </span>
                </div>

                {/* Right controls */}
                <div className="flex items-center gap-2.5 flex-wrap">
                    {/* ↓ Reusable FilterDropdown used here */}
                    <FilterDropdown
                        label="Sort By"
                        value={sortBy}
                        options={SORT_OPTIONS}
                        onChange={(val) => onSortChange({ target: { value: val } } as React.ChangeEvent<HTMLSelectElement>)}
                        icon={ArrowUpDown}
                    />

                    {/* Mobile filter toggle */}
                    <button
                        onClick={onToggleFilters}
                        className={`sm:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 ${showFilters
                            ? "border-(--color-secondary) text-(--color-secondary) bg-(--color-secondary)/10"
                            : "border-(--border-color) bg-(--color-background-alt) text-(--color-text-primary)"
                            }`}
                    >
                        <SlidersHorizontal className="w-4 h-4" />
                        Filters
                        {hasActiveFilters && (
                            <span className="w-2 h-2 rounded-full bg-(--color-secondary)" />
                        )}
                    </button>

                    {/* Clear filters pill */}
                    {hasActiveFilters && (
                        <button
                            onClick={onClearFilters}
                            className="flex items-center gap-1.5 px-4 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95"
                            style={{ backgroundColor: "var(--color-secondary)" }}
                        >
                            <X className="w-3.5 h-3.5" />
                            Clear
                        </button>
                    )}

                    {/* Page counter (desktop) */}
                    <div className="text-sm text-(--color-text-secondary) font-semibold tabular-nums px-3 py-3 rounded-xl bg-(--color-background-alt) border border-(--border-color)">
                        {t("pageInfo", { current: currentPage, total: totalPages || 1 })}
                    </div>
                </div>
            </div>

            {/* ── Property type pills ───────────────────────────── */}
            <div
                className={`${showFilters ? "flex" : "hidden sm:flex"
                    } flex-wrap gap-2 p-4 bg-(--color-background-alt)/60 border border-(--border-color) rounded-2xl`}
            >
                <span className="w-full text-xs font-bold uppercase tracking-widest text-(--color-text-secondary) mb-1 px-1">
                    Property Type
                </span>
                {PROPERTY_TYPES.map((type) => {
                    const isActive = selectedType === type;
                    return (
                        <button
                            key={type}
                            onClick={() => onTypeChange(type)}
                            className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer select-none
                                ${isActive
                                    ? "text-white shadow-md scale-105"
                                    : "bg-(--color-background) text-(--color-text-secondary) hover:text-(--color-secondary) border border-(--border-color) hover:border-(--color-secondary)/40"
                                }`}
                            style={
                                isActive
                                    ? { backgroundColor: "var(--color-secondary)" }
                                    : {}
                            }
                        >
                            {isActive && (
                                <span className="absolute inset-0 rounded-xl ring-2 ring-(--color-secondary)/30 ring-offset-1 ring-offset-(--color-background-alt)" />
                            )}
                            {type}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}