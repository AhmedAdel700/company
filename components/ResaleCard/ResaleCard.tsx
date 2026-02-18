import React from "react";
import { MapPin, Home, Clock, ArrowRight, Bed, TrendingUp, Key } from "lucide-react";
import { Link } from "@/i18n/navigation";

export interface Resale {
    id: number;
    title: string;
    location: string;
    compound: string;
    originalOwnerPrice: string; // what the owner originally paid
    askingPrice: string;        // current resale asking price
    roi: string;                // e.g. "18%"
    image: string;
    type: string;               // e.g. "Apartment", "Villa"
    area: string;               // e.g. "180 m²"
    rooms: number;
    handoverYear: string;       // e.g. "2021" – already delivered
    featured?: boolean;
}

interface ResaleCardProps {
    resale: Resale;
}

const ResaleCard: React.FC<ResaleCardProps> = ({ resale }) => {
    return (
      <div
        className="bg-(--color-background-alt) group rounded-2xl overflow-hidden border-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative"
        style={{ borderColor: "var(--border-color)" }}
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={resale.image}
            alt={resale.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* ROI Badge — replaces the Discount badge */}
          <div
            className="absolute top-4 right-4 flex items-center gap-1.5 px-4 py-2 rounded-xl text-white shadow-lg"
            style={{ backgroundColor: "var(--color-secondary)" }}
          >
            <TrendingUp className="w-4 h-4" />
            <span className="text-base font-bold">{resale.roi} ROI</span>
          </div>

          {/* Handover Year — replaces Time Left */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-sm text-white">
            <Key className="w-4 h-4" />
            <span className="text-sm font-semibold">
              Delivered {resale.handoverYear}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-4 mb-2">
            <span
              className="text-xs font-bold px-2 py-1 rounded"
              style={{ backgroundColor: "var(--color-accent)", color: "white" }}
            >
              {resale.type}
            </span>
            <div className="flex items-center gap-4">
              <span className="text-xs text-[var(--color-text-secondary)] flex items-center gap-1">
                <Home className="w-3 h-3" />
                {resale.area}
              </span>
              <span className="text-xs text-[var(--color-text-secondary)] flex items-center gap-1">
                <Bed className="w-3.5 h-3.5" />
                {resale.rooms} Rooms
              </span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3 group-hover:text-(--color-secondary) transition-colors">
            {resale.title}
          </h3>

          <div className="flex items-center gap-2 text-[var(--color-text-secondary)] mb-4">
            <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
            <span className="text-sm">
              {resale.compound}, {resale.location}
            </span>
          </div>

          {/* Pricing */}
          <div className="p-4 rounded-xl mb-5 bg-(--color-background)">
            <div className="flex items-center justify-between"></div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[var(--color-secondary)]">
                EGP {resale.askingPrice}
              </span>
              <span className="text-xs text-[var(--color-text-secondary)]">
                asking price
              </span>
            </div>
          </div>

          <Link
            href={`/resale/${resale.title}`}
            className="w-full flex items-center justify-center gap-2 py-3 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 cursor-pointer"
            style={{ backgroundColor: "var(--color-secondary)" }}
          >
            View Resale
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
};

export default ResaleCard;