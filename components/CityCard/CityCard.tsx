"use client";

import Image, { StaticImageData } from "next/image";
import { MapPin, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "@/i18n/navigation";

interface City {
  id: number;
  name: string;
  region: string;
  properties: number;
  averagePrice: string;
  trending: boolean;
  description: string;
  image: StaticImageData | string;
}

interface CityCardProps {
  city: City;
}

export default function CityCard({ city }: CityCardProps) {
  return (
    <div className="w-full h-full rounded-3xl overflow-hidden border-2 border-(--border-color) shadow-xl flex flex-col group hover:shadow-2xl transition-all duration-300">
      {/* Image */}
      <div className="relative h-64 sm:h-72 overflow-hidden">
        <Image
          src={city.image}
          alt={city.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          width={400}
          height={400}
        />

        {city.trending && (
          <div
            className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full z-10"
            style={{ background: "var(--color-secondary)" }}
          >
            <TrendingUp className="w-4 h-4 text-white" />
            <span className="text-xs font-bold text-white">Hot Market</span>
          </div>
        )}

        <div className="absolute bottom-4 left-4 z-10">
          <h3 className="text-2xl font-bold text-white drop-shadow-md">
            {city.name}
          </h3>
          <div className="flex items-center gap-2 text-white/90 text-sm drop-shadow-md">
            <MapPin className="w-4 h-4" />
            {city.region}
          </div>
        </div>
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 bg-(--color-background-alt)">
        <p className="text-sm mb-5 text-(--color-text-secondary) line-clamp-2">
          {city.description}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-5 mt-auto">
          <div className="p-3 rounded-xl border border-(--color-secondary)/30 bg-(--color-background)">
            <div className="text-xs text-(--color-text-secondary)">
              Properties
            </div>
            <div className="text-lg font-bold text-(--color-text-primary)">
              {city.properties}+
            </div>
          </div>

          <div className="p-3 rounded-xl border border-(--color-secondary)/30 bg-(--color-background)">
            <div className="text-xs text-(--color-text-secondary)">
              Avg. Price
            </div>
            <div className="text-lg font-bold text-(--color-text-primary)">
              {city.averagePrice}
            </div>
          </div>
        </div>

        {/* Button */}
        <button className="w-full flex items-center justify-center gap-2 py-3 text-white rounded-xl font-semibold hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer bg-(--color-secondary) shadow-md hover:shadow-lg">
          View Properties
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
