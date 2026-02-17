import BestDeals from "@/components/BestDeals/BestDeals";
import ContactSection from "@/components/ContactSection/ContactSection";
import CitiesSection from "@/components/FamousCities/CitiesSection";
import FeaturedCompounds from "@/components/Featured Compounds/FeaturedCompounds";
import Hero from "@/components/Hero/Hero";
import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import Developers from "@/components/Developers/Developers";
import BestResale from "@/components/BestResale/BestResale";

export default function Home() {
  return (
    <main>
      <Hero />
      <CitiesSection />
      <BestDeals />
      <BestResale />
      <FeaturedCompounds />
      <Developers />
      <LatestBlogs />
      <ContactSection />
    </main>
  );
}
