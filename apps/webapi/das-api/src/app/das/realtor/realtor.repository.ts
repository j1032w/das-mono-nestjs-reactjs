import { Injectable } from '@nestjs/common';
import { Collection, Db } from 'mongodb';
import { InjectDb } from 'nest-mongodb';
import { MongoQuery } from '../../common/mongo/MongoQuery';

@Injectable()
export class RealtorRepository {
  private readonly collection: Collection;

  constructor(@InjectDb() private readonly db: Db) {
    this.collection = this.db.collection('realtor');
  }

  async search(query: MongoQuery) {
    return await this.collection.find(query.filter).toArray();
  }
}
