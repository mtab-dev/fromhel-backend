import { Inject } from '@nestjs/common';
import { ClientRepository } from '../../infra/repositories/clientRepository';

export class RemoveUserUseCase {
  constructor(
    @Inject(ClientRepository)
    private readonly clientRepository: ClientRepository,
  ) {}

  public async removeUser(clientId: string): Promise<void> {
    try {
      await this.clientRepository.delete(clientId);
    } catch (error) {
      throw new Error(error);
    }
  }
}
