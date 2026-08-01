/**
 * One cell of the clients grid — shows the ORIGINAL brand logo.
 * Default state: muted grayscale; on hover: full brand colour + zoom lift
 * (driven by the parent li.group hover styles).
 */
import ClientLogo from "./ClientLogo";

export default function ClientLogoCell({ name }: { name: string }) {
  return (
    <>
      <ClientLogo
        name={name}
        className="max-h-10 opacity-60 grayscale transition-all duration-500 ease-luxe group-hover:max-h-11 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0 group-hover:drop-shadow-[0_6px_14px_rgba(17,28,52,0.18)]"
      />
      <span className="sr-only">{name}</span>
    </>
  );
}
