/**
 * Global site constants and configuration for Sarim Khan's professional portfolio.
 * Configured for static export and GitHub Pages deployment without backend dependencies.
 */
export const SITE = {
  name: "Sarim Khan",
  role: "Project Director",
  company: "FocusOn Interior Decorators Pvt. Ltd.",
  companyShort: "FocusOn Interiors",
  tagline: "Project Director · Turnkey Interior Fit-Out",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://roushan62.github.io/Sarim-Khan",
  description:
    "Sarim Khan is Project Director at FocusOn Interior Decorators Pvt. Ltd., directing PAN-India turnkey commercial interior fit-out delivery — from BOQ to handover — for corporate, BFSI, healthcare, education and F&B clients.",
} as const;

export const CONTACT = {
  email: "sarim.sam786@gmail.com",
  phone: "+91 90055 54240",
  phoneHref: "+919005554240",
  linkedin: "https://www.linkedin.com/in/sarim-khan-485a90304/",
  linkedinCompany: "https://www.linkedin.com/company/focuson-interiors/",
  whatsapp: "https://wa.me/919005554240",
  instagram: "https://www.instagram.com/sarimkhan10?utm_source=qr",
  location: "Delhi-NCR, India",
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Expertise", href: "/expertise" },
  { label: "Gallery", href: "/gallery" },
  { label: "Clients", href: "/clients" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
] as const;

export const STATS = {
  years: 7,
  sqft: 450000,
  valueCr: 120,
  accounts: 20,
  workforce: "1,000–1,200+",
  offices: ["Delhi NCR", "Bengaluru", "Pune", "Chennai", "Mumbai"],
} as const;

export const RESUME_PATH = "/sarim-khan-resume.pdf";
