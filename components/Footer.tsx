import Link from "next/link";
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

/* ── SVG Social Icons ──────────────────────────────────── */

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 4L12 13 2 4" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export default function Footer() {
  const socialLinks = [
    {
      label: "LinkedIn",
      href: CONTACT.linkedin,
      icon: <LinkedInIcon />,
      color: "hover:bg-[#0077B5] hover:border-[#0077B5]",
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/${CONTACT.phoneHref.replace("+", "")}`,
      icon: <WhatsAppIcon />,
      color: "hover:bg-[#25D366] hover:border-[#25D366]",
    },
    {
      label: "Email",
      href: `mailto:${CONTACT.email}`,
      icon: <EmailIcon />,
      color: "hover:bg-gold hover:border-gold",
    },
    {
      label: "Call",
      href: `tel:${CONTACT.phoneHref}`,
      icon: <PhoneIcon />,
      color: "hover:bg-[#34A853] hover:border-[#34A853]",
    },
    {
      label: "Instagram — FocusOn Interiors",
      href: "https://www.instagram.com/focuson_interiors/",
      icon: <InstagramIcon />,
      color: "hover:bg-[#E4405F] hover:border-[#E4405F]",
    },
  ];

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

          {/* ── Social Icons ─────────────────────────── */}
          <div className="mt-7">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-goldLight">
              Connect With Sarim
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className={`relative grid h-10 w-10 place-items-center rounded-full border border-ivory/20 text-ivory/70 transition-all duration-300 hover:border-transparent hover:text-white hover:shadow-lg hover:scale-110 ${s.color}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
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
                  className="inline-flex items-center gap-2 text-sm text-ivory/70 transition-colors hover:text-goldLight hover:translate-x-1 duration-300"
                >
                  <span className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-3" />
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
                  className="inline-flex items-center gap-2 text-sm text-ivory/70 transition-colors hover:text-goldLight hover:translate-x-1 duration-300"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Details */}
        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-goldLight">
            Contact
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-ivory/70">
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="group flex items-center gap-3 transition-colors hover:text-goldLight"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full border border-ivory/20 transition-colors group-hover:border-goldLight">
                  <EmailIcon />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-ivory/40">Email</p>
                  <p className="text-ivory/80">{CONTACT.email}</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href={`tel:${CONTACT.phoneHref}`}
                className="group flex items-center gap-3 transition-colors hover:text-goldLight"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full border border-ivory/20 transition-colors group-hover:border-goldLight">
                  <PhoneIcon />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-ivory/40">Phone</p>
                  <p className="text-ivory/80">{CONTACT.phone}</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${CONTACT.phoneHref.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 transition-colors hover:text-[#25D366]"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full border border-ivory/20 transition-colors group-hover:border-[#25D366]">
                  <WhatsAppIcon />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-ivory/40">WhatsApp</p>
                  <p className="text-ivory/80">{CONTACT.phone}</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 transition-colors hover:text-[#0077B5]"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full border border-ivory/20 transition-colors group-hover:border-[#0077B5]">
                  <LinkedInIcon />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-ivory/40">LinkedIn</p>
                  <p className="text-ivory/80">Sarim Khan</p>
                </div>
              </a>
            </li>
            <li className="flex items-center gap-3 text-ivory/70">
              <span className="grid h-8 w-8 place-items-center rounded-full border border-ivory/20 text-goldLight">
                <MapPinIcon />
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-ivory/40">Location</p>
                <p className="text-ivory/80">{CONTACT.location}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ivory/10">
        <div className="container-site flex flex-col items-start justify-between gap-2 py-6 text-[12px] text-ivory/45 md:flex-row md:items-center">
          <p>
            © {year} {SITE.name}. Project Director, {SITE.company}.
          </p>
          <p>Personal branding portfolio — projects & clients Sarim has directed.</p>
        </div>
      </div>
    </footer>
  );
}
