import { CATEGORYTYPE } from '@kwh/constants';
import { Link } from '@kwh/i18n';

import { KnowhereLogo } from '@/components/svg/knowhere.logo';
import { getCategories } from '@/server/services/categories.service';

import { AuthButton } from '../auth/auth-btn';
import { ContactMenu } from './contact-menu';
import { LocaleSwitcher } from './locale-switcher';

export async function TopMenuBar() {
  const contactCategories = await getCategories(CATEGORYTYPE.contact);
  return (
    <div
      className="flex items-center justify-between border-b-2"
      aria-label="Top Menu Bar"
    >
      <Link href="/" aria-label="Home">
        <KnowhereLogo logo className="w-auto h-8 ml-2 sm:hidden " />
      </Link>
      <div className="flex items-center">
        <LocaleSwitcher />
        <ContactMenu contactCategories={contactCategories} />
        <AuthButton />
      </div>
    </div>
  );
}
