import { DEFAULT_LOCALE, Locale } from '@kwh/constants';
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

    // 1. Check NEXT_LOCALE cookie
    if (req.cookies && req.cookies.NEXT_LOCALE) {
      console.log('Cookies:', req.cookies);
      rawLocale = req.cookies.NEXT_LOCALE;
      console.log('Locale from NEXT_LOCALE cookie:', rawLocale);
    }

    // 2. Fallback to x-locale header
    if (!rawLocale && req.headers['x-locale']) {
      rawLocale = req.headers['x-locale'] as string;
      console.log('Locale from x-locale header:', rawLocale);
    }

    // 3. Fallback to default
    if (!rawLocale) {
      rawLocale = DEFAULT_LOCALE;
      console.log('Falling back to DEFAULT_LOCALE:', rawLocale);
    }

    // Validate locale
    const parseResult = LocaleSchema.safeParse(rawLocale);
    console.log('Locale parse result:', parseResult);
    req.locale = parseResult.success
      ? (parseResult.data as Locale)
      : (DEFAULT_LOCALE as Locale);

    console.log('Final req.locale:', req.locale);
    return next.handle();
  }
}
