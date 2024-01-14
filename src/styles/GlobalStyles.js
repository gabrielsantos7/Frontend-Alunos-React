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
    padding: 10px 20px;
    border-radius: 4px;
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
  max-width: 360px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0,0,0, 0.1);
`;
