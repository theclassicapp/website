// Supported languages, matching Classic app's SUPPORTED_LANGUAGES.
// Sorted alphabetically by native name.
export const languages = {
  ar: 'العربية',
  de: 'Deutsch',
  en: 'English',
  es: 'español',
  fr: 'français',
  he: 'עברית',
  hi: 'हिन्दी',
  id: 'Indonesia',
  it: 'italiano',
  ja: '日本語',
  ko: '한국어',
  nl: 'Nederlands',
  pl: 'polski',
  'pt-BR': 'português (Brasil)',
  ru: 'русский',
  th: 'ไทย',
  tr: 'Türkçe',
  vi: 'Tiếng Việt',
  'zh-CN': '中文（简体）',
  'zh-TW': '中文（繁體）',
} as const;

export type Locale = keyof typeof languages;
export const defaultLocale: Locale = 'en';

import ar from './ar';
import de from './de';
import en from './en';
import es from './es';
import fr from './fr';
import he from './he';
import hi from './hi';
import id from './id';
import it from './it';
import ja from './ja';
import ko from './ko';
import nl from './nl';
import pl from './pl';
import ptBR from './pt-BR';
import ru from './ru';
import th from './th';
import tr from './tr';
import vi from './vi';
import zhCN from './zh-CN';
import zhTW from './zh-TW';

const translations: Record<Locale, Record<string, string>> = {
  ar, de, en, es, fr, he, hi, id, it, ja,
  ko, nl, pl, 'pt-BR': ptBR, ru, th, tr, vi,
  'zh-CN': zhCN, 'zh-TW': zhTW,
};

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

// Get localized path (without base)
export function getLocalePath(locale: Locale, path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) {
    return cleanPath;
  }
  return `/${locale}${cleanPath}`;
}

// Combine base URL with path, handling the case when base is '/'
export function withBase(base: string, path: string): string {
  const normalizedBase = base === '/' ? '' : base;
  return `${normalizedBase}${path}`;
}
