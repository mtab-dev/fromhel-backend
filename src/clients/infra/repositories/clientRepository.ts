import { Inject } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, type FilterQuery } from 'mongoose'
import { Client, type clientDocument } from '../schema/clientSchema'
import { ClientAggregate } from '../../domain/aggregate/clientAggregate'
import { ClientMapper } from './clientMappers'

export class ClientRepository{
  public constructor (
    @Inject(ClientMapper) 
    private readonly mapper: ClientMapper,
    @InjectModel(Client.name)
    private readonly conn: Model<clientDocument>
  ) { }

  public async save (entity: ClientAggregate){
    try{
        const schema = this.mapper.toPersistence(entity)
        const newClient = new this.conn(schema)
        return void await newClient.save()
    }catch(error){
      throw new Error(error)
    }
  }

  public async find (): Promise<ClientAggregate[]> {
    return await this.conn.find()
  }
 
}
