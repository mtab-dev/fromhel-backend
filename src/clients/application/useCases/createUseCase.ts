import { Inject } from '@nestjs/common'
import { ClientAggregate} from '../../domain/aggregate/clientAggregate'
import { ClientRepository } from '../../infra/repositories/clientRepository'

export type TCreateClientInput = {
    clientId?: string
    clientName: string
    clientEmail: string
    registeredAt?: string
}

export class CreateClientUseCase{
  public constructor (
    @Inject(ClientRepository)
    private readonly clientRepository: ClientRepository
  ) {}

  private static generateId(): string {
    return `FHS-${Math.floor(Math.random() * 100000)}`
}
  public async run (props: TCreateClientInput) {
    try{
        const newClient = ClientAggregate.create({
            clientId: CreateClientUseCase.generateId(),
            clientName: props.clientName,
            clientEmail: props.clientEmail,
            registeredAt: new Date().toISOString()
        })
        return await this.clientRepository.save(newClient)
    }catch(error){
      throw new Error(error)
    }
    }
}
