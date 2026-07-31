"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { NAV, RESUME_PATH, SITE } from "@/data/site";

function Monogram() {
  return (
    <span className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center bg-navy font-display text-lg font-semibold text-goldLight">
        SK
      </span>
      <span className="leading-tight">
        <span className="block font-display text-[17px] font-semibold text-navy">
          Sarim Khan
        </span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
          Project Director
        </span>
      </span>
    </span>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxe ${
        scrolled
          ? "border-b border-line bg-ivory/90 shadow-[0_10px_36px_rgba(17,28,52,0.08)] backdrop-blur-md"
          : "border-b border-transparent bg-ivory/40 backdrop-blur-[2px]"
      }`}
    >
      <div className="container-site flex items-center justify-between py-3.5">
        <Link href="/" aria-label={`${SITE.name} — home`} className="shrink-0">
          <Monogram />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-6 xl:flex">
          {NAV.filter((n) => n.href !== "/").map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative text-[12.5px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                isActive(item.href) ? "text-navy" : "text-muted hover:text-navy"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-[2px] bg-gold transition-all duration-300 ease-luxe ${
                  isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 border border-gold bg-gold px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:border-navy hover:bg-navy"
          >
            <Download size={14} strokeWidth={2.4} />
            Resume
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center border border-line bg-surface text-navy xl:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={reduce ? {} : { opacity: 0, height: 0 }}
            animate={reduce ? {} : { opacity: 1, height: "auto" }}
            exit={reduce ? {} : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.6, 0.35, 1] }}
            className="overflow-hidden border-t border-line bg-ivory xl:hidden"
          >
            <ul className="container-site flex flex-col py-6">
              {NAV.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={reduce ? {} : { opacity: 0, x: -14 }}
                  animate={reduce ? {} : { opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.035 }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between border-b border-line py-3.5 font-display text-xl ${
                      isActive(item.href) ? "text-gold" : "text-navy"
                    }`}
                  >
                    {item.label}
                    <span className="text-xs uppercase tracking-[0.18em] text-muted">
                      0{i + 1}
                    </span>
                  </Link>
                </motion.li>
              ))}
              <li className="pt-5">
                <a
                  href={RESUME_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  <Download size={15} /> Download Resume
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
