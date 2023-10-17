import {Module} from '@nestjs/common';
import {RepositoryModule} from '../../../infrastructures/mongo/repository.module';
import {ResidentialPropertyService} from './residential-property-service';


@Module({
  imports: [
    RepositoryModule
  ],
  providers: [
    ResidentialPropertyService
  ],
  exports: [
    ResidentialPropertyService
  ]
})
export class RealtorApplicationModule {
}
