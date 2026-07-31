/** Client roster (grouped by vertical) + growth data for /clients and the home logo wall. */

export interface ClientGroup {
  vertical: string;
  clients: string[];
}

export const CLIENT_GROUPS: ClientGroup[] = [
  {
    vertical: "Corporate & IT",
    clients: [
      "Avaya", "Infosys", "HCL", "Nokia", "Accenture", "TaskUs", "BT Group",
      "Wipro", "KPMG", "Google", "Oracle", "Luminous Power", "Regent Lighting",
      "Panasonic", "Innova Solutions", "TP", "Voltas", "SAR Group",
    ],
  },
  {
    vertical: "BFSI & Insurance",
    clients: [
      "L&T Financial Services", "HSBC", "Indiabulls", "Max Life Insurance",
      "HDFC Life", "Reliance Nippon Life", "ICICI Prudential", "Future Generali",
      "Tata AIG", "Bajaj Allianz", "Piramal Finance", "Poonawalla Fincorp",
      "Sundaram Finance", "Shriram Finance", "Motilal Oswal", "Sharekhan",
      "Cholamandalam Investment & Finance",
    ],
  },
  {
    vertical: "F&B & Hospitality",
    clients: [
      "Compass Group", "Sodexo", "McDonald's", "Burger King", "Burger Singh",
      "Zomato", "Cure Foods", "Del Monte",
    ],
  },
  {
    vertical: "Education",
    clients: ["IDP", "Emversity", "Unacademy", "Vedantu", "FIITJEE", "NIIT"],
  },
  {
    vertical: "Healthcare & Diagnostics",
    clients: [
      "Krsnaa Diagnostics", "Dr Lal PathLabs", "SRL Diagnostics",
      "Agilus Diagnostics", "Tata 1mg", "Nova IVF Fertility",
    ],
  },
  {
    vertical: "Retail & Lifestyle",
    clients: [
      "Titan", "Tanishq", "Asian Paints", "U.S. Polo Assn.", "Monte Carlo",
      "Blackberrys", "Being Human",
    ],
  },
  {
    vertical: "Logistics & Industrial",
    clients: ["Allcargo Logistics", "Flipkart", "Ecom Express", "Livguard"],
  },
  {
    vertical: "PMC & Consultancy Partners",
    clients: [
      "CBRE", "JLL", "Cushman & Wakefield", "Knight Frank", "Savills",
      "Stallion Universal",
    ],
  },
];

/** Names for the home-page marquee strip (order curated for recognizability). */
export const MARQUEE_CLIENTS = [
  "Infosys", "HCL", "Wipro", "Accenture", "Nokia", "Google", "KPMG", "Oracle",
  "BT Group", "L&T Financial Services", "HSBC", "Max Life", "Sodexo",
  "Compass Group", "McDonald's", "Burger King", "Titan", "Tanishq", "Avaya",
  "Panasonic", "Voltas", "Allianz", "Krsnaa Diagnostics", "Tata 1mg", "Zomato",
];

export const GROWTH = [
  { fy: "FY 2022–23", cr: 40, projected: false, note: "Actual" },
  { fy: "FY 2023–24", cr: 60, projected: false, note: "Actual" },
  { fy: "FY 2024–25", cr: 100, projected: true, note: "Projected" },
];
