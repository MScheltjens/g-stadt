import { LocaleQueryDto } from '@api/src/common/dto/locale-query.dto.js';
import {
  BadRequestException,
  Controller,
  Get,
  InternalServerErrorException,
  Logger,
  Query,
} from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

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
  @ApiQuery({
    name: 'locale',
    required: true,
    type: String,
    description: 'Locale code (en, fr, de)',
  })
  @ApiResponse({
    status: 200,
    description: 'List of services by category',
    type: Object,
  })
  async getAllServicesByCategory(@Query() query: LocaleQueryDto) {
    if (!query.locale) {
      this.logger.warn('Missing locale in query');
      throw new BadRequestException('Locale is required');
    }
    try {
      return await this.servicesService.getAllServicesByCategory(query.locale);
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

  /**
   * Get all active service categories, filtered by locale
   */
  @Get('categories')
  @ApiQuery({
    name: 'locale',
    required: true,
    type: String,
    description: 'Locale code (en, fr, de)',
  })
  @ApiResponse({
    status: 200,
    description: 'List of service categories',
    type: Object,
  })
  async getAllServiceCategories(@Query() query: LocaleQueryDto) {
    if (!query.locale) {
      this.logger.warn('Missing locale in query');
      throw new BadRequestException('Locale is required');
    }
    try {
      return await this.servicesService.getAllCategories(query.locale);
    } catch (error) {
      if (error instanceof Error) {
        this.logger.error('Failed to get service categories', error.stack);
      } else {
        this.logger.error(
          'Failed to get service categories',
          JSON.stringify(error),
        );
      }
      throw new InternalServerErrorException(
        'Failed to fetch service categories',
      );
    }
  }
}
