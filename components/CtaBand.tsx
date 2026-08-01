import { Mail, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { CONTACT } from "@/data/site";

interface CtaBandProps {
  title?: string;
  sub?: string;
}

/** Closing navy CTA band used across pages. */
export default function CtaBand({
  title = "Let's discuss your next fit-out.",
  sub = "For project consultations, partnerships, or delivery leadership opportunities.",
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border-[36px] border-gold/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-[24px] border-ivory/5"
      />
      <div className="container-site relative py-16 text-center md:py-20">
        <Reveal>
          <p className="eyebrow justify-center before:hidden after:inline-block after:h-px after:w-8 after:bg-gold">
            Get in Touch
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-medium leading-tight text-ivory md:text-[40px]">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-ivory/60">{sub}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={`mailto:${CONTACT.email}`} className="btn-primary">
              <Mail size={15} /> {CONTACT.email}
            </a>
            <a href={`tel:${CONTACT.phoneHref}`} className="btn-outline-light">
              <Phone size={15} /> {CONTACT.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
