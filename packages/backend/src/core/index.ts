import CompanyController from './infrastructure/controllers/CompanyController';
import CompanyService from './application/CompanyService';
import CompanyRepository from './infrastructure/repositories/TypeORM/CompanyRepository';
import { getConnection } from 'typeorm';

const companyRepository = new CompanyRepository(getConnection());

const companyService = new CompanyService(companyRepository);

export const companyController = new CompanyController(companyService);
