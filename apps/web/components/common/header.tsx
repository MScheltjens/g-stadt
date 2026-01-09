import { Navbar } from '@/components/navigation/navbar';
import { Locale } from '@repo/i18n/index';

export function Header({ locale }: { locale: Locale }) {
  return (
    <header className="w-full border-b-2 bg-primary">
      <div className="mx-auto flex max-w-7xl items-center justify-end">
        <Navbar locale={locale} />
      </div>
    </header>
  );
}
