'use client';

import { NAV_ITEMS } from '@repo/types';
import { Link, usePathname } from '@repo/i18n/navigation';
import { useTranslations } from '@repo/i18n';
import { Mail, MapPin, AlertCircle } from '@repo/ui/components/icons';
import { cn } from '@repo/ui/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@repo/ui/components/navigation-menu';

const iconMap: Record<string, React.ReactNode> = {
  home: <MapPin className="h-4 w-4" />,
  services: <AlertCircle className="h-4 w-4" />,
  contact: <Mail className="h-4 w-4" />,
};

export function NavbarIcons() {
  const t = useTranslations('navbar');
  const pathname = usePathname();
  return (
    <nav className="md:hidden">
      <NavigationMenu viewport={false}>
        <NavigationMenuList className="flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuTrigger
                className={cn(
                  'px-2',
                  'bg-transparent text-sm font-sm',
                  'hover:bg-transparent focus:bg-transparent',
                  'border-b-2 border-transparent data-[state=open]:border-primary',
                )}
              >
                {iconMap[item.icon]}
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
                            pathname === child.href &&
                              'font-medium text-primary',
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
    </nav>
  );
}
