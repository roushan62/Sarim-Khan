"use client";

import { motion, useReducedMotion } from "framer-motion";
import Counter from "./Counter";
import { GROWTH } from "@/data/clients";

/** FocusOn turnover chart — animated bars (₹40 → ₹60 → ₹100 Cr projected). */
export default function GrowthChart() {
  const reduce = useReducedMotion();
  const max = Math.max(...GROWTH.map((g) => g.cr));

  return (
    <div>
      <div className="flex items-end gap-6 md:gap-12">
        {GROWTH.map((g, i) => (
          <div key={g.fy} className="flex flex-1 flex-col items-center">
            <p className={`font-display text-3xl font-semibold md:text-4xl ${g.projected ? "text-gold" : "text-navy"}`}>
              <Counter target={g.cr} prefix="₹" suffix=" Cr" />
            </p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
              {g.note}
            </p>
            <div className="mt-5 flex h-52 w-full items-end md:h-64">
              <motion.div
                className={`w-full ${
                  g.projected
                    ? "border border-gold bg-[repeating-linear-gradient(135deg,rgba(184,134,47,0.85)_0_10px,rgba(217,178,106,0.85)_10px_20px)]"
                    : "bg-navy"
                }`}
                initial={reduce ? { height: `${(g.cr / max) * 100}%` } : { height: 0 }}
                whileInView={{ height: `${(g.cr / max) * 100}%` }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: i * 0.15, ease: [0.21, 0.6, 0.35, 1] }}
              />
            </div>
            <p className="mt-4 border-t border-line pt-3 text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-navy">
              {g.fy}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-[12.5px] text-muted">
        FocusOn Interiors turnover — ₹40 Cr (FY 2022–23) to a projected ₹100 Cr (FY 2024–25),
        driven by the project delivery organization.
      </p>
    </div>
  );
}
