import styled, { createGlobalStyle } from 'styled-components';
import * as colors from './colors';

export default createGlobalStyle`
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
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
  max-width: 60rem;
  background: #fff;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 0.4rem;
  box-shadow: 0 0 1rem rgba(0,0,0, 0.1);
`;

export const Title = styled.h1`
  color: ${colors.primaryColor};
  font-size: 1.8rem;
  text-align: ${(props) => (props.$center ? 'center' : 'left')};
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
`;

export const Subtitle = styled.h3`
  color: ${colors.primaryColor};
  font-size: 1.6rem;
  text-align: ${(props) => (props.$center ? 'center' : 'left')};
  font-family: 'Montserrat', sans-serif;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  outline: none;
  border: 2px solid ${colors.disabledLightColor};
  transition: border-color 0.3s ease;
  font-size: 1.5rem;
  border-radius: 5px;

  &:focus {
    border-color: ${colors.primaryColor};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  width: 52rem;
  gap: 1rem;
`;

export const FloatingLabel = styled.div`
  position: relative;
  margin-bottom: 2rem;
  width: 100%;
`;

export const FloatingInput = styled.input`
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
  font-size: 1.4rem;
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
  font-size: 1.7rem;
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

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => (props.$justify ? props.$justify : 'center')};
  align-items: center;
  margin: ${(props) => (props.spacing ? props.spacing : '0')}rem 0;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
