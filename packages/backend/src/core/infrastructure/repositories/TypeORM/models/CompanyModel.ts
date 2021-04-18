import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class CompanyModel {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public name!: string;

  @Column()
  public cnpj!: string;

  @Column()
  public demandValue!: number;

  @Column()
  public annualBilling!: number;
}
