import { Injectable, NotFoundException } from '@nestjs/common';
import { db } from '@repo/database';
import type {
  Locale,
  News,
  NewsCategoryType,
  NewsWithTranslation,
} from '@repo/types';

@Injectable()
export class NewsService {
  async findAll(
    locale: Locale,
    published?: boolean,
  ): Promise<NewsWithTranslation[]> {
    const newsList = await db.news.findMany({
      where: published !== undefined ? { published } : undefined,
      orderBy: { createdAt: 'desc' },
      include: { translations: true },
    });
    return newsList.map((news) => {
      const translation =
        news.translations.find((t) => t.locale === locale) ||
        news.translations[0];
      const { translations, ...base } = news;
      return {
        ...base,
        category: news.category,
        title: translation?.title,
        slug: translation?.slug ?? news.id,
        content: translation?.content,
        excerpt: translation?.excerpt,
      };
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

  async findOneBySlug(slug: string): Promise<NewsWithTranslation> {
    const news = await db.news.findFirst({
      where: {
        translations: {
          some: { slug },
        },
      },
      include: { translations: true },
    });

    if (!news) {
      throw new NotFoundException(`News with slug ${slug} not found`);
    }

    const translation =
      news.translations.find((t) => t.slug === slug) || news.translations[0];
    const { translations, ...base } = news;

    return {
      ...base,
      category: news.category,
      title: translation?.title,
      slug: translation?.slug ?? news.id,
      content: translation?.content,
      excerpt: translation?.excerpt,
    };
  }

  async findByCategory(
    category: NewsCategoryType,
    locale: Locale,
    published = true,
  ): Promise<NewsWithTranslation[]> {
    const newsList = await db.news.findMany({
      where: { category, published },
      orderBy: { createdAt: 'desc' },
      include: { translations: true },
    });

    return newsList.map((news) => {
      const translation =
        news.translations.find((t) => t.locale === locale) ||
        news.translations[0];
      const { translations, ...base } = news;
      return {
        ...base,
        category: news.category,
        title: translation?.title,
        slug: translation?.slug ?? news.id,
        content: translation?.content,
        excerpt: translation?.excerpt,
      };
    });
  }
}
