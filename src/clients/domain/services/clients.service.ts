import { Injectable } from '@nestjs/common';
import { ClientSession } from 'mongoose'
import { CreateClientDto } from '../../application/dto/create-client.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { generateId } from 'src/shared/utils/generate.util'
import { Client, clientDocument } from '../schema/client.entity';
import { IClientContract } from '../../../shared/contracts/service.contract';
// import { generateId } from '/src/shared/utils/generate.util.ts';
// import { generateId } from '@shared/utils/generate. util';

@Injectable()
export class ClientService implements IClientContract{
  constructor(
    @InjectModel('Client')
    public clientModel: Model<clientDocument>,
  ) { }

  async checkEmail(email: string) {
    //check if the email already exists in db
    const emailExist = await this.clientModel.findOne({ email }).exec();
    if (emailExist) {
      return true;
    } else {
      return false;
    }
  }

  async clientRegister(createClientDto: CreateClientDto) {
    //register client
    try {
      createClientDto.clientId =  Math.random().toString(36).substring(7);
      await new this.clientModel(createClientDto).save(); // Save the client
      return 'Client created successfully';
    } catch (error) {
      return 'Client registration failed' + error;
    }
  }

  async clientList() {
    //list all clients
    try {
      return await this.clientModel.find().exec();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async clientListEmail(email: string) {
    //list a client by email
    try {
      return await this.clientModel.find({ email }).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async clientListId(id: string){
    //list a client by Id
    try {
      return this.clientModel.find({ _id: id }).exec();
    } catch (error) {
      return 'Error at finding client'
    }
  }

  async clientListDate(createdAt: any) {
    //list a client by date of creation
    return this.clientModel.findOne({ createdAt }).exec();
  }

  async clientRemove(clientId: string){
    try{
      await this.clientModel.deleteOne({clientId: clientId})
    }catch(error){
      throw new Error(`Failed to remove client with ID ${clientId}: ${error.message}`)
    }
  }

  async clientSort(): Promise<Client[]> {
    try {
      return this.clientModel.find().sort({ createdAt: -1 }).exec();
    } catch (error) {
      return error;
    }
  }

  async clientReset(): Promise<void> {
    //delete all clients in db
    try {
      await this.clientModel.deleteMany({}).exec();
    } catch (error) {
      'Error deleting the clients';
    }
  }
}