#!/usr/bin/env python3
"""Generate Sarim Khan's one-page resume PDF (public/sarim-khan-resume.pdf)."""
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas

NAVY = HexColor("#111C34")
GOLD = HexColor("#B8862F")
INK = HexColor("#3D3D3D")
MUTED = HexColor("#6B6B6B")
LINE = HexColor("#E2DDD0")
SAND = HexColor("#F5F2EA")

W, H = A4
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "public", "sarim-khan-resume.pdf")

c = canvas.Canvas(OUT, pagesize=A4)
c.setTitle("Sarim Khan — Project Director — Resume")
c.setAuthor("Sarim Khan")

M = 16 * mm
x = M
y = H - M

def rule(ypos, w=0.7):
    c.setStrokeColor(GOLD)
    c.setLineWidth(w)
    c.line(M, ypos, W - M, ypos)

# ---------- Header band ----------
c.setFillColor(NAVY)
c.rect(0, H - 42 * mm, W, 42 * mm, stroke=0, fill=1)
c.setFillColor(GOLD)
c.rect(0, H - 43 * mm, W, 1 * mm, stroke=0, fill=1)

c.setFillColor(HexColor("#FAF8F4"))
c.setFont("Times-Bold", 27)
c.drawString(M, H - 19 * mm, "SARIM KHAN")
c.setFillColor(HexColor("#D9B26A"))
c.setFont("Helvetica-Bold", 9.5)
c.drawString(M, H - 26 * mm, "PROJECT DIRECTOR  ·  TURNKEY INTERIOR FIT-OUT")
c.setFillColor(HexColor("#C8CDDA"))
c.setFont("Helvetica", 9)
c.drawString(M, H - 33 * mm, "FocusOn Interior Decorators Pvt. Ltd.  |  Delhi-NCR, India")
c.drawString(M, H - 38 * mm, "info@focusoninterior.in   ·   +91 99102 58820   ·   linkedin.com/in/sarim-khan-485a90304")

y = H - 52 * mm

def section(title):
    global y
    y -= 3 * mm
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 10.5)
    c.drawString(M, y, title.upper())
    y -= 2 * mm
    rule(y, 0.5)
    y -= 4.5 * mm

def body(text, indent=0, size=9.2, leading=4.1, color=INK, bold=False):
    global y
    c.setFillColor(color)
    c.setFont("Helvetica-Bold" if bold else "Helvetica", size)
    c.drawString(M + indent * mm, y, text)
    y -= leading * mm

def bullet(text, size=9.2):
    global y
    c.setFillColor(GOLD)
    c.circle(M + 1.2 * mm, y + 1.1 * mm, 0.7 * mm, stroke=0, fill=1)
    c.setFillColor(INK)
    c.setFont("Helvetica", size)
    c.drawString(M + 5 * mm, y, text)
    y -= 4.3 * mm

# ---------- Profile ----------
section("Profile")
for line in [
    "Project Director heading the Project Department of FocusOn Interior Decorators Pvt. Ltd. since September 2018.",
    "Directs end-to-end delivery of turnkey commercial interior fit-outs — BOQ finalization and design coordination",
    "through site execution, billing and formal handover — across corporate, IT, BFSI, education, healthcare and F&B,",
    "PAN-India. B.Tech (Civil Engineering). Works on AutoCAD, Primavera and StandPro.",
]:
    body(line)

# ---------- Snapshot stats ----------
y -= 1.5 * mm
c.setFillColor(SAND)
c.rect(M, y - 8 * mm, W - 2 * M, 11 * mm, stroke=0, fill=1)
stats = ["7+ Yrs Leading Delivery", "4,50,000+ Sq. Ft. Delivered", "Rs.120+ Cr Value Directed", "20+ Marquee Accounts"]
colw = (W - 2 * M) / 4
for i, s in enumerate(stats):
    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 8.6)
    c.drawCentredString(M + colw * i + colw / 2, y - 4.5 * mm, s)
y -= 12 * mm

# ---------- Experience ----------
section("Experience")
body("Project Director — FocusOn Interior Decorators Pvt. Ltd.", bold=True, size=9.8)
body("September 2018 — Present (7+ Years)  |  Delhi NCR · PAN-India", color=MUTED, size=8.6)
y -= 1 * mm
for b in [
    "Heads the Project Department: BOQ finalization, design coordination, execution, billing and formal handover.",
    "Leads multi-disciplinary teams — architects, visualizers, project managers, supervisors, safety officers,",
    "     quality managers and MEP technicians; directs a 1,000–1,200+ strong deployable workforce.",
    "Owns client relationships and delivery accountability across 5 regional offices (Delhi NCR, Bengaluru, Pune,",
    "     Chennai, Mumbai); delivered 4,50,000+ sq. ft. / Rs.120+ Cr across 20+ marquee accounts.",
]:
    bullet(b)
y -= 1.5 * mm
body("Interior Designer — FocusOn Interior Decorators Pvt. Ltd. (Early Tenure)", bold=True, size=9.8)
for b in [
    "Applied design and civil engineering fundamentals to space-planning and fit-out projects — the foundation",
    "     for the Project Director role.",
]:
    bullet(b)

# ---------- Key engagements ----------
section("Selected Engagements")
c.setFont("Helvetica-Bold", 8.8); c.setFillColor(MUTED)
c.drawString(M, y, "CLIENT")
c.drawString(M + 72 * mm, y, "LOCATION")
c.drawString(M + 120 * mm, y, "AREA")
c.drawString(M + 145 * mm, y, "VALUE")
y -= 2 * mm
rule(y, 0.35)
y -= 4 * mm
rows = [
    ("Max Life Insurance", "PAN India", "50,000 sq.ft.", "Rs.30.00 Cr"),
    ("L&T Financial Services", "5 cities (multi-site)", "96,500 sq.ft.", "Rs.24.15 Cr"),
    ("Compass Group", "Mumbai · Pune · Chennai", "87,000 sq.ft.", "Rs.18.30 Cr"),
    ("Krsnaa Diagnostics", "Maharashtra · WB + PAN-India", "35,000 sq.ft.", "Rs.10.50 Cr"),
    ("Sharekhan", "Multi-city", "—", "Rs.7.00 Cr"),
    ("Sodexo — NHC", "Bengaluru", "19,000 sq.ft.", "Rs.5.50 Cr"),
    ("Infosys", "Gurgaon, Haryana", "35,000 sq.ft.", "Rs.3.00 Cr"),
    ("Emversity (Beyond Odds)", "Srinagar + multi-city", "32,000 sq.ft.", "Rs.3.00 Cr"),
    ("Reliance Nippon Life Insurance", "Lucknow + multi-city", "20,000 sq.ft.", "Rs.3.00 Cr"),
    ("Avaya India Pvt. Ltd.", "Haridwar, Uttarakhand", "19,000 sq.ft.", "Rs.2.50 Cr"),
    ("Luminous Power Technologies", "Haridwar & Rudrapur, UK", "47,500 sq.ft.", "Design-Build"),
    ("McDonald's / Burger King", "Delhi · Amritsar · Bhatinda", "QSR outlets", "Turnkey"),
]
c.setFont("Helvetica", 8.8)
for i, (cl, loc, ar, val) in enumerate(rows):
    if i % 2 == 0:
        c.setFillColor(SAND)
        c.rect(M, y - 1.4 * mm, W - 2 * M, 4.6 * mm, stroke=0, fill=1)
    c.setFillColor(INK)
    c.drawString(M, y, cl)
    c.drawString(M + 72 * mm, y, loc)
    c.drawString(M + 120 * mm, y, ar)
    c.setFillColor(NAVY)
    c.drawString(M + 145 * mm, y, val)
    y -= 4.6 * mm

# ---------- Competencies ----------
section("Core Competencies")
c.setFillColor(INK); c.setFont("Helvetica", 8.9)
comps = [
    "Project Direction & P&L · BOQ Finalization · Client Engagement · End-to-End Execution · Billing & Cost Certification",
    "Handover Management · Multi-Site Team Leadership · Vendor & Subcontractor Coordination · MEP Coordination",
    "Design-to-Execution Alignment · Schedule & Milestone Management (Primavera) · Quality & Compliance Assurance",
]
for line in comps:
    body(line, size=8.9, leading=4.2)

# ---------- Method ----------
section("Delivery Methodology (C.Q.E.T. Standard)")
body("Consistency · Quality · Economical Delivery · Time Efficiency — applied across a 7-stage spine: client brief & site", size=8.9, leading=4.2)
body("assessment, design coordination & BOQ, procurement & vendor mobilization, execution & quality control, MEP", size=8.9, leading=4.2)
body("integration & testing, snag closure & walkthrough, formal handover & billing closure.", size=8.9, leading=4.2)

# ---------- Education ----------
section("Education & Toolkit")
body("Bachelor of Technology (B.Tech), Civil Engineering — 2012–2016", bold=True, size=9.2)
body("Toolkit: AutoCAD · Primavera · StandPro", color=MUTED, size=8.8)

# ---------- Clients line ----------
section("Marquee Clients")
body("Infosys · HCL · Wipro · Accenture · Nokia · Google · KPMG · Oracle · BT Group · L&T Financial Services · HSBC ·", size=8.7, leading=4.2)
body("Max Life · Sodexo · Compass Group · McDonald's · Burger King · Titan · Tanishq · Avaya · Panasonic · Voltas ·", size=8.7, leading=4.2)
body("Bajaj Allianz · Krsnaa Diagnostics · Tata 1mg · Zomato · Emversity · Luminous Power · SRL Diagnostics · Sharekhan", size=8.7, leading=4.2)

c.showPage()
c.save()
print("written", OUT, os.path.getsize(OUT) // 1024, "KB")
