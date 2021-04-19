import React from 'react';
import { Link } from 'react-router-dom';

import { ContainerStyled } from './styles';

type Props = {
  label: string;
  to: string;
};

const ButtonElement: React.FC<Props> = (props: Props) => {
  const { label, to } = props;

  return (
    <ContainerStyled>
      <Link to={to}>{label}</Link>
    </ContainerStyled>
  );
};

export default ButtonElement;
