import { MARQUEE_CLIENTS } from "@/data/clients";
import ClientLogo from "./ClientLogo";

/**
 * Original client-logo wall — real brand logos (no text wordmarks).
 * Logos sit muted in grayscale; on hover each tile restores full brand
 * colour, zooms the mark, and lifts with a soft shadow. The belt scrolls
 * infinitely and pauses on hover.
 */
function MarqueeTile({ name }: { name: string }) {
  return (
    <div
      className="group flex h-[84px] w-[188px] shrink-0 items-center justify-center border border-line/60 bg-surface px-6 transition-all duration-500 ease-luxe hover:z-20 hover:border-gold/50 hover:bg-sand hover:shadow-lift"
      title={name}
    >
      <ClientLogo
        name={name}
        className="max-h-10 opacity-60 grayscale transition-all duration-500 ease-luxe group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0 group-hover:drop-shadow-[0_6px_14px_rgba(17,28,52,0.18)]"
      />
      <span className="sr-only">{name}</span>
    </div>
  );
}

export default function LogoWall({ names = MARQUEE_CLIENTS }: { names?: string[] }) {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-surface to-transparent" />

      {/* Scrolling row */}
      <div className="logo-scroll-track flex items-center gap-0 py-2">
        {[...names, ...names].map((name, i) => (
          <MarqueeTile key={`${name}-${i}`} name={name} />
        ))}
      </div>
    </div>
  );
}
