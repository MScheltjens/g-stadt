import { Locale } from '@repo/i18n';
import { getTranslations, setRequestLocale } from '@repo/i18n/server';
import { getEvents } from '@/lib/api';
import { CardList } from '@/components/common/card-list';
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
      <CardList
        muted
        items={events.map((event) => ({
          title: event.title,
          description: event.description,
          pathname: '/events/[slug]',
          slug: event.slug,
        }))}
      />
    </>
  );
}
