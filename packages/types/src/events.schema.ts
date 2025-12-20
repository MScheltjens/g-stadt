import { z } from 'zod';

/**
 * Create Event DTO Schema
 */
export const CreateEventSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  date: z.coerce.date(),
  location: z.string().min(1, 'Location is required'),
  category: z.string().min(1, 'Category is required'),
  imageUrl: z.string().url().optional(),
});

export type CreateEventDto = z.infer<typeof CreateEventSchema>;

/**
 * Update Event DTO Schema
 */
export const UpdateEventSchema = CreateEventSchema.partial();

export type UpdateEventDto = z.infer<typeof UpdateEventSchema>;
