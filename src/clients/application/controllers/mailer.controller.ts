import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Controller, Get, Param, Post } from '@nestjs/common';
import { ClientService } from '../../domain/services/clients.service';
import { CreateClientDto } from '../dto/create-client.dto';
import { CustomMailService } from '../../domain/services/customMail.service';


@Controller()
export class MailerController{
    constructor(
        public readonly clientService: ClientService,
        public readonly mailService: CustomMailService
    )
    async sendEmail(){
        try{
            const clients = await this.clientService.clientList()
            clients.map((client) => {
                this.mailerService.sendEmail(client.clientName, client.email)
            });
        }catch(error){
            return error
        }

    }
}
