import { css } from '@emotion/css';

export const container = css`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;

  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    grid-row-gap: 24px;
  }
`;

export const logoContainer = css`
  display: grid;
  width: fit-content;
  grid-auto-flow: column;
  grid-column-gap: 16px;

  @media only screen and (max-width: 650px) {
    margin: auto;
  }
`;

export const navList = css`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 16px;

  list-style: none;
  padding: 0;
  margin: 0;
  width: fit-content;

  font-family: 'Archivo', sans-serif;
  font-size: 16px;

  @media only screen and (max-width: 650px) {
    margin: auto;
  }
`;

export const navElement = css`
  position: relative;
`;

export const activeNavElement = css`
  ::before {
    content: '';
    background-color: black;
    opacity: 0.8;
    display: block;
    position: absolute;
    bottom: -10px;
    width: 24px;
    height: 2px;
  }
`;

export const nameLogo = css`
  font-family: 'Archivo Black', sans-serif;
  text-align: left;
  line-height: 14px;
  cursor: pointer;
`;

export const socials = css`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 8px;
  justify-self: self-start;
  list-style: none;
  width: fit-content;
  padding: 0;
  margin: 0;
`;
