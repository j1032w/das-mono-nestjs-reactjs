import {
  Args,
  Query,
  Resolver
} from '@nestjs/graphql';
import {ResidentialPropertyService} from '../core/applications/realtors';
import {ResidentialPropertyQuery} from '../infrastructures/shared';
import {RealtorResidentialPropertySchema} from './realtor-residential-property.schema';


@Resolver()
export class ResidentialPropertyResolver {

  constructor(private readonly residentialPropertyService :ResidentialPropertyService) {
  }

  @Query(() => [RealtorResidentialPropertySchema])
  async residentialProperties(
      @Args('filter', {type: () => ResidentialPropertyQuery})
      filter: ResidentialPropertyQuery) {

    return await this.residentialPropertyService.findAsync(filter);
  }


}
