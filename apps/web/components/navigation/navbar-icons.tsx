'use client';

import { Link } from '@invicity/i18n/navigation';
import { AlertCircle, Mail } from '@invicity/ui/components/icons';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@invicity/ui/components/navigation-menu';
import { cn } from '@invicity/ui/lib/utils';

import { HeaderProps } from '../common/header';

export function NavbarIcons({ categories }: HeaderProps) {
  return (
    <nav className="md:hidden">
      <NavigationMenu viewport={false}>
        <NavigationMenuList className="flex items-center gap-1">
          {/* Service Categories Dropdown */}
          {categories?.service?.length > 0 && (
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  'px-2',
                  'bg-transparent text-sm font-sm',
                  'hover:bg-transparent focus:bg-transparent',
                  'border-b-2 border-transparent data-[state=open]:border-primary',
                )}
              >
                <AlertCircle className="h-4 w-4" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="bg-white shadow-lg rounded-md mt-2 min-w-[200px] z-50">
                  {categories.service
                    .filter(
                      (cat) => cat.translations && cat.translations.length > 0,
                    )
                    .map((cat) => (
                      <Link
                        key={cat.id}
                        // @ts-expect-error -- TypeScript will validate that only known `params`
                        href={
                          cat.translations[0]?.slug
                            ? `/services/${cat.translations[0]?.slug}`
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
                  'px-2',
                  'bg-transparent text-sm font-sm',
                  'hover:bg-transparent focus:bg-transparent',
                  'border-b-2 border-transparent data-[state=open]:border-primary',
                )}
              >
                <Mail className="h-4 w-4" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="bg-white shadow-lg rounded-md mt-2 min-w-[200px] z-50">
                  {categories.contact
                    .filter(
                      (cat) => cat.translations && cat.translations.length > 0,
                    )
                    .map((cat) => (
                      <Link
                        key={cat.id}
                        // @ts-expect-error -- TypeScript will validate that only known `params`
                        href={
                          cat.translations[0]?.slug
                            ? `/contacts/${cat.translations[0]?.slug}`
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
    </nav>
  );
}
