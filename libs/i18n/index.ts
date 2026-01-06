import { en, ja, zhCN, zhTW } from './locales'

// Re-export from config for consistency
export { config } from '@config'

export const defaultLocale = 'en'
export const locales = ['zh-TW', 'zh-CN', 'ja', 'en'] as const

export type SupportedLocale = typeof locales[number]

// 基于英文翻译自动推断类型
export type Translations = typeof en

export const translations = {
  'zh-TW': zhTW,
  'zh-CN': zhCN,
  ja,
  en
} as const

export function isValidLocale(locale: string): locale is SupportedLocale {
  return locales.includes(locale as SupportedLocale)
}

// 类型安全的翻译函数
export function getTranslation(locale: SupportedLocale): Translations {
  return translations[locale] as Translations
}

export * from './locales' 
