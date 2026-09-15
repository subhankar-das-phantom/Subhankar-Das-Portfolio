export interface SiteConfig {
  name: string;
  role: string;
  subRole: string;
  location: string;
  country: string;
  status: string;
  tagline: string;
  statement: string;
  supportingText: string;
  secondaryLine: string;
  email: string;
  links: {
    github: string;
    linkedin: string;
    resume: string;
    gmailCompose: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "SUBHANKAR DAS",
  role: "Full-Stack / MERN Developer",
  subRole: "BCA (Hons.) Student",
  location: "Andal, West Bengal",
  country: "India",
  status: "AVAILABLE FOR SOFTWARE DEVELOPMENT OPPORTUNITIES",
  tagline: "FULL-STACK / PRODUCT ENGINEERING",
  statement: "I build software that gets used.",
  supportingText:
    "Full-stack developer and BCA student building real-world products across business operations, finance, and event management.",
  secondaryLine:
    "From a personal finance tracker to a continuously evolving business SaaS used in real-world workflows.",
  email: "subhankar.das.dev@gmail.com",
  links: {
    github: "https://github.com/subhankar-das-phantom",
    linkedin: "https://www.linkedin.com/in/subhankar-das-610883317/",
    resume: "/resume/Subhankar-Das-Resume.pdf",
    gmailCompose:
      "https://mail.google.com/mail/?view=cm&fs=1&to=subhankar.das.dev@gmail.com&su=Engineering%20Inquiry%20%E2%80%94%20Subhankar%20Das",
  },
  navigation: [
    { label: "WORK", href: "/work" },
    { label: "ABOUT", href: "/about" },
    { label: "ENGINEERING", href: "/#engineering" },
    { label: "CONTACT", href: "/contact" },
  ],
};
