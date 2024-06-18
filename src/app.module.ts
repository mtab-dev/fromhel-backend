import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule } from './clients/clients.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ENVIROMENT } from './config/env';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(ENVIROMENT.MONGO_URL_PRD,
      {dbName: ENVIROMENT.MONGO_CONNECTION_DATABASE}
    ),
    ClientsModule,
  ],
})
export class AppModule {}
