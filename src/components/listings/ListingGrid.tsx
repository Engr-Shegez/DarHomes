import type { Listing, ListingType } from "@/src/lib/Listing";
import { ListingCard } from "./ListingCard";

type ListingGridProps = {
  listings: Listing[];
  type?: ListingType;
  emptyMessage?: string;
};

export function ListingGrid({
  listings,
  type,
  emptyMessage = "No listings found yet.",
}: ListingGridProps) {
  const visibleListings = type
    ? listings.filter((listing) => listing.type === type)
    : listings;

  if (visibleListings.length === 0) {
    return (
      <section className="bg-background px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[1.5rem] border border-line bg-surface p-8 text-center text-muted">
          {emptyMessage}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-background px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visibleListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </section>
  );
}
