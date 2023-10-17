import {Module} from '@nestjs/common';
import {ConfigModule}             from '@nestjs/config';
import {RealtorApplicationModule} from '../core/applications/realtors';

import {HomeController}           from './home/home.controller';
import {HomeService} from './home/home.service';
import {ResidentialPropertyController} from './realtor/residential-property.controller';


@Module({
  imports: [
    ConfigModule,
    RealtorApplicationModule,

    ],

  controllers: [
    HomeController,
    ResidentialPropertyController,
  ],

  providers: [
    HomeService
  ],

})
export class ControllerModule {}
