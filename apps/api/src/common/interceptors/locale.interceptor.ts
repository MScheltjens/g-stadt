import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@kwh/constants';
import { LocaleSchema } from '@kwh/contracts';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class LocaleInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context
      .switchToHttp()
      .getRequest<Request & { locale?: string }>();

    let rawLocale: string | undefined;

    // 1. Check NEXT_LOCALE cookie (set in safeFetch and proxy) first
    if (req.cookies && req.cookies.NEXT_LOCALE) {
      rawLocale = req.cookies.NEXT_LOCALE;
    }

    // 2. Check locale in URL (e.g., /de/...) if not found in cookie
    if (!rawLocale && req.url) {
      const urlLocale = req.url.split('/')[1];
      if (urlLocale && SUPPORTED_LOCALES.includes(urlLocale as Locale)) {
        rawLocale = urlLocale;
      }
    }

    // 3. Check Accept-Language header if not found in cookie or URL
    if (!rawLocale && req.headers['accept-language']) {
      const acceptLang = req.headers['accept-language']
        .split(',')[0]
        .split('-')[0];
      if (acceptLang && SUPPORTED_LOCALES.includes(acceptLang)) {
        rawLocale = acceptLang;
      }
    }

    // 4. Fallback to DEFAULT_LOCALE
    if (!rawLocale) {
      rawLocale = DEFAULT_LOCALE;
    }

    // Validate locale
    const parseResult = LocaleSchema.safeParse(rawLocale);
    req.locale = parseResult.success
      ? parseResult.data
      : (DEFAULT_LOCALE as Locale);

    return next.handle();
  }
}
