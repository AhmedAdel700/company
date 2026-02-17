'use client';

import { Building2, Trophy, Users, Calendar } from 'lucide-react';

const Overview = () => {
    const stats = [
        {
            icon: Building2,
            value: '50+',
            label: 'Projects',
        },
        {
            icon: Trophy,
            value: '20+',
            label: 'Awards',
        },
        {
            icon: Calendar,
            value: '15+',
            label: 'Years of Experience',
        },
        {
            icon: Users,
            value: '10k+',
            label: 'Happy Clients',
        },
    ];

    return (
        <section className="py-14 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[var(--color-primary)] blur-3xl opacity-20" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[var(--color-secondary)] blur-3xl opacity-20" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Text Content */}
                    <div className="space-y-8 animate-in slide-in-from-left duration-700 fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-color)]">
                            <Building2 className="w-4 h-4 text-[var(--color-secondary)]" />
                            <span className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider">Company Overview</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] leading-tight">
                            Building Dreams, <span className="text-[var(--color-secondary)]">Crafting Reality</span>
                        </h2>

                        <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed border-l-4 border-[var(--color-secondary)] pl-6">
                            Emaar Misr is a leading real estate developer in Egypt, known for its prestigious communities and commitment to quality. With a portfolio of iconic projects, we strive to create integrated lifestyles that redefine living standards.
                        </p>
                    </div>

                    {/* Right Column: Key Statistics */}
                    <div className="grid grid-cols-2 gap-6 animate-in slide-in-from-right duration-700 fade-in delay-200">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col justify-center items-center text-center gap-3 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-transparent hover:border-[var(--border-color)]"
                                    style={{ backgroundColor: 'var(--color-background-alt)' }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-secondary)]">
                                        <Icon className="w-12 h-12" />
                                    </div>
                                    <div>
                                        <span className="text-3xl font-bold text-[var(--color-text-primary)] block">{stat.value}</span>
                                        <span className="text-base font-medium text-[var(--color-text-secondary)] uppercase tracking-wide">{stat.label}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
