import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { CompanyModel } from '../../core/infrastructure/repositories/TypeORM/models';

const typeORMConnection = createConnection({
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'postgres',
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
  username: process.env.POSTGRES_USER || 'root',
  password: process.env.POSTGRES_PASS || 'root',
  entities: [CompanyModel],
  synchronize: true,
  logging: true,
});

export default typeORMConnection;
