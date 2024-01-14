import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor, primaryDarkColor } from '../config/colors';

export default createGlobalStyle`
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: sans-serif;
    background-color: ${primaryDarkColor};
    color: ${primaryDarkColor};
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

  button {
    cursor: pointer;
    background-color: ${primaryColor};
    border: none;
    color: #fff;
    padding: 1rem 2rem;
    border-radius: 0.4rem;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: ${primaryColor};
  }

  ul {
    list-style: none;
  }
`;

export const Container = styled.section`
  max-width: 36rem;
  background: #fff;
  margin: 3rem auto;
  padding: 3rem;
  border-radius: 0.4rem;
  box-shadow: 0 0 1rem rgba(0,0,0, 0.1);
`;
