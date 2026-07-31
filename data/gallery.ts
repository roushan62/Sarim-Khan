/** Project Gallery — real FocusOn Interiors photography + representative delivery environments. */

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  group: string;
  kind: "real" | "representative";
  /** portrait-ish images render with taller aspect hint */
  tall?: boolean;
}

const V = "/images/projects/verticals";

export const GALLERY_GROUPS = [
  "Luminous Power, Haridwar",
  "L&T Financial Services",
  "Emversity, Kochi",
  "Ericsson, Ahmedabad",
  "Delivery Environments",
] as const;

export const GALLERY: GalleryItem[] = [
  {
    src: "/images/projects/luminous-haridwar/collage.webp",
    alt: "Luminous Power Technologies Haridwar — campus exterior, innovation hub and corridor",
    caption: "Campus arrival, innovation hub & corridors — Luminous Power Technologies, Haridwar",
    group: "Luminous Power, Haridwar",
    kind: "real",
    tall: true,
  },
  {
    src: "/images/projects/luminous-haridwar/innovation-hub.webp",
    alt: "Luminous Haridwar innovation hub meeting rooms",
    caption: "Innovation hub — Luminous Power Technologies, Haridwar",
    group: "Luminous Power, Haridwar",
    kind: "real",
  },
  {
    src: "/images/projects/lt-finance-navi-mumbai/collage.webp",
    alt: "L&T Finance Navi Mumbai — reception, workplace and collaboration spaces",
    caption: "Reception, workplace & collaboration suites — L&T Finance, Navi Mumbai",
    group: "L&T Financial Services",
    kind: "real",
    tall: true,
  },
  {
    src: "/images/projects/lt-finance-navi-mumbai/view-1.webp",
    alt: "L&T Finance Navi Mumbai branded lobby wall",
    caption: "Brand wall & circulation — L&T Finance, Navi Mumbai",
    group: "L&T Financial Services",
    kind: "real",
  },
  {
    src: "/images/projects/lt-finance-navi-mumbai/view-2.webp",
    alt: "L&T Finance Navi Mumbai meeting suite",
    caption: "Meeting suite — L&T Finance, Navi Mumbai",
    group: "L&T Financial Services",
    kind: "real",
  },
  {
    src: "/images/projects/lt-finance-bengaluru/collage.webp",
    alt: "L&T Finance Bengaluru Rohan Tech Park office",
    caption: "Workplace floors — L&T Finance, Rohan Tech Park, Bengaluru",
    group: "L&T Financial Services",
    kind: "real",
  },
  {
    src: "/images/projects/lt-finance-bengaluru/breakout.webp",
    alt: "L&T Finance Bengaluru cafeteria and breakout",
    caption: "Cafeteria & breakout — Bengaluru campus",
    group: "L&T Financial Services",
    kind: "real",
  },
  {
    src: "/images/projects/emversity-kochi/collage.webp",
    alt: "Emversity Kochi campus — reception, learning commons and classrooms",
    caption: "Reception, learning commons & classrooms — Emversity, Kochi",
    group: "Emversity, Kochi",
    kind: "real",
    tall: true,
  },
  {
    src: "/images/projects/emversity-kochi/reception.webp",
    alt: "Emversity Kochi reception lounge",
    caption: "Reception & waiting lounge — Emversity, Kochi",
    group: "Emversity, Kochi",
    kind: "real",
  },
  {
    src: "/images/projects/emversity-kochi/booth-seating.webp",
    alt: "Emversity Kochi booth seating pods",
    caption: "Collaboration pods — Emversity, Kochi",
    group: "Emversity, Kochi",
    kind: "real",
  },
  {
    src: "/images/projects/emversity-kochi/workspace.webp",
    alt: "Emversity Kochi open workspace",
    caption: "Open workspace — Emversity, Kochi",
    group: "Emversity, Kochi",
    kind: "real",
  },
  {
    src: "/images/projects/ericsson-ahmedabad/collage.webp",
    alt: "Ericsson Ahmedabad office — reception and workspaces",
    caption: "Reception & workspaces — Ericsson, Ahmedabad",
    group: "Ericsson, Ahmedabad",
    kind: "real",
    tall: true,
  },
  {
    src: "/images/projects/delivery/office-corridor.webp",
    alt: "Office corridor and services spine from a FocusOn delivery programme",
    caption: "Corridor & services spine — FocusOn delivery programme",
    group: "Delivery Environments",
    kind: "real",
  },
  {
    src: "/images/projects/delivery/executive-cabin.webp",
    alt: "Executive cabin from a FocusOn delivery programme",
    caption: "Executive cabin — FocusOn delivery programme",
    group: "Delivery Environments",
    kind: "real",
  },
  {
    src: `${V}/corporate-1.jpg`,
    alt: "Corporate open workplace — representative delivery environment",
    caption: "Corporate workplace — representative environment",
    group: "Delivery Environments",
    kind: "representative",
  },
  {
    src: `${V}/corporate-2.jpg`,
    alt: "Corporate meeting room — representative delivery environment",
    caption: "Meeting & collaboration — representative environment",
    group: "Delivery Environments",
    kind: "representative",
  },
  {
    src: `${V}/bfsi-1.jpg`,
    alt: "BFSI workplace floor — representative delivery environment",
    caption: "BFSI workplace floor — representative environment",
    group: "Delivery Environments",
    kind: "representative",
  },
  {
    src: `${V}/bfsi-2.jpg`,
    alt: "BFSI boardroom — representative delivery environment",
    caption: "Executive boardroom — representative environment",
    group: "Delivery Environments",
    kind: "representative",
  },
  {
    src: `${V}/bfsi-3.jpg`,
    alt: "BFSI reception lobby — representative delivery environment",
    caption: "Reception & arrival — representative environment",
    group: "Delivery Environments",
    kind: "representative",
  },
  {
    src: `${V}/healthcare-1.jpg`,
    alt: "Diagnostics reception — representative delivery environment",
    caption: "Diagnostics reception — representative environment",
    group: "Delivery Environments",
    kind: "representative",
  },
  {
    src: `${V}/healthcare-2.jpg`,
    alt: "Laboratory corridor — representative delivery environment",
    caption: "Laboratory corridor — representative environment",
    group: "Delivery Environments",
    kind: "representative",
  },
  {
    src: `${V}/fnb-1.jpg`,
    alt: "Corporate cafeteria — representative delivery environment",
    caption: "Corporate dining — representative environment",
    group: "Delivery Environments",
    kind: "representative",
  },
  {
    src: `${V}/fnb-2.jpg`,
    alt: "QSR outlet interior — representative delivery environment",
    caption: "QSR outlet — representative environment",
    group: "Delivery Environments",
    kind: "representative",
  },
  {
    src: `${V}/education-1.jpg`,
    alt: "Education campus seminar space — representative delivery environment",
    caption: "Learning environments — representative space",
    group: "Delivery Environments",
    kind: "representative",
  },
];
