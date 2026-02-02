import { Locale, SUPPORTED_LOCALES } from '@kwh/constants';
import { CategoryWithServicesListResponse } from '@kwh/contracts';
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
  @Get('by-category')
  @ApiResponse({
    status: 200,
    description: 'Retrieve a list of services grouped by their categories.',
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
