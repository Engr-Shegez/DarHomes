import { PageHeader } from "@/src/components/layout/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Darhomes Realty and its complete approach to land, build, sales, rentals, and stays.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About Darhomes"
        title="A real estate partner for land, homes, builds, and stays."
        description="Darhomes Realty exists to make real estate feel more guided, connected, and human across the full property lifecycle."
      />
    </main>
  );
}
