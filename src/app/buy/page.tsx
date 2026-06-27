import type { Metadata } from "next";

import { listings } from "@/src/lib/Listing";
import { PageHeader } from "@/src/components/layout/PageHeader";
import { ListingGrid } from "@/src/components/listings/ListingGrid";

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
      <ListingGrid listings={listings} type="Buy" />
    </main>
  );
}
