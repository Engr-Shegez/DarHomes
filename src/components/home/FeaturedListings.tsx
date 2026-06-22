import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import { listings } from "@/src/lib/Listing";

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
            <Link
              key={listing.id}
              href={`/${listing.type.toLowerCase()}/${listing.id}`}
              className="group overflow-hidden rounded-[1.5rem] border border-line bg-surface transition hover:-translate-y-1 hover:border-charcoal"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
                <Image
                  src={listing.image}
                  alt={listing.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 rounded-full bg-surface px-3 py-1 text-xs font-extrabold uppercase tracking-[0.16em] text-charcoal">
                  {listing.type}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-semibold leading-tight text-charcoal">
                      {listing.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-muted">
                      {listing.location}
                    </p>
                  </div>

                  <p className="shrink-0 text-sm font-extrabold text-olive">
                    {listing.price}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold text-muted">
                  {listing.beds ? (
                    <span className="rounded-full border border-line px-3 py-1">
                      {listing.beds} Beds
                    </span>
                  ) : null}

                  {listing.baths ? (
                    <span className="rounded-full border border-line px-3 py-1">
                      {listing.baths} Baths
                    </span>
                  ) : null}

                  <span className="rounded-full border border-line px-3 py-1">
                    {listing.size}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
