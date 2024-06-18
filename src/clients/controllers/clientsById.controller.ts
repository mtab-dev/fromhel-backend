import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Controller, Get, Param } from '@nestjs/common';
import { ClientService } from '../useCases/clients.service';
import { CreateClientDto } from '../dto/create-client.dto';

@Controller()
export class IdFindController {
    constructor(private readonly clientService: ClientService) { }

 
    @Get('listId/:id')

    @ApiTags('List Methods')
    @ApiBody({ type:  CreateClientDto})
    @ApiResponse({
      status: 200,
      description: 'The client id has been succesfully finded'
    }) //list a client by Id
    clientListId(@Param('id') id: string){
      return this.clientService.clientListId(id);
    }
}