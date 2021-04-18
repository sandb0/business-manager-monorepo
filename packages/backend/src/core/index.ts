import { getConnection } from 'typeorm';

import CompanyController from './infrastructure/controllers/CompanyController';
import CompanyService from './application/CompanyService';
import CompanyRepository from './infrastructure/repositories/TypeORM/CompanyRepository';
import CompanyMapper from './infrastructure/repositories/TypeORM/CompanyMapper';

/** Bind Company layers  */
const companyMapper = new CompanyMapper();
const companyRepository = new CompanyRepository(getConnection(), companyMapper);
const companyService = new CompanyService(companyRepository, companyMapper);
const companyController = new CompanyController(companyService);

export { companyController };
