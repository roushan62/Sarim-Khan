# Sarim Khan — Project Director · Portfolio

Premium personal portfolio for **Sarim Khan, Project Director** at
**FocusOn Interior Decorators Pvt. Ltd.** — a PAN-India turnkey commercial
interior fit-out company (₹40 Cr → projected ₹100 Cr).

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
| `/clients` | Client roster by vertical, recognition strip, growth chart |
| `/gallery` | Real on-site project photography + delivery environments, filterable, lightbox |
| `/media` | Official portraits, profile links, press coverage |
| `/contact` | Email (click-to-copy), phone, LinkedIn, Delhi-NCR presence — no form |

SEO: per-page metadata, OpenGraph + `opengraph-image`, `sitemap.xml`,
`robots.txt`, `Person` JSON-LD, SK monogram favicon + apple-touch-icon.

## Content editing

All content lives in typed data files — no JSX edits needed:

- `data/site.ts` — name, contacts (**replace `TODO(EMAIL)` / `TODO(PHONE)`
  before launch**), nav, stats
- `data/projects.ts` — every engagement (area, value, vertical, narrative, images)
- `data/clients.ts`, `data/gallery.ts`, `data/media.ts`, `data/expertise.ts`, `data/experience.ts`

Images in `public/images/` (`sarim/` portraits, `projects/` photography,
`projects/verticals/` representative delivery environments).
Real FocusOn project photos were extracted from the company's public media
library (`focusoninteriors.com`) via `scripts/fetch_assets.py` usage notes;
resume PDF is regenerated with `python scripts/make_resume.py`.

## Deploy on Vercel (recommended path — no local dev required)

1. Push this repository to GitHub (already done — branch `main`).
2. In Vercel: **Add New → Project → Import** this GitHub repository.
3. Vercel auto-detects **Next.js** — framework preset, build command
   `next build`, output `.next` — **no configuration needed** (zero-config).
4. (Optional) Configure domains + set environment variable
   `NEXT_PUBLIC_SITE_URL=https://<your-domain>` so canonical URLs and the
   sitemap point to the production domain. Defaults to
   `https://sarim-khan.vercel.app` when unset.
5. Deploy. Every push to `main` triggers an automatic production deployment.

No secrets are required for the site itself.

## Scripts (for contributors running locally)

```bash
npm install
npm run dev      # local preview
npm run build    # production build
```

---

© Sarim Khan · Project Director, FocusOn Interior Decorators Pvt. Ltd.
Site built for professional portfolio purposes.
