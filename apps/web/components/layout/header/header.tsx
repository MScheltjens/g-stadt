import { CategoryListResponse } from '@invicity/contracts';

import { Navbar } from '@/components/navigation/';

import { HeaderUtils } from './header-utils';

export type HeaderProps = {
  categories: CategoryListResponse;
};
export async function Header({ categories }: HeaderProps) {
  return (
    <header className="w-full bg-background">
      <div className="mx-auto px-6  border-b border-border">
        <div className="flex items-center justify-end">
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
