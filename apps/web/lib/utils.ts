import { Locale } from '@invicity/constants';

// Formats a date string (ISO 8601) to 'DD/MM/YYYY' format //
export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

// Normalizes locale strings to supported locales: 'en', 'fr', 'de' //

export function normalizeLocale(input: string | undefined): Locale {
  const allowed = ['en', 'fr', 'de'];
  if (!input) return 'en';
  const base = allowed.includes(input) ? input : (input.split('-')[0] ?? '');
  return (allowed.includes(base) ? base : 'en') as Locale;
}
