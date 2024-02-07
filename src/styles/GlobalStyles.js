import styled, { createGlobalStyle, keyframes } from 'styled-components';
import * as colors from '../config/colors';

export default createGlobalStyle`
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: sans-serif;
    background-color: ${colors.primaryDarkColor};
    color: ${colors.primaryDarkColor};
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none
  }

  html, body, #root {
    height: 100vh;
  }

  a {
    text-decoration: none;
    color: ${colors.primaryColor};
  }

  ul {
    list-style: none;
  }
`;

export const Container = styled.section`
  max-width: 48rem;
  background: #fff;
  margin: 3rem auto;
  padding: 3rem;
  border-radius: 0.4rem;
  box-shadow: 0 0 1rem rgba(0,0,0, 0.1);
`;

export const Title = styled.h1`
  color: ${colors.primaryColor}
`;

export const FloatingLabel = styled.div`
  position: relative;
  margin-bottom: 3.5rem;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid ${colors.disabledLightColor};
  outline: none;
  transition: border-bottom-color 0.3s ease;
  font-size: 1.5rem;

  &:focus {
    border-bottom-color: ${colors.primaryColor};

    & + label {
      transform: translateY(-1.75rem) scale(0.9);
      color: ${colors.primaryColor};
    }
  }

  &:not(:placeholder-shown) + label {
    transform: translateY(-1.75rem) scale(0.9);
    color: ${colors.primaryColor};
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 0.5rem;
  bottom: 0.75rem;
  color: ${colors.disabledDarkColor};
  font-size: 1.25rem;
  transition: transform 0.3s ease, color 0.3s ease;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  background-color: ${colors.primaryColor};
  border: none;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 0.4rem;
  font-weight: 700;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(80%);
  }

  &:disabled {
    background-color: ${colors.disabledLightColor};
    color: ${colors.disabledDarkColor};
    cursor: not-allowed;

    &:hover {
      filter: none;
    }
  }
`;

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
  border: 4px solid ${colors.disabledLightColor};
  animation: ${clipPathAnimation} 0.8s infinite linear alternate, ${rotateScaleAnimation} 1.6s infinite linear;
`;
