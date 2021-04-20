import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HomePage, FormsCompanyPage, SingleCompanyPage } from './pages';

import companyPresenter from './core';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/** Home Page */}
        <Route path="/" exact>
          <HomePage presenter={companyPresenter} />
        </Route>

        {/** Create Componay Page */}
        <Route path="/company" exact>
          <FormsCompanyPage />
        </Route>

        {/** View Company Page */}
        <Route path="/company/:id" exact>
          <SingleCompanyPage />
        </Route>

        {/** Edit Company Page */}
        <Route path="/company/:id/edit" exact>
          <FormsCompanyPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
