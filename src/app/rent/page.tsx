import { PageHeader } from "@/src/components/layout/PageHeader";
import { ListingGrid } from "@/src/components/listings/ListingGrid";
import { listings } from "@/src/lib/Listing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rent And Short Stays",
  description:
    "Book curated rentals and short-term stays for business, leisure, and modern city travel.",
};

export default function RentPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Rent With Darhomes"
        title="Curated stays for business trips, weekends, and longer escapes."
        description="Explore rentals and short-term stays selected for comfort, location, and a smoother guest experience."
      />
      <ListingGrid listings={listings} type="Rent" />
    </main>
  );
}
