import type { MetadataRoute } from "next";

import { getNewsArticleIds } from "@/lib/benzenith-news";
import { i18n } from "./i18n-config";

export const revalidate = 3600;

const staticLastModified = new Date("2026-02-25T00:00:00.000Z");

const staticRouteConfigs: Array<{
  path: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
}> = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/brand-story", changeFrequency: "monthly", priority: 0.5 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.5 },
  { path: "/privacy-policy", changeFrequency: "monthly", priority: 0.5 },
  { path: "/cookie-settings", changeFrequency: "monthly", priority: 0.5 },
  { path: "/news", changeFrequency: "weekly", priority: 0.6 },
];

const categoryIds = ["suixinshan", "benzizai", "tingwanxiang"] as const;

const productIds = [
  "mother-of-pearl-necklace",
  "mother-of-pearl-earrings",
  "hetian-jade-necklace",
  "blue-water-jadeite-necklace",
] as const;

const newsPublishedDateById: Record<number, string> = {
  1: "2025-01-10",
  2: "2025-01-05",
  3: "2024-12-28",
  4: "2024-12-20",
  5: "2024-12-15",
  6: "2024-12-08",
};

const normalizeBaseUrl = (baseUrl: string) => {
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};

const createLocalizedUrl = (baseUrl: string, locale: string, path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}/${locale}${normalizedPath === "/" ? "" : normalizedPath}`;
};

const resolveNewsLastModified = (id: string) => {
  const parsedId = Number(id);
  if (Number.isNaN(parsedId)) return staticLastModified;

  const publishedDate = newsPublishedDateById[parsedId];
  if (!publishedDate) return staticLastModified;

  return new Date(`${publishedDate}T00:00:00.000Z`);
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = normalizeBaseUrl(process.env.APP_BASE_URL || "http://localhost:7001");
  const locales = i18n.locales as readonly string[];
  const newsIds = getNewsArticleIds().map((id) => String(id));

  const routes: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const routeConfig of staticRouteConfigs) {
      routes.push({
        url: createLocalizedUrl(baseUrl, locale, routeConfig.path),
        lastModified: staticLastModified,
        changeFrequency: routeConfig.changeFrequency,
        priority: routeConfig.priority,
      });
    }

    for (const categoryId of categoryIds) {
      routes.push({
        url: createLocalizedUrl(baseUrl, locale, `/category/${categoryId}`),
        lastModified: staticLastModified,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }

    for (const productId of productIds) {
      routes.push({
        url: createLocalizedUrl(baseUrl, locale, `/product/${productId}`),
        lastModified: staticLastModified,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }

    for (const newsId of newsIds) {
      routes.push({
        url: createLocalizedUrl(baseUrl, locale, `/news/${newsId}`),
        lastModified: resolveNewsLastModified(newsId),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  return routes;
}
