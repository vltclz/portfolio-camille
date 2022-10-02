import { css, keyframes } from '@emotion/css';

export const galleryContainer = css`
  display: grid;
  max-width: 800px;
  margin: auto;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;

  @media only screen and (max-width: 800px) {
    grid-gap: 16px;
  }
`;

export const photoContainer = css`
  cursor: pointer;
  position: relative;
  aspect-ratio: 1;

  :focus {
    outline: none;
  }
`;

export const photo = css`
  object-fit: cover;
`;

export const titleOverlay = css`
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  padding: 10%;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s;
  text-align: center;
  color: white;

  :hover {
    opacity: 1;
  }
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

export const loadingContainer = css`
  height: 250px;
  display: flex;
`;

export const loaderContainer = css`
  width: fit-content;
  margin: auto;
  vertical-align: center;
`;
