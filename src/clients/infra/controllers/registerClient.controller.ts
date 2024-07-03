import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Controller, Post, Body, ConflictException, Inject } from '@nestjs/common';
import { ClientService } from '../../application/services/clients.service';
import { CreateClientDto } from '../dto/create-client.dto';
import { CreateClientUseCase } from '../../application/useCases/createUseCase';

@Controller()
export class registerClientController {
    public constructor(
      @Inject(ClientService)
      private readonly clientService: ClientService,
      @Inject(CreateClientUseCase)
      private readonly useCase: CreateClientUseCase,
      ) { }

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
      try{
        return this.useCase.run(createClientDto);
      }catch(error){
        throw new Error('Error at registering client (controller)')
      }
    }
}