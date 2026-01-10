import { Footer } from '@/components/common/footer';
import { Header } from '@/components/common/header';
import { Locale } from '@repo/i18n';
import { setRequestLocale } from '@repo/i18n/server';

export default async function PublicLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <>
      <Header locale={locale as Locale} />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
