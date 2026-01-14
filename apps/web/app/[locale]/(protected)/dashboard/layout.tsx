import { checkUserRole } from '@/lib/auth';
import { redirect } from '@repo/i18n/navigation';
import { getTranslations, setRequestLocale } from '@repo/i18n/server';
import type { LayoutProps, MetadataProps } from '@/types/next-page';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'dashboard.meta',
  });
  return {
    title: t('title'),
    description: t('description'),
  };
}

type DashboardLayoutProps = LayoutProps & {
  user: React.ReactNode;
  admin: React.ReactNode;
  staff: React.ReactNode;
};

export default async function DashboardLayout({
  user,
  admin,
  staff,
  params,
}: DashboardLayoutProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const role = await checkUserRole();

  if (!role) {
    redirect({ href: '/register', locale });
  }

  return (
    <>
      {process.env.NODE_ENV === 'development' && (
        <div style={{ background: '#ffe', padding: 8, marginBottom: 8 }}>
          <strong>Debug:</strong> Role detected: {role}
        </div>
      )}

      {role === 'ADMIN' && admin}
      {role === 'STAFF' && staff}
      {role === 'CITIZEN' && user}
    </>
  );
}
