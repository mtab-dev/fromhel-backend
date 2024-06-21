import { Injectable } from '@nestjs/common';
import { CreateClientDto } from '../../application/dto/create-client.dto';
import { IClientContract } from '../../../shared/contracts/service.contract';
import { ClientsRepository } from '../repository/clients.repository';

@Injectable()
export class ClientService implements IClientContract{
  constructor(
    private readonly clientsRepository: ClientsRepository
  ) { }

  async clientRegister(createClientDto: CreateClientDto) {
    //register client
    try {
      createClientDto.clientId =  Math.random().toString(36).substring(7);
      await this.clientsRepository.clientRegister(createClientDto)
      return 'Client created successfully';
    } catch (error) {
      return 'Client registration failed' + error;
    }
  }

  // async clientList() {
  //   //list all clients
  //   try {
  //     return await this.clientModel.find().exec();
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
  // }

  // async clientListEmail(email: string) {
  //   //list a client by email
  //   try {
  //     return await this.clientModel.find({ email }).exec();
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
  // }

  // async clientListId(id: string){
  //   //list a client by Id
  //   try {
  //     return this.clientModel.find({ _id: id }).exec();
  //   } catch (error) {
  //     return 'Error at finding client'
  //   }
  // }

  // async clientListDate(createdAt: any) {
  //   //list a client by date of creation
  //   return this.clientModel.findOne({ createdAt }).exec();
  // }

  // async clientRemove(clientId: string){
  //   try{
  //     await this.clientModel.deleteOne({clientId: clientId})
  //   }catch(error){
  //     throw new Error(`Failed to remove client with ID ${clientId}: ${error.message}`)
  //   }
  // }

  // async clientSort(): Promise<Client[]> {
  //   try {
  //     return this.clientModel.find().sort({ createdAt: -1 }).exec();
  //   } catch (error) {
  //     return error;
  //   }
  // }

  // async clientReset(): Promise<void> {
  //   //delete all clients in db
  //   try {
  //     await this.clientModel.deleteMany({}).exec();
  //   } catch (error) {
  //     'Error deleting the clients';
  //   }
  // }
}
