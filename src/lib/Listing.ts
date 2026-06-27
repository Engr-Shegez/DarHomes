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
    title: "Contemporary Family Home",
    location: "Lekki Phase 1, Lagos",
    price: "₦180M",
    type: "Buy",
    image: "/images/listing-1.jpg",
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
    image: "/images/listing-2.jpg",
    size: "600 sqm",
    featured: true,
  },
  {
    id: 3,
    title: "Curated Short Stay Apartment",
    location: "Victoria Island, Lagos",
    price: "₦95k/night",
    type: "Rent",
    image: "/images/listing-3.jpg",
    beds: 2,
    baths: 2,
    size: "Ocean view",
    featured: true,
  },
  {
    id: 4,
    title: "Detached Smart Home",
    location: "Chevron, Lagos",
    price: "₦240M",
    type: "Buy",
    image: "/images/listing-4.jpg",
    beds: 5,
    baths: 6,
    size: "510 sqm",
    featured: false,
  },
  {
    id: 5,
    title: "Serviced City Apartment",
    location: "Ikoyi, Lagos",
    price: "₦120k/night",
    type: "Rent",
    image: "/images/listing-5.jpg",
    beds: 3,
    baths: 3,
    size: "Pool access",
    featured: false,
  },
  {
    id: 6,
    title: "Estate Plot Allocation",
    location: "Epe, Lagos",
    price: "₦18M",
    type: "Land",
    image: "/images/listing-6.jpg",
    size: "500 sqm",
    featured: false,
  },
];
