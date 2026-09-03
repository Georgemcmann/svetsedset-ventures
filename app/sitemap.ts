import type { MetadataRoute } from "next";
import { divisions } from "@/lib/siteConfig";

const baseUrl = "https://svetsedset-ventures.com.ng";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },

    ...divisions.map((division) => ({
      url: `${baseUrl}/divisions/${division.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}