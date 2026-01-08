import * as React from 'react';
import { NAVIGATION_LINKS } from '@repo/types';
import { Link } from '@repo/i18n/navigation';
import { type Locale, useTranslations } from '@repo/i18n';

export function MobileSidebarNav({
  locale,
  open,
  onClose,
}: {
  locale: Locale;
  open: boolean;
  onClose: () => void;
}) {
  const t = useTranslations('navbar');
  return (
    <div
      className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    >
      <nav
        className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={onClose}
          aria-label="Close menu"
        >
          ×
        </button>
        <ul className="mt-16 space-y-4 px-6">
          {NAVIGATION_LINKS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                locale={locale}
                className="block py-2 text-lg text-gray-800 hover:text-primary-600"
              >
                {t(item.label)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
