import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Inject, Controller, Body, Delete } from '@nestjs/common';
import { RemoveUserUseCase } from '../../application/useCases/removeUserUseCase';
import { DeleteClientDto } from '../dto/deleteUser.dto';

@Controller()
export class removeClientController {
    public constructor(
      @Inject(RemoveUserUseCase)
      private readonly useCase: RemoveUserUseCase
    ) {}

    @Delete('delete')

    @ApiTags('Delete Methods')
    @ApiBody({ type:  DeleteClientDto})
    @ApiResponse({
      status: 200,
      description: 'The client has been succesfully deleted'
    }) //removing a client by id
    clientDelete(@Body() dto: DeleteClientDto) {
      return this.useCase.removeUser(dto.clientId);
    }
}
