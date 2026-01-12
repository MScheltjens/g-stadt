import {
  Controller,
  Get,
  Param,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { ServicesService } from './services.service';
import type { Locale, Service, ServiceCategoryType } from '@repo/types';
import type { ServiceWithTranslation } from '@repo/types/src/service.schema';
import { Public } from '@/common/decorators/public.decorator';

@Public()
@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  async findAll(
    @Query('locale') locale: Locale,
    @Query('category') category?: ServiceCategoryType,
  ): Promise<ServiceWithTranslation[]> {
    if (!locale) {
      throw new BadRequestException('Locale is required');
    }
    if (category) {
      return this.servicesService.findByCategoryAndLocale(category, locale);
    }
    return this.servicesService.findAll(locale);
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Query('locale') locale: Locale,
  ): Promise<ServiceWithTranslation> {
    if (!locale) {
      throw new BadRequestException('Locale is required');
    }
    return this.servicesService.findOneWithTranslation(id, locale);
  }

  @Get('/slug/:slug')
  async findOneBySlug(
    @Param('slug') slug: string,
    @Query('locale') locale: Locale,
  ): Promise<ServiceWithTranslation> {
    if (!locale) {
      throw new BadRequestException('Locale is required');
    }
    return this.servicesService.findOneBySlug(slug, locale);
  }
}
