import { Locale } from '@repo/i18n';
import { setRequestLocale } from '@repo/i18n/server';
import { getEventBySlug } from '@/lib/api';

type EventPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function EventPage({ params }: EventPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale as Locale);

  const event = await getEventBySlug(slug);

  return (
    <>
      <h1>Event</h1>
      <pre>{JSON.stringify(event, null, 2)}</pre>
    </>
  );
}
