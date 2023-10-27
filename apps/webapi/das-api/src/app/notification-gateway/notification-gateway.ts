import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';


import {Server} from 'socket.io';

const EMIT_NAME = 'notification';

@WebSocketGateway(8081, {cors: true})
export class NotificationGateway implements OnGatewayInit, OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  emitNotification(data: any): void {
    this.server.emit(EMIT_NAME,  data);
    console.log('Emitted notification:', data);
  }

  @SubscribeMessage(EMIT_NAME)
  listenEvent(@MessageBody() data: any): void {
    console.log('Notification received:', data);
  }


  afterInit(server: any) {
    console.log(`Initialize server: ${server.toString()}`);
  }

  handleConnection(client: any, ...args: any[]): any {
    console.log('client connected');
  }
}
