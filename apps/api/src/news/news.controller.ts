import { Controller, Get, Param, Query } from '@nestjs/common';
import { NewsService } from './news.service';
import type {
  LocaleType,
  News,
  NewsCategoryType,
  NewsWithTranslation,
} from '@repo/types';
import { Public } from '../authentication/decorators/public.decorator';

@Public()
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  async findAll(
    @Query('locale') locale: LocaleType,
    @Query('published') published?: boolean,
    @Query('category') category?: NewsCategoryType,
  ): Promise<NewsWithTranslation[]> {
    if (category) {
      return this.newsService.findByCategory(category, locale, published);
    }
    return this.newsService.findAll(locale, published);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<News> {
    return this.newsService.findOne(id);
  }

  @Get('/slug/:slug')
  async findOneBySlug(
    @Param('slug') slug: string,
  ): Promise<NewsWithTranslation> {
    return this.newsService.findOneBySlug(slug);
  }
}
