import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { ContainerStyled } from './styles';

const SearchBarComponent: React.FC = () => {
  const [focus, setFocus] = useState(false);

  return (
    <ContainerStyled className={focus ? 'onFocus' : ''}>
      <input
        type="text"
        placeholder="Qual empresa você está procurando?"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <FiSearch size="20px" />
    </ContainerStyled>
  );
};

export default SearchBarComponent;
