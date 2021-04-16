import React from 'react';
import { Link } from 'react-router-dom';

import { ContainerStyled } from './styles';

const LogoElement: React.FC = () => {
  return (
    <ContainerStyled>
      <Link to="/">
        <h1>Business Manager</h1>
      </Link>
    </ContainerStyled>
  );
};

export default LogoElement;
