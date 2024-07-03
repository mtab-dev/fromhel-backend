import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientService } from './application/services/clients.service';
import { Client, ClientSchema } from './infra/schema/client.entity';
import { findClientController } from './infra/controllers/findClients.controller';
import { findEmailController } from './infra/controllers/findEmail.controller';
import { registerClientController } from './infra/controllers/registerClient.controller';
import { IdFindController } from './infra/controllers/clientsById.controller';
import { removeClientController } from './infra/controllers/removeClient.controller';

@Module({
  imports: [  
    MongooseModule.forFeature([
      { name: Client.name, schema: ClientSchema },
    ])
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
