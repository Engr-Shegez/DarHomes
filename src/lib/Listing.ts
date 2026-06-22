export type ListingType = "Buy" | "Rent" | "Land";

export type Listing = {
  id: number;
  title: string;
  location: string;
  price: string;
  type: ListingType;
  image: string;
  beds?: number;
  baths?: number;
  size: string;
  featured: boolean;
};

export const listings: Listing[] = [
  {
    id: 1,
    title: "Comtemporary Family Home",
    location: "Lekki Phase 1, Lagos",
    price: "₦180M",
    type: "Buy",
    image: "/images/listing-2.png",
    beds: 4,
    baths: 5,
    size: "420 sqm",
    featured: true,
  },
  {
    id: 2,
    title: "Prime Residential Land",
    location: "Ibeju-Lekki, Lagos",
    price: "₦35M",
    type: "Land",
    image: "/images/listing-3.png",
    size: "600 sqm",
    featured: true,
  },
  {
    id: 3,
    title: "Curated Short Stay Apartment",
    location: "Victoria Island, Lagos",
    price: "₦95k/night",
    type: "Rent",
    image: "/images/listing-1.png",
    beds: 2,
    baths: 2,
    size: "Ocean view",
    featured: true,
  },
];
