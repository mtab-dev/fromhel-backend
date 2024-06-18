import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientService } from './domain/useCases/clients.service';
import { Client, ClientSchema } from './domain/schema/client.entity';
import { findClientController } from './application/controllers/findClients.controller';
import { findEmailController } from './application/controllers/findEmail.controller';
import { registerClientController } from './application/controllers/registerClient.controller';
import { IdFindController } from './application/controllers/clientsById.controller';
import { removeClientController } from './application/controllers/removeClient.controller';

@Module({
  imports: [  
    MongooseModule.forFeature([
      { name: Client.name, schema: ClientSchema },
    ]),
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
