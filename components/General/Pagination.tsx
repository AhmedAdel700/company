"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    className = "",
}: PaginationProps) {
    if (totalPages <= 1) return null;

    return (
        <div className={`flex items-center justify-center gap-2 ${className}`}>
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-3 rounded-xl border border-(--color-text-secondary)/20 text-(--color-text-primary) disabled:opacity-50 disabled:cursor-not-allowed hover:bg-(--color-background-alt) transition-colors cursor-pointer"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, i) => {
                    const page = i + 1;
                    const isActive = currentPage === page;
                    const show =
                        page === 1 ||
                        page === totalPages ||
                        Math.abs(page - currentPage) <= 1;
                    const showEllipsisBefore =
                        page === currentPage - 2 && currentPage > 3;
                    const showEllipsisAfter =
                        page === currentPage + 2 && currentPage < totalPages - 2;

                    if (!show) {
                        if (showEllipsisBefore || showEllipsisAfter) {
                            return (
                                <span
                                    key={`ellipsis-${page}`}
                                    className="w-10 h-10 flex items-center justify-center text-(--color-text-secondary)"
                                >
                                    …
                                </span>
                            );
                        }
                        return null;
                    }

                    return (
                        <button
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`w-10 h-10 rounded-xl font-bold transition-all duration-300 cursor-pointer ${isActive
                                ? "text-white shadow-lg scale-110"
                                : "bg-(--color-background-alt) text-(--color-text-secondary) hover:text-(--color-secondary)"
                                }`}
                            style={isActive ? { backgroundColor: "var(--color-secondary)" } : {}}
                        >
                            {page}
                        </button>
                    );
                })}
            </div>

            <button
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-3 rounded-xl border border-(--color-text-secondary)/20 text-(--color-text-primary) disabled:opacity-50 disabled:cursor-not-allowed hover:bg-(--color-background-alt) transition-colors cursor-pointer"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
}
