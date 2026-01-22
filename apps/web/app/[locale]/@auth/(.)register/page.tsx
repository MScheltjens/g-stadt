/**
 * Register Modal (Intercepting Route)
 *
 * This intercepts the /register route when navigating from within the app
 * and shows the registration form in a modal instead of a full page.
 */

import { RegisterForm } from '@/components/auth/register/register.form';
import { Modal } from '@/components/ui/modal';

export default async function RegisterModal() {
  return (
    <Modal>
      <RegisterForm />
    </Modal>
  );
}
