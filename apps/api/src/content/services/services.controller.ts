import { Locale, SUPPORTED_LOCALES } from '@kwh/constants';
import {
  CategoryWithServicesResponse,
  ServiceListPaginatedResponse,
} from '@kwh/contracts';
import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Query,
  Req,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import type { Request } from 'express';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

import { Public } from '@/common/decorators/public.decorator.js';
import { ServicesQueryDto } from '@/content/services/dto/service.query.dto.js';

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
  async getServices(
    @Req() req: Request & { locale: Locale },
    @Query() query: ServicesQueryDto,
  ): Promise<ServiceListPaginatedResponse> {
    this.logger.info(
      'Received request to fetch all services with locale: ' +
        req.locale +
        ' and query: ' +
        JSON.stringify(query),
    );

    if (!SUPPORTED_LOCALES.includes(req.locale)) {
      this.logger.error(`Unsupported locale received: ${req.locale}`);
      throw new BadRequestException('Unsupported locale');
    }

    return this.servicesService.getServices(req.locale, query);
  }

  // Get services by category slug //
  @Get('/category/:slug')
  @ApiResponse({
    status: 200,
    description: 'Retrieve a list of services for a specific category.',
  })
  async getServicesByCategory(
    @Req() req: Request & { locale: Locale },
    @Param('slug') categorySlug: string,
  ): Promise<CategoryWithServicesResponse> {
    this.logger.info(
      'Received request to fetch services by category with locale: ' +
        req.locale +
        ' and param: ' +
        categorySlug,
    );

    if (!SUPPORTED_LOCALES.includes(req.locale)) {
      this.logger.error(`Unsupported locale received: ${req.locale}`);
      throw new BadRequestException('Unsupported locale');
    }

    return this.servicesService.getServicesByCategory(req.locale, categorySlug);
  }
}
