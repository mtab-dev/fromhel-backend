import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsDate, IsOptional } from 'class-validator';
export class CreateClientDto {

    @IsString()
    @IsOptional()
    @ApiProperty({
        type: String,
        description: 'Client id',
        example: '123456',
        required: true,
        readOnly: true
    })
     clientId?: string;

    @IsString()
    @ApiProperty({
        type: String,
        description: 'Client name',
        example: 'John Doe',
        required: true
    })
     clientName!: string;

    @IsString()
    @ApiProperty({
        type: String,
        description: 'Client email',
        example: 'johndoe@johndow.com',
        required: true
        })
     clientEmail!: string;

    @IsDate()
    @IsOptional()
    @ApiProperty({
        type: String,
        description: 'Client registration date',
        example: '2021-09-01',
        required: false
    })
    createdAt?: String;
}
