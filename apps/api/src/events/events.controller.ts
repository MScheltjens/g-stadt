import { Controller, Get, Param, Query } from '@nestjs/common';
import { EventsService } from './events.service';
import type { Event, EventCategoryType, LocaleType } from '@repo/types';
import type { EventWithTranslation } from '@repo/types/src/events.schema';
import { Public } from '../authentication/decorators/public.decorator';

@Public()
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  async findAll(
    @Query('locale') locale: LocaleType,
    @Query('category') category?: EventCategoryType,
  ): Promise<EventWithTranslation[]> {
    if (!locale) {
      throw new Error('Locale is required');
    }
    if (category) {
      return this.eventsService.findByCategoryAndLocale(category, locale);
    }
    return this.eventsService.findAll(locale);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Event> {
    return this.eventsService.findOne(id);
  }

  @Get('/slug/:slug')
  async findOneBySlug(
    @Param('slug') slug: string,
  ): Promise<EventWithTranslation> {
    return this.eventsService.findOneBySlug(slug);
  }
}
