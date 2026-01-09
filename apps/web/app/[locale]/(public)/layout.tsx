import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Locale } from '@repo/i18n/index';

export default async function PublicLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <>
      <Header locale={locale as Locale} />
      {children}
      <Footer />
    </>
  );
}
