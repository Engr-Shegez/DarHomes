import Image from "next/image";
import Link from "next/link";
import type { Listing } from "@/src/lib/Listing";

type ListingCardProps = {
  listing: Listing;
};

function getListingHref(listing: Listing) {
  if (listing.type === "Land") {
    return `/land/${listing.id}`;
  }

  if (listing.type === "Rent") {
    return `/rent/${listing.id}`;
  }

  return `/buy/${listing.id}`;
}

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <Link
      href={getListingHref(listing)}
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
  );
}
