# Sarim Khan — Project Director · Personal Branding Portfolio

Premium **personal branding portfolio** of **Sarim Khan, Project Director** at
**FocusOn Interior Decorators Pvt. Ltd.** — a PAN-India turnkey commercial
interior fit-out company (₹40 Cr → projected ₹100 Cr). This is Sarim's
individual professional portfolio (clients & projects he has directed) — not
the company website.

Built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion**.
Light, PMC-grade design system (warm ivory, deep navy `#111C34`, restrained
metallic gold `#B8862F`; Fraunces display serif + Inter).

## Pages

| Route | Content |
| --- | --- |
| `/` | Hero, animated career stats, featured engagements, about teaser, client wall, CTA |
| `/about` | Bio, C.Q.E.T. operating standard, education, certifications (placeholder grid) |
| `/experience` | Career timeline + FocusOn company snapshot + turnover growth chart |
| `/projects` | Full filterable / sortable project grid (value, area, vertical) |
| `/projects/[slug]` | Case-study page per engagement (26 routes, SSG) |
| `/expertise` | 12 core competencies, technical toolkit, 7-stage delivery methodology |
| `/clients` | Client roster by vertical with **original brand logos** (grayscale → full-colour hover), recognition strip, growth chart |
| `/gallery` | Real on-site project photography + delivery environments, filterable, lightbox |
| `/media` | Official portraits, profile links, press coverage |
| `/contact` | Email (click-to-copy), phone, LinkedIn, Delhi-NCR presence — no form |

SEO: per-page metadata, OpenGraph + `opengraph-image`, `sitemap.xml`,
`robots.txt`, `Person` JSON-LD, SK monogram favicon + apple-touch-icon.

## Content editing

All content lives in typed data files — no JSX edits needed:

- `data/site.ts` — name, contacts, nav, stats
- `data/projects.ts` — every engagement (area, value, vertical, narrative, images)
- `data/clients.ts`, `data/gallery.ts`, `data/media.ts`, `data/expertise.ts`, `data/experience.ts`

Images in `public/images/` (`sarim/` portraits, `projects/` photography,
`projects/verticals/` representative delivery environments).
Real FocusOn project photos were extracted from the company's public media
library (`focusoninteriors.com`) via `scripts/fetch_assets.py` usage notes;

## Brand logos

Every client/company shown carries its **original brand logo** — no text
approximations:

- Files live in `public/logos/` (PNG, trimmed + height-normalized; a handful of
  iconic marks are SVG wordmarks tinted to official brand colours).
- `data/clients.ts` → `CLIENT_LOGOS` maps each roster client to its logo;
  `CLIENT_ALIASES` maps project client strings (e.g. "KPMG — Advant Tower")
  to their brand.
- Rendered via `components/ClientLogo.tsx` (used by the clients grid,
  home logo wall, project cards and case-study heroes) with a
  grayscale → full-colour + zoom hover effect.
resume PDF is regenerated with `python scripts/make_resume.py`.

## Deploy on GitHub Pages (No Vercel · No Backend Server Required)

This project is configured as a 100% static frontend portfolio using Next.js Static Export (`output: "export"`).

1. Push this repository to GitHub.
2. In your GitHub repository: go to **Settings → Pages** and set **Source** to **GitHub Actions** (or deploy the `/out` directory).
3. In GitHub Actions or Pages settings, select standard Next.js Static Export deployment, or run `npm run build` locally/in CI which generates all static HTML/CSS/JS files directly into the `/out` folder.
4. (Optional) Configure custom domain or set environment variable `NEXT_PUBLIC_SITE_URL` if needed. Defaults to `https://roushan62.github.io/Sarim-Khan` when unset.

No server, API backend, or Vercel account is required. Everything runs statically from GitHub.

## Scripts (for contributors running locally)

```bash
npm install
npm run dev      # local preview
npm run build    # production build
```

---

© Sarim Khan · Project Director, FocusOn Interior Decorators Pvt. Ltd.
Site built for professional portfolio purposes.
