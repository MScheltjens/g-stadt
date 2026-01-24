/**
 * Authentication Context Provider
 *
 * Provides authentication state and user information to the entire application
 * through React Context. This allows any component to access the current user
 * and authentication status.
 *
 * @module components/providers/auth-provider
 */

import { JwtPayload } from '@kwh/contracts';
import { createContext, ReactNode, useContext } from 'react';

/**
 * Authentication context value interface
 */
interface AuthContextType {
  /** Current authenticated user or null if not logged in */
  user: JwtPayload | null;
  /** Whether authentication state is being loaded */
  loading: boolean;
}

/**
 * Authentication context with default values
 */
const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: false,
});

/**
 * Props for AuthProvider component
 */
interface AuthProviderProps {
  /** Child components that will have access to auth context */
  children: ReactNode;
  /** Initial user data from server-side authentication check */
  initialUser: JwtPayload | null;
}

/**
 * Authentication Provider Component
 *
 * Wraps the application to provide authentication state to all child components.
 * Should be placed high in the component tree, typically in the root layout.
 *
 * @param props - Provider props including children and initial user
 *
 * @example
 * ```tsx
 * // In app/[locale]/layout.tsx
 * import { AuthProvider } from '@/components/providers/auth-provider';
 * import { getUser } from '@/lib/auth';
 *
 * export default async function Layout({ children }) {
 *   const user = await getUser();
 *
 *   return (
 *     <AuthProvider initialUser={user}>
 *       {children}
 *     </AuthProvider>
 *   );
 * }
 * ```
 */
export function AuthProvider({ children, initialUser }: AuthProviderProps) {
  return (
    <AuthContext.Provider value={{ user: initialUser, loading: false }}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * Hook to access authentication context
 *
 * Provides access to the current user and authentication state from any component
 * within the AuthProvider tree.
 *
 * @returns Authentication context with user and loading state
 * @throws Error if used outside of AuthProvider
 *
 * @example
 * ```tsx
 * 'use client';
 *
 * import { useAuth } from '@/components/providers/auth-provider';
 *
 * export function UserProfile() {
 *   const { user, loading } = useAuth();
 *
 *   if (loading) return <div>Loading...</div>;
 *   if (!user) return <div>Not logged in</div>;
 *
 *   return (
 *     <div>
 *       <h1>Welcome, {user.email}</h1>
 *       <p>Role: {user.role}</p>
 *     </div>
 *   );
 * }
 * ```
 */
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
