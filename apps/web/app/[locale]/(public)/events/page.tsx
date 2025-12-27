import { PageSectionWrapper } from '@/components/page-section-wrapper';
import { getEvents } from '@/lib/api';
import { Locale } from '@repo/i18n';
import { getTranslations, setRequestLocale } from '@repo/i18n/server';
import { Card, CardDescription, CardHeader } from '@repo/ui/components/card';

type EventsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function EventsPage({ params }: EventsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations('home.events');

  const events = await getEvents();
  return (
    <main className="container mx-auto py-8 max-w-6xl">
      <PageSectionWrapper title={t('title')}>
        {events.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="p-4">
                <CardHeader className="text-xl font-semibold mb-2">
                  {event.title}
                </CardHeader>
                <CardDescription className="text-gray-600">
                  {event.description}
                </CardDescription>
              </Card>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded shadow p-4">No events to show.</div>
        )}
      </PageSectionWrapper>
    </main>
  );
}
