
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Week
 * 
 */
export type Week = {
  id: number
}

/**
 * Model Day
 * 
 */
export type Day = {
  id: number
  day: DayNames
  task: string[]
  weekId: number | null
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const DayNames: {
  monday: 'monday',
  tuesday: 'tuesday',
  wednesday: 'wednesday',
  thursday: 'thursday',
  friday: 'friday',
  saturday: 'saturday',
  sunday: 'sunday'
};

export type DayNames = (typeof DayNames)[keyof typeof DayNames]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Weeks
 * const weeks = await prisma.week.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Weeks
   * const weeks = await prisma.week.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.week`: Exposes CRUD operations for the **Week** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Weeks
    * const weeks = await prisma.week.findMany()
    * ```
    */
  get week(): Prisma.WeekDelegate<GlobalReject>;

  /**
   * `prisma.day`: Exposes CRUD operations for the **Day** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Days
    * const days = await prisma.day.findMany()
    * ```
    */
  get day(): Prisma.DayDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.12.0
   * Query Engine version: 22b822189f46ef0dc5c5b503368d1bee01213980
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Week: 'Week',
    Day: 'Day'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type WeekCountOutputType
   */


  export type WeekCountOutputType = {
    days: number
  }

  export type WeekCountOutputTypeSelect = {
    days?: boolean
  }

  export type WeekCountOutputTypeGetPayload<
    S extends boolean | null | undefined | WeekCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? WeekCountOutputType
    : S extends undefined
    ? never
    : S extends WeekCountOutputTypeArgs
    ?'include' extends U
    ? WeekCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof WeekCountOutputType ? WeekCountOutputType[P] : never
  } 
    : WeekCountOutputType
  : WeekCountOutputType




  // Custom InputTypes

  /**
   * WeekCountOutputType without action
   */
  export type WeekCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the WeekCountOutputType
     * 
    **/
    select?: WeekCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Week
   */


  export type AggregateWeek = {
    _count: WeekCountAggregateOutputType | null
    _avg: WeekAvgAggregateOutputType | null
    _sum: WeekSumAggregateOutputType | null
    _min: WeekMinAggregateOutputType | null
    _max: WeekMaxAggregateOutputType | null
  }

  export type WeekAvgAggregateOutputType = {
    id: number | null
  }

  export type WeekSumAggregateOutputType = {
    id: number | null
  }

  export type WeekMinAggregateOutputType = {
    id: number | null
  }

  export type WeekMaxAggregateOutputType = {
    id: number | null
  }

  export type WeekCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type WeekAvgAggregateInputType = {
    id?: true
  }

  export type WeekSumAggregateInputType = {
    id?: true
  }

  export type WeekMinAggregateInputType = {
    id?: true
  }

  export type WeekMaxAggregateInputType = {
    id?: true
  }

  export type WeekCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type WeekAggregateArgs = {
    /**
     * Filter which Week to aggregate.
     * 
    **/
    where?: WeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weeks to fetch.
     * 
    **/
    orderBy?: Enumerable<WeekOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: WeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weeks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weeks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Weeks
    **/
    _count?: true | WeekCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeekAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeekSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeekMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeekMaxAggregateInputType
  }

  export type GetWeekAggregateType<T extends WeekAggregateArgs> = {
        [P in keyof T & keyof AggregateWeek]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeek[P]>
      : GetScalarType<T[P], AggregateWeek[P]>
  }




  export type WeekGroupByArgs = {
    where?: WeekWhereInput
    orderBy?: Enumerable<WeekOrderByWithAggregationInput>
    by: Array<WeekScalarFieldEnum>
    having?: WeekScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeekCountAggregateInputType | true
    _avg?: WeekAvgAggregateInputType
    _sum?: WeekSumAggregateInputType
    _min?: WeekMinAggregateInputType
    _max?: WeekMaxAggregateInputType
  }


  export type WeekGroupByOutputType = {
    id: number
    _count: WeekCountAggregateOutputType | null
    _avg: WeekAvgAggregateOutputType | null
    _sum: WeekSumAggregateOutputType | null
    _min: WeekMinAggregateOutputType | null
    _max: WeekMaxAggregateOutputType | null
  }

  type GetWeekGroupByPayload<T extends WeekGroupByArgs> = PrismaPromise<
    Array<
      PickArray<WeekGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeekGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeekGroupByOutputType[P]>
            : GetScalarType<T[P], WeekGroupByOutputType[P]>
        }
      >
    >


  export type WeekSelect = {
    id?: boolean
    days?: boolean | DayFindManyArgs
    _count?: boolean | WeekCountOutputTypeArgs
  }

  export type WeekInclude = {
    days?: boolean | DayFindManyArgs
    _count?: boolean | WeekCountOutputTypeArgs
  }

  export type WeekGetPayload<
    S extends boolean | null | undefined | WeekArgs,
    U = keyof S
      > = S extends true
        ? Week
    : S extends undefined
    ? never
    : S extends WeekArgs | WeekFindManyArgs
    ?'include' extends U
    ? Week  & {
    [P in TrueKeys<S['include']>]:
        P extends 'days' ? Array < DayGetPayload<S['include'][P]>>  :
        P extends '_count' ? WeekCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'days' ? Array < DayGetPayload<S['select'][P]>>  :
        P extends '_count' ? WeekCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Week ? Week[P] : never
  } 
    : Week
  : Week


  type WeekCountArgs = Merge<
    Omit<WeekFindManyArgs, 'select' | 'include'> & {
      select?: WeekCountAggregateInputType | true
    }
  >

  export interface WeekDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Week that matches the filter.
     * @param {WeekFindUniqueArgs} args - Arguments to find a Week
     * @example
     * // Get one Week
     * const week = await prisma.week.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WeekFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WeekFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Week'> extends True ? CheckSelect<T, Prisma__WeekClient<Week>, Prisma__WeekClient<WeekGetPayload<T>>> : CheckSelect<T, Prisma__WeekClient<Week | null >, Prisma__WeekClient<WeekGetPayload<T> | null >>

    /**
     * Find the first Week that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekFindFirstArgs} args - Arguments to find a Week
     * @example
     * // Get one Week
     * const week = await prisma.week.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WeekFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WeekFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Week'> extends True ? CheckSelect<T, Prisma__WeekClient<Week>, Prisma__WeekClient<WeekGetPayload<T>>> : CheckSelect<T, Prisma__WeekClient<Week | null >, Prisma__WeekClient<WeekGetPayload<T> | null >>

    /**
     * Find zero or more Weeks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Weeks
     * const weeks = await prisma.week.findMany()
     * 
     * // Get first 10 Weeks
     * const weeks = await prisma.week.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weekWithIdOnly = await prisma.week.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WeekFindManyArgs>(
      args?: SelectSubset<T, WeekFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Week>>, PrismaPromise<Array<WeekGetPayload<T>>>>

    /**
     * Create a Week.
     * @param {WeekCreateArgs} args - Arguments to create a Week.
     * @example
     * // Create one Week
     * const Week = await prisma.week.create({
     *   data: {
     *     // ... data to create a Week
     *   }
     * })
     * 
    **/
    create<T extends WeekCreateArgs>(
      args: SelectSubset<T, WeekCreateArgs>
    ): CheckSelect<T, Prisma__WeekClient<Week>, Prisma__WeekClient<WeekGetPayload<T>>>

    /**
     * Create many Weeks.
     *     @param {WeekCreateManyArgs} args - Arguments to create many Weeks.
     *     @example
     *     // Create many Weeks
     *     const week = await prisma.week.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WeekCreateManyArgs>(
      args?: SelectSubset<T, WeekCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Week.
     * @param {WeekDeleteArgs} args - Arguments to delete one Week.
     * @example
     * // Delete one Week
     * const Week = await prisma.week.delete({
     *   where: {
     *     // ... filter to delete one Week
     *   }
     * })
     * 
    **/
    delete<T extends WeekDeleteArgs>(
      args: SelectSubset<T, WeekDeleteArgs>
    ): CheckSelect<T, Prisma__WeekClient<Week>, Prisma__WeekClient<WeekGetPayload<T>>>

    /**
     * Update one Week.
     * @param {WeekUpdateArgs} args - Arguments to update one Week.
     * @example
     * // Update one Week
     * const week = await prisma.week.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WeekUpdateArgs>(
      args: SelectSubset<T, WeekUpdateArgs>
    ): CheckSelect<T, Prisma__WeekClient<Week>, Prisma__WeekClient<WeekGetPayload<T>>>

    /**
     * Delete zero or more Weeks.
     * @param {WeekDeleteManyArgs} args - Arguments to filter Weeks to delete.
     * @example
     * // Delete a few Weeks
     * const { count } = await prisma.week.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WeekDeleteManyArgs>(
      args?: SelectSubset<T, WeekDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weeks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Weeks
     * const week = await prisma.week.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WeekUpdateManyArgs>(
      args: SelectSubset<T, WeekUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Week.
     * @param {WeekUpsertArgs} args - Arguments to update or create a Week.
     * @example
     * // Update or create a Week
     * const week = await prisma.week.upsert({
     *   create: {
     *     // ... data to create a Week
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Week we want to update
     *   }
     * })
    **/
    upsert<T extends WeekUpsertArgs>(
      args: SelectSubset<T, WeekUpsertArgs>
    ): CheckSelect<T, Prisma__WeekClient<Week>, Prisma__WeekClient<WeekGetPayload<T>>>

    /**
     * Count the number of Weeks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekCountArgs} args - Arguments to filter Weeks to count.
     * @example
     * // Count the number of Weeks
     * const count = await prisma.week.count({
     *   where: {
     *     // ... the filter for the Weeks we want to count
     *   }
     * })
    **/
    count<T extends WeekCountArgs>(
      args?: Subset<T, WeekCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeekCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Week.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeekAggregateArgs>(args: Subset<T, WeekAggregateArgs>): PrismaPromise<GetWeekAggregateType<T>>

    /**
     * Group by Week.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekGroupByArgs} args - Group by arguments.
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
      T extends WeekGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeekGroupByArgs['orderBy'] }
        : { orderBy?: WeekGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WeekGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeekGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Week.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WeekClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    days<T extends DayFindManyArgs = {}>(args?: Subset<T, DayFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Day>>, PrismaPromise<Array<DayGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Week findUnique
   */
  export type WeekFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Week
     * 
    **/
    select?: WeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WeekInclude | null
    /**
     * Throw an Error if a Week can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Week to fetch.
     * 
    **/
    where: WeekWhereUniqueInput
  }


  /**
   * Week findFirst
   */
  export type WeekFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Week
     * 
    **/
    select?: WeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WeekInclude | null
    /**
     * Throw an Error if a Week can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Week to fetch.
     * 
    **/
    where?: WeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weeks to fetch.
     * 
    **/
    orderBy?: Enumerable<WeekOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weeks.
     * 
    **/
    cursor?: WeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weeks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weeks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weeks.
     * 
    **/
    distinct?: Enumerable<WeekScalarFieldEnum>
  }


  /**
   * Week findMany
   */
  export type WeekFindManyArgs = {
    /**
     * Select specific fields to fetch from the Week
     * 
    **/
    select?: WeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WeekInclude | null
    /**
     * Filter, which Weeks to fetch.
     * 
    **/
    where?: WeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weeks to fetch.
     * 
    **/
    orderBy?: Enumerable<WeekOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Weeks.
     * 
    **/
    cursor?: WeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weeks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weeks.
     * 
    **/
    skip?: number
    distinct?: Enumerable<WeekScalarFieldEnum>
  }


  /**
   * Week create
   */
  export type WeekCreateArgs = {
    /**
     * Select specific fields to fetch from the Week
     * 
    **/
    select?: WeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WeekInclude | null
    /**
     * The data needed to create a Week.
     * 
    **/
    data: XOR<WeekCreateInput, WeekUncheckedCreateInput>
  }


  /**
   * Week createMany
   */
  export type WeekCreateManyArgs = {
    /**
     * The data used to create many Weeks.
     * 
    **/
    data: Enumerable<WeekCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Week update
   */
  export type WeekUpdateArgs = {
    /**
     * Select specific fields to fetch from the Week
     * 
    **/
    select?: WeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WeekInclude | null
    /**
     * The data needed to update a Week.
     * 
    **/
    data: XOR<WeekUpdateInput, WeekUncheckedUpdateInput>
    /**
     * Choose, which Week to update.
     * 
    **/
    where: WeekWhereUniqueInput
  }


  /**
   * Week updateMany
   */
  export type WeekUpdateManyArgs = {
    /**
     * The data used to update Weeks.
     * 
    **/
    data: XOR<WeekUpdateManyMutationInput, WeekUncheckedUpdateManyInput>
    /**
     * Filter which Weeks to update
     * 
    **/
    where?: WeekWhereInput
  }


  /**
   * Week upsert
   */
  export type WeekUpsertArgs = {
    /**
     * Select specific fields to fetch from the Week
     * 
    **/
    select?: WeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WeekInclude | null
    /**
     * The filter to search for the Week to update in case it exists.
     * 
    **/
    where: WeekWhereUniqueInput
    /**
     * In case the Week found by the `where` argument doesn't exist, create a new Week with this data.
     * 
    **/
    create: XOR<WeekCreateInput, WeekUncheckedCreateInput>
    /**
     * In case the Week was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<WeekUpdateInput, WeekUncheckedUpdateInput>
  }


  /**
   * Week delete
   */
  export type WeekDeleteArgs = {
    /**
     * Select specific fields to fetch from the Week
     * 
    **/
    select?: WeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WeekInclude | null
    /**
     * Filter which Week to delete.
     * 
    **/
    where: WeekWhereUniqueInput
  }


  /**
   * Week deleteMany
   */
  export type WeekDeleteManyArgs = {
    /**
     * Filter which Weeks to delete
     * 
    **/
    where?: WeekWhereInput
  }


  /**
   * Week without action
   */
  export type WeekArgs = {
    /**
     * Select specific fields to fetch from the Week
     * 
    **/
    select?: WeekSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WeekInclude | null
  }



  /**
   * Model Day
   */


  export type AggregateDay = {
    _count: DayCountAggregateOutputType | null
    _avg: DayAvgAggregateOutputType | null
    _sum: DaySumAggregateOutputType | null
    _min: DayMinAggregateOutputType | null
    _max: DayMaxAggregateOutputType | null
  }

  export type DayAvgAggregateOutputType = {
    id: number | null
    weekId: number | null
  }

  export type DaySumAggregateOutputType = {
    id: number | null
    weekId: number | null
  }

  export type DayMinAggregateOutputType = {
    id: number | null
    day: DayNames | null
    weekId: number | null
  }

  export type DayMaxAggregateOutputType = {
    id: number | null
    day: DayNames | null
    weekId: number | null
  }

  export type DayCountAggregateOutputType = {
    id: number
    day: number
    task: number
    weekId: number
    _all: number
  }


  export type DayAvgAggregateInputType = {
    id?: true
    weekId?: true
  }

  export type DaySumAggregateInputType = {
    id?: true
    weekId?: true
  }

  export type DayMinAggregateInputType = {
    id?: true
    day?: true
    weekId?: true
  }

  export type DayMaxAggregateInputType = {
    id?: true
    day?: true
    weekId?: true
  }

  export type DayCountAggregateInputType = {
    id?: true
    day?: true
    task?: true
    weekId?: true
    _all?: true
  }

  export type DayAggregateArgs = {
    /**
     * Filter which Day to aggregate.
     * 
    **/
    where?: DayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     * 
    **/
    orderBy?: Enumerable<DayOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Days
    **/
    _count?: true | DayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DayMaxAggregateInputType
  }

  export type GetDayAggregateType<T extends DayAggregateArgs> = {
        [P in keyof T & keyof AggregateDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDay[P]>
      : GetScalarType<T[P], AggregateDay[P]>
  }




  export type DayGroupByArgs = {
    where?: DayWhereInput
    orderBy?: Enumerable<DayOrderByWithAggregationInput>
    by: Array<DayScalarFieldEnum>
    having?: DayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DayCountAggregateInputType | true
    _avg?: DayAvgAggregateInputType
    _sum?: DaySumAggregateInputType
    _min?: DayMinAggregateInputType
    _max?: DayMaxAggregateInputType
  }


  export type DayGroupByOutputType = {
    id: number
    day: DayNames
    task: string[]
    weekId: number | null
    _count: DayCountAggregateOutputType | null
    _avg: DayAvgAggregateOutputType | null
    _sum: DaySumAggregateOutputType | null
    _min: DayMinAggregateOutputType | null
    _max: DayMaxAggregateOutputType | null
  }

  type GetDayGroupByPayload<T extends DayGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DayGroupByOutputType[P]>
            : GetScalarType<T[P], DayGroupByOutputType[P]>
        }
      >
    >


  export type DaySelect = {
    id?: boolean
    day?: boolean
    task?: boolean
    Week?: boolean | WeekArgs
    weekId?: boolean
  }

  export type DayInclude = {
    Week?: boolean | WeekArgs
  }

  export type DayGetPayload<
    S extends boolean | null | undefined | DayArgs,
    U = keyof S
      > = S extends true
        ? Day
    : S extends undefined
    ? never
    : S extends DayArgs | DayFindManyArgs
    ?'include' extends U
    ? Day  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Week' ? WeekGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Week' ? WeekGetPayload<S['select'][P]> | null :  P extends keyof Day ? Day[P] : never
  } 
    : Day
  : Day


  type DayCountArgs = Merge<
    Omit<DayFindManyArgs, 'select' | 'include'> & {
      select?: DayCountAggregateInputType | true
    }
  >

  export interface DayDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Day that matches the filter.
     * @param {DayFindUniqueArgs} args - Arguments to find a Day
     * @example
     * // Get one Day
     * const day = await prisma.day.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DayFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DayFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Day'> extends True ? CheckSelect<T, Prisma__DayClient<Day>, Prisma__DayClient<DayGetPayload<T>>> : CheckSelect<T, Prisma__DayClient<Day | null >, Prisma__DayClient<DayGetPayload<T> | null >>

    /**
     * Find the first Day that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayFindFirstArgs} args - Arguments to find a Day
     * @example
     * // Get one Day
     * const day = await prisma.day.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DayFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DayFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Day'> extends True ? CheckSelect<T, Prisma__DayClient<Day>, Prisma__DayClient<DayGetPayload<T>>> : CheckSelect<T, Prisma__DayClient<Day | null >, Prisma__DayClient<DayGetPayload<T> | null >>

    /**
     * Find zero or more Days that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Days
     * const days = await prisma.day.findMany()
     * 
     * // Get first 10 Days
     * const days = await prisma.day.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dayWithIdOnly = await prisma.day.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DayFindManyArgs>(
      args?: SelectSubset<T, DayFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Day>>, PrismaPromise<Array<DayGetPayload<T>>>>

    /**
     * Create a Day.
     * @param {DayCreateArgs} args - Arguments to create a Day.
     * @example
     * // Create one Day
     * const Day = await prisma.day.create({
     *   data: {
     *     // ... data to create a Day
     *   }
     * })
     * 
    **/
    create<T extends DayCreateArgs>(
      args: SelectSubset<T, DayCreateArgs>
    ): CheckSelect<T, Prisma__DayClient<Day>, Prisma__DayClient<DayGetPayload<T>>>

    /**
     * Create many Days.
     *     @param {DayCreateManyArgs} args - Arguments to create many Days.
     *     @example
     *     // Create many Days
     *     const day = await prisma.day.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DayCreateManyArgs>(
      args?: SelectSubset<T, DayCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Day.
     * @param {DayDeleteArgs} args - Arguments to delete one Day.
     * @example
     * // Delete one Day
     * const Day = await prisma.day.delete({
     *   where: {
     *     // ... filter to delete one Day
     *   }
     * })
     * 
    **/
    delete<T extends DayDeleteArgs>(
      args: SelectSubset<T, DayDeleteArgs>
    ): CheckSelect<T, Prisma__DayClient<Day>, Prisma__DayClient<DayGetPayload<T>>>

    /**
     * Update one Day.
     * @param {DayUpdateArgs} args - Arguments to update one Day.
     * @example
     * // Update one Day
     * const day = await prisma.day.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DayUpdateArgs>(
      args: SelectSubset<T, DayUpdateArgs>
    ): CheckSelect<T, Prisma__DayClient<Day>, Prisma__DayClient<DayGetPayload<T>>>

    /**
     * Delete zero or more Days.
     * @param {DayDeleteManyArgs} args - Arguments to filter Days to delete.
     * @example
     * // Delete a few Days
     * const { count } = await prisma.day.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DayDeleteManyArgs>(
      args?: SelectSubset<T, DayDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Days
     * const day = await prisma.day.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DayUpdateManyArgs>(
      args: SelectSubset<T, DayUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Day.
     * @param {DayUpsertArgs} args - Arguments to update or create a Day.
     * @example
     * // Update or create a Day
     * const day = await prisma.day.upsert({
     *   create: {
     *     // ... data to create a Day
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Day we want to update
     *   }
     * })
    **/
    upsert<T extends DayUpsertArgs>(
      args: SelectSubset<T, DayUpsertArgs>
    ): CheckSelect<T, Prisma__DayClient<Day>, Prisma__DayClient<DayGetPayload<T>>>

    /**
     * Count the number of Days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayCountArgs} args - Arguments to filter Days to count.
     * @example
     * // Count the number of Days
     * const count = await prisma.day.count({
     *   where: {
     *     // ... the filter for the Days we want to count
     *   }
     * })
    **/
    count<T extends DayCountArgs>(
      args?: Subset<T, DayCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Day.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DayAggregateArgs>(args: Subset<T, DayAggregateArgs>): PrismaPromise<GetDayAggregateType<T>>

    /**
     * Group by Day.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayGroupByArgs} args - Group by arguments.
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
      T extends DayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DayGroupByArgs['orderBy'] }
        : { orderBy?: DayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDayGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Day.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DayClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Week<T extends WeekArgs = {}>(args?: Subset<T, WeekArgs>): CheckSelect<T, Prisma__WeekClient<Week | null >, Prisma__WeekClient<WeekGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Day findUnique
   */
  export type DayFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Day
     * 
    **/
    select?: DaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DayInclude | null
    /**
     * Throw an Error if a Day can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Day to fetch.
     * 
    **/
    where: DayWhereUniqueInput
  }


  /**
   * Day findFirst
   */
  export type DayFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Day
     * 
    **/
    select?: DaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DayInclude | null
    /**
     * Throw an Error if a Day can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Day to fetch.
     * 
    **/
    where?: DayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     * 
    **/
    orderBy?: Enumerable<DayOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Days.
     * 
    **/
    cursor?: DayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Days.
     * 
    **/
    distinct?: Enumerable<DayScalarFieldEnum>
  }


  /**
   * Day findMany
   */
  export type DayFindManyArgs = {
    /**
     * Select specific fields to fetch from the Day
     * 
    **/
    select?: DaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DayInclude | null
    /**
     * Filter, which Days to fetch.
     * 
    **/
    where?: DayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     * 
    **/
    orderBy?: Enumerable<DayOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Days.
     * 
    **/
    cursor?: DayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DayScalarFieldEnum>
  }


  /**
   * Day create
   */
  export type DayCreateArgs = {
    /**
     * Select specific fields to fetch from the Day
     * 
    **/
    select?: DaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DayInclude | null
    /**
     * The data needed to create a Day.
     * 
    **/
    data: XOR<DayCreateInput, DayUncheckedCreateInput>
  }


  /**
   * Day createMany
   */
  export type DayCreateManyArgs = {
    /**
     * The data used to create many Days.
     * 
    **/
    data: Enumerable<DayCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Day update
   */
  export type DayUpdateArgs = {
    /**
     * Select specific fields to fetch from the Day
     * 
    **/
    select?: DaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DayInclude | null
    /**
     * The data needed to update a Day.
     * 
    **/
    data: XOR<DayUpdateInput, DayUncheckedUpdateInput>
    /**
     * Choose, which Day to update.
     * 
    **/
    where: DayWhereUniqueInput
  }


  /**
   * Day updateMany
   */
  export type DayUpdateManyArgs = {
    /**
     * The data used to update Days.
     * 
    **/
    data: XOR<DayUpdateManyMutationInput, DayUncheckedUpdateManyInput>
    /**
     * Filter which Days to update
     * 
    **/
    where?: DayWhereInput
  }


  /**
   * Day upsert
   */
  export type DayUpsertArgs = {
    /**
     * Select specific fields to fetch from the Day
     * 
    **/
    select?: DaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DayInclude | null
    /**
     * The filter to search for the Day to update in case it exists.
     * 
    **/
    where: DayWhereUniqueInput
    /**
     * In case the Day found by the `where` argument doesn't exist, create a new Day with this data.
     * 
    **/
    create: XOR<DayCreateInput, DayUncheckedCreateInput>
    /**
     * In case the Day was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DayUpdateInput, DayUncheckedUpdateInput>
  }


  /**
   * Day delete
   */
  export type DayDeleteArgs = {
    /**
     * Select specific fields to fetch from the Day
     * 
    **/
    select?: DaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DayInclude | null
    /**
     * Filter which Day to delete.
     * 
    **/
    where: DayWhereUniqueInput
  }


  /**
   * Day deleteMany
   */
  export type DayDeleteManyArgs = {
    /**
     * Filter which Days to delete
     * 
    **/
    where?: DayWhereInput
  }


  /**
   * Day without action
   */
  export type DayArgs = {
    /**
     * Select specific fields to fetch from the Day
     * 
    **/
    select?: DaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DayInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const WeekScalarFieldEnum: {
    id: 'id'
  };

  export type WeekScalarFieldEnum = (typeof WeekScalarFieldEnum)[keyof typeof WeekScalarFieldEnum]


  export const DayScalarFieldEnum: {
    id: 'id',
    day: 'day',
    task: 'task',
    weekId: 'weekId'
  };

  export type DayScalarFieldEnum = (typeof DayScalarFieldEnum)[keyof typeof DayScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type WeekWhereInput = {
    AND?: Enumerable<WeekWhereInput>
    OR?: Enumerable<WeekWhereInput>
    NOT?: Enumerable<WeekWhereInput>
    id?: IntFilter | number
    days?: DayListRelationFilter
  }

  export type WeekOrderByWithRelationInput = {
    id?: SortOrder
    days?: DayOrderByRelationAggregateInput
  }

  export type WeekWhereUniqueInput = {
    id?: number
  }

  export type WeekOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: WeekCountOrderByAggregateInput
    _avg?: WeekAvgOrderByAggregateInput
    _max?: WeekMaxOrderByAggregateInput
    _min?: WeekMinOrderByAggregateInput
    _sum?: WeekSumOrderByAggregateInput
  }

  export type WeekScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WeekScalarWhereWithAggregatesInput>
    OR?: Enumerable<WeekScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WeekScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
  }

  export type DayWhereInput = {
    AND?: Enumerable<DayWhereInput>
    OR?: Enumerable<DayWhereInput>
    NOT?: Enumerable<DayWhereInput>
    id?: IntFilter | number
    day?: EnumDayNamesFilter | DayNames
    task?: StringNullableListFilter
    Week?: XOR<WeekRelationFilter, WeekWhereInput> | null
    weekId?: IntNullableFilter | number | null
  }

  export type DayOrderByWithRelationInput = {
    id?: SortOrder
    day?: SortOrder
    task?: SortOrder
    Week?: WeekOrderByWithRelationInput
    weekId?: SortOrder
  }

  export type DayWhereUniqueInput = {
    id?: number
  }

  export type DayOrderByWithAggregationInput = {
    id?: SortOrder
    day?: SortOrder
    task?: SortOrder
    weekId?: SortOrder
    _count?: DayCountOrderByAggregateInput
    _avg?: DayAvgOrderByAggregateInput
    _max?: DayMaxOrderByAggregateInput
    _min?: DayMinOrderByAggregateInput
    _sum?: DaySumOrderByAggregateInput
  }

  export type DayScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DayScalarWhereWithAggregatesInput>
    OR?: Enumerable<DayScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DayScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    day?: EnumDayNamesWithAggregatesFilter | DayNames
    task?: StringNullableListFilter
    weekId?: IntNullableWithAggregatesFilter | number | null
  }

  export type WeekCreateInput = {
    days?: DayCreateNestedManyWithoutWeekInput
  }

  export type WeekUncheckedCreateInput = {
    id?: number
    days?: DayUncheckedCreateNestedManyWithoutWeekInput
  }

  export type WeekUpdateInput = {
    days?: DayUpdateManyWithoutWeekInput
  }

  export type WeekUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    days?: DayUncheckedUpdateManyWithoutWeekInput
  }

  export type WeekCreateManyInput = {
    id?: number
  }

  export type WeekUpdateManyMutationInput = {

  }

  export type WeekUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type DayCreateInput = {
    day: DayNames
    task?: DayCreatetaskInput | Enumerable<string>
    Week?: WeekCreateNestedOneWithoutDaysInput
  }

  export type DayUncheckedCreateInput = {
    id?: number
    day: DayNames
    task?: DayCreatetaskInput | Enumerable<string>
    weekId?: number | null
  }

  export type DayUpdateInput = {
    day?: EnumDayNamesFieldUpdateOperationsInput | DayNames
    task?: DayUpdatetaskInput | Enumerable<string>
    Week?: WeekUpdateOneWithoutDaysInput
  }

  export type DayUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: EnumDayNamesFieldUpdateOperationsInput | DayNames
    task?: DayUpdatetaskInput | Enumerable<string>
    weekId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DayCreateManyInput = {
    id?: number
    day: DayNames
    task?: DayCreatetaskInput | Enumerable<string>
    weekId?: number | null
  }

  export type DayUpdateManyMutationInput = {
    day?: EnumDayNamesFieldUpdateOperationsInput | DayNames
    task?: DayUpdatetaskInput | Enumerable<string>
  }

  export type DayUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: EnumDayNamesFieldUpdateOperationsInput | DayNames
    task?: DayUpdatetaskInput | Enumerable<string>
    weekId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DayListRelationFilter = {
    every?: DayWhereInput
    some?: DayWhereInput
    none?: DayWhereInput
  }

  export type DayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeekCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WeekAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WeekMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WeekMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WeekSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type EnumDayNamesFilter = {
    equals?: DayNames
    in?: Enumerable<DayNames>
    notIn?: Enumerable<DayNames>
    not?: NestedEnumDayNamesFilter | DayNames
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type WeekRelationFilter = {
    is?: WeekWhereInput | null
    isNot?: WeekWhereInput | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type DayCountOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    task?: SortOrder
    weekId?: SortOrder
  }

  export type DayAvgOrderByAggregateInput = {
    id?: SortOrder
    weekId?: SortOrder
  }

  export type DayMaxOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    weekId?: SortOrder
  }

  export type DayMinOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    weekId?: SortOrder
  }

  export type DaySumOrderByAggregateInput = {
    id?: SortOrder
    weekId?: SortOrder
  }

  export type EnumDayNamesWithAggregatesFilter = {
    equals?: DayNames
    in?: Enumerable<DayNames>
    notIn?: Enumerable<DayNames>
    not?: NestedEnumDayNamesWithAggregatesFilter | DayNames
    _count?: NestedIntFilter
    _min?: NestedEnumDayNamesFilter
    _max?: NestedEnumDayNamesFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type DayCreateNestedManyWithoutWeekInput = {
    create?: XOR<Enumerable<DayCreateWithoutWeekInput>, Enumerable<DayUncheckedCreateWithoutWeekInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutWeekInput>
    createMany?: DayCreateManyWeekInputEnvelope
    connect?: Enumerable<DayWhereUniqueInput>
  }

  export type DayUncheckedCreateNestedManyWithoutWeekInput = {
    create?: XOR<Enumerable<DayCreateWithoutWeekInput>, Enumerable<DayUncheckedCreateWithoutWeekInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutWeekInput>
    createMany?: DayCreateManyWeekInputEnvelope
    connect?: Enumerable<DayWhereUniqueInput>
  }

  export type DayUpdateManyWithoutWeekInput = {
    create?: XOR<Enumerable<DayCreateWithoutWeekInput>, Enumerable<DayUncheckedCreateWithoutWeekInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutWeekInput>
    upsert?: Enumerable<DayUpsertWithWhereUniqueWithoutWeekInput>
    createMany?: DayCreateManyWeekInputEnvelope
    set?: Enumerable<DayWhereUniqueInput>
    disconnect?: Enumerable<DayWhereUniqueInput>
    delete?: Enumerable<DayWhereUniqueInput>
    connect?: Enumerable<DayWhereUniqueInput>
    update?: Enumerable<DayUpdateWithWhereUniqueWithoutWeekInput>
    updateMany?: Enumerable<DayUpdateManyWithWhereWithoutWeekInput>
    deleteMany?: Enumerable<DayScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DayUncheckedUpdateManyWithoutWeekInput = {
    create?: XOR<Enumerable<DayCreateWithoutWeekInput>, Enumerable<DayUncheckedCreateWithoutWeekInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutWeekInput>
    upsert?: Enumerable<DayUpsertWithWhereUniqueWithoutWeekInput>
    createMany?: DayCreateManyWeekInputEnvelope
    set?: Enumerable<DayWhereUniqueInput>
    disconnect?: Enumerable<DayWhereUniqueInput>
    delete?: Enumerable<DayWhereUniqueInput>
    connect?: Enumerable<DayWhereUniqueInput>
    update?: Enumerable<DayUpdateWithWhereUniqueWithoutWeekInput>
    updateMany?: Enumerable<DayUpdateManyWithWhereWithoutWeekInput>
    deleteMany?: Enumerable<DayScalarWhereInput>
  }

  export type DayCreatetaskInput = {
    set: Enumerable<string>
  }

  export type WeekCreateNestedOneWithoutDaysInput = {
    create?: XOR<WeekCreateWithoutDaysInput, WeekUncheckedCreateWithoutDaysInput>
    connectOrCreate?: WeekCreateOrConnectWithoutDaysInput
    connect?: WeekWhereUniqueInput
  }

  export type EnumDayNamesFieldUpdateOperationsInput = {
    set?: DayNames
  }

  export type DayUpdatetaskInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type WeekUpdateOneWithoutDaysInput = {
    create?: XOR<WeekCreateWithoutDaysInput, WeekUncheckedCreateWithoutDaysInput>
    connectOrCreate?: WeekCreateOrConnectWithoutDaysInput
    upsert?: WeekUpsertWithoutDaysInput
    disconnect?: boolean
    delete?: boolean
    connect?: WeekWhereUniqueInput
    update?: XOR<WeekUpdateWithoutDaysInput, WeekUncheckedUpdateWithoutDaysInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedEnumDayNamesFilter = {
    equals?: DayNames
    in?: Enumerable<DayNames>
    notIn?: Enumerable<DayNames>
    not?: NestedEnumDayNamesFilter | DayNames
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedEnumDayNamesWithAggregatesFilter = {
    equals?: DayNames
    in?: Enumerable<DayNames>
    notIn?: Enumerable<DayNames>
    not?: NestedEnumDayNamesWithAggregatesFilter | DayNames
    _count?: NestedIntFilter
    _min?: NestedEnumDayNamesFilter
    _max?: NestedEnumDayNamesFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type DayCreateWithoutWeekInput = {
    day: DayNames
    task?: DayCreatetaskInput | Enumerable<string>
  }

  export type DayUncheckedCreateWithoutWeekInput = {
    id?: number
    day: DayNames
    task?: DayCreatetaskInput | Enumerable<string>
  }

  export type DayCreateOrConnectWithoutWeekInput = {
    where: DayWhereUniqueInput
    create: XOR<DayCreateWithoutWeekInput, DayUncheckedCreateWithoutWeekInput>
  }

  export type DayCreateManyWeekInputEnvelope = {
    data: Enumerable<DayCreateManyWeekInput>
    skipDuplicates?: boolean
  }

  export type DayUpsertWithWhereUniqueWithoutWeekInput = {
    where: DayWhereUniqueInput
    update: XOR<DayUpdateWithoutWeekInput, DayUncheckedUpdateWithoutWeekInput>
    create: XOR<DayCreateWithoutWeekInput, DayUncheckedCreateWithoutWeekInput>
  }

  export type DayUpdateWithWhereUniqueWithoutWeekInput = {
    where: DayWhereUniqueInput
    data: XOR<DayUpdateWithoutWeekInput, DayUncheckedUpdateWithoutWeekInput>
  }

  export type DayUpdateManyWithWhereWithoutWeekInput = {
    where: DayScalarWhereInput
    data: XOR<DayUpdateManyMutationInput, DayUncheckedUpdateManyWithoutDaysInput>
  }

  export type DayScalarWhereInput = {
    AND?: Enumerable<DayScalarWhereInput>
    OR?: Enumerable<DayScalarWhereInput>
    NOT?: Enumerable<DayScalarWhereInput>
    id?: IntFilter | number
    day?: EnumDayNamesFilter | DayNames
    task?: StringNullableListFilter
    weekId?: IntNullableFilter | number | null
  }

  export type WeekCreateWithoutDaysInput = {

  }

  export type WeekUncheckedCreateWithoutDaysInput = {
    id?: number
  }

  export type WeekCreateOrConnectWithoutDaysInput = {
    where: WeekWhereUniqueInput
    create: XOR<WeekCreateWithoutDaysInput, WeekUncheckedCreateWithoutDaysInput>
  }

  export type WeekUpsertWithoutDaysInput = {
    update: XOR<WeekUpdateWithoutDaysInput, WeekUncheckedUpdateWithoutDaysInput>
    create: XOR<WeekCreateWithoutDaysInput, WeekUncheckedCreateWithoutDaysInput>
  }

  export type WeekUpdateWithoutDaysInput = {

  }

  export type WeekUncheckedUpdateWithoutDaysInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type DayCreateManyWeekInput = {
    id?: number
    day: DayNames
    task?: DayCreatetaskInput | Enumerable<string>
  }

  export type DayUpdateWithoutWeekInput = {
    day?: EnumDayNamesFieldUpdateOperationsInput | DayNames
    task?: DayUpdatetaskInput | Enumerable<string>
  }

  export type DayUncheckedUpdateWithoutWeekInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: EnumDayNamesFieldUpdateOperationsInput | DayNames
    task?: DayUpdatetaskInput | Enumerable<string>
  }

  export type DayUncheckedUpdateManyWithoutDaysInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: EnumDayNamesFieldUpdateOperationsInput | DayNames
    task?: DayUpdatetaskInput | Enumerable<string>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}