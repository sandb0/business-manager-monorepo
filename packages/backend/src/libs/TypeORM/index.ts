import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { connectionOptions } from '../../configs/typeORM';

const typeORMConnection = createConnection(connectionOptions);

export default typeORMConnection;
