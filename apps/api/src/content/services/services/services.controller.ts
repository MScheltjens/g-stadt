import { Controller, Get, Param, Query } from '@nestjs/common';
import { ServicesService } from './services.service';
import { LocaleQueryDto } from '@/common/dto/locale-query.dto';
import { SlugParamDto } from '@/common/dto/slug-param.dto';
import { ZodSerializerDto } from 'nestjs-zod';
import { ServiceResponseSchema, ServicesByCategorySchema } from '@repo/types';
import { Public } from '@/common/decorators/public.decorator';

@Public()
@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  findAll(@Query() query: LocaleQueryDto) {
    return this.servicesService.findAll(query.locale);
  }

  @Get('by-category')
  @ZodSerializerDto(ServicesByCategorySchema.array())
  servicesByCategory(@Query() query: LocaleQueryDto) {
    return this.servicesService.servicesByCategory(query.locale);
  }

  @Get(':slug')
  @ZodSerializerDto(ServiceResponseSchema)
  findOne(@Param() params: SlugParamDto, @Query() query: LocaleQueryDto) {
    return this.servicesService.findOneBySlug(params.slug, query.locale);
  }
}
