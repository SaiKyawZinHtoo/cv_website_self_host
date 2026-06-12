import { en } from "./en";
import { my } from "./my";
import type { Locale, Translations } from "./types";

export const translations: Record<Locale, Translations> = { en, my };

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}

export type { Locale, Theme, Translations, TechCategoryKey } from "./types";
