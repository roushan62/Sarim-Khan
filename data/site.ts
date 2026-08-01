/**
 * Global site constants.
 *
 * TODO(EMAIL): replace CONTACT.email with Sarim Khan's direct email before launch.
 * TODO(PHONE): replace CONTACT.phone with Sarim Khan's direct phone before launch.
 * The current values are FocusOn Interiors' publicly listed business contacts.
 */
export const SITE = {
  name: "Sarim Khan",
  role: "Project Director",
  company: "FocusOn Interior Decorators Pvt. Ltd.",
  companyShort: "FocusOn Interiors",
  tagline: "Project Director · Turnkey Interior Fit-Out",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sarim-khan.vercel.app",
  description:
    "Sarim Khan is Project Director at FocusOn Interior Decorators Pvt. Ltd., directing PAN-India turnkey commercial interior fit-out delivery — from BOQ to handover — for corporate, BFSI, healthcare, education and F&B clients.",
} as const;

export const CONTACT = {
  // TODO(EMAIL): replace with Sarim's direct email address
  email: "info@focusoninterior.in",
  emailPlaceholder: true,
  // TODO(PHONE): replace with Sarim's direct phone number
  phone: "+91 99102 58820",
  phoneHref: "+919910258820",
  phonePlaceholder: true,
  linkedin: "https://www.linkedin.com/in/sarim-khan-485a90304/",
  linkedinCompany: "https://www.linkedin.com/company/focuson-interiors/",
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
