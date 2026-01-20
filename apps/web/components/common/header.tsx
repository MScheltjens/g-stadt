import { ROUTES } from '@invicity/constants';
import { CategoryListResponse } from '@invicity/contracts';
import { Link } from '@invicity/i18n/navigation';

import { Navbar } from '@/components/navigation/navbar';

import { HeaderUtils } from './header-utils';

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
            <Navbar categories={categories} />
            <HeaderUtils />
          </div>
        </div>
      </div>
    </header>
  );
}
