import { ClientAggregate } from '../../domain/aggregate/clientAggregate'
import { IClientContract } from '../../domain/contracts/client.contract'

export class ClientMapper {
  public toPersistence (target: ClientAggregate): IClientContract{
    return {
      clientId: target.clientId,
      clientName: target.clientName,
      email: target.email,
      registeredAt: target.registeredAt
    }
  }
}
