"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Banknote, X } from "lucide-react";

interface PriceRangeDropdownProps {
    minPrice: string;
    maxPrice: string;
    onRangeChange: (min: string, max: string) => void;
    label?: string;
    className?: string;
}

export default function PriceRangeDropdown({
    minPrice,
    maxPrice,
    onRangeChange,
    label = "Price Range",
    className = "",
}: PriceRangeDropdownProps) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const [tempMin, setTempMin] = useState(minPrice);
    const [tempMax, setTempMax] = useState(maxPrice);

    // Sync temp state with props when open
    useEffect(() => {
        if (open) {
            setTempMin(minPrice);
            setTempMax(maxPrice);
        }
    }, [open, minPrice, maxPrice]);

    // Close on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const handleApply = () => {
        onRangeChange(tempMin, tempMax);
        setOpen(false);
    };

    const handleClear = (e: React.MouseEvent) => {
        e.stopPropagation();
        onRangeChange("", "");
        setTempMin("");
        setTempMax("");
        setOpen(false);
    };

    const formatPrice = (p: string) => {
        if (!p) return "";
        return parseInt(p).toLocaleString();
    };

    const displayText = () => {
        if (!minPrice && !maxPrice) return label;
        if (minPrice && !maxPrice) return `From ${formatPrice(minPrice)} EGP`;
        if (!minPrice && maxPrice) return `Up to ${formatPrice(maxPrice)} EGP`;
        return `${formatPrice(minPrice)} - ${formatPrice(maxPrice)}`;
    };

    const hasValue = minPrice || maxPrice;

    return (
        <div ref={ref} className={`relative ${className}`}>
            {/* Trigger */}
            <div
                onClick={() => setOpen((p) => !p)}
                className={`w-full flex items-center justify-between gap-2 px-5 py-3 rounded-2xl border font-bold transition-all duration-300 cursor-pointer select-none bg-(--color-background-alt)
            ${open
                        ? "border-(--color-secondary) shadow-lg"
                        : "border-(--border-color) text-(--color-text-primary) hover:border-(--color-secondary)/50"
                    }`}
            >
                <div className="flex items-center gap-2.5 min-w-0">
                    <Banknote className="w-5 h-5 text-(--color-secondary) shrink-0" />
                    <span className="truncate">{displayText()}</span>
                </div>
                <div className="flex items-center gap-2">
                    {hasValue && (
                        <button
                            onClick={handleClear}
                            className="p-1 rounded-full hover:bg-(--color-secondary)/10 text-(--color-text-secondary) hover:text-(--color-secondary) transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    )}
                    <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 text-(--color-text-secondary) ${open ? "rotate-180" : ""}`}
                    />
                </div>
            </div>

            {/* Panel */}
            {open && (
                <div
                    className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 rounded-2xl border border-(--border-color) shadow-2xl overflow-hidden p-5"
                    style={{ backgroundColor: "var(--color-background-alt)" }}
                >
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black uppercase tracking-wider text-(--color-text-secondary)">
                                    Min Price
                                </label>
                                <input
                                    type="number"
                                    placeholder="0"
                                    value={tempMin}
                                    onChange={(e) => setTempMin(e.target.value)}
                                    className="w-full px-3 py-2 bg-(--color-background) border border-(--border-color) rounded-xl text-sm font-bold focus:border-(--color-secondary) outline-none"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black uppercase tracking-wider text-(--color-text-secondary)">
                                    Max Price
                                </label>
                                <input
                                    type="number"
                                    placeholder="Any"
                                    value={tempMax}
                                    onChange={(e) => setTempMax(e.target.value)}
                                    className="w-full px-3 py-2 bg-(--color-background) border border-(--border-color) rounded-xl text-sm font-bold focus:border-(--color-secondary) outline-none"
                                />
                            </div>
                        </div>

                        <button
                            onClick={handleApply}
                            className="w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
                            style={{ backgroundColor: "var(--color-secondary)" }}
                        >
                            Apply Filter
                        </button>
                    </div>

                    {/* Footer accent */}
                    <div
                        className="h-1 w-full absolute bottom-0 left-0"
                        style={{
                            background:
                                "linear-gradient(to right, transparent, var(--color-secondary), transparent)",
                            opacity: 0.3,
                        }}
                    />
                </div>
            )}
        </div>
    );
}
