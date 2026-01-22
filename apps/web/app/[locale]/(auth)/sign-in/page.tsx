/**
 * Login Page
 *
 * Full page version of the login form.
 * When navigated to directly, shows the full page.
 * When intercepted from another route, shows as a modal.
 */

import { SignInForm } from '@/components/auth/sign-in.form';

export default async function SignInPage() {
  return <SignInForm />;
}
