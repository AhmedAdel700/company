"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { compounds, compoundDetailsData } from "@/lib/data";
import CompoundCard from "@/components/CompoundCard/CompoundCard";
import { 
  MapPin, 
  Building2, 
  Calendar, 
  CreditCard, 
  CheckCircle2, 
  ArrowRight,
  Droplets,
  Dumbbell,
  ShieldCheck,
  Coffee,
  Trees,
  Car,
  Tv,
  Users,
  Utensils,
  Smartphone,
  Info,
  ChevronDown,
  Sparkles,
  HomeIcon
} from "lucide-react";
import ContactSection from "@/components/ContactSection/ContactSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "@/app/images/hero1.avif"; // Using existing hero image for demo
import whatsApp from "@/app/images/whatsApp.png";
import logo from "@/app/images/logo.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function CompoundDetails({ params }: { params: { id: string } }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activePlan, setActivePlan] = useState(0);

  const compoundId = parseInt(params?.id) || 999;
  const details = compoundDetailsData[compoundId] || compoundDetailsData[999];
  const compound = compounds.find(c => c.id === compoundId) || compounds.find(c => c.id === 999);

  const iconMap: Record<string, any> = {
    Droplets: <Droplets className="w-6 h-6" />,
    Dumbbell: <Dumbbell className="w-6 h-6" />,
    Trees: <Trees className="w-6 h-6" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6" />,
    Coffee: <Coffee className="w-6 h-6" />,
    Car: <Car className="w-6 h-6" />,
    Utensils: <Utensils className="w-6 h-6" />,
    Smartphone: <Smartphone className="w-6 h-6" />,
    Tv: <Tv className="w-6 h-6" />,
    Users: <Users className="w-6 h-6" />,
    Sparkles: <Sparkles className="w-6 h-6" />,
    Info: <Info className="w-6 h-6" />,
    MapPin: <MapPin className="w-6 h-6" />,
    Building2: <Building2 className="w-6 h-6" />,
    Calendar: <Calendar className="w-6 h-6" />,
    CreditCard: <CreditCard className="w-6 h-6" />,
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.from(".hero-content > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Quick Info Cards
      gsap.from(".info-card", {
        scrollTrigger: {
          trigger: ".info-cards-section",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Section Headers
      gsap.utils.toArray<HTMLElement>(".section-header").forEach((header) => {
        gsap.from(header, {
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
          },
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const infoCards = [
    { icon: <Building2 className="w-6 h-6" />, label: "Developer", value: details.developer },
    { icon: <MapPin className="w-6 h-6" />, label: "Location", value: details.location },
    { icon: <Calendar className="w-6 h-6" />, label: "Delivery", value: details.delivery },
    { icon: <CreditCard className="w-6 h-6" />, label: "Payment Plan", value: details.paymentPlan },
  ];

  const similarCompounds = compounds.filter(c => c.id !== compoundId).slice(0, 3);

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      
      {/* 1. Responsive Hero Slider */}
      <section className="pt-24">
        <div className="container mx-auto px-4">
          
          {/* Desktop Version (lg and up) */}
          <div className="hidden lg:flex gap-4 lg:h-[450px] xl:h-[600px]">
            {details.heroImages.map((img: string, idx: number) => (
              <div
                key={idx}
                className="relative rounded-xl overflow-hidden transition-all duration-700 ease-out cursor-pointer group border border-gray-700"
                style={{
                  flex: '1',
                  minWidth: '30px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.flex = '10';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.flex = '1';
                }}
              >
                <Image
                  src={heroImage}
                  alt={`${compound?.name} ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-700" />
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Version (below lg) */}
          <div className="lg:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 h-[400px]">
            {details.heroImages.map((img: string, idx: number) => (
              <div
                key={idx}
                className="relative flex-none w-[85%] snap-center rounded-2xl overflow-hidden border border-gray-700"
              >
                <Image
                  src={heroImage}
                  alt={`${compound?.name} ${idx + 1}`}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Logo and Title */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-start">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 shadow-lg" style={{ borderColor: "var(--color-secondary)" }}>
              <Image src={logo} alt={compound?.name || "Compound Logo"} width={40} height={40} className="object-cover w-full h-full" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2" style={{ color: "var(--color-text-primary)" }}>
                {compound?.name}
              </h1>
              <div className="flex items-center gap-2 text-sm font-medium opacity-70" style={{ color: "var(--color-text-secondary)" }}>
                <MapPin className="w-4 h-4" style={{ color: "var(--color-secondary)" }} />
                {details.location}
              </div>
            </div>
          </div>

          {/* Pricing Details */}
          <div className="flex flex-wrap justify-center lg:justify-end items-center gap-12">
            <div className="text-center lg:text-right">
              <span className="text-sm font-black uppercase tracking-[0.2em] mb-2 block opacity-50" style={{ color: "var(--color-text-secondary)" }}>
                Developer Start Price
              </span>
              <div className="flex items-baseline gap-1 justify-center lg:justify-end">
                <span className="text-3xl font-black" style={{ color: "var(--color-secondary)" }}>{details.developerStartPrice}</span>
                <span className="text-xs font-bold uppercase opacity-60">EGP</span>
              </div>
            </div>

            <div className="w-px h-12 bg-gray-200 dark:bg-gray-800 hidden md:block" />

            <div className="text-center lg:text-right">
              <span className="text-sm font-black uppercase tracking-[0.2em] mb-2 block opacity-50" style={{ color: "var(--color-text-secondary)" }}>
                Resale Start Price
              </span>
              <div className="flex items-baseline gap-1 justify-center lg:justify-end">
                <span className="text-3xl font-black" style={{ color: "var(--color-secondary)" }}>{details.resaleStartPrice}</span>
                <span className="text-xs font-bold uppercase opacity-60">EGP</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4">
              <Link 
                href={`https://wa.me/201234567890?text=I'm interested in ${compound?.name}`}
                target="_blank"
                className="w-14 h-13 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg bg-green-500"
              >
                <Image src={whatsApp} alt="WhatsApp" width={32} height={32} />
              </Link>
              <button className="flex items-center gap-3 px-8 py-4 rounded-lg font-black text-sm uppercase tracking-widest text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                      style={{ backgroundColor: "var(--color-secondary)" }}>
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

            {/* 7. Interactive Location Section */}
      <section className="py-10 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 section-header">
              <h2 className="text-4xl font-bold mb-8" >Strategic <span style={{ color: "var(--color-secondary)" }}>Heart</span> of {compound?.name}</h2>
              <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--color-text-secondary)" }}>
                {compound?.name} is located on the {details.location}, the most vital artery of New Cairo, granting you immediate access to Cairo's major highways and premium landmarks.
              </p>

              <div className="space-y-4">
                {details.locationMarkers.map((mark: any, i: number) => (
                  <div key={i} className="flex items-center justify-between p-6 rounded-2xl border transition-all duration-300"
                       style={{ backgroundColor: "var(--color-background-alt)", borderColor: "var(--border-color)" }}>
                    <div className="flex items-center gap-4">
                      <MapPin style={{ color: "var(--color-secondary)" }} />
                      <span className="font-bold" style={{ color: "var(--color-text-primary)" }}>{mark.title}</span>
                    </div>
                    <span className="text-sm font-medium px-4 py-1 rounded-full" style={{ backgroundColor: "var(--color-primary)", color: "var(--color-secondary)" }}>
                      {mark.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 h-[600px] rounded-xl overflow-hidden shadow-lg relative border-4"
                 style={{ borderColor: "var(--color-background-alt)" }}>
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.123456789!2d31.4!3d30.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAwJzAwLjAiTiAzMcKwMjQnMDAuMCJF!5e0!3m2!1sen!2seg!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="section-header text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: "var(--color-text-primary)" }}>Available <span style={{ color: "var(--color-secondary)" }}>Units</span></h2>
            <p className="max-w-xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>Choose from a variety of architectural layouts tailored to your lifestyle in {compound?.name}.</p>
          </div>

          <div className="max-w-6xl mx-auto overflow-hidden rounded-xl border shadow-lg" style={{ borderColor: "var(--border-color)", backgroundColor: "var(--color-background)" }}>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b" style={{ borderColor: "var(--border-color)", backgroundColor: "var(--color-primary)" }}>
                  <th className="p-8 font-bold text-sm uppercase tracking-widest" style={{ color: "var(--color-text-primary)" }}>Unit Category</th>
                  <th className="p-8 font-bold text-sm uppercase tracking-widest" style={{ color: "var(--color-text-primary)" }}>Start Area</th>
                  <th className="p-8 font-bold text-sm uppercase tracking-widest" style={{ color: "var(--color-text-primary)" }}>Bedrooms</th>
                  <th className="p-8 font-bold text-sm uppercase tracking-widest" style={{ color: "var(--color-text-primary)" }}>Start Price</th>
                  <th className="p-8 font-bold text-sm uppercase tracking-widest text-right" style={{ color: "var(--color-text-primary)" }}>Status</th>
                </tr>
              </thead>
              <tbody className="divide-y" style={{ borderColor: "var(--border-color)" }}>
                {details.unitTypes.map((unit: any, idx: number) => (
                  <tr key={idx} className="transition-colors hover:bg-[var(--color-secondary-5)] border-b" style={{ borderColor: "var(--border-color)" }}>
                    <td className="p-8">
                      <div className="font-bold text-lg" style={{ color: "var(--color-text-primary)" }}>{unit.type}</div>
                    </td>
                    <td className="p-8" style={{ color: "var(--color-text-secondary)" }}>{unit.startArea}</td>
                    <td className="p-8" style={{ color: "var(--color-text-secondary)" }}>{unit.beds} BR</td>
                    <td className="p-8 font-bold text-lg" style={{ color: "var(--color-secondary)" }}>{unit.startPrice}</td>
                    <td className="p-8 text-right">
                      <span className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-tighter ${
                        idx % 3 === 0
                        ? 'bg-orange-500/10 text-orange-500' 
                        : 'bg-green-500/10 text-green-500'
                      }`}>
                        {idx % 3 === 0 ? 'Limited' : 'Available'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-10 container mx-auto px-4">
        <div className="section-header text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--color-text-primary)" }}>Investment <span style={{ color: "var(--color-secondary)" }}>Plans</span></h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "var(--color-text-secondary)" }}>Choose the payment structure that best fits your financial strategy</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {details.paymentPlans.map((plan: any, i: number) => (
            <div 
              key={i} 
              className={`relative overflow-hidden p-12 rounded-[3rem] border-2 transition-all duration-500 group hover:shadow-3xl hover:-translate-y-2 ${i === 1 ? 'border-(--color-secondary) shadow-2xl scale-105 z-10' : ''}`}
              style={{ 
                backgroundColor: "var(--color-background-alt)", 
                borderColor: i === 1 ? "var(--color-secondary)" : "var(--border-color)" 
              }}
            >
              {i === 1 && (
                <div className="absolute top-0 right-0 py-2.5 px-7 bg-(--color-secondary) text-white text-[10px] font-black uppercase tracking-[0.25em] rounded-bl-3xl shadow-xl">
                  Most Popular
                </div>
              )}
              
              <div className="mb-10">
                <span className="text-[10px] font-black uppercase tracking-[0.35em] mb-5 block opacity-60" style={{ color: "var(--color-text-secondary)" }}>{plan.name}</span>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-7xl font-black leading-none" style={{ color: "var(--color-secondary)" }}>
                    {plan.discount.split(' ')[0].replace('%', '')}
                  </span>
                  <span className="text-3xl font-black" style={{ color: "var(--color-secondary)" }}>%</span>
                  <span className="ml-1 text-sm font-black uppercase tracking-wider opacity-50">OFF</span>
                </div>
                <p className="text-sm font-light leading-relaxed opacity-80" style={{ color: "var(--color-text-secondary)" }}>
                  {plan.description}
                </p>
              </div>

              <div className="space-y-3">
                {plan.details.map((detail: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-4 py-4 px-5 rounded-2xl border transition-all duration-300 group-hover:border-(--color-secondary-20)" style={{ backgroundColor: "var(--color-background)", borderColor: "var(--border-color)" }}>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "var(--color-secondary-5)" }}>
                      <CheckCircle2 className="w-3.5 h-3.5" style={{ color: "var(--color-secondary)" }} />
                    </div>
                    <span className="text-sm font-semibold leading-relaxed" style={{ color: "var(--color-text-primary)" }}>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Amenities Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="section-header text-center mb-20">
            <span className="font-bold uppercase tracking-widest text-sm" style={{ color: "var(--color-secondary)" }}>Resort Lifestyle</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{ color: "var(--color-text-primary)" }}>World-Class Amenities</h2>
            <p className="max-w-2xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>Every detail is curated to provide an unmatched experience of comfort, leisure, and well-being.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {details.amenities.map((item: any, idx: number) => (
              <div key={idx} className="p-8 rounded-3xl border"
                   style={{ backgroundColor: "var(--color-background-alt)", borderColor: "var(--border-color)" }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                     style={{ backgroundColor: "var(--color-primary)", color: "var(--color-secondary)" }}>
                  {iconMap[item.icon]}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--color-text-primary)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


            {/* 2. Comprehensive Description Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Info Badges */}
          <div className="flex flex-wrap gap-2 mb-10">
            {infoCards.filter(c => c.label !== "Payment Plan").map((card, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border"
                   style={{ borderColor: "var(--border-color)", color: "var(--color-text-secondary)" }}>
                <span style={{ color: "var(--color-secondary)" }}>{card.icon}</span>
                <span>{card.value}</span>
              </div>
            ))}
          </div>
          
          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight" style={{ color: "var(--color-text-primary)" }}>
            New Cairo's Most Desirable <span style={{ color: "var(--color-secondary)" }}>Address</span>
          </h2>
          
          {/* Comprehensive Description */}
          <div className="prose prose-lg dark:prose-invert font-light leading-relaxed mb-16" style={{ color: "var(--color-text-secondary)" }}>
            <p className="text-xl mb-6" style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>
              <strong>{compound?.name}</strong> {details.description.intro}
            </p>

            {details.description.sections.map((sec: any, i: number) => (
              <div key={i}>
                <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--color-text-primary)" }}>{sec.title}</h3>
                <p>{sec.content}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 border-t border-b py-10" style={{ borderColor: "var(--border-color)" }}>
            {details.stats.map((stat: any, i: number) => (
              <div key={i} className={`text-center ${i === 1 ? 'border-l border-r' : ''}`} style={{ borderColor: "var(--border-color)" }}>
                <div className="text-4xl font-bold mb-2" style={{ color: "var(--color-secondary)" }}>{stat.value}</div>
                <div className="text-sm uppercase tracking-wider opacity-70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQs Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="section-header text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--color-text-primary)" }}>Frequently Asked Questions</h2>
            <p style={{ color: "var(--color-text-secondary)" }}>Expert answers to your most common questions about The Marq Riverside.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {details.faqs.map((faq: any, idx: number) => (
              <div key={idx} className="rounded-[2rem] border overflow-hidden transition-all duration-500"
                   style={{ backgroundColor: "var(--color-background)", borderColor: "var(--border-color)" }}>
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 cursor-pointer text-left hover:bg-[var(--color-secondary-5)] transition-colors"
                >
                  <span className="text-base font-bold pr-4" style={{ color: "var(--color-text-primary)" }}>{faq.q}</span>
                  <div className="flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg"
                       style={{ 
                         backgroundColor: openFaq === idx ? "var(--color-secondary)" : "var(--color-primary)", 
                         color: openFaq === idx ? "white" : "var(--color-secondary)",
                         transform: openFaq === idx ? "rotate(180deg)" : "rotate(0deg)"
                       }}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${openFaq === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6 leading-relaxed text-sm font-light" style={{ color: "var(--color-text-secondary)" }}>
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Similar Compounds Section */}
      <section className="py-10 container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <HomeIcon className="w-5 h-5" style={{ color: "var(--color-secondary)" }} />
              <span className="text-sm font-bold uppercase tracking-wider" style={{ color: "var(--color-secondary)" }}>
                Premium Communities
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-3" style={{ color: "var(--color-text-primary)" }}>
              You May Also <span style={{ color: "var(--color-secondary)" }}>Like</span>
            </h2>
            <p className="text-lg max-w-xl" style={{ color: "var(--color-text-secondary)" }}>
              Discover other world-class residential projects in {details.location.split(',')[0]}
            </p>
          </div>

          <Link
            href="/compounds"
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:gap-4 text-white"
            style={{ backgroundColor: "var(--color-secondary)" }}
          >
            Explore All Compounds
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {similarCompounds.map((compound) => (
            <div key={compound.id} className="h-full">
              <CompoundCard compound={compound} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link
            href="/compounds"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white"
            style={{ backgroundColor: "var(--color-secondary)" }}
          >
            Explore All Compounds
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* 10. Contact Form Section */}
      <section id="contact" className="py-10">
        <ContactSection />
      </section>

      {/* Footer Branding Overlay */}
      <div className="py-12 text-center border-t" style={{ backgroundColor: "var(--color-background-alt)", borderColor: "var(--border-color)" }}>
        <p className="font-bold tracking-[0.3em] uppercase opacity-50" style={{ color: "var(--color-text-secondary)" }}>
          {compound?.name} • {details.location}
        </p>
      </div>

    </div>
  );
}
