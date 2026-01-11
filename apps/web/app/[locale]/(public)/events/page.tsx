import { Locale } from '@repo/i18n';
import { getTranslations, setRequestLocale } from '@repo/i18n/server';
import { getEvents } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import { SectionCard } from '@/components/common/section-card';
import { PublicPageHeader } from '@/components/common/public-page-header';

type EventsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function EventsPage({ params }: EventsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations('events');

  const events = await getEvents();

  return (
    <>
      <PublicPageHeader title={t('title')} description={t('description')} />
      <SectionCard
        muted
        items={events.map((event) => ({
          key: event.id,
          title: event.title,
          description: event.description,
          pathname: '/events/[slug]',
          icon: 'Calendar',
          slug: event.slug,
          footer: formatDate(event.date.toLocaleDateString()),
        }))}
      />
    </>
  );
}
