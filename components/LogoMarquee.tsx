import { MARQUEE_CLIENTS } from "@/data/clients";

/**
 * Brand-aware client logo wall — uses styled SVG wordmarks that replicate
 * each client's visual identity. Grayscale by default, full color on hover.
 */

interface BrandLogo {
  name: string;
  /** Inline SVG component for the brand mark */
  svg: React.ReactNode;
}

/* ── Brand Logo SVGs ────────────────────────────────────────── */

function InfosysLogo({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 140 28" className="h-6 w-auto" fill="none">
      <text x="0" y="22" fontSize="20" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="-0.5" fill={active ? "#007CC3" : "#888"}>
        Infosys
      </text>
      <circle cx="132" cy="10" r="5" fill={active ? "#E31837" : "#aaa"} />
    </svg>
  );
}

function HCLLogo({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 80 28" className="h-5 w-auto" fill="none">
      <text x="0" y="22" fontSize="22" fontWeight="800" fontFamily="Arial Black, sans-serif" letterSpacing="2" fill={active ? "#0068B5" : "#888"}>
        HCL
      </text>
    </svg>
  );
}

function WiproLogo({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 100 28" className="h-5 w-auto" fill="none">
      <text x="0" y="22" fontSize="22" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="0" fill={active ? "#3C1086" : "#888"}>
        Wipro
      </text>
    </svg>
  );
}

function AccentureLogo({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 130 28" className="h-5 w-auto" fill="none">
      <text x="0" y="22" fontSize="20" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="-0.3" fill={active ? "#A100FF" : "#888"}>
        Accenture
      </text>
      <text x="123" y="10" fontSize="12" fontWeight="700" fill={active ? "#A100FF" : "#888"}>›</text>
    </svg>
  );
}

function NokiaLogo({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 100 28" className="h-5 w-auto" fill="none">
      <text x="0" y="22" fontSize="22" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="2" fill={active ? "#124191" : "#888"}>
        NOKIA
      </text>
    </svg>
  );
}

function GoogleLogo({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 110 28" className="h-5 w-auto" fill="none">
      <text x="0" y="22" fontSize="22" fontWeight="600" fontFamily="Arial, sans-serif" letterSpacing="-0.5">
        <tspan fill={active ? "#4285F4" : "#888"}>G</tspan>
        <tspan fill={active ? "#EA4335" : "#888"}>o</tspan>
        <tspan fill={active ? "#FBBC05" : "#888"}>o</tspan>
        <tspan fill={active ? "#4285F4" : "#888"}>g</tspan>
        <tspan fill={active ? "#34A853" : "#888"}>l</tspan>
        <tspan fill={active ? "#EA4335" : "#888"}>e</tspan>
      </text>
    </svg>
  );
}

function KPMGLogo({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 90 28" className="h-5 w-auto" fill="none">
      <text x="0" y="22" fontSize="22" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="1" fill={active ? "#00338D" : "#888"}>
        KPMG
      </text>
    </svg>
  );
}

function OracleLogo({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 110 28" className="h-5 w-auto" fill="none">
      <text x="0" y="22" fontSize="22" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="1.5" fill={active ? "#F80000" : "#888"}>
        ORACLE
      </text>
    </svg>
  );
}

function BTLogo({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 110 28" className="h-5 w-auto" fill="none">
      <text x="0" y="22" fontSize="20" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="0.5" fill={active ? "#662D91" : "#888"}>
        BT Group
      </text>
      <circle cx="105" cy="8" r="4" fill={active ? "#662D91" : "#aaa"} />
    </svg>
  );
}

function LTFinancialLogo({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 160 28" className="h-5 w-auto" fill="none">
      <text x="0" y="22" fontSize="18" fontWeight="800" fontFamily="Arial, sans-serif" fill={active ? "#005A9E" : "#888"}>
        L&T Financial
      </text>
    </svg>
  );
}

function HSBCLogo({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 80 28" className="h-5 w-auto" fill="none">
      <text x="0" y="22" fontSize="22" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="1" fill={active ? "#DB0011" : "#888"}>
        HSBC
      </text>
      {/* Hexagon motif */}
      <polygon points="74,4 80,8 80,16 74,20 68,16 68,8" fill={active ? "#DB0011" : "#aaa"} opacity="0.5" />
    </svg>
  );
}

function MaxLifeLogo({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 120 28" className="h-5 w-auto" fill="none">
      <text x="0" y="22" fontSize="18" fontWeight="800" fontFamily="Arial, sans-serif">
        <tspan fill={active ? "#ED1C24" : "#888"}>Max</tspan>
        <tspan fill={active ? "#1D1D1B" : "#888"}> Life</tspan>
      </text>
    </svg>
  );
}

function SodexoLogo({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 110 28" className="h-5 w-auto" fill="none">
      <text x="0" y="22" fontSize="20" fontWeight="600" fontFamily="Arial, sans-serif" letterSpacing="0.5" fill={active ? "#004E90" : "#888"}>
        Sodexo
      </text>
      <circle cx="102" cy="14" r="5" fill={active ? "#77B03D" : "#aaa"} />
    </svg>
  );
}

function CompassLogo({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 140 28" className="h-5 w-auto" fill="none">
      <text x="0" y="22" fontSize="18" fontWeight="700" fontFamily="Arial, sans-serif" fill={active ? "#1D1D1B" : "#888"}>
        Compass Group
      </text>
    </svg>
  );
}

function McDonaldsLogo({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 50 32" className="h-7 w-auto" fill="none">
      {/* Golden Arches simplified */}
      <path d="M8 28 C8 10 18 4 22 4 C26 4 28 10 28 28" stroke={active ? "#FEC722" : "#aaa"} strokeWidth="4" fill="none" />
      <path d="M22 28 C22 10 32 4 36 4 C40 4 42 10 42 28" stroke={active ? "#FEC722" : "#aaa"} strokeWidth="4" fill="none" />
    </svg>
  );
}

function BurgerKingLogo({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 80 32" className="h-6 w-auto" fill="none">
      <text x="0" y="12" fontSize="8" fontWeight="800" fontFamily="Arial, sans-serif" fill={active ? "#F5A623" : "#aaa"}>
        BURGER
      </text>
      <text x="2" y="26" fontSize="12" fontWeight="800" fontFamily="Arial, sans-serif" fill={active ? "#D62300" : "#888"}>
        KING
      </text>
      <path d="M0 14 Q20 16 52 14" stroke={active ? "#F5A623" : "#aaa"} strokeWidth="2" fill="none" />
      <path d="M0 16 Q20 14 52 16" stroke={active ? "#8B4513" : "#aaa"} strokeWidth="2" fill="none" />
    </svg>
  );
}

function TitanLogo({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 80 28" className="h-5 w-auto" fill="none">
      <text x="0" y="22" fontSize="22" fontWeight="300" fontFamily="Arial, sans-serif" letterSpacing="4" fill={active ? "#1D1D1B" : "#888"}>
        TITAN
      </text>
    </svg>
  );
}

function TanishqLogo({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 120 28" className="h-5 w-auto" fill="none">
      <text x="0" y="22" fontSize="20" fontWeight="400" fontFamily="Georgia, serif" letterSpacing="3" fill={active ? "#1D1D1B" : "#888"}>
        TANISHQ
      </text>
      <circle cx="112" cy="8" r="4" fill={active ? "#C8A951" : "#aaa"} />
    </svg>
  );
}

function AvayaLogo({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 100 28" className="h-5 w-auto" fill="none">
      <text x="0" y="22" fontSize="22" fontWeight="700" fontFamily="Arial, sans-serif" fill={active ? "#0075C9" : "#888"}>
        AVAYA
      </text>
    </svg>
  );
}

function PanasonicLogo({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 150 28" className="h-5 w-auto" fill="none">
      <text x="0" y="22" fontSize="18" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="3" fill={active ? "#0068B7" : "#888"}>
        Panasonic
      </text>
    </svg>
  );
}

function VoltasLogo({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 90 28" className="h-5 w-auto" fill="none">
      <text x="0" y="22" fontSize="22" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="1" fill={active ? "#003DA5" : "#888"}>
        VOLTAS
      </text>
    </svg>
  );
}

function AllianzLogo({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 110 28" className="h-5 w-auto" fill="none">
      <text x="0" y="22" fontSize="18" fontWeight="800" fontFamily="Arial, sans-serif" fill={active ? "#003781" : "#888"}>
        ALLIANZ
      </text>
      <rect x="100" y="4" width="8" height="18" rx="1" fill={active ? "#003781" : "#aaa"} />
    </svg>
  );
}

function KrsnaaLogo({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 140 28" className="h-5 w-auto" fill="none">
      <text x="0" y="22" fontSize="16" fontWeight="600" fontFamily="Arial, sans-serif" fill={active ? "#1B5E20" : "#888"}>
        Krsnaa Diagnostics
      </text>
    </svg>
  );
}

function TataLogo({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 100 28" className="h-5 w-auto" fill="none">
      <text x="0" y="22" fontSize="20" fontWeight="400" fontFamily="Arial, sans-serif" letterSpacing="3" fill={active ? "#006EB6" : "#888"}>
        TATA
      </text>
      <circle cx="88" cy="14" r="6" stroke={active ? "#006EB6" : "#888"} strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function ZomatoLogo({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 120 28" className="h-5 w-auto" fill="none">
      <text x="0" y="22" fontSize="20" fontWeight="700" fontFamily="Arial, sans-serif" fill={active ? "#E23744" : "#888"}>
        Zomato
      </text>
    </svg>
  );
}

function GenericLogo({ name, active }: { name: string; active: boolean }) {
  const fontSize = name.length > 14 ? 12 : name.length > 10 ? 14 : name.length > 6 ? 16 : 18;
  const width = Math.max(60, name.length * 9);
  return (
    <svg viewBox={`0 0 ${width} 28`} className="h-5 w-auto" fill="none">
      <text x="0" y="20" fontSize={fontSize} fontWeight="600" fontFamily="Arial, sans-serif" fill={active ? "#333" : "#888"}>
        {name}
      </text>
    </svg>
  );
}

/* ── Map of known brands to their logo component ──────────── */

const BRAND_MAP: Record<string, React.FC<{ active: boolean }>> = {
  "Infosys": InfosysLogo,
  "HCL": HCLLogo,
  "Wipro": WiproLogo,
  "Accenture": AccentureLogo,
  "Nokia": NokiaLogo,
  "Google": GoogleLogo,
  "KPMG": KPMGLogo,
  "Oracle": OracleLogo,
  "BT Group": BTLogo,
  "L&T Financial Services": LTFinancialLogo,
  "HSBC": HSBCLogo,
  "Max Life": MaxLifeLogo,
  "Sodexo": SodexoLogo,
  "Compass Group": CompassLogo,
  "McDonald's": McDonaldsLogo,
  "Burger King": BurgerKingLogo,
  "Titan": TitanLogo,
  "Tanishq": TanishqLogo,
  "Avaya": AvayaLogo,
  "Panasonic": PanasonicLogo,
  "Voltas": VoltasLogo,
  "Allianz": AllianzLogo,
  "Krsnaa Diagnostics": KrsnaaLogo,
  "Tata 1mg": TataLogo,
  "Zomato": ZomatoLogo,
};

function ClientLogo({ name }: { name: string }) {
  const LogoComponent = BRAND_MAP[name] || null;
  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <div className="opacity-50 transition-all duration-500 ease-luxe grayscale group-hover:opacity-100 group-hover:grayscale-0">
        {LogoComponent ? <LogoComponent active={false} /> : <GenericLogo name={name} active={false} />}
      </div>
    </div>
  );
}

export default function LogoWall({ names = MARQUEE_CLIENTS }: { names?: string[] }) {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-surface to-transparent" />

      {/* Scrolling row */}
      <div className="logo-scroll-track flex items-center gap-0 py-2">
        {[...names, ...names].map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="group flex h-[76px] w-[180px] shrink-0 items-center justify-center border border-line/60 bg-surface transition-all duration-500 ease-luxe hover:bg-sand hover:shadow-card"
          >
            <ClientLogo name={name} />
          </div>
        ))}
      </div>
    </div>
  );
}
