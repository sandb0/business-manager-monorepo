import React from 'react';
import { Link } from 'react-router-dom';

import { ContainerStyled } from './styles';

type Props = {
  name: string;
};

const CompanyListItemComponent: React.FC<Props> = (props: Props) => {
  const { name } = props;

  return (
    <ContainerStyled>
      <Link to="/company/1">
        <h3>{name}</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </Link>
    </ContainerStyled>
  );
};

export default CompanyListItemComponent;
