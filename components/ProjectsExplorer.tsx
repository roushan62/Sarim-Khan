"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { PROJECTS, VERTICALS, type Vertical } from "@/data/projects";

type SortKey = "value" | "area" | "vertical" | "default";

const SORTS: { key: SortKey; label: string }[] = [
  { key: "default", label: "Curated Order" },
  { key: "value", label: "Value (High → Low)" },
  { key: "area", label: "Area (High → Low)" },
  { key: "vertical", label: "By Vertical" },
];

export default function ProjectsExplorer() {
  const [vertical, setVertical] = useState<Vertical | "All">("All");
  const [sort, setSort] = useState<SortKey>("default");
  const reduce = useReducedMotion();

  const filtered = useMemo(() => {
    const list = PROJECTS.filter(
      (p) => vertical === "All" || p.vertical === vertical,
    );
    const sorted = [...list];
    if (sort === "value")
      sorted.sort(
        (a, b) => (b.valueCr ?? -1) - (a.valueCr ?? -1),
      );
    else if (sort === "area")
      sorted.sort((a, b) => (b.areaSqft ?? -1) - (a.areaSqft ?? -1));
    else if (sort === "vertical")
      sorted.sort((a, b) => a.vertical.localeCompare(b.vertical));
    else
      sorted.sort(
        (a, b) =>
          PROJECTS.findIndex((p) => p.slug === a.slug) -
          PROJECTS.findIndex((p) => p.slug === b.slug),
      );
    return sorted;
  }, [vertical, sort]);

  return (
    <div>
      {/* Filter + sort bar */}
      <div className="flex flex-col gap-5 border-b border-line pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
            Filter by Vertical
          </p>
          <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Vertical filters">
            {(["All", ...VERTICALS] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setVertical(v)}
                aria-pressed={vertical === v}
                className={`border px-3.5 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 ${
                  vertical === v
                    ? "border-navy bg-navy text-ivory"
                    : "border-line bg-surface text-muted hover:border-gold hover:text-navy"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label
            htmlFor="sort"
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted"
          >
            Sort
          </label>
          <div className="relative mt-3">
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="input-select w-full min-w-[220px]"
            >
              {SORTS.map((s) => (
                <option key={s.key} value={s.key}>
                  {s.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={15}
              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted"
            />
          </div>
        </div>
      </div>

      {/* Result count */}
      <p className="mt-5 text-[12px] uppercase tracking-[0.16em] text-muted" aria-live="polite">
        {filtered.length} engagement{filtered.length === 1 ? "" : "s"}
        {vertical !== "All" ? ` — ${vertical}` : ""}
      </p>

      {/* Grid (grid, not carousel — per brand rules) */}
      <motion.ul layout className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.li
              key={p.slug}
              layout
              initial={reduce ? {} : { opacity: 0, y: 18 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              exit={reduce ? {} : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.21, 0.6, 0.35, 1] }}
            >
              <ProjectCard project={p} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
