import type { MetadataRoute } from "next";

import { i18n } from "./i18n-config";

const restrictedPaths = [
  "/admin",
  "/signin",
  "/signup",
  "/forgot-password",
  "/reset-password",
  "/cellphone",
  "/wechat",
  "/cart",
];

const normalizeBaseUrl = (baseUrl: string) => {
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};

const buildLocaleDisallowRules = (locales: readonly string[]) => {
  return locales.flatMap((locale) => {
    return restrictedPaths.map((path) => `/${locale}${path}`);
  });
};

export default function robots(): MetadataRoute.Robots {
  const baseUrl = normalizeBaseUrl(process.env.APP_BASE_URL || "http://localhost:7001");
  const localeRules = buildLocaleDisallowRules(i18n.locales as readonly string[]);

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", ...localeRules],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
