import { Locale } from '@repo/i18n';
import { getTranslations, setRequestLocale } from '@repo/i18n/server';
import { getServices } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import { CardList } from '@/components/common/card-list';
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
      <CardList
        muted
        items={services.map((service) => ({
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
