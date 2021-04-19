import styled, { css } from 'styled-components';

const textOverflowEllipses = css`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const ContainerStyled = styled.div`
  width: calc(25% - 10px);
  margin: 10px 10px 0 0;
  border: 1px solid var(--base-variant-color);
  border-radius: 6px;
  color: var(--primary-color);

  a {
    display: block;
    height: 150px;
    padding: 20px;
  }

  &:hover {
    background-color: var(--base-variant-color);
  }

  &:nth-child(4n),
  &:last-child {
    margin-right: 0;
  }

  h3 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
    color: var(--primary-color);
    ${textOverflowEllipses}
  }

  p {
    font-size: 12px;
    font-weight: 400;
    color: var(--primary-color);
    ${textOverflowEllipses}
  }
`;
