import Company from '../../../domain/Company';

export type CompanyReduxStore = {
  company: CompanyReduxState;
};

export type CompanyReduxState = {
  companies?: { companies?: Company[]; count?: number };
  selectedCompany?: Company;
};

export type CompanyReduxAction = {
  type: 'FIND_ALL' | 'SELECT_ONE';
  payload: CompanyReduxState;
};
