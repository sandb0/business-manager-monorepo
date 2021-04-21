import styled, { css } from 'styled-components';
import {
  boxShadowEffect,
  defaultTransition,
} from '../../assets/StyleSheet/Effects';

const inputStyle = css`
  width: 100%;
  padding: 10px 20px;
  border: 1px solid var(--primary-color);
  border-radius: 50px;
  background-color: var(--base-color);
  ${boxShadowEffect.transition}

  &:focus {
    ${boxShadowEffect.effect2}
  }
`;

export const ContainerStyled = styled.div`
  form.forms {
    width: 400px;
    margin: 50px auto 0 auto;

    div {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid var(--base-variant-color);

      h4 {
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 10px;
      }

      input,
      select,
      textarea {
        ${inputStyle}
      }

      textarea {
        height: 100px;
        border-radius: 6px;
        padding: 10px;
        resize: none;
      }
    }

    button {
      width: 100%;
      padding: 10px 20px;
      background-color: var(--primary-color);
      color: var(--white-color);
      border-radius: 50px;
      ${defaultTransition}

      &:hover {
        cursor: pointer;
        background-color: var(--primary-accent-color);
      }
    }
  }
`;
