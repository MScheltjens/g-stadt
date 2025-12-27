import { Injectable, NotFoundException } from '@nestjs/common';
import { db } from '@repo/database';
import type { News } from '@repo/types';

@Injectable()
export class NewsService {
  async findAll(published?: boolean): Promise<News[]> {
    return db.news.findMany({
      where: published !== undefined ? { published } : undefined,
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string): Promise<News> {
    const news = await db.news.findUnique({
      where: { id },
    });

    if (!news) {
      throw new NotFoundException(`News with ID ${id} not found`);
    }

    return news;
  }

  async findOneBySlug(slug: string): Promise<News> {
    const news = await db.news.findUnique({
      where: { slug },
    });
    if (!news) {
      throw new NotFoundException(`News with slug ${slug} not found`);
    }
    return news;
  }

  async findByCategory(category: string, published = true): Promise<News[]> {
    return db.news.findMany({
      where: { category, published },
      orderBy: { createdAt: 'desc' },
    });
  }
}
