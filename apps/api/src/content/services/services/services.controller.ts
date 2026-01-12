import { Controller, Get, Param, Query } from '@nestjs/common';
import { ServicesService } from './services.service';
import type { Locale } from '@repo/types';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  findAll(@Query('locale') locale: Locale) {
    return this.servicesService.findAll(locale);
  }

  @Get('by-category')
  servicesByCategory(@Query('locale') locale: Locale) {
    return this.servicesService.servicesByCategory(locale);
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string, @Query('locale') locale: Locale) {
    return this.servicesService.findOneBySlug(slug, locale);
  }
}
