import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientService } from './useCases/clients.service';
import { Client, ClientSchema } from './schema/client.entity';
import { findClientController } from './controllers/findClients.controller';
import { findEmailController } from './controllers/findEmail.controller';
import { registerClientController } from './controllers/registerClient.controller';
import { IdFindController } from './controllers/clientsById.controller';
import { removeClientController } from './controllers/removeClient.controller';

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
