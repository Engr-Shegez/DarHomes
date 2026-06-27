import { PageHeader } from "@/src/components/layout/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build With Darhomes",
  description:
    "Plan and manage custom home construction projects with Darhomes Realty.",
};

export default function BuildPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Build With Darhomes"
        title="Create a home from vision to completion."
        description="Move from idea to structure with custom home planning, project coordination, and construction guidance."
      />
    </main>
  );
}
