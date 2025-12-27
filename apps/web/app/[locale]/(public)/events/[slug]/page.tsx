import { getEventBySlug } from '@/lib/api';
import { Locale } from '@repo/i18n/index';
import { setRequestLocale } from '@repo/i18n/server';

type EventPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function EventPage({ params }: EventPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale as Locale);
  const event = await getEventBySlug(slug);

  return (
    <main>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>{new Date(event.date).toLocaleDateString(locale)}</p>
      <p>{event.location}</p>
      <p>{event.category}</p>
      {/* {event.imageUrl && <img src={event.imageUrl} alt={event.title} />} */}
    </main>
  );
}
