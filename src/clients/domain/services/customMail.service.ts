import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class CustomMailService {
  constructor(private readonly mailerService: MailerService) {}


    sendEmail(clientName: string, clientEmail: string): void {
    this.mailerService
      .sendMail({
        to: clientEmail, // list of receivers
        from: 'fromhelstudio@gmail.com', // sender address
        subject: 'Bullet Spell - Download', // Subject line
        text: `Olá, ${clientName}, obrigado por se inscrever. Segue anexo o link de download no mediafire, e também o link na plataforma GameJolt.`, // plaintext body
        html: '<b>welcome</b>', // HTML body content
      })
      .then(() => {})
      .catch(() => {});
  }
}