import Company from '../../../domain/Company';
import { CompanyReduxAction } from './CompanyRedux';

export default class CompanyActions {
  public findAll(companies: Company[], count: number): CompanyReduxAction {
    return {
      type: 'FIND_ALL',
      payload: { companies: { companies, count } },
    };
  }

  public findById(company: Company): CompanyReduxAction {
    return {
      type: 'SELECT_ONE',
      payload: { selectedCompany: company },
    };
  }
}
