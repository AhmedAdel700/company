"use client";

import { MapPin, Building2, TrendingUp, ArrowRight } from "lucide-react";
import Image from "next/image";

interface CompoundCardProps {
  compound: {
    id: number;
    name: string;
    location: string;
    properties: number;
    image: any;
    trend: string;
  };
}

export default function CompoundCard({ compound }: CompoundCardProps) {
  return (
    <div
      className="group rounded-2xl overflow-hidden border-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col"
      style={{
        backgroundColor: "var(--color-background-alt)",
        borderColor: "var(--border-color)",
      }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        {/* Use Image component if possible, but keeping img for external URLs compatibility if needed, 
            though implementation plan suggested moving data. 
            The mocked data uses strings for images, except for cities which used import. 
            Let's support both if possible or just use img tag for now as per previous FeaturedCompounds.tsx 
            Wait, I should check if I can use Next.js Image. 
            The original FeaturedCompounds used <img> tag with external URLs. 
            I will use <img> for now to match the data structure which has URL strings.
        */}
        <img
          src={compound.image}
          alt={compound.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Trend Badge */}
        <div
          className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white"
          style={{ backgroundColor: "var(--color-secondary)" }}
        >
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-semibold">{compound.trend}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
          {compound.name}
        </h3>

        <div className="flex items-center gap-2 text-[var(--color-text-secondary)] mb-4">
          <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
          <span className="text-sm">{compound.location}</span>
        </div>

        <div
          className="flex items-center justify-between p-3 rounded-xl mb-5"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[var(--color-accent)]" />
            <span className="text-sm text-[var(--color-text-secondary)]">
              Properties
            </span>
          </div>
          <span className="font-bold text-[var(--color-text-primary)]">
            {compound.properties}
          </span>
        </div>

        <button className="w-full flex items-center justify-center gap-2 py-3 mt-auto text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 cursor-pointer bg-(--color-secondary)">
          View Properties
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
