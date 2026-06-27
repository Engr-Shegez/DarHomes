import { PageHeader } from "@/src/components/layout/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Land",
  description:
    "Secure verified land opportunities in prime locations with Darhomes Realty.",
};

export default function LandPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Get Land"
        title="Secure your foundation in the right location."
        description="Explore land opportunities with support around location, documentation, inspection, and long-term value."
      />
    </main>
  );
}
