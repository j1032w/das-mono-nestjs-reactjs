import {
  Body,
  Controller,
  HttpCode,
  Post
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags
} from '@nestjs/swagger';
import {NotificationGateway} from './notification-gateway';


@ApiTags('notification-gateway')
@Controller('v1/notification-gateway')
export class NotificationGatewayController {
  constructor(private readonly websocketGateway: NotificationGateway) {

  }


  @ApiOperation({
    operationId: 'notification_emit',
    description: `Emit socket.io events`,
  })
  @ApiBody({
    description: 'notification data',
  })
  @ApiResponse({status: 400, description: 'Bad request'})
  @HttpCode(200)
  @Post('emit-notification')
  @HttpCode(204)
  async emitEvent(@Body() data: any) {
    this.websocketGateway.emitNotification(data);
  }

}
