/** Client roster (grouped by vertical) + original brand logos for /clients and the home logo wall. */

export interface ClientGroup {
  vertical: string;
  clients: string[];
}

export const CLIENT_GROUPS: ClientGroup[] = [
  {
    vertical: "Corporate & IT",
    clients: [
      "Avaya", "Infosys", "HCLTech", "Nokia", "Accenture", "TaskUs", "BT Group",
      "Wipro", "KPMG", "Google", "Oracle", "Ericsson", "Luminous Power",
      "Regent Lighting", "Panasonic", "Innova Solutions", "TP", "Voltas",
      "Wolters Kluwer", "Ingersoll Rand",
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

/**
 * Original brand logo files (public/logos/) for every roster client —
 * no text placeholders. Raster logos are trimmed/height-normalized PNGs;
 * iconic marks are crisp SVG wordmarks tinted to official brand colours.
 */
export const CLIENT_LOGOS: Record<string, string> = {
  // Corporate & IT
  "Avaya": "/logos/avaya.png",
  "Infosys": "/logos/infosys.svg",
  "HCLTech": "/logos/hcltech.png",
  "Nokia": "/logos/nokia.svg",
  "Accenture": "/logos/accenture.svg",
  "TaskUs": "/logos/taskus.png",
  "BT Group": "/logos/bt-group.svg",
  "Wipro": "/logos/wipro.png",
  "KPMG": "/logos/kpmg.png",
  "Google": "/logos/google.svg",
  "Oracle": "/logos/oracle.svg",
  "Ericsson": "/logos/ericsson.svg",
  "Luminous Power": "/logos/luminous-power.png",
  "Regent Lighting": "/logos/regent-lighting.png",
  "Panasonic": "/logos/panasonic.svg",
  "Innova Solutions": "/logos/innova-solutions.png",
  "TP": "/logos/tp-teleperformance.png",
  "Voltas": "/logos/voltas.png",
  "Wolters Kluwer": "/logos/wolters-kluwer.png",
  "Ingersoll Rand": "/logos/ingersoll-rand.png",
  // BFSI & Insurance
  "L&T Financial Services": "/logos/lt-finance.png",
  "HSBC": "/logos/hsbc.png",
  "Indiabulls": "/logos/indiabulls.png",
  "Max Life Insurance": "/logos/max-life-insurance.png",
  "HDFC Life": "/logos/hdfc-life.png",
  "Reliance Nippon Life": "/logos/reliance-nippon-life.png",
  "ICICI Prudential": "/logos/icici-prudential.png",
  "Future Generali": "/logos/future-generali.png",
  "Tata AIG": "/logos/tata-aig.png",
  "Bajaj Allianz": "/logos/bajaj-allianz.png",
  "Piramal Finance": "/logos/piramal-finance.png",
  "Poonawalla Fincorp": "/logos/poonawalla-fincorp.png",
  "Sundaram Finance": "/logos/sundaram-finance.png",
  "Shriram Finance": "/logos/shriram-finance.png",
  "Motilal Oswal": "/logos/motilal-oswal.png",
  "Sharekhan": "/logos/sharekhan.png",
  "Cholamandalam Investment & Finance": "/logos/cholamandalam.png",
  // F&B & Hospitality
  "Compass Group": "/logos/compass-group.png",
  "Sodexo": "/logos/sodexo.png",
  "McDonald's": "/logos/mcdonalds.svg",
  "Burger King": "/logos/burger-king.png",
  "Burger Singh": "/logos/burger-singh.png",
  "Zomato": "/logos/zomato.svg",
  "Cure Foods": "/logos/cure-foods.png",
  "Del Monte": "/logos/del-monte.png",
  // Education
  "IDP": "/logos/idp.png",
  "Emversity": "/logos/emversity.png",
  "Unacademy": "/logos/unacademy.svg",
  "Vedantu": "/logos/vedantu.png",
  "FIITJEE": "/logos/fiitjee.png",
  "NIIT": "/logos/niit.png",
  // Healthcare & Diagnostics
  "Krsnaa Diagnostics": "/logos/krsnaa-diagnostics.png",
  "Dr Lal PathLabs": "/logos/dr-lal-pathlabs.png",
  "SRL Diagnostics": "/logos/srl-diagnostics.png",
  "Agilus Diagnostics": "/logos/agilus-diagnostics.png",
  "Tata 1mg": "/logos/tata-1mg.png",
  "Nova IVF Fertility": "/logos/nova-ivf-fertility.png",
  // Retail & Lifestyle
  "Titan": "/logos/titan.png",
  "Tanishq": "/logos/tanishq.png",
  "Asian Paints": "/logos/asian-paints.png",
  "U.S. Polo Assn.": "/logos/us-polo-assn.png",
  "Monte Carlo": "/logos/monte-carlo.png",
  "Blackberrys": "/logos/blackberrys.png",
  "Being Human": "/logos/being-human.png",
  // Logistics & Industrial
  "Allcargo Logistics": "/logos/allcargo-logistics.png",
  "Flipkart": "/logos/flipkart.png",
  "Ecom Express": "/logos/ecom-express.png",
  "Livguard": "/logos/livguard.png",
  // PMC & Consultancy Partners
  "CBRE": "/logos/cbre.png",
  "JLL": "/logos/jll.png",
  "Cushman & Wakefield": "/logos/cushman-wakefield.png",
  "Knight Frank": "/logos/knight-frank.png",
  "Savills": "/logos/savills.png",
  "Stallion Universal": "/logos/stallion-universal.png",
};

/**
 * Maps project-page client strings (which carry site/office qualifiers)
 * back to their roster brand for logo lookup.
 */
export const CLIENT_ALIASES: Record<string, string> = {
  "Sodexo — NHC": "Sodexo",
  "Emversity (Beyond Odds Technologies)": "Emversity",
  "Reliance Nippon Life Insurance": "Reliance Nippon Life",
  "Avaya India Pvt. Ltd.": "Avaya",
  "KPMG — Advant Tower": "KPMG",
  "Ericsson India": "Ericsson",
  "Luminous Power Technologies": "Luminous Power",
};

/** Resolve the original brand logo for a client name (roster or project string). */
export function logoForClient(name: string): string | undefined {
  const brand = CLIENT_ALIASES[name] ?? name;
  return CLIENT_LOGOS[brand];
}

/** Names for the home-page marquee strip (order curated for recognizability). */
export const MARQUEE_CLIENTS = [
  "Infosys", "HCLTech", "Wipro", "Accenture", "Nokia", "Google", "KPMG", "Oracle",
  "BT Group", "L&T Financial Services", "HSBC", "Max Life Insurance", "Sodexo",
  "Compass Group", "McDonald's", "Burger King", "Zomato", "Flipkart", "Avaya",
  "Panasonic", "Voltas", "Bajaj Allianz", "Krsnaa Diagnostics", "Tata 1mg",
  "Titan", "Emversity",
];

export const GROWTH = [
  { fy: "FY 2022–23", cr: 40, projected: false, note: "Actual" },
  { fy: "FY 2023–24", cr: 60, projected: false, note: "Actual" },
  { fy: "FY 2024–25", cr: 100, projected: true, note: "Projected" },
];
