'use client';

import { Link, usePathname } from '@repo/i18n/navigation';
import { type Locale, useTranslations } from '@repo/i18n';
import { NAVIGATION_LINKS } from '@repo/types';
import { MobileSidebarNav } from './mobile-sidebar-nav';
import { useState } from 'react';
import { Menu } from '@repo/ui/components/icons';
import { cn } from '@repo/ui/lib/utils';
import { Button } from '@repo/ui/components/button';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@repo/ui/components/navigation-menu';

export const Navbar = ({ locale }: { locale: Locale }) => {
  const t = useTranslations('navbar');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const normalizedPathname =
    pathname.replace(new RegExp(`^/${locale}`), '') || '/';

  const isHome = normalizedPathname === '/';

  const isActive = (href: string) => {
    if (href === '/') return isHome;
    return (
      normalizedPathname === href || normalizedPathname.startsWith(`${href}/`)
    );
  };

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
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          {NAVIGATION_LINKS.filter(
            (item) => !(item.href === '/' && isHome),
          ).map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  className={cn(
                    'px-4 py-2 text-xs uppercase tracking-wide font-medium transition-colors text-secondary',
                    isActive(item.href)
                      ? 'text-primary bg-secondary'
                      : 'hover:text-primary',
                  )}
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
