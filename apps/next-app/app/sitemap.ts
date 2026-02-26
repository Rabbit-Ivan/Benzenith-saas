import type { MetadataRoute } from "next";

import { locales } from "@libs/i18n";
import { getNewsArticleIds } from "@/lib/benzenith-news";

const staticPaths = ["", "/brand-story", "/contact", "/privacy-policy", "/news"];
const categorySlugs = ["fanofwill", "suchnessofself"];
const productSlugs = [
  "mother-of-pearl-necklace",
  "mother-of-pearl-earrings",
  "hetian-jade-necklace",
  "blue-water-jadeite-necklace",
];

const resolveAppBaseUrl = () => {
  const rawValue = process.env.APP_BASE_URL?.trim();
  if (!rawValue) return "http://localhost:7001";
  const withProtocol = /^https?:\/\//i.test(rawValue)
    ? rawValue
    : `https://${rawValue}`;
  return withProtocol.replace(/\/+$/, "");
};

const buildUrl = (baseUrl: string, locale: string, path: string) =>
  `${baseUrl}/${locale}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = resolveAppBaseUrl();
  const now = new Date();
  const articleIds = getNewsArticleIds();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: buildUrl(baseUrl, locale, path),
        lastModified: now,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : path === "/news" ? 0.9 : 0.8,
      });
    }

    for (const categorySlug of categorySlugs) {
      entries.push({
        url: buildUrl(baseUrl, locale, `/category/${categorySlug}`),
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }

    for (const productSlug of productSlugs) {
      entries.push({
        url: buildUrl(baseUrl, locale, `/product/${productSlug}`),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    for (const articleId of articleIds) {
      entries.push({
        url: buildUrl(baseUrl, locale, `/news/${articleId}`),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
