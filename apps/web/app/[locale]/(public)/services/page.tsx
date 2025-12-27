import { getServices } from '@/lib/api';
import { Locale } from '@repo/i18n';
import { setRequestLocale } from '@repo/i18n/server';
import { Card, CardHeader } from '@repo/ui/components/card';

type ServicesPageProps = {
  params: Promise<{ locale: string }>;
};
export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const services = await getServices();
  return (
    <main className="container mx-auto py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6">Services</h1>
      {services.map((service) => (
        <Card key={service.id} className="mt-4">
          <CardHeader>{service.title}</CardHeader>
        </Card>
      ))}
      <div className="bg-white rounded shadow p-4">No services to show.</div>
    </main>
  );
}
