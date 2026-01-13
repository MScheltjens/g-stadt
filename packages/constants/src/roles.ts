export const ROLES = {
  CITIZEN: 'CITIZEN',
  STAFF: 'STAFF',
  ADMIN: 'ADMIN',
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];
