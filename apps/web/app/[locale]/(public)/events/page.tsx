import { getEvents } from '@/lib/api';
import { Locale } from '@repo/i18n';
import { setRequestLocale } from '@repo/i18n/server';
import { Card, CardHeader } from '@repo/ui/components/card';

type EventsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function EventsPage({ params }: EventsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const events = await getEvents();
  return (
    <main className="container mx-auto py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6">Events</h1>
      {events.map((event) => (
        <Card key={event.id} className="mt-4">
          <CardHeader>{event.title}</CardHeader>
        </Card>
      ))}
    </main>
  );
}
