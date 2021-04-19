import styled from 'styled-components';
import { defaultTransition } from '../../../assets/StyleSheet/Effects';

export const ContainerStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    svg {
      color: var(--primary-accent-color);
      margin-top: 3px;
      margin-right: 10px;
      ${defaultTransition};

      &:hover {
        transform: translateX(-2px);
      }
    }

    h2 {
      font-size: 24px;
      color: var(--primary-accent-color);
      font-weight: 500;
    }
  }
`;
