// src/events/events.gateway.ts
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  OnGatewayInit,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Injectable } from '@nestjs/common';

@WebSocketGateway({ cors: true })
@Injectable()
export class EventsGateway implements OnGatewayInit {
  private server: Server;
  private messages: string[] = [
    'Mensagem 1',
    'Mensagem 2',
    'Mensagem 3',
    'Mensagem 4',
  ];

  afterInit(server: Server) {
    this.server = server;
    this.startSendingMessages();
  }

  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: any): any {
    console.log(`Received event with id: ${data.id}`);
    return data;
  }

  private startSendingMessages() {
    let index = 0;
    setInterval(() => {
      if (this.server) {
        this.server.emit('messages', { message: this.messages[index] });
        index = (index + 1) % this.messages.length;
      }
    }, 3000);
  }
}
