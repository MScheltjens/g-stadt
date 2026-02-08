export const SERVICE_SORT = {
  ORDER: 'order',
  TITLE_ASC: 'title_asc',
  TITLE_DESC: 'title_desc',
} as const;

export type ServiceSort = (typeof SERVICE_SORT)[keyof typeof SERVICE_SORT];
