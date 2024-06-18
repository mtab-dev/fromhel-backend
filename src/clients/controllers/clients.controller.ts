import { ApiBody, ApiBearerAuth , ApiResponse, ApiTags } from '@nestjs/swagger'
import { Controller, Get, Post, Body, Param, Delete, ConflictException } from '@nestjs/common';
import { ClientService } from '../useCases/clients.service';
import { CreateClientDto } from '../dto/create-client.dto';

@Controller('clients')
export class ClientController {

  constructor(private readonly clientService: ClientService) { }
  @Post('register') //registering clients
  @ApiTags('Register Methods')
  @ApiBody({ type:  CreateClientDto})
  @ApiResponse({
    status: 200,
    description: 'The client has been succesfully registered'
  })
  
  async clientRegister(@Body() createClientDto: CreateClientDto) {
    // const email = createClientDto.email
    const emailExists: boolean = await this.clientService.checkEmail(createClientDto.email);
    if (emailExists) {
      throw new ConflictException('Email are already exists');
    }
    return this.clientService.clientRegister(createClientDto);
  }

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
  
  // @Delete('delete/:id')
  // @ApiTags('Delete Methods')
  // @ApiBody({ type:  CreateClientDto})
  // @ApiResponse({
  //   status: 200,
  //   description: 'The client has been succesfully deleted'
  // }) //removing a client by id
  // clientDelete(@Param('id') id: string) {
  //   return this.clientService.clientDelete(id);
  // }

}
