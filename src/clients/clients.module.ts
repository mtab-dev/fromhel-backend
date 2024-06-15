import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientService } from './clients.service';
import { ClientController } from './clients.controller';
import { Client, ClientSchema } from './entities/client.entity';

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
