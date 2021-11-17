import { css } from '@emotion/css';

export const container = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 24px;
  align-items: center;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-row-gap: 64px;
  }
`;

export const content = css`
  display: grid;
  grid-row-gap: 24px;
  line-height: 24px;
  text-align: justify;

  > p {
    margin: 0;
  }
`;
