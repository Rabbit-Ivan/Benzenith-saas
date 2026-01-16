import zhTW from "./benzenith-locales/zh-TW.json";
import zhCN from "./benzenith-locales/zh-CN.json";
import ja from "./benzenith-locales/ja.json";
import en from "./benzenith-locales/en.json";

type TranslationObject = Record<string, unknown>;

const translations: Record<string, TranslationObject> = {
  "zh-TW": zhTW,
  "zh-CN": zhCN,
  ja: ja,
  en: en,
};

/**
 * Get nested value from object using dot notation
 */
function getNestedValue(obj: TranslationObject, path: string): string {
  const keys = path.split(".");
  let current: unknown = obj;

  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return path; // Return the key itself if not found
    }
  }

  return typeof current === "string" ? current : path;
}

/**
 * Server-side translation function for Next.js App Router
 * Use this in Server Components to get translations
 */
export async function getServerTranslation(lang: string) {
  const locale = lang in translations ? lang : "zh-TW";
  const resource = translations[locale] || translations["zh-TW"];

  const t = (key: string, options?: Record<string, string | number>): string => {
    let value = getNestedValue(resource, key);

    // Handle interpolation (e.g., {{count}})
    if (options) {
      Object.entries(options).forEach(([k, v]) => {
        value = value.replace(new RegExp(`{{${k}}}`, "g"), String(v));
      });
    }

    return value;
  };

  return { t, locale };
}

export type ServerTranslation = Awaited<ReturnType<typeof getServerTranslation>>;
