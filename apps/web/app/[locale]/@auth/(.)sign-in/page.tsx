/**
 * Login Modal (Intercepting Route)
 *
 * This intercepts the /login route when navigating from within the app
 * and shows the login form in a modal instead of a full page.
 */

import { SignInForm } from '@/components/auth/sign-in/sign-in.form';
import { Modal } from '@/components/ui/modal';

export default async function LoginModal() {
  return (
    <Modal>
      <SignInForm />
    </Modal>
  );
}
