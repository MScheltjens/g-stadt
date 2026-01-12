'use client';

import { NAV_ITEMS } from '@repo/types';
import { Link, usePathname } from '@repo/i18n/navigation';
import { useTranslations } from '@repo/i18n/next-intl';

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@repo/ui/components/navigation-menu';

import { cn } from '@repo/ui/lib/utils';

export function Navbar() {
  const t = useTranslations('navbar');
  const pathname = usePathname();

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="hidden md:flex items-center ">
        {NAV_ITEMS.map((item) => (
          <NavigationMenuItem key={item.label}>
            <NavigationMenuTrigger
              className={cn(
                'bg-transparent px-4 text-sm font-medium',
                'hover:bg-transparent focus:bg-transparent',
                'border-b-2 border-transparent data-[state=open]:border-primary',
              )}
            >
              {t(item.label)}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col gap-1">
                {item.children.map((child) => (
                  <li key={child.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        // @ts-expect-error -- TypeScript will validate that only known `params`
                        // are used in combination with a given `pathname`. Since the two will
                        // always match for the current route, we can skip runtime checks.
                        href={child.href}
                        className={cn(
                          'block px-3 py-1.5 text-sm rounded-sm',
                          'hover:bg-muted',
                          pathname === child.href && 'font-medium text-primary',
                        )}
                      >
                        {t(child.label)}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
