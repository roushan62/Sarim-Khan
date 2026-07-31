import Image from "next/image";

/**
 * Shared next/image wrapper — always lazy + blurred placeholder matched to the
 * site's ivory palette, aspect-managed by the parent container (fill mode).
 */
const BLUR =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnPjxyZWN0IHdpZHRoPSc4JyBoZWlnaHQ9JzgnIGZpbGw9JyNGMUVERTQnLz48L3N2Zz4=";

interface ImgProps {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
  /** contain = do not crop transparent cut-outs */
  fit?: "cover" | "contain";
}

export default function Img({
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
  priority = false,
  fit = "cover",
}: ImgProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      placeholder="blur"
      blurDataURL={BLUR}
      className={`${fit === "cover" ? "object-cover" : "object-contain"} ${className}`}
    />
  );
}
