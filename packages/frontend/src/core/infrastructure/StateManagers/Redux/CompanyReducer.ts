import { CompanyReduxAction, CompanyReduxState } from './CompanyRedux';

const initialState: CompanyReduxState = {
  companies: {},
};

const companyReducer = (
  state = initialState,
  action: CompanyReduxAction
): CompanyReduxState => {
  switch (action.type) {
    case 'FIND_ALL':
    case 'SELECT_ONE':
      return {
        ...state,
        companies: action.payload.companies,
        selectedCompany: action.payload.selectedCompany,
      };
    default:
      return {
        ...state,
      };
  }
};

export default companyReducer;
