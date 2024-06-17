import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, now } from 'mongoose';

export type clientDocument = HydratedDocument<Client>;

@Schema()
export class Client {
    @Prop({
        type: String,
        required: true,
        unique: true,
        index: true
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
     email: string;

    @Prop({
        type: String,
        required: false,
        default: now()
    })
     registeredAt: String;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
