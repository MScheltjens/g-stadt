import { Controller, Get, Param, Query } from '@nestjs/common';
import { EventsService } from './events.service';
import type { Event } from '@repo/types';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  async findAll(@Query('category') category?: string): Promise<Event[]> {
    if (category) {
      return this.eventsService.findByCategory(category);
    }
    return this.eventsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Event> {
    return this.eventsService.findOne(id);
  }
}
