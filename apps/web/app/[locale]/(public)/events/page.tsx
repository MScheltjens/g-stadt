import { PageSectionWrapper } from '@/components/page-section-wrapper';
import { getEvents } from '@/lib/api';
import { Locale } from '@repo/i18n';
import { getTranslations, setRequestLocale } from '@repo/i18n/server';
import { ItemGrid } from '@/components/item-grid';

type EventsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function EventsPage({ params }: EventsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations('events');
  const events = await getEvents();

  return (
    <main className="container mx-auto py-8 max-w-6xl">
      <PageSectionWrapper title={t('title')}>
        <ItemGrid
          items={events}
          locale={locale as Locale}
          basePath="/events/[slug]"
        />
      </PageSectionWrapper>
    </main>
  );
}
