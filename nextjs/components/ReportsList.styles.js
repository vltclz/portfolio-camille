import { css } from "@emotion/css";

export const container = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const title = css`
  grid-area: title;
  font-family: "Archivo Black", sans-serif;
  font-weight: 500;
  margin: 0;
`;

export const show = css`
  font-family: "Archivo", sans-serif;
  opacity: 0.9;
  display: block;
`;

export const reportGrid = (hasLogo) => css`
  display: grid;
  grid-column-gap: 24px;
  grid-row-gap: 8px;
  grid-template-columns: 40px 1fr;
  grid-template-areas:
    "cover cover"
    "${hasLogo ? 'logo' : 'title'} title"
    "description description";
  height: fit-content;
`;

export const coverContainer = css`
  grid-area: cover;
  width: 100%;
  aspect-ratio: 16 / 9;
  position: relative;
`;

export const coverOverlay = css`
  background-color: black;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.7;
  transition: opacity 0.3s;
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;

  :hover {
    opacity: 0;
  }
`;

export const logoContainer = css`
  grid-area: logo;
  position: relative;
  height: 40px;
`;

export const cover = css`
  object-fit: cover;
`;

export const logo = css`
  object-fit: contain;
`;

export const publication = css`
  opacity: 0.5;
  font-size: 12px;
`;

export const description = css`
  grid-area: description;
  text-align: justify;

  > p {
    margin-top: 4px;
    margin-bottom: 0;
  }
`;
