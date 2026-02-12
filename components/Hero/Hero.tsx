"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { MapPin, ArrowRight, Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hero1 from "@/app/images/hero1.avif";
import hero2 from "@/app/images/hero2.avif";
import hero3 from "@/app/images/hero3.avif";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Initial load animation
    const tl = gsap.timeline();

    tl.fromTo(
      ".hero-text-element",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8, // Faster text
        stagger: 0.1,  // Faster stagger
        ease: "power4.inOut",
      }
    )
      .fromTo(
        ".hero-image-card",
        { y: 100, opacity: 0, rotate: 0 },
        {
          y: 0,
          opacity: 1,
          rotate: (i) => (i % 2 === 0 ? 3 : -3), // Alternate rotation
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out", // Snappy finish, smooth start
        },
        "-=1.0"
      )
      .fromTo(
        ".hero-stats-item",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=1.0" // Start earlier (overlap images more)
      );


    // Parallax effect on scroll
    gsap.to(".parallax-bg", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // New Shape Animations
    gsap.to(".hero-shape-1", {
      y: -30,
      rotation: 360,
      scale: 1.1,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "power3.inOut",
    });

    gsap.to(".hero-shape-2", {
      y: 40,
      rotation: -180,
      scale: 0.9,
      duration: 25,
      repeat: -1,
      yoyo: true,
      ease: "power3.inOut",
    });

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative min-h-dvh flex items-center justify-center overflow-hidden bg-(--color-background) px-6"
    >
      {/* ===== Background Setup ===== */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full parallax-bg">
          <Image
            src={hero1}
            alt="Luxury Real Estate"
            fill
            priority
            className="object-cover opacity-90"
          />
          {/* Elegant Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-(--color-background)/90 via-(--color-background)/60 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-(--color-background) via-transparent to-transparent" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-16">
        {/* ===== Main Content Area ===== */}
        <div ref={textRef} className="lg:w-1/2 space-y-10">
          {/* Badge */}
          <div className="hero-text-element opacity-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--color-background-alt)/80 backdrop-blur-md border border-(--color-primary-light)/30 shadow-sm">
            <Star className="w-4 h-4 text-(--color-secondary) fill-(--color-secondary)" />
            <span className="text-sm font-medium tracking-wide text-(--color-text-primary) uppercase">
              Premium Real Estate
            </span>
          </div>

          {/* Heading */}
          <h1 className="hero-text-element opacity-0 text-5xl lg:text-7xl font-bold text-(--color-text-primary) leading-[1.1] tracking-tight">
            Discover <br />
            <span className="italic font-light text-(--color-secondary)">
              Luxury
            </span>{" "}
            Living at its Finest
          </h1>

          {/* Subtext */}
          <p className="hero-text-element opacity-0 text-lg text-(--color-text-secondary) max-w-xl leading-relaxed font-light">
            Experience the pinnacle of comfort and style. We curate exclusive
            properties that redefine your standard of living in the most
            sought-after locations.
          </p>

          {/* Search Bar - Modern Glassmorphism */}
          <div className="hero-text-element opacity-0 relative max-w-lg">
            <div className="absolute -inset-1 bg-linear-to-r from-(--color-primary-light) to-(--color-secondary) rounded-2xl blur opacity-25" />
            <div className="relative flex items-center p-2 bg-(--color-background)/80 backdrop-blur-xl border border-(--color-text-secondary)/10 rounded-xl shadow-2xl">
              <MapPin className="w-6 h-6 ml-4 text-(--color-secondary)" />
              <input
                type="text"
                placeholder="Search by location..."
                className="w-full px-4 py-3 bg-transparent border-none outline-none text-(--color-text-primary) placeholder:text-(--color-text-secondary)/60 text-lg"
                suppressHydrationWarning
              />
              <button
                className="group relative overflow-hidden px-6 py-3 bg-(--color-text-primary) text-(--color-background) rounded-lg font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
                suppressHydrationWarning
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore{" "}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div
            ref={statsRef}
            className="hero-text-element opacity-0 flex items-center gap-8 lg:gap-12 pt-8 border-t border-(--color-text-secondary)/10"
          >
            <div className="hero-stats-item opacity-0">
              <p className="text-3xl font-bold text-(--color-text-primary)">
                2.5k+
              </p>
              <p className="text-sm text-(--color-text-secondary) uppercase tracking-wider mt-1">
                Properties
              </p>
            </div>
            <div className="w-px h-12 bg-(--color-text-secondary)/20" />
            <div className="hero-stats-item opacity-0">
              <p className="text-3xl font-bold text-(--color-text-primary)">
                98%
              </p>
              <p className="text-sm text-(--color-text-secondary) uppercase tracking-wider mt-1">
                Satisfaction
              </p>
            </div>
            <div className="w-px h-12 bg-(--color-text-secondary)/20" />
            <div className="hero-stats-item opacity-0">
              <p className="text-3xl font-bold text-(--color-text-primary)">
                10+
              </p>
              <p className="text-sm text-(--color-text-secondary) uppercase tracking-wider mt-1">
                Awards
              </p>
            </div>
          </div>
        </div>

        {/* ===== Featured Visuals (Right Side) - 3 Image Layout ===== */}
        <div
          ref={imageRef}
          className="lg:w-1/2 relative h-150 w-full hidden lg:block perspective-1000"
        >
          {/* Main Image (Center) */}
          <div className="hero-image-card opacity-0 absolute top-[10%] left-[15%] w-[65%] h-[80%] z-20 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-(--color-background)">
            <Image
              src={hero2}
              alt="Luxury Interior"
              fill
              className="object-cover transition-transform duration-700"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-60" />

            {/* Floating Badge inside Main Image */}
            <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-xl">
              <div className="flex items-center justify-between text-white">
                <div>
                  <p className="text-xs uppercase tracking-wider opacity-80">
                    Exclusive
                  </p>
                  <p className="font-bold text-lg">Skyline Penthouse</p>
                </div>
                <div className="bg-white text-black rounded-full px-3 py-1 text-xs font-bold">
                  $5.2M
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Image (Top Left) */}
          <div className="hero-image-card opacity-0 absolute top-0 left-0 w-[45%] h-[35%] z-10 rounded-3xl overflow-hidden shadow-xl border-4 border-(--color-background) transform -rotate-6">
            <Image
              src={hero1}
              alt="Modern Exterior"
              fill
              className="object-cover"
            />
          </div>

          {/* Tertiary Image (Bottom Right) */}
          <div className="hero-image-card opacity-0 absolute bottom-[5%] right-0 w-[40%] h-[40%] z-30 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-(--color-background) transform rotate-3">
            <Image
              src={hero3}
              alt="Architectural Detail"
              fill
              className="object-cover"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-black p-2 rounded-full shadow-lg">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
