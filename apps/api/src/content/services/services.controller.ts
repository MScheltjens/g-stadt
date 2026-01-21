import {
  BadRequestException,
  Controller,
  Get,
  InternalServerErrorException,
  Logger,
  Req,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { Public } from '@/common/decorators/public.decorator.js';

import { ServicesService } from './services.service.js';

@ApiTags('services')
@Public()
@Controller('services')
export class ServicesController {
  private readonly logger = new Logger(ServicesController.name);

  constructor(private readonly servicesService: ServicesService) {}

  /**
   * Get all services ordered by category and filtered by locale
   */
  @Get()
  @ApiResponse({
    status: 200,
    description: 'List of services by category',
    type: Object,
  })
  async getAllServicesByCategory(@Req() req: Request) {
    const locale = req['locale'];
    if (!locale) {
      this.logger.warn('Missing locale in request');
      throw new BadRequestException('Locale is required');
    }
    try {
      return await this.servicesService.getAllServicesByCategory(locale);
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
