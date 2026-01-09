'use client';

import { usePathname } from '@repo/i18n/navigation';
import { type Locale, useTranslations } from '@repo/i18n';
import { NAVIGATION_LINKS } from '@repo/types';
import { MobileSidebarNav } from './mobile-sidebar-nav';
import { useState } from 'react';
import { Menu } from '@repo/ui/components/icons';
import { cn } from '@repo/ui/lib/utils';
import { NavigationLink } from './navigation-link';
import { Button } from '@repo/ui/components/button';

export const Navbar = ({ locale }: { locale: Locale }) => {
  const t = useTranslations('navbar');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const normalizedPathname = pathname?.slice(1) || '';

  return (
    <>
      {/* Mobile hamburger button */}
      <Button
        className="md:hidden p-2 text-2xl focus:outline-none"
        aria-label="Open menu"
        onClick={() => setSidebarOpen(true)}
      >
        <span aria-hidden="true">
          <Menu className="text-secondary" />
        </span>
      </Button>
      <MobileSidebarNav
        locale={locale}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Desktop nav */}
      <nav className="py-2 hidden md:block">
        {NAVIGATION_LINKS.length > 0 &&
          NAVIGATION_LINKS.map((item) => (
            <NavigationLink
              key={item.href}
              href={item.href}
              locale={locale}
              className={cn(
                'inline-block px-4 py-1 transition-colors',
                normalizedPathname === item.href.slice(1)
                  ? 'text-white border-b-2 border-white'
                  : 'text-gray-400 hover:text-gray-200',
              )}
            >
              {t(item.label)}
            </NavigationLink>
          ))}
      </nav>
    </>
  );
};
