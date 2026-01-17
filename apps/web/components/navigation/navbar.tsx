'use client';

import { NAV_ROUTES } from '@invicity/constants';
import { Link } from '@invicity/i18n/navigation';
import { useTranslations } from '@invicity/i18n/next-intl';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  // NavigationMenuContent,
  // NavigationMenuLink,
} from '@invicity/ui/components/navigation-menu';
import { cn } from '@invicity/ui/lib/utils';

export function Navbar() {
  const t = useTranslations('navbar');
  // const pathname = usePathname();
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="hidden md:flex items-center ">
        {NAV_ROUTES.map((item) => (
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
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
