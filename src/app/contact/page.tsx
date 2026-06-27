import { PageHeader } from "@/src/components/layout/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Darhomes Realty to buy, sell, secure land, build, or book a curated stay.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Contact Darhomes"
        title="Tell us what you want to do next."
        description="Whether you are buying, selling, securing land, planning a build, or booking a stay, Darhomes can help you take the next step."
      />
    </main>
  );
}
