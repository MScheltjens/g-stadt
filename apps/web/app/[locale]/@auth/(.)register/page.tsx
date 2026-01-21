/**
 * Register Modal (Intercepting Route)
 *
 * This intercepts the /register route when navigating from within the app
 * and shows the registration form in a modal instead of a full page.
 */

import { setRequestLocale } from '@invicity/i18n';

import { RegisterForm } from '@/components/auth';
import { Modal } from '@/components/ui';
import type { PageProps } from '@/types/next-page';

export default async function RegisterModal({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Modal>
      <RegisterForm />
    </Modal>
  );
}
