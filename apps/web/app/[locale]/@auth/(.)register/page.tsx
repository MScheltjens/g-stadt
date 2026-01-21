/**
 * Register Modal (Intercepting Route)
 *
 * This intercepts the /register route when navigating from within the app
 * and shows the registration form in a modal instead of a full page.
 */

import { RegisterForm } from '@/components/auth';
import { Modal } from '@/components/ui';

export default async function RegisterModal() {
  return (
    <Modal>
      <RegisterForm />
    </Modal>
  );
}
