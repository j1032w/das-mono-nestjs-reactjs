import {ApolloDriver} from '@nestjs/apollo';
import {Module} from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {RealtorApplicationModule} from '../core/applications/realtors';
import {ResidentialPropertyResolver} from './residential-property-resolver';

@Module({
  imports: [
    RealtorApplicationModule,

    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: 'schema.gql',

    }),



  ],

  providers: [ResidentialPropertyResolver],
})
export class RealtorGraphqlModule {


}
