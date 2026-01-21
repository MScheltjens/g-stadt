import { ROUTES } from '@invicity/constants';
import { CategoryListResponse } from '@invicity/contracts';
import { Link } from '@invicity/i18n';

import { Navbar } from '@/components/navigation/';
import { BackButton } from '@/components/ui';

import { HeaderUtils } from './header-utils';

export type HeaderProps = {
  categories: CategoryListResponse;
};
export async function Header({ categories }: HeaderProps) {
  console.log({ categories });
  return (
    <header className="w-full bg-background">
      <div className="mx-auto max-w-7xl px-6  border-b border-border">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex gap-2 items-center">
            <Link href={ROUTES.HOME} className="text-lg font-semibold">
              G-Stadt
            </Link>
            <BackButton />
          </div>

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
