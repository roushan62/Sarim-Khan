"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import Img from "./Img";
import Lightbox from "./Lightbox";
import { PORTRAITS } from "@/data/media";

/** Sarim's professional portraits with lightbox. */
export default function MediaPortraits() {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
        {PORTRAITS.map((p, i) => (
          <motion.button
            key={p.src}
            type="button"
            onClick={() => setIndex(i)}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.07, ease: [0.21, 0.6, 0.35, 1] }}
            className={`group relative block overflow-hidden border border-line bg-navy text-left shadow-card ${
              i === 0 ? "col-span-2 aspect-[16/9] md:col-span-3" : "aspect-[3/4]"
            }`}
            aria-label={`Open photograph: ${p.caption}`}
          >
            <Img
              src={p.src}
              alt={p.alt}
              fit={i === 0 ? "cover" : "contain"}
              sizes="(max-width: 768px) 100vw, 33vw"
              className={i === 0 ? "" : "object-bottom pt-4 transition-transform duration-700 ease-luxe group-hover:scale-[1.03]"}
            />
            <span className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-navy/85 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-[12.5px] font-medium text-ivory">{p.caption}</span>
              <Expand size={17} className="text-goldLight" />
            </span>
          </motion.button>
        ))}
      </div>
      <Lightbox
        items={PORTRAITS}
        index={index}
        onClose={() => setIndex(null)}
        onNavigate={setIndex}
      />
    </>
  );
}
