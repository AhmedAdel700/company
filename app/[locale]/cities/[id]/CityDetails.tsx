"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  MapPin,
  ArrowLeft,
  TrendingUp,
  Building2,
  Home,
  Search,
  Phone,
  Star,
  Tag,
  SlidersHorizontal,
} from "lucide-react";
import FilterSearch from "@/components/General/FilterSearch";
import FilterDropdown from "@/components/General/FilterDropdown";
import Pagination from "@/components/General/Pagination";
import CompoundCard from "@/components/CompoundCard/CompoundCard";
import DealCard, { Deal } from "@/components/BestDeals/DealCard";
import Image, { StaticImageData } from "next/image";
import whatsAppIcon from "@/app/images/whatsApp.png"

// ─── Types ────────────────────────────────────────────────────────────────────
interface Compound {
  id: number;
  name: string;
  location: string;
  properties: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  trend: string;
}

interface City {
  id?: string | number;
  name?: string;
  region?: string;
  trending?: boolean;
  image?: string | StaticImageData;
  description?: string;
  propertiesCount?: number;
  compoundsCount?: number;
  rating?: number;
  reviews?: number;
  highlights?: string[];
  compounds?: Compound[];
  deals?: Deal[];
}

const COMPOUNDS_PER_PAGE = 6;
const DEALS_PER_PAGE = 6;

// ─── Section Heading ──────────────────────────────────────────────────────────
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span
        className="w-1 h-7 rounded-full flex-shrink-0"
        style={{ backgroundColor: "var(--color-secondary)" }}
      />
      <h2 className="text-2xl font-extrabold text-(--color-text-primary)">
        {children}
      </h2>
    </div>
  );
}

// ─── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex items-center gap-4 p-5 rounded-2xl border border-(--border-color)">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-secondary) 12%, transparent)",
        }}
      >
        <Icon className="w-5 h-5 text-(--color-secondary)" />
      </div>
      <div>
        <p className="text-2xl font-black text-(--color-text-primary)">
          {value}
        </p>
        <p className="text-xs font-bold text-(--color-text-secondary) uppercase tracking-wider">
          {label}
        </p>
      </div>
    </div>
  );
}

// ─── Empty State ──────────────────────────────────────────────────────────────
function EmptyState({ message }: { message: string }) {
  return (
    <div className="text-center py-16">
      <div
        className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 border border-(--border-color)"
        style={{ backgroundColor: "var(--color-background-alt)" }}
      >
        <Search className="w-7 h-7 text-(--color-text-secondary)" />
      </div>
      <p className="text-lg font-bold text-(--color-text-primary) mb-1">
        Nothing found
      </p>
      <p className="text-sm text-(--color-text-secondary)">{message}</p>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function CityDetailPage({ city }: { city: City }) {
  const router = useRouter();

  // Compounds state
  const [compoundSearch, setCompoundSearch] = useState("");
  const [compoundPage, setCompoundPage] = useState(1);

  // Deals state
  const [dealSearch, setDealSearch] = useState("");
  const [dealType, setDealType] = useState("All");
  const [dealPage, setDealPage] = useState(1);

  const compounds: Compound[] = city.compounds ?? [];
  const deals: Deal[] = city.deals ?? [];

  // ── Compounds filtering ──
  const filteredCompounds = useMemo(
    () =>
      compounds.filter(
        (c) =>
          c.name.toLowerCase().includes(compoundSearch.toLowerCase()) ||
          c.location.toLowerCase().includes(compoundSearch.toLowerCase()),
      ),
    [compounds, compoundSearch],
  );
  const compoundTotalPages = Math.ceil(
    filteredCompounds.length / COMPOUNDS_PER_PAGE,
  );
  const currentCompounds = useMemo(() => {
    const start = (compoundPage - 1) * COMPOUNDS_PER_PAGE;
    return filteredCompounds.slice(start, start + COMPOUNDS_PER_PAGE);
  }, [filteredCompounds, compoundPage]);

  // ── Deals filtering ──
  const dealTypes = useMemo(
    () => ["All", ...Array.from(new Set(deals.map((d) => d.type)))],
    [deals],
  );
  const dealTypeOptions = useMemo(
    () => dealTypes.map((t) => ({ label: t, value: t })),
    [dealTypes],
  );
  const filteredDeals = useMemo(
    () =>
      deals.filter((d) => {
        const matchesSearch =
          d.title.toLowerCase().includes(dealSearch.toLowerCase()) ||
          d.compound.toLowerCase().includes(dealSearch.toLowerCase());
        const matchesType = dealType === "All" || d.type === dealType;
        return matchesSearch && matchesType;
      }),
    [deals, dealSearch, dealType],
  );
  const dealTotalPages = Math.ceil(filteredDeals.length / DEALS_PER_PAGE);
  const currentDeals = useMemo(() => {
    const start = (dealPage - 1) * DEALS_PER_PAGE;
    return filteredDeals.slice(start, start + DEALS_PER_PAGE);
  }, [filteredDeals, dealPage]);

  const defaultHighlights = [
    "Prime investment location",
    "High ROI potential",
    "World-class infrastructure",
    "Proximity to key hubs",
    "Diverse lifestyle options",
    "Strong rental demand",
  ];
  const highlights = city.highlights ?? defaultHighlights;

  return (
    <div
      className="min-h-screen pt-18 sm:pt-20"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* ── Top bar ── */}
      <div className="border-b border-(--border-color)">
        <div className="container mx-auto px-4 max-w-7xl py-4 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sm font-semibold text-(--color-text-secondary) hover:text-(--color-secondary) transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cities
          </button>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="container mx-auto px-4 max-w-7xl py-12 space-y-16">
        {/* ── Overview ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: title + description + highlights */}
          <div className="lg:col-span-2 space-y-8">
            {/* City title block */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {city.trending && (
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-amber-400/40 text-amber-500"
                    style={{ backgroundColor: "oklch(0.9 0.1 80 / 0.15)" }}
                  >
                    <TrendingUp className="w-3 h-3" />
                    Trending
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border border-(--border-color) text-(--color-text-secondary)">
                  <MapPin className="w-3 h-3 text-(--color-secondary)" />
                  {city.region}
                </span>
                {city.rating && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border border-(--border-color) text-(--color-text-secondary)">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    {city.rating} · {city.reviews ?? 0} reviews
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-(--color-text-primary) leading-tight mb-5">
                {city.name}
              </h1>

              <p className="text-(--color-text-secondary) leading-relaxed text-base">
                {city.description ??
                  `${city.name} is one of Egypt's most sought-after real estate destinations, located in ${city.region}. Combining modern urban planning with premium lifestyle amenities, the city attracts both end-users and savvy investors seeking high returns. With rapidly growing infrastructure and a diverse portfolio of residential and commercial projects, ${city.name} continues to set the benchmark for luxury living in Egypt.`}
              </p>
            </div>

            {/* Why invest */}
            <div>
              <h3 className="text-lg font-extrabold text-(--color-text-primary) mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-(--color-secondary)" />
                Why Invest in {city.name}?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-start gap-3 p-3.5 rounded-xl border border-(--border-color)"
                  >
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
                      style={{ backgroundColor: "var(--color-secondary)" }}
                    />
                    <span className="text-sm font-semibold text-(--color-text-primary)">
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: stats + CTA */}
          <div className="space-y-4">
            {city.propertiesCount != null && (
              <StatCard
                icon={Home}
                label="Available Units"
                value={city.propertiesCount.toLocaleString()}
              />
            )}
            {city.compoundsCount != null && (
              <StatCard
                icon={Building2}
                label="Premium Compounds"
                value={city.compoundsCount}
              />
            )}
            {city.rating && (
              <StatCard
                icon={Star}
                label="City Rating"
                value={`${city.rating} / 5`}
              />
            )}

            {/* Contact block */}
            <div className="rounded-2xl border border-(--border-color) p-6 space-y-4">
              <p className="text-sm font-extrabold text-(--color-text-primary)">
                Interested in {city.name}?
              </p>
              <p className="text-xs text-(--color-text-secondary)">
                Our experts will guide you to the best units matching your needs
                and budget.
              </p>
              <button
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-white text-sm hover:opacity-90 hover:-translate-y-0.5 transition-all"
                style={{ backgroundColor: "var(--color-secondary)" }}
              >
                <Phone className="w-4 h-4" />
                Request a Callback
              </button>
              <button className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-sm border-2 border-(--color-secondary) text-(--color-secondary) hover:bg-(--color-secondary)/10 hover:-translate-y-0.5 transition-all">
                <Image src={whatsAppIcon} width={18} height={18} alt="whatsApp icon" />
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>

        {/* ── Compounds Section ── */}
        {compounds.length > 0 && (
          <div>
            <SectionHeading>Compounds in {city.name}</SectionHeading>

            <div className="mb-6">
              <FilterSearch
                value={compoundSearch}
                onChange={(e) => {
                  setCompoundSearch(e.target.value);
                  setCompoundPage(1);
                }}
                placeholder={`Search compounds in ${city.name}...`}
              />
            </div>

            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm font-bold text-(--color-text-primary) flex items-center gap-2">
                <Building2 className="w-4 h-4 text-(--color-secondary)" />
                {filteredCompounds.length}{" "}
                {filteredCompounds.length === 1 ? "Compound" : "Compounds"}{" "}
                Found
              </p>
              <div
                className="text-sm text-(--color-text-secondary) font-semibold tabular-nums px-3 py-1.5 rounded-lg border border-(--border-color)"
                style={{ backgroundColor: "var(--color-background-alt)" }}
              >
                Page {compoundPage} of {compoundTotalPages || 1}
              </div>
            </div>

            {currentCompounds.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {currentCompounds.map((compound) => (
                  <CompoundCard key={compound.id} compound={compound} />
                ))}
              </div>
            ) : (
              <EmptyState message="Try adjusting your search to find a compound." />
            )}

            <Pagination
              currentPage={compoundPage}
              totalPages={compoundTotalPages}
              onPageChange={(page) => {
                setCompoundPage(page);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </div>
        )}

        {/* ── Available Units / Deals Section ── */}
        {deals.length > 0 && (
          <div>
            <SectionHeading>Available Units in {city.name}</SectionHeading>

            {/* Filters row */}
            <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
              <div className="flex-1 w-full">
                <FilterSearch
                  value={dealSearch}
                  onChange={(e) => {
                    setDealSearch(e.target.value);
                    setDealPage(1);
                  }}
                  placeholder={`Search units in ${city.name}...`}
                />
              </div>
              {dealTypes.length > 2 && (
                <div className="w-full md:w-56">
                  <FilterDropdown
                    label="Property Type"
                    value={dealType}
                    options={dealTypeOptions}
                    onChange={(val) => {
                      setDealType(val);
                      setDealPage(1);
                    }}
                    icon={SlidersHorizontal}
                  />
                </div>
              )}
            </div>

            {/* Count */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm font-bold text-(--color-text-primary) flex items-center gap-2">
                <Tag className="w-4 h-4 text-(--color-secondary)" />
                {filteredDeals.length}{" "}
                {filteredDeals.length === 1 ? "Unit" : "Units"} Found
              </p>
              <div
                className="text-sm text-(--color-text-secondary) font-semibold tabular-nums px-3 py-1.5 rounded-lg border border-(--border-color)"
                style={{ backgroundColor: "var(--color-background-alt)" }}
              >
                Page {dealPage} of {dealTotalPages || 1}
              </div>
            </div>

            {currentDeals.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
                {currentDeals.map((deal) => (
                  <DealCard key={deal.id} deal={deal} />
                ))}
              </div>
            ) : (
              <EmptyState message="Try adjusting your search or filters to find units." />
            )}

            <Pagination
              currentPage={dealPage}
              totalPages={dealTotalPages}
              onPageChange={(page) => {
                setDealPage(page);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
