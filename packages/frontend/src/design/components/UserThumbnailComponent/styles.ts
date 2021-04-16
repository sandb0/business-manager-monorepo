import styled from 'styled-components';

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ThumbnailStyled = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--primary-color);
  border-radius: 50px;

  svg > * {
    color: var(--primary-color);
  }
`;

export const ContentStyled = styled.div`
  p {
    font-size: 14px;
    color: var(--primary-color);

    &.userName {
      font-weight: 500;
    }

    &.userLevel {
      font-size: 12px;
      color: var(--primary-accent-color);
    }
  }
`;
