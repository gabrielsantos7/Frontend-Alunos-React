import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../config/colors';

export const Form = styled.form`
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  color: ${colors.disabledDarkColor};

  input {
    display: none;
  }

  label {
    width: 18rem;
    height: 18rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.disabledLightColor};
    border-radius: 50%;
    border: 5px dashed ${colors.disabledDarkColor};
    margin: 3rem auto;
    overflow: hidden;
    transition: all 0.2s ease-in-out;

    &:hover {
      border-color: ${colors.primaryColor};
    }

    img {
      width: 18rem;
      height: 18rem;
    }
  }
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  gap: 2rem;
`;

export const ButtonLink = styled(Link)`
  width: 100%;
  background-color: ${colors.disabledLightColor};
  color: ${colors.disabledDarkColor};
  padding: 1rem 2rem;
  border-radius: 5px;
`;

export const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 3rem 0;
  img {
    height: 12rem;
    width: auto;

    &:first-child {
      border: 2px solid ${colors.primaryColor};
    }
  }

`;
