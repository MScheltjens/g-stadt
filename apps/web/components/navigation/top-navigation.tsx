import { CATEGORYTYPE } from '@kwh/constants';

import { TopNavbar } from '@/components/navigation/navbar';
import { getCategories } from '@/server/services/categories.service';

export async function TopNav() {
  const contactCategories = await getCategories(CATEGORYTYPE.contact);
  return (
    <nav
      className="w-full bg-background border-2 flex items-end justify-end"
      aria-label="Top navigation"
    >
      <TopNavbar contactCategories={contactCategories} />
    </nav>
  );
}
