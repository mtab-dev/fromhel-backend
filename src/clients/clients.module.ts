import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientService } from './domain/services/clients.service';
import { Client, ClientSchema } from './domain/schema/client.entity';
import { findClientController } from './application/controllers/findClients.controller';
import { findEmailController } from './application/controllers/findEmail.controller';
import { registerClientController } from './application/controllers/registerClient.controller';
import { IdFindController } from './application/controllers/clientsById.controller';
import { removeClientController } from './application/controllers/removeClient.controller';
import { MailerModule } from '@nestjs-modules/mailer'

@Module({
  imports: [  
    MongooseModule.forFeature([
      { name: Client.name, schema: ClientSchema },
    ]),
    MailerModule.forRoot({
      transport: 'smtps://user@domain.com:pass@smtp.domain.com',
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>',
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new PugAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [
    findClientController,
    findEmailController,
    registerClientController,
    IdFindController,
    removeClientController
  ],
  providers: [ClientService],
})
export class ClientsModule {}
