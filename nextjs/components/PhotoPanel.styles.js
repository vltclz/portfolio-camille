import { css, keyframes } from '@emotion/css';

const hiddenPhotoPanel = css`
  opacity: 0;
  visibility: hidden;
`;

export const photoPanel = (showPhotoPanel) => css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: white;
  height: 100vh;
  width: 100vw;
  padding: 32px;

  opacity: 1;
  visibility: visible;
  transition: opacity 0.5s, visibility 0.5s;

  ${!showPhotoPanel && hiddenPhotoPanel}

  @media only screen and (max-width: 1186px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const grid = css`
  display: grid;
  grid-template-columns: 64px 1fr 64px 400px;
  grid-template-areas: 'left photo right desc';
  grid-column-gap: 16px;
  align-items: center;
  height: 100%;

  @media only screen and (max-width: 1186px) {
    grid-template-columns: 32px 1fr 32px;
    grid-template-rows: 160px 1fr;
    grid-template-areas:
      '. desc .'
      'left photo right';
  }
`;

const buttonIcon = css`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  :disabled {
    visibility: hidden;
  }

  :focus {
    outline: none;
  }
`;

export const leftArrow = css`
  ${buttonIcon}
  grid-area: left;
`;

export const rightArrow = css`
  ${buttonIcon}
  grid-area: right;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(359deg);
  }
  `;

export const animated = css`
  animation: ${rotate} 1s linear infinite;
`;

const loadingContainer = css`
  width: fit-content;
  height: fit-content;
  justify-self: center;
`;

export const photoContainer = (isLoading) => css`
  height: 100%;
  position: relative;
  align-self: center;
  grid-area: photo;

  ${isLoading && loadingContainer}
`;

export const photo = (isLoading) => css`
  object-fit: contain;
  visibility: ${isLoading ? 'hidden' : 'visible'};
`;

export const descSection = css`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: flex-start;
  grid-column-gap: 16px;
  align-self: flex-start;
  grid-area: desc;
`;

export const closeButton = css`
  ${buttonIcon}

  width: fit-content;
  justify-self: end;
`;

export const title = css`
  margin: 0;
  margin-bottom: 8px;
`;
