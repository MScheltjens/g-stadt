import { Locale, SUPPORTED_LOCALES } from '@kwh/constants';
import {
  CategoryWithServicesListResponse,
  ServiceWithCategoryListResponse,
} from '@kwh/contracts';
import { BadRequestException, Controller, Get, Req } from '@nestjs/common';
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

  // Get all services, inclusive of their categories //

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Retrieve a list of all active services.',
  })
  async getAllServices(
    @Req() req: Request & { locale: Locale },
  ): Promise<ServiceWithCategoryListResponse> {
    this.logger.info(
      'Received request to fetch all services with locale: ' + req.locale,
    );

    if (!SUPPORTED_LOCALES.includes(req.locale)) {
      this.logger.error(`Unsupported locale received: ${req.locale}`);
      throw new BadRequestException('Unsupported locale');
    }

    return this.servicesService.getAllServices(req.locale);
  }

  // Get services by their category //

  @Get('by-category')
  @ApiResponse({
    status: 200,
    description:
      'Retrieve a list of services grouped by their categories with locale.',
  })
  async getServicesByCategory(
    @Req() req: Request & { locale: Locale },
  ): Promise<CategoryWithServicesListResponse> {
    this.logger.info(
      `Received request to fetch services by category for locale: ${req.locale}`,
    );

    if (!SUPPORTED_LOCALES.includes(req.locale)) {
      this.logger.error(`Unsupported locale received: ${req.locale}`);
      throw new BadRequestException('Unsupported locale');
    }
    return this.servicesService.getServicesByCategory(req.locale);
  }
}
