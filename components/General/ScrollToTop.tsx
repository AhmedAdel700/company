"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import ScrollSmoother from "gsap/ScrollSmoother";
import { useLocale } from "next-intl";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const locale = useLocale();

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        const smoother = ScrollSmoother.get();
        if (smoother) {
            smoother.scrollTo(0, true);
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 ${locale === "ar" ? "left-8" : "right-8"} z-[60] flex items-center justify-center w-12 h-12 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 group cursor-pointer
        ${isVisible
                    ? "translate-y-0 opacity-100 pointer-events-auto"
                    : "translate-y-10 opacity-0 pointer-events-none"
                }
      `}
            style={{
                background: "var(--color-background-alt)",
                backdropFilter: "blur(12px)",
                border: "1px solid var(--border-color)",
                opacity: isVisible ? 0.9 : 0,
            }}
            aria-label="Scroll to top"
        >
            <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: "linear-gradient(135deg, var(--color-secondary), var(--color-accent))",
                    zIndex: -1
                }}
            />
            <ArrowUp
                className="w-6 h-6 text-(--color-text-primary) group-hover:text-white transition-colors duration-300"
            />
        </button>
    );
}
