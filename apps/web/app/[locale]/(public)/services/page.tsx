import { PageSectionWrapper } from '@/components/page-section-wrapper';
import { getServices } from '@/lib/api';
import { Locale } from '@repo/i18n';
import { getTranslations, setRequestLocale } from '@repo/i18n/server';
import { Card, CardDescription, CardHeader } from '@repo/ui/components/card';

type ServicesPageProps = {
  params: Promise<{ locale: string }>;
};
export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  const t = await getTranslations('services');
  setRequestLocale(locale as Locale);
  const services = await getServices();

  return (
    <main className="container mx-auto py-8 max-w-6xl">
      <PageSectionWrapper title={t('title')} description={t('description')}>
        {services.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="p-4">
                <CardHeader className="text-xl font-semibold mb-2">
                  {service.title}
                </CardHeader>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </Card>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded shadow p-4">
            No services to show.
          </div>
        )}
      </PageSectionWrapper>
    </main>
  );
}
