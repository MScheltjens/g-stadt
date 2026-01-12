import { setRequestLocale } from '@repo/i18n/server';
import { getEventBySlug } from '@/lib/api';
import type { PageProps } from '@/types/next-page';

type EventPageProps = PageProps<{
  slug: string;
}>;

export default async function EventPage({ params }: EventPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const event = await getEventBySlug(slug);

  return (
    <>
      <h1>Event</h1>
      <pre>{JSON.stringify(event, null, 2)}</pre>
    </>
  );
}
