import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Darhomes Realty | Land, Build, Stay",
    template: "%s | Darhomes Realty",
  },
  description:
    "Darhomes Realty helps you secure prime land, build custom homes, and book curated short-term stays.",
  keywords: [
    "Darhomes Realty",
    "land sales",
    "real estate",
    "custom home construction",
    "Airbnb stays",
    "short term rentals",
  ],
  openGraph: {
    title: "Darhomes Realty | Land, Build, Stay",
    description:
      "We do not just find homes. We create them. Explore land, construction, and curated stays with Darhomes.",
    type: "website",
    locale: "en_US",
    siteName: "Darhomes Realty",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
