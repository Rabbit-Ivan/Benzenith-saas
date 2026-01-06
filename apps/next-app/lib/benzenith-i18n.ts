import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import zhTW from "./benzenith-locales/zh-TW.json";
import zhCN from "./benzenith-locales/zh-CN.json";
import ja from "./benzenith-locales/ja.json";
import en from "./benzenith-locales/en.json";

export const benzenithLocales = ["zh-TW", "zh-CN", "ja", "en"] as const;
export type BenzenithLocale = typeof benzenithLocales[number];

const resources = {
  "zh-TW": { translation: zhTW },
  "zh-CN": { translation: zhCN },
  ja: { translation: ja },
  en: { translation: en },
} as const;

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    fallbackLng: "zh-TW",
    lng: "zh-TW",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
}

export default i18n;
