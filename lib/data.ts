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
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    type: "Studio",
    area: "85 m²",
    rooms: 1,
    timeLeft: "6 days",
  },
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
    category: "Investment",
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
    category: "Guides",
  },
  {
    id: 3,
    title: "Smart Home Features That Increase Property Value",
    excerpt:
      "Learn how modern technology and smart home integrations can boost your property's market value.",
    author: "Omar Khalil",
    authorImage: "https://i.pravatar.cc/150?img=33",
    date: "Feb 5, 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    category: "Technology",
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
    category: "Market Analysis",
  },
  {
    id: 5,
    title: "Financing Options: Getting the Best Mortgage Deal",
    excerpt:
      "Navigate the world of real estate financing with our comprehensive guide to securing the best rates.",
    author: "Khaled Adel",
    authorImage: "https://i.pravatar.cc/150?img=15",
    date: "Jan 30, 2026",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=800&h=600&fit=crop",
    category: "Finance",
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
    category: "Lifestyle",
  },
];
