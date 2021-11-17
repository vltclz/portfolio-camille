import { css } from '@emotion/css';

export const container = css`
  display: grid;
  grid-auto-flow: column;
  max-width: 400px;
  margin: auto;

  @media only screen and (max-width: 400px) {
    grid-auto-flow: row;
    grid-row-gap: 32px;
    text-align: center;
  }
`;

export const legend = css`
  font-family: 'Archivo Black', sans-serif;
  margin-bottom: 8px;
`;

export const alignRight = css`
  text-align: right;

  @media only screen and (max-width: 400px) {
    text-align: center;
  }
`;
