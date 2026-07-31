import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryExplorer from "@/components/GalleryExplorer";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "On-site photography from projects delivered under Sarim Khan's direction at FocusOn Interiors — Luminous Haridwar, L&T Financial Services (Navi Mumbai & Bengaluru), Emversity Kochi, Ericsson Ahmedabad and delivery environments across verticals.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Project Gallery"
        title="The work, photographed"
        intro="Real photography from completed projects — campuses, workplaces and learning environments delivered end-to-end under Sarim's project direction at FocusOn Interiors."
      />
      <section className="py-14 md:py-20">
        <div className="container-site">
          <GalleryExplorer />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
