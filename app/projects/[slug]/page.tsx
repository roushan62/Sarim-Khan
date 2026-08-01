import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BadgeCheck, MapPin } from "lucide-react";
import Img from "@/components/Img";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import ClientLogo from "@/components/ClientLogo";
import { logoForClient } from "@/data/clients";
import { getProject, nextProject, formatCr, formatSqft, PROJECTS } from "@/data/projects";

interface Params {
  params: { slug: string };
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.client} — ${project.location}`,
    description: `${project.summary} ${formatSqft(project.areaSqft)} · ${formatCr(project.valueCr)} · ${project.vertical} turnkey fit-out directed by Sarim Khan, Project Director.`,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.client} | Sarim Khan — Project Director`,
      description: project.summary,
      images: [{ url: project.images[0].src }],
    },
  };
}

function StatCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-5 py-6 text-center md:py-7">
      <dt className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted">
        {label}
      </dt>
      <dd className="mt-2 font-display text-lg font-semibold text-navy md:text-xl">
        {value}
      </dd>
    </div>
  );
}

export default function ProjectDetailPage({ params }: Params) {
  const project = getProject(params.slug);
  if (!project) notFound();
  const next = nextProject(project.slug);
  const clientLogo = logoForClient(project.client);

  const [hero, ...rest] = project.images;
  const narrative =
    project.narrative ??
    [
      `${project.client} engaged FocusOn Interiors for a turnkey interior fit-out at ${project.location}${
        project.areaSqft ? ` — ${formatSqft(project.areaSqft)} of delivered space` : ""
      }${project.valueCr ? `, valued at ${formatCr(project.valueCr)}` : ""}.`,
      `Under Sarim Khan's direction, the engagement moved through FocusOn's standard delivery framework: client brief and site assessment, design coordination and BOQ finalization, procurement and vendor mobilization, execution with site quality control, MEP integration and testing, snag closure and client walkthrough — concluding in formal handover and billing closure.`,
    ];

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[52vh] min-h-[380px] w-full md:h-[62vh]">
          <Img src={hero.src} alt={hero.alt} priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/35 to-navy/10" />
        </div>
        <div className="container-site relative -mt-36 pb-2 md:-mt-44">
          <Reveal>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-ivory/80 transition-colors hover:text-goldLight"
            >
              <ArrowLeft size={14} /> All Projects
            </Link>
            <div className="mt-5 max-w-3xl">
              {clientLogo && (
                <span className="mb-5 flex h-14 w-fit max-w-[170px] items-center border border-line/60 bg-surface px-4 py-2.5 shadow-lift">
                  <ClientLogo name={project.client} className="max-h-9" />
                </span>
              )}
              <span className="bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                {project.vertical}
              </span>
              <h1 className="mt-4 font-display text-4xl font-medium leading-[1.1] text-ivory md:text-[54px]">
                {project.client}
              </h1>
              <p className="mt-3 inline-flex items-center gap-2 text-[15px] text-ivory/80">
                <MapPin size={15} className="text-goldLight" /> {project.location}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Key stats */}
      <section className="border-b border-line">
        <div className="container-site">
          <Reveal>
            <dl className="grid grid-cols-2 divide-x divide-line border-x border-line bg-surface md:grid-cols-4">
              <StatCell label="Area" value={formatSqft(project.areaSqft)} />
              <StatCell label="Project Value" value={formatCr(project.valueCr)} />
              <StatCell label="Scope" value={project.scope[0]} />
              <StatCell
                label="Status"
                value={project.status}
              />
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Narrative + scope */}
      <section className="py-16 md:py-20">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="eyebrow">Case Study</p>
              <h2 className="h-display mt-4 text-2xl md:text-3xl">About this project</h2>
              <span className="gold-rule" />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-5 leading-[1.85] text-muted">
                {narrative.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>
            {project.realPhotos && (
              <Reveal delay={0.14}>
                <p className="mt-6 inline-flex items-center gap-2 border border-gold/40 bg-gold/5 px-3.5 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-gold">
                  <BadgeCheck size={14} /> Photographed on site after handover
                </p>
              </Reveal>
            )}
          </div>
          <aside className="lg:col-span-4">
            <Reveal className="lg:sticky lg:top-32">
              <div className="border border-line bg-sand p-7">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                  Delivery Scope
                </h3>
                <ul className="mt-5 space-y-3">
                  {project.scope.map((s) => (
                    <li key={s} className="flex gap-3 text-sm font-medium text-navy">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-gold" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-line pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                    Delivered by
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold text-navy">
                    FocusOn Interiors
                  </p>
                  <p className="text-[12.5px] text-muted">
                    Project direction — Sarim Khan
                  </p>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Gallery */}
      {rest.length > 0 && (
        <section className="border-t border-line bg-sand py-16">
          <div className="container-site">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">
                Space in Focus
              </h2>
              <span className="gold-rule" />
            </Reveal>
            <div className={`mt-8 grid gap-5 ${rest.length === 1 ? "" : "sm:grid-cols-2"}`}>
              {rest.map((img) => (
                <Reveal key={img.src}>
                  <figure className="group overflow-hidden border border-line bg-surface shadow-card">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Img
                        src={img.src}
                        alt={img.alt}
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="transition-transform duration-700 ease-luxe group-hover:scale-[1.04]"
                      />
                    </div>
                    {img.caption && (
                      <figcaption className="border-t border-line px-5 py-3.5 text-[12.5px] font-medium text-muted">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Prev / Next */}
      <section className="border-t border-line">
        <div className="container-site flex flex-col items-stretch justify-between gap-4 py-10 md:flex-row md:items-center">
          <Link href="/projects" className="btn-outline">
            <ArrowLeft size={15} /> Back to Projects
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-center justify-between gap-6 border border-line bg-surface px-6 py-4 transition-colors hover:border-gold md:min-w-[340px]"
          >
            <span>
              <span className="block text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted">
                Next Project
              </span>
              <span className="mt-1 block font-display text-lg font-semibold text-navy">
                {next.client}
              </span>
            </span>
            <ArrowRight
              size={18}
              className="text-gold transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
