import React from 'react';
import { TitleComponent } from '../../design/components';
import { HeaderSection, MainSection } from '../../design/sections';

import { ContainerStyled } from './styles';

const FormsCompanyPage: React.FC = () => {
  return (
    <ContainerStyled>
      <HeaderSection />

      <MainSection>
        <TitleComponent title="Editar Empresa" backTo="/company/1" />

        <form>
          <div>
            <h4>Nome da Empresa</h4>
            <input type="text" />
          </div>

          <div>
            <h4>Nome da Empresa</h4>
            <textarea></textarea>
          </div>

          <button type="submit">Salvar Alterações</button>
        </form>
      </MainSection>
    </ContainerStyled>
  );
};

export default FormsCompanyPage;
