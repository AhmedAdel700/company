"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Tag,
  ArrowLeft,
  Phone,
  Share2,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  TrendingDown,
  Calendar,
  Building2,
  Layers,
  Car,
  Wifi,
  Shield,
  Dumbbell,
  Waves,
  TreePine,
  Star,
  BadgeCheck,
} from "lucide-react";
import { useLocale } from "next-intl";
import whatsAppIcon from '@/app/images/whatsApp.png'

// ─── Types ────────────────────────────────────────────────────────────────────
interface Deal {
  id: string | number;
  title: string;
  location: string;
  compound: string;
  type: string;
  originalPrice: string;
  discountedPrice: string;
  discountPercent?: number;
  images?: string[] | StaticImageData[];
  image?: string;
  beds?: number;
  baths?: number;
  area?: number;
  floor?: number;
  totalFloors?: number;
  parking?: number;
  yearBuilt?: number;
  deliveryDate?: string;
  description?: string;
  amenities?: string[];
  features?: string[];
  developer?: string;
  rating?: number;
  reviews?: number;
}

// ─── Amenity Icon Map ─────────────────────────────────────────────────────────
const AMENITY_ICONS: Record<string, React.ElementType> = {
  Pool: Waves,
  Gym: Dumbbell,
  Garden: TreePine,
  Parking: Car,
  WiFi: Wifi,
  Security: Shield,
  default: CheckCircle2,
};

function AmenityIcon({ name }: { name: string }) {
  const Icon = AMENITY_ICONS[name] ?? AMENITY_ICONS.default;
  return <Icon className="w-4 h-4" />;
}

// ─── Image Gallery ────────────────────────────────────────────────────────────
function ImageGallery({
  images,
  title,
}: {
  images: string[] | StaticImageData[];
  title: string;
}) {
  const [active, setActive] = useState(0);

  const locale = useLocale();

  const prev = () => setActive((p) => (p - 1 + images.length) % images.length);
  const next = () => setActive((p) => (p + 1) % images.length);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-(--border-color) shadow-xl">
      {/* Main Image */}
      <div className="relative aspect-video w-full bg-(--color-background-alt)">
        {images[active] ? (
          <Image
            src={images[active]}
            alt={`${title} — image ${active + 1}`}
            fill
            className="object-cover transition-opacity duration-500"
            priority
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Building2 className="w-24 h-24 text-(--border-color)" />
          </div>
        )}

        {/* Overlay gradient bottom */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Nav arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/80 flex items-center justify-center text-white hover:bg-white/35 transition-all"
            >
              {locale === "en" ? (
                <ChevronLeft className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/80 flex items-center justify-center text-white hover:bg-white/35 transition-all"
            >
              {locale === "en" ? (
                <ChevronRight className="w-5 h-5" />
              ) : (
                <ChevronLeft className="w-5 h-5" />
              )}
            </button>
          </>
        )}

        {/* Counter badge */}
        <span className="absolute bottom-4 left-4 text-xs font-bold text-white bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
          {active + 1} / {images.length}
        </span>

        {/* Action buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            aria-label="Share"
            className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/80 flex items-center justify-center text-white hover:bg-white/35 transition-all"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="flex gap-2 p-3 overflow-x-auto scrollbar-hide border-t border-(--border-color)">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                i === active
                  ? "border-(--color-secondary) shadow-md shadow-(--color-secondary)/30"
                  : "border-(--border-color) opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={src}
                alt={`Thumbnail ${i + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Stat Chip ────────────────────────────────────────────────────────────────
function StatChip({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5 px-5 py-4 rounded-2xl border border-(--border-color) bg-(--color-background-alt)/60">
      <Icon className="w-5 h-5 text-(--color-secondary)" />
      <span className="text-lg font-extrabold text-(--color-text-primary)">
        {value}
      </span>
      <span className="text-xs font-semibold text-(--color-text-secondary) uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

// ─── Contact Card ─────────────────────────────────────────────────────────────
function ContactCard({ price }: { price: string }) {
  return (
    <div className="sticky top-24 rounded-2xl border border-(--border-color) p-6 space-y-5 shadow-lg shadow-(--color-secondary)/5">
      {/* Price */}
      <div>
        <p className="text-xs font-bold text-(--color-text-secondary) uppercase tracking-widest mb-1">
          Starting from
        </p>
        <p className="text-3xl font-black text-(--color-secondary)">
          EGP {price}
        </p>
      </div>

      <div className="h-px bg-(--border-color)" />

      {/* CTA Buttons */}
      <div className="space-y-3">
        <button
          className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold text-white text-sm transition-all hover:opacity-90 hover:shadow-lg hover:shadow-(--color-secondary)/30 hover:-translate-y-0.5 active:translate-y-0"
          style={{ backgroundColor: "var(--color-secondary)" }}
        >
          <Phone className="w-4 h-4" />
          Request a Callback
        </button>
        <button className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold text-sm border-2 border-(--color-secondary) text-(--color-secondary) transition-all hover:bg-(--color-secondary)/10 hover:-translate-y-0.5 active:translate-y-0">
          <Image
            src={whatsAppIcon}
            alt="whats app icon"
            width={18}
            height={18}
            className="object-cover max-h-full max-w-full"
          />
          WhatsApp Us
        </button>
      </div>

      <p className="text-xs text-center text-(--color-text-secondary)">
        Free consultation · No hidden fees
      </p>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
interface UnitDetailPageProps {
  deal: Deal;
}

export default function UnitDetailPage({ deal }: UnitDetailPageProps) {
  const router = useRouter();

  const images: string[] | StaticImageData[] =
    deal.images && deal.images.length > 0
      ? deal.images
      : deal.image
        ? [deal.image]
        : [];

  const discount =
    deal.discountPercent ??
    Math.round(
      ((parseFloat(deal.originalPrice.replace(/,/g, "")) -
        parseFloat(deal.discountedPrice.replace(/,/g, ""))) /
        parseFloat(deal.originalPrice.replace(/,/g, ""))) *
        100,
    );

  const defaultAmenities = ["Pool", "Gym", "Garden", "Parking", "Security"];
  const amenities = deal.amenities ?? defaultAmenities;

  const defaultFeatures = [
    "Modern open kitchen",
    "Floor-to-ceiling windows",
    "Smart home system",
    "Premium finishing",
    "Rooftop access",
    "24/7 maintenance",
  ];
  const features = deal.features ?? defaultFeatures;

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
            Back to Deals
          </button>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <div className="container mx-auto px-4 max-w-7xl py-8">
        {/* Title row */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-(--color-secondary)/40 text-(--color-secondary)"
              style={{ backgroundColor: "var(--color-secondary)15" }}
            >
              <Tag className="w-3 h-3" />
              {deal.type}
            </span>
            <span
              className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-emerald-400/40 text-emerald-600 dark:text-emerald-400"
              style={{ backgroundColor: "oklch(0.8 0.15 160 / 0.12)" }}
            >
              <TrendingDown className="w-3 h-3" />
              {discount}% OFF
            </span>
            {deal.developer && (
              <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border border-(--border-color) text-(--color-text-secondary)">
                <BadgeCheck className="w-3 h-3 text-(--color-secondary)" />
                {deal.developer}
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-(--color-text-primary) leading-tight mb-2">
            {deal.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-(--color-text-secondary) font-semibold">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-(--color-secondary)" />
              {deal.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-(--color-secondary)" />
              {deal.compound}
            </span>
            {deal.rating && (
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="font-bold text-(--color-text-primary)">
                  {deal.rating}
                </span>
                <span className="text-(--color-text-secondary)">
                  ({deal.reviews ?? 0} reviews)
                </span>
              </span>
            )}
          </div>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <ImageGallery images={images} title={deal.title} />

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {deal.beds != null && (
                <StatChip icon={Bed} label="Bedrooms" value={deal.beds} />
              )}
              {deal.baths != null && (
                <StatChip icon={Bath} label="Bathrooms" value={deal.baths} />
              )}
              {deal.area != null && (
                <StatChip icon={Square} label="Area (m²)" value={deal.area} />
              )}
              {deal.floor != null && (
                <StatChip
                  icon={Layers}
                  label="Floor"
                  value={`${deal.floor}/${deal.totalFloors ?? "—"}`}
                />
              )}
            </div>

            {/* Price block */}
            <div className="rounded-2xl border border-(--border-color) p-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-(--color-text-secondary) uppercase tracking-widest mb-1">
                  Original Price
                </p>
                <p className="text-lg font-bold text-(--color-text-secondary) line-through">
                  EGP {deal.originalPrice}
                </p>
              </div>
              <div className="text-center">
                <span
                  className="inline-block text-sm font-extrabold text-white px-4 py-1.5 rounded-full"
                  style={{ backgroundColor: "var(--color-secondary)" }}
                >
                  Save {discount}%
                </span>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-(--color-text-secondary) uppercase tracking-widest mb-1">
                  Deal Price
                </p>
                <p className="text-3xl font-black text-(--color-secondary)">
                  EGP {deal.discountedPrice}
                </p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-extrabold text-(--color-text-primary) mb-4 flex items-center gap-2">
                <span
                  className="w-1 h-5 rounded-full inline-block"
                  style={{ backgroundColor: "var(--color-secondary)" }}
                />
                About This Unit
              </h2>
              <p className="text-(--color-text-secondary) leading-relaxed text-base">
                {deal.description ??
                  `This exceptional ${deal.type.toLowerCase()} is located in the prestigious ${deal.compound} compound in ${deal.location}. Offering a rare combination of luxury finishes, strategic location, and an unbeatable discounted price, this unit represents one of the finest investment opportunities available in the market today. Designed with modern living in mind, every detail has been crafted to provide comfort, elegance, and functionality.`}
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-xl font-extrabold text-(--color-text-primary) mb-4 flex items-center gap-2">
                <span
                  className="w-1 h-5 rounded-full inline-block"
                  style={{ backgroundColor: "var(--color-secondary)" }}
                />
                Unit Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-3 p-3 rounded-xl border border-(--border-color)"
                  >
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-(--color-secondary)" />
                    <span className="text-sm font-semibold text-(--color-text-primary)">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-xl font-extrabold text-(--color-text-primary) mb-4 flex items-center gap-2">
                <span
                  className="w-1 h-5 rounded-full inline-block"
                  style={{ backgroundColor: "var(--color-secondary)" }}
                />
                Compound Amenities
              </h2>
              <div className="flex flex-wrap gap-3">
                {amenities.map((a) => (
                  <div
                    key={a}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-(--border-color) text-sm font-bold text-(--color-text-primary)"
                  >
                    <span className="text-(--color-secondary)">
                      <AmenityIcon name={a} />
                    </span>
                    {a}
                  </div>
                ))}
              </div>
            </div>

            {/* Additional details */}
            {(deal.deliveryDate || deal.yearBuilt || deal.parking != null) && (
              <div>
                <h2 className="text-xl font-extrabold text-(--color-text-primary) mb-4 flex items-center gap-2">
                  <span
                    className="w-1 h-5 rounded-full inline-block"
                    style={{ backgroundColor: "var(--color-secondary)" }}
                  />
                  Property Details
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {deal.deliveryDate && (
                    <div className="flex items-center gap-3 p-4 rounded-xl border border-(--border-color)">
                      <Calendar className="w-5 h-5 text-(--color-secondary) flex-shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-(--color-text-secondary) uppercase tracking-wider">
                          Delivery
                        </p>
                        <p className="text-sm font-extrabold text-(--color-text-primary)">
                          {deal.deliveryDate}
                        </p>
                      </div>
                    </div>
                  )}
                  {deal.yearBuilt && (
                    <div className="flex items-center gap-3 p-4 rounded-xl border border-(--border-color)">
                      <Building2 className="w-5 h-5 text-(--color-secondary) flex-shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-(--color-text-secondary) uppercase tracking-wider">
                          Year Built
                        </p>
                        <p className="text-sm font-extrabold text-(--color-text-primary)">
                          {deal.yearBuilt}
                        </p>
                      </div>
                    </div>
                  )}
                  {deal.parking != null && (
                    <div className="flex items-center gap-3 p-4 rounded-xl border border-(--border-color)">
                      <Car className="w-5 h-5 text-(--color-secondary) flex-shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-(--color-text-secondary) uppercase tracking-wider">
                          Parking
                        </p>
                        <p className="text-sm font-extrabold text-(--color-text-primary)">
                          {deal.parking} spot{deal.parking !== 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right sticky column */}
          <div className="lg:col-span-1">
            <ContactCard price={deal.discountedPrice} />
          </div>
        </div>
      </div>
    </div>
  );
}
