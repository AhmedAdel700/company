import BestDeals from "@/components/BestDeals/BestDeals";
import ContactSection from "@/components/ContactSection/ContactSection";
import CitiesSection from "@/components/FamousCities/CitiesSection";
import FeaturedCompounds from "@/components/Featured Compounds/FeaturedCompounds";
import Hero from "@/components/Hero/Hero";
import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import Developers from "@/components/Developers/Developers";

export default function Home() {
  return (
    <main>
      <Hero />
      <CitiesSection />
      <FeaturedCompounds />
      <Developers />
      <BestDeals />
      <LatestBlogs />
      <ContactSection />
    </main>
  );
}
