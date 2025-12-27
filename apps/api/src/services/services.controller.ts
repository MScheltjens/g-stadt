import { Controller, Get, Param, Query } from '@nestjs/common';
import { ServicesService } from './services.service';
import type { Service } from '@repo/types';
import { Public } from '../authentication/decorators/public.decorator';

@Public()
@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  async findAll(@Query('category') category?: string): Promise<Service[]> {
    if (category) {
      return this.servicesService.findByCategory(category);
    }
    return this.servicesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Service> {
    return this.servicesService.findOne(id);
  }

  @Get('/slug/:slug')
  async findOneBySlug(@Param('slug') slug: string): Promise<Service> {
    return this.servicesService.findOneBySlug(slug);
  }
}
