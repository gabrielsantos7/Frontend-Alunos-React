import styled from 'styled-components';
import { primaryColor } from '../../styles/colors';

export const Nav = styled.nav`
  background-color: ${primaryColor};
  padding: 2rem;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    color: #fff;
  }

  span {
    font-family: 'Montserrat', sans-serif;
  }
`;
