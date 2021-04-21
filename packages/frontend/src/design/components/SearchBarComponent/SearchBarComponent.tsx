import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { ContainerStyled } from './styles';

const SearchBarComponent: React.FC = () => {
  const query = new URLSearchParams(location.search);
  const searchTerm = query.get('name') || '';

  const [value, setValue] = useState(searchTerm);
  const [focus, setFocus] = useState(false);

  return (
    <ContainerStyled className={focus ? 'onFocus' : ''}>
      <form action="/company/page/1" className="searchForm">
        <input
          name="name"
          type="text"
          placeholder="Qual empresa você está procurando?"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </form>
      <FiSearch size="20px" />
    </ContainerStyled>
  );
};

export default SearchBarComponent;
