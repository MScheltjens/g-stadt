'use client';

import { Link, usePathname } from '@repo/i18n/navigation';
import { type Locale, useTranslations } from '@repo/i18n';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@repo/ui/components/navigation-menu';

import { NAVIGATION_LINKS } from '@repo/types';
import { MobileSidebarNav } from './mobile-sidebar-nav';
import { useState } from 'react';
import { Menu } from '@repo/ui/components/icons';
import { cn } from '@repo/ui/lib/utils';
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from 'next/navigation';
import { NavigationLink } from './navigation-link';

export const Navbar = ({ locale }: { locale: Locale }) => {
  const t = useTranslations('navbar');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  console.log('Current pathname:', pathname);
  const normalizedPathname = pathname?.split('/')[1];
  console.log('Normalized pathname:', normalizedPathname);
  const segments = useSelectedLayoutSegments();
  console.log('Selected layout segment:', segments);
  const activeSegment = segments[1];
  console.log('Active segment:', activeSegment);

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        className="md:hidden p-2 text-2xl focus:outline-none"
        aria-label="Open menu"
        onClick={() => setSidebarOpen(true)}
      >
        <span aria-hidden="true">
          <Menu className="text-secondary" />
        </span>
      </button>
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
                'inline-block px-4 py-3 transition-colors',
                normalizedPathname === item.href.replace('/', '')
                  ? 'text-white'
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
