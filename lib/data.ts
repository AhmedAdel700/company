import img from "@/app/images/hero1.avif";

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
