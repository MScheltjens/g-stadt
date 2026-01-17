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

import { ContactService } from './contact.service.js';

@ApiTags('contact')
@Public()
@Controller('contact')
export class ContactController {
  private readonly logger = new Logger(ContactController.name);
  constructor(private readonly contactService: ContactService) {}

  /**
   * Get all contact categories filtered by locale
   */
  @Get('contact-categories')
  @ApiQuery({
    name: 'locale',
    required: true,
    type: String,
    description: 'Locale code (en, fr, de)',
  })
  @ApiResponse({
    status: 200,
    description: 'List of contact categories',
    type: Object,
  })
  async getAllContactCategories(@Query() query: LocaleQueryDto) {
    if (!query.locale) {
      this.logger.warn('Missing locale in query');
      throw new BadRequestException('Locale is required');
    }
    try {
      return await this.contactService.getAllContactCategories(query.locale);
    } catch (error) {
      if (error instanceof Error) {
        this.logger.error('Failed to get contact categories', error.stack);
      } else {
        this.logger.error(
          'Failed to get contact categories',
          JSON.stringify(error),
        );
      }
      throw new InternalServerErrorException(
        'Failed to fetch contact categories',
      );
    }
  }
}
