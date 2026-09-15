import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://subhankar-das.vercel.app";
  const routes = [
    "",
    "/work",
    "/work/bharat-enterprise",
    "/work/accountly",
    "/work/personal-finance-tracker",
    "/work/evora",
    "/about",
    "/contact",
    "/resume",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1.0 : route.startsWith("/work") ? 0.8 : 0.6,
  }));
}
