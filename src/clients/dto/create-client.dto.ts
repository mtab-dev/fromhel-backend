import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsDate } from 'class-validator';
export class CreateClientDto {

    @IsString()
    @ApiProperty({
        type: String,
        description: 'Client id',
        example: '123456',
        required: true
    })
    public clientId!: string;

    @IsString()
    @ApiProperty({
        type: String,
        description: 'Client name',
        example: 'John Doe',
        required: true
    })
    public clientName!: string;

    @IsString()
    @ApiProperty({
        type: String,
        description: 'Client email',
        example: 'johndoe@johndow.com',
        required: true
        })
    public email!: string;

    @IsDate()
    @ApiProperty({
        type: Date,
        description: 'Client registration date',
        example: '2021-09-01',
        required: true
    })
    registeredAt!: Date;
}
