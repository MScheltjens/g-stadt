import { useTranslations } from '@repo/i18n/next-intl';

export default function NotFound() {
  const t = useTranslations('not-found');
  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
