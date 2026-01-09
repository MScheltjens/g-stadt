import { PageSectionWrapper } from '@/components/common/page-section-wrapper';
import { getServices } from '@/lib/api';
import { Locale } from '@repo/i18n';
import { getTranslations, setRequestLocale } from '@repo/i18n/server';
import { ItemGrid } from '@/components/common/item-grid';

type ServicesPageProps = {
  params: Promise<{ locale: string }>;
};
export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  const t = await getTranslations('services');
  setRequestLocale(locale as Locale);
  const services = await getServices();

  return (
    <PageSectionWrapper title={t('title')} description={t('description')}>
      <ItemGrid
        items={services}
        locale={locale as Locale}
        basePath="/services/[slug]"
      />
    </PageSectionWrapper>
  );
}
