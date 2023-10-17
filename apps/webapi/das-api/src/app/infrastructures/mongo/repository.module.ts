import {Module} from '@nestjs/common';
import {UtilityModule} from '../utils/utility.module';
import {ResidentialPropertyRepository} from './repositories';



@Module({
  imports: [UtilityModule],
  providers: [
    ResidentialPropertyRepository
  ],
  exports: [
    ResidentialPropertyRepository
  ]
})
export class RepositoryModule {}
