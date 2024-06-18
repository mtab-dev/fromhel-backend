import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Controller, Get, Param } from '@nestjs/common';
import { ClientService } from '../../domain/useCases/clients.service';
import { CreateClientDto } from '../dto/create-client.dto';

@Controller()
export class findEmailController {
    constructor(private readonly clientService: ClientService) { }

    @Get('listEmail/:email') //list a client by email

    @ApiTags('List Methods')
    @ApiBody({ type:  CreateClientDto})
    @ApiResponse({
      status: 200,
      description: 'The client email has been succesfully finded'
    })

    clientListOne(@Param('email') email: string) {
      return this.clientService.clientListEmail(email);
    }
}