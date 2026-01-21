'use client';

import { Link, useLocale, useTranslations } from '@invicity/i18n';
import { Mail } from '@invicity/ui/components/icons';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@invicity/ui/components/navigation-menu';
import { cn } from '@invicity/ui/lib/utils';

import { HeaderProps } from '@/components/layout/header/header';

export function Navbar({ categories }: HeaderProps) {
  const locale = useLocale();
  const t = useTranslations('navbar');
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="flex items-center ">
        {/* Contact Categories Dropdown */}
        {categories?.length > 0 && (
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                'bg-transparent px-4 text-sm font-medium rounded-none',
                'hover:bg-transparent focus:bg-transparent',
                'border-b-2 border-transparent data-[state=open]:border-primary',
              )}
            >
              <Mail className="h-4 w-4" />
              <span className="hidden md:inline-block ml-2">
                {t('contact')}
              </span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="bg-white shadow-lg rounded-md mt-2 min-w-[200px] z-50">
                {categories.map((cat) => {
                  return (
                    <Link
                      key={cat.id}
                      // @ts-expect-error -- TypeScript will validate that only known `params`
                      // are used in combination with a given `pathname`. Since the two will
                      // always match for the current route, we can skip runtime checks.
                      href={
                        cat.translations.filter(
                          (translation) => translation.locale === locale,
                        )[0]?.slug
                          ? `/contact/${cat.translations.filter((translation) => translation.locale === locale)[0]?.slug}`
                          : `/contact`
                      }
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {
                        cat.translations.filter(
                          (translation) => translation.locale === locale,
                        )[0]?.label
                      }
                    </Link>
                  );
                })}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
