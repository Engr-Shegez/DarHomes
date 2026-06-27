import { PageHeader } from "@/src/components/layout/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell Property",
  description:
    "List your property with Darhomes Realty and get guidance on positioning, buyer fit, and next steps.",
};

export default function SellPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Sell With Darhomes"
        title="Position your property for the right buyer."
        description="Share your property details and let Darhomes help you prepare, present, and move with a clearer selling process."
      />
    </main>
  );
}
