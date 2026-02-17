import img from "@/app/images/hero1.avif";
import logo from "@/app/images/logo.jpg";

export const cities = [
  {
    id: 1,
    name: "New York",
    region: "New York, USA",
    properties: 1234,
    averagePrice: "$850K",
    trending: true,
    description:
      "The city that never sleeps, featuring iconic skylines and luxury penthouses.",
    image: img,
  },
  {
    id: 2,
    name: "Los Angeles",
    region: "California, USA",
    properties: 987,
    averagePrice: "$1.2M",
    trending: true,
    description:
      "Sun-soaked homes with stunning views and celebrity neighborhoods.",
    image: img,
  },
  {
    id: 3,
    name: "Miami",
    region: "Florida, USA",
    properties: 756,
    averagePrice: "$680K",
    trending: false,
    description:
      "Beachfront properties and vibrant urban living in paradise.",
    image: img,
  },
  {
    id: 4,
    name: "San Francisco",
    region: "California, USA",
    properties: 645,
    averagePrice: "$1.5M",
    trending: true,
    description: "Tech hub with Victorian homes and breathtaking bay views.",
    image: img,
  },
  {
    id: 5,
    name: "Chicago",
    region: "Illinois, USA",
    properties: 892,
    averagePrice: "$420K",
    trending: false,
    description: "Architectural marvels and lakefront luxury in the Windy City.",
    image: img,
  },
  {
    id: 6,
    name: "Austin",
    region: "Texas, USA",
    properties: 534,
    averagePrice: "$550K",
    trending: true,
    description:
      "Keep it weird with unique properties in this booming tech city.",
    image: img,
  },
  // Adding more cities for pagination testing
  ...Array.from({ length: 44 }).map((_, i) => ({
    id: i + 7,
    name: `City ${i + 7}`,
    region: `Region ${Math.floor(i / 5) + 1}, Country`,
    // structured deterministic data for consistent rendering
    properties: 100 + (i * 15) % 900,
    averagePrice: `$${100 + (i * 20) % 900}K`,
    trending: i % 3 === 0, // Deterministic: every 3rd item is trending
    description: `Description for City ${i + 7}. A beautiful place to live with modern amenities and scenic views.`,
    image: img,
  })),
];

export const compounds = [
  {
    id: 1,
    name: "Palm Hills",
    location: "6th October City",
    properties: 450,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    trend: "+12%",
  },
  {
    id: 2,
    name: "Madinaty",
    location: "New Cairo",
    properties: 680,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    trend: "+8%",
  },
  {
    id: 3,
    name: "Allegria",
    location: "Sheikh Zayed",
    properties: 320,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    trend: "+15%",
  },
  {
    id: 4,
    name: "Mountain View",
    location: "New Cairo",
    properties: 540,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    trend: "+10%",
  },
  {
    id: 5,
    name: "Hyde Park",
    location: "New Cairo",
    properties: 420,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    trend: "+18%",
  },
  {
    id: 6,
    name: "Sodic West",
    location: "Sheikh Zayed",
    properties: 380,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
    trend: "+13%",
  },
  {
    id: 999,
    name: "The Marq Riverside",
    location: "New Cairo",
    properties: 250,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
    trend: "+25%",
  },
  // Adding more compounds for pagination testing
  ...Array.from({ length: 44 }).map((_, i) => ({
    id: i + 7,
    name: `Compound ${i + 7}`,
    location: `Location ${Math.floor(i / 5) + 1}`,
    properties: 100 + (i * 12) % 800,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    trend: `+${(i % 15) + 5}%`,
  })),
];

export const developers = [
  {
    id: 1,
    name: "Emaar Misr",
    logo: logo, // Placeholder until we have real logos or import them
    projects: 15,
  },
  {
    id: 2,
    name: "Palm Hills",
    logo: logo,
    projects: 12,
  },
  {
    id: 3,
    name: "TMG",
    logo: logo,
    projects: 20,
  },
  {
    id: 4,
    name: "Mountain View",
    logo: logo,
    projects: 10,
  },
  {
    id: 5,
    name: "Sodic",
    logo: logo,
    projects: 14,
  },
  {
    id: 6,
    name: "Orascom",
    logo: logo,
    projects: 9,
  },
  {
    id: 7,
    name: "Hyde Park",
    logo: logo,
    projects: 8,
  },
  {
    id: 8,
    name: "City Edge",
    logo: logo,
    projects: 11,
  },
  ...Array.from({ length: 10 }).map((_, i) => ({
    id: i + 9,
    name: `Developer ${i + 9}`,
    logo: logo,
    projects: 5 + (i * 3) % 15,
  })),
];

export const deals = [
  {
    id: 1,
    title: "Luxury Villa with Pool",
    location: "New Cairo",
    compound: "Hyde Park",
    originalPrice: "8,500,000",
    discountedPrice: "7,200,000",
    discount: "15%",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    type: "Villa",
    area: "450 m²",
    rooms: 5,
    timeLeft: "3 days",
    featured: true,
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "Sheikh Zayed",
    compound: "Allegria",
    originalPrice: "4,200,000",
    discountedPrice: "3,600,000",
    discount: "14%",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    type: "Apartment",
    area: "180 m²",
    rooms: 3,
    timeLeft: "5 days",
  },
  {
    id: 3,
    title: "Penthouse with Terrace",
    location: "New Cairo",
    compound: "Madinaty",
    originalPrice: "6,800,000",
    discountedPrice: "5,800,000",
    discount: "15%",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    type: "Penthouse",
    area: "320 m²",
    rooms: 4,
    timeLeft: "2 days",
    featured: true,
  },
  {
    id: 4,
    title: "Garden Duplex",
    location: "6th October",
    compound: "Palm Hills",
    originalPrice: "5,500,000",
    discountedPrice: "4,700,000",
    discount: "15%",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
    type: "Duplex",
    area: "280 m²",
    rooms: 3,
    timeLeft: "7 days",
  },
  {
    id: 5,
    title: "Townhouse Premium",
    location: "New Cairo",
    compound: "Mountain View",
    originalPrice: "7,200,000",
    discountedPrice: "6,100,000",
    discount: "15%",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    type: "Townhouse",
    area: "380 m²",
    rooms: 4,
    timeLeft: "4 days",
  },
  {
    id: 6,
    title: "Studio Apartment",
    location: "Sheikh Zayed",
    compound: "Sodic West",
    originalPrice: "2,800,000",
    discountedPrice: "2,400,000",
    discount: "14%",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    type: "Studio",
    area: "85 m²",
    rooms: 1,
    timeLeft: "6 days",
  },
  ...Array.from({ length: 15 }).map((_, i) => ({
    id: i + 7,
    title: `Deal Property ${i + 7}`,
    location: i % 2 === 0 ? "New Cairo" : "Sheikh Zayed",
    compound: "Compound Name",
    originalPrice: `${(5 + i) * 1000000}`,
    discountedPrice: `${(4.5 + i) * 1000000}`,
    discount: "10%",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    type: ["Apartment", "Villa", "Penthouse"][i % 3],
    area: `${100 + i * 10} m²`,
    rooms: (i % 3) + 2,
    timeLeft: `${(i % 7) + 1} days`,
  })),
];

export const blogPosts = [
  {
    id: 1,
    title: "Top 10 Investment Opportunities in New Cairo",
    excerpt:
      "Discover the most promising real estate investment opportunities in New Cairo's thriving compounds and developments.",
    author: "Ahmed Hassan",
    authorImage: "https://i.pravatar.cc/150?img=12",
    date: "Feb 10, 2026",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    category: "Investment Tips",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Buying Your First Property",
    excerpt:
      "Everything you need to know before making your first real estate purchase in Egypt's competitive market.",
    author: "Sara Mohamed",
    authorImage: "https://i.pravatar.cc/150?img=45",
    date: "Feb 8, 2026",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop",
    category: "Buying Guides",
  },
  {
    id: 3,
    title: "Developer Spotlight: Emaar Misr's New Landmarks",
    excerpt:
      "A deep dive into the latest projects and strategic expansions of Emaar Misr across the Egyptian landscape.",
    author: "Omar Khalil",
    authorImage: "https://i.pravatar.cc/150?img=33",
    date: "Feb 5, 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    category: "Developers News",
  },
  {
    id: 4,
    title: "Market Trends: What's Hot in Egyptian Real Estate",
    excerpt:
      "An in-depth analysis of current market trends and what they mean for buyers and investors in 2026.",
    author: "Mona Ali",
    authorImage: "https://i.pravatar.cc/150?img=47",
    date: "Feb 3, 2026",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
    category: "Market Updates",
  },
  {
    id: 5,
    title: "New Cairo vs. Sheikh Zayed: Which is Better?",
    excerpt:
      "A comprehensive comparison of Egypt's two most popular residential hubs for modern living.",
    author: "Khaled Adel",
    authorImage: "https://i.pravatar.cc/150?img=15",
    date: "Jan 30, 2026",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=800&h=600&fit=crop",
    category: "Comparisons",
  },
  {
    id: 6,
    title: "Sustainable Living: Eco-Friendly Compounds in Egypt",
    excerpt:
      "Explore how green developments are shaping the future of residential communities across Egypt.",
    author: "Laila Farouk",
    authorImage: "https://i.pravatar.cc/150?img=38",
    date: "Jan 28, 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
    category: "Market Updates",
  },
  {
    id: 7,
    title: "SODIC's Latest Milestone in New Zayed",
    excerpt: "SODIC announces the completion of its newest phase in New Zayed, setting new standards for urban living.",
    author: "Hassan Ali",
    authorImage: "https://i.pravatar.cc/150?img=11",
    date: "Jan 25, 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    category: "Developers News",
  },
  {
    id: 8,
    title: "Why You Should Invest in North Coast Now",
    excerpt: "The North Coast market is booming. Here's why investors are flocking to Ras El Hekma this season.",
    author: "Nour Kamel",
    authorImage: "https://i.pravatar.cc/150?img=32",
    date: "Jan 20, 2026",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1548512140-5e368725832a?w=800&h=600&fit=crop",
    category: "Investment Tips",
  },
  {
    id: 9,
    title: "Apartment vs Villa: The Ultimate Real Estate Choice",
    excerpt: "Choosing between an apartment and a villa? We breakdown maintenance, privacy, and ROI for both.",
    author: "Yasmine Zayed",
    authorImage: "https://i.pravatar.cc/150?img=44",
    date: "Jan 15, 2026",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    category: "Comparisons",
  },
  ...Array.from({ length: 15 }).map((_, i) => ({
    id: i + 10,
    title: `Blog Post ${i + 10}`,
    excerpt: `Excerpt for blog post ${i + 10}. Insights into the modern real estate market.`,
    author: "Writer Name",
    authorImage: "https://i.pravatar.cc/150?img=10",
    date: "Jan 10, 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    category: ["Investment Tips", "Market Updates", "Buying Guides"][i % 3],
  })),
];

export const compoundDetailsData: Record<number, any> = {
  999: {
    heroImages: [
      "/images/hero1.avif",
      "/images/hero1.avif",
      "/images/hero1.avif",
      "/images/hero1.avif",
      "/images/hero1.avif",
      "/images/hero1.avif",
      "/images/hero1.avif",
      "/images/hero1.avif",
    ],
    developer: "The Marq Communities",
    developerStartPrice: "10,062,670",
    resaleStartPrice: "2,700,000",
    location: "New Cairo, South 90th",
    delivery: "Q4 2027",
    paymentPlan: "10% DP - 8 Years",
    description: {
      intro: "The Marq Riverside represents the pinnacle of luxury residential development in New Cairo, offering an unparalleled living experience that seamlessly blends classical elegance with contemporary minimalist architecture. This prestigious compound redefines modern Egyptian real estate through its commitment to excellence, innovation, and timeless design. Spanning over a vast area of meticulously planned landscapes and sophisticated structures, The Marq Riverside is not just a residence; it is a statement of prestige and a sanctuary for those who appreciate the finer things in life.",
      sections: [
        {
          title: "The Vision of Modern Regency",
          content: "The Marq Riverside is born from a vision to create a living masterpiece that stands the test of time. Inspired by the 'Modern Regency' architectural movement, the project harmonizes the grandeur of historical classical aesthetics with the sleek, functional lines of contemporary design. This unique fusion creates an environment that is both opulent and efficient, providing residents with spaces that are visually stunning yet perfectly suited for modern daily life. Every arch, every column, and every terrace has been designed with a specific purpose: to elevate the human experience through beauty and proportion. The use of premium natural materials, neutral color palettes, and expansive glass surfaces ensures that the interiors feel connected to the surrounding natural beauty, blurring the lines between indoor and outdoor living."
        },
        {
          title: "Unmatched Strategic Location",
          content: "Positioned as the 'Heart' of New Cairo, The Marq Riverside's location on the South 90th Street is arguably its most significant asset. This area has transformed into Egypt's premier hub for business, finance, and high-end living. Residents enjoy immediate proximity to the American University in Cairo (AUC), which is just 5 minutes away, ensuring a high-quality educational environment and a vibrant international community. Moreover, the project's closeness to the Middle Ring Road and the upcoming Monorail stations provides seamless connectivity to the New Administrative Capital, Downtown Cairo, and the Cairo International Airport. Whether you are commuting for work or leisure, the strategic positioning of The Marq Riverside ensures that you spend less time in traffic and more time enjoying the comforts of your home."
        },
        {
          title: "Bespoke Residential Experience",
          content: "The Marq Communities' philosophy of 'Bespoke Living' is fully realized in this flagship project. Unlike standard developments that offer cookie-cutter solutions, The Marq Riverside provides a range of residential unit types that can be tailored to individual preferences. From the 'Executive Apartments' that offer compact luxury for young achievers to the 'Family Suites' and 'Luxury Penthouses' that provide sprawling terraces and private garden spaces, every unit is a canvas for personalization. The 'Marq Bespoke' interior service allows owners to collaborate with world-class designers to select finishes, layouts, and smart home integrations that reflect their unique lifestyle. This commitment to individuality ensures that your home is a true reflection of your personality and achievements, standing as a testament to your success."
        },
        {
          title: "A Resort Lifestyle Every Day",
          content: "Life at The Marq Riverside is akin to a permanent vacation at a world-class resort. The amenity package is curated to cater to every sense and requirement. The central 'Water Boulevard' features a series of temperature-controlled infinity pools that flow through the heart of the community, creating a cooling micro-climate and a stunning visual backdrop. For the health-conscious, the 'Marq Fitness' center provides state-of-the-art cardiovascular and strength training equipment, accompanied by professional trainers and wellness consultants. The 'Signature Spa' offers a range of therapeutic treatments, from traditional massages to modern hydro-therapy, providing a sanctuary for relaxation and rejuvenation after a long day. Children are equally pampered with dedicated 'Adventure Zones' that focus on both physical play and cognitive development, all within a safe and secure environment."
        },
        {
          title: "Investment Security and Growth",
          content: "Investing in The Marq Riverside is a decision backed by data and developer prestige. The Marq Communities has established itself as a leader in high-end developments, known for delivering on promises and maintaining exceptional property values. New Cairo remains the most resilient and fastest-growing real estate market in Egypt, with south 90th street properties consistently outperforming other regions. The Marq Riverside offers a projected capital appreciation of over 25% due to its limited unit supply and the increasing demand for luxury riverside properties. For investors seeking rental income, the proximity to corporate headquarters and international universities guarantees a high occupancy rate and competitive rental yields. Our flexible financial solutions, including zero-interest installment plans over eight years, make this a viable opportunity for both long-term wealth creation and short-term capital gains."
        },
        {
          title: "Commitment to Sustainability",
          content: "The Marq Riverside is designed with the future in mind. Sustainability is integrated into the core of the project, not just as a buzzword, but as a practical commitment to environmental responsibility. The compound utilizes greywater recycling systems for landscaping, energy-efficient LED lighting across all public areas, and building materials that provide superior thermal insulation, reducing the demand for artificial cooling. The integration of 'Smart Grid' technology allows the community to monitor and optimize energy consumption in real-time. Extensive botanical gardens spanning over 30% of the total project area help in carbon sequestration and provide a cooling effect, making the air fresher and the environment more pleasant. By choosing The Marq Riverside, you are not just choosing luxury; you are choosing a lifestyle that respects the planet."
        },
        {
          title: "Safety, Privacy, and Community",
          content: "In an increasingly busy world, privacy and security are the ultimate luxuries. The Marq Riverside is a fully gated, 24/7 monitored community with advanced AI-powered security systems that identify and address potential safety concerns before they arise. Professional concierge services act as the guardians of your convenience, managing everything from guest arrivals to personal errands. Beyond security, the project fosters a true sense of belonging. The 'Riverside Social Club' is a vibrant hub where residents can network, celebrate milestones, or simply enjoy a coffee with neighbors. Regular community events, workshops, and gatherings are organized to create a cohesive social fabric, ensuring that you are surrounded by like-minded individuals who share your values and aspirations. At The Marq Riverside, you don't just find a house; you find a community that feels like home."
        }
      ]
    },
    stats: [
      { label: "Projected ROI", value: "25%+" },
      { label: "Luxury Units", value: "250+" },
      { label: "Delivery Date", value: "Q4 '27" }
    ],
    units: [
      { type: "Executive Apartment", area: "75 m²", price: "4,500,000 EGP", beds: "1", availability: "Available" },
      { type: "Premium Residence", area: "125 m²", price: "7,200,000 EGP", beds: "2", availability: "Limited" },
      { type: "Family Suite", area: "170 m²", price: "9,800,000 EGP", beds: "3", availability: "Available" },
      { type: "Luxury Penthouse", area: "215 m²", price: "13,500,000 EGP", beds: "4", availability: "Limited" },
      { type: "Garden Duplex", area: "190 m²", price: "11,200,000 EGP", beds: "3", availability: "Available" },
    ],
    unitTypes: [
      { type: "Apartments", startArea: "75 m²", startPrice: "4,500,000 EGP", beds: "1 - 3" },
      { type: "Duplexes", startArea: "190 m²", startPrice: "11,200,000 EGP", beds: "3 - 4" },
      { type: "Penthouses", startArea: "215 m²", startPrice: "13,500,000 EGP", beds: "4" },
      { type: "Villas", startArea: "350 m²", startPrice: "25,000,000 EGP", beds: "5 - 6" },
    ],
    amenities: [
      { icon: "Droplets", title: "Infinity Pools", desc: "Temperature-controlled swimming pools with cabanas." },
      { icon: "Dumbbell", title: "Fitness Club", desc: "Professional gym with world-class trainers and equipment." },
      { icon: "Trees", title: "Botanical Gardens", desc: "Verdant landscapes with exotic plants and walking paths." },
      { icon: "ShieldCheck", title: "24/7 Security", desc: "Advanced AI-powered surveillance and trained security personnel." },
      { icon: "Coffee", title: "Social Clubhouse", desc: "Exclusive community hub for networking and relaxation." },
      { icon: "Car", title: "Underground Parking", desc: "Secure multi-level parking with EV charging stations." },
      { icon: "Utensils", title: "Gourmet Dining", desc: "Fine dining restaurants and artisanal cafes within the gate." },
      { icon: "Smartphone", title: "Smart Home System", desc: "Fully integrated automation for lighting, climate, and security." },
      { icon: "Tv", title: "Cinema Room", desc: "Private luxurious screening room for community residents." },
      { icon: "Users", title: "Business Center", desc: "Fully equipped co-working spaces and meeting rooms." },
      { icon: "Sparkles", title: "Wellness Spa", desc: "Complete spa facilities including sauna and steam rooms." },
      { icon: "Info", title: "Concierge Services", desc: "White-glove concierge for all your daily requirements." },
    ],
    paymentPlans: [
      {
        name: "Classic Plan",
        description: "Balanced entry for long-term ownership with minimal upfront cost.",
        details: [
          "10% Down Payment",
          "0% Interest rate",
          "8 Years continuous installments",
          "8% Maintenance fee",
          "Delivery in 2027"
        ],
        discount: "5% Launch Discount"
      },
      {
        name: "Investor Plan",
        description: "Optimized for high ROI with shorter commitment and larger discount.",
        details: [
          "20% Down Payment",
          "0% Interest rate",
          "5 Years installments",
          "Immediate unit reservation",
          "Higher priority in delivery"
        ],
        discount: "10% Investor Discount"
      },
      {
        name: "Cash Option",
        description: "Ideal for immediate full ownership with maximum savings.",
        details: [
          "100% Full Payment",
          "No installments needed",
          "Immediate contract finalization",
          "Priority interior bespoking",
          "Full unit handover guarantee"
        ],
        discount: "25% Cash Discount"
      }
    ],
    faqs: [
      { q: "Is The Marq Riverside suitable for investment?", a: "Absolutely. Given its strategic location on South 90th Street and the developer's track record, the project offers a projected capital appreciation of 25-30% before delivery." },
      { q: "Are there interest-free installment options?", a: "Yes, our primary payment plan consists of a 10% down payment with the remaining balance spread over 8 years in equal installments with zero interest." },
      { q: "Is the project legally registered?", a: "Yes, the project has all ministerial approvals and is fully registered with the New Urban Communities Authority (NUCA)." },
      { q: "When is the estimated delivery date?", a: "Phase 1 is scheduled for handover in Q4 2027, with the final phase completing in mid-2028." },
      { q: "What are the maintenance fees?", a: "Maintenance fees are set at 8% of the unit price, paid 6 months before delivery to ensure the long-term upkeep of the community." },
      { q: "Can I request a modified interior design?", a: "We offer 'Marq Bespoke' services where you can customize the layout and finishes of your unit during construction." },
      { q: "What defines the architectural style?", a: "The project follows a 'Modern Regency' philosophy, blending classical elegance with contemporary minimalist architecture." },
      { q: "Are pets allowed in the compound?", a: "Yes, The Marq Riverside is a pet-friendly community with dedicated walking areas and waste stations throughout the parks." },
    ],
    locationMarkers: [
      { title: "AUC Campus", time: "5 mins" },
      { title: "Middle Ring Road", time: "3 mins" },
      { title: "Point 90 Mall", time: "5 mins" },
      { title: "New Admin Capital", time: "15 mins" },
    ]
  }
};

export const resales = [
  {
    id: 1,
    title: "Spacious Corner Apartment",
    location: "New Cairo",
    compound: "Mivida",
    originalOwnerPrice: "3,200,000",
    askingPrice: "4,750,000",
    roi: "48%",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    type: "Apartment",
    area: "165 m²",
    rooms: 3,
    handoverYear: "2022",
  },
  {
    id: 2,
    title: "Modern Twin House",
    location: "6th of October",
    compound: "Sodic West",
    originalOwnerPrice: "5,800,000",
    askingPrice: "8,200,000",
    roi: "41%",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    type: "Twin House",
    area: "280 m²",
    rooms: 4,
    handoverYear: "2021",
  },
  {
    id: 3,
    title: "Penthouse with Private Terrace",
    location: "North Coast",
    compound: "Hacienda Bay",
    originalOwnerPrice: "7,100,000",
    askingPrice: "11,500,000",
    roi: "62%",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    type: "Penthouse",
    area: "320 m²",
    rooms: 4,
    handoverYear: "2020",
  },
  {
    id: 4,
    title: "Garden Apartment",
    location: "Sheikh Zayed",
    compound: "Beverly Hills",
    originalOwnerPrice: "2,400,000",
    askingPrice: "3,350,000",
    roi: "39%",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
    type: "Apartment",
    area: "140 m²",
    rooms: 3,
    handoverYear: "2022",
  },
  {
    id: 5,
    title: "Standalone Villa",
    location: "New Cairo",
    compound: "Palm Hills",
    originalOwnerPrice: "9,500,000",
    askingPrice: "15,000,000",
    roi: "57%",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    type: "Villa",
    area: "500 m²",
    rooms: 5,
    handoverYear: "2021",
  },
  {
    id: 6,
    title: "Duplex with Pool View",
    location: "Ain Sokhna",
    compound: "Azha",
    originalOwnerPrice: "4,200,000",
    askingPrice: "6,100,000",
    roi: "45%",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    type: "Duplex",
    area: "210 m²",
    rooms: 3,
    handoverYear: "2023",
  },
  ...Array.from({ length: 15 }).map((_, i) => ({
    id: i + 7,
    title: `Resale Property ${i + 7}`,
    location: i % 2 === 0 ? "New Cairo" : "Sheikh Zayed",
    compound: "Compound Name",
    originalOwnerPrice: `${(3 + i) * 1000000}`,
    askingPrice: `${(4 + i) * 1000000}`,
    roi: `${20 + i}%`,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    type: ["Apartment", "Villa", "Penthouse"][i % 3],
    area: `${150 + i * 5} m²`,
    rooms: (i % 3) + 2,
    handoverYear: `${2020 + (i % 5)}`,
  })),
];