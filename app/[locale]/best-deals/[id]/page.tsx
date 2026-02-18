import UnitDetailPage from "./UnitDetailPage";
import imag0 from '@/app/images/ap0.jpg'
import imag1 from '@/app/images/ap1.jpg'
import imag2 from '@/app/images/ap2jpg.jpg'
import imag3 from '@/app/images/ap3.jpeg'

const demoDeal = {
  id: 1,
  title: "Luxury Apartment",
  location: "New Cairo",
  compound: "Palm Hills",
  type: "Apartment",
  originalPrice: "5,000,000",
  discountedPrice: "4,500,000",
  beds: 3,
  baths: 2,
  area: 150,
  images: [imag0, imag1, imag2, imag3],
  amenities: ["Pool", "Gym", "Garden"],
  features: ["Modern open kitchen", "Floor-to-ceiling windows"],
};

export default function page() {
  return <UnitDetailPage deal={demoDeal} />;
}
