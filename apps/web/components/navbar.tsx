'use client';

import { Link } from '@repo/i18n/navigation';
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

export const Navbar = ({ locale }: { locale: Locale }) => {
  const t = useTranslations('navbar');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      {/* Mobile hamburger button */}
      <button
        className="md:hidden p-2 text-2xl focus:outline-none"
        aria-label="Open menu"
        onClick={() => setSidebarOpen(true)}
      >
        <span aria-hidden="true">☰</span>
      </button>
      <MobileSidebarNav
        locale={locale}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      {/* Desktop nav */}
      <NavigationMenu className="py-2 hidden md:block">
        <NavigationMenuList>
          {NAVIGATION_LINKS.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  locale={locale}
                  className="px-4 py-2 text-gray-800 hover:text-primary-600"
                >
                  {t(item.label)}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};
