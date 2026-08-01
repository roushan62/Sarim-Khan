/**
 * Project portfolio data — single source of truth.
 * Structured for easy maintenance: add/edit entries here only.
 */

export type Vertical =
  | "Corporate & IT"
  | "BFSI"
  | "Education"
  | "Healthcare & Diagnostics"
  | "F&B"
  | "Retail"
  | "Industrial";

export const VERTICALS: Vertical[] = [
  "Corporate & IT",
  "BFSI",
  "Education",
  "Healthcare & Diagnostics",
  "F&B",
  "Retail",
  "Industrial",
];

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  client: string;
  location: string;
  /** null → confidential / not disclosed */
  areaSqft: number | null;
  /** value in ₹ Crore; null → not disclosed */
  valueCr: number | null;
  vertical: Vertical;
  scope: string[];
  status: "Completed" | "In Delivery";
  /** short standfirst used on cards */
  summary: string;
  /** bespoke narrative paragraphs for rich case-study pages */
  narrative?: string[];
  images: ProjectImage[];
  featured?: boolean;
  /** use real FocusOn photography */
  realPhotos?: boolean;
}

/* Reusable image pools (representative delivery environments per vertical) */
const pool = {
  corporate: (client: string): ProjectImage[] => [
    { src: "/images/projects/verticals/corporate-1.jpg", alt: `Open workstation floor — representative corporate delivery environment for engagements such as ${client}`, caption: "Representative corporate fit-out environment" },
    { src: "/images/projects/verticals/corporate-2.jpg", alt: "Executive meeting room — representative corporate delivery environment", caption: "Representative meeting & collaboration space" },
  ],
  bfsi: (client: string): ProjectImage[] => [
    { src: "/images/projects/verticals/bfsi-1.jpg", alt: `BFSI workplace floor — representative delivery environment for engagements such as ${client}`, caption: "Representative BFSI workplace floor" },
    { src: "/images/projects/verticals/bfsi-2.jpg", alt: "Boardroom — representative BFSI delivery environment", caption: "Representative executive boardroom" },
    { src: "/images/projects/verticals/bfsi-3.jpg", alt: "Reception lobby — representative BFSI delivery environment", caption: "Representative reception & arrival experience" },
  ],
  healthcare: (): ProjectImage[] => [
    { src: "/images/projects/verticals/healthcare-1.jpg", alt: "Diagnostics centre reception — representative healthcare delivery environment", caption: "Representative diagnostics reception" },
    { src: "/images/projects/verticals/healthcare-2.jpg", alt: "Laboratory corridor — representative healthcare delivery environment", caption: "Representative laboratory corridor" },
  ],
  education: (): ProjectImage[] => [
    { src: "/images/projects/verticals/education-1.jpg", alt: "Training academy tiered seminar space — representative education delivery environment", caption: "Representative learning environment" },
  ],
  fnb: (): ProjectImage[] => [
    { src: "/images/projects/verticals/fnb-1.jpg", alt: "Corporate cafeteria — representative F&B delivery environment", caption: "Representative corporate dining environment" },
    { src: "/images/projects/verticals/fnb-2.jpg", alt: "Quick-service restaurant interior — representative F&B delivery environment", caption: "Representative QSR outlet environment" },
  ],
};

export const PROJECTS: Project[] = [
  {
    slug: "max-life-insurance-pan-india",
    client: "Max Life Insurance",
    location: "PAN India",
    areaSqft: 50000,
    valueCr: 30.0,
    vertical: "BFSI",
    scope: ["Multi-City Rollout", "Turnkey Fit-Out", "Design-Build"],
    status: "Completed",
    summary:
      "The single largest engagement by value — a PAN-India workplace programme delivered across multiple Max Life offices.",
    narrative: [
      "The Max Life Insurance programme is the highest-value engagement directed under Sarim Khan's leadership at FocusOn Interiors — a ₹30 Crore, 50,000 sq. ft. workplace rollout spanning Max Life offices across India.",
      "As Project Director, Sarim owned the engagement end to end: BOQ finalization and value engineering against corporate workplace standards, design coordination with Max Life's project and admin teams, multi-site procurement, phased execution around live business operations, and statutory quality and safety compliance at every location.",
      "Delivery ran on a repeatable playbook — standardized material palettes, certified vendor panels, and milestone-driven billing — so each office reached formal handover on schedule and to a consistent corporate standard, regardless of city.",
    ],
    images: pool.bfsi("Max Life Insurance"),
    featured: true,
  },
  {
    slug: "lt-financial-services-multi-site",
    client: "L&T Financial Services",
    location: "Chandigarh · Navi Mumbai · Gurgaon · Bengaluru · Hyderabad",
    areaSqft: 96500,
    valueCr: 24.15,
    vertical: "BFSI",
    scope: ["96,500 sq. ft. Programme", "5 Cities", "PMC-Led Delivery"],
    status: "Completed",
    summary:
      "A five-city, 96,500 sq. ft. multi-site programme for L&T Financial Services — the largest by area.",
    narrative: [
      "The L&T Financial Services engagement covered five cities — Chandigarh, Navi Mumbai, Gurgaon, Bengaluru and Hyderabad — totalling 96,500 sq. ft. of workplace delivery valued at ₹24.15 Crore.",
      "Flagship sites include the Navi Mumbai campus at Mahape (six floors of approximately 15,000 sq. ft. each, delivered under PMC management by Awfis) and the Rohan Tech Park, Bengaluru office (16,500 sq. ft.).",
      "Sarim directed the programme from a central project office: standardized BOQs per floor-plate, city-wise vendor mobilization, weekly cross-site quality audits, and milestone-linked billing and cost certification. The result was a uniform L&T workplace standard delivered at scale — on time across all five cities.",
    ],
    images: [
      { src: "/images/projects/lt-finance-navi-mumbai/collage.webp", alt: "L&T Finance, Navi Mumbai — reception, workplace and collaboration spaces delivered by FocusOn Interiors", caption: "L&T Finance, Navi Mumbai — delivered by FocusOn Interiors" },
      { src: "/images/projects/lt-finance-navi-mumbai/view-1.webp", alt: "L&T Finance, Navi Mumbai — branded lobby wall and corridor", caption: "Navi Mumbai campus — brand wall & circulation" },
      { src: "/images/projects/lt-finance-navi-mumbai/view-2.webp", alt: "L&T Finance, Navi Mumbai — meeting suite interior", caption: "Navi Mumbai campus — meeting suite" },
      { src: "/images/projects/lt-finance-bengaluru/collage.webp", alt: "L&T Finance, Bengaluru (Rohan Tech Park) — workplace delivered by FocusOn Interiors", caption: "L&T Finance, Bengaluru — delivered by FocusOn Interiors" },
      { src: "/images/projects/lt-finance-bengaluru/breakout.webp", alt: "Bengaluru campus — cafeteria and breakout zone", caption: "Bengaluru campus — cafeteria & breakout" },
    ],
    featured: true,
    realPhotos: true,
  },
  {
    slug: "compass-group-mumbai-pune-chennai",
    client: "Compass Group",
    location: "Mumbai · Pune · Chennai",
    areaSqft: 87000,
    valueCr: 18.3,
    vertical: "F&B",
    scope: ["87,000 sq. ft.", "Three Cities", "Large-Format Kitchens & Dining"],
    status: "Completed",
    summary:
      "87,000 sq. ft. of corporate dining and kitchen infrastructure for Compass Group across three metros.",
    narrative: [
      "For Compass Group — the world's largest food-services company — FocusOn Interiors delivered 87,000 sq. ft. of corporate dining environments across Mumbai, Pune and Chennai, valued at ₹18.30 Crore.",
      "The scope combined high-throughput commercial kitchens, serveries, cafeterias and breakout dining for large corporate campuses — environments where finishes, services and hygiene detailing are specified to food-safety as well as workplace standards.",
      "Sarim directed vendor and subcontractor panels for stainless fabrication, kitchen MEP and speciality flooring, ran stage-wise quality inspections, and sequenced handovers to Compass's operations teams so facilities opened on programme, city by city.",
    ],
    images: [...pool.fnb()],
    featured: true,
  },
  {
    slug: "krsnaa-diagnostics-pan-india",
    client: "Krsnaa Diagnostics",
    location: "Maharashtra · West Bengal + PAN-India",
    areaSqft: 35000,
    valueCr: 10.5,
    vertical: "Healthcare & Diagnostics",
    scope: ["Diagnostics Centres", "Lab-Grade Services", "Multi-State Rollout"],
    status: "Completed",
    summary:
      "A multi-state rollout of diagnostics centres — 35,000 sq. ft. of healthcare environments for one of India's largest diagnostics chains.",
    narrative: [
      "Krsnaa Diagnostics operates one of India's largest diagnostics networks. FocusOn Interiors has supported that expansion with 35,000 sq. ft. of diagnostics-centre fit-outs across Maharashtra, West Bengal and PAN-India locations, valued at ₹10.50 Crore.",
      "Diagnostics environments are services-led projects: HVAC zoning, medical-grade plumbing to collection rooms, UPS-backed power to analysers, antimicrobial finishes and patient-flow planning all have to be coordinated within tight retail-format timelines.",
      "Under Sarim's direction the programme ran from a standardized kit-of-parts — repeatable BOQs, empanelled vendors and pre-agreed quality benchmarks — enabling centre after centre to open on schedule across states.",
    ],
    images: pool.healthcare(),
    featured: true,
  },
  {
    slug: "sodexo-nhc-bengaluru",
    client: "Sodexo — NHC",
    location: "Bengaluru, Karnataka",
    areaSqft: 19000,
    valueCr: 5.5,
    vertical: "F&B",
    scope: ["19,000 sq. ft.", "Corporate Dining", "Kitchen Infrastructure"],
    status: "Completed",
    summary:
      "19,000 sq. ft. of corporate dining and kitchen space for Sodexo's National Hub Centre in Bengaluru.",
    images: pool.fnb(),
  },
  {
    slug: "sharekhan-multi-city",
    client: "Sharekhan",
    location: "Multi-city",
    areaSqft: null,
    valueCr: 7.0,
    vertical: "BFSI",
    scope: ["Retail Broking Offices", "Multi-City"],
    status: "Completed",
    summary:
      "Multi-city fit-out programme for Sharekhan's retail broking offices and dealing rooms.",
    images: pool.bfsi("Sharekhan").slice(0, 1),
  },
  {
    slug: "unacademy-multi-city",
    client: "Unacademy",
    location: "Multi-city",
    areaSqft: null,
    valueCr: 3.0,
    vertical: "Education",
    scope: ["Learning Centres", "Multi-City"],
    status: "Completed",
    summary: "Fit-out of Unacademy learning and content spaces across multiple cities.",
    images: pool.education(),
  },
  {
    slug: "infosys-gurgaon",
    client: "Infosys",
    location: "Gurgaon, Haryana",
    areaSqft: 35000,
    valueCr: 3.0,
    vertical: "Corporate & IT",
    scope: ["35,000 sq. ft.", "IT Workplace"],
    status: "Completed",
    summary:
      "35,000 sq. ft. workplace fit-out for Infosys in Gurgaon — a marquee IT-sector delivery.",
    images: pool.corporate("Infosys"),
  },
  {
    slug: "emversity-multi-city",
    client: "Emversity (Beyond Odds Technologies)",
    location: "Srinagar + multi-city",
    areaSqft: 32000,
    valueCr: 3.0,
    vertical: "Education",
    scope: ["32,000 sq. ft.", "Education Campuses", "Multi-City"],
    status: "Completed",
    summary:
      "32,000 sq. ft. of education campus delivery for Emversity across Srinagar and multiple cities.",
    narrative: [
      "Emversity (Beyond Odds Technologies) builds career-first education campuses across India. FocusOn Interiors has partnered that growth with 32,000 sq. ft. of campus and workplace fit-outs across Srinagar and multiple cities, valued at ₹3.00 Crore.",
      "The Kochi campus — photographed here — is representative of the standard: high-energy learning commons, enrolment and counselling suites, studio classrooms and staff workplaces, all built to a youthful but disciplined brand language.",
      "Sarim's team owns the template centrally — design intent frozen with the client, city-level execution and quality control by FocusOn site teams — so every new campus opens with the same fit, finish and readiness.",
    ],
    images: [
      { src: "/images/projects/emversity-kochi/collage.webp", alt: "Emversity Kochi campus — reception, learning commons and classrooms delivered by FocusOn Interiors", caption: "Emversity campus, Kochi — delivered by FocusOn Interiors" },
      { src: "/images/projects/emversity-kochi/reception.webp", alt: "Emversity Kochi — reception and waiting lounge", caption: "Kochi campus — reception & waiting lounge" },
      { src: "/images/projects/emversity-kochi/booth-seating.webp", alt: "Emversity Kochi — booth seating collaboration pods", caption: "Kochi campus — collaboration pods" },
      { src: "/images/projects/emversity-kochi/workspace.webp", alt: "Emversity Kochi — open workspace with brand graphics", caption: "Kochi campus — open workspace" },
    ],
    realPhotos: true,
  },
  {
    slug: "reliance-nippon-life-insurance",
    client: "Reliance Nippon Life Insurance",
    location: "Lucknow + multi-city",
    areaSqft: 20000,
    valueCr: 3.0,
    vertical: "BFSI",
    scope: ["20,000 sq. ft.", "Branch & Regional Offices"],
    status: "Completed",
    summary:
      "20,000 sq. ft. of branch and regional office delivery for Reliance Nippon Life Insurance.",
    images: pool.bfsi("Reliance Nippon Life Insurance"),
  },
  {
    slug: "avaya-india-haridwar",
    client: "Avaya India Pvt. Ltd.",
    location: "Haridwar, Uttarakhand",
    areaSqft: 19000,
    valueCr: 2.5,
    vertical: "Corporate & IT",
    scope: ["19,000 sq. ft.", "Office + Retro-fit", "Design & Build"],
    status: "Completed",
    summary:
      "Avaya's Haridwar workplace — including a 16,000 sq. ft. design & retro-fit scope — delivered by FocusOn.",
    narrative: [
      "Avaya India's Haridwar facility combines a 19,000 sq. ft. office fit-out (₹2.50 Crore) with a further 16,000 sq. ft. design & retro-fit scope — modernizing a working technology campus without disrupting operations.",
      "The retrofit scope demanded phased execution: live-floor decanting, services upgrades, and progressive handover of refurbished neighbourhoods while business teams continued to work on adjacent floors.",
      "Sarim directed design development alongside Avaya's facilities team and kept the phased programme on schedule through weekly milestone reviews — a template FocusOn has since reused on other live-campus retrofits.",
    ],
    images: pool.corporate("Avaya India"),
  },
  {
    slug: "innova-solutions-chennai",
    client: "Innova Solutions",
    location: "Chennai + multi-city",
    areaSqft: 2000,
    valueCr: 2.5,
    vertical: "Corporate & IT",
    scope: ["IT Workplace", "Multi-City"],
    status: "Completed",
    summary: "Workplace delivery for Innova Solutions in Chennai and other cities.",
    images: pool.corporate("Innova Solutions"),
  },
  {
    slug: "bajaj-allianz-pan-india",
    client: "Bajaj Allianz",
    location: "PAN India",
    areaSqft: 15000,
    valueCr: 2.0,
    vertical: "BFSI",
    scope: ["15,000 sq. ft.", "Insurance Offices"],
    status: "Completed",
    summary: "15,000 sq. ft. of insurance office fit-outs for Bajaj Allianz across India.",
    images: pool.bfsi("Bajaj Allianz").slice(0, 2),
  },
  {
    slug: "kpmg-advant-tower-noida",
    client: "KPMG — Advant Tower",
    location: "Noida, Uttar Pradesh",
    areaSqft: 15000,
    valueCr: 1.85,
    vertical: "Corporate & IT",
    scope: ["15,000 sq. ft.", "Big-Four Workplace"],
    status: "Completed",
    summary: "15,000 sq. ft. workplace at Advant Tower, Noida for KPMG.",
    images: pool.corporate("KPMG"),
  },
  {
    slug: "vedantu-multi-city",
    client: "Vedantu",
    location: "Multi-city",
    areaSqft: null,
    valueCr: 1.0,
    vertical: "Education",
    scope: ["Ed-Tech Offices", "Multi-City"],
    status: "Completed",
    summary: "Multi-city office and studio delivery for Vedantu.",
    images: pool.education(),
  },
  {
    slug: "cholamandalam-investment-finance",
    client: "Cholamandalam Investment & Finance",
    location: "Thane · Pune · Dehradun",
    areaSqft: 5200,
    valueCr: 0.7,
    vertical: "BFSI",
    scope: ["Branch Offices", "Three Cities"],
    status: "Completed",
    summary:
      "Branch office fit-outs for Cholamandalam across Thane, Pune and Dehradun.",
    images: pool.bfsi("Cholamandalam").slice(0, 1),
  },
  {
    slug: "srl-diagnostics-indore",
    client: "SRL Diagnostics",
    location: "Indore, Madhya Pradesh",
    areaSqft: 4000,
    valueCr: 0.58,
    vertical: "Healthcare & Diagnostics",
    scope: ["Diagnostics Centre"],
    status: "Completed",
    summary: "Diagnostics centre fit-out for SRL Diagnostics in Indore.",
    images: pool.healthcare().slice(0, 1),
  },
  {
    slug: "wolters-kluwer-gurgaon",
    client: "Wolters Kluwer",
    location: "Gurgaon, Haryana",
    areaSqft: 5000,
    valueCr: 0.5,
    vertical: "Corporate & IT",
    scope: ["5,000 sq. ft."],
    status: "Completed",
    summary: "5,000 sq. ft. workplace for Wolters Kluwer in Gurgaon.",
    images: pool.corporate("Wolters Kluwer").slice(0, 1),
  },
  {
    slug: "cure-foods-bengaluru",
    client: "Cure Foods",
    location: "Bengaluru + multi-city",
    areaSqft: 4000,
    valueCr: 0.45,
    vertical: "F&B",
    scope: ["Cloud-Kitchen & Office"],
    status: "Completed",
    summary: "Kitchen and office environments for Cure Foods across Bengaluru and other cities.",
    images: pool.fnb().slice(1),
  },
  {
    slug: "ingersoll-rand-gurgaon",
    client: "Ingersoll Rand",
    location: "Gurgaon, Haryana",
    areaSqft: 6500,
    valueCr: 0.35,
    vertical: "Corporate & IT",
    scope: ["6,500 sq. ft."],
    status: "Completed",
    summary: "6,500 sq. ft. corporate office for Ingersoll Rand in Gurgaon.",
    images: pool.corporate("Ingersoll Rand").slice(0, 1),
  },
  {
    slug: "pixtory-delhi",
    client: "Pixtory",
    location: "Delhi",
    areaSqft: 2500,
    valueCr: 0.34,
    vertical: "Corporate & IT",
    scope: ["2,500 sq. ft."],
    status: "Completed",
    summary: "2,500 sq. ft. creative-studio office for Pixtory in Delhi.",
    images: pool.corporate("Pixtory").slice(1),
  },
  {
    slug: "ericsson-ahmedabad",
    client: "Ericsson India",
    location: "Ahmedabad, Gujarat",
    areaSqft: 25000,
    valueCr: 3.5,
    vertical: "Corporate & IT",
    scope: ["25,000 sq. ft.", "IT & Telecom Campus", "Design & Build"],
    status: "Completed",
    summary:
      "Ericsson India's Ahmedabad office campus — 25,000 sq. ft. of IT and telecom workplace delivered by FocusOn Interiors.",
    narrative: [
      "Ericsson India's Ahmedabad campus represents a marquee IT-sector delivery: 25,000 sq. ft. of workplace, collaboration zones and tech-support operations spaces for one of the world's leading telecom equipment companies.",
      "The engagement spanned the full fit-out scope — open workplaces, executive cabins, meeting suites, a branded reception, and tech-ops floor with raised-access flooring and integrated services — all executed to Ericsson's global workplace standards.",
      "Under Sarim's direction, the project was delivered through a structured programme of design coordination with Ericsson's facilities team, phased MEP installation, quality inspections at each milestone, and a snag-free handover.",
    ],
    images: [
      { src: "/images/projects/ericsson-ahmedabad/collage.webp", alt: "Ericsson India, Ahmedabad — corporate campus delivered by FocusOn Interiors", caption: "Ericsson campus, Ahmedabad — delivered by FocusOn Interiors" },
    ],
    realPhotos: true,
  },
  {
    slug: "luminous-haridwar",
    client: "Luminous Power Technologies",
    location: "Haridwar, Uttarakhand",
    areaSqft: 28500,
    valueCr: null,
    vertical: "Industrial",
    scope: ["28,500 sq. ft.", "Designed & Built by FocusOn"],
    status: "Completed",
    summary:
      "Luminous Power Technologies' Haridwar campus — 28,500 sq. ft. designed and built end-to-end by FocusOn.",
    narrative: [
      "Luminous Power Technologies' Haridwar campus is a benchmark industrial-office delivery: 28,500 sq. ft. designed and built entirely by FocusOn Interiors — architecture of the workplace floors, labs and collaboration zones executed under one roof.",
      "The campus pairs a modern corporate arrival experience with innovation hubs, testing and lab areas, and efficient open workplaces — a physical expression of Luminous's engineering culture.",
      "As Project Director, Sarim led the design-build mandate from brief to handover: concept coordination, services and MEP integration with plant infrastructure, and staged possession of each zone to Luminous's administration team.",
    ],
    images: [
      { src: "/images/projects/luminous-haridwar/collage.webp", alt: "Luminous Power Technologies, Haridwar — campus exterior, innovation hub and corridor", caption: "Luminous campus, Haridwar — delivered by FocusOn Interiors" },
      { src: "/images/projects/luminous-haridwar/innovation-hub.webp", alt: "Luminous Haridwar — innovation hub meeting rooms", caption: "Haridwar campus — innovation hub" },
    ],
    realPhotos: true,
  },
  {
    slug: "luminous-rudrapur",
    client: "Luminous Power Technologies",
    location: "Rudrapur, Uttarakhand",
    areaSqft: 19000,
    valueCr: null,
    vertical: "Industrial",
    scope: ["19,000 sq. ft.", "Design by Designtude · Executed by FocusOn"],
    status: "Completed",
    summary:
      "19,000 sq. ft. at Rudrapur — designed by Designtude, executed to handover by FocusOn Interiors.",
    narrative: [
      "The Rudrapur engagement extended FocusOn's relationship with Luminous Power Technologies: a 19,000 sq. ft. facility designed by Designtude and executed end-to-end by FocusOn Interiors.",
      "Executing another studio's design is a discipline of its own — drawing reconciliation, sample approvals, and protecting design intent through procurement and site work. The FocusOn project team delivered the facility to the designer's specification and Luminous's timeline.",
    ],
    images: [
      { src: "/images/projects/delivery/executive-cabin.webp", alt: "Executive cabin environment from FocusOn's industrial-office delivery programmes", caption: "Delivery environment — executive cabin" },
      { src: "/images/projects/delivery/office-corridor.webp", alt: "Office corridor and services spine from FocusOn's delivery programmes", caption: "Delivery environment — corridor & services spine" },
    ],
  },
  {
    slug: "mcdonalds-moti-nagar",
    client: "McDonald's",
    location: "Moti Nagar, Delhi",
    areaSqft: 4500,
    valueCr: null,
    vertical: "F&B",
    scope: ["4,500 sq. ft.", "Kitchen Outlet"],
    status: "Completed",
    summary: "4,500 sq. ft. kitchen outlet for McDonald's at Moti Nagar, Delhi.",
    narrative: [
      "QSR fit-outs are a race against the calendar: landlord possession to store opening is measured in weeks, and every piece of equipment, duct run and floor finish is brand-specified.",
      "At Moti Nagar, Delhi, FocusOn delivered a 4,500 sq. ft. McDonald's kitchen outlet — back-of-house services, equipment coordination with McDonald's vendors, and front-of-house finishes — to the system's exacting handover checklist.",
    ],
    images: pool.fnb().slice(1),
  },
  {
    slug: "burger-king-amritsar-bhatinda",
    client: "Burger King",
    location: "Amritsar (Haveli) & Bhatinda (Bhucho)",
    areaSqft: null,
    valueCr: null,
    vertical: "F&B",
    scope: ["QSR Outlets", "Punjab"],
    status: "Completed",
    summary: "Burger King outlet fit-outs at Amritsar (Haveli) and Bhatinda (Bhucho), Punjab.",
    images: pool.fnb().slice(1),
  },
];

export const getProject = (slug: string) =>
  PROJECTS.find((p) => p.slug === slug);

export const featuredProjects = () =>
  PROJECTS.filter((p) => p.featured);

export const formatCr = (v: number | null) =>
  v == null ? "—" : `₹${v.toFixed(2)} Cr`;

export const formatSqft = (v: number | null) =>
  v == null ? "—" : `${v.toLocaleString("en-IN")} sq. ft.`;

export const nextProject = (slug: string): Project => {
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  return PROJECTS[(i + 1) % PROJECTS.length];
};
