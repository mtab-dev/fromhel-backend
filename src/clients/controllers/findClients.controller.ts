import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Controller, Get } from '@nestjs/common';
import { ClientService } from '../useCases/clients.service';
import { CreateClientDto } from '../dto/create-client.dto';

@Controller()
export class findClientController {
    constructor(private readonly clientService: ClientService) { }

    @Get('list') //list all clients

    @ApiTags('List Methods')
    @ApiBody({ type:  CreateClientDto})
    @ApiResponse({
      status: 200,
      description: 'All clients succesfully finded'
    })

    clientList() {
      return this.clientService.clientList();
    }
}