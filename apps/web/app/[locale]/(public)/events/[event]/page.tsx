type EventPageProps = {
  params: Promise<{ locale: string; eventSlug: string }>;
};

export default async function EventPage({ params }: EventPageProps) {
  const { locale, eventSlug } = await params;

  return <div>Event Pag</div>;
}
