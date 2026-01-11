import { Locale } from '@repo/i18n';
import { getTranslations, setRequestLocale } from '@repo/i18n/server';
import { getServices } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import { SectionCard } from '@/components/common/section-card';
import { PublicPageHeader } from '@/components/common/public-page-header';

type ServicesPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations('services');
  const services = await getServices();

  return (
    <>
      <PublicPageHeader title={t('title')} description={t('description')} />
      <SectionCard
        muted
        items={services.map((service) => ({
          key: service.id,
          title: service.title,
          description: service.description,
          pathname: '/services/[slug]',
          slug: service.slug,
          footer: formatDate(service.createdAt.toLocaleDateString()),
        }))}
      />
    </>
  );
}
