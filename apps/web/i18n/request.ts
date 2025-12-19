import { hasLocale, messages } from '@repo/i18n';
import { routing } from '@repo/i18n/routing';
import { getRequestConfig } from '@repo/i18n/server';

export default getRequestConfig(async ({ requestLocale }) => {
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
