import { setRequestLocale } from '@repo/i18n/server';
import { getServiceBySlug } from '@/lib/api';
import type { PageProps } from '@/types/next-page';

type ServiceItemPageProps = PageProps<{
  slug: string;
}>;

export default async function ServiceItemPage({
  params,
}: ServiceItemPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <h1>Service</h1>;
}
