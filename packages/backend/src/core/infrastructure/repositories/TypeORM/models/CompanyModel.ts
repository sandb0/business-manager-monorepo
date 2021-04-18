import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class CompanyModel {
  @PrimaryGeneratedColumn()
  public id!: number;
}
