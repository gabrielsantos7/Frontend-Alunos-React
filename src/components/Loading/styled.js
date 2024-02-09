import styled, { keyframes } from 'styled-components';
import { disabledLightColor } from '../../config/colors';

const clipPathAnimation = keyframes`
  0% {
    clip-path: polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%);
  }
  12.5% {
    clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%);
  }
  25% {
    clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%);
  }
  50% {
    clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0 100%);
  }
  62.5% {
    clip-path: polygon(50% 50%, 100% 0, 100% 0, 100% 0, 100% 100%, 50% 100%, 0 100%);
  }
  75% {
    clip-path: polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0 100%);
  }
`;

const rotateScaleAnimation = keyframes`
  0% {
    transform: scaleY(1) rotate(0deg);
  }
  49.99% {
    transform: scaleY(1) rotate(135deg);
  }
  50% {
    transform: scaleY(-1) rotate(0deg);
  }
  100% {
    transform: scaleY(-1) rotate(-135deg);
  }
`;

export const Loader = styled.div`
  width: 25px;
  margin: 0 auto;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 4px solid ${disabledLightColor};
  animation: ${clipPathAnimation} 0.8s infinite linear alternate, ${rotateScaleAnimation} 1.6s infinite linear;
`;
