import { ArrowRight, KeyRound } from "lucide-react";
import { resales } from "@/lib/data"; // add your resale data here
import { Link } from "@/i18n/navigation";
import ResaleCard from "../ResaleCard/ResaleCard";

const BestResale = () => {
    return (
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <KeyRound className="w-5 h-5 text-[var(--color-secondary)]" />
                            <span
                                className="text-sm font-bold uppercase tracking-wider"
                                style={{ color: "var(--color-secondary)" }}
                            >
                                Ready to Move In
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-3">
                            Top Resale Properties
                        </h2>
                        <p className="text-lg text-[var(--color-text-secondary)] max-w-xl">
                            Fully delivered units with proven returns. Buy direct from owners
                            at competitive market prices.
                        </p>
                    </div>

                    <Link
                        href="/resale"
                        className="hidden md:flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:gap-4 text-white"
                        style={{ backgroundColor: "var(--color-secondary)" }}
                    >
                        Browse All Resale
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {resales.slice(0, 6).map((resale) => (
                        <ResaleCard key={resale.id} resale={resale} />
                    ))}
                </div>

                {/* Bottom CTA – mobile only */}
                <div className="text-center mt-10 md:hidden">
                    <Link
                        href="/resale"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-white"
                        style={{ backgroundColor: "var(--color-secondary)" }}
                    >
                        Browse All Resale
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BestResale;