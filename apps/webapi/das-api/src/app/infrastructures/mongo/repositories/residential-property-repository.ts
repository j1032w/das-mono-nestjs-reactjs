import {Injectable} from '@nestjs/common';
import {Db} from 'mongodb';
import {InjectDb} from 'nest-mongodb';
import {ResidentialProperty} from '../../../core/domains';
import {UtilityService} from '../../utils';
import {MongoRepositoryGeneric} from './mongo-repository.generic';





@Injectable()
export class ResidentialPropertyRepository extends MongoRepositoryGeneric<ResidentialProperty> {

  constructor(@InjectDb() db: Db, utilityService: UtilityService) {
    super(db, 'realtor_residential_properties', utilityService);
  }


}
