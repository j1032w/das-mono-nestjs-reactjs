import {
  DeleteResult,
  Filter,
  InsertManyResult,
  InsertOneResult,
  ModifyResult,
  OptionalUnlessRequiredId,
  WithId
} from 'mongodb';

export interface RepositoryInterface<T> {
  findAsync(filter: Filter<T>): Promise<WithId<T>[]>;
  findByIdAsync(id: string): Promise<T>;

  insertOneAsync(item: OptionalUnlessRequiredId<T>): Promise<InsertOneResult<T>>;
  insertManyAsync(items: OptionalUnlessRequiredId<T>[]): Promise<InsertManyResult<T>>

  findOneAndUpdateAsync(filter: Filter<T>, item: T): Promise<ModifyResult<T>>;

  findOneAndDeleteAsync(filter: Filter<T>): Promise<ModifyResult<T>>
  deleteManyAsync(filter: Filter<T>): Promise<DeleteResult>
}
