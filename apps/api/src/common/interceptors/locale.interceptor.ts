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
      .getRequest<Request & { locale: Locale }>();

    let rawLocale: Locale | undefined;

    if (req.headers['x-locale']) {
      rawLocale = req.headers['x-locale'] as Locale;
    }

    // 3. Fallback to default
    if (!rawLocale) {
      rawLocale = DEFAULT_LOCALE;
    }

    // Validate locale
    const parseResult = LocaleSchema.safeParse(rawLocale);
    req.locale = parseResult.success
      ? (parseResult.data as Locale)
      : (DEFAULT_LOCALE as Locale);

    return next.handle();
  }
}
