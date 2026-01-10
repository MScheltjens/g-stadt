import { Locale } from '@repo/i18n';
import { setRequestLocale } from '@repo/i18n/server';

type EventPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function EventPage({ params }: EventPageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <>Event</>;
}
