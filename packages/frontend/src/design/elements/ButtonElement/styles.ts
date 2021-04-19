import styled from 'styled-components';
import { defaultTransition } from '../../../assets/StyleSheet/Effects';

export const ContainerStyled = styled.div`
  a {
    text-decoration: none;
    padding: 10px 25px;
    background-color: var(--primary-color);
    border-radius: 50px;
    color: var(--white-color);
    ${defaultTransition}

    &:hover {
      background-color: var(--primary-accent-color);
    }
  }
`;
