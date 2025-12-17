import { Injectable, NotFoundException } from '@nestjs/common';
import { db } from '@repo/database';
import type { Service } from '@repo/types';

@Injectable()
export class ServicesService {
  async findAll(): Promise<Service[]> {
    return db.service.findMany({
      orderBy: { category: 'asc' },
    });
  }

  async findOne(id: string): Promise<Service> {
    const service = await db.service.findUnique({
      where: { id },
    });

    if (!service) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }

    return service;
  }

  async findByCategory(category: string): Promise<Service[]> {
    return db.service.findMany({
      where: { category },
      orderBy: { title: 'asc' },
    });
  }
}
