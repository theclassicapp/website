export const languages = {
  en: 'English',
  zh: '中文',
} as const;

export type Locale = keyof typeof languages;
export const defaultLocale: Locale = 'en';

export type TranslationKey = keyof typeof import('./en').default;

import en from './en';
import zh from './zh';

const translations: Record<Locale, Record<string, string>> = { en, zh };

// Get translated text by key
export function t(locale: Locale | undefined, key: string): string {
  const lang = locale ?? defaultLocale;
  return translations[lang]?.[key] ?? translations[defaultLocale][key] ?? key;
}

// Get the locale from Astro.currentLocale
export function getLocale(currentLocale: string | undefined): Locale {
  if (currentLocale && currentLocale in languages) {
    return currentLocale as Locale;
  }
  return defaultLocale;
}

// Get localized path
export function getLocalePath(locale: Locale, path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) {
    return cleanPath;
  }
  return `/${locale}${cleanPath}`;
}
