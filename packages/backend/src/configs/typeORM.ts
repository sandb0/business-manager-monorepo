import { ConnectionOptions } from 'typeorm';
import { CompanyModel } from '../core/infrastructure/repositories/TypeORM/models';

export const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'postgres',
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
  username: process.env.POSTGRES_USER || 'root',
  password: process.env.POSTGRES_PASS || 'root',
  entities: [CompanyModel],
  synchronize: true,
  logging: true,
};
