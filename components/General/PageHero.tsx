import React from "react";
import Image, { StaticImageData } from "next/image";

interface PageHeroProps {
    title: React.ReactNode;
    subtitle?: string;
    image: StaticImageData | string;
    eyebrow?: string;
    highlight?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, image, eyebrow, highlight }) => {
    return (
        <div className="relative h-[25vh] min-h-[350px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src={image}
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                {eyebrow && (
                    <span className="inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-bold tracking-wider uppercase mb-6">
                        {eyebrow}
                    </span>
                )}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 tracking-tight drop-shadow-lg">
                    {title}
                </h1>

                {subtitle && (
                    <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-md">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
};

export default PageHero;
