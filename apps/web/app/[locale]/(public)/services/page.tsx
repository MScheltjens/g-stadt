import { Locale } from '@repo/i18n';
import { getTranslations, setRequestLocale } from '@repo/i18n/server';
import { getServices } from '@/lib/api';
import { ItemCardList } from '@/components/common/item-card-list';
import { formatDate } from '@/lib/utils';
import { PageSectionWrapper } from '@/components/common/page-section-wrapper';

type ServicesPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations('services');
  const services = await getServices();

  return (
    <PageSectionWrapper title={t('title')} description={t('description')} muted>
      <ItemCardList
        items={services.map((item) => ({
          key: item.id,
          title: item.title,
          description: item.description,
          date: item.createdAt
            ? formatDate(new Date(item.createdAt).toDateString())
            : undefined,
          linkLabel: 'Read more',
          slug: item.slug,
          pathname: '/services/[slug]',
        }))}
      />
    </PageSectionWrapper>
  );
}
