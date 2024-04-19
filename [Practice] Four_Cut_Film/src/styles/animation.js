import { keyframes } from "styled-components";

export const clicked = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(-10%)
  }
  100%{
    transform: scale(0);
  }
`;
