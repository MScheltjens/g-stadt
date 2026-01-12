import { Navbar } from '@/components/navigation/navbar';
import { Link } from '@repo/i18n/navigation';
import { HeaderUtils } from './header-utils';
import { NavbarIcons } from '../navigation/navbar-icons';

export function Header() {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-lg font-semibold">
            G-Stadt
          </Link>

          {/* Right cluster */}
          <div className="flex items-center">
            {/* Desktop nav and utils */}
            <Navbar />

            {/* Mobile nav and utils as icons */}
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
