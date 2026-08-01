"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Img from "./Img";
import { formatCr, formatSqft, type Project } from "@/data/projects";

/**
 * Project card — grid-based (not carousel). Hover: slight scale (1.02),
 * shadow lift, gold accent line reveal.
 */
export default function ProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      whileHover={reduce ? {} : { scale: 1.02, y: -4 }}
      transition={{ duration: 0.35, ease: [0.21, 0.6, 0.35, 1] }}
      className="group relative flex h-full flex-col border border-line bg-surface shadow-card transition-shadow duration-300 hover:shadow-lift"
    >
      {/* Gold accent line reveal */}
      <span className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 bg-gold transition-transform duration-500 ease-luxe group-hover:scale-x-100" />
      <Link href={`/projects/${project.slug}`} className="flex h-full flex-col" aria-label={`${project.client} — open case study`}>
        <div className="relative aspect-[16/10] overflow-hidden bg-sand">
          <Img
            src={project.images[0].src}
            alt={project.images[0].alt}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="transition-transform duration-700 ease-luxe group-hover:scale-[1.045]"
          />
          <span className="absolute left-3 top-3 bg-navy/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ivory backdrop-blur-sm">
            {project.vertical}
          </span>
          {project.realPhotos && (
            <span className="absolute right-3 top-3 bg-gold px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
              On-Site Photos
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg font-semibold leading-snug text-navy">
              {project.client}
            </h3>
            <ArrowUpRight
              size={18}
              className="mt-1 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
            />
          </div>
          <p className="mt-1.5 inline-flex items-center gap-1.5 text-[12.5px] text-muted">
            <MapPin size={13} className="text-gold" /> {project.location}
          </p>
          <div className="mt-auto flex items-center gap-4 border-t border-line pt-4 text-[12.5px] font-medium">
            <span className="text-navy">{formatSqft(project.areaSqft)}</span>
            <span className="h-3 w-px bg-line" />
            <span className="text-gold">{formatCr(project.valueCr)}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
