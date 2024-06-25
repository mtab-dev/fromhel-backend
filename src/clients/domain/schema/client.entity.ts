import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, now } from 'mongoose';

export type clientDocument = HydratedDocument<Client>;

@Schema()
export class Client {
    @Prop({
        immutable: true,
        required: true,
        type: String,
        index: true,
        nullable: false,
        unique: true
      })
     clientId: string;

    @Prop({
        type: String,
        required: true,
    })
     clientName: string;

    @Prop({
        type: String,
        required: true,
        unique: true,
    })
     clientEmail: string;

    @Prop({
        type: String,
        required: false,
        default: now()
    })
     registeredAt?: String;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
