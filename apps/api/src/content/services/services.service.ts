import { CATEGORYTYPE, Locale } from '@kwh/constants';
import {
  ServiceListResponse,
  ServiceListResponseSchema,
  type ServicesByCategoryResponse,
  ServicesByCategoryResponseSchema,
} from '@kwh/contracts';
import { Injectable } from '@nestjs/common';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

import { PrismaService } from '@/db/prisma.service.js';

@Injectable()
export class ServicesService {
  constructor(
    private readonly prisma: PrismaService,
    @InjectPinoLogger(ServicesService.name) private readonly logger: PinoLogger,
  ) {}

  /**
   * Fetch all active service categories and their services, filtered by locale.
   * Throws and logs errors for production readiness.
   */
  async getAllServicesByCategory(
    locale: Locale,
  ): Promise<ServicesByCategoryResponse> {
    const data = await this.prisma.category.findMany({
      where: { isActive: true, type: CATEGORYTYPE.service },
      orderBy: { order: 'asc' },
      include: {
        translations: { where: { locale } },
        services: {
          where: { isActive: true },
          orderBy: { order: 'asc' },
          include: {
            translations: { where: { locale } },
          },
        },
      },
    });
    return ServicesByCategoryResponseSchema.parse(data);
  }

  // TODO: check if query works
  async getServiceList({
    page = 1,
    pagesize = 10,
    query = '',
    locale,
  }: {
    page?: number;
    pagesize?: number;
    query?: string;
    locale: Locale;
  }): Promise<ServiceListResponse> {
    const whereClause = {
      isActive: true,
      translations: {
        some: {
          locale,
          title: { contains: query, mode: 'insensitive' as const },
        },
      },
    };
    const totalCount = await this.prisma.service.count({ where: whereClause });
    const data = await this.prisma.service.findMany({
      where: whereClause,
      skip: (page - 1) * pagesize,
      take: pagesize,
      orderBy: { order: 'asc' },
      include: {
        translations: { where: { locale } },
        category: {
          include: {
            translations: { where: { locale } },
          },
        },
      },
    });
    return ServiceListResponseSchema.parse({
      services: data,
      total: totalCount,
    });
  }
}
