import { BusinessPillars } from "../components/home/BusinessPillars";
import { FAQSection } from "../components/home/FAQSection";
import { FeaturedListings } from "../components/home/FeaturedListings";
import { FinalCTA } from "../components/home/FinalCTA";
import { Hero } from "../components/home/Hero";
import { ProcessSection } from "../components/home/ProcessSection";
import { SellerBuilderCTA } from "../components/home/SellerBuilderCTA";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { JsonLd } from "../components/seo/JsonLd";
import { homeFaqJsonLd, organizationJsonLd } from "../lib/seo";

export default function Home() {
  return (
    <main>
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={homeFaqJsonLd} />
      <Hero />
      <BusinessPillars />
      <FeaturedListings />
      <ProcessSection />
      <SellerBuilderCTA />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
