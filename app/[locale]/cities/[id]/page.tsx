import CityDetailPage from "./CityDetails";
import img from '@/app/images/ap0.jpg';

// ─── Static Mock Data ─────────────────────────────────────────────────────────
const city = {
  id: "cairo",
  name: "New Cairo",
  region: "Cairo Governorate",
  trending: true,
  description:
    "New Cairo is one of Egypt's fastest-growing real estate hubs, blending luxury residential communities with commercial districts and world-class infrastructure. Perfect for investors and families alike.",
  propertiesCount: 1250,
  compoundsCount: 15,
  rating: 4.6,
  reviews: 230,
  highlights: [
    "Prime investment location",
    "High ROI potential",
    "World-class infrastructure",
    "Proximity to key hubs",
    "Diverse lifestyle options",
    "Strong rental demand",
  ],
  compounds: [
    {
      id: 1,
      name: "Palm Hills Compound",
      location: "5th Settlement",
      properties: 200,
      image: img.src,
      trend: "High Demand",
    },
    {
      id: 2,
      name: "Mivida Compound",
      location: "East Cairo",
      properties: 150,
      image: img.src,
      trend: "Moderate",
    },
    {
      id: 3,
      name: "Mountain View Compound",
      location: "5th Settlement",
      properties: 180,
      image: img.src,
      trend: "High Demand",
    },
  ],
  deals: [
    {
      id: 101,
      title: "Apartment in Palm Hills",
      compound: "Palm Hills Compound",
      type: "Apartment",
      location: "5th Settlement",
      price: 3200000,
      originalPrice: "3500000",
      discountedPrice: "3200000",
      discount: "8.5",
      area: "150",
      bedrooms: 2,
      bathrooms: 2,
      rooms: 3,
      timeLeft: "15 days",
      image: img.src,
    },
    {
      id: 102,
      title: "3-Bedroom Villa in Mivida",
      compound: "Mivida Compound",
      type: "Villa",
      location: "East Cairo",
      price: 5400000,
      originalPrice: "5800000",
      discountedPrice: "5400000",
      discount: "6.9",
      area: "250",
      bedrooms: 3,
      bathrooms: 3,
      rooms: 6,
      timeLeft: "30 days",
      image: img.src,
    },
    {
      id: 103,
      title: "Apartment in Mountain View",
      compound: "Mountain View Compound",
      type: "Apartment",
      location: "5th Settlement",
      price: 2100000,
      originalPrice: "2250000",
      discountedPrice: "2100000",
      discount: "6.7",
      area: "90",
      bedrooms: 1,
      bathrooms: 1,
      rooms: 2,
      timeLeft: "10 days",
      image: img.src,
    },
  ],
};

// ─── Page Component ───────────────────────────────────────────────────────────
export default function page() {
  return <CityDetailPage city={city} />;
}
