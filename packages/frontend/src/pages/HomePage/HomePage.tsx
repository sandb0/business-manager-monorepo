import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Company from '../../core/domain/Company';
import CompanyPresenter from '../../core/infrastructure/Presenters/CompanyPresenter';
import { CompanyReduxStore } from '../../core/infrastructure/StateManagers/Redux/CompanyRedux';

import {
  CompanyListItemComponent,
  TitleComponent,
} from '../../design/components';
import { ButtonElement } from '../../design/elements';
import { HeaderSection, MainSection } from '../../design/sections';

import { ContainerStyled, CompaniesListWrapperStyled } from './styles';

type Props = {
  presenter: CompanyPresenter;
};

const HomePage: React.FC<Props> = (props: Props) => {
  const { presenter } = props;

  const dispatch = useDispatch();

  const companies = useSelector(
    (companyState: CompanyReduxStore) => companyState.company.companies
  );

  useEffect(() => {
    (async () => {
      dispatch(await presenter.findAll());
    })();
  }, [dispatch]);

  const cardsCompaniesComponents = companies.map(
    (company: Company, index: number) => (
      <CompanyListItemComponent
        key={index}
        id={company.id}
        name={company.name}
        about={company.about}
      />
    )
  );

  return (
    <ContainerStyled>
      <HeaderSection />

      <MainSection>
        <TitleComponent title="Gerenciador de Empresa">
          <ButtonElement label="Adicionar nova Empresa" to="/company" />
        </TitleComponent>

        <CompaniesListWrapperStyled>
          {cardsCompaniesComponents}
        </CompaniesListWrapperStyled>
      </MainSection>
    </ContainerStyled>
  );
};

export default HomePage;
