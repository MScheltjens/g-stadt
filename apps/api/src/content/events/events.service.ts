import { Injectable, NotFoundException } from '@nestjs/common';
import { db } from '@repo/database';
import type {
  Event,
  EventCategoryType,
  CreateEventDto,
  LocaleType,
} from '@repo/types';
import type { EventWithTranslation } from '@repo/types/src/events.schema';
import { slugify } from '../../../lib/utils';

@Injectable()
export class EventsService {
  async findAll(locale: LocaleType): Promise<EventWithTranslation[]> {
    try {
      console.log('Fetching all events...');
      const events = await db.event.findMany({
        orderBy: { date: 'asc' },
        include: { translations: true },
      });
      console.log(`Found ${events.length} events`);
      return events.map((event) => {
        const translation =
          event.translations.find((t) => t.locale === locale) ||
          event.translations[0];
        const { translations, ...base } = event;
        return {
          ...base,
          title: translation?.title ?? '',
          description: translation?.description,
          location: translation?.location,
          slug: translation?.slug ?? event.id, // fallback to id if missing
        };
      });
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  }

  async findByCategoryAndLocale(
    category: EventCategoryType,
    locale: LocaleType,
  ): Promise<EventWithTranslation[]> {
    try {
      const events = await db.event.findMany({
        where: { category },
        orderBy: { date: 'asc' },
        include: { translations: true },
      });
      return events.map((event) => {
        const translation =
          event.translations.find((t) => t.locale === locale) ||
          event.translations[0];
        const { translations, ...base } = event;
        return {
          ...base,
          title: translation?.title ?? '',
          description: translation?.description,
          location: translation?.location,
          slug: translation?.slug ?? event.id,
        };
      });
    } catch (error) {
      console.error('Error fetching events by category and locale:', error);
      throw error;
    }
  }

  async findOne(id: string): Promise<Event> {
    try {
      const event = await db.event.findUnique({
        where: { id },
      });

      if (!event) {
        throw new NotFoundException(`Event with ID ${id} not found`);
      }

      return event;
    } catch (error) {
      console.error(`Error fetching event ${id}:`, error);
      throw error;
    }
  }
  async findOneBySlug(slug: string): Promise<EventWithTranslation> {
    try {
      const event = await db.event.findFirst({
        where: {
          translations: {
            some: { slug },
          },
        },
        include: { translations: true },
      });
      if (!event) {
        throw new NotFoundException(`Event with slug ${slug} not found`);
      }
      // Pick the translation (default to 'de' if available, else first)
      const translation =
        event.translations.find((t) => t.slug === slug) ||
        event.translations[0];
      const { translations, ...base } = event;
      return {
        ...base,
        title: translation?.title ?? '',
        description: translation?.description,
        location: translation?.location,
        slug: translation?.slug ?? event.id, // fallback to id if missing
      };
    } catch (error) {
      console.error(`Error fetching event with slug ${slug}:`, error);
      throw error;
    }
  }

  async create(createEventDto: CreateEventDto) {
    const eventData = {
      title: createEventDto.title, // Make sure title is provided
      description: createEventDto.description,
      date: createEventDto.date,
      location: createEventDto.location,
      category: createEventDto.category,
      imageUrl: createEventDto.imageUrl,
      slug: slugify(createEventDto.title),
      // Don't include optional fields like id, createdAt, updatedAt - Prisma handles these
    };

    return db.event.create({
      data: eventData,
    });
  }

  async findByCategory(
    category: EventCategoryType,
  ): Promise<EventWithTranslation[]> {
    try {
      const events = await db.event.findMany({
        where: { category },
        orderBy: { date: 'asc' },
        include: { translations: true },
      });
      return events.map((event) => {
        const translation = event.translations[0];
        const { translations, ...base } = event;
        return {
          ...base,
          title: translation?.title ?? '',
          description: translation?.description,
          location: translation?.location,
          slug: translation?.slug ?? event.id, // fallback to id if missing
        };
      });
    } catch (error) {
      console.error(`Error fetching events by category ${category}:`, error);
      throw error;
    }
  }
}
