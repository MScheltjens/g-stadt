import { Locale, ROUTES } from '@invicity/constants';
import { Link } from '@invicity/i18n/navigation';

import { Navbar } from '@/components/navigation/navbar';
import { NavbarIcons } from '@/components/navigation/navbar-icons';

import { HeaderUtils } from './header-utils';
import { getCategories } from '@/lib/api/categories';
import { CategoryListResponse, CategoryResponse } from '@invicity/contracts';

export type HeaderProps = {
  categories: {
    service: CategoryListResponse;
    contact: CategoryListResponse;
  };
};
export async function Header({ categories }: HeaderProps) {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={ROUTES.HOME} className="text-lg font-semibold">
            G-Stadt
          </Link>

          {/* Right cluster */}
          <div className="flex items-center">
            {/* Desktop nav */}
            <Navbar categories={categories} />

            {/* Mobile nav icons */}
            <div className="flex md:hidden">
              <NavbarIcons categories={categories} />
            </div>

            <HeaderUtils />
          </div>
        </div>
      </div>
    </header>
  );
}
