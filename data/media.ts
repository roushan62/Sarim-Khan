/** Media page data — Sarim's professional portraits, profiles and company press coverage. */

export interface Portrait {
  src: string;
  alt: string;
  caption: string;
}

export const PORTRAITS: Portrait[] = [
  {
    src: "/images/sarim/at-office.webp",
    alt: "Sarim Khan at his office desk at FocusOn Interiors",
    caption: "At the Project Director's office — FocusOn Interiors",
  },
  {
    src: "/images/sarim/portrait-navy-suit.webp",
    alt: "Sarim Khan — navy suit, arms crossed portrait",
    caption: "Project Director, FocusOn Interiors",
  },
  {
    src: "/images/sarim/portrait-light-blazer.webp",
    alt: "Sarim Khan — light striped blazer portrait",
    caption: "Corporate portrait",
  },
  {
    src: "/images/sarim/portrait-seated-charcoal.webp",
    alt: "Sarim Khan — seated charcoal suit portrait",
    caption: "Studio portrait",
  },
  {
    src: "/images/sarim/portrait-black-suit-tie.webp",
    alt: "Sarim Khan — black suit with tie portrait",
    caption: "Formal portrait",
  },
  {
    src: "/images/sarim/portrait-grey-blazer.webp",
    alt: "Sarim Khan — grey blazer walking portrait",
    caption: "Editorial portrait",
  },
];

export interface PressItem {
  outlet: string;
  title: string;
  excerpt: string;
  href: string;
  year: string;
}

/**
 * Press coverage of FocusOn Interiors — the organization whose project
 * delivery Sarim directs. Links point to the company's media archive.
 */
export const PRESS: PressItem[] = [
  {
    outlet: "StartupTalky",
    title: "Crafting Workspaces That Work",
    excerpt: "Inside FocusOn's path to market leadership in India's commercial interiors industry.",
    href: "https://roushan62.github.io/FocusOn/media/crafting-workspaces-that-work/",
    year: "2025",
  },
  {
    outlet: "BW Businessworld",
    title: "Redefining Workspaces, One Purpose-Built Environment at a Time",
    excerpt: "How FocusOn is championing India's new era of functional, experience-driven fit-outs.",
    href: "https://roushan62.github.io/FocusOn/media/redefining-workspaces-purpose-built/",
    year: "2025",
  },
  {
    outlet: "Commercial Design India",
    title: "When Creativity Meets Code — The Rise of Smart Office Technology",
    excerpt: "The modern workplace is no longer defined by fixed desks — technology now shapes every square foot.",
    href: "https://roushan62.github.io/FocusOn/media/smart-office-technology-rise/",
    year: "2025",
  },
  {
    outlet: "Business Standard",
    title: "FocusOn Interiors Strengthens Market Position with the Acquisition of Riya Enterprises",
    excerpt: "Expanding delivery capability across corporate and industrial space design.",
    href: "https://roushan62.github.io/FocusOn/media/riya-enterprises-acquisition-business-standard/",
    year: "2025",
  },
  {
    outlet: "Homes India Magazine",
    title: "How Data, Design and Technology Are Reshaping India's Workplaces",
    excerpt: "A viewpoint on the analytics-led future of workplace planning and delivery.",
    href: "https://roushan62.github.io/FocusOn/media/data-design-technology-reshaping-workplaces/",
    year: "2026",
  },
  {
    outlet: "MediaNews4U",
    title: "FocusOn Interiors Names Azim Khan as CEO",
    excerpt: "Leadership momentum as FocusOn scales into a PAN-India workplace and industrial interiors provider.",
    href: "https://roushan62.github.io/FocusOn/media/azim-khan-ceo-medianews4u/",
    year: "2026",
  },
];

export const COMPANY_LINKS = {
  website: "https://focusoninteriors.com/",
  portfolioSite: "https://roushan62.github.io/FocusOn/",
  linkedinCompany: "https://www.linkedin.com/company/focuson-interiors/",
};
