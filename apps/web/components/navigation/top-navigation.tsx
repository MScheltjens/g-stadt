import { CATEGORYTYPE } from '@kwh/constants';

import { TopNavbar } from '@/components/navigation/navbar';
import { getCategories } from '@/server/services/categories.service';

export async function TopNav() {
  const contactCategories = await getCategories(CATEGORYTYPE.contact);
  return (
    <div
      className="flex items-center justify-end border-b-2"
      aria-label="Top navigation"
    >
      <TopNavbar contactCategories={contactCategories} />
    </div>
  );
}
