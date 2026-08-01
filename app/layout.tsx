import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE, CONTACT } from "@/data/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Fraunces (display serif) + Inter (body grotesk) — Google Fonts typefaces,
 * self-hosted via @fontsource-variable so builds never depend on external
 * font CDN availability (works identically on Vercel, zero config).
 */
const display = localFont({
  variable: "--font-display",
  display: "swap",
  src: [
    {
      path: "../node_modules/@fontsource-variable/fraunces/files/fraunces-latin-wght-normal.woff2",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource-variable/fraunces/files/fraunces-latin-wght-italic.woff2",
      style: "italic",
    },
  ],
});

const sans = localFont({
  variable: "--font-sans",
  display: "swap",
  src: [
    {
      path: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-italic.woff2",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Sarim Khan — Project Director | Turnkey Interior Fit-Out",
    template: "%s | Sarim Khan — Project Director",
  },
  description: SITE.description,
  keywords: [
    "Sarim Khan",
    "Project Director",
    "FocusOn Interiors",
    "turnkey interior fit-out",
    "commercial interiors India",
    "project management",
    "BOQ",
    "PMC",
  ],
  authors: [{ name: "Sarim Khan" }],
  creator: "Sarim Khan",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: "Sarim Khan — Project Director",
    title: "Sarim Khan — Project Director | Turnkey Interior Fit-Out",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarim Khan — Project Director",
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#111C34",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sarim Khan",
  jobTitle: "Project Director",
  worksFor: {
    "@type": "Organization",
    name: "FocusOn Interior Decorators Pvt. Ltd.",
    url: "https://focusoninteriors.com/",
  },
  url: SITE.url,
  image: `${SITE.url}/images/sarim/portrait-navy-suit.webp`,
  sameAs: [CONTACT.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi-NCR",
    addressCountry: "IN",
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: "B.Tech, Civil Engineering" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-navy focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
