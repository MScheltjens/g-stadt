export const CATEGORYTYPE = {
  service: 'service',
  contact: 'contact',
} as const;

export type CategoryType = (typeof CATEGORYTYPE)[keyof typeof CATEGORYTYPE];
