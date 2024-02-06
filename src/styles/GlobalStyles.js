import styled, { createGlobalStyle } from 'styled-components';
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
  font-size: 1rem;

  &:focus {
    border-bottom-color: ${colors.primaryColor};

    &:focus + label {
      transform: translateY(-1.5rem) scale(0.9);
      color: ${colors.primaryColor};
    }
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 0.5rem;
  bottom: 0.75rem;
  color: ${colors.disabledDarkColor};
  font-size: 1.25rem;
  transition: transform 0.3s ease, color 0.3s ease;
  transform-origin: left bottom;
`;

export const Button = styled.button`
  cursor: pointer;
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
`;
