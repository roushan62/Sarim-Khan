import { logoForClient } from "@/data/clients";

interface ClientLogoProps {
  /** Roster client name or project client string */
  name: string;
  /** Tailwind classes for sizing/animation (height + grayscale + scale live here) */
  className?: string;
}

/**
 * Renders a client's ORIGINAL brand logo (local file in /public/logos) —
 * never a text approximation. Returns null when no logo is mapped.
 */
export default function ClientLogo({ name, className = "" }: ClientLogoProps) {
  const src = logoForClient(name);
  if (!src) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`${name} — brand logo`}
      title={name}
      loading="lazy"
      draggable={false}
      className={`block h-auto w-auto max-w-full object-contain ${className}`}
    />
  );
}
