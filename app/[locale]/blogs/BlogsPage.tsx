"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { blogPosts } from "@/lib/data";
import BlogCard from "@/components/LatestBlogs/BlogCard";
import { Search, Calendar } from "lucide-react";
import hero1 from "@/app/images/hero1.avif";
import PageHero from "@/components/General/PageHero";
import FilterSearch from "@/components/General/FilterSearch";
import Pagination from "@/components/General/Pagination";

const ITEMS_PER_PAGE = 9;

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    "All",
    "Developers News",
    "Buying Guides",
    "Market Updates",
    "Investment Tips",
    "Comparisons",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter blogs based on search query
  const filteredBlogs = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Pagination logic
  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
  const currentBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredBlogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredBlogs, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page on filter change
  };

  return (
    <div className="min-h-screen bg-(--color-background)">
      <PageHero
        title={<>Our <span className="text-(--color-secondary)">Latest</span> Articles</>}
        subtitle="Stay updated with the latest trends, investment guides, and market analysis from Egypt's leading real estate experts."
        image={hero1}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Search Bar + Categories */}
        <div className="mb-10 space-y-6">
          <FilterSearch
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search articles by title, category, or author..."
          />

          <div className="flex flex-wrap items-center justify-start gap-2 p-2 bg-(--color-background-alt)/40 rounded-2xl border border-(--border-color)">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${isActive
                    ? "text-white shadow-lg scale-105"
                    : "bg-(--color-background) text-(--color-text-secondary) hover:text-(--color-secondary)"
                    }`}
                  style={isActive ? { backgroundColor: "var(--color-secondary)" } : {}}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-(--color-text-primary) flex items-center gap-2">
            <Calendar className="w-5 h-5 text-(--color-secondary)" />
            {filteredBlogs.length} Articles Found
          </h2>
          <div className="text-sm text-(--color-text-secondary) font-semibold tabular-nums px-3 py-1.5 rounded-lg bg-(--color-background-alt) border border-(--border-color)">
            {currentPage} / {totalPages || 1}
          </div>
        </div>

        {/* Grid */}
        {currentBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentBlogs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-(--color-background-alt) rounded-full mb-4">
              <Search className="w-8 h-8 text-(--color-text-secondary)" />
            </div>
            <h3 className="text-xl font-bold text-(--color-text-primary) mb-2">No articles found</h3>
            <p className="text-(--color-text-secondary)">
              Try adjusting your search query to find what you are looking for.
            </p>
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
