import Company from '../../../domain/Company';

export type CompanyReduxStore = {
  company: CompanyReduxState;
};

export type CompanyReduxState = {
  companies: Company[];
  selectedCompany?: Company;
};

export type CompanyReduxAction = {
  type: 'FIND_ALL';
  payload: CompanyReduxState;
};
