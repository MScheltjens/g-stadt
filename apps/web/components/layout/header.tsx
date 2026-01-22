import { CategoryListResponse } from '@invicity/contracts';

import { LocaleSwitcher } from '@/components/navigation/locale-switcher';
import { Navbar } from '@/components/navigation/navbar';

export type HeaderProps = {
  categories: CategoryListResponse;
};
export async function Header({ categories }: HeaderProps) {
  return (
    <header className="w-full bg-background">
      <div className="mx-auto border-b border-border flex items-end justify-end">
        <Navbar categories={categories} />
        <LocaleSwitcher />
      </div>
    </header>
  );
}
