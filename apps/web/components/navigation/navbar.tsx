'use client';

import { Link, usePathname } from '@repo/i18n/navigation';
import { type Locale, useTranslations } from '@repo/i18n';
import { NAVIGATION_LINKS } from '@repo/types';
import { cn } from '@repo/ui/lib/utils';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@repo/ui/components/navigation-menu';

export function Navbar({ locale }: { locale: Locale }) {
  const t = useTranslations('navbar');
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
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {NAVIGATION_LINKS.filter((item) => !(item.href === '/' && isHome)).map(
          (item) => (
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
          ),
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
