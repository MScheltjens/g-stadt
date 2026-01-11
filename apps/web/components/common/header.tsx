import { Navbar } from '@/components/navigation/navbar';
import { Locale } from '@repo/i18n';
import { Link } from '@repo/i18n/navigation';
import { getTranslations } from '@repo/i18n/server';
import { buttonVariants } from '@repo/ui/components/button';
import { LocaleSwitcher } from '../navigation/locale-switcher';
import { LogIn } from '@repo/ui/components/icons';

export function Header({ locale }: { locale: Locale }) {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-base font-semibold tracking-tight text-foreground"
          ></Link>

          {/* Right side navigation */}
          <div className="flex items-center gap-6">
            <Navbar locale={locale} />
            {/* Utilities */}
            <LocaleSwitcher />
            <Link
              href="/login"
              className={buttonVariants({ variant: 'link', size: 'sm' })}
            >
              {/* User icon from lucide-react via @repo/ui/icons */}
              <span className="sr-only">Sign in</span>
              <LogIn />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
