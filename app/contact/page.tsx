import type { Metadata } from "next";
import { Linkedin, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CopyButton from "@/components/CopyButton";
import { CONTACT, STATS } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sarim Khan, Project Director — for project consultations, partnerships, or delivery leadership opportunities. Delhi-NCR, India. Email, WhatsApp, phone and LinkedIn.",
  alternates: { canonical: "/contact" },
};

/* ── SVG WhatsApp Icon ──────────────────────────────────── */
function WhatsAppSvg() {
  return (
    <svg viewBox="0 0 24 24" className="h-[21px] w-[21px]" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${CONTACT.phoneHref.replace("+", "")}`;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk"
        intro="For project consultations, partnerships, or delivery leadership opportunities."
      />

      <section className="py-16 md:py-24">
        <div className="container-site max-w-4xl">
          {/* Quick Contact Row - 4 channels */}
          <Reveal>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <a
                href={`tel:${CONTACT.phoneHref}`}
                className="group flex flex-col items-center gap-3 border border-line bg-surface p-5 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lift"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 text-gold transition-all group-hover:bg-gold group-hover:text-white">
                  <Phone size={18} strokeWidth={1.7} />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted">Call</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 border border-line bg-surface p-5 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366] hover:shadow-lift"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border border-[#25D366]/30 text-[#25D366] transition-all group-hover:bg-[#25D366] group-hover:text-white">
                  <WhatsAppSvg />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted">WhatsApp</span>
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="group flex flex-col items-center gap-3 border border-line bg-surface p-5 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lift"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 text-gold transition-all group-hover:bg-gold group-hover:text-white">
                  <Mail size={18} strokeWidth={1.7} />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted">Email</span>
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 border border-line bg-surface p-5 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#0077B5] hover:shadow-lift"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border border-[#0077B5]/30 text-[#0077B5] transition-all group-hover:bg-[#0077B5] group-hover:text-white">
                  <Linkedin size={18} strokeWidth={1.7} />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted">LinkedIn</span>
              </a>
            </div>
          </Reveal>

          {/* Email — principal channel */}
          <Reveal>
            <div className="mt-8 border border-line bg-surface p-8 text-center shadow-card md:p-12">
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

          {/* WhatsApp + Phone */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Reveal delay={0.08}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col border border-line bg-surface p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:p-10"
              >
                <span className="grid h-14 w-14 place-items-center border border-[#25D366]/40 text-[#25D366] transition-colors duration-300 group-hover:bg-[#25D366] group-hover:text-white">
                  <WhatsAppSvg />
                </span>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                  WhatsApp
                </p>
                <p className="mt-3 font-display text-2xl font-medium text-navy md:text-[26px]">
                  {CONTACT.phone}
                </p>
                <p className="mt-2 text-sm text-muted">
                  Chat now · business hours IST
                </p>
              </a>
            </Reveal>
            <Reveal delay={0.16}>
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
          </div>

          {/* LinkedIn + Location */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Reveal delay={0.22}>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col border border-line bg-surface p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:p-10"
              >
                <span className="grid h-14 w-14 place-items-center border border-[#0077B5]/40 text-[#0077B5] transition-colors duration-300 group-hover:bg-[#0077B5] group-hover:text-white">
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
            <Reveal delay={0.28}>
              <div className="flex h-full flex-col border border-line bg-navy p-8 text-ivory md:p-10">
                <div className="flex items-center gap-3">
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
                <p className="mt-5 flex-1 text-sm leading-relaxed text-ivory/65">
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
        </div>
      </section>
    </>
  );
}
