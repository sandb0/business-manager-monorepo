import styled from 'styled-components';

import { boxShadowEffect } from '../../../assets/StyleSheet/Effects';

const inputHorizontalPadding = '30px';

export const ContainerStyled = styled.div`
  width: 100%;
  max-width: 500px;
  border: 2px solid var(--primary-color);
  border-radius: 50px;
  padding: 15px ${inputHorizontalPadding};
  display: flex;
  justify-content: space-between;
  ${boxShadowEffect.transition}

  &.onFocus {
    ${boxShadowEffect.effect}
  }

  input {
    width: 100%;
    margin-right: ${inputHorizontalPadding};
    background-color: transparent;
    font-size: 14px;
    letter-spacing: 0.5px;
  }
`;
