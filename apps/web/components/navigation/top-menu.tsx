import { CATEGORYTYPE } from '@kwh/constants';

import { getCategories } from '@/server/services/categories.service';

import { AuthButton } from '../auth/auth-btn';
import { ContactMenu } from './contact-menu';
import { LocaleSwitcher } from './locale-switcher';

export async function TopMenuBar() {
  const contactCategories = await getCategories(CATEGORYTYPE.contact);
  return (
    <div
      className="flex items-center justify-end border-b-2"
      aria-label="Top Menu Bar"
    >
      <div className="flex items-center">
        <LocaleSwitcher />
        <ContactMenu contactCategories={contactCategories} />
        <AuthButton />
      </div>
    </div>
  );
}
