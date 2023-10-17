import {
  Collection,
  Db,
  DeleteResult,
  Filter,
  InsertManyResult,
  InsertOneResult,
  ModifyResult,
  OptionalUnlessRequiredId,
  WithId
} from 'mongodb';
import {RepositoryInterface} from '../../../core/applications/abstracts';
import {UtilityService} from '../../utils';




export class MongoRepositoryGeneric<T extends { id: string }> implements RepositoryInterface<T> {

  private readonly collection: Collection<T>;


  constructor(db: Db,
              collectionName: string,
              private readonly utilityService: UtilityService) {
    this.collection = db.collection<T>(collectionName);
  }


  async findAsync(filter: Filter<T>): Promise<WithId<T>[]> {
    return await this.collection.find(filter).toArray();
  }

  async findByIdAsync(id: string): Promise<T> {
    return this.collection.findOne<T>({id} as Filter<T>);
  }

  async insertOneAsync(item: OptionalUnlessRequiredId<T>): Promise<InsertOneResult<T>> {
    item.id = item.id || this.utilityService.generateObjectId();
    return await this.collection.insertOne(item);
  }

  async insertManyAsync(items: OptionalUnlessRequiredId<T>[]): Promise<InsertManyResult<T>> {
    for(const item of items) {
      item.id = item.id || this.utilityService.generateObjectId();
    }

    return await this.collection.insertMany(items);

  }


  async findOneAndUpdateAsync(filter: Filter<T>, item: T): Promise<ModifyResult<T>> {
    return this.collection.findOneAndUpdate(
      filter,
      item,
      {upsert: false, includeResultMetadata: true}
    );
  }


  async findOneAndDeleteAsync(filter: Filter<T>): Promise<ModifyResult<T>> {
    return this.collection.findOneAndDelete(filter, {includeResultMetadata: true});
  }


  async deleteOneAsync(id:string): Promise<DeleteResult> {
    return this.collection.deleteOne({id} as Filter<T>);
  }


  async deleteManyAsync(filter: Filter<T>): Promise<DeleteResult> {
    return this.collection.deleteMany(filter);
  }
}
