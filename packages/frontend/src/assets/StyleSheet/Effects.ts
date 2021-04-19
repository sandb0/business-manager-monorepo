import { css } from 'styled-components';

export const defaultTransition = css`
  transition: ease-in 0.1s;
`;

const boxShadowEffectTransition = defaultTransition;

const boxShadow1 = css`
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
`;

const boxShadow2 = css`
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
`;

export const boxShadowEffect = {
  transition: boxShadowEffectTransition,
  effect1: boxShadow1,
  effect2: boxShadow2,
};
