import { MARQUEE_CLIENTS } from "@/data/clients";

/**
 * Typographic client wall — grayscale wordmarks, navy/gold on hover.
 * (Wordmark treatment instead of scraped trademark logos.)
 */
export default function LogoWall({ names = MARQUEE_CLIENTS }: { names?: string[] }) {
  return (
    <ul className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
      {names.map((name) => (
        <li
          key={name}
          className="group grid h-20 place-items-center bg-surface px-4 transition-colors duration-300 hover:bg-sand"
        >
          <span className="text-center font-display text-[15px] font-medium tracking-wide text-navy/35 transition-colors duration-300 group-hover:text-navy">
            {name}
          </span>
        </li>
      ))}
    </ul>
  );
}
