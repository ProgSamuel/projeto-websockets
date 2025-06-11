import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  OnGatewayInit,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Injectable } from '@nestjs/common';

@WebSocketGateway({ cors: true })
@Injectable()
export class EventsGateway implements OnGatewayInit {
  private server: Server;
  private messages1: string[] = ['Mensagem  do perfil 1'];
  private messages2: string[] = ['Mensagem  do perfil 2'];
  private profiles: { [id: string]: string } = {};

  afterInit(server: Server) {
    this.server = server;
    this.startSendingMessages();
  }

  @SubscribeMessage('joinProfile')
  handleJoinProfile(
    @MessageBody() data: { profile: string },
    @ConnectedSocket() client: Socket,
  ) {
    console.log(`Received join profile: ${data.profile}`);
    this.profiles[client.id] = data.profile;
    client.join(data.profile);
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
        Object.keys(this.profiles).forEach((clientId) => {
          const profile = this.profiles[clientId];
          if (profile === 'perfil1') {
            for (const msg of this.messages1) {
              this.server.to(profile).emit('messages', {
                message: `Nº${index + 1} - Grupo selecionado: ${profile} - msg: ${msg}`,
              });
            }
          }
          if (profile === 'perfil2') {
            for (const msg of this.messages2) {
              this.server.to(profile).emit('messages', {
                message: `Nº${index + 1} - Grupo selecionado: ${profile} - msg: ${msg}`,
              });
            }
          }
          if (profile !== 'perfil1' && profile !== 'perfil2') {
            const messages = this.messages1.concat(this.messages2);
            for (const msg of messages) {
              this.server.to(profile).emit('messages', {
                message: `Nº${index + 1} - Grupo selecionado: ${profile} - msg: ${msg}`,
              });
            }
          }
        });
        index = index + 1;
      }
    }, 3000);
  }
}
