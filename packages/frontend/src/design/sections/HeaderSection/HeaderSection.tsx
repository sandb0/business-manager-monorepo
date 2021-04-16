import React from 'react';

import { LogoElement } from '../../elements';
import { SearchBarComponent, UserThumbnailComponent } from '../../components';

import { HeaderStyled } from './styles';

const HeaderSecton: React.FC = () => {
  return (
    <HeaderStyled>
      <LogoElement />
      <SearchBarComponent />
      <UserThumbnailComponent />
    </HeaderStyled>
  );
};

export default HeaderSecton;
