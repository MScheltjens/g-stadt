import { getTranslations, setRequestLocale } from '@repo/i18n/server';
import { PublicPageHeader } from '@/components/common/public-page-header';

type ServicesPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('services');

  return (
    <>
      <PublicPageHeader title={t('title')} description={t('description')} />
    </>
  );
}
