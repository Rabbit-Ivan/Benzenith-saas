import type { MetadataRoute } from "next";

const resolveAppBaseUrl = () => {
  const rawValue = process.env.APP_BASE_URL?.trim();
  if (!rawValue) return "http://localhost:7001";
  const withProtocol = /^https?:\/\//i.test(rawValue)
    ? rawValue
    : `https://${rawValue}`;
  return withProtocol.replace(/\/+$/, "");
};

export default function robots(): MetadataRoute.Robots {
  const baseUrl = resolveAppBaseUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/*/admin",
          "/*/admin/*",
          "/*/signin",
          "/*/signup",
          "/*/forgot-password",
          "/*/reset-password",
          "/*/wechat",
          "/*/cellphone",
          "/*/cart",
          "/*/test-validator-nextjs",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
