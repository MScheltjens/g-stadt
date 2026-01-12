import { Controller, Get, Param, Query } from '@nestjs/common';
import { ServicesService } from './services.service';
import type { LocaleType, Service, ServiceCategoryType } from '@repo/types';
import type { ServiceWithTranslation } from '@repo/types/src/service.schema';
import { Public } from '@/common/decorators/public.decorator';

@Public()
@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  async findAll(
    @Query('locale') locale: LocaleType,
    @Query('category') category?: ServiceCategoryType,
  ): Promise<ServiceWithTranslation[]> {
    if (!locale) {
      throw new Error('Locale is required');
    }
    if (category) {
      return this.servicesService.findByCategoryAndLocale(category, locale);
    }
    return this.servicesService.findAll(locale);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Service> {
    return this.servicesService.findOne(id);
  }

  @Get('/slug/:slug')
  async findOneBySlug(
    @Param('slug') slug: string,
  ): Promise<ServiceWithTranslation> {
    return this.servicesService.findOneBySlug(slug);
  }
}
