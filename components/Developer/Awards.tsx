'use client';

import React from 'react';
import { Award, Star } from 'lucide-react';

const Awards = () => {
    const awards = [
        { title: "Best Luxury Developer", year: "2023", issuer: "Real Estate Awards" },
        { title: "Sustainable Project of the Year", year: "2022", issuer: "Green Building Council" },
        { title: "Excellence in Design", year: "2021", issuer: "Architecture Digest" },
        { title: "Customer Choice Award", year: "2020", issuer: "Consumer Trust" },
    ];

    return (
        <section className="py-14">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-color)] mx-auto">
                        <Award className="w-4 h-4 text-[var(--color-secondary)]" />
                        <span className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider">Awards & Certificates</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">Recognition of our commitment to excellence and innovation.</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {awards.map((award, index) => (
                        <div key={index} className="group relative p-8 rounded-2xl border border-[var(--border-color)] hover:border-[var(--color-secondary)] transition-colors duration-300 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-[var(--color-background-alt)] mb-6 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <Award className="w-8 h-8 text-[var(--color-secondary)]" />
                            </div>
                            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-secondary)] transition-colors">{award.title}</h3>
                            <div className="mt-auto pt-4 flex flex-col gap-1">
                                <span className="text-sm font-semibold text-[var(--color-text-primary)]">{award.issuer}</span>
                                <span className="text-xs text-[var(--color-text-secondary)]">{award.year}</span>
                            </div>

                            <div className="absolute top-4 right-4">
                                <Star className="w-4 h-4 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;
