import { messages } from '@invicity/i18n';
import { hasLocale } from '@invicity/i18n/next-intl';
import { routing } from '@invicity/i18n/routing';
import { getRequestConfig } from '@invicity/i18n/server';

export const requestConfig = getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: messages[locale as keyof typeof messages],
    timeZone: 'Europe/Berlin',
    now: new Date(),
  };
});

export default requestConfig;
