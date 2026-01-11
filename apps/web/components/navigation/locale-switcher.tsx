import { useLocale, useTranslations } from '@repo/i18n';
import { routing } from '@repo/i18n/routing';
import { LocaleSwitcherSelect } from './locale-switcher-select';

export function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      {routing.locales.map((cur) => (
        <option key={cur} value={cur}>
          {t('locale', { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
