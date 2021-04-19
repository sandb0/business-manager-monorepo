import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { ContainerStyled } from './styles';

type Props = {
  title: string;
  backTo?: string;
  children?: React.ReactChild;
};

const TitleComponent: React.FC<Props> = (props: Props) => {
  const { title, backTo, children } = props;

  const backToComponent = backTo ? (
    <Link to={backTo} title="Voltar">
      <FiChevronLeft size="20px" />
    </Link>
  ) : (
    ''
  );

  return (
    <ContainerStyled>
      <div>
        {backToComponent}
        <h2>{title}</h2>
      </div>

      {children}
    </ContainerStyled>
  );
};

export default TitleComponent;
