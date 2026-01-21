import { useTranslations } from '@invicity/i18n';

export default function NotFound() {
  const t = useTranslations('notFound');
  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
