import { Button } from "../ui/Button";
import { listings } from "@/src/lib/Listing";
import { ListingCard } from "../listings/ListingCard";

export function FeaturedListings() {
  const featuredListings = listings.filter((listing) => listing.featured);

  return (
    <section className="bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-olive sm:text-sm">
              Featured Opportunities
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl md:text-6xl">
              Places to buy, land to secure, stays to book.
            </h2>
          </div>

          <Button href="/buy" variant="outline" className="w-full sm:w-fit">
            View all listings
          </Button>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {featuredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
}
