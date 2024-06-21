import { EntityRepository, Repository } from 'typeorm';
import { ClientsSchema } from '../schema/clients.entity';

@EntityRepository(ClientsSchema)
export class ClientsRepository extends Repository<ClientsSchema> {

  async findByEmail(email: string): Promise<ClientsSchema> {
    return this.findOne({ email });
  }

  async clientRegister(createClientDto: CreateClientDto): Promise<string> {
    try {
      await this.insert({clientName: createClientDto.clientName, clientEmail: createClientDto.clientEmail}); // Save the client
      return 'Client created successfully';
    } catch (error) {
      throw new Error('Client registration failed' + error);
    }
  }

  async findAll(){
    try{
        await this.find()
    }catch(error){
        return error
    }
  }


}