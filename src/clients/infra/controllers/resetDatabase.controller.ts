import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Controller, Delete, Param} from '@nestjs/common';
import { ClientService } from '../../application/services/clients.service';
import { CreateClientDto } from '../dto/create-client.dto';

@Controller()
export class resetDatabase {
    constructor(private readonly clientService: ClientService) { }

    @Delete('resetFromhelClientsDB')
    @ApiTags('Delete Methods')
    @ApiResponse({
        status: 200,
        description: 'All clients deleted succesfully'
    })

    resetData(){
        return this.clientService.clientReset()
    }

}