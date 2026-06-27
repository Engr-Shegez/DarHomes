import { PageHeader } from "@/src/components/layout/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy Properties",
  description:
    "Explore curated homes and property opportunities for sale with Darhomes Realty.",
};

export default function BuyPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Buy With Darhomes"
        title="Find property with clarity, taste, and confidence."
        description="Browse homes and buying opportunities guided by location insight, practical details, and a smoother path to ownership."
      />
    </main>
  );
}
