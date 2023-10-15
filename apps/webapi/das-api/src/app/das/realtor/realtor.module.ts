import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RealtorController } from './realtor.controller';
import { RealtorRepository } from './realtor.repository';


@Module({
  imports: [ConfigModule],
  controllers: [RealtorController],
  providers: [RealtorRepository],
})
export class RealtorModule {}
