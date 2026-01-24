import { ServicesQueryDto } from '@api/src/content/services/dto/services-query.dto.js';
import { Locale } from '@kwh/constants';
import {
  BadRequestException,
  Controller,
  Get,
  Query,
  Req,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import type { Request } from 'express';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

import { Public } from '@/common/decorators/public.decorator.js';

import { ServicesService } from './services.service.js';

@ApiTags('services')
@Public()
@Controller('services')
export class ServicesController {
  constructor(
    private readonly servicesService: ServicesService,
    @InjectPinoLogger(ServicesController.name)
    private readonly logger: PinoLogger,
  ) {}

  /**
   * Get all services ordered by category and filtered by locale
   */
  @Get('by-category')
  @ApiResponse({
    status: 200,
    description: 'List of services by category',
    type: Object,
  })
  async getAllServicesByCategory(@Req() req: Request & { locale?: Locale }) {
    if (!req.locale) throw new BadRequestException('Locale is required');
    return this.servicesService.getAllServicesByCategory(req.locale);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'List of all services',
    type: Object,
  })
  async getServiceList(
    @Req() req: Request & { locale?: Locale },
    @Query() query: ServicesQueryDto,
  ) {
    if (!req.locale)
      throw new BadRequestException('Locale is required in request context');
    return this.servicesService.getServiceList({
      locale: req.locale,
      ...query,
    });
  }
}
