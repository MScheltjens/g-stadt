'use client';

import { Link, useTranslations } from '@invicity/i18n';
import { AlertCircle, Mail } from '@invicity/ui/components/icons';
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
  const t = useTranslations('navbar');
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="flex items-center ">
        {/* Service Categories Dropdown */}
        {categories?.service?.length > 0 && (
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                'bg-transparent text-sm font-medium rounded-none',
                'hover:bg-transparent focus:bg-transparent',
                'border-b-2 border-transparent data-[state=open]:border-primary',
              )}
            >
              <AlertCircle className="h-4 w-4" />
              <span className="hidden md:inline-block ml-2">
                {t('services')}
              </span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="bg-white shadow-lg rounded-md mt-2 min-w-[200px] z-50">
                {categories.service.map((cat) => (
                  <Link
                    key={cat.id}
                    // @ts-expect-error -- TypeScript will validate that only known `params`
                    // are used in combination with a given `pathname`. Since the two will
                    // always match for the current route, we can skip runtime checks.
                    href={
                      cat.translations[0]?.slug
                        ? `/services/${cat.translations[0].slug}`
                        : '#'
                    }
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {cat.translations[0]?.label || cat.id}
                  </Link>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )}

        {/* Contact Categories Dropdown */}
        {categories?.contact?.length > 0 && (
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
                {categories.contact.map((cat) => (
                  <Link
                    key={cat.id}
                    // @ts-expect-error -- TypeScript will validate that only known `params`
                    // are used in combination with a given `pathname`. Since the two will
                    // always match for the current route, we can skip runtime checks.
                    href={
                      cat.translations[0]?.slug
                        ? `/contacts/${cat.translations[0].slug}`
                        : '#'
                    }
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {cat.translations[0]?.label || cat.id}
                  </Link>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
