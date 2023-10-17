import {Injectable} from '@nestjs/common';
import {Filter} from 'mongodb';
import {ResidentialPropertyRepository} from '../../../infrastructures/mongo';
import {ResidentialProperty} from '../../domains';


@Injectable()
export class ResidentialPropertyService {

  constructor(private readonly repository: ResidentialPropertyRepository) {
  }

  async findOneAsync(id: string) {
    return this.repository.findByIdAsync(id);
  }

  async insertOneAsync(residentialProperty: ResidentialProperty) {
    return this.repository.insertOneAsync(residentialProperty);
  }

  async insertManyAsync(residentialProperties: ResidentialProperty[]) {
    return this.repository.insertManyAsync(residentialProperties);
  }

  async updateOneAsync(residentialProperty: ResidentialProperty) {
    return this.repository.findOneAndUpdateAsync({id: residentialProperty.id}, residentialProperty);
  }

  async deleteOneAsync(id: string) {
    return this.repository.deleteOneAsync(id);
  }

  async deleteManyAsync(filter: Filter<ResidentialProperty>) {
    return this.repository.deleteManyAsync(filter);
  }

  async findAsync(filter: Filter<ResidentialProperty>) {
    return this.repository.findAsync(filter);
  }

}
