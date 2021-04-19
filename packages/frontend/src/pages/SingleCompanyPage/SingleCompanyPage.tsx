import React from 'react';

import { TitleComponent } from '../../design/components';
import { ButtonElement } from '../../design/elements';
import { HeaderSection, MainSection } from '../../design/sections';

import { ContainerStyled } from './styles';

const SingleCompanyPage: React.FC = () => {
  return (
    <ContainerStyled>
      <HeaderSection />

      <MainSection>
        <TitleComponent title="Informações da Empresa" backTo="/">
          <ButtonElement label="Editar" to="/company/1/edit" />
        </TitleComponent>

        <section>
          <div>
            <h4>Nome da Empresa</h4>
            <p>Empresa</p>
          </div>

          <div>
            <h4>Nome da Empresa</h4>
            <p>Empresa</p>
          </div>
        </section>
      </MainSection>
    </ContainerStyled>
  );
};

export default SingleCompanyPage;
