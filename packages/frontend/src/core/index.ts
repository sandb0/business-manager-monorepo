import CompanyPresenter from '../core/infrastructure/Presenters/CompanyPresenter';
import CompanyActions from '../core/infrastructure/StateManagers/Redux/CompanyActions';
import CompanyService from '../core/application/CompanyService';
import axios from 'axios';
import CompanyHTTPRepository from './infrastructure/Repositories/CompanyHTTPRepository';
import CompanyMapper from './infrastructure/Repositories/CompanyMapper';

const httpClient = axios;

const companyMapper = new CompanyMapper();
const companyHTTPRepository = new CompanyHTTPRepository(
  httpClient,
  companyMapper
);
const companyService = new CompanyService(companyHTTPRepository);
const companyActions = new CompanyActions();

const companyPresenter = new CompanyPresenter(companyService, companyActions);

export default companyPresenter;
