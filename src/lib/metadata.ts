import { siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  metadataBase: new URL("https://subhankar-das.vercel.app"),
  title: {
    default: "Subhankar Das — Full-Stack / MERN Developer",
    template: "%s | Subhankar Das",
  },
  description:
    "Full-stack developer and BCA student building real-world products across business operations, finance, and event management. Creator of Bharat Enterprise SaaS.",
  keywords: [
    "Subhankar Das",
    "Full-Stack Developer",
    "MERN Developer",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Bharat Enterprise",
    "Accountly",
    "Software Engineer Portfolio",
    "Andal",
    "West Bengal",
    "India",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.links.github }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://subhankar-das.vercel.app",
    title: "Subhankar Das — Full-Stack / MERN Developer",
    description:
      "I build software that gets used. Real-world products across business operations, finance, and event management.",
    siteName: "Subhankar Das Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subhankar Das — Full-Stack / MERN Developer",
    description: "I build software that gets used.",
    creator: "@subhankar_das",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export function generatePersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Subhankar Das",
    jobTitle: "Full-Stack / MERN Developer",
    description:
      "Full-stack developer and BCA student building production software across business operations, finance, and event management.",
    url: "https://subhankar-das.vercel.app",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Andal",
      addressRegion: "West Bengal",
      addressCountry: "India",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "RICIS Institutions",
    },
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
    ],
  };
}

export function generateWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Subhankar Das — Engineering Portfolio",
    url: "https://subhankar-das.vercel.app",
    author: {
      "@type": "Person",
      name: "Subhankar Das",
    },
  };
}

export function generateSoftwareApplicationJsonLd(project: {
  name: string;
  headline: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    headline: project.headline,
    description: project.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    author: {
      "@type": "Person",
      name: "Subhankar Das",
    },
    url: project.url,
  };
}
