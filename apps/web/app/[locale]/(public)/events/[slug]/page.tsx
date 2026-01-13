import { setRequestLocale } from '@repo/i18n/server';
import type { PageProps } from '@/types/next-page';

type EventPageProps = PageProps<{
  slug: string;
}>;

export default async function EventPage({ params }: EventPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <h1>Event</h1>;
}
