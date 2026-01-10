import { z } from 'zod';
import { EventCategorySchema } from './generated';

/**
 * Create Event DTO Schema
 */
export const CreateEventSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  category: EventCategorySchema,
  description: z.string().min(1, 'Description is required'),
  date: z.coerce.date(),
  location: z.string().min(1, 'Location is required'),
  imageUrl: z.string().url().optional(),
});

export type CreateEventDto = z.infer<typeof CreateEventSchema>;

/**
 * Update Event DTO Schema
 */
export const UpdateEventSchema = CreateEventSchema.partial();

export type UpdateEventDto = z.infer<typeof UpdateEventSchema>;

/**
 * EventWithTranslation API Response Schema
 */
export const EventWithTranslationSchema = CreateEventSchema.extend({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  title: z.string(),
  slug: z.string(),
  category: EventCategorySchema,
  description: z.string().optional(),
  location: z.string().optional(),
});

export type EventWithTranslation = z.infer<typeof EventWithTranslationSchema>;
