import { ROUTES } from '@invicity/constants';
import { Link } from '@invicity/i18n/navigation';

import { Navbar } from '@/components/navigation/navbar';

import { NavbarIcons } from '../navigation/navbar-icons';
import { HeaderUtils } from './header-utils';

export async function Header() {
  // get all serviceCategories
  // get all ContactCategories (update seed first)
  // make one request to get all data needed for header

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
            <Navbar />

            {/* Mobile nav icons */}
            <div className="flex md:hidden">
              <NavbarIcons />
            </div>

            <HeaderUtils />
          </div>
        </div>
      </div>
    </header>
  );
}
