import type { Metadata } from "next";
import { Award, GraduationCap, Newspaper } from "lucide-react";
import Img from "@/components/Img";
import PageHero from "@/components/PageHero";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { PILLARS, TOOLKIT } from "@/data/expertise";
import { EDUCATION } from "@/data/experience";
import { BadgeCheck, Clock, IndianRupee, Repeat } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sarim Khan — Project Director at FocusOn Interior Decorators since 2018. B.Tech Civil Engineering. 4,50,000+ sq. ft. and ₹120+ Cr delivered across 20+ marquee accounts.",
  alternates: { canonical: "/about" },
};

const PILLAR_ICONS = { Repeat, BadgeCheck, IndianRupee, Clock } as const;

function Bio() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-site grid gap-14 lg:grid-cols-12">
        {/* Portrait column */}
        <div className="lg:col-span-5">
          <Reveal className="relative mx-auto max-w-md lg:sticky lg:top-32">
            <div aria-hidden className="absolute -left-4 -top-4 h-full w-full border border-gold" />
            <div className="relative aspect-[3/4] overflow-hidden bg-sand">
              <Img
                src="/images/sarim/portrait-light-blazer.webp"
                alt="Sarim Khan — Project Director, FocusOn Interiors"
                fit="contain"
                className="object-bottom"
                sizes="(max-width: 1024px) 90vw, 40vw"
                priority
              />
            </div>
            <div className="relative mt-4 flex gap-4">
              <div className="relative aspect-[4/3] flex-1 overflow-hidden border border-line">
                <Img
                  src="/images/sarim/at-office.webp"
                  alt="Sarim Khan at his office desk — FocusOn Interiors"
                  sizes="(max-width: 1024px) 45vw, 20vw"
                />
              </div>
              <div className="relative aspect-[3/4] flex-1 overflow-hidden bg-navy">
                <Img
                  src="/images/sarim/portrait-seated-charcoal.webp"
                  alt="Sarim Khan — seated studio portrait"
                  fit="contain"
                  className="object-bottom"
                  sizes="(max-width: 1024px) 45vw, 20vw"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bio copy */}
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="h-display text-2xl md:text-3xl">
              Project Director, FocusOn Interior Decorators Pvt. Ltd.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-6 space-y-5 leading-[1.85] text-muted">
              <p>
                Sarim Khan is a Project Director at FocusOn Interior Decorators
                Pvt. Ltd., where he has led the company&apos;s Project
                Department since September 2018. Over more than seven years, he
                has directed the end-to-end delivery of turnkey commercial
                interior fit-outs — from BOQ finalization and design
                coordination through site execution, billing, and formal
                handover — across corporate, IT, BFSI, education,
                healthcare/diagnostics, and F&amp;B verticals.
              </p>
              <p>
                Under his direction, FocusOn Interiors&apos; Project Department
                has delivered more than{" "}
                <strong className="font-semibold text-navy">
                  4,50,000 sq. ft.
                </strong>{" "}
                of fit-out space with a cumulative project value exceeding{" "}
                <strong className="font-semibold text-navy">₹120 Crore</strong>,
                for marquee clients including Infosys, L&amp;T, Max Life
                Insurance, Sodexo, Compass Group, Avaya India, and Krsnaa
                Diagnostics — supporting the organization&apos;s growth from{" "}
                <strong className="font-semibold text-navy">
                  ₹40 Crore (FY 2022–23)
                </strong>{" "}
                to a projected{" "}
                <strong className="font-semibold text-navy">
                  ₹100 Crore (FY 2024–25)
                </strong>
                .
              </p>
              <p>
                He holds a Bachelor of Technology in Civil Engineering and
                combines strong engineering fundamentals with hands-on command
                of AutoCAD, Primavera, and StandPro to keep multi-site,
                multi-crore projects on schedule, on budget, and to the standard
                the company calls its success mantra:{" "}
                <em className="font-display text-navy">
                  Consistency, Quality, Economical delivery, and Time Efficiency
                  (C.Q.E.T.)
                </em>
                .
              </p>
            </div>
          </Reveal>

          {/* Toolkit */}
          <Reveal delay={0.12}>
            <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-line pt-6">
              <span className="mr-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                Technical Toolkit
              </span>
              {TOOLKIT.map((t) => (
                <span key={t} className="chip !text-navy">{t}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HowIWork() {
  return (
    <section className="border-y border-line bg-sand py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <p className="eyebrow">How I Work</p>
          <h2 className="h-display mt-4 text-3xl md:text-[38px]">
            The C.Q.E.T. Operating Standard
          </h2>
          <span className="gold-rule" />
          <p className="lead mt-5 max-w-2xl">
            Four non-negotiables govern every engagement Sarim directs — the
            same framework that anchors FocusOn&apos;s delivery organization.
          </p>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => {
            const Icon = PILLAR_ICONS[p.icon as keyof typeof PILLAR_ICONS];
            return (
              <StaggerItem key={p.title}>
                <div className="group relative h-full border border-line bg-surface p-7 shadow-card transition-shadow duration-300 hover:shadow-lift">
                  <span className="absolute right-5 top-4 font-display text-5xl font-semibold text-sand transition-colors duration-300 group-hover:text-gold/20">
                    {p.letter}
                  </span>
                  <span className="grid h-12 w-12 place-items-center border border-gold/40 text-gold">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-navy">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{p.detail}</p>
                  <span className="mt-5 block h-[2px] w-8 bg-gold transition-all duration-500 group-hover:w-16" />
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

function EducationCerts() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-site grid gap-14 lg:grid-cols-2">
        {/* Education */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center border border-gold/40 text-gold">
                <GraduationCap size={19} strokeWidth={1.8} />
              </span>
              <h2 className="font-display text-2xl font-semibold text-navy">Education</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card mt-6 p-7 shadow-card">
              <p className="font-display text-lg font-semibold text-navy">
                {EDUCATION.degree}
              </p>
              <p className="mt-2 text-sm text-muted">{EDUCATION.period}</p>
              <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-muted">
                Engineering fundamentals — structures, materials, estimation and
                construction management — applied daily to fit-out delivery.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Certifications (placeholder grid — items can be added later) */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center border border-gold/40 text-gold">
                <Award size={19} strokeWidth={1.8} />
              </span>
              <h2 className="font-display text-2xl font-semibold text-navy">
                Certifications
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {/* Placeholder card — duplicate to add certifications later */}
              <div className="border border-dashed border-line bg-sand/60 p-7 text-center sm:col-span-2">
                <Newspaper size={20} className="mx-auto text-muted" />
                <p className="mt-3 font-display text-lg text-navy">
                  Certifications to be added
                </p>
                <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted">
                  Professional certifications and programme credentials will be
                  listed here as they are published.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Sarim Khan"
        intro="Project Director heading the Project Department at FocusOn Interiors — 7+ years, 4,50,000+ sq. ft., ₹120+ Cr of turnkey fit-out delivery across India."
      />
      <Bio />
      <HowIWork />
      <EducationCerts />
      <CtaBand />
    </>
  );
}
