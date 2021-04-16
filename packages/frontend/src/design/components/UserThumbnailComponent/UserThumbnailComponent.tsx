import React from 'react';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { ContainerStyled, ThumbnailStyled, ContentStyled } from './styles';

const UserThumbnailComponent: React.FC = () => {
  return (
    <ContainerStyled>
      <Link to="/" title="Meu Perfil">
        <ThumbnailStyled>
          <FiUser size="18px" />
        </ThumbnailStyled>
      </Link>

      <ContentStyled>
        <p className="userName">User</p>
        <p className="userLevel">Administrador</p>
      </ContentStyled>
    </ContainerStyled>
  );
};

export default UserThumbnailComponent;
