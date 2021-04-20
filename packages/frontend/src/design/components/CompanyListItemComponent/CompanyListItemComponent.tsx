import React from 'react';
import { Link } from 'react-router-dom';

import { ContainerStyled } from './styles';

type Props = {
  id: number;
  name: string;
  about: string;
};

const CompanyListItemComponent: React.FC<Props> = (props: Props) => {
  const { id, name, about } = props;

  return (
    <ContainerStyled>
      <Link to={`/company/${id}`}>
        <h3>{name}</h3>
        <p>{about}</p>
      </Link>
    </ContainerStyled>
  );
};

export default CompanyListItemComponent;
