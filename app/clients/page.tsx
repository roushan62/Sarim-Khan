import type { Metadata } from "next";
import { Award, Building2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import GrowthChart from "@/components/GrowthChart";
import CtaBand from "@/components/CtaBand";
import { CLIENT_GROUPS } from "@/data/clients";
import { COMPANY_SNAPSHOT } from "@/data/experience";
import ClientLogoCell from "@/components/ClientLogoCell";

export const metadata: Metadata = {
  title: "Clients & Recognition",
  description:
    "Client roster across corporate & IT, BFSI & insurance, F&B, education, healthcare, retail, logistics and PMC partners — Infosys, HCL, Wipro, Accenture, Nokia, Google, KPMG, L&T Financial Services, Max Life and more.",
  alternates: { canonical: "/clients" },
};

function ClientWalls() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-site space-y-14">
        {CLIENT_GROUPS.map((group, gi) => (
          <div key={group.vertical} className="grid gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-3">
              <div className="lg:sticky lg:top-32">
                <p className="font-display text-2xl font-semibold text-navy">
                  {group.vertical}
                </p>
                <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
                  {group.clients.length} Clients
                </p>
                <span className="mt-4 block h-[2px] w-10 bg-gold" />
              </div>
            </Reveal>
            <Reveal className="lg:col-span-9" delay={0.08}>
              <ul className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 xl:grid-cols-4">
                {group.clients.map((c) => (
                  <li
                    key={c}
                    className="group grid h-[88px] place-items-center bg-surface px-4 py-3 text-center transition-all duration-300 hover:z-10 hover:bg-sand hover:shadow-lift"
                  >
                    <ClientLogoCell name={c} />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}

function Recognition() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-navy py-16 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border-[24px] border-gold/15"
      />
      <div className="container-site grid items-center gap-8 md:grid-cols-12">
        <Reveal className="md:col-span-2">
          <span className="grid h-16 w-16 place-items-center border border-gold/50 text-goldLight">
            <Award size={26} strokeWidth={1.6} />
          </span>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-10">
          <h2 className="font-display text-2xl font-medium leading-snug text-ivory md:text-[32px]">
            &ldquo;India&apos;s fastest-growing space-planning organization&rdquo;
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ivory/65">
            — the position FocusOn Interiors has earned in India&apos;s commercial
            interiors market, powered by the project delivery organization Sarim leads.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-goldLight">
            <Building2 size={14} /> {COMPANY_SNAPSHOT.legal} · Founded {COMPANY_SNAPSHOT.founded}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Growth() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-site max-w-4xl">
        <Reveal className="text-center">
          <p className="eyebrow justify-center before:hidden after:hidden">Growth & Scale</p>
          <h2 className="h-display mx-auto mt-4 max-w-2xl text-3xl md:text-[38px]">
            The delivery organization Sarim leads — compounding at scale
          </h2>
          <span className="gold-rule mx-auto" />
        </Reveal>
        <Reveal delay={0.15} className="mt-12">
          <div className="card p-8 shadow-card md:p-10">
            <GrowthChart />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients & Recognition"
        title="The roster speaks in logos"
        intro="20+ marquee accounts led directly, inside a client roster that reads like India's corporate index — corporate & IT, BFSI, F&B, education, healthcare, retail, logistics and the world's leading PMCs."
      />
      <ClientWalls />
      <Recognition />
      <Growth />
      <CtaBand />
    </>
  );
}
