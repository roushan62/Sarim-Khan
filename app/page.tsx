import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Img from "@/components/Img";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import Counters from "@/components/Counters";
import ProjectCard from "@/components/ProjectCard";
import LogoWall from "@/components/LogoMarquee";
import CtaBand from "@/components/CtaBand";
import { featuredProjects } from "@/data/projects";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Sarim Khan — Project Director | Turnkey Interior Fit-Out",
  description: SITE.description,
  alternates: { canonical: "/" },
};

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hairline-grid bg-grid-lg pt-28 md:pt-36">
      {/* soft gold halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-gold/10 blur-[110px]"
      />
      <div className="container-site relative grid items-center gap-14 pb-16 lg:grid-cols-12 lg:gap-8 lg:pb-24">
        {/* Copy */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">Project Director · Turnkey Interior Fit-Out</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="h-display mt-5 text-6xl md:text-[88px]">Sarim Khan</h1>
            <span className="gold-rule !w-24" />
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lead mt-7 max-w-xl">
              Directing India&apos;s turnkey commercial fit-out delivery — from
              BOQ to handover — for corporate, BFSI, and institutional clients
              nationwide.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/projects" className="btn-primary">
                View Projects <ArrowRight size={15} />
              </Link>
              <Link href="/contact" className="btn-outline">
                Get in Touch
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-7">
              {[
                ["Currently", "Project Director — FocusOn Interiors"],
                ["Since", "September 2018"],
                ["Based in", "Delhi-NCR · PAN-India"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-muted">
                    {k}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-navy">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Portrait composition */}
        <div className="lg:col-span-5">
          <Reveal delay={0.2}>
            <div className="relative mx-auto max-w-[420px]">
              {/* offset gold frame */}
              <div aria-hidden className="absolute -left-4 -top-4 h-full w-full border border-gold" />
              <div className="relative aspect-[3/4] overflow-hidden bg-navy">
                <Img
                  src="/images/sarim/portrait-navy-suit.webp"
                  alt="Sarim Khan — Project Director, FocusOn Interiors"
                  priority
                  fit="contain"
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="object-bottom"
                />
              </div>
              {/* floating credential chip */}
              <div className="absolute -bottom-6 left-2 border border-line bg-surface px-5 py-4 shadow-lift md:-left-10">
                <p className="font-display text-[26px] font-semibold leading-none text-gold">
                  ₹120+ Cr
                </p>
                <p className="mt-1.5 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-muted">
                  Project Value Directed
                </p>
              </div>
              {/* real project thumb */}
              <div className="absolute -right-4 -top-8 hidden w-40 overflow-hidden border-4 border-surface shadow-lift md:block lg:-right-10">
                <div className="relative aspect-[4/3]">
                  <Img
                    src="/images/projects/luminous-haridwar/collage.webp"
                    alt="Luminous Power Technologies campus, Haridwar — delivered under Sarim Khan's direction"
                    sizes="160px"
                  />
                </div>
                <p className="absolute inset-x-0 bottom-0 bg-navy/85 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-ivory">
                  Luminous, Haridwar
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FeaturedWork() {
  const projects = featuredProjects();
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow">Selected Work</p>
            <h2 className="h-display mt-4 text-3xl md:text-[42px]">Featured Engagements</h2>
            <span className="gold-rule" />
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 border-b-2 border-gold pb-1 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-navy transition-colors hover:text-gold"
            >
              View All Projects
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <StaggerItem key={p.slug}>
              <ProjectCard project={p} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function AboutTeaser() {
  return (
    <section className="border-y border-line bg-sand py-20 md:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <div aria-hidden className="absolute -bottom-4 -right-4 h-full w-full border border-gold" />
          <div className="relative aspect-[16/10] overflow-hidden">
            <Img
              src="/images/sarim/at-office.webp"
              alt="Sarim Khan at his office — FocusOn Interiors, Delhi NCR"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>
        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow">About</p>
            <h2 className="h-display mt-4 text-3xl md:text-[40px]">
              An engineer by training. A delivery leader by record.
            </h2>
            <span className="gold-rule" />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 leading-[1.8] text-muted">
              Since September 2018, Sarim Khan has led the Project Department of
              FocusOn Interior Decorators Pvt. Ltd. — directing turnkey
              commercial fit-outs across corporate, IT, BFSI, education,
              healthcare and F&amp;B verticals, and supporting the
              organization&apos;s growth from ₹40 Crore to a projected ₹100
              Crore.
            </p>
            <p className="mt-4 leading-[1.8] text-muted">
              He holds a B.Tech in Civil Engineering and runs multi-crore,
              multi-site programmes on AutoCAD, Primavera and StandPro — to the
              company&apos;s C.Q.E.T. standard: Consistency, Quality, Economical
              delivery and Time Efficiency.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              href="/about"
              className="group mt-7 inline-flex items-center gap-2 border-b-2 border-gold pb-1 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-navy transition-colors hover:text-gold"
            >
              Read More
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <Reveal className="text-center">
          <p className="eyebrow justify-center before:hidden after:hidden" style={{ letterSpacing: "0.18em" }}>
            Marquee Accounts
          </p>
          <h2 className="h-display mx-auto mt-4 max-w-xl text-3xl md:text-[40px]">
            Trusted by India&apos;s most demanding workplaces
          </h2>
          <span className="gold-rule mx-auto" />
        </Reveal>
        <Reveal delay={0.15} className="mt-12">
          <LogoWall />
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 text-center">
            <Link
              href="/clients"
              className="group inline-flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-navy transition-colors hover:text-gold"
            >
              Full Client Roster
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Counters />
      <FeaturedWork />
      <AboutTeaser />
      <Clients />
      <CtaBand />
    </>
  );
}
