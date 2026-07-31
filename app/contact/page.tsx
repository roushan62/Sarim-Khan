import type { Metadata } from "next";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CopyButton from "@/components/CopyButton";
import { CONTACT, STATS } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sarim Khan, Project Director — for project consultations, partnerships, or delivery leadership opportunities. Delhi-NCR, India. Email, phone and LinkedIn.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk"
        intro="For project consultations, partnerships, or delivery leadership opportunities."
      />

      <section className="py-16 md:py-24">
        <div className="container-site max-w-4xl">
          {/* Email — principal channel */}
          <Reveal>
            <div className="border border-line bg-surface p-8 text-center shadow-card md:p-12">
              <span className="mx-auto grid h-14 w-14 place-items-center bg-navy text-goldLight">
                <Mail size={22} strokeWidth={1.7} />
              </span>
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                Email
              </p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-3 block break-all font-display text-2xl font-medium text-navy transition-colors hover:text-gold md:text-[34px]"
              >
                {CONTACT.email}
              </a>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href={`mailto:${CONTACT.email}`} className="btn-primary">
                  <Mail size={14} /> Write an Email
                </a>
                <CopyButton value={CONTACT.email} label="Copy Address" />
              </div>
            </div>
          </Reveal>

          {/* Phone + LinkedIn */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Reveal delay={0.08}>
              <a
                href={`tel:${CONTACT.phoneHref}`}
                className="group flex h-full flex-col border border-line bg-surface p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:p-10"
              >
                <span className="grid h-14 w-14 place-items-center border border-gold/40 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-white">
                  <Phone size={21} strokeWidth={1.7} />
                </span>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                  Phone
                </p>
                <p className="mt-3 font-display text-2xl font-medium text-navy md:text-[26px]">
                  {CONTACT.phone}
                </p>
                <p className="mt-2 text-sm text-muted">
                  Tap to call · business hours IST
                </p>
              </a>
            </Reveal>
            <Reveal delay={0.16}>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col border border-line bg-surface p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:p-10"
              >
                <span className="grid h-14 w-14 place-items-center border border-gold/40 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-white">
                  <Linkedin size={21} strokeWidth={1.7} />
                </span>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                  LinkedIn
                </p>
                <p className="mt-3 break-all font-display text-lg font-medium text-navy md:text-xl">
                  linkedin.com/in/sarim-khan-485a90304
                </p>
                <p className="mt-2 text-sm text-muted">
                  Connect for project and leadership conversations
                </p>
              </a>
            </Reveal>
          </div>

          {/* Location + presence */}
          <Reveal delay={0.22}>
            <div className="mt-6 border border-line bg-navy p-8 text-ivory md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="grid h-12 w-12 place-items-center border border-gold/50 text-goldLight">
                  <MapPin size={19} strokeWidth={1.7} />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-goldLight">
                    Based in
                  </p>
                  <p className="font-display text-xl font-semibold md:text-2xl">
                    {CONTACT.location}
                  </p>
                </div>
              </div>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ivory/65">
                Directing delivery across FocusOn&apos;s five regional offices —
                with a {STATS.workforce} deployable workforce behind every engagement.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {STATS.offices.map((city) => (
                  <li
                    key={city}
                    className="border border-ivory/20 px-3.5 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.12em] text-ivory/80"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
