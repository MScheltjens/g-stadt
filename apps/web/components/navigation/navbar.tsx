'use client';

import { Link, usePathname } from '@repo/i18n/navigation';
import { type Locale, useTranslations } from '@repo/i18n';
import { NAVBAR_STRUCTURAL_LINKS } from '@repo/types';
import { cn } from '@repo/ui/lib/utils';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@repo/ui/components/navigation-menu';
import { MobileNav } from './mobile-nav';
import { buttonVariants } from '@repo/ui/components/button';

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
    <nav>
      <NavigationMenu>
        {/* Mobile */}
        <MobileNav isHome={isHome} isActive={isActive} />

        {/* Desktop */}
        <NavigationMenuList className="hidden md:flex gap-8">
          {NAVBAR_STRUCTURAL_LINKS.filter(
            (item) => !(item.href === '/' && isHome),
          ).map((item) => (
            <NavigationMenuItem key={item.href} className="h-full">
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  className={cn(
                    'relative py-3 px-3 text-sm font-medium transition-colors h-full',
                    'border-b-2 border-transparent',
                    'text-foreground',
                    isActive(item.href)
                      ? 'border-primary text-primary'
                      : 'hover:border-primary/40 hover:text-primary',
                  )}
                >
                  {t(item.label)}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
