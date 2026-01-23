import { getRequestConfig, hasLocale, MESSAGES, routing } from '@kwh/i18n';

export const requestConfig = getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: MESSAGES[locale as keyof typeof MESSAGES],
    timeZone: 'Europe/Berlin',
    now: new Date(),
  };
});

export default requestConfig;
