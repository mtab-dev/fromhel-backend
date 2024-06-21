import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ClientsSchema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clientName: string;

  @Column()
  clientEmail: string;

  @Column({default: () => new Date()})
  createdAt: Date;
}