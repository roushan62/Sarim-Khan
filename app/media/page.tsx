import type { Metadata } from "next";
import { ArrowUpRight, ExternalLink, Globe, Images, Linkedin, Newspaper } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import MediaPortraits from "@/components/MediaPortraits";
import CtaBand from "@/components/CtaBand";
import { COMPANY_LINKS, PRESS } from "@/data/media";
import { CONTACT } from "@/data/site";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Sarim Khan in media — professional portraits, profiles, and press coverage of FocusOn Interiors, the organization whose project delivery he directs.",
  alternates: { canonical: "/media" },
};

function Portraits() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center border border-gold/40 text-gold">
              <Images size={19} strokeWidth={1.8} />
            </span>
            <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">
              The Professional Portfolio
            </h2>
          </div>
          <p className="lead mt-4 max-w-2xl">
            Official portraits and on-location photography. Click any image to view it full-screen.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="mt-10">
          <MediaPortraits />
        </Reveal>
      </div>
    </section>
  );
}

function Profiles() {
  const links = [
    {
      label: "LinkedIn — Sarim Khan",
      href: CONTACT.linkedin,
      note: "Professional profile & network",
      icon: Linkedin,
      external: true,
    },
    {
      label: "FocusOn Interiors — Corporate Website",
      href: COMPANY_LINKS.website,
      note: "The organization Sarim directs delivery for",
      icon: Globe,
      external: true,
    },
    {
      label: "FocusOn Interiors — Company LinkedIn",
      href: COMPANY_LINKS.linkedinCompany,
      note: "Project announcements & company news",
      icon: Linkedin,
      external: true,
    },
  ];
  return (
    <section className="border-y border-line bg-sand py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <p className="eyebrow">Profiles</p>
          <h2 className="h-display mt-4 text-3xl md:text-[38px]">Find Sarim online</h2>
          <span className="gold-rule" />
        </Reveal>
        <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
          {links.map((l) => (
            <StaggerItem key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col border border-line bg-surface p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center bg-navy text-goldLight">
                    <l.icon size={18} strokeWidth={1.8} />
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                  />
                </span>
                <span className="mt-5 font-display text-lg font-semibold text-navy">
                  {l.label}
                </span>
                <span className="mt-2 text-sm leading-relaxed text-muted">{l.note}</span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Press() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center border border-gold/40 text-gold">
              <Newspaper size={19} strokeWidth={1.8} />
            </span>
            <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">
              Press & Coverage
            </h2>
          </div>
          <p className="lead mt-4 max-w-2xl">
            Coverage of FocusOn Interiors — the organization whose project
            delivery Sarim directs — across business and design media.
          </p>
        </Reveal>
        <Stagger className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PRESS.map((item) => (
            <StaggerItem key={item.href}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col border border-line bg-surface p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-[15px] font-semibold uppercase tracking-[0.08em] text-gold">
                    {item.outlet}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                    {item.year}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[19px] font-semibold leading-snug text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 border-t border-line pt-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-navy transition-colors group-hover:text-gold">
                  Read Coverage <ExternalLink size={13} />
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Media"
        title="Sarim Khan, in the frame"
        intro="Official portraits, professional profiles, and the press narrative of the organization he helps scale."
      />
      <Portraits />
      <Profiles />
      <Press />
      <CtaBand />
    </>
  );
}
