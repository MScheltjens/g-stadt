import { Locale } from '@repo/i18n';
import { setRequestLocale } from '@repo/i18n/server';

type EventsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function EventsPage({ params }: EventsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <>Events</>;
}
