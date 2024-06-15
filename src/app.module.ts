import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/clients.module';
import { MongooseModule } from '@nestjs/mongoose';

const DB_URL = `mongodb+srv://mtab-admin:gabrielematheusprogramadoresfrenteeverso@cluster0.lfs0k4s.mongodb.net/`

@Module({
  imports: [
    MongooseModule.forRoot(DB_URL),
    ClientsModule,
  ],
})
export class AppModule {}
