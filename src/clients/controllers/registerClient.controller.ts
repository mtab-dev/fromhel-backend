import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Controller, Post, Body, ConflictException } from '@nestjs/common';
import { ClientService } from '../useCases/clients.service';
import { CreateClientDto } from '../dto/create-client.dto';

@Controller()
export class registerClientController {
    constructor(private readonly clientService: ClientService) { }

    @Post('register') //registering clients

    @ApiTags('Register Methods')
    @ApiBody({ type:  CreateClientDto})
    @ApiResponse({
      status: 200,
      description: 'The client has been succesfully registered'
    })
    
    async clientRegister(@Body() createClientDto: CreateClientDto) {
      const emailExists: boolean = await this.clientService.checkEmail(createClientDto.email);
      if (emailExists) {
        throw new ConflictException('Email are already exists');
      }
      return this.clientService.clientRegister(createClientDto);
    }
}