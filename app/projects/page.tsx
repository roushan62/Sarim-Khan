import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProjectsExplorer from "@/components/ProjectsExplorer";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Turnkey fit-out portfolio directed by Sarim Khan — Max Life Insurance, L&T Financial Services, Compass Group, Krsnaa Diagnostics, Infosys and more. 4,50,000+ sq. ft. | ₹120+ Cr | 20+ clients nationwide.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Projects delivered, end to end"
        intro="Major turnkey fit-out engagements directed since 2018 — across corporate & IT, BFSI, healthcare & diagnostics, education, F&B and industrial workplaces."
      />
      <section className="py-14 md:py-20">
        <div className="container-site">
          <ProjectsExplorer />
        </div>
      </section>
      {/* Running totals footer */}
      <section aria-label="Portfolio totals" className="border-t border-line bg-sand">
        <div className="container-site py-10 text-center">
          <Reveal>
            <p className="font-display text-xl font-medium text-navy md:text-2xl">
              <span className="text-gold">4,50,000+</span> sq. ft.{" "}
              <span className="mx-2 text-line">|</span>
              <span className="text-gold">₹120+ Cr</span>
              <span className="mx-2 text-line">|</span>
              <span className="text-gold">20+</span> Clients Nationwide
            </p>
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
