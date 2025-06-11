# Aplicação WebSocket com NestJS

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição

Esta é uma aplicação de mensagens em tempo real que implementa um sistema de comunicação via WebSocket, permitindo que usuários se conectem através de diferentes perfis (perfil1 e perfil2). O sistema envia mensagens automáticas a cada 3 segundos para os grupos conectados, com conteúdo personalizado dependendo do perfil do usuário. O objetivo principal é demonstrar a implementação de comunicação bidirecional em tempo real usando WebSockets com NestJS, simulando um sistema de chat com diferentes canais de comunicação.

## Funcionalidades

- Sistema de perfis de usuário (perfil1 e perfil2)
- Mensagens em tempo real via WebSocket
- Broadcast de mensagens para grupos específicos
- Mensagens automáticas periódicas
- Suporte a múltiplos clientes conectados

## Tecnologias Utilizadas

- NestJS
- Socket.IO
- TypeScript
- Node.js

## Instalação

```bash
$ yarn install
```

## Executando a Aplicação

```bash
# desenvolvimento
$ yarn run start

# modo watch
$ yarn run start:dev

# modo produção
$ yarn run start:prod
```

## Estrutura do Projeto

```
src/
├── app.controller.ts      # Controlador principal
├── app.module.ts         # Módulo principal da aplicação
├── app.service.ts        # Serviço principal
├── main.ts              # Ponto de entrada da aplicação
└── events/              # Diretório de eventos WebSocket
    └── eventos.gateway.ts # Gateway WebSocket
```

## Eventos WebSocket

A aplicação suporta os seguintes eventos:

- `joinProfile`: Permite que clientes se juntem a um perfil específico
- `events`: Manipula eventos gerais
- `messages`: Recebe mensagens do servidor

## Testes

```bash
# testes unitários
$ yarn run test

# testes e2e
$ yarn run test:e2e

# cobertura de testes
$ yarn run test:cov
```

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)
