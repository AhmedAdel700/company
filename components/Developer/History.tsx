'use client';
import React from 'react';
import { Flag, CheckCircle2 } from 'lucide-react';

const History = () => {
    const timeline = [
        { year: '2005', title: 'Foundation', description: 'Started our journey with a vision to redefine real estate.' },
        { year: '2010', title: 'First Mega Project', description: 'Launched "The Heights", our flagship community.' },
        { year: '2015', title: 'International Expansion', description: 'Expanded operations to the Middle East region.' },
        { year: '2020', title: 'Sustainable Living', description: 'Commitment to 100% eco-friendly developments.' },
        { year: '2024', title: 'New Heights', description: 'Celebrating 20 years of excellence and innovation.' },
    ];

    return (
        <section className="py-14">
            <style>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeRight {
                    from { opacity: 0; transform: translateX(16px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
                @keyframes fadeLeft {
                    from { opacity: 0; transform: translateX(-16px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
                @keyframes dotPop {
                    from { opacity: 0; transform: scale(0.4); }
                    to   { opacity: 1; transform: scale(1); }
                }
                .tl-header { animation: fadeUp 0.7s ease both; }

                ${timeline.map((_, i) => `
                    .tl-dot-${i}   { animation: dotPop   0.5s cubic-bezier(0.34,1.56,0.64,1) ${0.3 + i * 0.14}s both; }
                    .tl-even-${i}  { animation: fadeRight 0.55s ease ${0.36 + i * 0.14}s both; }
                    .tl-odd-${i}   { animation: fadeLeft  0.55s ease ${0.36 + i * 0.14}s both; }
                `).join('')}

                .tl-card {
                    transition: box-shadow 0.3s ease, transform 0.3s ease;
                }
                .tl-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 20px 48px -12px rgba(0,0,0,0.12);
                }
                .tl-dot-inner {
                    transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
                }
                .tl-dot-inner:hover {
                    transform: scale(1.12);
                }
            `}</style>

            <div className="container mx-auto px-4 max-w-5xl">

                {/* ── Header ── */}
                <div className="tl-header text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border-color)] mb-6">
                        <Flag className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
                        <span className="text-xs font-semibold text-[var(--color-text-primary)] uppercase tracking-widest">
                            Milestones
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-5 leading-tight">
                        Our Journey &amp; Achievements
                    </h2>
                    <div className="w-12 h-px bg-[var(--color-secondary)] mx-auto mb-5" />
                    <p className="text-[var(--color-text-secondary)] text-lg max-w-lg mx-auto leading-relaxed">
                        A timeline of milestones that defined our path to success.
                    </p>
                </div>

                {/* ── Timeline ── */}
                <div className="relative">

                    {/* Vertical center line — desktop only */}
                    <div
                        className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 hidden md:block"
                        style={{
                            width: '1px',
                            background: 'linear-gradient(to bottom, transparent, var(--border-color) 8%, var(--border-color) 92%, transparent)',
                        }}
                    />

                    {timeline.map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                className="relative md:grid md:grid-cols-[1fr_100px_1fr] md:items-center md:py-10"
                            >

                                {/* ── Left column ── */}
                                <div className={`hidden md:flex justify-end pr-12 ${isEven ? `tl-even-${index}` : ''}`}>
                                    {isEven ? (
                                        <TimelineCard item={item} align="right" />
                                    ) : (
                                        /* Subtle year echo on empty side */
                                        <span
                                            className="self-center text-xs font-bold uppercase tracking-[0.22em]"
                                            style={{ color: 'var(--color-text-secondary)', opacity: 0.3 }}
                                        >
                                            {item.year}
                                        </span>
                                    )}
                                </div>

                                {/* ── Center dot ── */}
                                <div className={`hidden md:flex justify-center items-center relative z-10 tl-dot-${index}`}>
                                    <div className="tl-dot-inner flex items-center justify-center">
                                        {/* Outer glow ring */}
                                        <div
                                            className="absolute w-16 h-16 rounded-full"
                                            style={{
                                                border: '1px solid var(--border-color)',
                                                background: 'var(--color-background-alt)',
                                            }}
                                        />
                                        {/* Inner accent ring */}
                                        <div
                                            className="absolute w-11 h-11 rounded-full"
                                            style={{
                                                border: '1.5px solid var(--color-secondary)',
                                                background: 'var(--color-background-alt)',
                                            }}
                                        />
                                        <CheckCircle2
                                            className="relative z-10 w-4 h-4"
                                            style={{ color: 'var(--color-secondary)' }}
                                        />
                                    </div>
                                </div>

                                {/* ── Right column ── */}
                                <div className={`hidden md:flex justify-start pl-12 ${!isEven ? `tl-odd-${index}` : ''}`}>
                                    {!isEven ? (
                                        <TimelineCard item={item} align="left" />
                                    ) : (
                                        <span
                                            className="self-center text-xs font-bold uppercase tracking-[0.22em]"
                                            style={{ color: 'var(--color-text-secondary)', opacity: 0.3 }}
                                        >
                                            {item.year}
                                        </span>
                                    )}
                                </div>

                                {/* ── Mobile layout ── */}
                                <div className="flex md:hidden items-start gap-4 pb-10">
                                    <div className="flex flex-col items-center shrink-0 pt-1">
                                        <div
                                            className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                                            style={{
                                                border: '1.5px solid var(--color-secondary)',
                                                background: 'var(--color-background-alt)',
                                                boxShadow: '0 2px 10px rgba(0,0,0,0.07)',
                                            }}
                                        >
                                            <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--color-secondary)' }} />
                                        </div>
                                        {index < timeline.length - 1 && (
                                            <div
                                                className="w-px mt-3"
                                                style={{ flex: 1, minHeight: '32px', background: 'var(--border-color)' }}
                                            />
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <TimelineCard item={item} align="left" mobile />
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

/* ── Card ── */
function TimelineCard({
    item,
    align,
    mobile = false,
}: {
    item: { year: string; title: string; description: string };
    align: 'left' | 'right';
    mobile?: boolean;
}) {
    const isRight = align === 'right' && !mobile;

    return (
        <div className={`tl-card w-full ${mobile ? '' : 'max-w-[300px] lg:max-w-[340px]'}`}>
            {/* Year label above card */}
            <p
                className={`text-[10px] font-bold uppercase tracking-[0.25em] mb-2.5 ${isRight ? 'text-right' : 'text-left'}`}
                style={{ color: 'var(--color-secondary)' }}
            >
                {item.year}
            </p>

            {/* Card */}
            <div
                className="rounded-xl border border-[var(--border-color)] p-6"
                style={{ background: 'var(--color-background-alt)' }}
            >
                {/* Thin top accent */}
                <div
                    className={`h-px w-8 mb-5 ${isRight ? 'ml-auto' : ''}`}
                    style={{ background: 'var(--color-secondary)' }}
                />

                <h3
                    className={`text-base font-bold text-[var(--color-text-primary)] mb-2 ${isRight ? 'text-right' : 'text-left'}`}
                    style={{ letterSpacing: '-0.01em' }}
                >
                    {item.title}
                </h3>
                <p
                    className={`text-sm leading-relaxed text-[var(--color-text-secondary)] ${isRight ? 'text-right' : 'text-left'}`}
                >
                    {item.description}
                </p>
            </div>
        </div>
    );
}

export default History;