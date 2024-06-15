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
    public clientId: string;

    @Prop({
        type: String,
        required: true,
    })
    public clientName: string;

    @Prop({
        type: String,
        required: true,
        unique: true,
    })
    public email: string;

    @Prop({
        type: Date,
        required: true,
        default: now()
    })
    public registeredAt: Date;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
