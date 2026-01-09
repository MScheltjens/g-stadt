import { getServiceBySlug } from '@/lib/api';
import { Locale } from '@repo/i18n/index';
import { setRequestLocale } from '@repo/i18n/server';

type ServiceItemPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function ServiceItemPage({
  params,
}: ServiceItemPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale as Locale);
  const serviceItem = await getServiceBySlug(slug);

  return (
    <>
      <h1>{serviceItem.title}</h1>
      {/* <p>{new Date(serviceItem.).toLocaleDateString(locale)}</p> */}
      <p>{serviceItem.category}</p>
      {/* {serviceItem.imageUrl && <img src={serviceItem.imageUrl} alt={serviceItem.title} />} */}
    </>
  );
}
