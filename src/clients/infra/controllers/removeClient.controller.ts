import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Controller, Body, Post } from '@nestjs/common';
import { ClientService } from '../../application/services/clients.service';
import { DeleteClientDto } from '../dto/deleteUser.dto';

@Controller()
export class removeClientController {
    constructor(private readonly clientService: ClientService) { }

    @Post('delete')

    @ApiTags('Delete Methods')
    @ApiBody({ type:  DeleteClientDto})
    @ApiResponse({
      status: 200,
      description: 'The client has been succesfully deleted'
    }) //removing a client by id
    clientDelete(@Body() dto: DeleteClientDto) {
      return this.clientService.clientRemove(dto.clientId);
    }
}
