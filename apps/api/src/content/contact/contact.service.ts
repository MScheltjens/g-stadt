import { Locale } from '@invicity/constants';
import { type CategoriesResponse } from '@invicity/contracts';
import { Injectable, Logger } from '@nestjs/common';

import { CategoriesService } from '../categories/categories.service.js';

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);
  constructor(private readonly categoriesService: CategoriesService) {}

  /**
   * Fetch all active contact categories, filtered by locale.
   */
  async getAllContactCategories(locale: Locale): Promise<CategoriesResponse> {
    return this.categoriesService.getCategories(locale, 'CONTACT');
  }
}
