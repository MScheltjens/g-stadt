import { Injectable, NotFoundException } from '@nestjs/common';
import { db } from '@repo/database';
import type { Event } from '@repo/types';

@Injectable()
export class EventsService {
  async findAll(): Promise<Event[]> {
    try {
      console.log('Fetching all events...');
      const events = await db.event.findMany({
        orderBy: { date: 'asc' },
      });
      console.log(`Found ${events.length} events`);
      return events;
    } catch (error) {
      console.error('Error fetching events:', error);
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

  async findByCategory(category: string): Promise<Event[]> {
    try {
      return await db.event.findMany({
        where: { category },
        orderBy: { date: 'asc' },
      });
    } catch (error) {
      console.error(`Error fetching events by category ${category}:`, error);
      throw error;
    }
  }
}
