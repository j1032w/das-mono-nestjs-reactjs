import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {MongoModule} from 'nest-mongodb';
import appConfig from './config/app.config';
import {ControllerModule} from './controllers/controller.module';
import {RealtorGraphqlModule} from './graphql/realtor-graphql.module';
import {NotificationGatewayModule} from './notification-gateway/notification-gateway.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
      envFilePath: ['.env'],
    }),

    // ConfigModule must be initialized before using process.env
    MongoModule.forRoot(process.env.MONGO_URI, process.env.MONGO_DB_NAME, {}),

    ControllerModule,
    NotificationGatewayModule,
    RealtorGraphqlModule

  ],
})
export class AppModule {
}
