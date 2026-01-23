export const LOCALES = {
  EN: 'en',
  DE: 'de',
  FR: 'fr',
} as const;

export type Locale = (typeof LOCALES)[keyof typeof LOCALES];

export const DEFAULT_LOCALE = LOCALES.DE;

export const SUPPORTED_LOCALES = Object.values(LOCALES);

export const LOCALE_NAMES: Record<Locale, string> = {
  [LOCALES.EN]: 'English',
  [LOCALES.DE]: 'Deutsch',
  [LOCALES.FR]: 'Français',
};

export const LOCALE_FLAGS: Record<Locale, string> = {
  [LOCALES.EN]: '🇬🇧',
  [LOCALES.DE]: '🇩🇪',
  [LOCALES.FR]: '🇫🇷',
};

export const LOCALE_PATHS: Record<Locale, string> = {
  [LOCALES.EN]: 'en',
  [LOCALES.DE]: 'de',
  [LOCALES.FR]: 'fr',
};

export const PATHS_LOCALE: Record<string, Locale> = Object.entries(
  LOCALE_PATHS,
).reduce(
  (acc, [locale, path]) => {
    acc[path] = locale as Locale;
    return acc;
  },
  {} as Record<string, Locale>,
);
