/** Expertise page data — competencies, toolkit and the delivery methodology. */

export interface Competency {
  title: string;
  detail: string;
  icon: string; // lucide icon key, resolved in the page component
}

export const COMPETENCIES: Competency[] = [
  { title: "Project Direction & P&L Oversight", detail: "Commercial accountability for multi-crore programmes — margins, cash flow and forecasting.", icon: "Target" },
  { title: "BOQ Finalization", detail: "Quantities, rates and value engineering locked before mobilization.", icon: "ClipboardList" },
  { title: "Client Engagement & Relationship Management", detail: "Single-point accountability from brief to handover — and beyond.", icon: "Handshake" },
  { title: "End-to-End Project Execution", detail: "Concept to keys: design coordination, site works, finishes and FF&E.", icon: "Blocks" },
  { title: "Billing & Cost Certification", detail: "Milestone-linked billing, measurement verification and certification.", icon: "ReceiptIndianRupee" },
  { title: "Project Handover Management", detail: "Snag-free possessions, documentation and formal sign-off.", icon: "KeyRound" },
  { title: "Multi-Site Team Leadership", detail: "Parallel delivery across cities with centralized controls.", icon: "Users" },
  { title: "Vendor & Subcontractor Coordination", detail: "Empanelled partner networks, rate contracts and performance reviews.", icon: "Network" },
  { title: "MEP Coordination", detail: "HVAC, electrical, plumbing, fire and IT/AV integrated with interiors.", icon: "Cable" },
  { title: "Design-to-Execution Alignment", detail: "Protecting design intent through procurement and site reality.", icon: "DraftingCompass" },
  { title: "Schedule & Milestone Management", detail: "Primavera-driven baselines, look-aheads and recovery planning.", icon: "CalendarCheck" },
  { title: "Quality & Compliance Assurance", detail: "Audit trails, checklists and statutory compliance at every site.", icon: "ShieldCheck" },
];

export const TOOLKIT = ["AutoCAD", "Primavera", "StandPro"] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Client Brief & Site Assessment",
    detail: "Requirements, headcount and workplace standards captured; site conditions and services surveyed.",
  },
  {
    step: "02",
    title: "Design Coordination & BOQ Finalization",
    detail: "Drawings reconciled with designers; quantities, rates and specifications locked into the BOQ.",
  },
  {
    step: "03",
    title: "Procurement & Vendor Mobilization",
    detail: "Long-lead items ordered; empanelled vendors and subcontractors mobilized per schedule.",
  },
  {
    step: "04",
    title: "Execution & Site Quality Control",
    detail: "Civil, joinery and finishes executed against method statements and daily quality checklists.",
  },
  {
    step: "05",
    title: "MEP Integration & Testing",
    detail: "HVAC, electrical, plumbing, fire and IT/AV systems installed, tested and commissioned.",
  },
  {
    step: "06",
    title: "Snag Closure & Client Walkthrough",
    detail: "Room-by-room snag list closed; formal walkthrough with the client's project team.",
  },
  {
    step: "07",
    title: "Formal Handover & Billing Closure",
    detail: "Possession letters, as-built documentation and O&M manuals issued; final bills certified.",
  },
] as const;

export const PILLARS = [
  {
    letter: "C",
    title: "Consistency",
    detail: "Repeatable, disciplined execution across every site — the same standard in every city.",
    icon: "Repeat",
  },
  {
    letter: "Q",
    title: "Quality",
    detail: "Uncompromising standards in design and workmanship, verified room by room.",
    icon: "BadgeCheck",
  },
  {
    letter: "E",
    title: "Economical",
    detail: "Cost-efficient solutions without cutting corners — value engineered, never cheapened.",
    icon: "IndianRupee",
  },
  {
    letter: "T",
    title: "Time Efficiency",
    detail: "On time, every time — without compromising quality.",
    icon: "Clock",
  },
] as const;
