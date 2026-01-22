import { Locale } from '@invicity/constants';
import {
  BadRequestException,
  Controller,
  Get,
  InternalServerErrorException,
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
  @Get()
  @ApiResponse({
    status: 200,
    description: 'List of services by category',
    type: Object,
  })
  async getAllServicesByCategory(@Req() req: Request & { locale?: Locale }) {
    this.logger.info('Get all services by category endpoint called');
    if (!req.locale) {
      this.logger.warn('Missing locale in request');
      throw new BadRequestException('Locale is required');
    }
    try {
      return await this.servicesService.getAllServicesByCategory(req.locale);
    } catch (error) {
      if (error instanceof Error) {
        this.logger.error('Failed to get services by category', error.stack);
      } else {
        this.logger.error(
          'Failed to get services by category',
          JSON.stringify(error),
        );
      }
      throw new InternalServerErrorException('Failed to fetch services');
    }
  }
}
