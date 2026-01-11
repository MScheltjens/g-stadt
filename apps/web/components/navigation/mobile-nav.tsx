'use client';

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@repo/ui/components/sheet';
import { Menu } from '@repo/ui/components/icons';
import { Link } from '@repo/i18n/navigation';
import { Button } from '@repo/ui/components/button';
import { NAVBAR_STRUCTURAL_LINKS } from '@repo/types';
import {
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@repo/ui/components/navigation-menu';
import { cn } from '@repo/ui/lib/utils';
import { useTranslations } from '@repo/i18n';

interface MobileNavProps {
  isHome: boolean;
  isActive: (href: string) => boolean;
}

export function MobileNav({ isHome = false, isActive }: MobileNavProps) {
  const t = useTranslations('navbar');

  return (
    <Sheet>
      {/* Trigger */}
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" aria-label={t('openMenu')}>
          <Menu className="h-6 w-6 text-primary-foreground" />
        </Button>
      </SheetTrigger>

      {/* Panel */}
      <SheetContent side="left" className="p-0 w-72 bg-background shadow-lg">
        <SheetHeader className="border-b border-border">
          <SheetTitle className="px-6 py-4 text-lg font-semibold">
            {t('menu')}
          </SheetTitle>
        </SheetHeader>

        {/* Navigation */}
        <NavigationMenuList className="flex flex-col py-2">
          {NAVBAR_STRUCTURAL_LINKS.filter(
            (item) => !(item.href === '/' && isHome),
          ).map((item) => (
            <NavigationMenuItem key={item.href} className="w-full">
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center  px-6 py-4 text-sm uppercase tracking-wide transition-colors',
                    'text-foreground',
                    isActive(item.href)
                      ? 'bg-muted text-primary font-semibold'
                      : 'hover:bg-muted/60',
                  )}
                >
                  {t(item.label)}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </SheetContent>
    </Sheet>
  );
}
