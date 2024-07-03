import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Controller, Param, Delete } from '@nestjs/common';
import { ClientService } from '../../application/services/clients.service';
import { CreateClientDto } from '../dto/create-client.dto';

@Controller()
export class removeClientController {
    constructor(private readonly clientService: ClientService) { }

    @Delete('delete/:id')

    @ApiTags('Delete Methods')
    @ApiBody({ type:  CreateClientDto})
    @ApiResponse({
      status: 200,
      description: 'The client has been succesfully deleted'
    }) //removing a client by id
    clientDelete(@Param('id') id: string) {
      return this.clientService.clientRemove(id);
    }
}