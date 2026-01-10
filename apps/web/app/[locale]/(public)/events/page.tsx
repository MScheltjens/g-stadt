import { Locale } from '@repo/i18n';
import { setRequestLocale } from '@repo/i18n/server';
import { getEvents } from '@/lib/api';

type EventsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function EventsPage({ params }: EventsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const events = await getEvents();

  return (
    <>
      <h1>Events</h1>
      <pre>{JSON.stringify(events, null, 2)}</pre>
    </>
  );
}
