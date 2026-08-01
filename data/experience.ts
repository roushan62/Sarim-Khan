/** Career experience + company snapshot for the /experience page. */

export interface Role {
  title: string;
  company: string;
  period: string;
  duration: string;
  location: string;
  current?: boolean;
  points: string[];
}

export const ROLES: Role[] = [
  {
    title: "Project Director",
    company: "FocusOn Interior Decorators Pvt. Ltd.",
    period: "September 2018 — Present",
    duration: "7+ Years",
    location: "Delhi NCR · PAN-India",
    current: true,
    points: [
      "Heads the Project Department: BOQ finalization, design coordination, execution, billing and formal handover.",
      "Leads multi-disciplinary teams — architects, visualizers, project managers, supervisors, safety officers, quality managers and MEP technicians.",
      "Directs delivery across a 1,000–1,200+ strong deployable workforce.",
      "Owns client relationships and delivery accountability across 5 regional offices — Delhi NCR, Bengaluru, Pune, Chennai and Mumbai.",
      "Delivered 4,50,000+ sq. ft. / ₹120+ Cr across 20+ marquee accounts.",
    ],
  },
  {
    title: "Interior Designer",
    company: "FocusOn Interior Decorators Pvt. Ltd.",
    period: "Early Tenure",
    duration: "Foundation Years",
    location: "Delhi NCR",
    points: [
      "Applied design and civil engineering fundamentals to space-planning and fit-out projects.",
      "Built the drawing-to-site fluency that now underpins the Project Director role.",
    ],
  },
];

export const EDUCATION = {
  degree: "Bachelor of Technology (B.Tech), Civil Engineering",
  period: "2012 — 2016",
};

export const COMPANY_SNAPSHOT = {
  name: "FocusOn Interiors",
  legal: "FocusOn Interior Decorators Pvt. Ltd.",
  founded: 2017,
  positioning: "PAN-India turnkey interior fit-out and space-planning organization",
  workforce: "1,000–1,200+ skilled professionals",
  offices: ["Delhi NCR", "Bengaluru", "Pune", "Chennai", "Mumbai"],
  mantra: "Consistency · Quality · Economical · Time-Efficiency (C.Q.E.T.)",
  recognition: "India's fastest-growing space-planning organization",
  turnover: [
    { fy: "FY 2022–23", cr: 40, projected: false },
    { fy: "FY 2023–24", cr: 60, projected: false },
    { fy: "FY 2024–25", cr: 100, projected: true },
  ],
};
