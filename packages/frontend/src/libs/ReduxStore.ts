import { createStore, combineReducers } from 'redux';

import companyReducer from '../core/infrastructure/StateManagers/Redux/CompanyReducer';

export default createStore(
  combineReducers({
    company: companyReducer,
  })
);
