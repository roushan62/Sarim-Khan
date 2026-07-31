import Reveal from "./Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
}

/** Consistent interior-page header band. */
export default function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-sand bg-hairline-grid bg-grid-lg pt-32 md:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[28px] border-gold/10"
      />
      <div className="container-site relative pb-14 md:pb-20">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="h-display mt-4 max-w-3xl text-4xl md:text-[52px]">{title}</h1>
          <span className="gold-rule" />
          {intro && <p className="lead mt-6 max-w-2xl">{intro}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
