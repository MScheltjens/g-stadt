/**
 * Client
 **/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model RefreshToken
 *
 */
export type RefreshToken =
  $Result.DefaultSelection<Prisma.$RefreshTokenPayload>;
/**
 * Model PasswordResetToken
 *
 */
export type PasswordResetToken =
  $Result.DefaultSelection<Prisma.$PasswordResetTokenPayload>;
/**
 * Model Category
 *
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>;
/**
 * Model CategoryTranslation
 *
 */
export type CategoryTranslation =
  $Result.DefaultSelection<Prisma.$CategoryTranslationPayload>;
/**
 * Model Service
 *
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>;
/**
 * Model ServiceTranslation
 *
 */
export type ServiceTranslation =
  $Result.DefaultSelection<Prisma.$ServiceTranslationPayload>;
/**
 * Model Contact
 *
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>;
/**
 * Model ContactTranslation
 *
 */
export type ContactTranslation =
  $Result.DefaultSelection<Prisma.$ContactTranslationPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
    CITIZEN: 'CITIZEN';
    STAFF: 'STAFF';
    ADMIN: 'ADMIN';
  };

  export type Role = (typeof Role)[keyof typeof Role];

  export const Locale: {
    en: 'en';
    fr: 'fr';
    de: 'de';
  };

  export type Locale = (typeof Locale)[keyof typeof Locale];

  export const CategoryType: {
    SERVICE: 'SERVICE';
    CONTACT: 'CONTACT';
  };

  export type CategoryType = (typeof CategoryType)[keyof typeof CategoryType];
}

export type Role = $Enums.Role;

export const Role: typeof $Enums.Role;

export type Locale = $Enums.Locale;

export const Locale: typeof $Enums.Locale;

export type CategoryType = $Enums.CategoryType;

export const CategoryType: typeof $Enums.CategoryType;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more RefreshTokens
   * const refreshTokens = await prisma.refreshToken.findMany()
   * ```
   */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordResetToken`: Exposes CRUD operations for the **PasswordResetToken** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more PasswordResetTokens
   * const passwordResetTokens = await prisma.passwordResetToken.findMany()
   * ```
   */
  get passwordResetToken(): Prisma.PasswordResetTokenDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoryTranslation`: Exposes CRUD operations for the **CategoryTranslation** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more CategoryTranslations
   * const categoryTranslations = await prisma.categoryTranslation.findMany()
   * ```
   */
  get categoryTranslation(): Prisma.CategoryTranslationDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Services
   * const services = await prisma.service.findMany()
   * ```
   */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceTranslation`: Exposes CRUD operations for the **ServiceTranslation** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ServiceTranslations
   * const serviceTranslations = await prisma.serviceTranslation.findMany()
   * ```
   */
  get serviceTranslation(): Prisma.ServiceTranslationDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Contacts
   * const contacts = await prisma.contact.findMany()
   * ```
   */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactTranslation`: Exposes CRUD operations for the **ContactTranslation** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ContactTranslations
   * const contactTranslations = await prisma.contactTranslation.findMany()
   * ```
   */
  get contactTranslation(): Prisma.ContactTranslationDelegate<
    ExtArgs,
    ClientOptions
  >;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string;
    engine: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    RefreshToken: 'RefreshToken';
    PasswordResetToken: 'PasswordResetToken';
    Category: 'Category';
    CategoryTranslation: 'CategoryTranslation';
    Service: 'Service';
    ServiceTranslation: 'ServiceTranslation';
    Contact: 'Contact';
    ContactTranslation: 'ContactTranslation';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | 'user'
        | 'refreshToken'
        | 'passwordResetToken'
        | 'category'
        | 'categoryTranslation'
        | 'service'
        | 'serviceTranslation'
        | 'contact'
        | 'contactTranslation';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>;
        fields: Prisma.RefreshTokenFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
          };
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
          };
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
          };
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
          };
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
          };
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
          };
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
          };
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
          };
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
          };
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRefreshToken>;
          };
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[];
          };
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<RefreshTokenCountAggregateOutputType>
              | number;
          };
        };
      };
      PasswordResetToken: {
        payload: Prisma.$PasswordResetTokenPayload<ExtArgs>;
        fields: Prisma.PasswordResetTokenFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
          };
          findFirst: {
            args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
          };
          findMany: {
            args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[];
          };
          create: {
            args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
          };
          createMany: {
            args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[];
          };
          delete: {
            args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
          };
          update: {
            args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
          };
          deleteMany: {
            args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[];
          };
          upsert: {
            args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
          };
          aggregate: {
            args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePasswordResetToken>;
          };
          groupBy: {
            args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PasswordResetTokenGroupByOutputType>[];
          };
          count: {
            args: Prisma.PasswordResetTokenCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<PasswordResetTokenCountAggregateOutputType>
              | number;
          };
        };
      };
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>;
        fields: Prisma.CategoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[];
          };
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[];
          };
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[];
          };
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCategory>;
          };
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CategoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>;
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number;
          };
        };
      };
      CategoryTranslation: {
        payload: Prisma.$CategoryTranslationPayload<ExtArgs>;
        fields: Prisma.CategoryTranslationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CategoryTranslationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryTranslationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CategoryTranslationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryTranslationPayload>;
          };
          findFirst: {
            args: Prisma.CategoryTranslationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryTranslationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CategoryTranslationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryTranslationPayload>;
          };
          findMany: {
            args: Prisma.CategoryTranslationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryTranslationPayload>[];
          };
          create: {
            args: Prisma.CategoryTranslationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryTranslationPayload>;
          };
          createMany: {
            args: Prisma.CategoryTranslationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CategoryTranslationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryTranslationPayload>[];
          };
          delete: {
            args: Prisma.CategoryTranslationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryTranslationPayload>;
          };
          update: {
            args: Prisma.CategoryTranslationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryTranslationPayload>;
          };
          deleteMany: {
            args: Prisma.CategoryTranslationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CategoryTranslationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CategoryTranslationUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryTranslationPayload>[];
          };
          upsert: {
            args: Prisma.CategoryTranslationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryTranslationPayload>;
          };
          aggregate: {
            args: Prisma.CategoryTranslationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCategoryTranslation>;
          };
          groupBy: {
            args: Prisma.CategoryTranslationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CategoryTranslationGroupByOutputType>[];
          };
          count: {
            args: Prisma.CategoryTranslationCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<CategoryTranslationCountAggregateOutputType>
              | number;
          };
        };
      };
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>;
        fields: Prisma.ServiceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>;
          };
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>;
          };
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[];
          };
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>;
          };
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[];
          };
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>;
          };
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>;
          };
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[];
          };
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>;
          };
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateService>;
          };
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ServiceGroupByOutputType>[];
          };
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>;
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number;
          };
        };
      };
      ServiceTranslation: {
        payload: Prisma.$ServiceTranslationPayload<ExtArgs>;
        fields: Prisma.ServiceTranslationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ServiceTranslationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceTranslationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ServiceTranslationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceTranslationPayload>;
          };
          findFirst: {
            args: Prisma.ServiceTranslationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceTranslationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ServiceTranslationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceTranslationPayload>;
          };
          findMany: {
            args: Prisma.ServiceTranslationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceTranslationPayload>[];
          };
          create: {
            args: Prisma.ServiceTranslationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceTranslationPayload>;
          };
          createMany: {
            args: Prisma.ServiceTranslationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ServiceTranslationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceTranslationPayload>[];
          };
          delete: {
            args: Prisma.ServiceTranslationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceTranslationPayload>;
          };
          update: {
            args: Prisma.ServiceTranslationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceTranslationPayload>;
          };
          deleteMany: {
            args: Prisma.ServiceTranslationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ServiceTranslationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ServiceTranslationUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceTranslationPayload>[];
          };
          upsert: {
            args: Prisma.ServiceTranslationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServiceTranslationPayload>;
          };
          aggregate: {
            args: Prisma.ServiceTranslationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateServiceTranslation>;
          };
          groupBy: {
            args: Prisma.ServiceTranslationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ServiceTranslationGroupByOutputType>[];
          };
          count: {
            args: Prisma.ServiceTranslationCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ServiceTranslationCountAggregateOutputType>
              | number;
          };
        };
      };
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>;
        fields: Prisma.ContactFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>;
          };
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>;
          };
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[];
          };
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>;
          };
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[];
          };
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>;
          };
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>;
          };
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[];
          };
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>;
          };
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateContact>;
          };
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ContactGroupByOutputType>[];
          };
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>;
            result: $Utils.Optional<ContactCountAggregateOutputType> | number;
          };
        };
      };
      ContactTranslation: {
        payload: Prisma.$ContactTranslationPayload<ExtArgs>;
        fields: Prisma.ContactTranslationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ContactTranslationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactTranslationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ContactTranslationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactTranslationPayload>;
          };
          findFirst: {
            args: Prisma.ContactTranslationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactTranslationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ContactTranslationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactTranslationPayload>;
          };
          findMany: {
            args: Prisma.ContactTranslationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactTranslationPayload>[];
          };
          create: {
            args: Prisma.ContactTranslationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactTranslationPayload>;
          };
          createMany: {
            args: Prisma.ContactTranslationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ContactTranslationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactTranslationPayload>[];
          };
          delete: {
            args: Prisma.ContactTranslationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactTranslationPayload>;
          };
          update: {
            args: Prisma.ContactTranslationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactTranslationPayload>;
          };
          deleteMany: {
            args: Prisma.ContactTranslationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ContactTranslationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ContactTranslationUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactTranslationPayload>[];
          };
          upsert: {
            args: Prisma.ContactTranslationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ContactTranslationPayload>;
          };
          aggregate: {
            args: Prisma.ContactTranslationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateContactTranslation>;
          };
          groupBy: {
            args: Prisma.ContactTranslationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ContactTranslationGroupByOutputType>[];
          };
          count: {
            args: Prisma.ContactTranslationCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ContactTranslationCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory;
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string;
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    refreshToken?: RefreshTokenOmit;
    passwordResetToken?: PasswordResetTokenOmit;
    category?: CategoryOmit;
    categoryTranslation?: CategoryTranslationOmit;
    service?: ServiceOmit;
    serviceTranslation?: ServiceTranslationOmit;
    contact?: ContactOmit;
    contactTranslation?: ContactTranslationOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    refreshTokens: number;
    passwordResetTokens: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs;
    passwordResetTokens?:
      | boolean
      | UserCountOutputTypeCountPasswordResetTokensArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RefreshTokenWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPasswordResetTokensArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PasswordResetTokenWhereInput;
  };

  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    services: number;
    contacts: number;
    translations: number;
  };

  export type CategoryCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    services?: boolean | CategoryCountOutputTypeCountServicesArgs;
    contacts?: boolean | CategoryCountOutputTypeCountContactsArgs;
    translations?: boolean | CategoryCountOutputTypeCountTranslationsArgs;
  };

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountServicesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ServiceWhereInput;
  };

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountContactsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ContactWhereInput;
  };

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountTranslationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CategoryTranslationWhereInput;
  };

  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    translations: number;
  };

  export type ServiceCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    translations?: boolean | ServiceCountOutputTypeCountTranslationsArgs;
  };

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountTranslationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ServiceTranslationWhereInput;
  };

  /**
   * Count Type ContactCountOutputType
   */

  export type ContactCountOutputType = {
    translations: number;
  };

  export type ContactCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    translations?: boolean | ContactCountOutputTypeCountTranslationsArgs;
  };

  // Custom InputTypes
  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ContactCountOutputType
     */
    select?: ContactCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeCountTranslationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ContactTranslationWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    role: $Enums.Role | null;
    isVerified: boolean | null;
    createdAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    role: $Enums.Role | null;
    isVerified: boolean | null;
    createdAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    passwordHash: number;
    role: number;
    isVerified: number;
    createdAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    role?: true;
    isVerified?: true;
    createdAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    role?: true;
    isVerified?: true;
    createdAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    role?: true;
    isVerified?: true;
    createdAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    passwordHash: string;
    role: $Enums.Role;
    isVerified: boolean;
    createdAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      passwordHash?: boolean;
      role?: boolean;
      isVerified?: boolean;
      createdAt?: boolean;
      refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>;
      passwordResetTokens?: boolean | User$passwordResetTokensArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      passwordHash?: boolean;
      role?: boolean;
      isVerified?: boolean;
      createdAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      passwordHash?: boolean;
      role?: boolean;
      isVerified?: boolean;
      createdAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    isVerified?: boolean;
    createdAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'email' | 'passwordHash' | 'role' | 'isVerified' | 'createdAt',
    ExtArgs['result']['user']
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>;
    passwordResetTokens?: boolean | User$passwordResetTokensArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[];
      passwordResetTokens: Prisma.$PasswordResetTokenPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        passwordHash: string;
        role: $Enums.Role;
        isVerified: boolean;
        createdAt: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(
      args?: Subset<T, User$refreshTokensArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$RefreshTokenPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    passwordResetTokens<T extends User$passwordResetTokensArgs<ExtArgs> = {}>(
      args?: Subset<T, User$passwordResetTokensArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PasswordResetTokenPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly passwordHash: FieldRef<'User', 'String'>;
    readonly role: FieldRef<'User', 'Role'>;
    readonly isVerified: FieldRef<'User', 'Boolean'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    where?: RefreshTokenWhereInput;
    orderBy?:
      | RefreshTokenOrderByWithRelationInput
      | RefreshTokenOrderByWithRelationInput[];
    cursor?: RefreshTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[];
  };

  /**
   * User.passwordResetTokens
   */
  export type User$passwordResetTokensArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null;
    where?: PasswordResetTokenWhereInput;
    orderBy?:
      | PasswordResetTokenOrderByWithRelationInput
      | PasswordResetTokenOrderByWithRelationInput[];
    cursor?: PasswordResetTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | PasswordResetTokenScalarFieldEnum
      | PasswordResetTokenScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null;
    _min: RefreshTokenMinAggregateOutputType | null;
    _max: RefreshTokenMaxAggregateOutputType | null;
  };

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null;
    tokenHash: string | null;
    userId: string | null;
    expiresAt: Date | null;
  };

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null;
    tokenHash: string | null;
    userId: string | null;
    expiresAt: Date | null;
  };

  export type RefreshTokenCountAggregateOutputType = {
    id: number;
    tokenHash: number;
    userId: number;
    expiresAt: number;
    _all: number;
  };

  export type RefreshTokenMinAggregateInputType = {
    id?: true;
    tokenHash?: true;
    userId?: true;
    expiresAt?: true;
  };

  export type RefreshTokenMaxAggregateInputType = {
    id?: true;
    tokenHash?: true;
    userId?: true;
    expiresAt?: true;
  };

  export type RefreshTokenCountAggregateInputType = {
    id?: true;
    tokenHash?: true;
    userId?: true;
    expiresAt?: true;
    _all?: true;
  };

  export type RefreshTokenAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?:
      | RefreshTokenOrderByWithRelationInput
      | RefreshTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RefreshTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RefreshTokens
     **/
    _count?: true | RefreshTokenCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RefreshTokenMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RefreshTokenMaxAggregateInputType;
  };

  export type GetRefreshTokenAggregateType<
    T extends RefreshTokenAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>;
  };

  export type RefreshTokenGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RefreshTokenWhereInput;
    orderBy?:
      | RefreshTokenOrderByWithAggregationInput
      | RefreshTokenOrderByWithAggregationInput[];
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum;
    having?: RefreshTokenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RefreshTokenCountAggregateInputType | true;
    _min?: RefreshTokenMinAggregateInputType;
    _max?: RefreshTokenMaxAggregateInputType;
  };

  export type RefreshTokenGroupByOutputType = {
    id: string;
    tokenHash: string;
    userId: string;
    expiresAt: Date;
    _count: RefreshTokenCountAggregateOutputType | null;
    _min: RefreshTokenMinAggregateOutputType | null;
    _max: RefreshTokenMaxAggregateOutputType | null;
  };

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<RefreshTokenGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof RefreshTokenGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>;
        }
      >
    >;

  export type RefreshTokenSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      tokenHash?: boolean;
      userId?: boolean;
      expiresAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['refreshToken']
  >;

  export type RefreshTokenSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      tokenHash?: boolean;
      userId?: boolean;
      expiresAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['refreshToken']
  >;

  export type RefreshTokenSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      tokenHash?: boolean;
      userId?: boolean;
      expiresAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['refreshToken']
  >;

  export type RefreshTokenSelectScalar = {
    id?: boolean;
    tokenHash?: boolean;
    userId?: boolean;
    expiresAt?: boolean;
  };

  export type RefreshTokenOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'tokenHash' | 'userId' | 'expiresAt',
    ExtArgs['result']['refreshToken']
  >;
  export type RefreshTokenInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type RefreshTokenIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type RefreshTokenIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $RefreshTokenPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'RefreshToken';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        tokenHash: string;
        userId: string;
        expiresAt: Date;
      },
      ExtArgs['result']['refreshToken']
    >;
    composites: {};
  };

  type RefreshTokenGetPayload<
    S extends boolean | null | undefined | RefreshTokenDefaultArgs,
  > = $Result.GetResult<Prisma.$RefreshTokenPayload, S>;

  type RefreshTokenCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    RefreshTokenFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: RefreshTokenCountAggregateInputType | true;
  };

  export interface RefreshTokenDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'];
      meta: { name: 'RefreshToken' };
    };
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(
      args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>,
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(
      args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(
      args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>,
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     *
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RefreshTokenFindManyArgs>(
      args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     *
     */
    create<T extends RefreshTokenCreateArgs>(
      args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>,
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RefreshTokenCreateManyArgs>(
      args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(
      args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     *
     */
    delete<T extends RefreshTokenDeleteArgs>(
      args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>,
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RefreshTokenUpdateArgs>(
      args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>,
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(
      args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(
      args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(
      args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(
      args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>,
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
     **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends RefreshTokenAggregateArgs>(
      args: Subset<T, RefreshTokenAggregateArgs>,
    ): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>;

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetRefreshTokenGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the RefreshToken model
     */
    readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<'RefreshToken', 'String'>;
    readonly tokenHash: FieldRef<'RefreshToken', 'String'>;
    readonly userId: FieldRef<'RefreshToken', 'String'>;
    readonly expiresAt: FieldRef<'RefreshToken', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput;
  };

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput;
  };

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?:
      | RefreshTokenOrderByWithRelationInput
      | RefreshTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RefreshTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[];
  };

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?:
      | RefreshTokenOrderByWithRelationInput
      | RefreshTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RefreshTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[];
  };

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?:
      | RefreshTokenOrderByWithRelationInput
      | RefreshTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RefreshTokens.
     */
    skip?: number;
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[];
  };

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>;
  };

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>;
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput;
  };

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<
      RefreshTokenUpdateManyMutationInput,
      RefreshTokenUncheckedUpdateManyInput
    >;
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput;
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number;
  };

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<
      RefreshTokenUpdateManyMutationInput,
      RefreshTokenUncheckedUpdateManyInput
    >;
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput;
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput;
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>;
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>;
  };

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput;
  };

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput;
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number;
  };

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
  };

  /**
   * Model PasswordResetToken
   */

  export type AggregatePasswordResetToken = {
    _count: PasswordResetTokenCountAggregateOutputType | null;
    _min: PasswordResetTokenMinAggregateOutputType | null;
    _max: PasswordResetTokenMaxAggregateOutputType | null;
  };

  export type PasswordResetTokenMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    tokenHash: string | null;
    expiresAt: Date | null;
  };

  export type PasswordResetTokenMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    tokenHash: string | null;
    expiresAt: Date | null;
  };

  export type PasswordResetTokenCountAggregateOutputType = {
    id: number;
    userId: number;
    tokenHash: number;
    expiresAt: number;
    _all: number;
  };

  export type PasswordResetTokenMinAggregateInputType = {
    id?: true;
    userId?: true;
    tokenHash?: true;
    expiresAt?: true;
  };

  export type PasswordResetTokenMaxAggregateInputType = {
    id?: true;
    userId?: true;
    tokenHash?: true;
    expiresAt?: true;
  };

  export type PasswordResetTokenCountAggregateInputType = {
    id?: true;
    userId?: true;
    tokenHash?: true;
    expiresAt?: true;
    _all?: true;
  };

  export type PasswordResetTokenAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PasswordResetToken to aggregate.
     */
    where?: PasswordResetTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?:
      | PasswordResetTokenOrderByWithRelationInput
      | PasswordResetTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PasswordResetTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PasswordResetTokens
     **/
    _count?: true | PasswordResetTokenCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PasswordResetTokenMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PasswordResetTokenMaxAggregateInputType;
  };

  export type GetPasswordResetTokenAggregateType<
    T extends PasswordResetTokenAggregateArgs,
  > = {
    [P in keyof T & keyof AggregatePasswordResetToken]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetToken[P]>
      : GetScalarType<T[P], AggregatePasswordResetToken[P]>;
  };

  export type PasswordResetTokenGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PasswordResetTokenWhereInput;
    orderBy?:
      | PasswordResetTokenOrderByWithAggregationInput
      | PasswordResetTokenOrderByWithAggregationInput[];
    by: PasswordResetTokenScalarFieldEnum[] | PasswordResetTokenScalarFieldEnum;
    having?: PasswordResetTokenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PasswordResetTokenCountAggregateInputType | true;
    _min?: PasswordResetTokenMinAggregateInputType;
    _max?: PasswordResetTokenMaxAggregateInputType;
  };

  export type PasswordResetTokenGroupByOutputType = {
    id: string;
    userId: string;
    tokenHash: string;
    expiresAt: Date;
    _count: PasswordResetTokenCountAggregateOutputType | null;
    _min: PasswordResetTokenMinAggregateOutputType | null;
    _max: PasswordResetTokenMaxAggregateOutputType | null;
  };

  type GetPasswordResetTokenGroupByPayload<
    T extends PasswordResetTokenGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetTokenGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof PasswordResetTokenGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
          : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>;
      }
    >
  >;

  export type PasswordResetTokenSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      tokenHash?: boolean;
      expiresAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['passwordResetToken']
  >;

  export type PasswordResetTokenSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      tokenHash?: boolean;
      expiresAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['passwordResetToken']
  >;

  export type PasswordResetTokenSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      tokenHash?: boolean;
      expiresAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['passwordResetToken']
  >;

  export type PasswordResetTokenSelectScalar = {
    id?: boolean;
    userId?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
  };

  export type PasswordResetTokenOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'userId' | 'tokenHash' | 'expiresAt',
    ExtArgs['result']['passwordResetToken']
  >;
  export type PasswordResetTokenInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type PasswordResetTokenIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type PasswordResetTokenIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $PasswordResetTokenPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'PasswordResetToken';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        tokenHash: string;
        expiresAt: Date;
      },
      ExtArgs['result']['passwordResetToken']
    >;
    composites: {};
  };

  type PasswordResetTokenGetPayload<
    S extends boolean | null | undefined | PasswordResetTokenDefaultArgs,
  > = $Result.GetResult<Prisma.$PasswordResetTokenPayload, S>;

  type PasswordResetTokenCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    PasswordResetTokenFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: PasswordResetTokenCountAggregateInputType | true;
  };

  export interface PasswordResetTokenDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['PasswordResetToken'];
      meta: { name: 'PasswordResetToken' };
    };
    /**
     * Find zero or one PasswordResetToken that matches the filter.
     * @param {PasswordResetTokenFindUniqueArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetTokenFindUniqueArgs>(
      args: SelectSubset<T, PasswordResetTokenFindUniqueArgs<ExtArgs>>,
    ): Prisma__PasswordResetTokenClient<
      $Result.GetResult<
        Prisma.$PasswordResetTokenPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one PasswordResetToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetTokenFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetTokenFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__PasswordResetTokenClient<
      $Result.GetResult<
        Prisma.$PasswordResetTokenPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first PasswordResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetTokenFindFirstArgs>(
      args?: SelectSubset<T, PasswordResetTokenFindFirstArgs<ExtArgs>>,
    ): Prisma__PasswordResetTokenClient<
      $Result.GetResult<
        Prisma.$PasswordResetTokenPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first PasswordResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetTokenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__PasswordResetTokenClient<
      $Result.GetResult<
        Prisma.$PasswordResetTokenPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany()
     *
     * // Get first 10 PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PasswordResetTokenFindManyArgs>(
      args?: SelectSubset<T, PasswordResetTokenFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PasswordResetTokenPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a PasswordResetToken.
     * @param {PasswordResetTokenCreateArgs} args - Arguments to create a PasswordResetToken.
     * @example
     * // Create one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.create({
     *   data: {
     *     // ... data to create a PasswordResetToken
     *   }
     * })
     *
     */
    create<T extends PasswordResetTokenCreateArgs>(
      args: SelectSubset<T, PasswordResetTokenCreateArgs<ExtArgs>>,
    ): Prisma__PasswordResetTokenClient<
      $Result.GetResult<
        Prisma.$PasswordResetTokenPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many PasswordResetTokens.
     * @param {PasswordResetTokenCreateManyArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PasswordResetTokenCreateManyArgs>(
      args?: SelectSubset<T, PasswordResetTokenCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many PasswordResetTokens and returns the data saved in the database.
     * @param {PasswordResetTokenCreateManyAndReturnArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PasswordResetTokenCreateManyAndReturnArgs>(
      args?: SelectSubset<
        T,
        PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PasswordResetTokenPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a PasswordResetToken.
     * @param {PasswordResetTokenDeleteArgs} args - Arguments to delete one PasswordResetToken.
     * @example
     * // Delete one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetToken
     *   }
     * })
     *
     */
    delete<T extends PasswordResetTokenDeleteArgs>(
      args: SelectSubset<T, PasswordResetTokenDeleteArgs<ExtArgs>>,
    ): Prisma__PasswordResetTokenClient<
      $Result.GetResult<
        Prisma.$PasswordResetTokenPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one PasswordResetToken.
     * @param {PasswordResetTokenUpdateArgs} args - Arguments to update one PasswordResetToken.
     * @example
     * // Update one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PasswordResetTokenUpdateArgs>(
      args: SelectSubset<T, PasswordResetTokenUpdateArgs<ExtArgs>>,
    ): Prisma__PasswordResetTokenClient<
      $Result.GetResult<
        Prisma.$PasswordResetTokenPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more PasswordResetTokens.
     * @param {PasswordResetTokenDeleteManyArgs} args - Arguments to filter PasswordResetTokens to delete.
     * @example
     * // Delete a few PasswordResetTokens
     * const { count } = await prisma.passwordResetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PasswordResetTokenDeleteManyArgs>(
      args?: SelectSubset<T, PasswordResetTokenDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PasswordResetTokenUpdateManyArgs>(
      args: SelectSubset<T, PasswordResetTokenUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PasswordResetTokens and returns the data updated in the database.
     * @param {PasswordResetTokenUpdateManyAndReturnArgs} args - Arguments to update many PasswordResetTokens.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PasswordResetTokenUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PasswordResetTokenPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one PasswordResetToken.
     * @param {PasswordResetTokenUpsertArgs} args - Arguments to update or create a PasswordResetToken.
     * @example
     * // Update or create a PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.upsert({
     *   create: {
     *     // ... data to create a PasswordResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetToken we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetTokenUpsertArgs>(
      args: SelectSubset<T, PasswordResetTokenUpsertArgs<ExtArgs>>,
    ): Prisma__PasswordResetTokenClient<
      $Result.GetResult<
        Prisma.$PasswordResetTokenPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenCountArgs} args - Arguments to filter PasswordResetTokens to count.
     * @example
     * // Count the number of PasswordResetTokens
     * const count = await prisma.passwordResetToken.count({
     *   where: {
     *     // ... the filter for the PasswordResetTokens we want to count
     *   }
     * })
     **/
    count<T extends PasswordResetTokenCountArgs>(
      args?: Subset<T, PasswordResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<
              T['select'],
              PasswordResetTokenCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PasswordResetTokenAggregateArgs>(
      args: Subset<T, PasswordResetTokenAggregateArgs>,
    ): Prisma.PrismaPromise<GetPasswordResetTokenAggregateType<T>>;

    /**
     * Group by PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends PasswordResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PasswordResetTokenGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetPasswordResetTokenGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PasswordResetToken model
     */
    readonly fields: PasswordResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetTokenClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the PasswordResetToken model
   */
  interface PasswordResetTokenFieldRefs {
    readonly id: FieldRef<'PasswordResetToken', 'String'>;
    readonly userId: FieldRef<'PasswordResetToken', 'String'>;
    readonly tokenHash: FieldRef<'PasswordResetToken', 'String'>;
    readonly expiresAt: FieldRef<'PasswordResetToken', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * PasswordResetToken findUnique
   */
  export type PasswordResetTokenFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null;
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput;
  };

  /**
   * PasswordResetToken findUniqueOrThrow
   */
  export type PasswordResetTokenFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null;
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput;
  };

  /**
   * PasswordResetToken findFirst
   */
  export type PasswordResetTokenFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null;
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?:
      | PasswordResetTokenOrderByWithRelationInput
      | PasswordResetTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?:
      | PasswordResetTokenScalarFieldEnum
      | PasswordResetTokenScalarFieldEnum[];
  };

  /**
   * PasswordResetToken findFirstOrThrow
   */
  export type PasswordResetTokenFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null;
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?:
      | PasswordResetTokenOrderByWithRelationInput
      | PasswordResetTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?:
      | PasswordResetTokenScalarFieldEnum
      | PasswordResetTokenScalarFieldEnum[];
  };

  /**
   * PasswordResetToken findMany
   */
  export type PasswordResetTokenFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null;
    /**
     * Filter, which PasswordResetTokens to fetch.
     */
    where?: PasswordResetTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?:
      | PasswordResetTokenOrderByWithRelationInput
      | PasswordResetTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number;
    distinct?:
      | PasswordResetTokenScalarFieldEnum
      | PasswordResetTokenScalarFieldEnum[];
  };

  /**
   * PasswordResetToken create
   */
  export type PasswordResetTokenCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null;
    /**
     * The data needed to create a PasswordResetToken.
     */
    data: XOR<
      PasswordResetTokenCreateInput,
      PasswordResetTokenUncheckedCreateInput
    >;
  };

  /**
   * PasswordResetToken createMany
   */
  export type PasswordResetTokenCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many PasswordResetTokens.
     */
    data:
      | PasswordResetTokenCreateManyInput
      | PasswordResetTokenCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * PasswordResetToken createManyAndReturn
   */
  export type PasswordResetTokenCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null;
    /**
     * The data used to create many PasswordResetTokens.
     */
    data:
      | PasswordResetTokenCreateManyInput
      | PasswordResetTokenCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PasswordResetToken update
   */
  export type PasswordResetTokenUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null;
    /**
     * The data needed to update a PasswordResetToken.
     */
    data: XOR<
      PasswordResetTokenUpdateInput,
      PasswordResetTokenUncheckedUpdateInput
    >;
    /**
     * Choose, which PasswordResetToken to update.
     */
    where: PasswordResetTokenWhereUniqueInput;
  };

  /**
   * PasswordResetToken updateMany
   */
  export type PasswordResetTokenUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<
      PasswordResetTokenUpdateManyMutationInput,
      PasswordResetTokenUncheckedUpdateManyInput
    >;
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput;
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number;
  };

  /**
   * PasswordResetToken updateManyAndReturn
   */
  export type PasswordResetTokenUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null;
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<
      PasswordResetTokenUpdateManyMutationInput,
      PasswordResetTokenUncheckedUpdateManyInput
    >;
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput;
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PasswordResetToken upsert
   */
  export type PasswordResetTokenUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null;
    /**
     * The filter to search for the PasswordResetToken to update in case it exists.
     */
    where: PasswordResetTokenWhereUniqueInput;
    /**
     * In case the PasswordResetToken found by the `where` argument doesn't exist, create a new PasswordResetToken with this data.
     */
    create: XOR<
      PasswordResetTokenCreateInput,
      PasswordResetTokenUncheckedCreateInput
    >;
    /**
     * In case the PasswordResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      PasswordResetTokenUpdateInput,
      PasswordResetTokenUncheckedUpdateInput
    >;
  };

  /**
   * PasswordResetToken delete
   */
  export type PasswordResetTokenDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null;
    /**
     * Filter which PasswordResetToken to delete.
     */
    where: PasswordResetTokenWhereUniqueInput;
  };

  /**
   * PasswordResetToken deleteMany
   */
  export type PasswordResetTokenDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PasswordResetTokens to delete
     */
    where?: PasswordResetTokenWhereInput;
    /**
     * Limit how many PasswordResetTokens to delete.
     */
    limit?: number;
  };

  /**
   * PasswordResetToken without action
   */
  export type PasswordResetTokenDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null;
  };

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null;
    _avg: CategoryAvgAggregateOutputType | null;
    _sum: CategorySumAggregateOutputType | null;
    _min: CategoryMinAggregateOutputType | null;
    _max: CategoryMaxAggregateOutputType | null;
  };

  export type CategoryAvgAggregateOutputType = {
    order: number | null;
  };

  export type CategorySumAggregateOutputType = {
    order: number | null;
  };

  export type CategoryMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    type: $Enums.CategoryType | null;
    order: number | null;
    isActive: boolean | null;
  };

  export type CategoryMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    type: $Enums.CategoryType | null;
    order: number | null;
    isActive: boolean | null;
  };

  export type CategoryCountAggregateOutputType = {
    id: number;
    code: number;
    type: number;
    order: number;
    isActive: number;
    _all: number;
  };

  export type CategoryAvgAggregateInputType = {
    order?: true;
  };

  export type CategorySumAggregateInputType = {
    order?: true;
  };

  export type CategoryMinAggregateInputType = {
    id?: true;
    code?: true;
    type?: true;
    order?: true;
    isActive?: true;
  };

  export type CategoryMaxAggregateInputType = {
    id?: true;
    code?: true;
    type?: true;
    order?: true;
    isActive?: true;
  };

  export type CategoryCountAggregateInputType = {
    id?: true;
    code?: true;
    type?: true;
    order?: true;
    isActive?: true;
    _all?: true;
  };

  export type CategoryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Categories
     **/
    _count?: true | CategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CategoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CategorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CategoryMaxAggregateInputType;
  };

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>;
  };

  export type CategoryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CategoryWhereInput;
    orderBy?:
      | CategoryOrderByWithAggregationInput
      | CategoryOrderByWithAggregationInput[];
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum;
    having?: CategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoryCountAggregateInputType | true;
    _avg?: CategoryAvgAggregateInputType;
    _sum?: CategorySumAggregateInputType;
    _min?: CategoryMinAggregateInputType;
    _max?: CategoryMaxAggregateInputType;
  };

  export type CategoryGroupByOutputType = {
    id: string;
    code: string;
    type: $Enums.CategoryType;
    order: number;
    isActive: boolean;
    _count: CategoryCountAggregateOutputType | null;
    _avg: CategoryAvgAggregateOutputType | null;
    _sum: CategorySumAggregateOutputType | null;
    _min: CategoryMinAggregateOutputType | null;
    _max: CategoryMaxAggregateOutputType | null;
  };

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CategoryGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CategoryGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>;
        }
      >
    >;

  export type CategorySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      code?: boolean;
      type?: boolean;
      order?: boolean;
      isActive?: boolean;
      services?: boolean | Category$servicesArgs<ExtArgs>;
      contacts?: boolean | Category$contactsArgs<ExtArgs>;
      translations?: boolean | Category$translationsArgs<ExtArgs>;
      _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['category']
  >;

  export type CategorySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      code?: boolean;
      type?: boolean;
      order?: boolean;
      isActive?: boolean;
    },
    ExtArgs['result']['category']
  >;

  export type CategorySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      code?: boolean;
      type?: boolean;
      order?: boolean;
      isActive?: boolean;
    },
    ExtArgs['result']['category']
  >;

  export type CategorySelectScalar = {
    id?: boolean;
    code?: boolean;
    type?: boolean;
    order?: boolean;
    isActive?: boolean;
  };

  export type CategoryOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'code' | 'type' | 'order' | 'isActive',
    ExtArgs['result']['category']
  >;
  export type CategoryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    services?: boolean | Category$servicesArgs<ExtArgs>;
    contacts?: boolean | Category$contactsArgs<ExtArgs>;
    translations?: boolean | Category$translationsArgs<ExtArgs>;
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type CategoryIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type CategoryIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $CategoryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Category';
    objects: {
      services: Prisma.$ServicePayload<ExtArgs>[];
      contacts: Prisma.$ContactPayload<ExtArgs>[];
      translations: Prisma.$CategoryTranslationPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        code: string;
        type: $Enums.CategoryType;
        order: number;
        isActive: boolean;
      },
      ExtArgs['result']['category']
    >;
    composites: {};
  };

  type CategoryGetPayload<
    S extends boolean | null | undefined | CategoryDefaultArgs,
  > = $Result.GetResult<Prisma.$CategoryPayload, S>;

  type CategoryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CategoryCountAggregateInputType | true;
  };

  export interface CategoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Category'];
      meta: { name: 'Category' };
    };
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     *
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CategoryFindManyArgs>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     *
     */
    create<T extends CategoryCreateArgs>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CategoryCreateManyArgs>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     *
     */
    delete<T extends CategoryDeleteArgs>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CategoryUpdateArgs>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CategoryDeleteManyArgs>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CategoryUpdateManyArgs>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
     **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CategoryAggregateArgs>(
      args: Subset<T, CategoryAggregateArgs>,
    ): Prisma.PrismaPromise<GetCategoryAggregateType<T>>;

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCategoryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Category model
     */
    readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    services<T extends Category$servicesArgs<ExtArgs> = {}>(
      args?: Subset<T, Category$servicesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ServicePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    contacts<T extends Category$contactsArgs<ExtArgs> = {}>(
      args?: Subset<T, Category$contactsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ContactPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    translations<T extends Category$translationsArgs<ExtArgs> = {}>(
      args?: Subset<T, Category$translationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CategoryTranslationPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<'Category', 'String'>;
    readonly code: FieldRef<'Category', 'String'>;
    readonly type: FieldRef<'Category', 'CategoryType'>;
    readonly order: FieldRef<'Category', 'Int'>;
    readonly isActive: FieldRef<'Category', 'Boolean'>;
  }

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category create
   */
  export type CategoryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>;
  };

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Category update
   */
  export type CategoryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>;
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Categories.
     */
    data: XOR<
      CategoryUpdateManyMutationInput,
      CategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput;
    /**
     * Limit how many Categories to update.
     */
    limit?: number;
  };

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * The data used to update Categories.
     */
    data: XOR<
      CategoryUpdateManyMutationInput,
      CategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput;
    /**
     * Limit how many Categories to update.
     */
    limit?: number;
  };

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput;
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>;
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>;
  };

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput;
    /**
     * Limit how many Categories to delete.
     */
    limit?: number;
  };

  /**
   * Category.services
   */
  export type Category$servicesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    where?: ServiceWhereInput;
    orderBy?:
      | ServiceOrderByWithRelationInput
      | ServiceOrderByWithRelationInput[];
    cursor?: ServiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[];
  };

  /**
   * Category.contacts
   */
  export type Category$contactsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null;
    where?: ContactWhereInput;
    orderBy?:
      | ContactOrderByWithRelationInput
      | ContactOrderByWithRelationInput[];
    cursor?: ContactWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[];
  };

  /**
   * Category.translations
   */
  export type Category$translationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryTranslation
     */
    select?: CategoryTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategoryTranslation
     */
    omit?: CategoryTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTranslationInclude<ExtArgs> | null;
    where?: CategoryTranslationWhereInput;
    orderBy?:
      | CategoryTranslationOrderByWithRelationInput
      | CategoryTranslationOrderByWithRelationInput[];
    cursor?: CategoryTranslationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | CategoryTranslationScalarFieldEnum
      | CategoryTranslationScalarFieldEnum[];
  };

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
  };

  /**
   * Model CategoryTranslation
   */

  export type AggregateCategoryTranslation = {
    _count: CategoryTranslationCountAggregateOutputType | null;
    _min: CategoryTranslationMinAggregateOutputType | null;
    _max: CategoryTranslationMaxAggregateOutputType | null;
  };

  export type CategoryTranslationMinAggregateOutputType = {
    id: string | null;
    categoryId: string | null;
    locale: $Enums.Locale | null;
    label: string | null;
    slug: string | null;
  };

  export type CategoryTranslationMaxAggregateOutputType = {
    id: string | null;
    categoryId: string | null;
    locale: $Enums.Locale | null;
    label: string | null;
    slug: string | null;
  };

  export type CategoryTranslationCountAggregateOutputType = {
    id: number;
    categoryId: number;
    locale: number;
    label: number;
    slug: number;
    _all: number;
  };

  export type CategoryTranslationMinAggregateInputType = {
    id?: true;
    categoryId?: true;
    locale?: true;
    label?: true;
    slug?: true;
  };

  export type CategoryTranslationMaxAggregateInputType = {
    id?: true;
    categoryId?: true;
    locale?: true;
    label?: true;
    slug?: true;
  };

  export type CategoryTranslationCountAggregateInputType = {
    id?: true;
    categoryId?: true;
    locale?: true;
    label?: true;
    slug?: true;
    _all?: true;
  };

  export type CategoryTranslationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CategoryTranslation to aggregate.
     */
    where?: CategoryTranslationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CategoryTranslations to fetch.
     */
    orderBy?:
      | CategoryTranslationOrderByWithRelationInput
      | CategoryTranslationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CategoryTranslationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CategoryTranslations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CategoryTranslations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CategoryTranslations
     **/
    _count?: true | CategoryTranslationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CategoryTranslationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CategoryTranslationMaxAggregateInputType;
  };

  export type GetCategoryTranslationAggregateType<
    T extends CategoryTranslationAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateCategoryTranslation]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryTranslation[P]>
      : GetScalarType<T[P], AggregateCategoryTranslation[P]>;
  };

  export type CategoryTranslationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CategoryTranslationWhereInput;
    orderBy?:
      | CategoryTranslationOrderByWithAggregationInput
      | CategoryTranslationOrderByWithAggregationInput[];
    by:
      | CategoryTranslationScalarFieldEnum[]
      | CategoryTranslationScalarFieldEnum;
    having?: CategoryTranslationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoryTranslationCountAggregateInputType | true;
    _min?: CategoryTranslationMinAggregateInputType;
    _max?: CategoryTranslationMaxAggregateInputType;
  };

  export type CategoryTranslationGroupByOutputType = {
    id: string;
    categoryId: string;
    locale: $Enums.Locale;
    label: string;
    slug: string;
    _count: CategoryTranslationCountAggregateOutputType | null;
    _min: CategoryTranslationMinAggregateOutputType | null;
    _max: CategoryTranslationMaxAggregateOutputType | null;
  };

  type GetCategoryTranslationGroupByPayload<
    T extends CategoryTranslationGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryTranslationGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof CategoryTranslationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CategoryTranslationGroupByOutputType[P]>
          : GetScalarType<T[P], CategoryTranslationGroupByOutputType[P]>;
      }
    >
  >;

  export type CategoryTranslationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      categoryId?: boolean;
      locale?: boolean;
      label?: boolean;
      slug?: boolean;
      category?: boolean | CategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['categoryTranslation']
  >;

  export type CategoryTranslationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      categoryId?: boolean;
      locale?: boolean;
      label?: boolean;
      slug?: boolean;
      category?: boolean | CategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['categoryTranslation']
  >;

  export type CategoryTranslationSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      categoryId?: boolean;
      locale?: boolean;
      label?: boolean;
      slug?: boolean;
      category?: boolean | CategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['categoryTranslation']
  >;

  export type CategoryTranslationSelectScalar = {
    id?: boolean;
    categoryId?: boolean;
    locale?: boolean;
    label?: boolean;
    slug?: boolean;
  };

  export type CategoryTranslationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'categoryId' | 'locale' | 'label' | 'slug',
    ExtArgs['result']['categoryTranslation']
  >;
  export type CategoryTranslationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>;
  };
  export type CategoryTranslationIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>;
  };
  export type CategoryTranslationIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>;
  };

  export type $CategoryTranslationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'CategoryTranslation';
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        categoryId: string;
        locale: $Enums.Locale;
        label: string;
        slug: string;
      },
      ExtArgs['result']['categoryTranslation']
    >;
    composites: {};
  };

  type CategoryTranslationGetPayload<
    S extends boolean | null | undefined | CategoryTranslationDefaultArgs,
  > = $Result.GetResult<Prisma.$CategoryTranslationPayload, S>;

  type CategoryTranslationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    CategoryTranslationFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: CategoryTranslationCountAggregateInputType | true;
  };

  export interface CategoryTranslationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['CategoryTranslation'];
      meta: { name: 'CategoryTranslation' };
    };
    /**
     * Find zero or one CategoryTranslation that matches the filter.
     * @param {CategoryTranslationFindUniqueArgs} args - Arguments to find a CategoryTranslation
     * @example
     * // Get one CategoryTranslation
     * const categoryTranslation = await prisma.categoryTranslation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryTranslationFindUniqueArgs>(
      args: SelectSubset<T, CategoryTranslationFindUniqueArgs<ExtArgs>>,
    ): Prisma__CategoryTranslationClient<
      $Result.GetResult<
        Prisma.$CategoryTranslationPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one CategoryTranslation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryTranslationFindUniqueOrThrowArgs} args - Arguments to find a CategoryTranslation
     * @example
     * // Get one CategoryTranslation
     * const categoryTranslation = await prisma.categoryTranslation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryTranslationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CategoryTranslationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CategoryTranslationClient<
      $Result.GetResult<
        Prisma.$CategoryTranslationPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CategoryTranslation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryTranslationFindFirstArgs} args - Arguments to find a CategoryTranslation
     * @example
     * // Get one CategoryTranslation
     * const categoryTranslation = await prisma.categoryTranslation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryTranslationFindFirstArgs>(
      args?: SelectSubset<T, CategoryTranslationFindFirstArgs<ExtArgs>>,
    ): Prisma__CategoryTranslationClient<
      $Result.GetResult<
        Prisma.$CategoryTranslationPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CategoryTranslation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryTranslationFindFirstOrThrowArgs} args - Arguments to find a CategoryTranslation
     * @example
     * // Get one CategoryTranslation
     * const categoryTranslation = await prisma.categoryTranslation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryTranslationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CategoryTranslationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CategoryTranslationClient<
      $Result.GetResult<
        Prisma.$CategoryTranslationPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more CategoryTranslations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryTranslationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryTranslations
     * const categoryTranslations = await prisma.categoryTranslation.findMany()
     *
     * // Get first 10 CategoryTranslations
     * const categoryTranslations = await prisma.categoryTranslation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const categoryTranslationWithIdOnly = await prisma.categoryTranslation.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CategoryTranslationFindManyArgs>(
      args?: SelectSubset<T, CategoryTranslationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryTranslationPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a CategoryTranslation.
     * @param {CategoryTranslationCreateArgs} args - Arguments to create a CategoryTranslation.
     * @example
     * // Create one CategoryTranslation
     * const CategoryTranslation = await prisma.categoryTranslation.create({
     *   data: {
     *     // ... data to create a CategoryTranslation
     *   }
     * })
     *
     */
    create<T extends CategoryTranslationCreateArgs>(
      args: SelectSubset<T, CategoryTranslationCreateArgs<ExtArgs>>,
    ): Prisma__CategoryTranslationClient<
      $Result.GetResult<
        Prisma.$CategoryTranslationPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many CategoryTranslations.
     * @param {CategoryTranslationCreateManyArgs} args - Arguments to create many CategoryTranslations.
     * @example
     * // Create many CategoryTranslations
     * const categoryTranslation = await prisma.categoryTranslation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CategoryTranslationCreateManyArgs>(
      args?: SelectSubset<T, CategoryTranslationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many CategoryTranslations and returns the data saved in the database.
     * @param {CategoryTranslationCreateManyAndReturnArgs} args - Arguments to create many CategoryTranslations.
     * @example
     * // Create many CategoryTranslations
     * const categoryTranslation = await prisma.categoryTranslation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CategoryTranslations and only return the `id`
     * const categoryTranslationWithIdOnly = await prisma.categoryTranslation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CategoryTranslationCreateManyAndReturnArgs>(
      args?: SelectSubset<
        T,
        CategoryTranslationCreateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryTranslationPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a CategoryTranslation.
     * @param {CategoryTranslationDeleteArgs} args - Arguments to delete one CategoryTranslation.
     * @example
     * // Delete one CategoryTranslation
     * const CategoryTranslation = await prisma.categoryTranslation.delete({
     *   where: {
     *     // ... filter to delete one CategoryTranslation
     *   }
     * })
     *
     */
    delete<T extends CategoryTranslationDeleteArgs>(
      args: SelectSubset<T, CategoryTranslationDeleteArgs<ExtArgs>>,
    ): Prisma__CategoryTranslationClient<
      $Result.GetResult<
        Prisma.$CategoryTranslationPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one CategoryTranslation.
     * @param {CategoryTranslationUpdateArgs} args - Arguments to update one CategoryTranslation.
     * @example
     * // Update one CategoryTranslation
     * const categoryTranslation = await prisma.categoryTranslation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CategoryTranslationUpdateArgs>(
      args: SelectSubset<T, CategoryTranslationUpdateArgs<ExtArgs>>,
    ): Prisma__CategoryTranslationClient<
      $Result.GetResult<
        Prisma.$CategoryTranslationPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more CategoryTranslations.
     * @param {CategoryTranslationDeleteManyArgs} args - Arguments to filter CategoryTranslations to delete.
     * @example
     * // Delete a few CategoryTranslations
     * const { count } = await prisma.categoryTranslation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CategoryTranslationDeleteManyArgs>(
      args?: SelectSubset<T, CategoryTranslationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CategoryTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryTranslationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryTranslations
     * const categoryTranslation = await prisma.categoryTranslation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CategoryTranslationUpdateManyArgs>(
      args: SelectSubset<T, CategoryTranslationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CategoryTranslations and returns the data updated in the database.
     * @param {CategoryTranslationUpdateManyAndReturnArgs} args - Arguments to update many CategoryTranslations.
     * @example
     * // Update many CategoryTranslations
     * const categoryTranslation = await prisma.categoryTranslation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CategoryTranslations and only return the `id`
     * const categoryTranslationWithIdOnly = await prisma.categoryTranslation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CategoryTranslationUpdateManyAndReturnArgs>(
      args: SelectSubset<
        T,
        CategoryTranslationUpdateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryTranslationPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one CategoryTranslation.
     * @param {CategoryTranslationUpsertArgs} args - Arguments to update or create a CategoryTranslation.
     * @example
     * // Update or create a CategoryTranslation
     * const categoryTranslation = await prisma.categoryTranslation.upsert({
     *   create: {
     *     // ... data to create a CategoryTranslation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryTranslation we want to update
     *   }
     * })
     */
    upsert<T extends CategoryTranslationUpsertArgs>(
      args: SelectSubset<T, CategoryTranslationUpsertArgs<ExtArgs>>,
    ): Prisma__CategoryTranslationClient<
      $Result.GetResult<
        Prisma.$CategoryTranslationPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of CategoryTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryTranslationCountArgs} args - Arguments to filter CategoryTranslations to count.
     * @example
     * // Count the number of CategoryTranslations
     * const count = await prisma.categoryTranslation.count({
     *   where: {
     *     // ... the filter for the CategoryTranslations we want to count
     *   }
     * })
     **/
    count<T extends CategoryTranslationCountArgs>(
      args?: Subset<T, CategoryTranslationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<
              T['select'],
              CategoryTranslationCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a CategoryTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryTranslationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CategoryTranslationAggregateArgs>(
      args: Subset<T, CategoryTranslationAggregateArgs>,
    ): Prisma.PrismaPromise<GetCategoryTranslationAggregateType<T>>;

    /**
     * Group by CategoryTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryTranslationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CategoryTranslationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryTranslationGroupByArgs['orderBy'] }
        : { orderBy?: CategoryTranslationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CategoryTranslationGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCategoryTranslationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CategoryTranslation model
     */
    readonly fields: CategoryTranslationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoryTranslation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryTranslationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CategoryDefaultArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      | $Result.GetResult<
          Prisma.$CategoryPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the CategoryTranslation model
   */
  interface CategoryTranslationFieldRefs {
    readonly id: FieldRef<'CategoryTranslation', 'String'>;
    readonly categoryId: FieldRef<'CategoryTranslation', 'String'>;
    readonly locale: FieldRef<'CategoryTranslation', 'Locale'>;
    readonly label: FieldRef<'CategoryTranslation', 'String'>;
    readonly slug: FieldRef<'CategoryTranslation', 'String'>;
  }

  // Custom InputTypes
  /**
   * CategoryTranslation findUnique
   */
  export type CategoryTranslationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryTranslation
     */
    select?: CategoryTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategoryTranslation
     */
    omit?: CategoryTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTranslationInclude<ExtArgs> | null;
    /**
     * Filter, which CategoryTranslation to fetch.
     */
    where: CategoryTranslationWhereUniqueInput;
  };

  /**
   * CategoryTranslation findUniqueOrThrow
   */
  export type CategoryTranslationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryTranslation
     */
    select?: CategoryTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategoryTranslation
     */
    omit?: CategoryTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTranslationInclude<ExtArgs> | null;
    /**
     * Filter, which CategoryTranslation to fetch.
     */
    where: CategoryTranslationWhereUniqueInput;
  };

  /**
   * CategoryTranslation findFirst
   */
  export type CategoryTranslationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryTranslation
     */
    select?: CategoryTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategoryTranslation
     */
    omit?: CategoryTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTranslationInclude<ExtArgs> | null;
    /**
     * Filter, which CategoryTranslation to fetch.
     */
    where?: CategoryTranslationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CategoryTranslations to fetch.
     */
    orderBy?:
      | CategoryTranslationOrderByWithRelationInput
      | CategoryTranslationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CategoryTranslations.
     */
    cursor?: CategoryTranslationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CategoryTranslations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CategoryTranslations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CategoryTranslations.
     */
    distinct?:
      | CategoryTranslationScalarFieldEnum
      | CategoryTranslationScalarFieldEnum[];
  };

  /**
   * CategoryTranslation findFirstOrThrow
   */
  export type CategoryTranslationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryTranslation
     */
    select?: CategoryTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategoryTranslation
     */
    omit?: CategoryTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTranslationInclude<ExtArgs> | null;
    /**
     * Filter, which CategoryTranslation to fetch.
     */
    where?: CategoryTranslationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CategoryTranslations to fetch.
     */
    orderBy?:
      | CategoryTranslationOrderByWithRelationInput
      | CategoryTranslationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CategoryTranslations.
     */
    cursor?: CategoryTranslationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CategoryTranslations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CategoryTranslations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CategoryTranslations.
     */
    distinct?:
      | CategoryTranslationScalarFieldEnum
      | CategoryTranslationScalarFieldEnum[];
  };

  /**
   * CategoryTranslation findMany
   */
  export type CategoryTranslationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryTranslation
     */
    select?: CategoryTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategoryTranslation
     */
    omit?: CategoryTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTranslationInclude<ExtArgs> | null;
    /**
     * Filter, which CategoryTranslations to fetch.
     */
    where?: CategoryTranslationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CategoryTranslations to fetch.
     */
    orderBy?:
      | CategoryTranslationOrderByWithRelationInput
      | CategoryTranslationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CategoryTranslations.
     */
    cursor?: CategoryTranslationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CategoryTranslations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CategoryTranslations.
     */
    skip?: number;
    distinct?:
      | CategoryTranslationScalarFieldEnum
      | CategoryTranslationScalarFieldEnum[];
  };

  /**
   * CategoryTranslation create
   */
  export type CategoryTranslationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryTranslation
     */
    select?: CategoryTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategoryTranslation
     */
    omit?: CategoryTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTranslationInclude<ExtArgs> | null;
    /**
     * The data needed to create a CategoryTranslation.
     */
    data: XOR<
      CategoryTranslationCreateInput,
      CategoryTranslationUncheckedCreateInput
    >;
  };

  /**
   * CategoryTranslation createMany
   */
  export type CategoryTranslationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many CategoryTranslations.
     */
    data:
      | CategoryTranslationCreateManyInput
      | CategoryTranslationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CategoryTranslation createManyAndReturn
   */
  export type CategoryTranslationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryTranslation
     */
    select?: CategoryTranslationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CategoryTranslation
     */
    omit?: CategoryTranslationOmit<ExtArgs> | null;
    /**
     * The data used to create many CategoryTranslations.
     */
    data:
      | CategoryTranslationCreateManyInput
      | CategoryTranslationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTranslationIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * CategoryTranslation update
   */
  export type CategoryTranslationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryTranslation
     */
    select?: CategoryTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategoryTranslation
     */
    omit?: CategoryTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTranslationInclude<ExtArgs> | null;
    /**
     * The data needed to update a CategoryTranslation.
     */
    data: XOR<
      CategoryTranslationUpdateInput,
      CategoryTranslationUncheckedUpdateInput
    >;
    /**
     * Choose, which CategoryTranslation to update.
     */
    where: CategoryTranslationWhereUniqueInput;
  };

  /**
   * CategoryTranslation updateMany
   */
  export type CategoryTranslationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update CategoryTranslations.
     */
    data: XOR<
      CategoryTranslationUpdateManyMutationInput,
      CategoryTranslationUncheckedUpdateManyInput
    >;
    /**
     * Filter which CategoryTranslations to update
     */
    where?: CategoryTranslationWhereInput;
    /**
     * Limit how many CategoryTranslations to update.
     */
    limit?: number;
  };

  /**
   * CategoryTranslation updateManyAndReturn
   */
  export type CategoryTranslationUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryTranslation
     */
    select?: CategoryTranslationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CategoryTranslation
     */
    omit?: CategoryTranslationOmit<ExtArgs> | null;
    /**
     * The data used to update CategoryTranslations.
     */
    data: XOR<
      CategoryTranslationUpdateManyMutationInput,
      CategoryTranslationUncheckedUpdateManyInput
    >;
    /**
     * Filter which CategoryTranslations to update
     */
    where?: CategoryTranslationWhereInput;
    /**
     * Limit how many CategoryTranslations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTranslationIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * CategoryTranslation upsert
   */
  export type CategoryTranslationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryTranslation
     */
    select?: CategoryTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategoryTranslation
     */
    omit?: CategoryTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTranslationInclude<ExtArgs> | null;
    /**
     * The filter to search for the CategoryTranslation to update in case it exists.
     */
    where: CategoryTranslationWhereUniqueInput;
    /**
     * In case the CategoryTranslation found by the `where` argument doesn't exist, create a new CategoryTranslation with this data.
     */
    create: XOR<
      CategoryTranslationCreateInput,
      CategoryTranslationUncheckedCreateInput
    >;
    /**
     * In case the CategoryTranslation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      CategoryTranslationUpdateInput,
      CategoryTranslationUncheckedUpdateInput
    >;
  };

  /**
   * CategoryTranslation delete
   */
  export type CategoryTranslationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryTranslation
     */
    select?: CategoryTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategoryTranslation
     */
    omit?: CategoryTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTranslationInclude<ExtArgs> | null;
    /**
     * Filter which CategoryTranslation to delete.
     */
    where: CategoryTranslationWhereUniqueInput;
  };

  /**
   * CategoryTranslation deleteMany
   */
  export type CategoryTranslationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CategoryTranslations to delete
     */
    where?: CategoryTranslationWhereInput;
    /**
     * Limit how many CategoryTranslations to delete.
     */
    limit?: number;
  };

  /**
   * CategoryTranslation without action
   */
  export type CategoryTranslationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryTranslation
     */
    select?: CategoryTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CategoryTranslation
     */
    omit?: CategoryTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTranslationInclude<ExtArgs> | null;
  };

  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null;
    _avg: ServiceAvgAggregateOutputType | null;
    _sum: ServiceSumAggregateOutputType | null;
    _min: ServiceMinAggregateOutputType | null;
    _max: ServiceMaxAggregateOutputType | null;
  };

  export type ServiceAvgAggregateOutputType = {
    order: number | null;
  };

  export type ServiceSumAggregateOutputType = {
    order: number | null;
  };

  export type ServiceMinAggregateOutputType = {
    id: string | null;
    categoryId: string | null;
    icon: string | null;
    externalUrl: string | null;
    order: number | null;
    isActive: boolean | null;
    requiresAuth: boolean | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ServiceMaxAggregateOutputType = {
    id: string | null;
    categoryId: string | null;
    icon: string | null;
    externalUrl: string | null;
    order: number | null;
    isActive: boolean | null;
    requiresAuth: boolean | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ServiceCountAggregateOutputType = {
    id: number;
    categoryId: number;
    icon: number;
    externalUrl: number;
    order: number;
    isActive: number;
    requiresAuth: number;
    role: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ServiceAvgAggregateInputType = {
    order?: true;
  };

  export type ServiceSumAggregateInputType = {
    order?: true;
  };

  export type ServiceMinAggregateInputType = {
    id?: true;
    categoryId?: true;
    icon?: true;
    externalUrl?: true;
    order?: true;
    isActive?: true;
    requiresAuth?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ServiceMaxAggregateInputType = {
    id?: true;
    categoryId?: true;
    icon?: true;
    externalUrl?: true;
    order?: true;
    isActive?: true;
    requiresAuth?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ServiceCountAggregateInputType = {
    id?: true;
    categoryId?: true;
    icon?: true;
    externalUrl?: true;
    order?: true;
    isActive?: true;
    requiresAuth?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ServiceAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Services to fetch.
     */
    orderBy?:
      | ServiceOrderByWithRelationInput
      | ServiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Services.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Services
     **/
    _count?: true | ServiceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ServiceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ServiceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ServiceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ServiceMaxAggregateInputType;
  };

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
    [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>;
  };

  export type ServiceGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ServiceWhereInput;
    orderBy?:
      | ServiceOrderByWithAggregationInput
      | ServiceOrderByWithAggregationInput[];
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum;
    having?: ServiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ServiceCountAggregateInputType | true;
    _avg?: ServiceAvgAggregateInputType;
    _sum?: ServiceSumAggregateInputType;
    _min?: ServiceMinAggregateInputType;
    _max?: ServiceMaxAggregateInputType;
  };

  export type ServiceGroupByOutputType = {
    id: string;
    categoryId: string;
    icon: string;
    externalUrl: string | null;
    order: number;
    isActive: boolean;
    requiresAuth: boolean;
    role: $Enums.Role | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ServiceCountAggregateOutputType | null;
    _avg: ServiceAvgAggregateOutputType | null;
    _sum: ServiceSumAggregateOutputType | null;
    _min: ServiceMinAggregateOutputType | null;
    _max: ServiceMaxAggregateOutputType | null;
  };

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ServiceGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ServiceGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>;
        }
      >
    >;

  export type ServiceSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      categoryId?: boolean;
      icon?: boolean;
      externalUrl?: boolean;
      order?: boolean;
      isActive?: boolean;
      requiresAuth?: boolean;
      role?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      category?: boolean | CategoryDefaultArgs<ExtArgs>;
      translations?: boolean | Service$translationsArgs<ExtArgs>;
      _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['service']
  >;

  export type ServiceSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      categoryId?: boolean;
      icon?: boolean;
      externalUrl?: boolean;
      order?: boolean;
      isActive?: boolean;
      requiresAuth?: boolean;
      role?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      category?: boolean | CategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['service']
  >;

  export type ServiceSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      categoryId?: boolean;
      icon?: boolean;
      externalUrl?: boolean;
      order?: boolean;
      isActive?: boolean;
      requiresAuth?: boolean;
      role?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      category?: boolean | CategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['service']
  >;

  export type ServiceSelectScalar = {
    id?: boolean;
    categoryId?: boolean;
    icon?: boolean;
    externalUrl?: boolean;
    order?: boolean;
    isActive?: boolean;
    requiresAuth?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ServiceOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'categoryId'
    | 'icon'
    | 'externalUrl'
    | 'order'
    | 'isActive'
    | 'requiresAuth'
    | 'role'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['service']
  >;
  export type ServiceInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>;
    translations?: boolean | Service$translationsArgs<ExtArgs>;
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ServiceIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>;
  };
  export type ServiceIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>;
  };

  export type $ServicePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Service';
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>;
      translations: Prisma.$ServiceTranslationPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        categoryId: string;
        icon: string;
        externalUrl: string | null;
        order: number;
        isActive: boolean;
        requiresAuth: boolean;
        role: $Enums.Role | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['service']
    >;
    composites: {};
  };

  type ServiceGetPayload<
    S extends boolean | null | undefined | ServiceDefaultArgs,
  > = $Result.GetResult<Prisma.$ServicePayload, S>;

  type ServiceCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ServiceCountAggregateInputType | true;
  };

  export interface ServiceDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Service'];
      meta: { name: 'Service' };
    };
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(
      args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>,
    ): Prisma__ServiceClient<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ServiceClient<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(
      args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>,
    ): Prisma__ServiceClient<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ServiceClient<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     *
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ServiceFindManyArgs>(
      args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     *
     */
    create<T extends ServiceCreateArgs>(
      args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>,
    ): Prisma__ServiceClient<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ServiceCreateManyArgs>(
      args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     *
     */
    delete<T extends ServiceDeleteArgs>(
      args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>,
    ): Prisma__ServiceClient<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ServiceUpdateArgs>(
      args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>,
    ): Prisma__ServiceClient<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ServiceDeleteManyArgs>(
      args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ServiceUpdateManyArgs>(
      args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(
      args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>,
    ): Prisma__ServiceClient<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
     **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ServiceAggregateArgs>(
      args: Subset<T, ServiceAggregateArgs>,
    ): Prisma.PrismaPromise<GetServiceAggregateType<T>>;

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetServiceGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Service model
     */
    readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CategoryDefaultArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      | $Result.GetResult<
          Prisma.$CategoryPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    translations<T extends Service$translationsArgs<ExtArgs> = {}>(
      args?: Subset<T, Service$translationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ServiceTranslationPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<'Service', 'String'>;
    readonly categoryId: FieldRef<'Service', 'String'>;
    readonly icon: FieldRef<'Service', 'String'>;
    readonly externalUrl: FieldRef<'Service', 'String'>;
    readonly order: FieldRef<'Service', 'Int'>;
    readonly isActive: FieldRef<'Service', 'Boolean'>;
    readonly requiresAuth: FieldRef<'Service', 'Boolean'>;
    readonly role: FieldRef<'Service', 'Role'>;
    readonly createdAt: FieldRef<'Service', 'DateTime'>;
    readonly updatedAt: FieldRef<'Service', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput;
  };

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput;
  };

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Services to fetch.
     */
    orderBy?:
      | ServiceOrderByWithRelationInput
      | ServiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Services.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[];
  };

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Services to fetch.
     */
    orderBy?:
      | ServiceOrderByWithRelationInput
      | ServiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Services.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[];
  };

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Services to fetch.
     */
    orderBy?:
      | ServiceOrderByWithRelationInput
      | ServiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Services.
     */
    skip?: number;
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[];
  };

  /**
   * Service create
   */
  export type ServiceCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>;
  };

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Service update
   */
  export type ServiceUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>;
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput;
  };

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>;
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput;
    /**
     * Limit how many Services to update.
     */
    limit?: number;
  };

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>;
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput;
    /**
     * Limit how many Services to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput;
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>;
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>;
  };

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput;
  };

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput;
    /**
     * Limit how many Services to delete.
     */
    limit?: number;
  };

  /**
   * Service.translations
   */
  export type Service$translationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceTranslation
     */
    select?: ServiceTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceTranslation
     */
    omit?: ServiceTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTranslationInclude<ExtArgs> | null;
    where?: ServiceTranslationWhereInput;
    orderBy?:
      | ServiceTranslationOrderByWithRelationInput
      | ServiceTranslationOrderByWithRelationInput[];
    cursor?: ServiceTranslationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | ServiceTranslationScalarFieldEnum
      | ServiceTranslationScalarFieldEnum[];
  };

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
  };

  /**
   * Model ServiceTranslation
   */

  export type AggregateServiceTranslation = {
    _count: ServiceTranslationCountAggregateOutputType | null;
    _min: ServiceTranslationMinAggregateOutputType | null;
    _max: ServiceTranslationMaxAggregateOutputType | null;
  };

  export type ServiceTranslationMinAggregateOutputType = {
    id: string | null;
    serviceId: string | null;
    locale: $Enums.Locale | null;
    title: string | null;
    description: string | null;
    slug: string | null;
  };

  export type ServiceTranslationMaxAggregateOutputType = {
    id: string | null;
    serviceId: string | null;
    locale: $Enums.Locale | null;
    title: string | null;
    description: string | null;
    slug: string | null;
  };

  export type ServiceTranslationCountAggregateOutputType = {
    id: number;
    serviceId: number;
    locale: number;
    title: number;
    description: number;
    slug: number;
    _all: number;
  };

  export type ServiceTranslationMinAggregateInputType = {
    id?: true;
    serviceId?: true;
    locale?: true;
    title?: true;
    description?: true;
    slug?: true;
  };

  export type ServiceTranslationMaxAggregateInputType = {
    id?: true;
    serviceId?: true;
    locale?: true;
    title?: true;
    description?: true;
    slug?: true;
  };

  export type ServiceTranslationCountAggregateInputType = {
    id?: true;
    serviceId?: true;
    locale?: true;
    title?: true;
    description?: true;
    slug?: true;
    _all?: true;
  };

  export type ServiceTranslationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ServiceTranslation to aggregate.
     */
    where?: ServiceTranslationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ServiceTranslations to fetch.
     */
    orderBy?:
      | ServiceTranslationOrderByWithRelationInput
      | ServiceTranslationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ServiceTranslationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ServiceTranslations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ServiceTranslations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ServiceTranslations
     **/
    _count?: true | ServiceTranslationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ServiceTranslationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ServiceTranslationMaxAggregateInputType;
  };

  export type GetServiceTranslationAggregateType<
    T extends ServiceTranslationAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateServiceTranslation]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceTranslation[P]>
      : GetScalarType<T[P], AggregateServiceTranslation[P]>;
  };

  export type ServiceTranslationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ServiceTranslationWhereInput;
    orderBy?:
      | ServiceTranslationOrderByWithAggregationInput
      | ServiceTranslationOrderByWithAggregationInput[];
    by: ServiceTranslationScalarFieldEnum[] | ServiceTranslationScalarFieldEnum;
    having?: ServiceTranslationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ServiceTranslationCountAggregateInputType | true;
    _min?: ServiceTranslationMinAggregateInputType;
    _max?: ServiceTranslationMaxAggregateInputType;
  };

  export type ServiceTranslationGroupByOutputType = {
    id: string;
    serviceId: string;
    locale: $Enums.Locale;
    title: string;
    description: string;
    slug: string;
    _count: ServiceTranslationCountAggregateOutputType | null;
    _min: ServiceTranslationMinAggregateOutputType | null;
    _max: ServiceTranslationMaxAggregateOutputType | null;
  };

  type GetServiceTranslationGroupByPayload<
    T extends ServiceTranslationGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceTranslationGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof ServiceTranslationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ServiceTranslationGroupByOutputType[P]>
          : GetScalarType<T[P], ServiceTranslationGroupByOutputType[P]>;
      }
    >
  >;

  export type ServiceTranslationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      serviceId?: boolean;
      locale?: boolean;
      title?: boolean;
      description?: boolean;
      slug?: boolean;
      service?: boolean | ServiceDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['serviceTranslation']
  >;

  export type ServiceTranslationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      serviceId?: boolean;
      locale?: boolean;
      title?: boolean;
      description?: boolean;
      slug?: boolean;
      service?: boolean | ServiceDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['serviceTranslation']
  >;

  export type ServiceTranslationSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      serviceId?: boolean;
      locale?: boolean;
      title?: boolean;
      description?: boolean;
      slug?: boolean;
      service?: boolean | ServiceDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['serviceTranslation']
  >;

  export type ServiceTranslationSelectScalar = {
    id?: boolean;
    serviceId?: boolean;
    locale?: boolean;
    title?: boolean;
    description?: boolean;
    slug?: boolean;
  };

  export type ServiceTranslationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'serviceId' | 'locale' | 'title' | 'description' | 'slug',
    ExtArgs['result']['serviceTranslation']
  >;
  export type ServiceTranslationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>;
  };
  export type ServiceTranslationIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>;
  };
  export type ServiceTranslationIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>;
  };

  export type $ServiceTranslationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'ServiceTranslation';
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        serviceId: string;
        locale: $Enums.Locale;
        title: string;
        description: string;
        slug: string;
      },
      ExtArgs['result']['serviceTranslation']
    >;
    composites: {};
  };

  type ServiceTranslationGetPayload<
    S extends boolean | null | undefined | ServiceTranslationDefaultArgs,
  > = $Result.GetResult<Prisma.$ServiceTranslationPayload, S>;

  type ServiceTranslationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    ServiceTranslationFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: ServiceTranslationCountAggregateInputType | true;
  };

  export interface ServiceTranslationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['ServiceTranslation'];
      meta: { name: 'ServiceTranslation' };
    };
    /**
     * Find zero or one ServiceTranslation that matches the filter.
     * @param {ServiceTranslationFindUniqueArgs} args - Arguments to find a ServiceTranslation
     * @example
     * // Get one ServiceTranslation
     * const serviceTranslation = await prisma.serviceTranslation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceTranslationFindUniqueArgs>(
      args: SelectSubset<T, ServiceTranslationFindUniqueArgs<ExtArgs>>,
    ): Prisma__ServiceTranslationClient<
      $Result.GetResult<
        Prisma.$ServiceTranslationPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ServiceTranslation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceTranslationFindUniqueOrThrowArgs} args - Arguments to find a ServiceTranslation
     * @example
     * // Get one ServiceTranslation
     * const serviceTranslation = await prisma.serviceTranslation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceTranslationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ServiceTranslationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ServiceTranslationClient<
      $Result.GetResult<
        Prisma.$ServiceTranslationPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ServiceTranslation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceTranslationFindFirstArgs} args - Arguments to find a ServiceTranslation
     * @example
     * // Get one ServiceTranslation
     * const serviceTranslation = await prisma.serviceTranslation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceTranslationFindFirstArgs>(
      args?: SelectSubset<T, ServiceTranslationFindFirstArgs<ExtArgs>>,
    ): Prisma__ServiceTranslationClient<
      $Result.GetResult<
        Prisma.$ServiceTranslationPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ServiceTranslation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceTranslationFindFirstOrThrowArgs} args - Arguments to find a ServiceTranslation
     * @example
     * // Get one ServiceTranslation
     * const serviceTranslation = await prisma.serviceTranslation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceTranslationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ServiceTranslationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ServiceTranslationClient<
      $Result.GetResult<
        Prisma.$ServiceTranslationPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ServiceTranslations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceTranslationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceTranslations
     * const serviceTranslations = await prisma.serviceTranslation.findMany()
     *
     * // Get first 10 ServiceTranslations
     * const serviceTranslations = await prisma.serviceTranslation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const serviceTranslationWithIdOnly = await prisma.serviceTranslation.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ServiceTranslationFindManyArgs>(
      args?: SelectSubset<T, ServiceTranslationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ServiceTranslationPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a ServiceTranslation.
     * @param {ServiceTranslationCreateArgs} args - Arguments to create a ServiceTranslation.
     * @example
     * // Create one ServiceTranslation
     * const ServiceTranslation = await prisma.serviceTranslation.create({
     *   data: {
     *     // ... data to create a ServiceTranslation
     *   }
     * })
     *
     */
    create<T extends ServiceTranslationCreateArgs>(
      args: SelectSubset<T, ServiceTranslationCreateArgs<ExtArgs>>,
    ): Prisma__ServiceTranslationClient<
      $Result.GetResult<
        Prisma.$ServiceTranslationPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ServiceTranslations.
     * @param {ServiceTranslationCreateManyArgs} args - Arguments to create many ServiceTranslations.
     * @example
     * // Create many ServiceTranslations
     * const serviceTranslation = await prisma.serviceTranslation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ServiceTranslationCreateManyArgs>(
      args?: SelectSubset<T, ServiceTranslationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ServiceTranslations and returns the data saved in the database.
     * @param {ServiceTranslationCreateManyAndReturnArgs} args - Arguments to create many ServiceTranslations.
     * @example
     * // Create many ServiceTranslations
     * const serviceTranslation = await prisma.serviceTranslation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ServiceTranslations and only return the `id`
     * const serviceTranslationWithIdOnly = await prisma.serviceTranslation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ServiceTranslationCreateManyAndReturnArgs>(
      args?: SelectSubset<
        T,
        ServiceTranslationCreateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ServiceTranslationPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a ServiceTranslation.
     * @param {ServiceTranslationDeleteArgs} args - Arguments to delete one ServiceTranslation.
     * @example
     * // Delete one ServiceTranslation
     * const ServiceTranslation = await prisma.serviceTranslation.delete({
     *   where: {
     *     // ... filter to delete one ServiceTranslation
     *   }
     * })
     *
     */
    delete<T extends ServiceTranslationDeleteArgs>(
      args: SelectSubset<T, ServiceTranslationDeleteArgs<ExtArgs>>,
    ): Prisma__ServiceTranslationClient<
      $Result.GetResult<
        Prisma.$ServiceTranslationPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ServiceTranslation.
     * @param {ServiceTranslationUpdateArgs} args - Arguments to update one ServiceTranslation.
     * @example
     * // Update one ServiceTranslation
     * const serviceTranslation = await prisma.serviceTranslation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ServiceTranslationUpdateArgs>(
      args: SelectSubset<T, ServiceTranslationUpdateArgs<ExtArgs>>,
    ): Prisma__ServiceTranslationClient<
      $Result.GetResult<
        Prisma.$ServiceTranslationPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ServiceTranslations.
     * @param {ServiceTranslationDeleteManyArgs} args - Arguments to filter ServiceTranslations to delete.
     * @example
     * // Delete a few ServiceTranslations
     * const { count } = await prisma.serviceTranslation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ServiceTranslationDeleteManyArgs>(
      args?: SelectSubset<T, ServiceTranslationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ServiceTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceTranslationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceTranslations
     * const serviceTranslation = await prisma.serviceTranslation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ServiceTranslationUpdateManyArgs>(
      args: SelectSubset<T, ServiceTranslationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ServiceTranslations and returns the data updated in the database.
     * @param {ServiceTranslationUpdateManyAndReturnArgs} args - Arguments to update many ServiceTranslations.
     * @example
     * // Update many ServiceTranslations
     * const serviceTranslation = await prisma.serviceTranslation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ServiceTranslations and only return the `id`
     * const serviceTranslationWithIdOnly = await prisma.serviceTranslation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ServiceTranslationUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ServiceTranslationUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ServiceTranslationPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one ServiceTranslation.
     * @param {ServiceTranslationUpsertArgs} args - Arguments to update or create a ServiceTranslation.
     * @example
     * // Update or create a ServiceTranslation
     * const serviceTranslation = await prisma.serviceTranslation.upsert({
     *   create: {
     *     // ... data to create a ServiceTranslation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceTranslation we want to update
     *   }
     * })
     */
    upsert<T extends ServiceTranslationUpsertArgs>(
      args: SelectSubset<T, ServiceTranslationUpsertArgs<ExtArgs>>,
    ): Prisma__ServiceTranslationClient<
      $Result.GetResult<
        Prisma.$ServiceTranslationPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ServiceTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceTranslationCountArgs} args - Arguments to filter ServiceTranslations to count.
     * @example
     * // Count the number of ServiceTranslations
     * const count = await prisma.serviceTranslation.count({
     *   where: {
     *     // ... the filter for the ServiceTranslations we want to count
     *   }
     * })
     **/
    count<T extends ServiceTranslationCountArgs>(
      args?: Subset<T, ServiceTranslationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<
              T['select'],
              ServiceTranslationCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ServiceTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceTranslationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ServiceTranslationAggregateArgs>(
      args: Subset<T, ServiceTranslationAggregateArgs>,
    ): Prisma.PrismaPromise<GetServiceTranslationAggregateType<T>>;

    /**
     * Group by ServiceTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceTranslationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ServiceTranslationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceTranslationGroupByArgs['orderBy'] }
        : { orderBy?: ServiceTranslationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ServiceTranslationGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetServiceTranslationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ServiceTranslation model
     */
    readonly fields: ServiceTranslationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceTranslation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceTranslationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ServiceDefaultArgs<ExtArgs>>,
    ): Prisma__ServiceClient<
      | $Result.GetResult<
          Prisma.$ServicePayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ServiceTranslation model
   */
  interface ServiceTranslationFieldRefs {
    readonly id: FieldRef<'ServiceTranslation', 'String'>;
    readonly serviceId: FieldRef<'ServiceTranslation', 'String'>;
    readonly locale: FieldRef<'ServiceTranslation', 'Locale'>;
    readonly title: FieldRef<'ServiceTranslation', 'String'>;
    readonly description: FieldRef<'ServiceTranslation', 'String'>;
    readonly slug: FieldRef<'ServiceTranslation', 'String'>;
  }

  // Custom InputTypes
  /**
   * ServiceTranslation findUnique
   */
  export type ServiceTranslationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceTranslation
     */
    select?: ServiceTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceTranslation
     */
    omit?: ServiceTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTranslationInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceTranslation to fetch.
     */
    where: ServiceTranslationWhereUniqueInput;
  };

  /**
   * ServiceTranslation findUniqueOrThrow
   */
  export type ServiceTranslationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceTranslation
     */
    select?: ServiceTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceTranslation
     */
    omit?: ServiceTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTranslationInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceTranslation to fetch.
     */
    where: ServiceTranslationWhereUniqueInput;
  };

  /**
   * ServiceTranslation findFirst
   */
  export type ServiceTranslationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceTranslation
     */
    select?: ServiceTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceTranslation
     */
    omit?: ServiceTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTranslationInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceTranslation to fetch.
     */
    where?: ServiceTranslationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ServiceTranslations to fetch.
     */
    orderBy?:
      | ServiceTranslationOrderByWithRelationInput
      | ServiceTranslationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ServiceTranslations.
     */
    cursor?: ServiceTranslationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ServiceTranslations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ServiceTranslations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ServiceTranslations.
     */
    distinct?:
      | ServiceTranslationScalarFieldEnum
      | ServiceTranslationScalarFieldEnum[];
  };

  /**
   * ServiceTranslation findFirstOrThrow
   */
  export type ServiceTranslationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceTranslation
     */
    select?: ServiceTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceTranslation
     */
    omit?: ServiceTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTranslationInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceTranslation to fetch.
     */
    where?: ServiceTranslationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ServiceTranslations to fetch.
     */
    orderBy?:
      | ServiceTranslationOrderByWithRelationInput
      | ServiceTranslationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ServiceTranslations.
     */
    cursor?: ServiceTranslationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ServiceTranslations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ServiceTranslations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ServiceTranslations.
     */
    distinct?:
      | ServiceTranslationScalarFieldEnum
      | ServiceTranslationScalarFieldEnum[];
  };

  /**
   * ServiceTranslation findMany
   */
  export type ServiceTranslationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceTranslation
     */
    select?: ServiceTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceTranslation
     */
    omit?: ServiceTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTranslationInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceTranslations to fetch.
     */
    where?: ServiceTranslationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ServiceTranslations to fetch.
     */
    orderBy?:
      | ServiceTranslationOrderByWithRelationInput
      | ServiceTranslationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ServiceTranslations.
     */
    cursor?: ServiceTranslationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ServiceTranslations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ServiceTranslations.
     */
    skip?: number;
    distinct?:
      | ServiceTranslationScalarFieldEnum
      | ServiceTranslationScalarFieldEnum[];
  };

  /**
   * ServiceTranslation create
   */
  export type ServiceTranslationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceTranslation
     */
    select?: ServiceTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceTranslation
     */
    omit?: ServiceTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTranslationInclude<ExtArgs> | null;
    /**
     * The data needed to create a ServiceTranslation.
     */
    data: XOR<
      ServiceTranslationCreateInput,
      ServiceTranslationUncheckedCreateInput
    >;
  };

  /**
   * ServiceTranslation createMany
   */
  export type ServiceTranslationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ServiceTranslations.
     */
    data:
      | ServiceTranslationCreateManyInput
      | ServiceTranslationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ServiceTranslation createManyAndReturn
   */
  export type ServiceTranslationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceTranslation
     */
    select?: ServiceTranslationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceTranslation
     */
    omit?: ServiceTranslationOmit<ExtArgs> | null;
    /**
     * The data used to create many ServiceTranslations.
     */
    data:
      | ServiceTranslationCreateManyInput
      | ServiceTranslationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTranslationIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ServiceTranslation update
   */
  export type ServiceTranslationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceTranslation
     */
    select?: ServiceTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceTranslation
     */
    omit?: ServiceTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTranslationInclude<ExtArgs> | null;
    /**
     * The data needed to update a ServiceTranslation.
     */
    data: XOR<
      ServiceTranslationUpdateInput,
      ServiceTranslationUncheckedUpdateInput
    >;
    /**
     * Choose, which ServiceTranslation to update.
     */
    where: ServiceTranslationWhereUniqueInput;
  };

  /**
   * ServiceTranslation updateMany
   */
  export type ServiceTranslationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ServiceTranslations.
     */
    data: XOR<
      ServiceTranslationUpdateManyMutationInput,
      ServiceTranslationUncheckedUpdateManyInput
    >;
    /**
     * Filter which ServiceTranslations to update
     */
    where?: ServiceTranslationWhereInput;
    /**
     * Limit how many ServiceTranslations to update.
     */
    limit?: number;
  };

  /**
   * ServiceTranslation updateManyAndReturn
   */
  export type ServiceTranslationUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceTranslation
     */
    select?: ServiceTranslationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceTranslation
     */
    omit?: ServiceTranslationOmit<ExtArgs> | null;
    /**
     * The data used to update ServiceTranslations.
     */
    data: XOR<
      ServiceTranslationUpdateManyMutationInput,
      ServiceTranslationUncheckedUpdateManyInput
    >;
    /**
     * Filter which ServiceTranslations to update
     */
    where?: ServiceTranslationWhereInput;
    /**
     * Limit how many ServiceTranslations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTranslationIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ServiceTranslation upsert
   */
  export type ServiceTranslationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceTranslation
     */
    select?: ServiceTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceTranslation
     */
    omit?: ServiceTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTranslationInclude<ExtArgs> | null;
    /**
     * The filter to search for the ServiceTranslation to update in case it exists.
     */
    where: ServiceTranslationWhereUniqueInput;
    /**
     * In case the ServiceTranslation found by the `where` argument doesn't exist, create a new ServiceTranslation with this data.
     */
    create: XOR<
      ServiceTranslationCreateInput,
      ServiceTranslationUncheckedCreateInput
    >;
    /**
     * In case the ServiceTranslation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      ServiceTranslationUpdateInput,
      ServiceTranslationUncheckedUpdateInput
    >;
  };

  /**
   * ServiceTranslation delete
   */
  export type ServiceTranslationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceTranslation
     */
    select?: ServiceTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceTranslation
     */
    omit?: ServiceTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTranslationInclude<ExtArgs> | null;
    /**
     * Filter which ServiceTranslation to delete.
     */
    where: ServiceTranslationWhereUniqueInput;
  };

  /**
   * ServiceTranslation deleteMany
   */
  export type ServiceTranslationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ServiceTranslations to delete
     */
    where?: ServiceTranslationWhereInput;
    /**
     * Limit how many ServiceTranslations to delete.
     */
    limit?: number;
  };

  /**
   * ServiceTranslation without action
   */
  export type ServiceTranslationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ServiceTranslation
     */
    select?: ServiceTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceTranslation
     */
    omit?: ServiceTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTranslationInclude<ExtArgs> | null;
  };

  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null;
    _avg: ContactAvgAggregateOutputType | null;
    _sum: ContactSumAggregateOutputType | null;
    _min: ContactMinAggregateOutputType | null;
    _max: ContactMaxAggregateOutputType | null;
  };

  export type ContactAvgAggregateOutputType = {
    order: number | null;
  };

  export type ContactSumAggregateOutputType = {
    order: number | null;
  };

  export type ContactMinAggregateOutputType = {
    id: string | null;
    categoryId: string | null;
    icon: string | null;
    externalUrl: string | null;
    order: number | null;
    isActive: boolean | null;
    requiresAuth: boolean | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ContactMaxAggregateOutputType = {
    id: string | null;
    categoryId: string | null;
    icon: string | null;
    externalUrl: string | null;
    order: number | null;
    isActive: boolean | null;
    requiresAuth: boolean | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ContactCountAggregateOutputType = {
    id: number;
    categoryId: number;
    icon: number;
    externalUrl: number;
    order: number;
    isActive: number;
    requiresAuth: number;
    role: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ContactAvgAggregateInputType = {
    order?: true;
  };

  export type ContactSumAggregateInputType = {
    order?: true;
  };

  export type ContactMinAggregateInputType = {
    id?: true;
    categoryId?: true;
    icon?: true;
    externalUrl?: true;
    order?: true;
    isActive?: true;
    requiresAuth?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ContactMaxAggregateInputType = {
    id?: true;
    categoryId?: true;
    icon?: true;
    externalUrl?: true;
    order?: true;
    isActive?: true;
    requiresAuth?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ContactCountAggregateInputType = {
    id?: true;
    categoryId?: true;
    icon?: true;
    externalUrl?: true;
    order?: true;
    isActive?: true;
    requiresAuth?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ContactAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Contacts to fetch.
     */
    orderBy?:
      | ContactOrderByWithRelationInput
      | ContactOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Contacts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Contacts
     **/
    _count?: true | ContactCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ContactAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ContactSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ContactMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ContactMaxAggregateInputType;
  };

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
    [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>;
  };

  export type ContactGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ContactWhereInput;
    orderBy?:
      | ContactOrderByWithAggregationInput
      | ContactOrderByWithAggregationInput[];
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum;
    having?: ContactScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContactCountAggregateInputType | true;
    _avg?: ContactAvgAggregateInputType;
    _sum?: ContactSumAggregateInputType;
    _min?: ContactMinAggregateInputType;
    _max?: ContactMaxAggregateInputType;
  };

  export type ContactGroupByOutputType = {
    id: string;
    categoryId: string;
    icon: string;
    externalUrl: string | null;
    order: number;
    isActive: boolean;
    requiresAuth: boolean;
    role: $Enums.Role | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ContactCountAggregateOutputType | null;
    _avg: ContactAvgAggregateOutputType | null;
    _sum: ContactSumAggregateOutputType | null;
    _min: ContactMinAggregateOutputType | null;
    _max: ContactMaxAggregateOutputType | null;
  };

  type GetContactGroupByPayload<T extends ContactGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ContactGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ContactGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>;
        }
      >
    >;

  export type ContactSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      categoryId?: boolean;
      icon?: boolean;
      externalUrl?: boolean;
      order?: boolean;
      isActive?: boolean;
      requiresAuth?: boolean;
      role?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      category?: boolean | CategoryDefaultArgs<ExtArgs>;
      translations?: boolean | Contact$translationsArgs<ExtArgs>;
      _count?: boolean | ContactCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['contact']
  >;

  export type ContactSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      categoryId?: boolean;
      icon?: boolean;
      externalUrl?: boolean;
      order?: boolean;
      isActive?: boolean;
      requiresAuth?: boolean;
      role?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      category?: boolean | CategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['contact']
  >;

  export type ContactSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      categoryId?: boolean;
      icon?: boolean;
      externalUrl?: boolean;
      order?: boolean;
      isActive?: boolean;
      requiresAuth?: boolean;
      role?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      category?: boolean | CategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['contact']
  >;

  export type ContactSelectScalar = {
    id?: boolean;
    categoryId?: boolean;
    icon?: boolean;
    externalUrl?: boolean;
    order?: boolean;
    isActive?: boolean;
    requiresAuth?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ContactOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'categoryId'
    | 'icon'
    | 'externalUrl'
    | 'order'
    | 'isActive'
    | 'requiresAuth'
    | 'role'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['contact']
  >;
  export type ContactInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>;
    translations?: boolean | Contact$translationsArgs<ExtArgs>;
    _count?: boolean | ContactCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ContactIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>;
  };
  export type ContactIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>;
  };

  export type $ContactPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Contact';
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>;
      translations: Prisma.$ContactTranslationPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        categoryId: string;
        icon: string;
        externalUrl: string | null;
        order: number;
        isActive: boolean;
        requiresAuth: boolean;
        role: $Enums.Role | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['contact']
    >;
    composites: {};
  };

  type ContactGetPayload<
    S extends boolean | null | undefined | ContactDefaultArgs,
  > = $Result.GetResult<Prisma.$ContactPayload, S>;

  type ContactCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContactCountAggregateInputType | true;
  };

  export interface ContactDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Contact'];
      meta: { name: 'Contact' };
    };
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(
      args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>,
    ): Prisma__ContactClient<
      $Result.GetResult<
        Prisma.$ContactPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ContactClient<
      $Result.GetResult<
        Prisma.$ContactPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(
      args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>,
    ): Prisma__ContactClient<
      $Result.GetResult<
        Prisma.$ContactPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ContactClient<
      $Result.GetResult<
        Prisma.$ContactPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     *
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ContactFindManyArgs>(
      args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ContactPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     *
     */
    create<T extends ContactCreateArgs>(
      args: SelectSubset<T, ContactCreateArgs<ExtArgs>>,
    ): Prisma__ContactClient<
      $Result.GetResult<
        Prisma.$ContactPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ContactCreateManyArgs>(
      args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ContactPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     *
     */
    delete<T extends ContactDeleteArgs>(
      args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>,
    ): Prisma__ContactClient<
      $Result.GetResult<
        Prisma.$ContactPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ContactUpdateArgs>(
      args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>,
    ): Prisma__ContactClient<
      $Result.GetResult<
        Prisma.$ContactPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ContactDeleteManyArgs>(
      args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ContactUpdateManyArgs>(
      args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ContactPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(
      args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>,
    ): Prisma__ContactClient<
      $Result.GetResult<
        Prisma.$ContactPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
     **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ContactAggregateArgs>(
      args: Subset<T, ContactAggregateArgs>,
    ): Prisma.PrismaPromise<GetContactAggregateType<T>>;

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetContactGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Contact model
     */
    readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CategoryDefaultArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      | $Result.GetResult<
          Prisma.$CategoryPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    translations<T extends Contact$translationsArgs<ExtArgs> = {}>(
      args?: Subset<T, Contact$translationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ContactTranslationPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<'Contact', 'String'>;
    readonly categoryId: FieldRef<'Contact', 'String'>;
    readonly icon: FieldRef<'Contact', 'String'>;
    readonly externalUrl: FieldRef<'Contact', 'String'>;
    readonly order: FieldRef<'Contact', 'Int'>;
    readonly isActive: FieldRef<'Contact', 'Boolean'>;
    readonly requiresAuth: FieldRef<'Contact', 'Boolean'>;
    readonly role: FieldRef<'Contact', 'Role'>;
    readonly createdAt: FieldRef<'Contact', 'DateTime'>;
    readonly updatedAt: FieldRef<'Contact', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null;
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput;
  };

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null;
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput;
  };

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null;
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Contacts to fetch.
     */
    orderBy?:
      | ContactOrderByWithRelationInput
      | ContactOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Contacts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[];
  };

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null;
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Contacts to fetch.
     */
    orderBy?:
      | ContactOrderByWithRelationInput
      | ContactOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Contacts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[];
  };

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null;
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Contacts to fetch.
     */
    orderBy?:
      | ContactOrderByWithRelationInput
      | ContactOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Contacts.
     */
    skip?: number;
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[];
  };

  /**
   * Contact create
   */
  export type ContactCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null;
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>;
  };

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null;
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Contact update
   */
  export type ContactUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null;
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>;
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput;
  };

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>;
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput;
    /**
     * Limit how many Contacts to update.
     */
    limit?: number;
  };

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null;
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>;
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput;
    /**
     * Limit how many Contacts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null;
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput;
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>;
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>;
  };

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null;
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput;
  };

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput;
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number;
  };

  /**
   * Contact.translations
   */
  export type Contact$translationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ContactTranslation
     */
    select?: ContactTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContactTranslation
     */
    omit?: ContactTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTranslationInclude<ExtArgs> | null;
    where?: ContactTranslationWhereInput;
    orderBy?:
      | ContactTranslationOrderByWithRelationInput
      | ContactTranslationOrderByWithRelationInput[];
    cursor?: ContactTranslationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | ContactTranslationScalarFieldEnum
      | ContactTranslationScalarFieldEnum[];
  };

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null;
  };

  /**
   * Model ContactTranslation
   */

  export type AggregateContactTranslation = {
    _count: ContactTranslationCountAggregateOutputType | null;
    _min: ContactTranslationMinAggregateOutputType | null;
    _max: ContactTranslationMaxAggregateOutputType | null;
  };

  export type ContactTranslationMinAggregateOutputType = {
    id: string | null;
    contactId: string | null;
    locale: $Enums.Locale | null;
    title: string | null;
    description: string | null;
    slug: string | null;
  };

  export type ContactTranslationMaxAggregateOutputType = {
    id: string | null;
    contactId: string | null;
    locale: $Enums.Locale | null;
    title: string | null;
    description: string | null;
    slug: string | null;
  };

  export type ContactTranslationCountAggregateOutputType = {
    id: number;
    contactId: number;
    locale: number;
    title: number;
    description: number;
    slug: number;
    _all: number;
  };

  export type ContactTranslationMinAggregateInputType = {
    id?: true;
    contactId?: true;
    locale?: true;
    title?: true;
    description?: true;
    slug?: true;
  };

  export type ContactTranslationMaxAggregateInputType = {
    id?: true;
    contactId?: true;
    locale?: true;
    title?: true;
    description?: true;
    slug?: true;
  };

  export type ContactTranslationCountAggregateInputType = {
    id?: true;
    contactId?: true;
    locale?: true;
    title?: true;
    description?: true;
    slug?: true;
    _all?: true;
  };

  export type ContactTranslationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ContactTranslation to aggregate.
     */
    where?: ContactTranslationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ContactTranslations to fetch.
     */
    orderBy?:
      | ContactTranslationOrderByWithRelationInput
      | ContactTranslationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ContactTranslationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ContactTranslations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ContactTranslations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ContactTranslations
     **/
    _count?: true | ContactTranslationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ContactTranslationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ContactTranslationMaxAggregateInputType;
  };

  export type GetContactTranslationAggregateType<
    T extends ContactTranslationAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateContactTranslation]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactTranslation[P]>
      : GetScalarType<T[P], AggregateContactTranslation[P]>;
  };

  export type ContactTranslationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ContactTranslationWhereInput;
    orderBy?:
      | ContactTranslationOrderByWithAggregationInput
      | ContactTranslationOrderByWithAggregationInput[];
    by: ContactTranslationScalarFieldEnum[] | ContactTranslationScalarFieldEnum;
    having?: ContactTranslationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContactTranslationCountAggregateInputType | true;
    _min?: ContactTranslationMinAggregateInputType;
    _max?: ContactTranslationMaxAggregateInputType;
  };

  export type ContactTranslationGroupByOutputType = {
    id: string;
    contactId: string;
    locale: $Enums.Locale;
    title: string;
    description: string;
    slug: string;
    _count: ContactTranslationCountAggregateOutputType | null;
    _min: ContactTranslationMinAggregateOutputType | null;
    _max: ContactTranslationMaxAggregateOutputType | null;
  };

  type GetContactTranslationGroupByPayload<
    T extends ContactTranslationGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactTranslationGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof ContactTranslationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ContactTranslationGroupByOutputType[P]>
          : GetScalarType<T[P], ContactTranslationGroupByOutputType[P]>;
      }
    >
  >;

  export type ContactTranslationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      contactId?: boolean;
      locale?: boolean;
      title?: boolean;
      description?: boolean;
      slug?: boolean;
      contact?: boolean | ContactDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['contactTranslation']
  >;

  export type ContactTranslationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      contactId?: boolean;
      locale?: boolean;
      title?: boolean;
      description?: boolean;
      slug?: boolean;
      contact?: boolean | ContactDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['contactTranslation']
  >;

  export type ContactTranslationSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      contactId?: boolean;
      locale?: boolean;
      title?: boolean;
      description?: boolean;
      slug?: boolean;
      contact?: boolean | ContactDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['contactTranslation']
  >;

  export type ContactTranslationSelectScalar = {
    id?: boolean;
    contactId?: boolean;
    locale?: boolean;
    title?: boolean;
    description?: boolean;
    slug?: boolean;
  };

  export type ContactTranslationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'contactId' | 'locale' | 'title' | 'description' | 'slug',
    ExtArgs['result']['contactTranslation']
  >;
  export type ContactTranslationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    contact?: boolean | ContactDefaultArgs<ExtArgs>;
  };
  export type ContactTranslationIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    contact?: boolean | ContactDefaultArgs<ExtArgs>;
  };
  export type ContactTranslationIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    contact?: boolean | ContactDefaultArgs<ExtArgs>;
  };

  export type $ContactTranslationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'ContactTranslation';
    objects: {
      contact: Prisma.$ContactPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        contactId: string;
        locale: $Enums.Locale;
        title: string;
        description: string;
        slug: string;
      },
      ExtArgs['result']['contactTranslation']
    >;
    composites: {};
  };

  type ContactTranslationGetPayload<
    S extends boolean | null | undefined | ContactTranslationDefaultArgs,
  > = $Result.GetResult<Prisma.$ContactTranslationPayload, S>;

  type ContactTranslationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    ContactTranslationFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: ContactTranslationCountAggregateInputType | true;
  };

  export interface ContactTranslationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['ContactTranslation'];
      meta: { name: 'ContactTranslation' };
    };
    /**
     * Find zero or one ContactTranslation that matches the filter.
     * @param {ContactTranslationFindUniqueArgs} args - Arguments to find a ContactTranslation
     * @example
     * // Get one ContactTranslation
     * const contactTranslation = await prisma.contactTranslation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactTranslationFindUniqueArgs>(
      args: SelectSubset<T, ContactTranslationFindUniqueArgs<ExtArgs>>,
    ): Prisma__ContactTranslationClient<
      $Result.GetResult<
        Prisma.$ContactTranslationPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ContactTranslation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactTranslationFindUniqueOrThrowArgs} args - Arguments to find a ContactTranslation
     * @example
     * // Get one ContactTranslation
     * const contactTranslation = await prisma.contactTranslation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactTranslationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ContactTranslationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ContactTranslationClient<
      $Result.GetResult<
        Prisma.$ContactTranslationPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ContactTranslation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactTranslationFindFirstArgs} args - Arguments to find a ContactTranslation
     * @example
     * // Get one ContactTranslation
     * const contactTranslation = await prisma.contactTranslation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactTranslationFindFirstArgs>(
      args?: SelectSubset<T, ContactTranslationFindFirstArgs<ExtArgs>>,
    ): Prisma__ContactTranslationClient<
      $Result.GetResult<
        Prisma.$ContactTranslationPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ContactTranslation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactTranslationFindFirstOrThrowArgs} args - Arguments to find a ContactTranslation
     * @example
     * // Get one ContactTranslation
     * const contactTranslation = await prisma.contactTranslation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactTranslationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ContactTranslationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ContactTranslationClient<
      $Result.GetResult<
        Prisma.$ContactTranslationPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ContactTranslations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactTranslationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactTranslations
     * const contactTranslations = await prisma.contactTranslation.findMany()
     *
     * // Get first 10 ContactTranslations
     * const contactTranslations = await prisma.contactTranslation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const contactTranslationWithIdOnly = await prisma.contactTranslation.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ContactTranslationFindManyArgs>(
      args?: SelectSubset<T, ContactTranslationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ContactTranslationPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a ContactTranslation.
     * @param {ContactTranslationCreateArgs} args - Arguments to create a ContactTranslation.
     * @example
     * // Create one ContactTranslation
     * const ContactTranslation = await prisma.contactTranslation.create({
     *   data: {
     *     // ... data to create a ContactTranslation
     *   }
     * })
     *
     */
    create<T extends ContactTranslationCreateArgs>(
      args: SelectSubset<T, ContactTranslationCreateArgs<ExtArgs>>,
    ): Prisma__ContactTranslationClient<
      $Result.GetResult<
        Prisma.$ContactTranslationPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ContactTranslations.
     * @param {ContactTranslationCreateManyArgs} args - Arguments to create many ContactTranslations.
     * @example
     * // Create many ContactTranslations
     * const contactTranslation = await prisma.contactTranslation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ContactTranslationCreateManyArgs>(
      args?: SelectSubset<T, ContactTranslationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ContactTranslations and returns the data saved in the database.
     * @param {ContactTranslationCreateManyAndReturnArgs} args - Arguments to create many ContactTranslations.
     * @example
     * // Create many ContactTranslations
     * const contactTranslation = await prisma.contactTranslation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ContactTranslations and only return the `id`
     * const contactTranslationWithIdOnly = await prisma.contactTranslation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ContactTranslationCreateManyAndReturnArgs>(
      args?: SelectSubset<
        T,
        ContactTranslationCreateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ContactTranslationPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a ContactTranslation.
     * @param {ContactTranslationDeleteArgs} args - Arguments to delete one ContactTranslation.
     * @example
     * // Delete one ContactTranslation
     * const ContactTranslation = await prisma.contactTranslation.delete({
     *   where: {
     *     // ... filter to delete one ContactTranslation
     *   }
     * })
     *
     */
    delete<T extends ContactTranslationDeleteArgs>(
      args: SelectSubset<T, ContactTranslationDeleteArgs<ExtArgs>>,
    ): Prisma__ContactTranslationClient<
      $Result.GetResult<
        Prisma.$ContactTranslationPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ContactTranslation.
     * @param {ContactTranslationUpdateArgs} args - Arguments to update one ContactTranslation.
     * @example
     * // Update one ContactTranslation
     * const contactTranslation = await prisma.contactTranslation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ContactTranslationUpdateArgs>(
      args: SelectSubset<T, ContactTranslationUpdateArgs<ExtArgs>>,
    ): Prisma__ContactTranslationClient<
      $Result.GetResult<
        Prisma.$ContactTranslationPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ContactTranslations.
     * @param {ContactTranslationDeleteManyArgs} args - Arguments to filter ContactTranslations to delete.
     * @example
     * // Delete a few ContactTranslations
     * const { count } = await prisma.contactTranslation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ContactTranslationDeleteManyArgs>(
      args?: SelectSubset<T, ContactTranslationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ContactTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactTranslationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactTranslations
     * const contactTranslation = await prisma.contactTranslation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ContactTranslationUpdateManyArgs>(
      args: SelectSubset<T, ContactTranslationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ContactTranslations and returns the data updated in the database.
     * @param {ContactTranslationUpdateManyAndReturnArgs} args - Arguments to update many ContactTranslations.
     * @example
     * // Update many ContactTranslations
     * const contactTranslation = await prisma.contactTranslation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ContactTranslations and only return the `id`
     * const contactTranslationWithIdOnly = await prisma.contactTranslation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ContactTranslationUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ContactTranslationUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ContactTranslationPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one ContactTranslation.
     * @param {ContactTranslationUpsertArgs} args - Arguments to update or create a ContactTranslation.
     * @example
     * // Update or create a ContactTranslation
     * const contactTranslation = await prisma.contactTranslation.upsert({
     *   create: {
     *     // ... data to create a ContactTranslation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactTranslation we want to update
     *   }
     * })
     */
    upsert<T extends ContactTranslationUpsertArgs>(
      args: SelectSubset<T, ContactTranslationUpsertArgs<ExtArgs>>,
    ): Prisma__ContactTranslationClient<
      $Result.GetResult<
        Prisma.$ContactTranslationPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ContactTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactTranslationCountArgs} args - Arguments to filter ContactTranslations to count.
     * @example
     * // Count the number of ContactTranslations
     * const count = await prisma.contactTranslation.count({
     *   where: {
     *     // ... the filter for the ContactTranslations we want to count
     *   }
     * })
     **/
    count<T extends ContactTranslationCountArgs>(
      args?: Subset<T, ContactTranslationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<
              T['select'],
              ContactTranslationCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ContactTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactTranslationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ContactTranslationAggregateArgs>(
      args: Subset<T, ContactTranslationAggregateArgs>,
    ): Prisma.PrismaPromise<GetContactTranslationAggregateType<T>>;

    /**
     * Group by ContactTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactTranslationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ContactTranslationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactTranslationGroupByArgs['orderBy'] }
        : { orderBy?: ContactTranslationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ContactTranslationGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetContactTranslationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ContactTranslation model
     */
    readonly fields: ContactTranslationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactTranslation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactTranslationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    contact<T extends ContactDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ContactDefaultArgs<ExtArgs>>,
    ): Prisma__ContactClient<
      | $Result.GetResult<
          Prisma.$ContactPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ContactTranslation model
   */
  interface ContactTranslationFieldRefs {
    readonly id: FieldRef<'ContactTranslation', 'String'>;
    readonly contactId: FieldRef<'ContactTranslation', 'String'>;
    readonly locale: FieldRef<'ContactTranslation', 'Locale'>;
    readonly title: FieldRef<'ContactTranslation', 'String'>;
    readonly description: FieldRef<'ContactTranslation', 'String'>;
    readonly slug: FieldRef<'ContactTranslation', 'String'>;
  }

  // Custom InputTypes
  /**
   * ContactTranslation findUnique
   */
  export type ContactTranslationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ContactTranslation
     */
    select?: ContactTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContactTranslation
     */
    omit?: ContactTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTranslationInclude<ExtArgs> | null;
    /**
     * Filter, which ContactTranslation to fetch.
     */
    where: ContactTranslationWhereUniqueInput;
  };

  /**
   * ContactTranslation findUniqueOrThrow
   */
  export type ContactTranslationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ContactTranslation
     */
    select?: ContactTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContactTranslation
     */
    omit?: ContactTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTranslationInclude<ExtArgs> | null;
    /**
     * Filter, which ContactTranslation to fetch.
     */
    where: ContactTranslationWhereUniqueInput;
  };

  /**
   * ContactTranslation findFirst
   */
  export type ContactTranslationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ContactTranslation
     */
    select?: ContactTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContactTranslation
     */
    omit?: ContactTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTranslationInclude<ExtArgs> | null;
    /**
     * Filter, which ContactTranslation to fetch.
     */
    where?: ContactTranslationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ContactTranslations to fetch.
     */
    orderBy?:
      | ContactTranslationOrderByWithRelationInput
      | ContactTranslationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ContactTranslations.
     */
    cursor?: ContactTranslationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ContactTranslations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ContactTranslations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ContactTranslations.
     */
    distinct?:
      | ContactTranslationScalarFieldEnum
      | ContactTranslationScalarFieldEnum[];
  };

  /**
   * ContactTranslation findFirstOrThrow
   */
  export type ContactTranslationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ContactTranslation
     */
    select?: ContactTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContactTranslation
     */
    omit?: ContactTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTranslationInclude<ExtArgs> | null;
    /**
     * Filter, which ContactTranslation to fetch.
     */
    where?: ContactTranslationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ContactTranslations to fetch.
     */
    orderBy?:
      | ContactTranslationOrderByWithRelationInput
      | ContactTranslationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ContactTranslations.
     */
    cursor?: ContactTranslationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ContactTranslations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ContactTranslations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ContactTranslations.
     */
    distinct?:
      | ContactTranslationScalarFieldEnum
      | ContactTranslationScalarFieldEnum[];
  };

  /**
   * ContactTranslation findMany
   */
  export type ContactTranslationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ContactTranslation
     */
    select?: ContactTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContactTranslation
     */
    omit?: ContactTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTranslationInclude<ExtArgs> | null;
    /**
     * Filter, which ContactTranslations to fetch.
     */
    where?: ContactTranslationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ContactTranslations to fetch.
     */
    orderBy?:
      | ContactTranslationOrderByWithRelationInput
      | ContactTranslationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ContactTranslations.
     */
    cursor?: ContactTranslationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ContactTranslations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ContactTranslations.
     */
    skip?: number;
    distinct?:
      | ContactTranslationScalarFieldEnum
      | ContactTranslationScalarFieldEnum[];
  };

  /**
   * ContactTranslation create
   */
  export type ContactTranslationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ContactTranslation
     */
    select?: ContactTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContactTranslation
     */
    omit?: ContactTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTranslationInclude<ExtArgs> | null;
    /**
     * The data needed to create a ContactTranslation.
     */
    data: XOR<
      ContactTranslationCreateInput,
      ContactTranslationUncheckedCreateInput
    >;
  };

  /**
   * ContactTranslation createMany
   */
  export type ContactTranslationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ContactTranslations.
     */
    data:
      | ContactTranslationCreateManyInput
      | ContactTranslationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ContactTranslation createManyAndReturn
   */
  export type ContactTranslationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ContactTranslation
     */
    select?: ContactTranslationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ContactTranslation
     */
    omit?: ContactTranslationOmit<ExtArgs> | null;
    /**
     * The data used to create many ContactTranslations.
     */
    data:
      | ContactTranslationCreateManyInput
      | ContactTranslationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTranslationIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ContactTranslation update
   */
  export type ContactTranslationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ContactTranslation
     */
    select?: ContactTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContactTranslation
     */
    omit?: ContactTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTranslationInclude<ExtArgs> | null;
    /**
     * The data needed to update a ContactTranslation.
     */
    data: XOR<
      ContactTranslationUpdateInput,
      ContactTranslationUncheckedUpdateInput
    >;
    /**
     * Choose, which ContactTranslation to update.
     */
    where: ContactTranslationWhereUniqueInput;
  };

  /**
   * ContactTranslation updateMany
   */
  export type ContactTranslationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ContactTranslations.
     */
    data: XOR<
      ContactTranslationUpdateManyMutationInput,
      ContactTranslationUncheckedUpdateManyInput
    >;
    /**
     * Filter which ContactTranslations to update
     */
    where?: ContactTranslationWhereInput;
    /**
     * Limit how many ContactTranslations to update.
     */
    limit?: number;
  };

  /**
   * ContactTranslation updateManyAndReturn
   */
  export type ContactTranslationUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ContactTranslation
     */
    select?: ContactTranslationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ContactTranslation
     */
    omit?: ContactTranslationOmit<ExtArgs> | null;
    /**
     * The data used to update ContactTranslations.
     */
    data: XOR<
      ContactTranslationUpdateManyMutationInput,
      ContactTranslationUncheckedUpdateManyInput
    >;
    /**
     * Filter which ContactTranslations to update
     */
    where?: ContactTranslationWhereInput;
    /**
     * Limit how many ContactTranslations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTranslationIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ContactTranslation upsert
   */
  export type ContactTranslationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ContactTranslation
     */
    select?: ContactTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContactTranslation
     */
    omit?: ContactTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTranslationInclude<ExtArgs> | null;
    /**
     * The filter to search for the ContactTranslation to update in case it exists.
     */
    where: ContactTranslationWhereUniqueInput;
    /**
     * In case the ContactTranslation found by the `where` argument doesn't exist, create a new ContactTranslation with this data.
     */
    create: XOR<
      ContactTranslationCreateInput,
      ContactTranslationUncheckedCreateInput
    >;
    /**
     * In case the ContactTranslation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      ContactTranslationUpdateInput,
      ContactTranslationUncheckedUpdateInput
    >;
  };

  /**
   * ContactTranslation delete
   */
  export type ContactTranslationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ContactTranslation
     */
    select?: ContactTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContactTranslation
     */
    omit?: ContactTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTranslationInclude<ExtArgs> | null;
    /**
     * Filter which ContactTranslation to delete.
     */
    where: ContactTranslationWhereUniqueInput;
  };

  /**
   * ContactTranslation deleteMany
   */
  export type ContactTranslationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ContactTranslations to delete
     */
    where?: ContactTranslationWhereInput;
    /**
     * Limit how many ContactTranslations to delete.
     */
    limit?: number;
  };

  /**
   * ContactTranslation without action
   */
  export type ContactTranslationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ContactTranslation
     */
    select?: ContactTranslationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContactTranslation
     */
    omit?: ContactTranslationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTranslationInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    passwordHash: 'passwordHash';
    role: 'role';
    isVerified: 'isVerified';
    createdAt: 'createdAt';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const RefreshTokenScalarFieldEnum: {
    id: 'id';
    tokenHash: 'tokenHash';
    userId: 'userId';
    expiresAt: 'expiresAt';
  };

  export type RefreshTokenScalarFieldEnum =
    (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum];

  export const PasswordResetTokenScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    tokenHash: 'tokenHash';
    expiresAt: 'expiresAt';
  };

  export type PasswordResetTokenScalarFieldEnum =
    (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum];

  export const CategoryScalarFieldEnum: {
    id: 'id';
    code: 'code';
    type: 'type';
    order: 'order';
    isActive: 'isActive';
  };

  export type CategoryScalarFieldEnum =
    (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];

  export const CategoryTranslationScalarFieldEnum: {
    id: 'id';
    categoryId: 'categoryId';
    locale: 'locale';
    label: 'label';
    slug: 'slug';
  };

  export type CategoryTranslationScalarFieldEnum =
    (typeof CategoryTranslationScalarFieldEnum)[keyof typeof CategoryTranslationScalarFieldEnum];

  export const ServiceScalarFieldEnum: {
    id: 'id';
    categoryId: 'categoryId';
    icon: 'icon';
    externalUrl: 'externalUrl';
    order: 'order';
    isActive: 'isActive';
    requiresAuth: 'requiresAuth';
    role: 'role';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type ServiceScalarFieldEnum =
    (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum];

  export const ServiceTranslationScalarFieldEnum: {
    id: 'id';
    serviceId: 'serviceId';
    locale: 'locale';
    title: 'title';
    description: 'description';
    slug: 'slug';
  };

  export type ServiceTranslationScalarFieldEnum =
    (typeof ServiceTranslationScalarFieldEnum)[keyof typeof ServiceTranslationScalarFieldEnum];

  export const ContactScalarFieldEnum: {
    id: 'id';
    categoryId: 'categoryId';
    icon: 'icon';
    externalUrl: 'externalUrl';
    order: 'order';
    isActive: 'isActive';
    requiresAuth: 'requiresAuth';
    role: 'role';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type ContactScalarFieldEnum =
    (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum];

  export const ContactTranslationScalarFieldEnum: {
    id: 'id';
    contactId: 'contactId';
    locale: 'locale';
    title: 'title';
    description: 'description';
    slug: 'slug';
  };

  export type ContactTranslationScalarFieldEnum =
    (typeof ContactTranslationScalarFieldEnum)[keyof typeof ContactTranslationScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Role'
  >;

  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Role[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'CategoryType'
   */
  export type EnumCategoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'CategoryType'
  >;

  /**
   * Reference to a field of type 'CategoryType[]'
   */
  export type ListEnumCategoryTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'CategoryType[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'Locale'
   */
  export type EnumLocaleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Locale'
  >;

  /**
   * Reference to a field of type 'Locale[]'
   */
  export type ListEnumLocaleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Locale[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    passwordHash?: StringFilter<'User'> | string;
    role?: EnumRoleFilter<'User'> | $Enums.Role;
    isVerified?: BoolFilter<'User'> | boolean;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    refreshTokens?: RefreshTokenListRelationFilter;
    passwordResetTokens?: PasswordResetTokenListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    role?: SortOrder;
    isVerified?: SortOrder;
    createdAt?: SortOrder;
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput;
    passwordResetTokens?: PasswordResetTokenOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      passwordHash?: StringFilter<'User'> | string;
      role?: EnumRoleFilter<'User'> | $Enums.Role;
      isVerified?: BoolFilter<'User'> | boolean;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      refreshTokens?: RefreshTokenListRelationFilter;
      passwordResetTokens?: PasswordResetTokenListRelationFilter;
    },
    'id' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    role?: SortOrder;
    isVerified?: SortOrder;
    createdAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'User'> | string;
    email?: StringWithAggregatesFilter<'User'> | string;
    passwordHash?: StringWithAggregatesFilter<'User'> | string;
    role?: EnumRoleWithAggregatesFilter<'User'> | $Enums.Role;
    isVerified?: BoolWithAggregatesFilter<'User'> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[];
    OR?: RefreshTokenWhereInput[];
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[];
    id?: StringFilter<'RefreshToken'> | string;
    tokenHash?: StringFilter<'RefreshToken'> | string;
    userId?: StringFilter<'RefreshToken'> | string;
    expiresAt?: DateTimeFilter<'RefreshToken'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder;
    tokenHash?: SortOrder;
    userId?: SortOrder;
    expiresAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[];
      OR?: RefreshTokenWhereInput[];
      NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[];
      tokenHash?: StringFilter<'RefreshToken'> | string;
      userId?: StringFilter<'RefreshToken'> | string;
      expiresAt?: DateTimeFilter<'RefreshToken'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id'
  >;

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder;
    tokenHash?: SortOrder;
    userId?: SortOrder;
    expiresAt?: SortOrder;
    _count?: RefreshTokenCountOrderByAggregateInput;
    _max?: RefreshTokenMaxOrderByAggregateInput;
    _min?: RefreshTokenMinOrderByAggregateInput;
  };

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?:
      | RefreshTokenScalarWhereWithAggregatesInput
      | RefreshTokenScalarWhereWithAggregatesInput[];
    OR?: RefreshTokenScalarWhereWithAggregatesInput[];
    NOT?:
      | RefreshTokenScalarWhereWithAggregatesInput
      | RefreshTokenScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'RefreshToken'> | string;
    tokenHash?: StringWithAggregatesFilter<'RefreshToken'> | string;
    userId?: StringWithAggregatesFilter<'RefreshToken'> | string;
    expiresAt?: DateTimeWithAggregatesFilter<'RefreshToken'> | Date | string;
  };

  export type PasswordResetTokenWhereInput = {
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[];
    OR?: PasswordResetTokenWhereInput[];
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[];
    id?: StringFilter<'PasswordResetToken'> | string;
    userId?: StringFilter<'PasswordResetToken'> | string;
    tokenHash?: StringFilter<'PasswordResetToken'> | string;
    expiresAt?: DateTimeFilter<'PasswordResetToken'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type PasswordResetTokenOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    tokenHash?: SortOrder;
    expiresAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type PasswordResetTokenWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[];
      OR?: PasswordResetTokenWhereInput[];
      NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[];
      userId?: StringFilter<'PasswordResetToken'> | string;
      tokenHash?: StringFilter<'PasswordResetToken'> | string;
      expiresAt?: DateTimeFilter<'PasswordResetToken'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id'
  >;

  export type PasswordResetTokenOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    tokenHash?: SortOrder;
    expiresAt?: SortOrder;
    _count?: PasswordResetTokenCountOrderByAggregateInput;
    _max?: PasswordResetTokenMaxOrderByAggregateInput;
    _min?: PasswordResetTokenMinOrderByAggregateInput;
  };

  export type PasswordResetTokenScalarWhereWithAggregatesInput = {
    AND?:
      | PasswordResetTokenScalarWhereWithAggregatesInput
      | PasswordResetTokenScalarWhereWithAggregatesInput[];
    OR?: PasswordResetTokenScalarWhereWithAggregatesInput[];
    NOT?:
      | PasswordResetTokenScalarWhereWithAggregatesInput
      | PasswordResetTokenScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'PasswordResetToken'> | string;
    userId?: StringWithAggregatesFilter<'PasswordResetToken'> | string;
    tokenHash?: StringWithAggregatesFilter<'PasswordResetToken'> | string;
    expiresAt?:
      | DateTimeWithAggregatesFilter<'PasswordResetToken'>
      | Date
      | string;
  };

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[];
    OR?: CategoryWhereInput[];
    NOT?: CategoryWhereInput | CategoryWhereInput[];
    id?: StringFilter<'Category'> | string;
    code?: StringFilter<'Category'> | string;
    type?: EnumCategoryTypeFilter<'Category'> | $Enums.CategoryType;
    order?: IntFilter<'Category'> | number;
    isActive?: BoolFilter<'Category'> | boolean;
    services?: ServiceListRelationFilter;
    contacts?: ContactListRelationFilter;
    translations?: CategoryTranslationListRelationFilter;
  };

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder;
    code?: SortOrder;
    type?: SortOrder;
    order?: SortOrder;
    isActive?: SortOrder;
    services?: ServiceOrderByRelationAggregateInput;
    contacts?: ContactOrderByRelationAggregateInput;
    translations?: CategoryTranslationOrderByRelationAggregateInput;
  };

  export type CategoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      code?: string;
      AND?: CategoryWhereInput | CategoryWhereInput[];
      OR?: CategoryWhereInput[];
      NOT?: CategoryWhereInput | CategoryWhereInput[];
      type?: EnumCategoryTypeFilter<'Category'> | $Enums.CategoryType;
      order?: IntFilter<'Category'> | number;
      isActive?: BoolFilter<'Category'> | boolean;
      services?: ServiceListRelationFilter;
      contacts?: ContactListRelationFilter;
      translations?: CategoryTranslationListRelationFilter;
    },
    'id' | 'code'
  >;

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder;
    code?: SortOrder;
    type?: SortOrder;
    order?: SortOrder;
    isActive?: SortOrder;
    _count?: CategoryCountOrderByAggregateInput;
    _avg?: CategoryAvgOrderByAggregateInput;
    _max?: CategoryMaxOrderByAggregateInput;
    _min?: CategoryMinOrderByAggregateInput;
    _sum?: CategorySumOrderByAggregateInput;
  };

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?:
      | CategoryScalarWhereWithAggregatesInput
      | CategoryScalarWhereWithAggregatesInput[];
    OR?: CategoryScalarWhereWithAggregatesInput[];
    NOT?:
      | CategoryScalarWhereWithAggregatesInput
      | CategoryScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Category'> | string;
    code?: StringWithAggregatesFilter<'Category'> | string;
    type?:
      | EnumCategoryTypeWithAggregatesFilter<'Category'>
      | $Enums.CategoryType;
    order?: IntWithAggregatesFilter<'Category'> | number;
    isActive?: BoolWithAggregatesFilter<'Category'> | boolean;
  };

  export type CategoryTranslationWhereInput = {
    AND?: CategoryTranslationWhereInput | CategoryTranslationWhereInput[];
    OR?: CategoryTranslationWhereInput[];
    NOT?: CategoryTranslationWhereInput | CategoryTranslationWhereInput[];
    id?: StringFilter<'CategoryTranslation'> | string;
    categoryId?: StringFilter<'CategoryTranslation'> | string;
    locale?: EnumLocaleFilter<'CategoryTranslation'> | $Enums.Locale;
    label?: StringFilter<'CategoryTranslation'> | string;
    slug?: StringFilter<'CategoryTranslation'> | string;
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>;
  };

  export type CategoryTranslationOrderByWithRelationInput = {
    id?: SortOrder;
    categoryId?: SortOrder;
    locale?: SortOrder;
    label?: SortOrder;
    slug?: SortOrder;
    category?: CategoryOrderByWithRelationInput;
  };

  export type CategoryTranslationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      categoryId_locale?: CategoryTranslationCategoryIdLocaleCompoundUniqueInput;
      locale_slug?: CategoryTranslationLocaleSlugCompoundUniqueInput;
      AND?: CategoryTranslationWhereInput | CategoryTranslationWhereInput[];
      OR?: CategoryTranslationWhereInput[];
      NOT?: CategoryTranslationWhereInput | CategoryTranslationWhereInput[];
      categoryId?: StringFilter<'CategoryTranslation'> | string;
      locale?: EnumLocaleFilter<'CategoryTranslation'> | $Enums.Locale;
      label?: StringFilter<'CategoryTranslation'> | string;
      slug?: StringFilter<'CategoryTranslation'> | string;
      category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>;
    },
    'id' | 'categoryId_locale' | 'locale_slug'
  >;

  export type CategoryTranslationOrderByWithAggregationInput = {
    id?: SortOrder;
    categoryId?: SortOrder;
    locale?: SortOrder;
    label?: SortOrder;
    slug?: SortOrder;
    _count?: CategoryTranslationCountOrderByAggregateInput;
    _max?: CategoryTranslationMaxOrderByAggregateInput;
    _min?: CategoryTranslationMinOrderByAggregateInput;
  };

  export type CategoryTranslationScalarWhereWithAggregatesInput = {
    AND?:
      | CategoryTranslationScalarWhereWithAggregatesInput
      | CategoryTranslationScalarWhereWithAggregatesInput[];
    OR?: CategoryTranslationScalarWhereWithAggregatesInput[];
    NOT?:
      | CategoryTranslationScalarWhereWithAggregatesInput
      | CategoryTranslationScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'CategoryTranslation'> | string;
    categoryId?: StringWithAggregatesFilter<'CategoryTranslation'> | string;
    locale?:
      | EnumLocaleWithAggregatesFilter<'CategoryTranslation'>
      | $Enums.Locale;
    label?: StringWithAggregatesFilter<'CategoryTranslation'> | string;
    slug?: StringWithAggregatesFilter<'CategoryTranslation'> | string;
  };

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[];
    OR?: ServiceWhereInput[];
    NOT?: ServiceWhereInput | ServiceWhereInput[];
    id?: StringFilter<'Service'> | string;
    categoryId?: StringFilter<'Service'> | string;
    icon?: StringFilter<'Service'> | string;
    externalUrl?: StringNullableFilter<'Service'> | string | null;
    order?: IntFilter<'Service'> | number;
    isActive?: BoolFilter<'Service'> | boolean;
    requiresAuth?: BoolFilter<'Service'> | boolean;
    role?: EnumRoleNullableFilter<'Service'> | $Enums.Role | null;
    createdAt?: DateTimeFilter<'Service'> | Date | string;
    updatedAt?: DateTimeFilter<'Service'> | Date | string;
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>;
    translations?: ServiceTranslationListRelationFilter;
  };

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder;
    categoryId?: SortOrder;
    icon?: SortOrder;
    externalUrl?: SortOrderInput | SortOrder;
    order?: SortOrder;
    isActive?: SortOrder;
    requiresAuth?: SortOrder;
    role?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    category?: CategoryOrderByWithRelationInput;
    translations?: ServiceTranslationOrderByRelationAggregateInput;
  };

  export type ServiceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ServiceWhereInput | ServiceWhereInput[];
      OR?: ServiceWhereInput[];
      NOT?: ServiceWhereInput | ServiceWhereInput[];
      categoryId?: StringFilter<'Service'> | string;
      icon?: StringFilter<'Service'> | string;
      externalUrl?: StringNullableFilter<'Service'> | string | null;
      order?: IntFilter<'Service'> | number;
      isActive?: BoolFilter<'Service'> | boolean;
      requiresAuth?: BoolFilter<'Service'> | boolean;
      role?: EnumRoleNullableFilter<'Service'> | $Enums.Role | null;
      createdAt?: DateTimeFilter<'Service'> | Date | string;
      updatedAt?: DateTimeFilter<'Service'> | Date | string;
      category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>;
      translations?: ServiceTranslationListRelationFilter;
    },
    'id'
  >;

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder;
    categoryId?: SortOrder;
    icon?: SortOrder;
    externalUrl?: SortOrderInput | SortOrder;
    order?: SortOrder;
    isActive?: SortOrder;
    requiresAuth?: SortOrder;
    role?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ServiceCountOrderByAggregateInput;
    _avg?: ServiceAvgOrderByAggregateInput;
    _max?: ServiceMaxOrderByAggregateInput;
    _min?: ServiceMinOrderByAggregateInput;
    _sum?: ServiceSumOrderByAggregateInput;
  };

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?:
      | ServiceScalarWhereWithAggregatesInput
      | ServiceScalarWhereWithAggregatesInput[];
    OR?: ServiceScalarWhereWithAggregatesInput[];
    NOT?:
      | ServiceScalarWhereWithAggregatesInput
      | ServiceScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Service'> | string;
    categoryId?: StringWithAggregatesFilter<'Service'> | string;
    icon?: StringWithAggregatesFilter<'Service'> | string;
    externalUrl?: StringNullableWithAggregatesFilter<'Service'> | string | null;
    order?: IntWithAggregatesFilter<'Service'> | number;
    isActive?: BoolWithAggregatesFilter<'Service'> | boolean;
    requiresAuth?: BoolWithAggregatesFilter<'Service'> | boolean;
    role?: EnumRoleNullableWithAggregatesFilter<'Service'> | $Enums.Role | null;
    createdAt?: DateTimeWithAggregatesFilter<'Service'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Service'> | Date | string;
  };

  export type ServiceTranslationWhereInput = {
    AND?: ServiceTranslationWhereInput | ServiceTranslationWhereInput[];
    OR?: ServiceTranslationWhereInput[];
    NOT?: ServiceTranslationWhereInput | ServiceTranslationWhereInput[];
    id?: StringFilter<'ServiceTranslation'> | string;
    serviceId?: StringFilter<'ServiceTranslation'> | string;
    locale?: EnumLocaleFilter<'ServiceTranslation'> | $Enums.Locale;
    title?: StringFilter<'ServiceTranslation'> | string;
    description?: StringFilter<'ServiceTranslation'> | string;
    slug?: StringFilter<'ServiceTranslation'> | string;
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>;
  };

  export type ServiceTranslationOrderByWithRelationInput = {
    id?: SortOrder;
    serviceId?: SortOrder;
    locale?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    slug?: SortOrder;
    service?: ServiceOrderByWithRelationInput;
  };

  export type ServiceTranslationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      serviceId_locale?: ServiceTranslationServiceIdLocaleCompoundUniqueInput;
      locale_slug?: ServiceTranslationLocaleSlugCompoundUniqueInput;
      AND?: ServiceTranslationWhereInput | ServiceTranslationWhereInput[];
      OR?: ServiceTranslationWhereInput[];
      NOT?: ServiceTranslationWhereInput | ServiceTranslationWhereInput[];
      serviceId?: StringFilter<'ServiceTranslation'> | string;
      locale?: EnumLocaleFilter<'ServiceTranslation'> | $Enums.Locale;
      title?: StringFilter<'ServiceTranslation'> | string;
      description?: StringFilter<'ServiceTranslation'> | string;
      slug?: StringFilter<'ServiceTranslation'> | string;
      service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>;
    },
    'id' | 'serviceId_locale' | 'locale_slug'
  >;

  export type ServiceTranslationOrderByWithAggregationInput = {
    id?: SortOrder;
    serviceId?: SortOrder;
    locale?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    slug?: SortOrder;
    _count?: ServiceTranslationCountOrderByAggregateInput;
    _max?: ServiceTranslationMaxOrderByAggregateInput;
    _min?: ServiceTranslationMinOrderByAggregateInput;
  };

  export type ServiceTranslationScalarWhereWithAggregatesInput = {
    AND?:
      | ServiceTranslationScalarWhereWithAggregatesInput
      | ServiceTranslationScalarWhereWithAggregatesInput[];
    OR?: ServiceTranslationScalarWhereWithAggregatesInput[];
    NOT?:
      | ServiceTranslationScalarWhereWithAggregatesInput
      | ServiceTranslationScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'ServiceTranslation'> | string;
    serviceId?: StringWithAggregatesFilter<'ServiceTranslation'> | string;
    locale?:
      | EnumLocaleWithAggregatesFilter<'ServiceTranslation'>
      | $Enums.Locale;
    title?: StringWithAggregatesFilter<'ServiceTranslation'> | string;
    description?: StringWithAggregatesFilter<'ServiceTranslation'> | string;
    slug?: StringWithAggregatesFilter<'ServiceTranslation'> | string;
  };

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[];
    OR?: ContactWhereInput[];
    NOT?: ContactWhereInput | ContactWhereInput[];
    id?: StringFilter<'Contact'> | string;
    categoryId?: StringFilter<'Contact'> | string;
    icon?: StringFilter<'Contact'> | string;
    externalUrl?: StringNullableFilter<'Contact'> | string | null;
    order?: IntFilter<'Contact'> | number;
    isActive?: BoolFilter<'Contact'> | boolean;
    requiresAuth?: BoolFilter<'Contact'> | boolean;
    role?: EnumRoleNullableFilter<'Contact'> | $Enums.Role | null;
    createdAt?: DateTimeFilter<'Contact'> | Date | string;
    updatedAt?: DateTimeFilter<'Contact'> | Date | string;
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>;
    translations?: ContactTranslationListRelationFilter;
  };

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder;
    categoryId?: SortOrder;
    icon?: SortOrder;
    externalUrl?: SortOrderInput | SortOrder;
    order?: SortOrder;
    isActive?: SortOrder;
    requiresAuth?: SortOrder;
    role?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    category?: CategoryOrderByWithRelationInput;
    translations?: ContactTranslationOrderByRelationAggregateInput;
  };

  export type ContactWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ContactWhereInput | ContactWhereInput[];
      OR?: ContactWhereInput[];
      NOT?: ContactWhereInput | ContactWhereInput[];
      categoryId?: StringFilter<'Contact'> | string;
      icon?: StringFilter<'Contact'> | string;
      externalUrl?: StringNullableFilter<'Contact'> | string | null;
      order?: IntFilter<'Contact'> | number;
      isActive?: BoolFilter<'Contact'> | boolean;
      requiresAuth?: BoolFilter<'Contact'> | boolean;
      role?: EnumRoleNullableFilter<'Contact'> | $Enums.Role | null;
      createdAt?: DateTimeFilter<'Contact'> | Date | string;
      updatedAt?: DateTimeFilter<'Contact'> | Date | string;
      category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>;
      translations?: ContactTranslationListRelationFilter;
    },
    'id'
  >;

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder;
    categoryId?: SortOrder;
    icon?: SortOrder;
    externalUrl?: SortOrderInput | SortOrder;
    order?: SortOrder;
    isActive?: SortOrder;
    requiresAuth?: SortOrder;
    role?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ContactCountOrderByAggregateInput;
    _avg?: ContactAvgOrderByAggregateInput;
    _max?: ContactMaxOrderByAggregateInput;
    _min?: ContactMinOrderByAggregateInput;
    _sum?: ContactSumOrderByAggregateInput;
  };

  export type ContactScalarWhereWithAggregatesInput = {
    AND?:
      | ContactScalarWhereWithAggregatesInput
      | ContactScalarWhereWithAggregatesInput[];
    OR?: ContactScalarWhereWithAggregatesInput[];
    NOT?:
      | ContactScalarWhereWithAggregatesInput
      | ContactScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Contact'> | string;
    categoryId?: StringWithAggregatesFilter<'Contact'> | string;
    icon?: StringWithAggregatesFilter<'Contact'> | string;
    externalUrl?: StringNullableWithAggregatesFilter<'Contact'> | string | null;
    order?: IntWithAggregatesFilter<'Contact'> | number;
    isActive?: BoolWithAggregatesFilter<'Contact'> | boolean;
    requiresAuth?: BoolWithAggregatesFilter<'Contact'> | boolean;
    role?: EnumRoleNullableWithAggregatesFilter<'Contact'> | $Enums.Role | null;
    createdAt?: DateTimeWithAggregatesFilter<'Contact'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Contact'> | Date | string;
  };

  export type ContactTranslationWhereInput = {
    AND?: ContactTranslationWhereInput | ContactTranslationWhereInput[];
    OR?: ContactTranslationWhereInput[];
    NOT?: ContactTranslationWhereInput | ContactTranslationWhereInput[];
    id?: StringFilter<'ContactTranslation'> | string;
    contactId?: StringFilter<'ContactTranslation'> | string;
    locale?: EnumLocaleFilter<'ContactTranslation'> | $Enums.Locale;
    title?: StringFilter<'ContactTranslation'> | string;
    description?: StringFilter<'ContactTranslation'> | string;
    slug?: StringFilter<'ContactTranslation'> | string;
    contact?: XOR<ContactScalarRelationFilter, ContactWhereInput>;
  };

  export type ContactTranslationOrderByWithRelationInput = {
    id?: SortOrder;
    contactId?: SortOrder;
    locale?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    slug?: SortOrder;
    contact?: ContactOrderByWithRelationInput;
  };

  export type ContactTranslationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      contactId_locale?: ContactTranslationContactIdLocaleCompoundUniqueInput;
      locale_slug?: ContactTranslationLocaleSlugCompoundUniqueInput;
      AND?: ContactTranslationWhereInput | ContactTranslationWhereInput[];
      OR?: ContactTranslationWhereInput[];
      NOT?: ContactTranslationWhereInput | ContactTranslationWhereInput[];
      contactId?: StringFilter<'ContactTranslation'> | string;
      locale?: EnumLocaleFilter<'ContactTranslation'> | $Enums.Locale;
      title?: StringFilter<'ContactTranslation'> | string;
      description?: StringFilter<'ContactTranslation'> | string;
      slug?: StringFilter<'ContactTranslation'> | string;
      contact?: XOR<ContactScalarRelationFilter, ContactWhereInput>;
    },
    'id' | 'contactId_locale' | 'locale_slug'
  >;

  export type ContactTranslationOrderByWithAggregationInput = {
    id?: SortOrder;
    contactId?: SortOrder;
    locale?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    slug?: SortOrder;
    _count?: ContactTranslationCountOrderByAggregateInput;
    _max?: ContactTranslationMaxOrderByAggregateInput;
    _min?: ContactTranslationMinOrderByAggregateInput;
  };

  export type ContactTranslationScalarWhereWithAggregatesInput = {
    AND?:
      | ContactTranslationScalarWhereWithAggregatesInput
      | ContactTranslationScalarWhereWithAggregatesInput[];
    OR?: ContactTranslationScalarWhereWithAggregatesInput[];
    NOT?:
      | ContactTranslationScalarWhereWithAggregatesInput
      | ContactTranslationScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'ContactTranslation'> | string;
    contactId?: StringWithAggregatesFilter<'ContactTranslation'> | string;
    locale?:
      | EnumLocaleWithAggregatesFilter<'ContactTranslation'>
      | $Enums.Locale;
    title?: StringWithAggregatesFilter<'ContactTranslation'> | string;
    description?: StringWithAggregatesFilter<'ContactTranslation'> | string;
    slug?: StringWithAggregatesFilter<'ContactTranslation'> | string;
  };

  export type UserCreateInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    isVerified?: boolean;
    createdAt?: Date | string;
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput;
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    isVerified?: boolean;
    createdAt?: Date | string;
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput;
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    isVerified?: boolean;
    createdAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RefreshTokenCreateInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    user: UserCreateNestedOneWithoutRefreshTokensInput;
  };

  export type RefreshTokenUncheckedCreateInput = {
    id?: string;
    tokenHash: string;
    userId: string;
    expiresAt: Date | string;
  };

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput;
  };

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RefreshTokenCreateManyInput = {
    id?: string;
    tokenHash: string;
    userId: string;
    expiresAt: Date | string;
  };

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PasswordResetTokenCreateInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    user: UserCreateNestedOneWithoutPasswordResetTokensInput;
  };

  export type PasswordResetTokenUncheckedCreateInput = {
    id?: string;
    userId: string;
    tokenHash: string;
    expiresAt: Date | string;
  };

  export type PasswordResetTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutPasswordResetTokensNestedInput;
  };

  export type PasswordResetTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PasswordResetTokenCreateManyInput = {
    id?: string;
    userId: string;
    tokenHash: string;
    expiresAt: Date | string;
  };

  export type PasswordResetTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PasswordResetTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CategoryCreateInput = {
    id?: string;
    code: string;
    type: $Enums.CategoryType;
    order?: number;
    isActive?: boolean;
    services?: ServiceCreateNestedManyWithoutCategoryInput;
    contacts?: ContactCreateNestedManyWithoutCategoryInput;
    translations?: CategoryTranslationCreateNestedManyWithoutCategoryInput;
  };

  export type CategoryUncheckedCreateInput = {
    id?: string;
    code: string;
    type: $Enums.CategoryType;
    order?: number;
    isActive?: boolean;
    services?: ServiceUncheckedCreateNestedManyWithoutCategoryInput;
    contacts?: ContactUncheckedCreateNestedManyWithoutCategoryInput;
    translations?: CategoryTranslationUncheckedCreateNestedManyWithoutCategoryInput;
  };

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType;
    order?: IntFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    services?: ServiceUpdateManyWithoutCategoryNestedInput;
    contacts?: ContactUpdateManyWithoutCategoryNestedInput;
    translations?: CategoryTranslationUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType;
    order?: IntFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    services?: ServiceUncheckedUpdateManyWithoutCategoryNestedInput;
    contacts?: ContactUncheckedUpdateManyWithoutCategoryNestedInput;
    translations?: CategoryTranslationUncheckedUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoryCreateManyInput = {
    id?: string;
    code: string;
    type: $Enums.CategoryType;
    order?: number;
    isActive?: boolean;
  };

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType;
    order?: IntFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType;
    order?: IntFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type CategoryTranslationCreateInput = {
    id?: string;
    locale: $Enums.Locale;
    label: string;
    slug: string;
    category: CategoryCreateNestedOneWithoutTranslationsInput;
  };

  export type CategoryTranslationUncheckedCreateInput = {
    id?: string;
    categoryId: string;
    locale: $Enums.Locale;
    label: string;
    slug: string;
  };

  export type CategoryTranslationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale;
    label?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    category?: CategoryUpdateOneRequiredWithoutTranslationsNestedInput;
  };

  export type CategoryTranslationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale;
    label?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
  };

  export type CategoryTranslationCreateManyInput = {
    id?: string;
    categoryId: string;
    locale: $Enums.Locale;
    label: string;
    slug: string;
  };

  export type CategoryTranslationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale;
    label?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
  };

  export type CategoryTranslationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale;
    label?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
  };

  export type ServiceCreateInput = {
    id?: string;
    icon: string;
    externalUrl?: string | null;
    order?: number;
    isActive?: boolean;
    requiresAuth?: boolean;
    role?: $Enums.Role | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: CategoryCreateNestedOneWithoutServicesInput;
    translations?: ServiceTranslationCreateNestedManyWithoutServiceInput;
  };

  export type ServiceUncheckedCreateInput = {
    id?: string;
    categoryId: string;
    icon: string;
    externalUrl?: string | null;
    order?: number;
    isActive?: boolean;
    requiresAuth?: boolean;
    role?: $Enums.Role | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: ServiceTranslationUncheckedCreateNestedManyWithoutServiceInput;
  };

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    order?: IntFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    requiresAuth?: BoolFieldUpdateOperationsInput | boolean;
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    category?: CategoryUpdateOneRequiredWithoutServicesNestedInput;
    translations?: ServiceTranslationUpdateManyWithoutServiceNestedInput;
  };

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    order?: IntFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    requiresAuth?: BoolFieldUpdateOperationsInput | boolean;
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: ServiceTranslationUncheckedUpdateManyWithoutServiceNestedInput;
  };

  export type ServiceCreateManyInput = {
    id?: string;
    categoryId: string;
    icon: string;
    externalUrl?: string | null;
    order?: number;
    isActive?: boolean;
    requiresAuth?: boolean;
    role?: $Enums.Role | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    order?: IntFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    requiresAuth?: BoolFieldUpdateOperationsInput | boolean;
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    order?: IntFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    requiresAuth?: BoolFieldUpdateOperationsInput | boolean;
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ServiceTranslationCreateInput = {
    id?: string;
    locale: $Enums.Locale;
    title: string;
    description: string;
    slug: string;
    service: ServiceCreateNestedOneWithoutTranslationsInput;
  };

  export type ServiceTranslationUncheckedCreateInput = {
    id?: string;
    serviceId: string;
    locale: $Enums.Locale;
    title: string;
    description: string;
    slug: string;
  };

  export type ServiceTranslationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    service?: ServiceUpdateOneRequiredWithoutTranslationsNestedInput;
  };

  export type ServiceTranslationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    serviceId?: StringFieldUpdateOperationsInput | string;
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
  };

  export type ServiceTranslationCreateManyInput = {
    id?: string;
    serviceId: string;
    locale: $Enums.Locale;
    title: string;
    description: string;
    slug: string;
  };

  export type ServiceTranslationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
  };

  export type ServiceTranslationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    serviceId?: StringFieldUpdateOperationsInput | string;
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
  };

  export type ContactCreateInput = {
    id?: string;
    icon: string;
    externalUrl?: string | null;
    order?: number;
    isActive?: boolean;
    requiresAuth?: boolean;
    role?: $Enums.Role | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: CategoryCreateNestedOneWithoutContactsInput;
    translations?: ContactTranslationCreateNestedManyWithoutContactInput;
  };

  export type ContactUncheckedCreateInput = {
    id?: string;
    categoryId: string;
    icon: string;
    externalUrl?: string | null;
    order?: number;
    isActive?: boolean;
    requiresAuth?: boolean;
    role?: $Enums.Role | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: ContactTranslationUncheckedCreateNestedManyWithoutContactInput;
  };

  export type ContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    order?: IntFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    requiresAuth?: BoolFieldUpdateOperationsInput | boolean;
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    category?: CategoryUpdateOneRequiredWithoutContactsNestedInput;
    translations?: ContactTranslationUpdateManyWithoutContactNestedInput;
  };

  export type ContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    order?: IntFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    requiresAuth?: BoolFieldUpdateOperationsInput | boolean;
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: ContactTranslationUncheckedUpdateManyWithoutContactNestedInput;
  };

  export type ContactCreateManyInput = {
    id?: string;
    categoryId: string;
    icon: string;
    externalUrl?: string | null;
    order?: number;
    isActive?: boolean;
    requiresAuth?: boolean;
    role?: $Enums.Role | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    order?: IntFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    requiresAuth?: BoolFieldUpdateOperationsInput | boolean;
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    order?: IntFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    requiresAuth?: BoolFieldUpdateOperationsInput | boolean;
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ContactTranslationCreateInput = {
    id?: string;
    locale: $Enums.Locale;
    title: string;
    description: string;
    slug: string;
    contact: ContactCreateNestedOneWithoutTranslationsInput;
  };

  export type ContactTranslationUncheckedCreateInput = {
    id?: string;
    contactId: string;
    locale: $Enums.Locale;
    title: string;
    description: string;
    slug: string;
  };

  export type ContactTranslationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    contact?: ContactUpdateOneRequiredWithoutTranslationsNestedInput;
  };

  export type ContactTranslationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    contactId?: StringFieldUpdateOperationsInput | string;
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
  };

  export type ContactTranslationCreateManyInput = {
    id?: string;
    contactId: string;
    locale: $Enums.Locale;
    title: string;
    description: string;
    slug: string;
  };

  export type ContactTranslationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
  };

  export type ContactTranslationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    contactId?: StringFieldUpdateOperationsInput | string;
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput;
    some?: RefreshTokenWhereInput;
    none?: RefreshTokenWhereInput;
  };

  export type PasswordResetTokenListRelationFilter = {
    every?: PasswordResetTokenWhereInput;
    some?: PasswordResetTokenWhereInput;
    none?: PasswordResetTokenWhereInput;
  };

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type PasswordResetTokenOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    role?: SortOrder;
    isVerified?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    role?: SortOrder;
    isVerified?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    role?: SortOrder;
    isVerified?: SortOrder;
    createdAt?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoleFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder;
    tokenHash?: SortOrder;
    userId?: SortOrder;
    expiresAt?: SortOrder;
  };

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder;
    tokenHash?: SortOrder;
    userId?: SortOrder;
    expiresAt?: SortOrder;
  };

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder;
    tokenHash?: SortOrder;
    userId?: SortOrder;
    expiresAt?: SortOrder;
  };

  export type PasswordResetTokenCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    tokenHash?: SortOrder;
    expiresAt?: SortOrder;
  };

  export type PasswordResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    tokenHash?: SortOrder;
    expiresAt?: SortOrder;
  };

  export type PasswordResetTokenMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    tokenHash?: SortOrder;
    expiresAt?: SortOrder;
  };

  export type EnumCategoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.CategoryType[]
      | ListEnumCategoryTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.CategoryType[]
      | ListEnumCategoryTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumCategoryTypeFilter<$PrismaModel> | $Enums.CategoryType;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput;
    some?: ServiceWhereInput;
    none?: ServiceWhereInput;
  };

  export type ContactListRelationFilter = {
    every?: ContactWhereInput;
    some?: ContactWhereInput;
    none?: ContactWhereInput;
  };

  export type CategoryTranslationListRelationFilter = {
    every?: CategoryTranslationWhereInput;
    some?: CategoryTranslationWhereInput;
    none?: CategoryTranslationWhereInput;
  };

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ContactOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CategoryTranslationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder;
    code?: SortOrder;
    type?: SortOrder;
    order?: SortOrder;
    isActive?: SortOrder;
  };

  export type CategoryAvgOrderByAggregateInput = {
    order?: SortOrder;
  };

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    code?: SortOrder;
    type?: SortOrder;
    order?: SortOrder;
    isActive?: SortOrder;
  };

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder;
    code?: SortOrder;
    type?: SortOrder;
    order?: SortOrder;
    isActive?: SortOrder;
  };

  export type CategorySumOrderByAggregateInput = {
    order?: SortOrder;
  };

  export type EnumCategoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.CategoryType[]
      | ListEnumCategoryTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.CategoryType[]
      | ListEnumCategoryTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.CategoryType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumCategoryTypeFilter<$PrismaModel>;
    _max?: NestedEnumCategoryTypeFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type EnumLocaleFilter<$PrismaModel = never> = {
    equals?: $Enums.Locale | EnumLocaleFieldRefInput<$PrismaModel>;
    in?: $Enums.Locale[] | ListEnumLocaleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Locale[] | ListEnumLocaleFieldRefInput<$PrismaModel>;
    not?: NestedEnumLocaleFilter<$PrismaModel> | $Enums.Locale;
  };

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput;
    isNot?: CategoryWhereInput;
  };

  export type CategoryTranslationCategoryIdLocaleCompoundUniqueInput = {
    categoryId: string;
    locale: $Enums.Locale;
  };

  export type CategoryTranslationLocaleSlugCompoundUniqueInput = {
    locale: $Enums.Locale;
    slug: string;
  };

  export type CategoryTranslationCountOrderByAggregateInput = {
    id?: SortOrder;
    categoryId?: SortOrder;
    locale?: SortOrder;
    label?: SortOrder;
    slug?: SortOrder;
  };

  export type CategoryTranslationMaxOrderByAggregateInput = {
    id?: SortOrder;
    categoryId?: SortOrder;
    locale?: SortOrder;
    label?: SortOrder;
    slug?: SortOrder;
  };

  export type CategoryTranslationMinOrderByAggregateInput = {
    id?: SortOrder;
    categoryId?: SortOrder;
    locale?: SortOrder;
    label?: SortOrder;
    slug?: SortOrder;
  };

  export type EnumLocaleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Locale | EnumLocaleFieldRefInput<$PrismaModel>;
    in?: $Enums.Locale[] | ListEnumLocaleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Locale[] | ListEnumLocaleFieldRefInput<$PrismaModel>;
    not?: NestedEnumLocaleWithAggregatesFilter<$PrismaModel> | $Enums.Locale;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumLocaleFilter<$PrismaModel>;
    _max?: NestedEnumLocaleFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type EnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null;
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null;
  };

  export type ServiceTranslationListRelationFilter = {
    every?: ServiceTranslationWhereInput;
    some?: ServiceTranslationWhereInput;
    none?: ServiceTranslationWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type ServiceTranslationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder;
    categoryId?: SortOrder;
    icon?: SortOrder;
    externalUrl?: SortOrder;
    order?: SortOrder;
    isActive?: SortOrder;
    requiresAuth?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ServiceAvgOrderByAggregateInput = {
    order?: SortOrder;
  };

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder;
    categoryId?: SortOrder;
    icon?: SortOrder;
    externalUrl?: SortOrder;
    order?: SortOrder;
    isActive?: SortOrder;
    requiresAuth?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder;
    categoryId?: SortOrder;
    icon?: SortOrder;
    externalUrl?: SortOrder;
    order?: SortOrder;
    isActive?: SortOrder;
    requiresAuth?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ServiceSumOrderByAggregateInput = {
    order?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type EnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null;
    not?:
      | NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.Role
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>;
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>;
  };

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput;
    isNot?: ServiceWhereInput;
  };

  export type ServiceTranslationServiceIdLocaleCompoundUniqueInput = {
    serviceId: string;
    locale: $Enums.Locale;
  };

  export type ServiceTranslationLocaleSlugCompoundUniqueInput = {
    locale: $Enums.Locale;
    slug: string;
  };

  export type ServiceTranslationCountOrderByAggregateInput = {
    id?: SortOrder;
    serviceId?: SortOrder;
    locale?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    slug?: SortOrder;
  };

  export type ServiceTranslationMaxOrderByAggregateInput = {
    id?: SortOrder;
    serviceId?: SortOrder;
    locale?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    slug?: SortOrder;
  };

  export type ServiceTranslationMinOrderByAggregateInput = {
    id?: SortOrder;
    serviceId?: SortOrder;
    locale?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    slug?: SortOrder;
  };

  export type ContactTranslationListRelationFilter = {
    every?: ContactTranslationWhereInput;
    some?: ContactTranslationWhereInput;
    none?: ContactTranslationWhereInput;
  };

  export type ContactTranslationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder;
    categoryId?: SortOrder;
    icon?: SortOrder;
    externalUrl?: SortOrder;
    order?: SortOrder;
    isActive?: SortOrder;
    requiresAuth?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ContactAvgOrderByAggregateInput = {
    order?: SortOrder;
  };

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder;
    categoryId?: SortOrder;
    icon?: SortOrder;
    externalUrl?: SortOrder;
    order?: SortOrder;
    isActive?: SortOrder;
    requiresAuth?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder;
    categoryId?: SortOrder;
    icon?: SortOrder;
    externalUrl?: SortOrder;
    order?: SortOrder;
    isActive?: SortOrder;
    requiresAuth?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ContactSumOrderByAggregateInput = {
    order?: SortOrder;
  };

  export type ContactScalarRelationFilter = {
    is?: ContactWhereInput;
    isNot?: ContactWhereInput;
  };

  export type ContactTranslationContactIdLocaleCompoundUniqueInput = {
    contactId: string;
    locale: $Enums.Locale;
  };

  export type ContactTranslationLocaleSlugCompoundUniqueInput = {
    locale: $Enums.Locale;
    slug: string;
  };

  export type ContactTranslationCountOrderByAggregateInput = {
    id?: SortOrder;
    contactId?: SortOrder;
    locale?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    slug?: SortOrder;
  };

  export type ContactTranslationMaxOrderByAggregateInput = {
    id?: SortOrder;
    contactId?: SortOrder;
    locale?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    slug?: SortOrder;
  };

  export type ContactTranslationMinOrderByAggregateInput = {
    id?: SortOrder;
    contactId?: SortOrder;
    locale?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    slug?: SortOrder;
  };

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          RefreshTokenCreateWithoutUserInput,
          RefreshTokenUncheckedCreateWithoutUserInput
        >
      | RefreshTokenCreateWithoutUserInput[]
      | RefreshTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | RefreshTokenCreateOrConnectWithoutUserInput
      | RefreshTokenCreateOrConnectWithoutUserInput[];
    createMany?: RefreshTokenCreateManyUserInputEnvelope;
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
  };

  export type PasswordResetTokenCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          PasswordResetTokenCreateWithoutUserInput,
          PasswordResetTokenUncheckedCreateWithoutUserInput
        >
      | PasswordResetTokenCreateWithoutUserInput[]
      | PasswordResetTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PasswordResetTokenCreateOrConnectWithoutUserInput
      | PasswordResetTokenCreateOrConnectWithoutUserInput[];
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope;
    connect?:
      | PasswordResetTokenWhereUniqueInput
      | PasswordResetTokenWhereUniqueInput[];
  };

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          RefreshTokenCreateWithoutUserInput,
          RefreshTokenUncheckedCreateWithoutUserInput
        >
      | RefreshTokenCreateWithoutUserInput[]
      | RefreshTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | RefreshTokenCreateOrConnectWithoutUserInput
      | RefreshTokenCreateOrConnectWithoutUserInput[];
    createMany?: RefreshTokenCreateManyUserInputEnvelope;
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
  };

  export type PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          PasswordResetTokenCreateWithoutUserInput,
          PasswordResetTokenUncheckedCreateWithoutUserInput
        >
      | PasswordResetTokenCreateWithoutUserInput[]
      | PasswordResetTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PasswordResetTokenCreateOrConnectWithoutUserInput
      | PasswordResetTokenCreateOrConnectWithoutUserInput[];
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope;
    connect?:
      | PasswordResetTokenWhereUniqueInput
      | PasswordResetTokenWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          RefreshTokenCreateWithoutUserInput,
          RefreshTokenUncheckedCreateWithoutUserInput
        >
      | RefreshTokenCreateWithoutUserInput[]
      | RefreshTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | RefreshTokenCreateOrConnectWithoutUserInput
      | RefreshTokenCreateOrConnectWithoutUserInput[];
    upsert?:
      | RefreshTokenUpsertWithWhereUniqueWithoutUserInput
      | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: RefreshTokenCreateManyUserInputEnvelope;
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    update?:
      | RefreshTokenUpdateWithWhereUniqueWithoutUserInput
      | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | RefreshTokenUpdateManyWithWhereWithoutUserInput
      | RefreshTokenUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[];
  };

  export type PasswordResetTokenUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          PasswordResetTokenCreateWithoutUserInput,
          PasswordResetTokenUncheckedCreateWithoutUserInput
        >
      | PasswordResetTokenCreateWithoutUserInput[]
      | PasswordResetTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PasswordResetTokenCreateOrConnectWithoutUserInput
      | PasswordResetTokenCreateOrConnectWithoutUserInput[];
    upsert?:
      | PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput
      | PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope;
    set?:
      | PasswordResetTokenWhereUniqueInput
      | PasswordResetTokenWhereUniqueInput[];
    disconnect?:
      | PasswordResetTokenWhereUniqueInput
      | PasswordResetTokenWhereUniqueInput[];
    delete?:
      | PasswordResetTokenWhereUniqueInput
      | PasswordResetTokenWhereUniqueInput[];
    connect?:
      | PasswordResetTokenWhereUniqueInput
      | PasswordResetTokenWhereUniqueInput[];
    update?:
      | PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput
      | PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PasswordResetTokenUpdateManyWithWhereWithoutUserInput
      | PasswordResetTokenUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | PasswordResetTokenScalarWhereInput
      | PasswordResetTokenScalarWhereInput[];
  };

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          RefreshTokenCreateWithoutUserInput,
          RefreshTokenUncheckedCreateWithoutUserInput
        >
      | RefreshTokenCreateWithoutUserInput[]
      | RefreshTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | RefreshTokenCreateOrConnectWithoutUserInput
      | RefreshTokenCreateOrConnectWithoutUserInput[];
    upsert?:
      | RefreshTokenUpsertWithWhereUniqueWithoutUserInput
      | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: RefreshTokenCreateManyUserInputEnvelope;
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    update?:
      | RefreshTokenUpdateWithWhereUniqueWithoutUserInput
      | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | RefreshTokenUpdateManyWithWhereWithoutUserInput
      | RefreshTokenUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[];
  };

  export type PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          PasswordResetTokenCreateWithoutUserInput,
          PasswordResetTokenUncheckedCreateWithoutUserInput
        >
      | PasswordResetTokenCreateWithoutUserInput[]
      | PasswordResetTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PasswordResetTokenCreateOrConnectWithoutUserInput
      | PasswordResetTokenCreateOrConnectWithoutUserInput[];
    upsert?:
      | PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput
      | PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope;
    set?:
      | PasswordResetTokenWhereUniqueInput
      | PasswordResetTokenWhereUniqueInput[];
    disconnect?:
      | PasswordResetTokenWhereUniqueInput
      | PasswordResetTokenWhereUniqueInput[];
    delete?:
      | PasswordResetTokenWhereUniqueInput
      | PasswordResetTokenWhereUniqueInput[];
    connect?:
      | PasswordResetTokenWhereUniqueInput
      | PasswordResetTokenWhereUniqueInput[];
    update?:
      | PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput
      | PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PasswordResetTokenUpdateManyWithWhereWithoutUserInput
      | PasswordResetTokenUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | PasswordResetTokenScalarWhereInput
      | PasswordResetTokenScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<
      UserCreateWithoutRefreshTokensInput,
      UserUncheckedCreateWithoutRefreshTokensInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<
      UserCreateWithoutRefreshTokensInput,
      UserUncheckedCreateWithoutRefreshTokensInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput;
    upsert?: UserUpsertWithoutRefreshTokensInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutRefreshTokensInput,
        UserUpdateWithoutRefreshTokensInput
      >,
      UserUncheckedUpdateWithoutRefreshTokensInput
    >;
  };

  export type UserCreateNestedOneWithoutPasswordResetTokensInput = {
    create?: XOR<
      UserCreateWithoutPasswordResetTokensInput,
      UserUncheckedCreateWithoutPasswordResetTokensInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokensInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutPasswordResetTokensNestedInput = {
    create?: XOR<
      UserCreateWithoutPasswordResetTokensInput,
      UserUncheckedCreateWithoutPasswordResetTokensInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokensInput;
    upsert?: UserUpsertWithoutPasswordResetTokensInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutPasswordResetTokensInput,
        UserUpdateWithoutPasswordResetTokensInput
      >,
      UserUncheckedUpdateWithoutPasswordResetTokensInput
    >;
  };

  export type ServiceCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<
          ServiceCreateWithoutCategoryInput,
          ServiceUncheckedCreateWithoutCategoryInput
        >
      | ServiceCreateWithoutCategoryInput[]
      | ServiceUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | ServiceCreateOrConnectWithoutCategoryInput
      | ServiceCreateOrConnectWithoutCategoryInput[];
    createMany?: ServiceCreateManyCategoryInputEnvelope;
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
  };

  export type ContactCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<
          ContactCreateWithoutCategoryInput,
          ContactUncheckedCreateWithoutCategoryInput
        >
      | ContactCreateWithoutCategoryInput[]
      | ContactUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | ContactCreateOrConnectWithoutCategoryInput
      | ContactCreateOrConnectWithoutCategoryInput[];
    createMany?: ContactCreateManyCategoryInputEnvelope;
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[];
  };

  export type CategoryTranslationCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<
          CategoryTranslationCreateWithoutCategoryInput,
          CategoryTranslationUncheckedCreateWithoutCategoryInput
        >
      | CategoryTranslationCreateWithoutCategoryInput[]
      | CategoryTranslationUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | CategoryTranslationCreateOrConnectWithoutCategoryInput
      | CategoryTranslationCreateOrConnectWithoutCategoryInput[];
    createMany?: CategoryTranslationCreateManyCategoryInputEnvelope;
    connect?:
      | CategoryTranslationWhereUniqueInput
      | CategoryTranslationWhereUniqueInput[];
  };

  export type ServiceUncheckedCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<
          ServiceCreateWithoutCategoryInput,
          ServiceUncheckedCreateWithoutCategoryInput
        >
      | ServiceCreateWithoutCategoryInput[]
      | ServiceUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | ServiceCreateOrConnectWithoutCategoryInput
      | ServiceCreateOrConnectWithoutCategoryInput[];
    createMany?: ServiceCreateManyCategoryInputEnvelope;
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
  };

  export type ContactUncheckedCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<
          ContactCreateWithoutCategoryInput,
          ContactUncheckedCreateWithoutCategoryInput
        >
      | ContactCreateWithoutCategoryInput[]
      | ContactUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | ContactCreateOrConnectWithoutCategoryInput
      | ContactCreateOrConnectWithoutCategoryInput[];
    createMany?: ContactCreateManyCategoryInputEnvelope;
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[];
  };

  export type CategoryTranslationUncheckedCreateNestedManyWithoutCategoryInput =
    {
      create?:
        | XOR<
            CategoryTranslationCreateWithoutCategoryInput,
            CategoryTranslationUncheckedCreateWithoutCategoryInput
          >
        | CategoryTranslationCreateWithoutCategoryInput[]
        | CategoryTranslationUncheckedCreateWithoutCategoryInput[];
      connectOrCreate?:
        | CategoryTranslationCreateOrConnectWithoutCategoryInput
        | CategoryTranslationCreateOrConnectWithoutCategoryInput[];
      createMany?: CategoryTranslationCreateManyCategoryInputEnvelope;
      connect?:
        | CategoryTranslationWhereUniqueInput
        | CategoryTranslationWhereUniqueInput[];
    };

  export type EnumCategoryTypeFieldUpdateOperationsInput = {
    set?: $Enums.CategoryType;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type ServiceUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<
          ServiceCreateWithoutCategoryInput,
          ServiceUncheckedCreateWithoutCategoryInput
        >
      | ServiceCreateWithoutCategoryInput[]
      | ServiceUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | ServiceCreateOrConnectWithoutCategoryInput
      | ServiceCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | ServiceUpsertWithWhereUniqueWithoutCategoryInput
      | ServiceUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: ServiceCreateManyCategoryInputEnvelope;
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
    update?:
      | ServiceUpdateWithWhereUniqueWithoutCategoryInput
      | ServiceUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | ServiceUpdateManyWithWhereWithoutCategoryInput
      | ServiceUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[];
  };

  export type ContactUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<
          ContactCreateWithoutCategoryInput,
          ContactUncheckedCreateWithoutCategoryInput
        >
      | ContactCreateWithoutCategoryInput[]
      | ContactUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | ContactCreateOrConnectWithoutCategoryInput
      | ContactCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | ContactUpsertWithWhereUniqueWithoutCategoryInput
      | ContactUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: ContactCreateManyCategoryInputEnvelope;
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[];
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[];
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[];
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[];
    update?:
      | ContactUpdateWithWhereUniqueWithoutCategoryInput
      | ContactUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | ContactUpdateManyWithWhereWithoutCategoryInput
      | ContactUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[];
  };

  export type CategoryTranslationUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<
          CategoryTranslationCreateWithoutCategoryInput,
          CategoryTranslationUncheckedCreateWithoutCategoryInput
        >
      | CategoryTranslationCreateWithoutCategoryInput[]
      | CategoryTranslationUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | CategoryTranslationCreateOrConnectWithoutCategoryInput
      | CategoryTranslationCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | CategoryTranslationUpsertWithWhereUniqueWithoutCategoryInput
      | CategoryTranslationUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: CategoryTranslationCreateManyCategoryInputEnvelope;
    set?:
      | CategoryTranslationWhereUniqueInput
      | CategoryTranslationWhereUniqueInput[];
    disconnect?:
      | CategoryTranslationWhereUniqueInput
      | CategoryTranslationWhereUniqueInput[];
    delete?:
      | CategoryTranslationWhereUniqueInput
      | CategoryTranslationWhereUniqueInput[];
    connect?:
      | CategoryTranslationWhereUniqueInput
      | CategoryTranslationWhereUniqueInput[];
    update?:
      | CategoryTranslationUpdateWithWhereUniqueWithoutCategoryInput
      | CategoryTranslationUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | CategoryTranslationUpdateManyWithWhereWithoutCategoryInput
      | CategoryTranslationUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?:
      | CategoryTranslationScalarWhereInput
      | CategoryTranslationScalarWhereInput[];
  };

  export type ServiceUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<
          ServiceCreateWithoutCategoryInput,
          ServiceUncheckedCreateWithoutCategoryInput
        >
      | ServiceCreateWithoutCategoryInput[]
      | ServiceUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | ServiceCreateOrConnectWithoutCategoryInput
      | ServiceCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | ServiceUpsertWithWhereUniqueWithoutCategoryInput
      | ServiceUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: ServiceCreateManyCategoryInputEnvelope;
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
    update?:
      | ServiceUpdateWithWhereUniqueWithoutCategoryInput
      | ServiceUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | ServiceUpdateManyWithWhereWithoutCategoryInput
      | ServiceUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[];
  };

  export type ContactUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<
          ContactCreateWithoutCategoryInput,
          ContactUncheckedCreateWithoutCategoryInput
        >
      | ContactCreateWithoutCategoryInput[]
      | ContactUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | ContactCreateOrConnectWithoutCategoryInput
      | ContactCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | ContactUpsertWithWhereUniqueWithoutCategoryInput
      | ContactUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: ContactCreateManyCategoryInputEnvelope;
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[];
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[];
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[];
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[];
    update?:
      | ContactUpdateWithWhereUniqueWithoutCategoryInput
      | ContactUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | ContactUpdateManyWithWhereWithoutCategoryInput
      | ContactUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[];
  };

  export type CategoryTranslationUncheckedUpdateManyWithoutCategoryNestedInput =
    {
      create?:
        | XOR<
            CategoryTranslationCreateWithoutCategoryInput,
            CategoryTranslationUncheckedCreateWithoutCategoryInput
          >
        | CategoryTranslationCreateWithoutCategoryInput[]
        | CategoryTranslationUncheckedCreateWithoutCategoryInput[];
      connectOrCreate?:
        | CategoryTranslationCreateOrConnectWithoutCategoryInput
        | CategoryTranslationCreateOrConnectWithoutCategoryInput[];
      upsert?:
        | CategoryTranslationUpsertWithWhereUniqueWithoutCategoryInput
        | CategoryTranslationUpsertWithWhereUniqueWithoutCategoryInput[];
      createMany?: CategoryTranslationCreateManyCategoryInputEnvelope;
      set?:
        | CategoryTranslationWhereUniqueInput
        | CategoryTranslationWhereUniqueInput[];
      disconnect?:
        | CategoryTranslationWhereUniqueInput
        | CategoryTranslationWhereUniqueInput[];
      delete?:
        | CategoryTranslationWhereUniqueInput
        | CategoryTranslationWhereUniqueInput[];
      connect?:
        | CategoryTranslationWhereUniqueInput
        | CategoryTranslationWhereUniqueInput[];
      update?:
        | CategoryTranslationUpdateWithWhereUniqueWithoutCategoryInput
        | CategoryTranslationUpdateWithWhereUniqueWithoutCategoryInput[];
      updateMany?:
        | CategoryTranslationUpdateManyWithWhereWithoutCategoryInput
        | CategoryTranslationUpdateManyWithWhereWithoutCategoryInput[];
      deleteMany?:
        | CategoryTranslationScalarWhereInput
        | CategoryTranslationScalarWhereInput[];
    };

  export type CategoryCreateNestedOneWithoutTranslationsInput = {
    create?: XOR<
      CategoryCreateWithoutTranslationsInput,
      CategoryUncheckedCreateWithoutTranslationsInput
    >;
    connectOrCreate?: CategoryCreateOrConnectWithoutTranslationsInput;
    connect?: CategoryWhereUniqueInput;
  };

  export type EnumLocaleFieldUpdateOperationsInput = {
    set?: $Enums.Locale;
  };

  export type CategoryUpdateOneRequiredWithoutTranslationsNestedInput = {
    create?: XOR<
      CategoryCreateWithoutTranslationsInput,
      CategoryUncheckedCreateWithoutTranslationsInput
    >;
    connectOrCreate?: CategoryCreateOrConnectWithoutTranslationsInput;
    upsert?: CategoryUpsertWithoutTranslationsInput;
    connect?: CategoryWhereUniqueInput;
    update?: XOR<
      XOR<
        CategoryUpdateToOneWithWhereWithoutTranslationsInput,
        CategoryUpdateWithoutTranslationsInput
      >,
      CategoryUncheckedUpdateWithoutTranslationsInput
    >;
  };

  export type CategoryCreateNestedOneWithoutServicesInput = {
    create?: XOR<
      CategoryCreateWithoutServicesInput,
      CategoryUncheckedCreateWithoutServicesInput
    >;
    connectOrCreate?: CategoryCreateOrConnectWithoutServicesInput;
    connect?: CategoryWhereUniqueInput;
  };

  export type ServiceTranslationCreateNestedManyWithoutServiceInput = {
    create?:
      | XOR<
          ServiceTranslationCreateWithoutServiceInput,
          ServiceTranslationUncheckedCreateWithoutServiceInput
        >
      | ServiceTranslationCreateWithoutServiceInput[]
      | ServiceTranslationUncheckedCreateWithoutServiceInput[];
    connectOrCreate?:
      | ServiceTranslationCreateOrConnectWithoutServiceInput
      | ServiceTranslationCreateOrConnectWithoutServiceInput[];
    createMany?: ServiceTranslationCreateManyServiceInputEnvelope;
    connect?:
      | ServiceTranslationWhereUniqueInput
      | ServiceTranslationWhereUniqueInput[];
  };

  export type ServiceTranslationUncheckedCreateNestedManyWithoutServiceInput = {
    create?:
      | XOR<
          ServiceTranslationCreateWithoutServiceInput,
          ServiceTranslationUncheckedCreateWithoutServiceInput
        >
      | ServiceTranslationCreateWithoutServiceInput[]
      | ServiceTranslationUncheckedCreateWithoutServiceInput[];
    connectOrCreate?:
      | ServiceTranslationCreateOrConnectWithoutServiceInput
      | ServiceTranslationCreateOrConnectWithoutServiceInput[];
    createMany?: ServiceTranslationCreateManyServiceInputEnvelope;
    connect?:
      | ServiceTranslationWhereUniqueInput
      | ServiceTranslationWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableEnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role | null;
  };

  export type CategoryUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<
      CategoryCreateWithoutServicesInput,
      CategoryUncheckedCreateWithoutServicesInput
    >;
    connectOrCreate?: CategoryCreateOrConnectWithoutServicesInput;
    upsert?: CategoryUpsertWithoutServicesInput;
    connect?: CategoryWhereUniqueInput;
    update?: XOR<
      XOR<
        CategoryUpdateToOneWithWhereWithoutServicesInput,
        CategoryUpdateWithoutServicesInput
      >,
      CategoryUncheckedUpdateWithoutServicesInput
    >;
  };

  export type ServiceTranslationUpdateManyWithoutServiceNestedInput = {
    create?:
      | XOR<
          ServiceTranslationCreateWithoutServiceInput,
          ServiceTranslationUncheckedCreateWithoutServiceInput
        >
      | ServiceTranslationCreateWithoutServiceInput[]
      | ServiceTranslationUncheckedCreateWithoutServiceInput[];
    connectOrCreate?:
      | ServiceTranslationCreateOrConnectWithoutServiceInput
      | ServiceTranslationCreateOrConnectWithoutServiceInput[];
    upsert?:
      | ServiceTranslationUpsertWithWhereUniqueWithoutServiceInput
      | ServiceTranslationUpsertWithWhereUniqueWithoutServiceInput[];
    createMany?: ServiceTranslationCreateManyServiceInputEnvelope;
    set?:
      | ServiceTranslationWhereUniqueInput
      | ServiceTranslationWhereUniqueInput[];
    disconnect?:
      | ServiceTranslationWhereUniqueInput
      | ServiceTranslationWhereUniqueInput[];
    delete?:
      | ServiceTranslationWhereUniqueInput
      | ServiceTranslationWhereUniqueInput[];
    connect?:
      | ServiceTranslationWhereUniqueInput
      | ServiceTranslationWhereUniqueInput[];
    update?:
      | ServiceTranslationUpdateWithWhereUniqueWithoutServiceInput
      | ServiceTranslationUpdateWithWhereUniqueWithoutServiceInput[];
    updateMany?:
      | ServiceTranslationUpdateManyWithWhereWithoutServiceInput
      | ServiceTranslationUpdateManyWithWhereWithoutServiceInput[];
    deleteMany?:
      | ServiceTranslationScalarWhereInput
      | ServiceTranslationScalarWhereInput[];
  };

  export type ServiceTranslationUncheckedUpdateManyWithoutServiceNestedInput = {
    create?:
      | XOR<
          ServiceTranslationCreateWithoutServiceInput,
          ServiceTranslationUncheckedCreateWithoutServiceInput
        >
      | ServiceTranslationCreateWithoutServiceInput[]
      | ServiceTranslationUncheckedCreateWithoutServiceInput[];
    connectOrCreate?:
      | ServiceTranslationCreateOrConnectWithoutServiceInput
      | ServiceTranslationCreateOrConnectWithoutServiceInput[];
    upsert?:
      | ServiceTranslationUpsertWithWhereUniqueWithoutServiceInput
      | ServiceTranslationUpsertWithWhereUniqueWithoutServiceInput[];
    createMany?: ServiceTranslationCreateManyServiceInputEnvelope;
    set?:
      | ServiceTranslationWhereUniqueInput
      | ServiceTranslationWhereUniqueInput[];
    disconnect?:
      | ServiceTranslationWhereUniqueInput
      | ServiceTranslationWhereUniqueInput[];
    delete?:
      | ServiceTranslationWhereUniqueInput
      | ServiceTranslationWhereUniqueInput[];
    connect?:
      | ServiceTranslationWhereUniqueInput
      | ServiceTranslationWhereUniqueInput[];
    update?:
      | ServiceTranslationUpdateWithWhereUniqueWithoutServiceInput
      | ServiceTranslationUpdateWithWhereUniqueWithoutServiceInput[];
    updateMany?:
      | ServiceTranslationUpdateManyWithWhereWithoutServiceInput
      | ServiceTranslationUpdateManyWithWhereWithoutServiceInput[];
    deleteMany?:
      | ServiceTranslationScalarWhereInput
      | ServiceTranslationScalarWhereInput[];
  };

  export type ServiceCreateNestedOneWithoutTranslationsInput = {
    create?: XOR<
      ServiceCreateWithoutTranslationsInput,
      ServiceUncheckedCreateWithoutTranslationsInput
    >;
    connectOrCreate?: ServiceCreateOrConnectWithoutTranslationsInput;
    connect?: ServiceWhereUniqueInput;
  };

  export type ServiceUpdateOneRequiredWithoutTranslationsNestedInput = {
    create?: XOR<
      ServiceCreateWithoutTranslationsInput,
      ServiceUncheckedCreateWithoutTranslationsInput
    >;
    connectOrCreate?: ServiceCreateOrConnectWithoutTranslationsInput;
    upsert?: ServiceUpsertWithoutTranslationsInput;
    connect?: ServiceWhereUniqueInput;
    update?: XOR<
      XOR<
        ServiceUpdateToOneWithWhereWithoutTranslationsInput,
        ServiceUpdateWithoutTranslationsInput
      >,
      ServiceUncheckedUpdateWithoutTranslationsInput
    >;
  };

  export type CategoryCreateNestedOneWithoutContactsInput = {
    create?: XOR<
      CategoryCreateWithoutContactsInput,
      CategoryUncheckedCreateWithoutContactsInput
    >;
    connectOrCreate?: CategoryCreateOrConnectWithoutContactsInput;
    connect?: CategoryWhereUniqueInput;
  };

  export type ContactTranslationCreateNestedManyWithoutContactInput = {
    create?:
      | XOR<
          ContactTranslationCreateWithoutContactInput,
          ContactTranslationUncheckedCreateWithoutContactInput
        >
      | ContactTranslationCreateWithoutContactInput[]
      | ContactTranslationUncheckedCreateWithoutContactInput[];
    connectOrCreate?:
      | ContactTranslationCreateOrConnectWithoutContactInput
      | ContactTranslationCreateOrConnectWithoutContactInput[];
    createMany?: ContactTranslationCreateManyContactInputEnvelope;
    connect?:
      | ContactTranslationWhereUniqueInput
      | ContactTranslationWhereUniqueInput[];
  };

  export type ContactTranslationUncheckedCreateNestedManyWithoutContactInput = {
    create?:
      | XOR<
          ContactTranslationCreateWithoutContactInput,
          ContactTranslationUncheckedCreateWithoutContactInput
        >
      | ContactTranslationCreateWithoutContactInput[]
      | ContactTranslationUncheckedCreateWithoutContactInput[];
    connectOrCreate?:
      | ContactTranslationCreateOrConnectWithoutContactInput
      | ContactTranslationCreateOrConnectWithoutContactInput[];
    createMany?: ContactTranslationCreateManyContactInputEnvelope;
    connect?:
      | ContactTranslationWhereUniqueInput
      | ContactTranslationWhereUniqueInput[];
  };

  export type CategoryUpdateOneRequiredWithoutContactsNestedInput = {
    create?: XOR<
      CategoryCreateWithoutContactsInput,
      CategoryUncheckedCreateWithoutContactsInput
    >;
    connectOrCreate?: CategoryCreateOrConnectWithoutContactsInput;
    upsert?: CategoryUpsertWithoutContactsInput;
    connect?: CategoryWhereUniqueInput;
    update?: XOR<
      XOR<
        CategoryUpdateToOneWithWhereWithoutContactsInput,
        CategoryUpdateWithoutContactsInput
      >,
      CategoryUncheckedUpdateWithoutContactsInput
    >;
  };

  export type ContactTranslationUpdateManyWithoutContactNestedInput = {
    create?:
      | XOR<
          ContactTranslationCreateWithoutContactInput,
          ContactTranslationUncheckedCreateWithoutContactInput
        >
      | ContactTranslationCreateWithoutContactInput[]
      | ContactTranslationUncheckedCreateWithoutContactInput[];
    connectOrCreate?:
      | ContactTranslationCreateOrConnectWithoutContactInput
      | ContactTranslationCreateOrConnectWithoutContactInput[];
    upsert?:
      | ContactTranslationUpsertWithWhereUniqueWithoutContactInput
      | ContactTranslationUpsertWithWhereUniqueWithoutContactInput[];
    createMany?: ContactTranslationCreateManyContactInputEnvelope;
    set?:
      | ContactTranslationWhereUniqueInput
      | ContactTranslationWhereUniqueInput[];
    disconnect?:
      | ContactTranslationWhereUniqueInput
      | ContactTranslationWhereUniqueInput[];
    delete?:
      | ContactTranslationWhereUniqueInput
      | ContactTranslationWhereUniqueInput[];
    connect?:
      | ContactTranslationWhereUniqueInput
      | ContactTranslationWhereUniqueInput[];
    update?:
      | ContactTranslationUpdateWithWhereUniqueWithoutContactInput
      | ContactTranslationUpdateWithWhereUniqueWithoutContactInput[];
    updateMany?:
      | ContactTranslationUpdateManyWithWhereWithoutContactInput
      | ContactTranslationUpdateManyWithWhereWithoutContactInput[];
    deleteMany?:
      | ContactTranslationScalarWhereInput
      | ContactTranslationScalarWhereInput[];
  };

  export type ContactTranslationUncheckedUpdateManyWithoutContactNestedInput = {
    create?:
      | XOR<
          ContactTranslationCreateWithoutContactInput,
          ContactTranslationUncheckedCreateWithoutContactInput
        >
      | ContactTranslationCreateWithoutContactInput[]
      | ContactTranslationUncheckedCreateWithoutContactInput[];
    connectOrCreate?:
      | ContactTranslationCreateOrConnectWithoutContactInput
      | ContactTranslationCreateOrConnectWithoutContactInput[];
    upsert?:
      | ContactTranslationUpsertWithWhereUniqueWithoutContactInput
      | ContactTranslationUpsertWithWhereUniqueWithoutContactInput[];
    createMany?: ContactTranslationCreateManyContactInputEnvelope;
    set?:
      | ContactTranslationWhereUniqueInput
      | ContactTranslationWhereUniqueInput[];
    disconnect?:
      | ContactTranslationWhereUniqueInput
      | ContactTranslationWhereUniqueInput[];
    delete?:
      | ContactTranslationWhereUniqueInput
      | ContactTranslationWhereUniqueInput[];
    connect?:
      | ContactTranslationWhereUniqueInput
      | ContactTranslationWhereUniqueInput[];
    update?:
      | ContactTranslationUpdateWithWhereUniqueWithoutContactInput
      | ContactTranslationUpdateWithWhereUniqueWithoutContactInput[];
    updateMany?:
      | ContactTranslationUpdateManyWithWhereWithoutContactInput
      | ContactTranslationUpdateManyWithWhereWithoutContactInput[];
    deleteMany?:
      | ContactTranslationScalarWhereInput
      | ContactTranslationScalarWhereInput[];
  };

  export type ContactCreateNestedOneWithoutTranslationsInput = {
    create?: XOR<
      ContactCreateWithoutTranslationsInput,
      ContactUncheckedCreateWithoutTranslationsInput
    >;
    connectOrCreate?: ContactCreateOrConnectWithoutTranslationsInput;
    connect?: ContactWhereUniqueInput;
  };

  export type ContactUpdateOneRequiredWithoutTranslationsNestedInput = {
    create?: XOR<
      ContactCreateWithoutTranslationsInput,
      ContactUncheckedCreateWithoutTranslationsInput
    >;
    connectOrCreate?: ContactCreateOrConnectWithoutTranslationsInput;
    upsert?: ContactUpsertWithoutTranslationsInput;
    connect?: ContactWhereUniqueInput;
    update?: XOR<
      XOR<
        ContactUpdateToOneWithWhereWithoutTranslationsInput,
        ContactUpdateWithoutTranslationsInput
      >,
      ContactUncheckedUpdateWithoutTranslationsInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoleFilter<$PrismaModel>;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedEnumCategoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.CategoryType[]
      | ListEnumCategoryTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.CategoryType[]
      | ListEnumCategoryTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumCategoryTypeFilter<$PrismaModel> | $Enums.CategoryType;
  };

  export type NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | $Enums.CategoryType
        | EnumCategoryTypeFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.CategoryType[]
        | ListEnumCategoryTypeFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.CategoryType[]
        | ListEnumCategoryTypeFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel>
        | $Enums.CategoryType;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumCategoryTypeFilter<$PrismaModel>;
      _max?: NestedEnumCategoryTypeFilter<$PrismaModel>;
    };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedEnumLocaleFilter<$PrismaModel = never> = {
    equals?: $Enums.Locale | EnumLocaleFieldRefInput<$PrismaModel>;
    in?: $Enums.Locale[] | ListEnumLocaleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Locale[] | ListEnumLocaleFieldRefInput<$PrismaModel>;
    not?: NestedEnumLocaleFilter<$PrismaModel> | $Enums.Locale;
  };

  export type NestedEnumLocaleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Locale | EnumLocaleFieldRefInput<$PrismaModel>;
    in?: $Enums.Locale[] | ListEnumLocaleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Locale[] | ListEnumLocaleFieldRefInput<$PrismaModel>;
    not?: NestedEnumLocaleWithAggregatesFilter<$PrismaModel> | $Enums.Locale;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumLocaleFilter<$PrismaModel>;
    _max?: NestedEnumLocaleFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedEnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null;
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null;
      in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null;
      notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null;
      not?:
        | NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel>
        | $Enums.Role
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedEnumRoleNullableFilter<$PrismaModel>;
      _max?: NestedEnumRoleNullableFilter<$PrismaModel>;
    };

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
  };

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
  };

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput;
    create: XOR<
      RefreshTokenCreateWithoutUserInput,
      RefreshTokenUncheckedCreateWithoutUserInput
    >;
  };

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type PasswordResetTokenCreateWithoutUserInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
  };

  export type PasswordResetTokenUncheckedCreateWithoutUserInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
  };

  export type PasswordResetTokenCreateOrConnectWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput;
    create: XOR<
      PasswordResetTokenCreateWithoutUserInput,
      PasswordResetTokenUncheckedCreateWithoutUserInput
    >;
  };

  export type PasswordResetTokenCreateManyUserInputEnvelope = {
    data:
      | PasswordResetTokenCreateManyUserInput
      | PasswordResetTokenCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput;
    update: XOR<
      RefreshTokenUpdateWithoutUserInput,
      RefreshTokenUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      RefreshTokenCreateWithoutUserInput,
      RefreshTokenUncheckedCreateWithoutUserInput
    >;
  };

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput;
    data: XOR<
      RefreshTokenUpdateWithoutUserInput,
      RefreshTokenUncheckedUpdateWithoutUserInput
    >;
  };

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput;
    data: XOR<
      RefreshTokenUpdateManyMutationInput,
      RefreshTokenUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[];
    OR?: RefreshTokenScalarWhereInput[];
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[];
    id?: StringFilter<'RefreshToken'> | string;
    tokenHash?: StringFilter<'RefreshToken'> | string;
    userId?: StringFilter<'RefreshToken'> | string;
    expiresAt?: DateTimeFilter<'RefreshToken'> | Date | string;
  };

  export type PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput;
    update: XOR<
      PasswordResetTokenUpdateWithoutUserInput,
      PasswordResetTokenUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      PasswordResetTokenCreateWithoutUserInput,
      PasswordResetTokenUncheckedCreateWithoutUserInput
    >;
  };

  export type PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput;
    data: XOR<
      PasswordResetTokenUpdateWithoutUserInput,
      PasswordResetTokenUncheckedUpdateWithoutUserInput
    >;
  };

  export type PasswordResetTokenUpdateManyWithWhereWithoutUserInput = {
    where: PasswordResetTokenScalarWhereInput;
    data: XOR<
      PasswordResetTokenUpdateManyMutationInput,
      PasswordResetTokenUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type PasswordResetTokenScalarWhereInput = {
    AND?:
      | PasswordResetTokenScalarWhereInput
      | PasswordResetTokenScalarWhereInput[];
    OR?: PasswordResetTokenScalarWhereInput[];
    NOT?:
      | PasswordResetTokenScalarWhereInput
      | PasswordResetTokenScalarWhereInput[];
    id?: StringFilter<'PasswordResetToken'> | string;
    userId?: StringFilter<'PasswordResetToken'> | string;
    tokenHash?: StringFilter<'PasswordResetToken'> | string;
    expiresAt?: DateTimeFilter<'PasswordResetToken'> | Date | string;
  };

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    isVerified?: boolean;
    createdAt?: Date | string;
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    isVerified?: boolean;
    createdAt?: Date | string;
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutRefreshTokensInput,
      UserUncheckedCreateWithoutRefreshTokensInput
    >;
  };

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<
      UserUpdateWithoutRefreshTokensInput,
      UserUncheckedUpdateWithoutRefreshTokensInput
    >;
    create: XOR<
      UserCreateWithoutRefreshTokensInput,
      UserUncheckedCreateWithoutRefreshTokensInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutRefreshTokensInput,
      UserUncheckedUpdateWithoutRefreshTokensInput
    >;
  };

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutPasswordResetTokensInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    isVerified?: boolean;
    createdAt?: Date | string;
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutPasswordResetTokensInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    isVerified?: boolean;
    createdAt?: Date | string;
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutPasswordResetTokensInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutPasswordResetTokensInput,
      UserUncheckedCreateWithoutPasswordResetTokensInput
    >;
  };

  export type UserUpsertWithoutPasswordResetTokensInput = {
    update: XOR<
      UserUpdateWithoutPasswordResetTokensInput,
      UserUncheckedUpdateWithoutPasswordResetTokensInput
    >;
    create: XOR<
      UserCreateWithoutPasswordResetTokensInput,
      UserUncheckedCreateWithoutPasswordResetTokensInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutPasswordResetTokensInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutPasswordResetTokensInput,
      UserUncheckedUpdateWithoutPasswordResetTokensInput
    >;
  };

  export type UserUpdateWithoutPasswordResetTokensInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutPasswordResetTokensInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isVerified?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type ServiceCreateWithoutCategoryInput = {
    id?: string;
    icon: string;
    externalUrl?: string | null;
    order?: number;
    isActive?: boolean;
    requiresAuth?: boolean;
    role?: $Enums.Role | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: ServiceTranslationCreateNestedManyWithoutServiceInput;
  };

  export type ServiceUncheckedCreateWithoutCategoryInput = {
    id?: string;
    icon: string;
    externalUrl?: string | null;
    order?: number;
    isActive?: boolean;
    requiresAuth?: boolean;
    role?: $Enums.Role | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: ServiceTranslationUncheckedCreateNestedManyWithoutServiceInput;
  };

  export type ServiceCreateOrConnectWithoutCategoryInput = {
    where: ServiceWhereUniqueInput;
    create: XOR<
      ServiceCreateWithoutCategoryInput,
      ServiceUncheckedCreateWithoutCategoryInput
    >;
  };

  export type ServiceCreateManyCategoryInputEnvelope = {
    data: ServiceCreateManyCategoryInput | ServiceCreateManyCategoryInput[];
    skipDuplicates?: boolean;
  };

  export type ContactCreateWithoutCategoryInput = {
    id?: string;
    icon: string;
    externalUrl?: string | null;
    order?: number;
    isActive?: boolean;
    requiresAuth?: boolean;
    role?: $Enums.Role | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: ContactTranslationCreateNestedManyWithoutContactInput;
  };

  export type ContactUncheckedCreateWithoutCategoryInput = {
    id?: string;
    icon: string;
    externalUrl?: string | null;
    order?: number;
    isActive?: boolean;
    requiresAuth?: boolean;
    role?: $Enums.Role | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: ContactTranslationUncheckedCreateNestedManyWithoutContactInput;
  };

  export type ContactCreateOrConnectWithoutCategoryInput = {
    where: ContactWhereUniqueInput;
    create: XOR<
      ContactCreateWithoutCategoryInput,
      ContactUncheckedCreateWithoutCategoryInput
    >;
  };

  export type ContactCreateManyCategoryInputEnvelope = {
    data: ContactCreateManyCategoryInput | ContactCreateManyCategoryInput[];
    skipDuplicates?: boolean;
  };

  export type CategoryTranslationCreateWithoutCategoryInput = {
    id?: string;
    locale: $Enums.Locale;
    label: string;
    slug: string;
  };

  export type CategoryTranslationUncheckedCreateWithoutCategoryInput = {
    id?: string;
    locale: $Enums.Locale;
    label: string;
    slug: string;
  };

  export type CategoryTranslationCreateOrConnectWithoutCategoryInput = {
    where: CategoryTranslationWhereUniqueInput;
    create: XOR<
      CategoryTranslationCreateWithoutCategoryInput,
      CategoryTranslationUncheckedCreateWithoutCategoryInput
    >;
  };

  export type CategoryTranslationCreateManyCategoryInputEnvelope = {
    data:
      | CategoryTranslationCreateManyCategoryInput
      | CategoryTranslationCreateManyCategoryInput[];
    skipDuplicates?: boolean;
  };

  export type ServiceUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ServiceWhereUniqueInput;
    update: XOR<
      ServiceUpdateWithoutCategoryInput,
      ServiceUncheckedUpdateWithoutCategoryInput
    >;
    create: XOR<
      ServiceCreateWithoutCategoryInput,
      ServiceUncheckedCreateWithoutCategoryInput
    >;
  };

  export type ServiceUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ServiceWhereUniqueInput;
    data: XOR<
      ServiceUpdateWithoutCategoryInput,
      ServiceUncheckedUpdateWithoutCategoryInput
    >;
  };

  export type ServiceUpdateManyWithWhereWithoutCategoryInput = {
    where: ServiceScalarWhereInput;
    data: XOR<
      ServiceUpdateManyMutationInput,
      ServiceUncheckedUpdateManyWithoutCategoryInput
    >;
  };

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[];
    OR?: ServiceScalarWhereInput[];
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[];
    id?: StringFilter<'Service'> | string;
    categoryId?: StringFilter<'Service'> | string;
    icon?: StringFilter<'Service'> | string;
    externalUrl?: StringNullableFilter<'Service'> | string | null;
    order?: IntFilter<'Service'> | number;
    isActive?: BoolFilter<'Service'> | boolean;
    requiresAuth?: BoolFilter<'Service'> | boolean;
    role?: EnumRoleNullableFilter<'Service'> | $Enums.Role | null;
    createdAt?: DateTimeFilter<'Service'> | Date | string;
    updatedAt?: DateTimeFilter<'Service'> | Date | string;
  };

  export type ContactUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ContactWhereUniqueInput;
    update: XOR<
      ContactUpdateWithoutCategoryInput,
      ContactUncheckedUpdateWithoutCategoryInput
    >;
    create: XOR<
      ContactCreateWithoutCategoryInput,
      ContactUncheckedCreateWithoutCategoryInput
    >;
  };

  export type ContactUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ContactWhereUniqueInput;
    data: XOR<
      ContactUpdateWithoutCategoryInput,
      ContactUncheckedUpdateWithoutCategoryInput
    >;
  };

  export type ContactUpdateManyWithWhereWithoutCategoryInput = {
    where: ContactScalarWhereInput;
    data: XOR<
      ContactUpdateManyMutationInput,
      ContactUncheckedUpdateManyWithoutCategoryInput
    >;
  };

  export type ContactScalarWhereInput = {
    AND?: ContactScalarWhereInput | ContactScalarWhereInput[];
    OR?: ContactScalarWhereInput[];
    NOT?: ContactScalarWhereInput | ContactScalarWhereInput[];
    id?: StringFilter<'Contact'> | string;
    categoryId?: StringFilter<'Contact'> | string;
    icon?: StringFilter<'Contact'> | string;
    externalUrl?: StringNullableFilter<'Contact'> | string | null;
    order?: IntFilter<'Contact'> | number;
    isActive?: BoolFilter<'Contact'> | boolean;
    requiresAuth?: BoolFilter<'Contact'> | boolean;
    role?: EnumRoleNullableFilter<'Contact'> | $Enums.Role | null;
    createdAt?: DateTimeFilter<'Contact'> | Date | string;
    updatedAt?: DateTimeFilter<'Contact'> | Date | string;
  };

  export type CategoryTranslationUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CategoryTranslationWhereUniqueInput;
    update: XOR<
      CategoryTranslationUpdateWithoutCategoryInput,
      CategoryTranslationUncheckedUpdateWithoutCategoryInput
    >;
    create: XOR<
      CategoryTranslationCreateWithoutCategoryInput,
      CategoryTranslationUncheckedCreateWithoutCategoryInput
    >;
  };

  export type CategoryTranslationUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CategoryTranslationWhereUniqueInput;
    data: XOR<
      CategoryTranslationUpdateWithoutCategoryInput,
      CategoryTranslationUncheckedUpdateWithoutCategoryInput
    >;
  };

  export type CategoryTranslationUpdateManyWithWhereWithoutCategoryInput = {
    where: CategoryTranslationScalarWhereInput;
    data: XOR<
      CategoryTranslationUpdateManyMutationInput,
      CategoryTranslationUncheckedUpdateManyWithoutCategoryInput
    >;
  };

  export type CategoryTranslationScalarWhereInput = {
    AND?:
      | CategoryTranslationScalarWhereInput
      | CategoryTranslationScalarWhereInput[];
    OR?: CategoryTranslationScalarWhereInput[];
    NOT?:
      | CategoryTranslationScalarWhereInput
      | CategoryTranslationScalarWhereInput[];
    id?: StringFilter<'CategoryTranslation'> | string;
    categoryId?: StringFilter<'CategoryTranslation'> | string;
    locale?: EnumLocaleFilter<'CategoryTranslation'> | $Enums.Locale;
    label?: StringFilter<'CategoryTranslation'> | string;
    slug?: StringFilter<'CategoryTranslation'> | string;
  };

  export type CategoryCreateWithoutTranslationsInput = {
    id?: string;
    code: string;
    type: $Enums.CategoryType;
    order?: number;
    isActive?: boolean;
    services?: ServiceCreateNestedManyWithoutCategoryInput;
    contacts?: ContactCreateNestedManyWithoutCategoryInput;
  };

  export type CategoryUncheckedCreateWithoutTranslationsInput = {
    id?: string;
    code: string;
    type: $Enums.CategoryType;
    order?: number;
    isActive?: boolean;
    services?: ServiceUncheckedCreateNestedManyWithoutCategoryInput;
    contacts?: ContactUncheckedCreateNestedManyWithoutCategoryInput;
  };

  export type CategoryCreateOrConnectWithoutTranslationsInput = {
    where: CategoryWhereUniqueInput;
    create: XOR<
      CategoryCreateWithoutTranslationsInput,
      CategoryUncheckedCreateWithoutTranslationsInput
    >;
  };

  export type CategoryUpsertWithoutTranslationsInput = {
    update: XOR<
      CategoryUpdateWithoutTranslationsInput,
      CategoryUncheckedUpdateWithoutTranslationsInput
    >;
    create: XOR<
      CategoryCreateWithoutTranslationsInput,
      CategoryUncheckedCreateWithoutTranslationsInput
    >;
    where?: CategoryWhereInput;
  };

  export type CategoryUpdateToOneWithWhereWithoutTranslationsInput = {
    where?: CategoryWhereInput;
    data: XOR<
      CategoryUpdateWithoutTranslationsInput,
      CategoryUncheckedUpdateWithoutTranslationsInput
    >;
  };

  export type CategoryUpdateWithoutTranslationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType;
    order?: IntFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    services?: ServiceUpdateManyWithoutCategoryNestedInput;
    contacts?: ContactUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoryUncheckedUpdateWithoutTranslationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType;
    order?: IntFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    services?: ServiceUncheckedUpdateManyWithoutCategoryNestedInput;
    contacts?: ContactUncheckedUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoryCreateWithoutServicesInput = {
    id?: string;
    code: string;
    type: $Enums.CategoryType;
    order?: number;
    isActive?: boolean;
    contacts?: ContactCreateNestedManyWithoutCategoryInput;
    translations?: CategoryTranslationCreateNestedManyWithoutCategoryInput;
  };

  export type CategoryUncheckedCreateWithoutServicesInput = {
    id?: string;
    code: string;
    type: $Enums.CategoryType;
    order?: number;
    isActive?: boolean;
    contacts?: ContactUncheckedCreateNestedManyWithoutCategoryInput;
    translations?: CategoryTranslationUncheckedCreateNestedManyWithoutCategoryInput;
  };

  export type CategoryCreateOrConnectWithoutServicesInput = {
    where: CategoryWhereUniqueInput;
    create: XOR<
      CategoryCreateWithoutServicesInput,
      CategoryUncheckedCreateWithoutServicesInput
    >;
  };

  export type ServiceTranslationCreateWithoutServiceInput = {
    id?: string;
    locale: $Enums.Locale;
    title: string;
    description: string;
    slug: string;
  };

  export type ServiceTranslationUncheckedCreateWithoutServiceInput = {
    id?: string;
    locale: $Enums.Locale;
    title: string;
    description: string;
    slug: string;
  };

  export type ServiceTranslationCreateOrConnectWithoutServiceInput = {
    where: ServiceTranslationWhereUniqueInput;
    create: XOR<
      ServiceTranslationCreateWithoutServiceInput,
      ServiceTranslationUncheckedCreateWithoutServiceInput
    >;
  };

  export type ServiceTranslationCreateManyServiceInputEnvelope = {
    data:
      | ServiceTranslationCreateManyServiceInput
      | ServiceTranslationCreateManyServiceInput[];
    skipDuplicates?: boolean;
  };

  export type CategoryUpsertWithoutServicesInput = {
    update: XOR<
      CategoryUpdateWithoutServicesInput,
      CategoryUncheckedUpdateWithoutServicesInput
    >;
    create: XOR<
      CategoryCreateWithoutServicesInput,
      CategoryUncheckedCreateWithoutServicesInput
    >;
    where?: CategoryWhereInput;
  };

  export type CategoryUpdateToOneWithWhereWithoutServicesInput = {
    where?: CategoryWhereInput;
    data: XOR<
      CategoryUpdateWithoutServicesInput,
      CategoryUncheckedUpdateWithoutServicesInput
    >;
  };

  export type CategoryUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType;
    order?: IntFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    contacts?: ContactUpdateManyWithoutCategoryNestedInput;
    translations?: CategoryTranslationUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoryUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType;
    order?: IntFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    contacts?: ContactUncheckedUpdateManyWithoutCategoryNestedInput;
    translations?: CategoryTranslationUncheckedUpdateManyWithoutCategoryNestedInput;
  };

  export type ServiceTranslationUpsertWithWhereUniqueWithoutServiceInput = {
    where: ServiceTranslationWhereUniqueInput;
    update: XOR<
      ServiceTranslationUpdateWithoutServiceInput,
      ServiceTranslationUncheckedUpdateWithoutServiceInput
    >;
    create: XOR<
      ServiceTranslationCreateWithoutServiceInput,
      ServiceTranslationUncheckedCreateWithoutServiceInput
    >;
  };

  export type ServiceTranslationUpdateWithWhereUniqueWithoutServiceInput = {
    where: ServiceTranslationWhereUniqueInput;
    data: XOR<
      ServiceTranslationUpdateWithoutServiceInput,
      ServiceTranslationUncheckedUpdateWithoutServiceInput
    >;
  };

  export type ServiceTranslationUpdateManyWithWhereWithoutServiceInput = {
    where: ServiceTranslationScalarWhereInput;
    data: XOR<
      ServiceTranslationUpdateManyMutationInput,
      ServiceTranslationUncheckedUpdateManyWithoutServiceInput
    >;
  };

  export type ServiceTranslationScalarWhereInput = {
    AND?:
      | ServiceTranslationScalarWhereInput
      | ServiceTranslationScalarWhereInput[];
    OR?: ServiceTranslationScalarWhereInput[];
    NOT?:
      | ServiceTranslationScalarWhereInput
      | ServiceTranslationScalarWhereInput[];
    id?: StringFilter<'ServiceTranslation'> | string;
    serviceId?: StringFilter<'ServiceTranslation'> | string;
    locale?: EnumLocaleFilter<'ServiceTranslation'> | $Enums.Locale;
    title?: StringFilter<'ServiceTranslation'> | string;
    description?: StringFilter<'ServiceTranslation'> | string;
    slug?: StringFilter<'ServiceTranslation'> | string;
  };

  export type ServiceCreateWithoutTranslationsInput = {
    id?: string;
    icon: string;
    externalUrl?: string | null;
    order?: number;
    isActive?: boolean;
    requiresAuth?: boolean;
    role?: $Enums.Role | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: CategoryCreateNestedOneWithoutServicesInput;
  };

  export type ServiceUncheckedCreateWithoutTranslationsInput = {
    id?: string;
    categoryId: string;
    icon: string;
    externalUrl?: string | null;
    order?: number;
    isActive?: boolean;
    requiresAuth?: boolean;
    role?: $Enums.Role | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ServiceCreateOrConnectWithoutTranslationsInput = {
    where: ServiceWhereUniqueInput;
    create: XOR<
      ServiceCreateWithoutTranslationsInput,
      ServiceUncheckedCreateWithoutTranslationsInput
    >;
  };

  export type ServiceUpsertWithoutTranslationsInput = {
    update: XOR<
      ServiceUpdateWithoutTranslationsInput,
      ServiceUncheckedUpdateWithoutTranslationsInput
    >;
    create: XOR<
      ServiceCreateWithoutTranslationsInput,
      ServiceUncheckedCreateWithoutTranslationsInput
    >;
    where?: ServiceWhereInput;
  };

  export type ServiceUpdateToOneWithWhereWithoutTranslationsInput = {
    where?: ServiceWhereInput;
    data: XOR<
      ServiceUpdateWithoutTranslationsInput,
      ServiceUncheckedUpdateWithoutTranslationsInput
    >;
  };

  export type ServiceUpdateWithoutTranslationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    order?: IntFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    requiresAuth?: BoolFieldUpdateOperationsInput | boolean;
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    category?: CategoryUpdateOneRequiredWithoutServicesNestedInput;
  };

  export type ServiceUncheckedUpdateWithoutTranslationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    order?: IntFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    requiresAuth?: BoolFieldUpdateOperationsInput | boolean;
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CategoryCreateWithoutContactsInput = {
    id?: string;
    code: string;
    type: $Enums.CategoryType;
    order?: number;
    isActive?: boolean;
    services?: ServiceCreateNestedManyWithoutCategoryInput;
    translations?: CategoryTranslationCreateNestedManyWithoutCategoryInput;
  };

  export type CategoryUncheckedCreateWithoutContactsInput = {
    id?: string;
    code: string;
    type: $Enums.CategoryType;
    order?: number;
    isActive?: boolean;
    services?: ServiceUncheckedCreateNestedManyWithoutCategoryInput;
    translations?: CategoryTranslationUncheckedCreateNestedManyWithoutCategoryInput;
  };

  export type CategoryCreateOrConnectWithoutContactsInput = {
    where: CategoryWhereUniqueInput;
    create: XOR<
      CategoryCreateWithoutContactsInput,
      CategoryUncheckedCreateWithoutContactsInput
    >;
  };

  export type ContactTranslationCreateWithoutContactInput = {
    id?: string;
    locale: $Enums.Locale;
    title: string;
    description: string;
    slug: string;
  };

  export type ContactTranslationUncheckedCreateWithoutContactInput = {
    id?: string;
    locale: $Enums.Locale;
    title: string;
    description: string;
    slug: string;
  };

  export type ContactTranslationCreateOrConnectWithoutContactInput = {
    where: ContactTranslationWhereUniqueInput;
    create: XOR<
      ContactTranslationCreateWithoutContactInput,
      ContactTranslationUncheckedCreateWithoutContactInput
    >;
  };

  export type ContactTranslationCreateManyContactInputEnvelope = {
    data:
      | ContactTranslationCreateManyContactInput
      | ContactTranslationCreateManyContactInput[];
    skipDuplicates?: boolean;
  };

  export type CategoryUpsertWithoutContactsInput = {
    update: XOR<
      CategoryUpdateWithoutContactsInput,
      CategoryUncheckedUpdateWithoutContactsInput
    >;
    create: XOR<
      CategoryCreateWithoutContactsInput,
      CategoryUncheckedCreateWithoutContactsInput
    >;
    where?: CategoryWhereInput;
  };

  export type CategoryUpdateToOneWithWhereWithoutContactsInput = {
    where?: CategoryWhereInput;
    data: XOR<
      CategoryUpdateWithoutContactsInput,
      CategoryUncheckedUpdateWithoutContactsInput
    >;
  };

  export type CategoryUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType;
    order?: IntFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    services?: ServiceUpdateManyWithoutCategoryNestedInput;
    translations?: CategoryTranslationUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoryUncheckedUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType;
    order?: IntFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    services?: ServiceUncheckedUpdateManyWithoutCategoryNestedInput;
    translations?: CategoryTranslationUncheckedUpdateManyWithoutCategoryNestedInput;
  };

  export type ContactTranslationUpsertWithWhereUniqueWithoutContactInput = {
    where: ContactTranslationWhereUniqueInput;
    update: XOR<
      ContactTranslationUpdateWithoutContactInput,
      ContactTranslationUncheckedUpdateWithoutContactInput
    >;
    create: XOR<
      ContactTranslationCreateWithoutContactInput,
      ContactTranslationUncheckedCreateWithoutContactInput
    >;
  };

  export type ContactTranslationUpdateWithWhereUniqueWithoutContactInput = {
    where: ContactTranslationWhereUniqueInput;
    data: XOR<
      ContactTranslationUpdateWithoutContactInput,
      ContactTranslationUncheckedUpdateWithoutContactInput
    >;
  };

  export type ContactTranslationUpdateManyWithWhereWithoutContactInput = {
    where: ContactTranslationScalarWhereInput;
    data: XOR<
      ContactTranslationUpdateManyMutationInput,
      ContactTranslationUncheckedUpdateManyWithoutContactInput
    >;
  };

  export type ContactTranslationScalarWhereInput = {
    AND?:
      | ContactTranslationScalarWhereInput
      | ContactTranslationScalarWhereInput[];
    OR?: ContactTranslationScalarWhereInput[];
    NOT?:
      | ContactTranslationScalarWhereInput
      | ContactTranslationScalarWhereInput[];
    id?: StringFilter<'ContactTranslation'> | string;
    contactId?: StringFilter<'ContactTranslation'> | string;
    locale?: EnumLocaleFilter<'ContactTranslation'> | $Enums.Locale;
    title?: StringFilter<'ContactTranslation'> | string;
    description?: StringFilter<'ContactTranslation'> | string;
    slug?: StringFilter<'ContactTranslation'> | string;
  };

  export type ContactCreateWithoutTranslationsInput = {
    id?: string;
    icon: string;
    externalUrl?: string | null;
    order?: number;
    isActive?: boolean;
    requiresAuth?: boolean;
    role?: $Enums.Role | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: CategoryCreateNestedOneWithoutContactsInput;
  };

  export type ContactUncheckedCreateWithoutTranslationsInput = {
    id?: string;
    categoryId: string;
    icon: string;
    externalUrl?: string | null;
    order?: number;
    isActive?: boolean;
    requiresAuth?: boolean;
    role?: $Enums.Role | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ContactCreateOrConnectWithoutTranslationsInput = {
    where: ContactWhereUniqueInput;
    create: XOR<
      ContactCreateWithoutTranslationsInput,
      ContactUncheckedCreateWithoutTranslationsInput
    >;
  };

  export type ContactUpsertWithoutTranslationsInput = {
    update: XOR<
      ContactUpdateWithoutTranslationsInput,
      ContactUncheckedUpdateWithoutTranslationsInput
    >;
    create: XOR<
      ContactCreateWithoutTranslationsInput,
      ContactUncheckedCreateWithoutTranslationsInput
    >;
    where?: ContactWhereInput;
  };

  export type ContactUpdateToOneWithWhereWithoutTranslationsInput = {
    where?: ContactWhereInput;
    data: XOR<
      ContactUpdateWithoutTranslationsInput,
      ContactUncheckedUpdateWithoutTranslationsInput
    >;
  };

  export type ContactUpdateWithoutTranslationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    order?: IntFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    requiresAuth?: BoolFieldUpdateOperationsInput | boolean;
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    category?: CategoryUpdateOneRequiredWithoutContactsNestedInput;
  };

  export type ContactUncheckedUpdateWithoutTranslationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    order?: IntFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    requiresAuth?: BoolFieldUpdateOperationsInput | boolean;
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RefreshTokenCreateManyUserInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
  };

  export type PasswordResetTokenCreateManyUserInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
  };

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PasswordResetTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PasswordResetTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PasswordResetTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ServiceCreateManyCategoryInput = {
    id?: string;
    icon: string;
    externalUrl?: string | null;
    order?: number;
    isActive?: boolean;
    requiresAuth?: boolean;
    role?: $Enums.Role | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ContactCreateManyCategoryInput = {
    id?: string;
    icon: string;
    externalUrl?: string | null;
    order?: number;
    isActive?: boolean;
    requiresAuth?: boolean;
    role?: $Enums.Role | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CategoryTranslationCreateManyCategoryInput = {
    id?: string;
    locale: $Enums.Locale;
    label: string;
    slug: string;
  };

  export type ServiceUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    order?: IntFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    requiresAuth?: BoolFieldUpdateOperationsInput | boolean;
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: ServiceTranslationUpdateManyWithoutServiceNestedInput;
  };

  export type ServiceUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    order?: IntFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    requiresAuth?: BoolFieldUpdateOperationsInput | boolean;
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: ServiceTranslationUncheckedUpdateManyWithoutServiceNestedInput;
  };

  export type ServiceUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    order?: IntFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    requiresAuth?: BoolFieldUpdateOperationsInput | boolean;
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ContactUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    order?: IntFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    requiresAuth?: BoolFieldUpdateOperationsInput | boolean;
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: ContactTranslationUpdateManyWithoutContactNestedInput;
  };

  export type ContactUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    order?: IntFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    requiresAuth?: BoolFieldUpdateOperationsInput | boolean;
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: ContactTranslationUncheckedUpdateManyWithoutContactNestedInput;
  };

  export type ContactUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    icon?: StringFieldUpdateOperationsInput | string;
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    order?: IntFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    requiresAuth?: BoolFieldUpdateOperationsInput | boolean;
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CategoryTranslationUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale;
    label?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
  };

  export type CategoryTranslationUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale;
    label?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
  };

  export type CategoryTranslationUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale;
    label?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
  };

  export type ServiceTranslationCreateManyServiceInput = {
    id?: string;
    locale: $Enums.Locale;
    title: string;
    description: string;
    slug: string;
  };

  export type ServiceTranslationUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
  };

  export type ServiceTranslationUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
  };

  export type ServiceTranslationUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
  };

  export type ContactTranslationCreateManyContactInput = {
    id?: string;
    locale: $Enums.Locale;
    title: string;
    description: string;
    slug: string;
  };

  export type ContactTranslationUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string;
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
  };

  export type ContactTranslationUncheckedUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string;
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
  };

  export type ContactTranslationUncheckedUpdateManyWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string;
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
