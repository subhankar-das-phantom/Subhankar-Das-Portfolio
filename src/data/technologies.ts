export type TechCategory =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Data"
  | "Engineering"
  | "Infrastructure / Tools";

export interface Technology {
  name: string;
  category: TechCategory;
  logo?: string;
  url?: string;
  featured?: boolean;
  order?: number;
}

export const canonicalTechnologies: Technology[] = [
  // Languages
  { name: "TypeScript", category: "Languages", logo: "/logos/typescript.svg", url: "https://www.typescriptlang.org/", featured: true, order: 0 },
  { name: "JavaScript", category: "Languages", logo: "/logos/javascript.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", featured: true, order: 5 },
  { name: "Java", category: "Languages", logo: "/logos/java.svg", url: "https://www.java.com/", featured: true, order: 8 },
  { name: "Python", category: "Languages", logo: "/logos/python.svg", url: "https://www.python.org/", featured: true, order: 9 },
  { name: "C", category: "Languages", logo: "/logos/c.svg", url: "https://en.cppreference.com/w/c" },
  { name: "C++", category: "Languages", logo: "/logos/cpp.svg", url: "https://en.cppreference.com/w/cpp" },
  { name: "HTML", category: "Languages", logo: "/logos/html5.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", category: "Languages", logo: "/logos/css3.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },

  // Frontend
  { name: "React", category: "Frontend", logo: "/logos/react.svg", url: "https://react.dev/", featured: true, order: 1 },
  { name: "Next.js", category: "Frontend", logo: "/logos/nextjs.svg", url: "https://nextjs.org/", featured: true, order: 6 },
  { name: "Tailwind CSS", category: "Frontend", logo: "/logos/tailwind.svg", url: "https://tailwindcss.com/", featured: true, order: 7 },
  { name: "Material UI", category: "Frontend", logo: "/logos/materialui.svg", url: "https://mui.com/" },
  { name: "Vite", category: "Frontend", logo: "/logos/vite.svg", url: "https://vitejs.dev/" },
  { name: "Chart.js", category: "Frontend", logo: "/logos/chartjs.svg", url: "https://www.chartjs.org/" },
  { name: "EJS", category: "Frontend", url: "https://ejs.co/" },
  { name: "Recharts", category: "Frontend", url: "https://recharts.org/" },

  // Backend
  { name: "Node.js", category: "Backend", logo: "/logos/nodejs.svg", url: "https://nodejs.org/", featured: true, order: 2 },
  { name: "Express", category: "Backend", logo: "/logos/express.svg", url: "https://expressjs.com/", featured: true, order: 3 },
  { name: "REST APIs", category: "Backend", featured: true, order: 13 },
  { name: "JWT", category: "Backend", logo: "/logos/jwt.svg", url: "https://jwt.io/", featured: true, order: 14 },
  { name: "bcrypt", category: "Backend" },
  { name: "Server-Sent Events (SSE)", category: "Backend", order: 18 },

  // Data / Database
  { name: "MongoDB", category: "Data", logo: "/logos/mongodb.svg", url: "https://www.mongodb.com/", featured: true, order: 4 },
  { name: "Mongoose", category: "Data", url: "https://mongoosejs.com/" },
  { name: "MySQL", category: "Data", logo: "/logos/mysql.svg", url: "https://www.mysql.com/", featured: true, order: 12 },

  // Engineering
  { name: "MongoDB Transactions", category: "Engineering", featured: true, order: 16 },
  { name: "Aggregation Pipelines", category: "Engineering", featured: true, order: 17 },
  { name: "RBAC", category: "Engineering", featured: true, order: 15 },
  { name: "Multi-tenancy", category: "Engineering" },
  { name: "API Security", category: "Engineering" },
  { name: "Validation", category: "Engineering" },
  { name: "Rate Limiting", category: "Engineering" },
  { name: "Caching", category: "Engineering" },
  { name: "Virtual Scrolling", category: "Engineering" },
  { name: "Performance Optimization", category: "Engineering" },
  { name: "Idempotent Request Handling", category: "Engineering" },

  // Infrastructure / Tools
  { name: "Docker", category: "Infrastructure / Tools", logo: "/logos/docker.svg", url: "https://www.docker.com/", featured: true, order: 10 },
  { name: "Git", category: "Infrastructure / Tools", logo: "/logos/git.svg", url: "https://git-scm.com/", featured: true, order: 11 },
  { name: "GitHub", category: "Infrastructure / Tools", logo: "/logos/github.svg", url: "https://github.com/", featured: true, order: 11 },
  { name: "Postman", category: "Infrastructure / Tools", logo: "/logos/postman.svg", url: "https://www.postman.com/" },
  { name: "Vercel", category: "Infrastructure / Tools", logo: "/logos/vercel.svg", url: "https://vercel.com/" },
  { name: "Render", category: "Infrastructure / Tools", logo: "/logos/render.svg", url: "https://render.com/" },
  { name: "MongoDB Atlas", category: "Infrastructure / Tools", logo: "/logos/mongodb.svg", url: "https://www.mongodb.com/atlas" },
  { name: "Razorpay", category: "Infrastructure / Tools", logo: "/logos/razorpay.svg", url: "https://razorpay.com/", featured: true, order: 19 },
  { name: "PDFKit", category: "Infrastructure / Tools" },
  { name: "Excel/XLSX Tooling", category: "Infrastructure / Tools" },
  { name: "QR Code Tooling", category: "Infrastructure / Tools" },
];

export interface CategoryGroup {
  category: TechCategory;
  title: string;
  items: Technology[];
}

export const technologyGroups: CategoryGroup[] = [
  {
    category: "Languages",
    title: "LANGUAGES",
    items: canonicalTechnologies.filter((t) => t.category === "Languages"),
  },
  {
    category: "Frontend",
    title: "FRONTEND",
    items: canonicalTechnologies.filter((t) => t.category === "Frontend"),
  },
  {
    category: "Backend",
    title: "BACKEND",
    items: canonicalTechnologies.filter((t) => t.category === "Backend"),
  },
  {
    category: "Data",
    title: "DATA",
    items: canonicalTechnologies.filter((t) => t.category === "Data"),
  },
  {
    category: "Engineering",
    title: "ENGINEERING",
    items: canonicalTechnologies.filter((t) => t.category === "Engineering"),
  },
  {
    category: "Infrastructure / Tools",
    title: "INFRASTRUCTURE / TOOLS",
    items: canonicalTechnologies.filter((t) => t.category === "Infrastructure / Tools"),
  },
];

// Priority ordered list for presentation emphasis
export const presentationOrderedTechnologies: Technology[] = [...canonicalTechnologies]
  .filter((t) => t.order !== undefined)
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
