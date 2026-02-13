"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { MapPin, Search, User, AlertCircle } from "lucide-react";
import gsap from "gsap";
import { Link } from "@/i18n/navigation";

// Mock Data
const MOCK_RESULTS = [
  {
    id: 1,
    name: "Downtown Dubai",
    type: "location",
    count: 120,
    herf: "downtown-dubai",
  },
  {
    id: 2,
    name: "Palm Jumeirah",
    type: "location",
    count: 85,
    herf: "palm-jumeirah",
  },
  {
    id: 3,
    name: "Emaar Properties",
    type: "developer",
    count: 45,
    herf: "emaar-properties",
  },
  {
    id: 4,
    name: "DAMAC Properties",
    type: "developer",
    count: 32,
    herf: "dAMAC-properties",
  },
  {
    id: 5,
    name: "Dubai Marina",
    type: "location",
    count: 210,
    herf: "dubai-marina",
  },
  { id: 6, name: "Nakheel", type: "developer", count: 28, herf: "nakheel" },
];

export default function HeroSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return MOCK_RESULTS.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  // Toggle menu based on search query
  useEffect(() => {
    setIsOpen(searchQuery.trim().length > 0);
  }, [searchQuery]);

  // Animation for the menu
  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        gsap.to(menuRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
          display: "block",
        });
      } else {
        gsap.to(menuRef.current, {
          autoAlpha: 0,
          y: -10,
          duration: 0.2,
          ease: "power2.in",
          display: "none",
        });
      }
    }
  }, [isOpen]);

  return (
    <div className="relative max-w-lg w-full">
      {/* Search Bar */}
      <div className="relative z-50">
        <div className="absolute -inset-1 bg-linear-to-r from-(--color-primary-light) to-(--color-secondary) rounded-2xl blur opacity-25" />
        <div className="relative flex items-center p-2 bg-(--color-background)/90 backdrop-blur-md border border-(--color-text-secondary)/10 rounded-xl shadow-2xl">
          <div className="flex items-center flex-1">
            <Search className="w-6 h-6 ml-4 text-(--color-secondary)" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by location or developer..."
              className="w-full px-4 py-3 bg-transparent border-none outline-none text-(--color-text-primary) placeholder:text-(--color-text-secondary)/60 text-lg"
            />
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div
        ref={menuRef}
        className="absolute top-full left-0 right-0 mt-2 z-40 bg-(--color-background) border border-(--color-text-secondary)/10 rounded-xl shadow-xl hidden opacity-0 -translate-y-2.5"
      >
        <div className="p-4 max-h-100 lg:max-h-50 2xl:max-h-65 overflow-y-auto no-scrollbar">
          {filteredResults.length > 0 ? (
            <>
              <p className="text-xs text-(--color-text-secondary) font-bold mb-3 uppercase tracking-widest px-2">
                Top Matches
              </p>
              <ul className="space-y-1">
                {filteredResults.map((item) => (
                  <Link href={`/${item.herf}`} key={item.id}>
                    <li className="flex items-center justify-between p-3 hover:bg-(--color-background-alt) rounded-lg cursor-pointer transition-all group">
                      <div className="flex items-center gap-3">
                        <div className="bg-(--color-text-secondary)/5 p-2 rounded-full group-hover:bg-white transition-colors shadow-sm">
                          {item.type === "location" ? (
                            <MapPin className="w-4 h-4 text-(--color-secondary)" />
                          ) : (
                            <User className="w-4 h-4 text-(--color-secondary)" />
                          )}
                        </div>
                        <div>
                          <p className="text-(--color-text-primary) font-medium">
                            {item.name}
                          </p>
                          <p className="text-[10px] text-(--color-text-secondary) uppercase tracking-wide">
                            {item.type}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-(--color-text-secondary) bg-(--color-background-alt) px-2 py-1 rounded-md">
                        {item.count} properties
                      </span>
                    </li>
                  </Link>
                ))}
              </ul>
            </>
          ) : (
            <div className="py-8 px-4 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-50 dark:bg-red-900/10 rounded-full mb-3 text-red-500">
                <AlertCircle className="w-6 h-6" />
              </div>
              <p className="text-(--color-text-primary) font-semibold">
                No results found
              </p>
              <p className="text-sm text-(--color-text-secondary) mt-1">
                We could not find any location or developer matching &quot;
                {searchQuery}&quot;
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
