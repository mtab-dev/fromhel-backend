import { CreateClientDto } from "../../infra/dto/create-client.dto";
import { Client } from "../../infra/schema/client.entity";

export interface IClientContract {
      checkEmail(email: string): Promise<boolean>;
      clientRegister(createClientDto: CreateClientDto): Promise<string>;
      clientList(): Promise<Client[]>;
      clientListEmail(email: string): Promise<Client[]>;
      clientListDate(createdAt: Date): Promise<Client | null>;
      clientRemove(clientId: string): Promise<void>;
      clientSort(): Promise<Client[]>;
      clientReset(): Promise<void>
}