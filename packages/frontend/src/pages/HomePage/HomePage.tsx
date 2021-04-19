import React from 'react';

import {
  CompanyListItemComponent,
  TitleComponent,
} from '../../design/components';
import { ButtonElement } from '../../design/elements';
import { HeaderSection, MainSection } from '../../design/sections';

import { ContainerStyled, CompaniesListWrapperStyled } from './styles';

const HomePage: React.FC = () => {
  return (
    <ContainerStyled>
      <HeaderSection />

      <MainSection>
        <TitleComponent title="Gerenciador de Empresa">
          <ButtonElement label="Adicionar nova Empresa" to="/company" />
        </TitleComponent>

        <CompaniesListWrapperStyled>
          <CompanyListItemComponent />
        </CompaniesListWrapperStyled>
      </MainSection>
    </ContainerStyled>
  );
};

export default HomePage;
