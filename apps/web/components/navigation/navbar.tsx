'use client';

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
import { ServiceCategory } from '@repo/contracts';

export const NAV_ITEMS = [
  {
    label: 'services',
    href: '/services',
    icon: 'ExclamationCircle',
  },
  { label: 'contact', href: '/contact', icon: 'Mail' },
] as const;

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
                'bg-transparent px-4 text-sm font-medium rounded-none',
                'hover:bg-transparent focus:bg-transparent',
                'border-b-2 border-transparent data-[state=open]:border-primary',
              )}
            >
              <Link href={item.href} className="block">
                {t(item.label)}
              </Link>
            </NavigationMenuTrigger>
            {/* <NavigationMenuContent>
              <ul className="flex flex-col gap-1">
                {item.children.map((child) => (
                  <li key={child.href}>
                    <NavigationMenuLink asChild className="rounded-none">
                      <Link
                        // @ts-expect-error -- TypeScript will validate that only known `params`
                        // are used in combination with a given `pathname`. Since the two will
                        // always match for the current route, we can skip runtime checks.
                        href={child.href}
                        className={cn(
                          'block px-3 py-1.5 text-sm',
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
            </NavigationMenuContent> */}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
