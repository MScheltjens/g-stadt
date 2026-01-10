import { Locale } from '@repo/i18n';
import { getTranslations, setRequestLocale } from '@repo/i18n/server';
import { getEvents } from '@/lib/api';
import { ItemCardList } from '@/components/common/item-card-list';
import { formatDate } from '@/lib/utils';
import { PageSectionWrapper } from '@/components/common/page-section-wrapper';

type EventsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function EventsPage({ params }: EventsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations('events');

  const events = await getEvents();

  return (
    <PageSectionWrapper title={t('title')} description={t('description')} muted>
      <ItemCardList
        items={events.map((event) => ({
          key: event.id,
          title: event.title,
          description: event.description,
          date: formatDate(event.date.toDateString()),
          slug: event.slug,
          pathname: '/events/[slug]',
        }))}
      />
    </PageSectionWrapper>
  );
}
