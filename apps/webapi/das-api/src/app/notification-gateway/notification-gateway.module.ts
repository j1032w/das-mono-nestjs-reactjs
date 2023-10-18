import {Module} from '@nestjs/common';
import {NotificationGateway} from './notification-gateway';
import {NotificationGatewayController} from './notification-gateway.controller';


@Module({
  providers: [NotificationGateway],
  controllers: [NotificationGatewayController],
})
export class NotificationGatewayModule {
}
