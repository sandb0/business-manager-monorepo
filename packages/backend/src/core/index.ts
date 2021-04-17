import CompanyController from './infrastructure/Controllers/CompanyController';
import CompanyService from './application/CompanyService';
import CompanyRepository from './infrastructure/Repositories/CompanyRepository';

const companyRepository = new CompanyRepository();

const companyService = new CompanyService(companyRepository);

export const companyController = new CompanyController(companyService);
