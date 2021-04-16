import React from 'react';

import { HeaderSection } from '../../design/sections';

import { ContainerStyled } from './styles';

const HomePage: React.FC = () => {
  return (
    <ContainerStyled>
      <HeaderSection />

      <main></main>
    </ContainerStyled>
  );
};

export default HomePage;
