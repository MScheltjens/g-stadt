import { PageSectionWrapper } from '@/components/common/page-section-wrapper';
import { getEvents } from '@/lib/api';
import { Locale } from '@repo/i18n';
import { getTranslations, setRequestLocale } from '@repo/i18n/server';
import { ItemGrid } from '@/components/common/item-grid';

type EventsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function EventsPage({ params }: EventsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations('events');
  const events = await getEvents();

  return (
    <PageSectionWrapper title={t('title')}>
      <ItemGrid
        items={events}
        locale={locale as Locale}
        basePath="/events/[slug]"
      />
    </PageSectionWrapper>
  );
}
