import { getTranslations, setRequestLocale } from '@repo/i18n/server';
import type { PageProps } from '@/types/next-page';

export default async function ContactPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);
  const t = await getTranslations('contact');

  return (
    <>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </>
  );
}
