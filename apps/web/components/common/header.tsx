import { Navbar } from '@/components/navigation/navbar';
import { Locale } from '@repo/i18n/index';

export function Header({ locale }: { locale: Locale }) {
  return (
    <header className="bg-primary mx-auto px-4 flex items-center justify-end">
      <Navbar locale={locale} />
    </header>
  );
}
