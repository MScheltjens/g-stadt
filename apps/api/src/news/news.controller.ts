import { Controller, Get, Param, Query } from '@nestjs/common';
import { NewsService } from './news.service';
import type { News } from '@repo/types';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  async findAll(
    @Query('published') published?: string,
    @Query('category') category?: string,
  ): Promise<News[]> {
    const isPublished =
      published === 'true' ? true : published === 'false' ? false : true;

    if (category) {
      return this.newsService.findByCategory(category, isPublished);
    }
    return this.newsService.findAll(isPublished);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<News> {
    return this.newsService.findOne(id);
  }
}
