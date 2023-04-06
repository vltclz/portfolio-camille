import { css } from '@emotion/css';

export const container = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const podcast = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: auto;
  align-items: center;
  width: 70%;
  @media only screen and (max-width: 1186px) {
    width: 80%;
  }
  @media only screen and (max-width: 800px) {
    width: 85%;
  }
  @media only screen and (max-width: 650px) {
    width: 90%;
  }
`;

export const title = css`
  font-family: 'Archivo Black', sans-serif;
  font-weight: 500;
  margin: 0;
  text-align: center;
`;

export const coverContainer = css`
  position: relative;
  aspect-ratio: 1 / 1;
  width: 400px;
  @media only screen and (max-width: 800px) {
    width: 300px;
  }
  @media only screen and (max-width: 650px) {
    width: 275px;
  }
`;

export const cover = css`
  object-fit: cover;
`;

export const linksStrip = css`
  display: flex;
  gap: 8px;
`;

export const link = css`
  cursor: pointer;
`;

export const description = css`
  text-align: justify;
  p {
    margin-top: 0;
  }
`;

export const hr = css`
  border: 0;
  clear: both;
  display: block;
  width: 90%;
  background-color: lightgrey;
  height: 1px;
`;
