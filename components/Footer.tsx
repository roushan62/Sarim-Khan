import Link from "next/link";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, NAV, SITE } from "@/data/site";

const year = new Date().getFullYear();

const exploreLinks = NAV.filter((n) =>
  ["/about", "/experience", "/projects", "/expertise"].includes(n.href),
);
const workLinks = [
  { label: "Gallery", href: "/gallery" },
  { label: "Clients", href: "/clients" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      {/* Gold hairline */}
      <div className="h-[3px] w-full bg-gradient-to-r from-gold via-goldLight to-gold" />
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center border border-gold/60 font-display text-lg font-semibold text-goldLight">
              SK
            </span>
            <div className="leading-tight">
              <p className="font-display text-lg font-semibold">{SITE.name}</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-goldLight">
                Project Director
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/65">
            Directing India&apos;s turnkey commercial fit-out delivery — from
            BOQ to handover — for corporate, BFSI and institutional clients
            nationwide.
          </p>
        </div>

        {/* Explore */}
        <nav aria-label="Footer — explore">
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-goldLight">
            Explore
          </h3>
          <ul className="mt-5 space-y-3">
            {exploreLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-ivory/70 transition-colors hover:text-goldLight"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Work */}
        <nav aria-label="Footer — work">
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-goldLight">
            Work
          </h3>
          <ul className="mt-5 space-y-3">
            {workLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-ivory/70 transition-colors hover:text-goldLight"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-goldLight">
            Contact
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-ivory/70">
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2.5 transition-colors hover:text-goldLight"
              >
                <Mail size={15} className="text-goldLight" /> {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${CONTACT.phoneHref}`}
                className="inline-flex items-center gap-2.5 transition-colors hover:text-goldLight"
              >
                <Phone size={15} className="text-goldLight" /> {CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 transition-colors hover:text-goldLight"
              >
                <Linkedin size={15} className="text-goldLight" /> LinkedIn
              </a>
            </li>
            <li className="inline-flex items-center gap-2.5 text-ivory/70">
              <MapPin size={15} className="text-goldLight" /> {CONTACT.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-site flex flex-col items-start justify-between gap-2 py-6 text-[12px] text-ivory/45 md:flex-row md:items-center">
          <p>
            © {year} {SITE.name}. Project Director, {SITE.company}.
          </p>
          <p>Site built for professional portfolio purposes.</p>
        </div>
      </div>
    </footer>
  );
}
