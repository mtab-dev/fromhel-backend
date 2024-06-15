import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'; 
import { HydratedDocument, now } from 'mongoose';

export type clientDocument = HydratedDocument<Client>;

@Schema()
export class Client {
    @Prop({ required: true })
    clientId: string;

    @Prop({ required: true })
    clientName: string;

    @Prop({ required: true })
    email: string;

    @Prop({ 
        required: true,
        default: now()
    })
    registeredAt: Date;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
