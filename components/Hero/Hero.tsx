import { ArrowRight, Search, MapPin, TrendingUp } from "lucide-react";
import Image from "next/image";
import hero1 from "@/app/images/hero1.avif";
import hero2 from "@/app/images/hero2.avif";
import hero3 from "@/app/images/hero3.avif";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden
    bg-linear-to-br
    from-[#1a293f]       /* deep navy */
    via-[#c9a76c]/40     /* muted gold */
    to-[#f4f7fb]/70" /* soft cream highlight */
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-primary-light) 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-(--color-primary) via-transparent to-(--color-accent)]opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--color-primary) border border-(--color-primary-light)">
              <TrendingUp className="w-4 h-4 text-(--color-secondary)" />
              <span className="text-sm font-medium text-(--color-text-primary)">
                #1 Trusted Real Estate Platform
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-(--color-text-primary) leading-tight">
                Find Your
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-(--hero) to-(--color-secondary)">
                  Dream Home
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-(--color-text-secondary) max-w-xl">
                Discover the perfect property from our exclusive collection of
                luxury homes, apartments, and commercial spaces tailored to your
                lifestyle.
              </p>
            </div>

            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3 p-2 bg-(--color-background-alt) rounded-2xl border border-(--color-primary-light) shadow-lg">
              <div className="flex items-center gap-3 flex-1 px-4 py-3 bg-(--color-background) rounded-xl">
                <MapPin className="w-5 h-5 text-(--color-secondary)" />
                <input
                  type="text"
                  placeholder="Enter location, city, or ZIP code"
                  className="flex-1 bg-transparent border-none outline-none text-(--color-text-primary) placeholder:text-(--color-text-primary)"
                />
              </div>
              <button className="px-8 py-3 cursor-pointer bg-linear-to-br from-(--color-primary-light) to-(--color-secondary) text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-(--color-text-primary)">
                  5K+
                </div>
                <div className="text-sm text-(--color-text-primary)">
                  Properties
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-(--color-text-primary)">
                  2K+
                </div>
                <div className="text-sm text-(--color-text-primary)">
                  Happy Clients
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-(--color-text-primary)">
                  15+
                </div>
                <div className="text-sm text-(--color-text-primary)">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative animate-fade-in-right">
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image */}
              <div className="col-span-2 relative h-80 rounded-3xl overflow-hidden group">
                <div className="absolute inset-0 bg-linear-to-br from-(--color-primary-light) to-(--color-secondary) opacity-20" />
                <div className="absolute inset-0 bg-(--color-background-alt) flex items-center justify-center">
                  <Image
                    src={hero1}
                    alt="Villa Pic"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-(--color-background)/40 backdrop-blur-md rounded-2xl p-4 border border-(--color-primary-light)">
                    <div className="text-sm text-(--color-text-primary)">
                      Featured Property
                    </div>
                    <div className="text-xl font-bold text-(--color-text-primary)">
                      Modern Villa
                    </div>
                  </div>
                </div>
              </div>

              {/* Small Images */}
              <div className="relative h-48 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-brfrom-(--color-accent) to-(--color-primary-light) opacity-20" />
                <div className="absolute inset-0 bg-(--color-background-alt) flex items-center justify-center">
                  <Image
                    src={hero2}
                    alt="Villa Pic"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="relative h-48 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-(--color-secondary) to-(--color-primary-light) opacity-20" />
                <div className="absolute inset-0 bg-(--color-background-alt) flex items-center justify-center">
                  <Image
                    src={hero3}
                    alt="Villa Pic"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-(--color-background)/50 border border-(--color-primary-light) rounded-2xl p-4 shadow-2xl backdrop-blur-sm animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-(--color-primary-light) to-(--color-secondary) flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-(--color-text-secondary)">
                    Start Your
                  </div>
                  <div className="text-lg font-bold text-(--color-text-primary)">
                    Journey Today
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
