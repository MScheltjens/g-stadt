import { Injectable, NotFoundException } from '@nestjs/common';
import { db } from '@repo/database';
import type { Event } from '@repo/types';

@Injectable()
export class EventsService {
  async findAll(): Promise<Event[]> {
    return db.event.findMany({
      orderBy: { date: 'asc' },
    });
  }

  async findOne(id: string): Promise<Event> {
    const event = await db.event.findUnique({
      where: { id },
    });

    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }

    return event;
  }

  async findByCategory(category: string): Promise<Event[]> {
    return db.event.findMany({
      where: { category },
      orderBy: { date: 'asc' },
    });
  }
}
