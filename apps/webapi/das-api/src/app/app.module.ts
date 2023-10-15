import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongoModule } from 'nest-mongodb';
import appConfig from './config/app.config';
import { RealtorModule } from './das/realtor/realtor.module';
import { HomeModule } from './home/home.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
      envFilePath: ['.env'],
    }),

    // ConfigModule must be initialized before using process.env
    MongoModule.forRoot(process.env.MONGO_URI, process.env.MONGO_DB_NAME, {
      useUnifiedTopology: true,
    }),

    RealtorModule,
    HomeModule,
  ],
})
export class AppModule {}
