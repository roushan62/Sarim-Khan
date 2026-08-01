import type { Metadata } from "next";
import {
  BadgeCheck, Blocks, Cable, CalendarCheck, ClipboardList, DraftingCompass,
  Handshake, KeyRound, Network, ReceiptIndianRupee, ShieldCheck, Target, Users,
  Wrench, type LucideIcon,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { COMPETENCIES, PROCESS_STEPS, TOOLKIT } from "@/data/expertise";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Core competencies: project direction & P&L, BOQ finalization, multi-site execution, MEP coordination, billing & handover. Toolkit: AutoCAD, Primavera, StandPro. Methodology from client brief to formal handover.",
  alternates: { canonical: "/expertise" },
};

const ICONS: Record<string, LucideIcon> = {
  Target, ClipboardList, Handshake, Blocks, ReceiptIndianRupee, KeyRound,
  Users, Network, Cable, DraftingCompass, CalendarCheck, ShieldCheck,
};

function CompetencyGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <p className="eyebrow">Core Competencies</p>
          <h2 className="h-display mt-4 text-3xl md:text-[38px]">
            What the Project Department owns
          </h2>
          <span className="gold-rule" />
        </Reveal>
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COMPETENCIES.map((c) => {
            const Icon = ICONS[c.icon] ?? Wrench;
            return (
              <StaggerItem key={c.title}>
                <div className="group relative h-full border border-line bg-surface p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gold transition-transform duration-500 ease-luxe group-hover:scale-x-100" />
                  <span className="grid h-12 w-12 place-items-center bg-sand text-gold transition-colors duration-300 group-hover:bg-navy group-hover:text-goldLight">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 font-display text-[19px] font-semibold leading-snug text-navy">
                    {c.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{c.detail}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Toolkit */}
        <Reveal className="mt-16">
          <div className="flex flex-wrap items-center gap-4 border border-line bg-sand px-7 py-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              Technical Toolkit
            </span>
            <span className="hidden h-4 w-px bg-line sm:block" />
            {TOOLKIT.map((t) => (
              <span
                key={t}
                className="border border-navy bg-navy px-4 py-2 text-[12.5px] font-semibold uppercase tracking-[0.1em] text-ivory"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Methodology() {
  return (
    <section className="border-t border-line bg-sand py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <p className="eyebrow">Methodology</p>
          <h2 className="h-display mt-4 text-3xl md:text-[38px]">
            From brief to handover — the delivery spine
          </h2>
          <span className="gold-rule" />
          <p className="lead mt-5 max-w-2xl">
            Every engagement, regardless of size, runs on the same seven-stage
            framework. Predictability is the product.
          </p>
        </Reveal>

        <ol className="relative mt-14 space-y-0">
          {PROCESS_STEPS.map((s, i) => (
            <li key={s.step} className="relative">
              <Reveal>
                <div
                  className={`grid gap-5 border-b border-line py-8 md:grid-cols-12 md:items-center ${
                    i % 2 === 1 ? "md:text-left" : ""
                  }`}
                >
                  <div className="md:col-span-2">
                    <span className="font-display text-4xl font-semibold text-gold/70 md:text-5xl">
                      {s.step}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-display text-xl font-semibold text-navy md:text-[22px]">
                      {s.title}
                    </h3>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-[15px] leading-relaxed text-muted">{s.detail}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        eyebrow="Expertise"
        title="Delivery discipline, end to end"
        intro="Twelve competencies, three engineering tools, and a seven-stage methodology that keeps multi-crore, multi-city programmes predictable."
      />
      <CompetencyGrid />
      <Methodology />
      <CtaBand />
    </>
  );
}
