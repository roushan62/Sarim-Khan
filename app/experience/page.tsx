import type { Metadata } from "next";
import { Building2, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import GrowthChart from "@/components/GrowthChart";
import { COMPANY_SNAPSHOT, ROLES } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Career timeline: Project Director at FocusOn Interior Decorators since September 2018 — heading BOQ, design coordination, execution, billing and handover across 5 regional offices.",
  alternates: { canonical: "/experience" },
};

function Timeline() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-site grid gap-14 lg:grid-cols-12">
        {/* Timeline column */}
        <div className="lg:col-span-8">
          <Reveal>
            <p className="eyebrow">Career Timeline</p>
            <h2 className="h-display mt-4 text-3xl md:text-[38px]">
              7+ years, one organization, compounding scale
            </h2>
            <span className="gold-rule" />
          </Reveal>

          <div className="relative mt-12">
            {/* animated spine */}
            <span
              aria-hidden
              className="absolute left-[7px] top-2 h-full w-px bg-line md:left-[9px]"
            />
            <ol className="space-y-12">
              {ROLES.map((role) => (
                <li key={role.title} className="relative pl-10 md:pl-14">
                  <span
                    aria-hidden
                    className={`absolute left-0 top-2 grid h-[15px] w-[15px] place-items-center rounded-full border-2 md:h-[19px] md:w-[19px] ${
                      role.current ? "border-gold bg-gold" : "border-line bg-surface"
                    }`}
                  >
                    {role.current && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/40 [animation-duration:2.4s]" />
                    )}
                  </span>
                  <Reveal>
                    <div className="card p-7 shadow-card md:p-9">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display text-2xl font-semibold text-navy">
                            {role.title}
                          </h3>
                          <p className="mt-1 text-sm font-medium text-gold">
                            {role.company}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="chip !border-gold/50 !text-gold">{role.period}</p>
                          <p className="mt-2 text-[12px] text-muted">
                            {role.duration} · {role.location}
                          </p>
                        </div>
                      </div>
                      <ul className="mt-6 space-y-3">
                        {role.points.map((pt, i) => (
                          <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                            <CheckCircle2 size={17} className="mt-1 shrink-0 text-gold" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Company snapshot side-card */}
        <aside className="lg:col-span-4">
          <Reveal className="lg:sticky lg:top-32">
            <div className="border border-navy bg-navy p-7 text-ivory shadow-lift">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center border border-gold/50 text-goldLight">
                  <Building2 size={19} strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold">Company Snapshot</h3>
                  <p className="text-[10.5px] uppercase tracking-[0.18em] text-goldLight">
                    {COMPANY_SNAPSHOT.legal}
                  </p>
                </div>
              </div>
              <dl className="mt-6 space-y-4 text-sm">
                {[
                  ["Founded", String(COMPANY_SNAPSHOT.founded)],
                  ["Positioning", COMPANY_SNAPSHOT.positioning],
                  ["Workforce", COMPANY_SNAPSHOT.workforce],
                  ["Regional Offices", COMPANY_SNAPSHOT.offices.join(" · ")],
                  ["Success Mantra", COMPANY_SNAPSHOT.mantra],
                ].map(([k, v]) => (
                  <div key={k} className="border-b border-ivory/10 pb-3.5">
                    <dt className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ivory/50">
                      {k}
                    </dt>
                    <dd className="mt-1 leading-relaxed text-ivory/85">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </aside>
      </div>
    </section>
  );
}

function Growth() {
  return (
    <section className="border-y border-line bg-sand py-16 md:py-24">
      <div className="container-site max-w-4xl">
        <Reveal className="text-center">
          <p className="eyebrow justify-center before:hidden after:hidden">Growth Under Delivery Leadership</p>
          <h2 className="h-display mx-auto mt-4 max-w-2xl text-3xl md:text-[38px]">
            ₹40 Cr to ₹100 Cr — delivery as the growth engine
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

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title="A career built inside delivery"
        intro="From interior design fundamentals to directing a PAN-India project organization of 1,000–1,200+ deployable professionals."
      />
      <Timeline />
      <Growth />
      <CtaBand />
    </>
  );
}
