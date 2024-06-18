import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientService } from './useCases/clients.service';
import { ClientController } from './controllers/clients.controller';
import { Client, ClientSchema } from './schema/client.entity';

@Module({
  imports: [  
    MongooseModule.forFeature([
      { name: Client.name, schema: ClientSchema },
    ]),
  ],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientsModule {}
