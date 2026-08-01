"use client";

/**
 * Renders a brand-aware logo in the clients grid.
 * Grayscale by default, colored on hover (via parent .group-hover).
 * Falls back to styled text for un-mapped brands.
 */

interface BrandEntry {
  /** Brand display text */
  label: string;
  /** Brand color (applied on hover) */
  color: string;
  /** Font weight */
  weight?: string;
  /** Font family override */
  font?: string;
  /** Extra decorative element */
  accent?: React.ReactNode;
  /** Letter spacing */
  spacing?: string;
  /** Font size in px */
  size?: number;
}

/** Map client names to their visual identity */
const BRAND_IDENTITY: Record<string, BrandEntry> = {
  // ── Corporate & IT ──
  "Avaya": { label: "AVAYA", color: "#0075C9", weight: "700", size: 14 },
  "Infosys": { label: "Infosys", color: "#007CC3", weight: "700", size: 15 },
  "HCL": { label: "HCL", color: "#0068B5", weight: "800", size: 16, spacing: "2px" },
  "Nokia": { label: "NOKIA", color: "#124191", weight: "800", size: 14, spacing: "2px" },
  "Accenture": { label: "accenture", color: "#A100FF", weight: "700", size: 14 },
  "TaskUs": { label: "TaskUs", color: "#23C9A6", weight: "700", size: 15 },
  "BT Group": { label: "BT", color: "#662D91", weight: "700", size: 18 },
  "Wipro": { label: "Wipro", color: "#3C1086", weight: "700", size: 15 },
  "KPMG": { label: "KPMG", color: "#00338D", weight: "800", size: 16, spacing: "1px" },
  "Google": { label: "Google", color: "#4285F4", weight: "600", size: 15 },
  "Oracle": { label: "ORACLE", color: "#F80000", weight: "700", size: 13, spacing: "1.5px" },
  "Luminous Power": { label: "Luminous", color: "#E31E24", weight: "700", size: 13 },
  "Regent Lighting": { label: "REGENT", color: "#FF6B00", weight: "700", size: 13, spacing: "1px" },
  "Panasonic": { label: "Panasonic", color: "#0068B7", weight: "700", size: 12, spacing: "2px" },
  "Innova Solutions": { label: "Innova", color: "#0056A4", weight: "600", size: 14 },
  "TP": { label: "TP", color: "#E31937", weight: "800", size: 18, spacing: "2px" },
  "Voltas": { label: "VOLTAS", color: "#003DA5", weight: "800", size: 14, spacing: "1px" },
  "SAR Group": { label: "SAR Group", color: "#1A1A1A", weight: "600", size: 13 },

  // ── BFSI ──
  "L&T Financial Services": { label: "L&T Financial", color: "#005A9E", weight: "800", size: 12 },
  "HSBC": { label: "HSBC", color: "#DB0011", weight: "800", size: 16, spacing: "1px" },
  "Indiabulls": { label: "Indiabulls", color: "#0055A5", weight: "600", size: 12 },
  "Max Life Insurance": { label: "Max Life", color: "#ED1C24", weight: "800", size: 13 },
  "HDFC Life": { label: "HDFC Life", color: "#006CBE", weight: "700", size: 13 },
  "Reliance Nippon Life": { label: "R. Nippon Life", color: "#E60012", weight: "600", size: 11 },
  "ICICI Prudential": { label: "ICICI Pru", color: "#F47920", weight: "700", size: 12 },
  "Future Generali": { label: "Future Gen.", color: "#00A859", weight: "600", size: 12 },
  "Tata AIG": { label: "TATA AIG", color: "#006EB6", weight: "700", size: 13, spacing: "1px" },
  "Bajaj Allianz": { label: "Bajaj Allianz", color: "#003D7E", weight: "600", size: 11 },
  "Piramal Finance": { label: "Piramal", color: "#1D1D1B", weight: "600", size: 13 },
  "Poonawalla Fincorp": { label: "Poonawalla", color: "#8B0000", weight: "600", size: 12 },
  "Sundaram Finance": { label: "Sundaram", color: "#1A237E", weight: "700", size: 12 },
  "Shriram Finance": { label: "Shriram", color: "#E85D00", weight: "700", size: 13 },
  "Motilal Oswal": { label: "Motilal Oswal", color: "#003366", weight: "600", size: 11 },
  "Sharekhan": { label: "Sharekhan", color: "#E74C3C", weight: "700", size: 13 },
  "Cholamandalam Investment & Finance": { label: "Cholamandalam", color: "#1B3A5C", weight: "600", size: 10 },

  // ── F&B ──
  "Compass Group": { label: "COMPASS GROUP", color: "#1D1D1B", weight: "700", size: 9, spacing: "1.5px" },
  "Sodexo": { label: "Sodexo", color: "#004E90", weight: "600", size: 15 },
  "McDonald's": { label: "McDonald's", color: "#FEC722", weight: "700", size: 12 },
  "Burger King": { label: "BURGER KING", color: "#D62300", weight: "800", size: 9, spacing: "1px" },
  "Burger Singh": { label: "Burger Singh", color: "#FF4500", weight: "700", size: 12 },
  "Zomato": { label: "Zomato", color: "#E23744", weight: "700", size: 14 },
  "Cure Foods": { label: "Cure Foods", color: "#2E7D32", weight: "600", size: 13 },
  "Del Monte": { label: "Del Monte", color: "#003DA5", weight: "700", size: 13 },

  // ── Education ──
  "IDP": { label: "IDP", color: "#005A9E", weight: "800", size: 18, spacing: "2px" },
  "Emversity": { label: "Emversity", color: "#5C2D91", weight: "600", size: 14 },
  "Unacademy": { label: "Unacademy", color: "#08BD82", weight: "700", size: 13 },
  "Vedantu": { label: "Vedantu", color: "#6C5CE7", weight: "700", size: 14 },
  "FIITJEE": { label: "FIITJEE", color: "#E63946", weight: "800", size: 14, spacing: "1px" },
  "NIIT": { label: "NIIT", color: "#E31E24", weight: "800", size: 16, spacing: "2px" },

  // ── Healthcare ──
  "Krsnaa Diagnostics": { label: "Krsnaa", color: "#1B5E20", weight: "600", size: 14 },
  "Dr Lal PathLabs": { label: "Dr Lal PathLabs", color: "#C8102E", weight: "600", size: 10 },
  "SRL Diagnostics": { label: "SRL", color: "#D32F2F", weight: "800", size: 16, spacing: "2px" },
  "Agilus Diagnostics": { label: "Agilus", color: "#0097A7", weight: "600", size: 14 },
  "Tata 1mg": { label: "Tata 1mg", color: "#6BBE45", weight: "600", size: 14 },
  "Nova IVF Fertility": { label: "Nova IVF", color: "#E91E63", weight: "600", size: 13 },

  // ── Retail ──
  "Titan": { label: "TITAN", color: "#1D1D1B", weight: "300", size: 16, spacing: "4px" },
  "Tanishq": { label: "TANISHQ", color: "#C8A951", weight: "400", size: 13, spacing: "3px", font: "Georgia, serif" },
  "Asian Paints": { label: "Asian Paints", color: "#F09C13", weight: "600", size: 12 },
  "U.S. Polo Assn.": { label: "U.S. Polo", color: "#003087", weight: "700", size: 12 },
  "Monte Carlo": { label: "Monte Carlo", color: "#1A1A1A", weight: "400", size: 12, font: "Georgia, serif" },
  "Blackberrys": { label: "Blackberrys", color: "#1D1D1B", weight: "600", size: 12 },
  "Being Human": { label: "Being Human", color: "#1D1D1B", weight: "600", size: 12 },

  // ── Logistics ──
  "Allcargo Logistics": { label: "Allcargo", color: "#FF6F00", weight: "700", size: 13 },
  "Flipkart": { label: "Flipkart", color: "#2874F0", weight: "600", size: 14 },
  "Ecom Express": { label: "Ecom Express", color: "#6C2B85", weight: "700", size: 11 },
  "Livguard": { label: "LIVGUARD", color: "#E31E24", weight: "700", size: 13, spacing: "1px" },

  // ── PMC Partners ──
  "CBRE": { label: "CBRE", color: "#94A3B8", weight: "800", size: 16, spacing: "2px" },
  "JLL": { label: "JLL", color: "#00539B", weight: "800", size: 18, spacing: "2px" },
  "Cushman & Wakefield": { label: "C&W", color: "#1D1D1B", weight: "700", size: 16 },
  "Knight Frank": { label: "Knight Frank", color: "#002B5C", weight: "500", size: 11 },
  "Savills": { label: "Savills", color: "#E4002B", weight: "600", size: 14 },
  "Stallion Universal": { label: "Stallion", color: "#1B5E20", weight: "700", size: 13 },
};

export default function ClientLogoCell({ name }: { name: string }) {
  const brand = BRAND_IDENTITY[name];

  if (!brand) {
    // Fallback: styled text
    return (
      <span className="font-display text-[13px] font-medium text-navy/40 transition-all duration-300 group-hover:text-navy">
        {name}
      </span>
    );
  }

  return (
    <span
      className="inline-block transition-all duration-300 group-hover:scale-105"
      style={{
        fontSize: `${brand.size}px`,
        fontWeight: brand.weight || "600",
        letterSpacing: brand.spacing || "0",
        fontFamily: brand.font || "Arial, sans-serif",
        color: "#888",
      }}
      // Use data attribute for hover color change via inline style workaround
      data-color={brand.color}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.color = brand.color;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.color = "#888";
      }}
    >
      {brand.label}
    </span>
  );
}
