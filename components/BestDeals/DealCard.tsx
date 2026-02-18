import React from "react";
import { Tag, MapPin, Home, Clock, ArrowRight, Bed } from "lucide-react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export interface Deal {
  id: number;
  title: string;
  location: string;
  compound: string;
  originalPrice: string;
  discountedPrice: string;
  discount: string;
  image: string;
  type: string;
  area: string;
  rooms: number;
  timeLeft: string;
  featured?: boolean;
}

interface DealCardProps {
  deal: Deal;
}

const DealCard: React.FC<DealCardProps> = ({ deal }) => {
  return (
    <div
      className="bg-(--color-background-alt) group rounded-2xl overflow-hidden border-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative"
      style={{
        borderColor: "var(--border-color)",
      }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={deal.image}
          alt={deal.title}
          width={400}
          height={400}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Discount Badge */}
        <div
          className="absolute top-4 right-4 flex items-center gap-1.5 px-4 py-2 rounded-xl text-white shadow-lg"
          style={{ backgroundColor: "var(--color-secondary)" }}
        >
          <Tag className="w-4 h-4" />
          <span className="text-base font-bold">{deal.discount} OFF</span>
        </div>

        {/* Time Left */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-sm text-white">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-semibold">{deal.timeLeft} left</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-4 mb-2">
          <span
            className="text-xs font-bold px-2 py-1 rounded"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "white",
            }}
          >
            {deal.type}
          </span>
          <div className="flex items-center gap-4">
            <span className="text-xs text-[var(--color-text-secondary)] flex items-center gap-1">
              <Home className="w-3 h-3" />
              {deal.area}
            </span>
            <span className="text-xs text-[var(--color-text-secondary)] flex items-center gap-1">
              <Bed className="w-3.5 h-3.5" />
              {deal.rooms} Rooms
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3 group-hover:text-(--color-secondary) transition-colors">
          {deal.title}
        </h3>

        <div className="flex items-center gap-2 text-[var(--color-text-secondary)] mb-4">
          <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
          <span className="text-sm">
            {deal.compound}, {deal.location}
          </span>
        </div>

        {/* Pricing */}
        <div className="p-4 rounded-xl mb-5 bg-(--color-background)">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[var(--color-text-secondary)] line-through">
              EGP {deal.originalPrice}
            </span>
            <span
              className="text-xs font-bold px-2 py-1 rounded"
              style={{
                backgroundColor: "var(--color-secondary)",
                color: "white",
              }}
            >
              SAVE {deal.discount}
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-[var(--color-secondary)]">
              EGP {deal.discountedPrice}
            </span>
          </div>
        </div>

        <Link
          href={`/best-deals/${deal.title}`}
          className="w-full flex items-center justify-center gap-2 py-3 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 cursor-pointer"
          style={{ backgroundColor: "var(--color-secondary)" }}
        >
          View Details
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default DealCard;
