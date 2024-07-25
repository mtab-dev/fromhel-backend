import { IsString} from 'class-validator';

export class DeleteClientDto {
  @IsString()
  clientId!: string;
}