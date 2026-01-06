"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";

import i18n, { benzenithLocales, type BenzenithLocale } from "@/lib/benzenith-i18n";

type BenzenithI18nProviderProps = {
  lang: string;
  children: ReactNode;
};

export default function BenzenithI18nProvider({
  lang,
  children,
}: BenzenithI18nProviderProps) {
  useEffect(() => {
    const nextLang = benzenithLocales.includes(lang as BenzenithLocale)
      ? (lang as BenzenithLocale)
      : "zh-TW";

    if (i18n.language !== nextLang) {
      i18n.changeLanguage(nextLang);
    }

    if (typeof document !== "undefined") {
      document.documentElement.lang = nextLang;
    }
  }, [lang]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
