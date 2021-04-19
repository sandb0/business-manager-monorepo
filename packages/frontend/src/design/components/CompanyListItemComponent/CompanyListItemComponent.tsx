import React from 'react';
import { Link } from 'react-router-dom';

import { ContainerStyled } from './styles';

const CompanyListItemComponent: React.FC = () => {
  return (
    <ContainerStyled>
      <Link to="/company/1">
        <h3>Empresa</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </Link>
    </ContainerStyled>
  );
};

export default CompanyListItemComponent;
