import React from 'react';

import { MainStyled } from './styles';

type Props = {
  children: React.ReactChild[];
};

const MainSection: React.FC<Props> = (props: Props) => {
  const { children } = props;

  return <MainStyled>{children}</MainStyled>;
};

export default MainSection;
