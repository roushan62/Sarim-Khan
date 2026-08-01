"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import Img from "./Img";
import Lightbox from "./Lightbox";
import { GALLERY, GALLERY_GROUPS } from "@/data/gallery";

export default function GalleryExplorer() {
  const [group, setGroup] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items = useMemo(
    () => GALLERY.filter((g) => group === "All" || g.group === group),
    [group],
  );

  const realCount = items.filter((i) => i.kind === "real").length;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Gallery filters">
        {(["All", ...GALLERY_GROUPS] as const).map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => setGroup(g)}
            aria-pressed={group === g}
            className={`border px-3.5 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 ${
              group === g
                ? "border-navy bg-navy text-ivory"
                : "border-line bg-surface text-muted hover:border-gold hover:text-navy"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      <p className="mt-5 text-[12px] uppercase tracking-[0.16em] text-muted" aria-live="polite">
        {items.length} photographs · {realCount} on-site
      </p>

      {/* Masonry-style column grid */}
      <div className="mt-6 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {items.map((item, i) => (
          <motion.button
            key={item.src + item.group}
            type="button"
            onClick={() => setLightboxIndex(i)}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.21, 0.6, 0.35, 1] }}
            className="group relative mb-5 block w-full break-inside-avoid overflow-hidden border border-line bg-sand text-left shadow-card"
            aria-label={`Open photograph: ${item.caption}`}
          >
            <span className={`relative block w-full ${item.tall ? "aspect-[4/5]" : "aspect-[16/10]"}`}>
              <Img
                src={item.src}
                alt={item.alt}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </span>
            <span className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-navy/85 via-navy/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="max-w-[75%] text-[12.5px] font-medium leading-snug text-ivory">
                {item.caption}
              </span>
              <Expand size={18} className="shrink-0 text-goldLight" />
            </span>
            {item.kind === "real" && (
              <span className="absolute left-3 top-3 bg-gold px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.14em] text-white">
                On-Site
              </span>
            )}
          </motion.button>
        ))}
      </div>

      <Lightbox
        items={items}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
