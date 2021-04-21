import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { HomePage, FormsCompanyPage, SingleCompanyPage } from './pages';

import companyPresenter from './core';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/page/1" />
        </Route>

        {/** Home Page */}
        <Route path="/page/:page?" exact>
          <HomePage presenter={companyPresenter} />
        </Route>

        {/** Create Componay Page */}
        <Route path="/company/" exact>
          <FormsCompanyPage presenter={companyPresenter} />
        </Route>

        {/** View Company Page */}
        <Route path="/company/:companyId" exact>
          <SingleCompanyPage presenter={companyPresenter} />
        </Route>

        {/** Edit Company Page */}
        <Route path="/company/:companyId/edit" exact>
          <FormsCompanyPage presenter={companyPresenter} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
