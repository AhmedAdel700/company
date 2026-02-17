'use client';

import React from 'react';
import { ArrowRight, MapPin, Building2, TrendingUp } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import image1 from "@/app/images/hero1.jpg"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
    id: string;
    title: string;
    image: string | StaticImageData;
    location: string;
    status: 'Current' | 'Completed';
    properties: number;
}

const ProjectsList = ({ status }: { status: 'Current' | 'Completed' }) => {
    // Mock Data
    const allProjects: Project[] = [
        { id: '1', title: 'The Grand Heights', location: 'New Cairo', image: image1, status: 'Current', properties: 120, },
        { id: '2', title: 'Azure Bay', location: 'North Coast', image: image1, status: 'Current', properties: 85, },
        { id: '3', title: 'Downtown Views', location: 'Sheikh Zayed', image: image1, status: 'Completed', properties: 200, },
        { id: '4', title: 'Palm Hills', location: 'October City', image: image1, status: 'Completed', properties: 150, },
        { id: '5', title: 'River Walk', location: 'Maadi', image: image1, status: 'Current', properties: 90, },
        { id: '6', title: 'Skyline Towers', location: 'New Capital', image: image1, status: 'Current', properties: 300, },
    ];

    const projects = allProjects.filter(p => p.status === status);
    const title = status === 'Current' ? 'Current Projects' : 'Completed Projects';
    const description = status === 'Current'
        ? 'Explore our ongoing developments offering modern living solutions.'
        : 'Our track record of delivered communities and successful handovers.';

    const icon = status === 'Current' ? Building2 : MapPin;
    const subtitle = status === 'Current' ? 'Under Construction' : 'Ready to Move In';

    return (
        <section className="py-14">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            {status === 'Current' ? <Building2 className="w-5 h-5 text-[var(--color-secondary)]" /> : <TrendingUp className="w-5 h-5 text-[var(--color-secondary)]" />}
                            <span className="text-sm font-bold uppercase tracking-wider" style={{ color: "var(--color-secondary)" }}>
                                {status === 'Current' ? 'Future Communities' : 'Delivered Excellence'}
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] mb-4">{title}</h2>
                        <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl leading-relaxed">{description}</p>
                    </div>

                    <button
                        className="hidden md:flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:gap-4 text-white hover:opacity-90 shadow-lg hover:shadow-xl"
                        style={{ backgroundColor: "var(--color-secondary)" }}
                    >
                        View All {status} Projects
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full relative group/carousel"
                >
                    <CarouselContent className="-ms-4 pb-4">
                        {projects.map((project) => (
                            <CarouselItem key={project.id} className="ps-4 md:basis-1/2 lg:basis-1/4">
                                <div
                                    className="group rounded-2xl overflow-hidden border-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col"
                                    style={{
                                        backgroundColor: "var(--color-background-alt)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    {/* Image */}
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
                                            {project.title}
                                        </h3>

                                        <div className="flex items-center gap-2 text-[var(--color-text-secondary)] mb-6">
                                            <MapPin className="w-4 h-4 text-[var(--color-secondary)]" />
                                            <span className="text-sm font-medium">{project.location}</span>
                                        </div>

                                        <div
                                            className="flex items-center justify-between p-4 rounded-xl mb-6"
                                            style={{ backgroundColor: "var(--color-primary)" }}
                                        >
                                            <div className="flex items-center gap-2">
                                                <Building2 className="w-5 h-5 text-[var(--color-secondary)]" />
                                                <span className="text-sm font-medium text-[var(--color-text-secondary)]">
                                                    Properties
                                                </span>
                                            </div>
                                            <span className="font-bold text-lg text-[var(--color-text-primary)]">
                                                {project.properties}
                                            </span>
                                        </div>

                                        <button className="w-full flex items-center justify-center gap-2 py-3.5 mt-auto text-white rounded-xl font-bold hover:gap-3 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
                                            style={{ backgroundColor: "var(--color-secondary)" }}>
                                            View Details
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Navigation Arrows */}
                    <div className="hidden md:block">
                        <CarouselPrevious className="absolute -left-14 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-[var(--color-secondary)] bg-white text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white transition-all duration-300" />
                        <CarouselNext className="absolute -right-14 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-[var(--color-secondary)] bg-white text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white transition-all duration-300" />
                    </div>
                </Carousel>

                <button
                    className="mt-8 md:hidden w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white shadow-lg active:scale-95 transition-transform"
                    style={{ backgroundColor: "var(--color-secondary)" }}
                >
                    View All {status} Projects
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </section>
    );
};

export default ProjectsList;
