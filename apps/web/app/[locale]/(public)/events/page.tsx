import { Locale } from '@repo/i18n';
import { getTranslations, setRequestLocale } from '@repo/i18n/server';
import { getEvents } from '@/lib/api';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import { Link } from '@repo/i18n/navigation';
import { buttonVariants } from '@repo/ui/components/button';
import {
  ArrowBigRight,
  ArrowRight,
  ArrowRightFromLine,
} from '@repo/ui/components/icons';
import { Badge } from '@repo/ui/components/badge';
import { format } from 'path';
import { formatDate } from '@/lib/utils';
import { PageSectionWrapper } from '@/components/common/page-section-wrapper';

type EventsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function EventsPage({ params }: EventsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations('events');

  const events = await getEvents();

  return (
    <PageSectionWrapper title={t('title')} description={t('description')} muted>
      <div className="flex flex-wrap gap-6 mt-6">
        {events.map((event) => (
          <Card key={event.id} className="w-80 h-50 flex flex-col">
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>{event.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              {/* Additional content can go here */}
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <Badge variant="default">
                {formatDate(event.date.toDateString())}
              </Badge>
              <Link
                className={buttonVariants({ variant: 'link' })}
                href={{
                  pathname: '/events/[slug]',
                  params: { slug: event.slug },
                }}
              >
                <span>{t('readMore')}</span>
                <ArrowRight className="mr-2 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </PageSectionWrapper>
  );
}
