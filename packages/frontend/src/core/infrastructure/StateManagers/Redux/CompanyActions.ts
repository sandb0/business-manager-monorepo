import Company from '../../../domain/Company';
import { CompanyReduxAction } from './CompanyRedux';

export default class CountryActions {
  public findAll(companies: Company[]): CompanyReduxAction {
    return {
      type: 'FIND_ALL',
      payload: { companies },
    };
  }

  public findById(company: Company): CompanyReduxAction {
    return {
      type: 'SELECT_ONE',
      payload: { selectedCompany: company },
    };
  }
}
