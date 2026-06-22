import { BusinessPillars } from "../components/home/BusinessPillars";
import { FeaturedListings } from "../components/home/FeaturedListings";
import { Hero } from "../components/home/Hero";
import { ProcessSection } from "../components/home/ProcessSection";
import { SellerBuilderCTA } from "../components/home/SellerBuilderCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <BusinessPillars />
      <FeaturedListings />
      <ProcessSection />
      <SellerBuilderCTA />
    </main>
  );
}
