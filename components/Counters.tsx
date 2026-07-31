import Counter from "./Counter";
import { STATS } from "@/data/site";

const items = [
  {
    value: <Counter target={STATS.years} suffix="+" />,
    label: "Years Leading Project Delivery",
  },
  {
    value: <Counter target={STATS.sqft} suffix="+" indian />,
    label: "Sq. Ft. Delivered",
  },
  {
    value: <Counter target={STATS.valueCr} prefix="₹" suffix="+ Cr" />,
    label: "Cumulative Project Value Directed",
  },
  {
    value: <Counter target={STATS.accounts} suffix="+" />,
    label: "Marquee Accounts Led",
  },
];

/** Career snapshot stat band (navy, gold numbers, animated count-up). */
export default function Counters({ dark = true }: { dark?: boolean }) {
  return (
    <section aria-label="Career snapshot" className={dark ? "bg-navy" : "bg-sand"}>
      <div className="container-site grid grid-cols-2 gap-px overflow-hidden py-0 lg:grid-cols-4">
        {items.map((item, i) => (
          <div
            key={i}
            className={`px-6 py-10 text-center md:py-14 ${
              dark
                ? "border-ivory/10" + (i > 0 ? " border-l max-lg:[&:nth-child(3)]:border-l-0" : "")
                : ""
            }`}
          >
            <p className="font-display text-4xl font-semibold leading-none text-goldLight md:text-[44px]">
              {item.value}
            </p>
            <p
              className={`mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] ${
                dark ? "text-ivory/60" : "text-muted"
              }`}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
