import React from 'react';

import { HeaderSection } from '../../design/sections';

import { ContainerStyled } from './styles';

const HomePage: React.FC = () => {
  fetch(process.env.REACT_APP_API_URL + '/companies')
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <ContainerStyled>
      <HeaderSection />

      <main></main>
    </ContainerStyled>
  );
};

export default HomePage;
