import { Navbar } from '@/components/navbar';
import { Locale } from '@repo/i18n/index';

export const Header = ({ locale }: { locale: Locale }) => (
  <header className="bg-primary mx-auto px-4 flex items-center justify-end">
    <Navbar locale={locale} />
  </header>
);
