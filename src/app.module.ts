import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule } from './clients/clients.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ENVIROMENT } from './config/env';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL_PRD,
      {dbName: process.env.MONGO_CONNECTION_DATABASE}
    ),
    ClientsModule,
  ],
})
export class AppModule {} 
