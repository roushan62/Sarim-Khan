import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-hairline-grid bg-grid-lg pt-24">
      <div className="container-site py-20 text-center">
        <p className="eyebrow justify-center before:hidden after:hidden">Error 404</p>
        <h1 className="mt-6 font-display text-[110px] font-medium leading-none text-navy md:text-[160px]">
          4<span className="text-gold">0</span>4
        </h1>
        <span className="gold-rule mx-auto" />
        <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-muted">
          The page you are looking for has been moved, renamed, or never made it
          past the BOQ stage.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/" className="btn-primary">
            <ArrowLeft size={15} /> Back to Home
          </Link>
          <Link href="/projects" className="btn-outline">
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
