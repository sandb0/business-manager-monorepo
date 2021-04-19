import React from 'react';

import { CompanyListItemComponent } from '../../design/components';
import { ButtonElement } from '../../design/elements';
import { HeaderSection } from '../../design/sections';

import {
  ContainerStyled,
  TitleContainerStyled,
  CompaniesListWrapperStyled,
} from './styles';

const HomePage: React.FC = () => {
  return (
    <ContainerStyled>
      <HeaderSection />

      <main>
        <TitleContainerStyled>
          <div>
            <h2>Gerenciador de Empresas</h2>
          </div>

          <ButtonElement label="Adicionar nova Empresa" to="/company" />
        </TitleContainerStyled>

        <CompaniesListWrapperStyled>
          <CompanyListItemComponent />
        </CompaniesListWrapperStyled>
      </main>
    </ContainerStyled>
  );
};

export default HomePage;
