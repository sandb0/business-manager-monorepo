import { css } from 'styled-components';

const boxShadowEffectTransition = css`
  transition: ease-in 0.1s;
`;

const boxShadow = css`
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
`;

export const boxShadowEffect = {
  transition: boxShadowEffectTransition,
  effect: boxShadow,
};
